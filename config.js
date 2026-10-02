// ─────────────────────────────────────────────────────────────────────────────
// ORBIO COINS: everything you can change lives in this file.
// Save, then reload the browser tab. Colors are the ORBIO palette (see DESIGN.md).
//   Void #0B0B0C · Marble #FFFAEE · Stone #DDD5C6 · Brass #E6BC7A · Celeste #8FA3BF · Vein #FF893F
// Rule: black type on Vein / Celeste / Brass, never white.
// ─────────────────────────────────────────────────────────────────────────────
window.ORBIO = {

  // Canvas size in px. The animation is laid out for 1920×1080 (16:9).
  width: 1920,
  height: 1080,

  // Headline type: ABC Arizona Flare, all caps, −3% tracking (brand rule).
  headline: {
    fontSize: 333,              // px
    tracking: -0.03,            // em (−3%)
    capTops: [87.1, 420.1, 753.1], // y of the top of the capitals, one per line
  },

  // One entry per scene. The animation cuts to the next scene every `timing.sceneMs`
  // and loops back to the first. Add, remove or reorder scenes freely.
  // Each line: text, x = horizontal position, align = "left" (x is the left edge)
  // or "center" (x is the centre). Lines may bleed off the edges on purpose.
  scenes: [
    {
      background: "#0B0B0C",    // Void
      ink:        "#FFFAEE",    // Marble type
      pill:       "#FF893F",    // Vein button
      pillInk:    "#14120E",
      pillLabel:  "SPEND SMART",
      lines: [
        { text: "INTELLIGENT",  x: -24.5,  align: "left" },
        { text: "SPENDING",     x: 184.4,  align: "left" },
        { text: "ON AI TOKENS", x: -115.8, align: "left" },
      ],
    },
    {
      background: "#FFFAEE",    // Marble
      ink:        "#0B0B0C",    // Void type
      pill:       "#FF893F",
      pillInk:    "#14120E",
      pillLabel:  "VISIT ORBIO.SO",
      lines: [
        { text: "ONE KEY",     x: 960, align: "center" },
        { text: "EVERY MODEL", x: 960, align: "center" },
        { text: "BELOW LIST",  x: 960, align: "center" },
      ],
    },
  ],

  // The pill (button) sits centred on this point.
  pillCenter: { x: 965, y: 540 },

  // Timing in milliseconds.
  timing: {
    sceneMs: 4000,        // length of one scene; the full loop = sceneMs × number of scenes
    outMs: 380,           // headline whips out during the last outMs of a scene
    outPx: 700,           // ...travelling this far
    inMs: 620,            // new headline slides in over inMs (line 1)...
    inStepMs: 70,         // ...each next line takes this much longer (a cascade)
    tossMs: 1100,         // coins fly up into place
    tossStepMs: 50,       // delay between coins
    dropBeforeEndMs: 650, // coins start falling this long before the cut
    pillInMs: 650,        // pill pops in at this time
    pillOutBeforeEndMs: 620,
    motionBlur: true,     // horizontal blur while lines move fast
  },

  // "toss" = coins fly in and drop out each scene · "spin" = coins stay put and spin
  mode: "toss",

  // The four CREDIT coins (the real coin.glb). rect = [left, top, right, bottom] in px,
  // pose = starting rotation in radians [x, y, z], turns = whole spins per full loop (minus = other way).
  // The coin itself is a locked brand asset: move, size and spin it, never recolor it.
  coins: [
    { pose: [0, 0.55, 0],         rect: [417.5, -44.3, 775.4, 246.1],    turns: 6 },
    { pose: [0.35, -0.55, 0],     rect: [1273.4, 220.8, 1530.5, 525],    turns: -7 },
    { pose: [-0.55, -1.15, 0.35], rect: [1125.7, 793.7, 1367.7, 1183.3], turns: 6 },
    { pose: [-0.35, 0.95, -0.45], rect: [268, 603, 602.9, 810],          turns: -5 },
  ],
};
