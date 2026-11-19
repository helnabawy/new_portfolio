---
name: Hosam Elnabawy, Senior Mobile Engineer
description: A personal portfolio presented as an app store product page.
colors:
  store-blue: "#0a66ff"
  store-blue-press: "#0852cc"
  ink: "#111114"
  ink-2: "#4a4a52"
  ink-3: "#6b6b73"
  paper: "#ffffff"
  field: "#f2f2f7"
  field-hover: "#e6e6ee"
  rule: "#d8d8de"
  tile-green: "#0b6b4f"
  tile-orange: "#c2410c"
  tile-teal: "#0e7490"
  tile-cobalt: "#1556b0"
  tile-violet: "#6d28d9"
  tile-magenta: "#b5175a"
  tile-ochre: "#a16207"
  tile-red: "#b91c1c"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  figure:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "76px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "30px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  panel-title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.375
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 600
    letterSpacing: "0.07em"
rounded:
  pill: "999px"
  squircle: "22.5%"
  panel: "32px"
  card: "28px"
  inset: "18px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  column: "1104px"
  panel-gap: "20px"
  row: "24px"
  row-tight: "14px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.store-blue-press}"
  button-secondary:
    backgroundColor: "{colors.field}"
    textColor: "{colors.store-blue-press}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "46px"
  button-secondary-hover:
    backgroundColor: "{colors.field-hover}"
  button-on-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.store-blue-press}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-icon:
    backgroundColor: "{colors.field}"
    textColor: "{colors.store-blue-press}"
    rounded: "{rounded.pill}"
    size: "36px"
  button-compact:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "32px"
  chip-current:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  chip-metric:
    backgroundColor: "{colors.field}"
    textColor: "{colors.store-blue-press}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  app-icon:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.squircle}"
    size: "64px"
  preview-panel:
    backgroundColor: "{colors.store-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.panel}"
    padding: "24px"
    width: "272px"
    height: "520px"
  field-card:
    backgroundColor: "{colors.field}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "32px"
  nav-link:
    textColor: "{colors.ink-2}"
  nav-link-hover:
    textColor: "{colors.ink}"
---

# Design System: Hosam Elnabawy, Senior Mobile Engineer

## Overview

**Creative North Star: "The Store Listing"**

The page is an app store product page for a person. A white ground carries grouped grey fields, near-black ink and a single store blue that marks every action. Identity reads the way an app does: a large flat-colour squircle icon, a heavy name, a subtitle, and a pill to act on. Evidence sits in a divided fact strip, a sideways gallery of tall full-colour preview panels, hairline-ruled information rows and a version history.

Density is calm and listing-like: one centred column, generous section breaks marked by a single hairline, and colour reserved for icons, panels and the one action blue. Depth is tonal (white over grey), not shadowed. Motion follows two curves only, a spring for things that arrive and an exponential ease-out for things that draw, and every animated figure starts from a visible default so nothing is ever blank without JavaScript or with reduced motion.

The world refuses the dark developer portfolio of a centred hero, glow and equal cards.

**Key Characteristics:**
- White ground, grey #f2f2f7 grouped fields, near-black ink, one store blue for actions.
- Flat-colour squircle icons; pill buttons; tall rounded preview panels as full colour fields.
- Hairline-ruled rows and a divided fact strip carry facts, not cards.
- One grotesk (Hanken Grotesk) in extra-bold and regular, tabular numerals for every figure.
- Spring and exponential ease-out motion; figures draw from a visible default.

## Colors

A white-and-grey store palette with one blue for action and a set of flat tile colours that belong to icons and panels only.

### Primary
- **Store Blue** (`store-blue`): every action. Contact pills, the monogram icon, the selection highlight, the focus ring, the "Current" chip, the first preview panel and the lead timeline bar. Text links use it on white.
- **Pressed Blue** (`store-blue-press`): the hover/press state of blue pills, and the colour of any blue text or glyph that sits on a grey field (secondary pills, metric chips, the "now" marker).

### Tertiary: tile colours
- **Tile Green, Orange, Teal, Cobalt, Violet, Magenta, Ochre, Red** (`tile-*`): flat fills for project squircle icons, preview panels, module tiles and the stack matrix dots. Each project owns one tile colour and keeps it everywhere it appears. White text on a tile colour is the only text allowed on them.

