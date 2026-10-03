---
name: The Community Gazette (Agrawal Samaj — Legal & Compliance Portal)
description: A warm saffron-and-ivory civic register for statutory notices — DPDP Act 2023 privacy, terms, data-safety, and account-deletion pages — deliberately distinct from the in-app "Paper" product system.
colors:
  saffron: "#b3400f"
  saffron-hover: "#8c2e07"
  saffron-tint: "#fff5eb"
  saffron-border: "#fed7aa"
  verified-teal: "#0f766e"
  verified-teal-hover: "#115e59"
  verified-teal-tint: "#f0fdfa"
  verified-teal-border: "#99f6e4"
  amber: "#b45309"
  amber-tint: "#fef3c7"
  amber-border: "#fde68a"
  red: "#b91c1c"
  red-hover: "#991b1b"
  red-tint: "#fef2f2"
  red-border: "#fecaca"
  ivory-ground: "#faf9f6"
  surface: "#ffffff"
  surface-subtle: "#f5f4f0"
  border: "#e7e5e4"
  border-subtle: "#f0eeeb"
  ink: "#1c1917"
  ink-muted: "#57534e"
  ink-subtle: "#78716c"
  ink-inverse: "#ffffff"
typography:
  heroTitle:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "34px"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  sectionHeading:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "22px"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  subHeading:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.3
  brandTitle:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "16px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  bodySm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "14px"
    fontWeight: 700
    lineHeight: 1.3
  eyebrow:
    fontFamily: "Plus Jakarta Sans"
    fontSize: "11px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.08em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.9em"
    fontWeight: 400
    lineHeight: "normal"
  devanagari:
    fontFamily: "Noto Sans Devanagari"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: "normal"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "20px"
  s6: "24px"
  s8: "32px"
  s10: "40px"
  s12: "48px"
components:
  button-primary:
    backgroundColor: "{colors.saffron}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  button-danger:
    backgroundColor: "{colors.red}"
    textColor: "{colors.ink-inverse}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "10px 18px"
  card-surface:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "16px"
  badge-affirmative:
    backgroundColor: "{colors.verified-teal-tint}"
    textColor: "{colors.verified-teal}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.full}"
    padding: "3px 8px"
---

# Design System: The Community Gazette (Agrawal Samaj — Legal & Compliance Portal)

## Overview

**Creative North Star: "The Community Gazette"**

This is the Agrawal Samaj's public notice board, not its product. Where the in-app "Paper" system (`Agrawal_App/DESIGN.md`, `Agrawal_Frontend/DESIGN.md`) is a private household register in denim-and-coffee tones for verified Members, this site is the civic-facing counterpart: the DPDP Act 2023 privacy notice, terms, Google Play Data Safety declarations, and the self-service account-deletion tool, built in warm saffron-and-ivory — the register that anyone, member or not, can walk up to and read. The two systems deliberately do not match: Paper is where you manage your family's private record; the Gazette is where the Samaj publishes what it owes the public and the regulator.

The palette reads as civic-Indian without being garish: Saffron (`#B3400F`) for every call to action and active state, laid over an ivory-parchment ground (`#FAF9F6`) and crisp white surfaces — editorial, legible, built for long statutory reading rather than tactile delight. A Teal "verified/affirmative" ramp marks compliance facts that are true ("Yes" on a Data Safety row); Amber marks caveats; Red marks erasure and irreversible actions. Glassmorphic sticky navigation (12px backdrop blur) is the one piece of contemporary polish on an otherwise flat, document-like surface — present so the header and table-of-contents stay usable across a long scroll, not for visual flourish.

The one thing the Gazette shares with Paper on purpose, not by coincidence: the community crest (the circular Maharaja Agrasen emblem, `assets/logo.png`/`favicon.svg`) and the bilingual commitment — `Noto Sans Devanagari` renders all 18 Agrawal Gotra names in terms.html exactly as Paper renders Hindi member names, never machine-transliterated.

**Key Characteristics:**
- Saffron-and-ivory civic palette, deliberately distinct from the product app's denim-and-coffee "Paper" system — same community, two registers, two purposes
- Editorial density: long-form statutory text is the content, not a chrome-heavy app shell
- Sticky glassmorphic header (12px blur) and sticky-scrollspy table of contents — built for document navigation, not touch interaction
- Four-tone semantic system — Saffron (brand/action), Teal (verified/affirmative), Amber (warning), Red (danger/erasure) — each with its own tint and border pairing
- Full light/dark theme parity via `[data-theme="dark"]`, same structure as Paper but an independent palette
- Shares only the community crest and the bilingual Devanagari commitment with the product app — everything else is intentionally its own system

## Colors

A four-tone semantic system on a warm neutral ground, independent of Paper's palette.

