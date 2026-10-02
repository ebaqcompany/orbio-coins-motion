# Instructions for Claude

This repo is a single looping motion graphic for **Orbio**. The person asking is on the Orbio team and wants to change the animation.

## Where to edit
- **Change `config.js` only** for text, colors, timing, scenes, the button and coin placement. Each field is commented.
- Touch `index.html` only if they ask for new behaviour that config can't express. Keep it deterministic: everything is computed from the time `t` inside `apply(t)` (no timers, no CSS transitions), so `?render` exports stay frame-exact and the loop stays seamless.
- Never edit `coin.glb`.

## Brand rules (from DESIGN.md, which you should read for anything visual)
- Colors: Void `#0B0B0C`, Marble `#FFFAEE`, Stone `#DDD5C6`, Brass `#E6BC7A`, Celeste `#8FA3BF`, Vein `#FF893F` (accent only); secondary Rose `#B0675F`, Iris `#976F92`, Sage `#7F8A68`.
- **Black type (`#0B0B0C` / `#14120E`) on Vein, Celeste, Brass and the secondaries. Never white type on color.** Marble type on Void.
- Headlines: ALL CAPS, Arizona Flare, −3% tracking, 3 short lines that roughly fill the width.
- Button labels: ALL CAPS, short, no arrows.
- The CREDIT coin is a locked asset: you may move, resize and re-time it, never recolor or restyle it.
- No drop shadows, no gradients on type, no neon.
- Voice: calm and concrete. Avoid "routing", "best price", "yield/APY/returns", "exclusive", "all models".

## Fitting a headline
At 333 px, about 10–11 capitals fill 1920 px. For a longer line, either lower `headline.fontSize` (and space `capTops` evenly) or let it bleed off the edge on purpose with `align: "left"` and a negative `x`. After editing, reload and check `#still`.

## Timing
- Loop length = `timing.sceneMs × scenes.length`.
- `coins[].turns` are whole spins per full loop. Keep them whole numbers, or the loop will jump.

## Checking and exporting
- Serve: `python3 -m http.server 8000`, open `http://localhost:8000/#still` for a still frame or `/` for the live loop.
- Export: `node tools/export_loop.mjs "http://localhost:8000/?render" 1920 1080 60 2` → `renders/`.