### Neutral
- **Ink** (`ink`): headings, names, row titles, the dark preview panel.
- **Ink 2** (`ink-2`): body prose, nav links at rest, the scale bars.
- **Ink 3** (`ink-3`): metadata, captions, row labels, axis ticks, uppercase data labels.
- **Paper** (`paper`): the page ground and the inset surface inside grey fields.
- **Field** (`field`): grouped grey containers (timeline card, stack matrix, footer), secondary pill fill, scale bar tracks.
- **Field Hover** (`field-hover`): hover fill for grey and white pills.
- **Rule** (`rule`): every hairline: section breaks, row dividers, fact strip cells, the sticky bar's bottom edge once stuck.

### Named Rules
**The One Blue Rule.** Store blue means "act here". Nothing decorative, no second accent hue for actions; the tile colours never carry a button.

**The Press Blue On Grey Rule.** Blue text or glyphs on a field-grey surface use pressed blue, not store blue; store blue on #f2f2f7 falls below 4.5:1.

**The Tile Ownership Rule.** A tile colour belongs to one project. Its icon, its stack dots and its panel use the same fill.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif), loaded through next/font.

**Character:** One grotesk in two voices: extra-bold (800) with tight negative tracking for names, headings and figures; regular for prose. Bold (700) carries row titles and buttons.

### Hierarchy
- **Display** (800, 64px desktop / 30px mobile, 1.05): the name beside the identity icon; the footer question at 52px / 34px.
- **Figure** (800, 76px, 1, tabular): the hero number inside a preview panel. Fact strip numerals use the same voice at 38px.
- **Headline** (800, 30px desktop / 26px mobile): section titles (Preview, About, Experience, Scale, Projects, Stack, Information). Sub-sections drop to 20px bold.
- **Panel Title** (800, 22px, 1.14): the claim at the top of each preview panel.
- **Title** (700, 17px): project names, version-history entries, row headers (15px in tables and the sticky bar).
- **Body** (400, 17px, 1.65, max 66ch): About prose. Lists and descriptions use body-sm (15–16px, relaxed) in ink-2, capped near 70ch.
- **Caption** (400–500, 13px): figure captions, panel captions, fact notes, tech lists.
- **Label** (600, 11px, 0.07em, uppercase): data labels only, the fact strip cells and the stack table's first column header.

### Named Rules
**The Tabular Figures Rule.** Every number that can change or be compared (counts, years, periods, metrics, ticks) is set with tabular numerals.

**The Data Label Rule.** Uppercase 11px labels name a datum directly beneath or beside them. They never sit above a section heading.

## Layout

One centred column, max 1104px with 20px gutters on mobile and 32px from md up (a 1040px content measure on desktop). The identity block opens 126px below the top on desktop: a 210px icon (112px mobile) beside the name, title, location and the action pair; on mobile the actions drop below the icon row. A five-cell fact strip between hairlines follows; on mobile it becomes a sideways scroll of 132px cells.

Sections are separated by a top hairline plus 56–64px of space above and 48–56px inside. Two-column splits are fixed-width sidebars against a fluid column (About: fluid + 300px; Scale: 300px + fluid; timeline and info rows: 210–220px label column). Projects run as a two-column list on desktop, single column on mobile.

The preview gallery breaks out to the viewport edge on mobile, snaps panel by panel (272 by 520px, 20px gap), hides its scrollbar, drags with the mouse and steps by two panels with grey icon buttons on desktop.

**The Hairline Section Rule.** A section begins with a single rule hairline and space, never with a background band or a card.

## Elevation & Depth

Flat by default. Depth comes from tonal layering: white paper, grey #f2f2f7 fields, and white insets inside grey fields. The sticky top bar is the only translucent surface (white at 80% with a heavy backdrop blur), and it gains its bottom hairline only once the identity has scrolled away.

### Shadow Vocabulary
- **Shell lift** (`box-shadow: 0 14px 30px -18px rgba(17,17,20,0.35)`): the single soft shadow, under the white app shell inside the micro-apps preview panel, to read as a device on a field. Not a general card shadow.

**The Tonal Depth Rule.** Lift a surface by changing its tone (white on grey, grey on white), not by adding a shadow.

## Shapes

