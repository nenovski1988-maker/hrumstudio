---
name: HRUM STUDIO
description: Independent software developer and product builder. Dark, ruled, single-accent portfolio site.
colors:
  mint: "#3FE2AC"
  mint-dark: "#1E9E76"
  charcoal: "#17191B"
  charcoal-raised: "#1E2124"
  line: "#31353798"
  off-white: "#F6F6F3"
  gray: "#B9BDB8"
  gray-dim: "#7C807D"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(52px, 7vw, 92px)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.055em"
  display-closing:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(58px, 8vw, 105px)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.06em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(36px, 4.5vw, 52px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.045em"
  headline-soft:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(32px, 4vw, 52px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title-small:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "22px"
    fontWeight: 500
  lede:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body-long:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: "IBM Plex Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 500
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "13px"
    fontWeight: 400
    letterSpacing: "0.02em"
  label-caps:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "48px"
  gutter-tablet: "32px"
  gutter-mobile: "20px"
  gutter-small: "16px"
  container: "1240px"
  section-y: "150px"
  case-gap: "64px"
  cell: "32px"
  cta-gap: "16px"
components:
  button-primary:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.charcoal}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.off-white}"
    textColor: "{colors.charcoal}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-outline-mint:
    backgroundColor: "transparent"
    textColor: "{colors.mint}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "42px"
  button-outline-mint-hover:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.charcoal}"
  contact-link:
    backgroundColor: "transparent"
    textColor: "{colors.mint}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "62px"
  contact-link-hover:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.charcoal}"
  status-tag:
    backgroundColor: "{colors.mint}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  status-tag-pending:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.gray}"
    rounded: "{rounded.none}"
    padding: "6px 10px"
  feature-cell:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.gray}"
    rounded: "{rounded.none}"
    padding: "32px"
  carousel-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.off-white}"
    rounded: "{rounded.none}"
    size: "40px"
  nav-bar:
    backgroundColor: "rgba(23, 25, 27, 0.94)"
    height: "84px"
---

# Design System: HRUM STUDIO

<!-- BASELINE: documents the site exactly as implemented in app/globals.css, app/layout.js,
     app/page.js, app/components/CaseCarousel.js and the work/ and products/ pages, as of
     commit cc733d6 (2026-10-29). It is a reference for a future redesign, not a target. -->

## Overview

**Creative North Star: "The Workshop Ledger"**

The site reads like a working ledger from a one-person workshop. Every entry is numbered (`01 — KZM`, `02`, `03`), stamped with a status (`SHIPPED`, `LIVE`, `BETA`, `PERSONAL TOOL`) and separated from the next by a hairline rule. The voice is factual and slightly dry: monospaced labels carry the metadata, a tight grotesk carries the claims, and a humanist sans carries the explanation. Nothing is decorated for its own sake. The decoration that does exist (paper texture, faint diagonal hatching, one mint line through a visual) looks like marks on a drafting sheet.

Density is low and the rhythm is generous. Sections open with 150px of air, headlines are very large and tightly tracked, and body copy stays in narrow measures (340–480px for supporting text, 650–760px for long-form). The page is one dark surface (warm charcoal with a soft-light paper texture). Structure comes from 1px rules and from swapping between two near-identical charcoals, never from cards floating on shadows.

Color is used like a highlighter in a ledger. Mint marks what is done, live, or clickable: status stamps, the primary button, outlined CTAs, accent rules, feature numbers, the quote attribution. Everything else is off-white, gray, or dim gray on charcoal.