### Primary
- **Saffron** (`--color-primary`, light `#B3400F` / dark `#F97316`): every primary button, active nav state, link, section-heading accent border, and the brand mark itself (`theme-color` meta matches this hex). The one action color on the site.

### Secondary
- **Verified Teal** (`--color-teal`, light `#0F766E` / dark `#2DD4BF`): affirmative compliance facts — the hero's compliance badges, `.badge-yes`, the account-deletion status banner. Signals "this is true/done," never an action.

### Tertiary
- **Amber** (`--color-amber`, light `#B45309` / dark `#FBBF24`): caveats and partial-compliance warnings (`.callout-amber`, `.badge-warning`).

### Neutral
- **Ivory Ground** (`--color-bg`, light `#FAF9F6` / dark `#0C0A09`): the page canvas — warm parchment, not pure white.
- **Surface** (`--color-surface`, light `#FFFFFF` / dark `#1C1917`): cards, the TOC, buttons, the footer.
- **Surface Subtle** (`--color-surface-subtle`, light `#F5F4F0` / dark `#292524`): table headers, hover states, officer cards, invariant cards.
- **Ink** (`--color-text` / `--color-text-muted` / `--color-text-subtle`): a three-step reading hierarchy from `#1C1917` (headings/body) through `#57534E` (descriptions) to `#78716C` (metadata/copyright) in light mode, inverted in dark.

### Status
- **Red** (`--color-red`, light `#B91C1C` / dark `#F87171`): erasure, destructive form actions, required-field markers.

### Named Rules
**The Two-Registers Rule.** This site's palette must never be unified with Paper's denim-and-coffee system, and Paper must never adopt saffron. They are deliberately different registers for deliberately different audiences (public/regulatory vs. member-private) — treat any pressure to visually merge them as a scope error, not a design debt.

**Status colors stay on their own tint surface.** Exactly like Paper's rule: `--color-red`/`--color-teal`/`--color-amber` are never painted directly onto `--color-bg` or `--color-surface` as a background — they render on their own paired `-light` tint or inside a bordered callout/badge.

## Typography

**Body/Display Font:** Plus Jakarta Sans (with system-ui, -apple-system fallback)
**Devanagari:** Noto Sans Devanagari — the 18 Agrawal Gotra names in `terms.html` only.
**Monospace:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — the Android application ID and Family ID format references.

**Character:** An editorial, document-reading hierarchy — generous 1.6–1.7 line-height on body copy (longer than Paper's 1.55, because this is sustained statutory reading, not UI scanning), bold (700–800) headings for scan-ability within long legal pages, and a three-step uppercase micro-label family (eyebrow, TOC header, officer label, invariant number) all sharing 11px/800/0.05–0.08em tracking.

### Hierarchy
- **Hero Title** (w800, 34px desktop / 26px ≤960px, 1.25 line-height): the page-level statutory title (e.g. "Privacy Policy").
- **Section Heading** (w800, 22px, left saffron border + icon): top-level content sections.
- **Sub Heading** (w700, 17px): subsections within a content block.
- **Body** (w400, 15px, 1.7 line-height): the statutory text itself — wider line-height than Paper's UI copy because this is read, not scanned.
- **Label** (w700, 14px): buttons, officer values, table headers.
- **Eyebrow** (w800, 11px, uppercase, 0.05–0.08em): brand subtitle, TOC header, officer labels, invariant numbers, status badges.

### Named Rules
**The Reading-Density Rule.** Body line-height here is 1.65–1.7, noticeably looser than Paper's 1.45–1.55 UI copy — this site is read start-to-finish as a legal document, not scanned as an interface, and the type sets that expectation.

## Layout

A classic two-column document layout: a 280px sticky sidebar (table of contents, live search) beside a `minmax(0, 1fr)` content column, inside a 1200px (`--content-max-width`) centered shell. Collapses to a single column with the TOC flowing above content at ≤960px, and the sticky header drops from a fixed 72px to an auto-height wrapped layout at ≤680px, where the nav links become a horizontally-scrollable rail rather than wrapping. A dedicated print stylesheet strips all chrome (header, sidebar, buttons, footer) to produce a clean document for PDF/paper output — a requirement this site has that the product app does not.

## Elevation & Depth

Flat-leaning with restrained elevation: three shadow levels (`--shadow-sm/md/lg`) used sparingly — resting cards sit at `sm`, the interactive account-deletion tool at `md`. The one piece of depth-via-translucency on the site is the sticky header's glassmorphic surface (`rgba(255,255,255,0.85)` light / `rgba(28,25,23,0.85)` dark, `backdrop-filter: blur(12px)`), used because the header must float over scrolling content without fully obscuring it — this is the site's one departure from flat document styling, present only where motion-over-content genuinely demands it.

### Shadow Vocabulary
- **`sm`** (`0 1px 2px rgba(0,0,0,.05)` light / `rgba(0,0,0,.3)` dark): resting cards — brand logo, TOC card, content area.
- **`md`** (`0 4px 6px -1px rgba(0,0,0,.07), 0 2px 4px -2px rgba(0,0,0,.05)` light / `rgba(0,0,0,.4)` dark): the interactive deletion tool card — the one card on the site inviting a destructive action.
- **`lg`** (`0 10px 25px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.04)` light / `rgba(0,0,0,.6)` dark): reserved for overlay/dialog-weight surfaces.

## Shapes

A tighter, more restrained radius scale than Paper's: `sm` (6px) for inline code and small TOC highlights, `md` (10px) for the overwhelming majority of components (buttons, inputs, callouts, cards, badges' base shape before the pill override), `lg` (16px) for the TOC card and major content containers, `full` (9999px) reserved for pill badges and the hero compliance chip. Nothing on this site uses Paper's generous 20–26px card radii — the Gazette's geometry is crisper and more document-like throughout.