Three shape families, each with one meaning. Squircles (22.5% radius) are icons: the monogram, project icons, module tiles, platform marks. Pills (fully rounded) are actions and chips. Large soft rectangles hold content: preview panels at 32px, grey field cards at 28px, white insets at 18px. Everything else is straight-edged and divided by 1px hairlines. Data marks follow the same softness: round dots, fully rounded bars, 14px-topped columns.

**The Squircle Means Icon Rule.** Only an icon is a squircle; a squircle is never a button or a card.

## Components

### Buttons
Every button is a pill: bold label, optional 18px line icon, a spring press (scales to 0.96) and a 200ms exponential colour change.
- **Primary:** store-blue fill, white text, 46px tall with 32px sides at 17px; hover deepens to pressed blue. The footer uses a 52px version; the sticky bar a 32px compact one at 14px.
- **Secondary:** field-grey fill with pressed-blue text (Download CV); hover goes to field-hover.
- **On field:** on the grey footer, the secondary pill flips to a white fill with pressed-blue text.
- **Icon:** 36px round grey pill with a pressed-blue chevron, used for gallery stepping.
- **Focus:** a 2px store-blue outline at 3px offset with 8px rounding; on colour fields (the `on-color` scope) the ring turns white.

### Chips
- **Current:** small store-blue pill, white 11px bold text, beside the active version-history entry.
- **Metric:** field-grey pill, 13px bold tabular pressed-blue text, top right of a project row.

### Cards / Containers
- **Field card:** field-grey, 28px corners, 32px padding (20px or 12px on mobile). Holds the experience timeline and the stack matrix. No border, no shadow.
- **Preview panel:** see signature component below.

### Navigation
A fixed top bar, 56px tall, translucent white with blur. At rest it shows only the section links (14px medium, ink-2, hover to ink) on desktop and is hidden on mobile. Once the identity block leaves the viewport it slides in on mobile, gains a hairline, and the 32px squircle monogram, name and a compact Contact pill arrive with rise and spring-launch animations.

### Information rows
Hairline-divided rows: a muted label (14–15px, ink-3) and a medium-weight value, as a two-column grid on desktop and stacked on mobile. Used for Information, About contact links and the version history (24px rows). Links inside are store-blue with an underline that fades in on hover.

### Fact strip (signature)
A five-cell row between top and bottom hairlines, cells divided by vertical hairlines, each centred: an uppercase data label, an 800-weight tabular numeral in ink-2 that counts up from zero on load, and a 13px note.

### Preview panel (signature)
A tall 272 by 520px rectangle with 32px corners and 24px padding, filled edge to edge with one colour (store blue, ink, field grey or a tile colour). A 22px extra-bold claim at the top, a demonstrated figure in the middle (dots, blocks, tiles, columns), a 13px caption at the bottom. Its figure animates when the panel is 55% visible: dots and tiles pop in with the spring, bars and columns grow with exponential ease, all staggered and all starting from a faded but visible state.

### App row (signature)
A project listing: a 64px flat-colour squircle with a white line icon (scales up 6% and tilts on row hover with the spring), name in title type, kind and context in ink-3, an optional metric chip, a description in ink-2 and a dot-separated tech list in caption type, closed by a bottom hairline.

### Identity icon (signature)
The 210px store-blue squircle monogram. It launches in (scale from 0.72 with blur) on load and carries a pointer-following white radial sheen on hover-capable devices.

## Do's and Don'ts

### Do:
- **Do** keep every action a pill in store blue or a grey/white pill with pressed-blue text.
- **Do** use pressed blue for blue text on any field-grey surface.
- **Do** give each project one tile colour and reuse it for its icon, panel and stack dots.
- **Do** set every compared or changing number with tabular numerals.
- **Do** start every animated figure from a visible default and finish it with the spring or the exponential ease-out (`--ease-spring`, `--ease-expo`); honour reduced motion by showing the final state.
- **Do** separate sections and rows with 1px rule hairlines.

### Don't:
- **Don't** add a second action colour or use a tile colour on a button.
- **Don't** shape a button or card as a squircle; squircles are icons.
- **Don't** add card shadows; depth is tonal, and the shell lift is the only shadow.
- **Don't** put an uppercase label above a section heading; uppercase is for data labels only.
- **Don't** build a dark developer portfolio: no centred hero, no glow, no grid of equal cards.
