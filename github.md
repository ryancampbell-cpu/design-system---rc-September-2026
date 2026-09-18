# GitHub source

repo: ryancampbell-cpu/h1-design-system
branch: main
path: (whole repo)

## Last sync

date: 2026-08-04T07:58:00Z
commit: (tree at 05cc285231bb — no exact commit sha resolved)

### Updated in this project

- Unpacked `H1-Brand-Kit-standalone.html` into loose sources: tokens, 12 components (Button, Badge, Card, Quote, Tag, Checkbox, Input, Textarea, Radio, Select, Icon, Tabs), and a Brand Hub UI kit.
- Extracted embedded webfonts (Questrial woff2 subsets · GT Sectra Book / Regular / Italic ttf) and logos + illustration marks into `assets/`.
- Wrote foundation specimen cards for Colors, Type, Spacing and Brand.
- Recreated the Brand Hub landing (`ui_kits/brand-hub/index.html`) from the standalone's template markup.

## Screen map

| Project screen | Repo files |
| --- | --- |
| `ui_kits/brand-hub/index.html` | `H1-Brand-Kit-standalone.html` (whole file — template body + inlined component bundle) |
| `components/**/*.jsx` | `H1-Brand-Kit-standalone.html` (manifest `__bundler/*` scripts → `_unpack/js/support.js`) |
| `tokens/*.css` | `H1-Brand-Kit-standalone.html` (`<style>` blocks in the template `<helmet>`) |
| `assets/logo-*.svg`, `assets/illus-*.png`, `assets/hero-brand-photo.webp`, `assets/fonts/*` | Bundled binary assets in `H1-Brand-Kit-standalone.html` (`__bundler/manifest`) |