## Components

### Buttons
- **Shape:** 10px radius (`--radius-md`), never a pill — the one geometric constant distinguishing every button on this site from Paper's always-pill buttons.
- **Primary:** Saffron fill, inverse (white/near-black) text; hover darkens to `--color-primary-hover`.
- **Secondary:** White/dark surface, `--color-border` outline, body-ink text; hover shifts to `--color-surface-subtle`.
- **Danger:** `--color-red` fill, inverse text, hover `#991B1B` — used once, for the account-deletion confirmation submit.
- **Icon buttons (`.btn-icon`):** 38×38px square, same 10px radius, used for the print and theme-toggle controls in the header only.

### Callouts
- **Shape:** 10px radius, 20/22px padding, 1px border.
- **Four tones:** Primary (saffron, general notices), Teal (verified/compliance facts), Amber (warnings/caveats), Red (danger/erasure) — each pairs a `-light` tint background with a matching `-border` and the tone's ink color for the header text.

### Cards
- **TOC Card / Content Area / Officer Card:** white (or dark-stone) surface, `--color-border`, 16px radius (`lg`), `shadow-sm`.
- **Deletion Tool Card:** the one card with a heavier 2px border in `--color-primary-border` and `shadow-md` — visually flagged as the site's single interactive, consequential component.

### Inputs / Fields
- **Style:** `--color-surface-subtle` background at rest, `--color-border` outline, 10px radius.
- **Focus:** border shifts to `--color-primary`, with a 3px `--color-primary-light` glow — the same "tinted ring" focus language as Paper, in saffron instead of denim.

### Badges
- **Style:** pill (`--radius-full`), 11px uppercase label, 3px/8px padding.
- **Three tones:** Affirmative/Yes (teal), Negative/No (neutral surface-subtle), Warning (amber) — used almost exclusively on the Data Safety declarations table.

### Navigation
- **Header:** sticky, glassmorphic, 72px tall; brand lockup (42px logo + title/subtitle) on the left, nav links + icon-button actions on the right.
- **Nav Links:** 10px-radius pill-free rounded rectangles, saffron on hover/active with a tinted background pill.
- **Table of Contents (sidebar):** sticky, scrollspy-driven active-link highlighting via `IntersectionObserver`, plus a live client-side search filter over page content.

### FAQ Accordion
`<details>`-based accordion (`delete-account.html`): plain `+`/`−` text indicator, no icon library, 10px-radius bordered container — the simplest possible disclosure pattern, matching the document-first register instead of an app-style expandable card.

## Do's and Don'ts

### Do:
- **Do** keep this palette (saffron/ivory/teal/amber/red) fully independent from Paper's (denim/coffee/mauve) — they are two different registers for two different audiences, not two themes of one system.
- **Do** use the loose 1.6–1.7 body line-height here; this is read start-to-finish, unlike Paper's scanned UI copy.
- **Do** keep every button a 10px-radius rounded rectangle — never introduce Paper's pill button shape onto this site.
- **Do** render the 18 Agrawal Gotra names and any other Devanagari text in `--font-devanagari`, matching the product app's bilingual commitment.
- **Do** keep the print stylesheet's full-chrome-strip behavior working for every new page added to this site — these are statutory documents people need to print/PDF.

### Don't:
- **Don't** reach for Paper's 20–26px card radii here — the Gazette's components stay at 10–16px, crisper and more document-like.
- **Don't** place `--color-red`/`--color-teal`/`--color-amber` directly on `--color-bg` or `--color-surface` — use their paired `-light` tint or a bordered callout/badge.
- **Don't** add tactile/spring motion (Paper's `PaperPressable` language) to this site — it's a reading surface, and its only motion is the header's glass blur and standard 0.15s hover/focus transitions.
- **Don't** treat the visual divergence from Paper as a bug to fix — see The Two-Registers Rule; unifying them would blur a deliberate public-vs-private distinction.