**Key Characteristics:**
- Single dark theme: charcoal (#17191B) ground with a repeating paper texture blended in soft-light.
- One accent, mint (#3FE2AC). It never appears as a large field except on small buttons and stamps.
- Hairline structure: 1px rules in a translucent line color divide every section, case and footer.
- Square corners everywhere. There is no border-radius anywhere in the system.
- Flat: no box-shadows. Depth comes from the sticky nav's blur and from the two charcoal tones.
- Three-font system: Space Grotesk for headings, IBM Plex Sans for body, IBM Plex Mono for every label, index, tag and metadata line.
- Numbered, stamped entries (`0X — NAME` index, status tag in the top-left corner of the visual).

## Colors

A near-monochrome warm-charcoal palette with a single cool mint accent.

### Primary
- **Ledger Mint** (`mint`): the only accent. Used for the primary button fill, outlined CTA border and text (nav CTA, email link), the status stamp on project visuals, the 2px left accent rule (hero meta items, the closing statement in the AI note), feature numbers, quote attribution, carousel-arrow hover, and the single thin line drawn through the abstract project visuals.
- **Deep Mint** (`mint-dark`): declared in `:root` but not referenced anywhere in the current CSS. Reserved, unused.

### Neutral
- **Workshop Charcoal** (`charcoal`): page background, nav background (at 94% opacity), feature-cell background, text color on mint fills, and the pending status stamp background.
- **Raised Charcoal** (`charcoal-raised`): the inset surface behind project visuals (`.case-visual`), one step lighter than the page.
- **Hairline** (`line`, 8-digit hex with ~60% alpha): every border and rule. Also used as the 1px gap color that draws the grid lines between feature cells.
- **Paper White** (`off-white`): primary text and headings; hover target for the primary button and nav links.
- **Graphite Gray** (`gray`): body copy, ledes, nav links at rest, hero meta values, secondary-button hover border.
- **Dim Gray** (`gray-dim`): mono metadata (case indices, tag lists, eyebrows, footer, carousel counter, figure captions, meta labels).

One-off values that appear in the CSS but are not tokens: `rgba(23, 25, 27, 0.94)` (nav), `#202522` (portrait placeholder gradient, unused), `rgba(63, 226, 172, 0.05)` and `rgba(246, 246, 243, 0.08)` (portrait placeholder, unused), `#ffffff06`–`#ffffff08` (hatching in the abstract fills).

### Named Rules
**The Highlighter Rule.** Mint marks state or action only: done, live, clickable, numbered. It is never used for headings, body text, or large background areas.

**The Two-Charcoal Rule.** Surfaces differ by one step at most: charcoal (#17191B) for the page, raised charcoal (#1E2124) for inset visuals. There is no third surface color.

## Typography

**Display Font:** Space Grotesk (with sans-serif), loaded weights 400/500/600/700, variable `--font-grotesk`
**Body Font:** IBM Plex Sans (with sans-serif), loaded weights 400/500/600, variable `--font-plex-sans`
**Label/Mono Font:** IBM Plex Mono (with monospace), loaded weights 400/500, variable `--font-plex-mono`

All three load through `next/font/google` with `display: swap` and the Latin subset only. Cyrillic text (e.g. the Bulgarian name in the alt text and structured data) has no matching subset loaded.

**Character:** A tight, slightly quirky grotesk shouting short claims, paired with IBM's engineering-flavored sans and mono for the facts underneath. The pairing says "built by an engineer who cares how it looks."

### Hierarchy
- **Display** (600, clamp(52px → 92px), line-height 1.02, tracking -0.055em): the hero headline only. Max width 820px. The product-page hero uses a larger variant (clamp(52px → 110px), line-height 0.95).
- **Display Closing** (600, clamp(58px → 105px), line-height 0.92, tracking -0.06em): the final "Let's build it." CTA heading, centered.
- **Headline** (600, clamp(36px → 52px), line-height 1, tracking -0.045em): homepage section heads ("Things I've built.", "Software of my own.").
- **Headline Soft** (500, clamp(32px → 52–54px), line-height 1.05–1.08, tracking -0.035em): the pull quote and product-page section heads. A product-page CTA variant runs larger (clamp(42px → 76px), line-height 0.98, tracking -0.045em).
- **Title** (600, 34px, line-height 1.05, tracking -0.025em): case titles in the carousel. 29px on mobile.
- **Title Small** (500, 22px): feature-cell headings.
- **Lede** (400, 19px, line-height 1.55, Graphite Gray): hero intro, max 480px. The product-page lede is 20px, max 700px.
- **Body Long** (400, 17px, line-height 1.7, Graphite Gray): AI-note copy (max 650px) and product-section paragraphs (max 680px). The AI-note lead line is 21px in Paper White; the closing statement is 20px/1.5.
- **Body** (400, 15.5px, line-height 1.65, Graphite Gray): case descriptions, max 460px. Section intros are 15px/1.6, max 340px.
- **Label** (Plex Mono 400, 13px, tracking 0.02em): the `.mono` utility. Used for case indices, meta labels, the carousel counter, section labels.
- **Label Caps** (Plex Mono 400, 9–12px, tracking 0.04–0.14em, uppercase): nav links (11px/0.08em), nav CTA (10px/0.08em), eyebrow (11px/0.12em), back link and figcaptions (12px/0.04em), footer (10px/0.05em), tag lists (12px, not uppercased in CSS; the copy itself is mixed case).

### Named Rules
**The Mono-for-Metadata Rule.** Anything that is a label, index, tag, status, count, date, caption or footer line is set in IBM Plex Mono. Sentences are never mono except the email address in the contact link.

**The Negative-Tracking Rule.** Every Space Grotesk heading is tracked tighter than normal (-0.025em at title size up to -0.06em at closing size). The bigger the type, the tighter the tracking.

## Layout

**Container.** A single centered column, `.wrap`: `min(100% - 96px, 1240px)` on desktop (48px gutters), `min(100% - 64px, 1240px)` at ≤950px, `100% - 40px` at ≤700px, `100% - 32px` at ≤420px.

**Breakpoints.** Desktop-first max-width queries at 950px (tablet), 700px (mobile) and 420px (small mobile). There are no min-width queries.

**Section rhythm.** Homepage sections use 150px top padding (`.work` 150/140px, `.ai-note` 150/70px). On mobile this drops to 90px. The contact section is tighter (45/100px). Product pages use 80px section padding with a 220px label column next to the content (`220px 1fr`, 60px gap), collapsing to one column on mobile.

**Section head.** Headline on the left, a short gray intro (max 340px) on the right, bottom-aligned (`flex`, `space-between`, `align-items: flex-end`), 72px above the content. It stacks on mobile.

**Case layout.** Two columns, `0.85fr 1.15fr` (visual left, text right), 64px gap, vertically centered. The visual is a 4:3 box. It becomes one column at ≤950px (36px gap, visual max 720px).

**Carousel.** Cases sit in a horizontal scroll-snap track. Each slide is `100% - 140px` wide so the next slide peeks in (`100% - 60px` at ≤950px, full width at ≤700px). The gap is 64px (20px on mobile). Controls (counter + two arrows) are right-aligned above the track.

**Hero.** Min-height 700px. Content padding 150/130px. A large 3D wordmark image (760×560px) bleeds off the top-right corner with a radial mask, sitting behind the text. Three meta items ("BASED / FOCUS / STATUS") are pinned to the bottom-left of the hero, aligned to the container edge via `max((100vw - 1240px)/2, 48px)`.

**About (AI note).** Two columns, `minmax(280px, 420px)` portrait + `minmax(0, 760px)` copy, 90px gap. The portrait is sticky (top 120px). One column on mobile.

**Feature grid.** Two equal columns separated by 1px Hairline gaps (the grid background shows through), cells min-height 250px with 32px padding. One column on mobile.

### Named Rules
**The Peek Rule.** Horizontal sets always show a sliver of the next item on desktop and tablet so the visitor knows there is more. On phones the peek is dropped and the slide fills the width.

## Elevation & Depth

The system is flat. There are no `box-shadow` declarations anywhere. Depth comes from three things only: the sticky nav's translucent charcoal (94% opacity) with a 14px backdrop blur; the one-step tonal shift from charcoal to raised charcoal inside project visuals; and the hero wordmark image, whose radial mask fades it into the page. The paper texture (`/texture.png`, 620px tile, soft-light blend) gives the whole surface a slight material grain.

### Named Rules
**The Ruled-Not-Raised Rule.** Separation is drawn with 1px Hairline rules or 1px grid gaps, never with shadows or floating cards. If something needs to stand apart, give it a border or the raised charcoal, not elevation.

## Shapes

Every corner is square (0px radius): buttons, outlined CTAs, status stamps, project visuals, feature cells, carousel arrows, screenshots, the portrait. Borders are 1px Hairline by default. Accent rules are 2px mint and appear only as a left border (hero meta items, the AI-note closing statement). Status stamps sit flush in the top-left corner of the visual with no gap. The pending variant loses its top and left borders so it reads as cut into the corner. Tag lists separate items with 1px vertical rules instead of pills or chips.

The abstract fills (`fill-kzm`, `fill-muse`, `fill-domiq` etc.) draw faint repeating 1px hatching (white at 2–3% alpha) at 0°, 45°, 60°, 90°, 135°, crossed by a single thin mint line or one or two 3px mint dots. They work as placeholder diagrams for projects without a screenshot.

## Components

### Buttons
Blunt, rectangular, quiet until touched.
- **Shape:** square corners, min-height 48px, 24px horizontal padding, 1px border (transparent on primary). On mobile the padding becomes 13px 20px.
- **Primary:** mint fill, charcoal text, Plex Sans 14px/500. Hover swaps the fill to Paper White.
- **Secondary:** transparent with a Hairline border and Paper White text. Hover brightens the border to Graphite Gray.
- **Outlined Mint (nav CTA):** transparent, 1px mint border, mint text in Plex Mono 10px uppercase, 0.08em tracking, min-height 42px. Hover inverts to a mint fill with charcoal text. It shrinks to 38px/9px at ≤700px and 35px/8px at ≤420px.
- **Contact link:** the same inversion at a larger size. Min-height 62px, padding 0 30px, Plex Mono clamp(15px → 21px), and a hover that also lifts it 2px (`translateY(-2px)`). It goes full width on mobile.
- **Transitions:** background, border-color and color at 0.2s ease (0.25s for the contact link).
- **Focus:** no custom focus style is defined; keyboard focus falls back to the browser default outline.

### Chips (tag lists)
- **Style:** not chips. Inline Plex Mono 12px Dim Gray words separated by a 1px Hairline left border, 16px horizontal padding, the first item with no border or padding. Wraps with a 10px row gap.

### Status Stamp
- **Style:** a mint block (Plex Mono 11px, 0.05em tracking, 6px 10px padding, charcoal text) pinned to the top-left corner of a project visual.
- **Pending variant:** charcoal background, Graphite Gray text, Hairline border on the right and bottom only. Used for `PERSONAL TOOL` and `BETA`.

### Cards / Containers
- **Project visual (`case-visual`):** 4:3 box, raised-charcoal background, 1px Hairline border, overflow hidden, square corners. It holds a cover-fit screenshot (object-position set per item), a centered logo (max 160px, 48px padding), or an abstract fill. Clickable visuals are links; there is no hover state on them.
- **Feature cell:** charcoal background, 32px padding, min-height 250px. Top: a mint mono number (`01`–`04`, 12px) with 60px below it. Then a Title Small heading and 15px/1.6 gray text. Cells sit in a 2-column grid whose 1px gaps show the Hairline color, which draws the grid lines.
- **Shadow strategy:** none (see Elevation & Depth).

### Navigation
- **Style:** sticky top bar, 84px tall (68px ≤700px, 62px ≤420px), translucent charcoal with a 14px backdrop blur and a Hairline bottom border, z-index 100.
- **Layout:** logo image (34px tall) on the left; links right-aligned with 40px gaps and 40px before the CTA; the outlined-mint CTA on the far right.
- **Links:** Plex Mono 11px uppercase, 0.08em tracking, Graphite Gray, hover to Paper White over 0.2s.
- **Mobile (≤700px):** the links are hidden (`display: none`) and only the logo and CTA remain. There is no menu toggle.

### Carousel Controls
- **Counter:** Plex Mono 13px Dim Gray, formatted `01 — 03`, synced to scroll position.
- **Arrows:** 40×40px square buttons, 1px Hairline border, transparent, Paper White `←` / `→` text glyphs at 16px. Hover turns the border and glyph mint. When disabled (at either end) they drop to 30% opacity.
- **Behavior:** scroll-snap (mandatory, aligned to start); vertical mouse wheel scrolls horizontally; click-and-drag with grab/grabbing cursors (snap is turned off while dragging); the scrollbar is hidden.

### Pull Quote and Statement
- **Eyebrow:** Plex Mono 11px uppercase, 0.12em tracking, Dim Gray, 40px below.
- **Quote:** Headline Soft in Paper White, with the attribution as a `cite` in Plex Mono 12px mint, 0.08em tracking, 24px above.
- **Closing statement:** 20px/1.5 Paper White, 2px mint left border, padding 28px 0 28px 28px.

### Hero Meta
Three label/value pairs, each with a 2px mint left border and 14px left padding: a Dim Gray mono label (13px) above a 14px Graphite Gray value. The pairs sit 56px apart in a row, or in a stacked grid with 14px gaps on mobile.

### Product Page Shell
A back link (Plex Mono 12px uppercase, Graphite Gray → Paper White on hover, 100px below), a hero (index + Display-size h1 + lede + tag list), then ruled `220px | 1fr` sections with a mono label in the left column. Screenshots are full-width images with a 1px Hairline border and an uppercase mono caption 12px below. The "narrow" variant caps screenshots at 360px for phone captures.

## Do's and Don'ts

### Do:
- **Do** keep every corner square (0px). Buttons, visuals, cells and stamps all share it.
- **Do** separate content with 1px Hairline (`#31353798`) rules or 1px grid gaps.
- **Do** set labels, indices, statuses, tags, counters, captions and the footer in IBM Plex Mono, usually Dim Gray and often uppercase with positive tracking (0.04–0.14em).
- **Do** track Space Grotesk headings negatively, from -0.025em (34px titles) to -0.06em (closing display).
- **Do** keep supporting copy in narrow measures: 340px for section intros, 460–480px for descriptions and ledes, 650–760px for long-form.
- **Do** use mint for state and action only: the primary button, outlined CTAs, status stamps, 2px accent rules, feature numbers, attribution.
- **Do** number entries in the `0X — NAME` pattern and stamp them with a status.
- **Do** use the hover inversion (transparent + mint border → mint fill + charcoal text) for outlined mint CTAs.

### Don't:
- **Don't** add box-shadows or floating cards. The system is flat by construction.
- **Don't** introduce a border-radius or pill shapes. Tags are rule-separated words, not chips.
- **Don't** use mint for headings, paragraphs or large background fields.
- **Don't** add a third surface color beyond charcoal (#17191B) and raised charcoal (#1E2124).
- **Don't** reuse the styles in `app/page.module.css` (Geist fonts, rounded pill buttons, light theme). That file is leftover `create-next-app` boilerplate, is not imported anywhere, and is not part of this system.

## Implementation Notes (baseline audit)

Facts about the current code worth knowing before a redesign. They are recorded here so they are not mistaken for intentional design.

- **No focus styles.** There is no `:focus` or `:focus-visible` rule anywhere, so keyboard users get the browser default outline.
- **No reduced-motion handling.** `scroll-behavior: smooth`, the smooth carousel scroll and the contact-link lift run regardless of `prefers-reduced-motion`.
- **No mobile navigation.** Below 700px the section links disappear completely; only the "Start a project" CTA remains.
- **Single theme.** Dark only; there is no light theme or `prefers-color-scheme` handling in `globals.css`.
- **Unused tokens and rules.** `--mint-dark` is declared but never used. `.portrait-placeholder` (with `::before`, `::after`, `span`, `small`) and `.portrait-mark` are styled but no longer rendered (the real photo `.portrait-photo` replaced them).
- **Classes without CSS.** `product-cta-actions`, `product-screens-section`, `carousel` and `capabilities` are used in markup but have no rules of their own.
- **Abstract fills mostly hidden.** The `fill-*` backgrounds apply only when a case has neither `image` nor `logo`. Right now only DOM-IQ (`fill-domiq`) shows one.
- **Lazy portrait.** The about-section portrait (`/miro.png`) is a lazily loaded `next/image`, so a full-page screenshot taken without scrolling can show an empty bordered box there.
- **Fonts load Latin only.** No Cyrillic subset is requested, although the site has Bulgarian content in metadata and alt text.
- **Text-glyph arrows.** Carousel arrows are the characters `←` / `→`, not icons.
- **Global CSS only.** All styling lives in one global stylesheet with flat class names; no CSS Modules (apart from the unused boilerplate), Tailwind or CSS-in-JS.
