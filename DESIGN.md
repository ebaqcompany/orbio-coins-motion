# ORBIO — Design guide

Edition 2026-10-02 · by Ebaqdesign. This is the brand-evolution system, the source of truth for making on-brand graphics. It works for people and for AI tools. Paste this file into Claude (or any assistant) and ask it to follow it.

When something here conflicts with the older kit at orbio.so/brand, **this file wins**.

---

## 1. The idea in one line

**Greek marble meets machine.** Classical sculpture and Renaissance painting carry the soul; a fine 0/1 bit grid and mono labels carry the tech. Calm, confident, expensive-looking. Never loud.

---

## 2. Brand architecture (branded house)

- **ORBIO** is the master brand. Everything is "Orbio + descriptor".
- Sub-brands are **descriptor lockups**, not separate logos:
  - **ORBIO LAUNCHPAD**: Celeste
  - **ORBIO MARKETPLACE**: Brass
  - **ORBIO INCOGNITO**: Iris (not live yet, always framed as "coming soon")
- **CREDIT** is the underlying tech, like a chip inside a product. Its asterisk and gold coin are **locked**: never recolor, outline, crop or add effects. Don't use them as a top-level brand.
- **$ORBIO** is the token name.

---

## 3. Logo

- **Lockup:** the 3D marble orb + the all-caps serif wordmark **ORBIO** (Arizona Flare, −6% tracking).
- **Descriptor lockup:** the descriptor sits under the wordmark, right-aligned, in Geist Mono caps (+20%), e.g. `LAUNCHPAD`.
- **Never** redraw, recolor, stretch, rotate or add effects to the orb.
- **Clear space:** ¼ of the orb's height on every side. **Minimum size:** 28 px orb.
- **Size on web:** 48 px. **Size on social:** 64 px.
- Bottom-left corner is the default logo spot on social graphics.

---

## 4. Color

Define every color as a token or variable. Never hard-code the accent.

### Primary
| Name | HEX | Role |
|---|---|---|
| **Void** | `#0B0B0C` | Dark mode field, ink |
| **Marble** | `#FFFAEE` | Light mode field, cards |
| **Stone** | `#DDD5C6` | Backdrop, paper |
| **Brass** | `#E6BC7A` | Support · Marketplace |
| **Celeste** | `#8FA3BF` | Support · Launchpad |
| **Vein** | `#FF893F` | **Accent**: 5–10% of a surface, max |

Ink for type on light fields: `#14120E`.

### Secondary (use sparingly, mostly campaigns)
| Name | HEX | Use |
|---|---|---|
| **Rose** | `#B0675F` | Affiliates |
| **Iris** | `#976F92` | Incognito |
| **Sage** | `#7F8A68` | Points |

### Color rules
- **Black type on every color**: Vein, Celeste, Brass, Rose, Iris and Sage all take Void/ink type. **Never white type on color.**
- Marble type on Void; ink on Marble and Stone.
- **Vein is an accent**: one headline marker, one button, one highlight. Never a whole page on a website.
- Color by product: home = primary palette · Launchpad = Celeste · Marketplace = Brass · Incognito = Iris.
- **No neon/lime. No drop shadows. No gradients on type.**

---

## 5. Typography: three faces, one job each

| Role | Face | Case | Tracking |
|---|---|---|---|
| **Display** (headlines) | ABC Arizona Flare Regular | ALL CAPS (H1–H3), sentence case (H4) | **−3%** |
| **Labels** (eyebrows, menus, buttons, descriptors, chips, table keys) | Geist Mono Medium | ALL CAPS | **+20%** |
| **Data** (prices, hex, code) | Geist Mono Regular | as typed | 0% |
| **Body** | Geist Regular (Medium for emphasis) | Sentence case | 0%, leading 145% |

**Scale**
- Display: H1 120/108 · H2 80/72 · H3 56/50 · H4 40/44
- Labels: 13 (UI) · 20 (large, descriptors)
- Body: 20 · 16 · 13

**Rules**
- Arizona is **never** body copy.
- Headlines: **2 lines at one size**, with an optional **marker** on one word (a Vein box behind it, black type).
- Paragraphs: 2 lines of roughly equal length.
- Buttons: Geist Mono caps, filled, **no arrows**. Hover on menu items changes the **text** color, never a fill.

Fonts: Arizona Flare from Dinamo (licensed font), Geist + Geist Mono free from Vercel / Google Fonts.

---

## 6. Visual language: three layers

1. **Marble sculptures:** the lead, ~70–80% of the visual weight. Human figures only.
2. **Renaissance paintings:** secondary: celestial skies, muses, Atlas, the Hours.
3. **Bits:** a fine 0/1 grid and hairlines, low opacity, for depth.

**One dominant visual per surface.** Mix the others in at 10–20% max.

