// Frame-exact MP4 export of a looping HTML animation (headless Chrome over CDP + ffmpeg).
// The page must expose `window.seek(ms)` (Promise, resolves once the frame is painted) and `window.LOOP_MS`, i.e. a `?render`
// mode (see index.html). One loop is captured frame by frame (no real-time recording, so
// no dropped frames) by WORKERS parallel headless Chromes, encoded, then repeated N times by stream copy (an exact repeat).
// Renders go to renders/ by default. Set CHROME=/path/to/chrome on Windows/Linux.
//
//   node tools/export_loop.mjs <url> <width> <height> <fps> <repeats> [out.mp4]
//   node tools/export_loop.mjs "http://localhost:8000/?render" 1920 1080 60 2
import { spawn, spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";

const [, , url, W, H, FPS = "60", REPEATS = "1", outArg] = process.argv;
if (!url) { console.error("usage: export_loop.mjs <url> <w> <h> <fps> <repeats> [out.mp4]"); process.exit(1); }
const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "..");
const slug = new URL(url).pathname.replace(/\/(index\.html)?$/, "").split("/").filter(Boolean).pop() || "coins";
const out = outArg || join(ROOT, "renders", `orbio_${slug}_loop-x${REPEATS}_${W}x${H}_${FPS}fps.mp4`);
const WORKERS = Math.max(1, +(process.env.WORKERS || 5));
const CH = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const work = mkdtempSync(join(tmpdir(), "loop-export-")), frames = join(work, "frames"); mkdirSync(frames);
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function openPage(k) {
  const port = 9300 + Math.floor(Math.random() * 600) + k;
  const chrome = spawn(CH, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${join(work, "prof" + k)}`, "--hide-scrollbars",
    "--no-first-run", "--force-color-profile=srgb", `--window-size=${W},${H}`, "about:blank"], { stdio: "ignore" });
  let targets = [];
  for (let i = 0; i < 80 && !targets.length; i++) { try { targets = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).filter(t => t.type === "page"); } catch {} if (!targets.length) await sleep(200); }
  const ws = new WebSocket(targets[0].webSocketDebuggerUrl); await new Promise(r => (ws.onopen = r));
  let id = 0; const pend = new Map();
  ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)) { pend.get(m.id)(m.result || m.error); pend.delete(m.id); } };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
  const evalJS = async expr => { const r = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result && r.result.value; };
  await send("Emulation.setDeviceMetricsOverride", { width: +W, height: +H, deviceScaleFactor: 1, mobile: false });
  await send("Page.enable");
  // every image must be decoded before a single frame is captured; reload until it is (parallel loads can drop requests)
  const READY = "document.fonts.ready.then(() => Promise.all([...document.images].map(i => i.decode().then(() => true, () => false))))" +
                ".then(r => r.every(Boolean) && [...document.images].every(i => i.complete && i.naturalWidth > 0))";
  for (let attempt = 1; ; attempt++) {
    await send("Page.navigate", { url });
    for (let i = 0; i < 120; i++) { await sleep(150); try { if (await evalJS("typeof window.seek === 'function' && document.readyState === 'complete'")) break; } catch {} }
    if (await evalJS(READY)) break;
    if (attempt === 6) throw new Error(`worker ${k}: images failed to load after ${attempt} attempts`);
    console.log(`worker ${k}: images incomplete, reloading (${attempt})`); await sleep(400 * attempt);
  }
  return { send, evalJS, close: () => { ws.close(); chrome.kill(); } };
}

const probe = await openPage(0);
const loopMs = await probe.evalJS("window.LOOP_MS");
const n = Math.round(loopMs / 1000 * +FPS);
console.log(`${slug}: loop ${loopMs} ms → ${n} frames @ ${FPS} fps, ${W}×${H}, ${WORKERS} workers`);
let done = 0;
async function renderRange(page, a, b) {
  for (let f = a; f < b; f++) {
    await page.evalJS(`window.seek(${(f * 1000 / +FPS).toFixed(4)})`);
    const r = await page.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    writeFileSync(join(frames, `f_${String(f).padStart(5, "0")}.png`), Buffer.from(r.data, "base64"));
    if (++done % 120 === 0) process.stdout.write(`${done}/${n} `);
  }
  page.close();
}
const per = Math.ceil(n / WORKERS), jobs = [];
for (let k = 0; k < WORKERS; k++) {
  const a = k * per, b = Math.min(n, a + per); if (a >= b) break;
  jobs.push((k === 0 ? Promise.resolve(probe) : sleep(600 * k).then(() => openPage(k))).then(p => renderRange(p, a, b)));   // staggered starts
}
await Promise.all(jobs);
console.log("\nencoding…");
mkdirSync(dirname(out), { recursive: true });
const one = join(work, "one.mp4");
const enc = spawnSync("ffmpeg", ["-v", "error", "-y", "-framerate", FPS, "-i", join(frames, "f_%05d.png"),
  "-c:v", "libx264", "-preset", "slow", "-crf", "16", "-pix_fmt", "yuv420p", "-profile:v", "high", "-movflags", "+faststart", one], { stdio: "inherit" });
if (enc.status) process.exit(enc.status);
const rep = spawnSync("ffmpeg", ["-v", "error", "-y", "-stream_loop", String(+REPEATS - 1), "-i", one, "-c", "copy", "-movflags", "+faststart", out], { stdio: "inherit" });
if (rep.status) process.exit(rep.status);
rmSync(work, { recursive: true, force: true });
console.log("wrote", out);
process.exit(0);
