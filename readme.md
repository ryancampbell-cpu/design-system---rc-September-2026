# H1 Design System

The H1 design system — an editorial, sharp-cornered brand kit for the healthcare-data company **H1** (h1.co). H1 aggregates publications, trials, claims, referrals and affiliations into a single source of truth on healthcare professionals; its brand is quiet, professional, and print-inflected.

This project is the design system's source. An automated compiler reads it on every save and emits `_ds_bundle.js`, `_ds_manifest.json` and `_adherence.oxlintrc.json` for downstream projects to consume.

## Sources

Everything here was extracted from the single artifact the user attached:

- **GitHub · [ryancampbell-cpu/h1-design-system](https://github.com/ryancampbell-cpu/h1-design-system)** — a bundled standalone `H1-Brand-Kit-standalone.html`. The repo contains no additional pages, source folders or Figma export; a follow-up sync should pull in Figma files, an in-app codebase, or additional product surfaces if those become available.
- Brand values published on the H1 Brand Hub at **brand.h1.co** (referenced by the artifact).

If you can point at H1's Figma file, an app codebase (h1insights.com surfaces, Discovery, HCP profiles), or a slide deck template, we can extend the kit with real UI kits for those surfaces — the current UI kit only covers the Brand Hub.

## Products represented

- **H1 Brand Hub** — the internal brand-guidelines site the source artifact recreates. All layout, imagery and copy in `ui_kits/brand-hub/` come verbatim from that artifact.

The commercial H1 products (Discovery, GO, Trials) are **not** represented — their source was not provided. Do not fabricate UI for them; ask for a Figma or codebase link first.

## Content fundamentals

- **Voice** — professional, warm, plain-spoken. Second person ("you", "your teams"). Sentences are short, declarative, active. Copy explains and directs, rarely sells.
- **Casing** — Title Case for section headings; sentence case for buttons ("Browse HCPs", not "BROWSE HCPS") and eyebrow micro-copy is CAPS-tracked (letter-spacing 0.06em).
- **Register** — no exclamation, no emoji, no slang. Numbers and product names appear as themselves ("10M+ HCPs", "Clinical trials"). Data-heavy phrases like "publications, trials, claims and affiliations" are the brand's own vocabulary.
- **Examples**
    - Hero: *"Welcome to the H1 Brand Hub."*
    - Body: *"This site serves as a resource to help you navigate H1 brand standards and expectations as we become a more unified organization."*
    - Card: *"Publications, trials, claims and affiliations resolved to one profile."*

## Visual foundations

- **Color** — Sapphire `#064997` (primary), Plum `#8F1752` (secondary, accent-only), Medium Gray `#636D7B` (tertiary). Backgrounds default to white or white smoke `#F4F4F4`; sapphire carries at most one or two full-bleed fields per view. Ramps are 9 steps for both blue and plum, 9 for neutrals. No published semantic palette — success and error are derived from the blue and plum ramps.
- **Typography** — Display / UI = **Questrial** (open-source stand-in for the commercial **Gilroy**); body = **GT Sectra Book**; editorial serif / italic = **GT Sectra**. All headings render at weight 400. Type scale 12 / 14 / 16 / 18 / 20 / 36 / 38 / 62 px.
- **Spacing** — 11-step named scale (tiny 4 → xxhuge 160 px). Layout is an 80 rem container with 60 px page padding.
- **Backgrounds** — flat color first (white, white smoke, sapphire). One overlay-blended brand photograph in the hero. No gradients, no textures, no repeating patterns.
- **Animation** — a single `cubic-bezier(0.4, 0, 0.2, 1)` ease, base duration 0.25 s. Hover = opacity 0.8. No spring, no bounce, no scale on hover.
- **Hover** — opacity 0.8 for links, buttons and cards. Buttons do not change background on hover; the whole element fades.
- **Press** — no shrink, no color change; the browser's native active state carries.
- **Borders** — hairline 1 px silver for cards and inputs; 2 px sapphire for the identity grid; 3 px black under section headers. Borders do the work shadows would elsewhere.
- **Shadow** — none by default. `--shadow-overlay` (`0 8px 30px rgba(38,47,56,.14)`) is reserved for transient overlays (menus, dialogs).
- **Radius** — 0 on all UI, 12 px on photography, 100 px on pills and radios.
- **Transparency / blur** — one place: the sticky top nav uses `rgba(255,255,255,.88)` + `backdrop-filter: blur(10px)`.
- **Imagery** — warm, human, clinical. Real environments, natural light. Mix-blend-mode "overlay" over sapphire in hero contexts. Photographs are the only rounded element.
- **Cards** — white surface, 1 px silver border, sharp corners, no shadow. Sapphire "invert" variant is the one saturated card variant.
- **Layout rules** — sticky nav; full-bleed hero; content lives inside `max-width: 80rem` with 60 px side padding. Section headers sit above a 3 px black rule.

## Iconography

Two sets:

1. **H1 secondary icon set** — 300 line glyphs (search, map, building, dollar, calendar, heart, book, etc.). Delivered as PNGs; consumed via the `Icon` component, which CSS-masks the PNG so the icon inherits any brand color. **Not shipped here** (commercial asset); drop your PNGs into `assets/icons/` or override `basePath` on `<Icon>`.
2. **Brand illustration marks** — hand-drawn sapphire / plum outlines with grain fill. Three are included in `assets/` (`illus-eye.png`, `illus-uncover.png`, `illus-resource.png`). Used at 64–96 px for section marks, not as inline icons.

No emoji, no unicode-glyph icons. UI never uses inline SVG for iconography (SVGs are for logos only).

## Index

Root:

- `styles.css` — global entry point; `@import`s tokens/*.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `assets/` — logos (`logo-sapphire.svg`, `logo-white.svg`, `logo-grayscale.svg`), fonts, illustration marks, one brand photograph.
- `thumbnail.html` — homepage tile.
- `readme.md` (this file), `SKILL.md`, `github.md`.

Components (`components/**`):

- **Button** — primary, secondary, tertiary; small/medium; invert
- **Badge** — solid, soft, outline; sapphire, plum, neutral
- **Card** — outline, subtle, invert; optional media tile
- **Quote** — editorial pull quote with ink / sapphire / plum accent
- **Tag** — rounded chip, optionally removable
- **Checkbox**, **Radio** — sharp ink control set
- **Input**, **Textarea**, **Select** — form field family with hint/error slots
- **Icon** — CSS-masked PNG glyph, inherits any brand color
- **Tabs** — underline tab bar

UI kits (`ui_kits/**`):

- `brand-hub/` — Hero, VisualIdentity, Logos, Colors and a mounted `index.html` that recreates the H1 Brand Hub landing.

Guidelines specimen cards (`guidelines/**`): Colors (brand core, blue ramp, plum ramp, neutrals, semantic aliases), Type (display, body, editorial, utility), Spacing (scale, layout, corners, borders + motion), Brand (logo, illustrations, photography).

## Substitutions (please replace or confirm)

- **Questrial → Gilroy.** The commercial H1 face is Gilroy (weights 400 primarily). Questrial is the closest open-source geometric sans available on Google Fonts. If you can share Gilroy license and files, drop the woff2s in `assets/fonts/` and update `tokens/fonts.css`.
- **300-glyph H1 icon set** — not shipped. Drop PNGs into `assets/icons/` to enable `<Icon>`.
- **Success color** — derived from `blue-700`; the brand publishes no semantic palette. Confirm whether green is off-limits or simply undefined.

## Extending

Any `Name.jsx` + sibling `Name.d.ts` under `components/**` is picked up automatically. Add a sibling `Name.prompt.md` and one `@dsCard`-tagged `.html` per directory to give the design-system tab a live thumbnail.

To pull deeper source (Figma, additional H1 product codebases), see `github.md` for the sync record and re-run the import.