**Never:** animals (owl, horse, Pegasus) · halftone dots · custom icons · heavy 3D beyond the logo orb and the CREDIT coin · "natural/organic" looks · copy over busy artwork.

### Marbles
- Use the **Marble library** (transparent PNGs). Close crops, cropped by the bottom edge or standing on it.
- Mirror a figure if needed so it **faces the text**.
- On web heroes the figure sits right, about 4% of the width in from the edge; text sits bottom-left.
- **Hero figures are reserved for the website:** the philosopher (Home), Apollo (Launchpad), Hypatia (Marketplace), the veiled woman (Incognito). Social uses the rest of the cast (Hermes, Tyche, Nike, Prometheus, Icarus, Athena, Astraea, Atlas…).

### Paintings
- Use the **Painting library**. Crop **from the top** so heads, orbs and skies stay in frame.
- A painting can fill a whole post, sit in an arch window, or take the top ~57% of a portrait card with a Marble text panel below.

### Bits (the 0/1 grid)
- 20 px cells on web (15 px inside cards), digits in Geist Mono at **low opacity of the ground's ink** (about 7–24%). Never in the accent color.
- **Only web heroes get the full-width grid.** Everywhere else bits appear as a **small scattered snippet** that leans on a figure, an arch or a letter: dense where it touches, fading out where it ends.
- Never put bits behind copy.
- Don't put lines or bits inside graphics that will sit on the website; the page already supplies them.

### Construction hairlines
Solid, edge-to-edge, ink at 15%: one margin line on each side (~28 px on social, ~30 px on cards), plus a line at each block edge (under the headline, above the logo). Type sits about 12 px inside the lines. **No dashed guides, no dimension brackets.**

---

## 7. Layout

- **Module:** 40 px (cells of 20 px). Snap everything to it.
- **Margins:** 2 modules (80 px), or 60 px on web heroes. Gutters: 1 module.
- Headline and paragraph frames: one grid row apart, sharing one left edge.
- Web heroes: text anchored **bottom-left, 60 px from the bottom**; the figure and bits own the top.

### Formats
| Use | Size |
|---|---|
| Landscape / X post / slide | 1920×1080 (16:9) |
| Feed portrait | 1080×1350 (4:5) |
| Story / Reel | 1080×1920 (9:16) |
| X header | 1500×500 (3:1) |

No square (1:1) posts.

---

## 8. Social graphics: how to make one

1. **Pick one hero:** a marble figure *or* a painting *or* a big number. Not two.
2. **Pick a field:** a full color (Vein, Celeste, Brass, Rose, Iris, Sage, Stone or Void), or the painting itself.
3. **Headline** in Arizona caps, −3%, black type on color (Marble on Void). Big numbers are welcome (e.g. a 300 px "117.5M").
4. **Labels** in Geist Mono caps +20%; values in Geist.
5. **Logo** bottom-left, 64 px, ~60 px from the bottom.
6. Optional: one Vein pill (e.g. APPLY NOW), construction hairlines, a small bit snippet.
7. Check: one dominant visual? black type on color? Vein ≤ 10%? no shadows? copy clear of busy art?

Social should **not** look like the website heroes: be more colorful and more varied, and use the social cast, not the hero figures.

---

## 9. Motion

- **Easing:** in-out `cubic-bezier(0.77, 0, 0.175, 1)` (the brand move) · ease-out `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Durations:** UI 120 / 160 / 200 / 450 ms. Scene moves ~0.9–1 s.
- Seamless loops, cut on the motion. Cubic, not springy.
- The logo orb spins only on hover (4 s per turn).
- Always provide a still, reduced-motion state; never hide essential info in animation.

---

## 10. Voice

Humble, ship-fast, confident. Short, concrete sentences. Not hypey.

**Taglines:** "Orbio tokenizes AI inference." · "One key. Every model. Below list." · "Fees become cheaper AI." · "Earn it. Trade it. Spend it." · "Agents can pay for their own intelligence."

**Say:** tokenized inference · 1 CREDIT = $1 of AI usage · one key · every major model · below list price · open order book · stakers, buyers and agents · settled onchain · zero data retention.

**Don't say:** routing / best price · "the compute market" (as a present claim) · exclusive / waitlist · yield, APY, returns, passive income · stablecoin (for CREDIT) · "always cheaper" / "35% off" as a general claim · "all models" / "any model" · lowercase "credits" when you mean the CREDIT token.

---

## 11. Quick checklist

- [ ] One dominant visual
- [ ] Black type on every color
- [ ] Vein ≤ 10%
- [ ] Arizona caps −3% · Geist Mono caps +20% · Geist body
- [ ] On the 40 px module, logo bottom-left
- [ ] No animals, halftone, neon, icons, shadows or dashed guides
- [ ] Real copy, calm tone
