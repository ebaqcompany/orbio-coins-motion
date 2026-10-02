# Orbio Coins: editable motion loop

A seamless 1920×1080 loop for Orbio. Two scenes (Void → Marble), a headline that swipes between them, four real 3D CREDIT coins tossed in and dropped out on the cut, and a Vein button.

`renders/orbio-coins_preview.mp4` is the finished render.

It's plain HTML. Everything you'd want to change (headlines, button labels, colors, timing, coin positions, number of scenes) lives in **one file: `config.js`**.

## Run it

It needs a local web server (the 3D coin can't load from `file://`):

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

- `#still`: a single frozen frame (http://localhost:8000/#still)
- `?mode=spin`: the coins stay in place and spin
- Space pauses / resumes

## Edit it with Claude

Open this folder in Claude Code (or paste `config.js` into Claude) and ask in plain words, for example:

- "Change the second scene's headline to EARN IT / TRADE IT / SPEND IT."
- "Add a third scene on Celeste with the button 'LAUNCH AN AGENT'."
- "Make each scene 5 seconds and the swipe a bit slower."
- "Move the top-left coin lower."

`CLAUDE.md` tells Claude the rules. `DESIGN.md` is the Orbio brand guide, which Claude follows for colors and type.

## Export an MP4

Needs Node 22+, Google Chrome and ffmpeg (`brew install ffmpeg`). With the server running:

```bash
node tools/export_loop.mjs "http://localhost:8000/?render" 1920 1080 60 2
```

The arguments are width, height, fps and number of loops. It renders every frame exactly (no screen recording, so no dropped frames) and writes to `renders/`. On Windows/Linux set `CHROME=/path/to/chrome` first.

## Fonts

See `fonts/README.md`. The headline font (ABC Arizona Flare) is licensed separately and isn't in this repo.

## Brand rules in short

Black type on orange, blue and brass; Vein orange as a small accent; the CREDIT coin is never recolored or altered. Full guide: `DESIGN.md`.

Design and motion: Ebaqdesign.
