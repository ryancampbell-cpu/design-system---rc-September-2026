---
name: h1-design
description: Use this skill to generate well-branded interfaces and assets for H1 (h1.co, the healthcare-data company), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, then explore the other available files:

- `styles.css` and `tokens/*.css` for CSS custom properties consumers should link.
- `assets/` for logos, fonts and brand illustration marks.
- `components/` for reusable React primitives (`.jsx` + `.d.ts` + `.prompt.md`).
- `ui_kits/brand-hub/` for a full recreation of the H1 Brand Hub landing.
- `guidelines/` for foundation specimen cards.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of this folder and produce static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with the H1 brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask questions (audience, tone, length, product surface — H1 Discovery, GO, Trials, Brand Hub, etc.), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Core rules to keep in mind:

- Sharp corners on ALL UI. 12 px only on photography. 100 px only on pills / radios.
- One or two saturated fields per view. Plum is an accent, never a large field.
- Headings render at weight 400 — the faces do the work.
- Hover = opacity 0.8 across 0.25 s on `cubic-bezier(0.4, 0, 0.2, 1)`. No spring, no bounce.
- Never emoji. Never inline-SVG icons for UI. Use `<Icon>` with masked PNGs, or the shipped illustration marks.
- Never fabricate UI for H1 commercial products (Discovery, GO, Trials) — their source is not in this kit.
