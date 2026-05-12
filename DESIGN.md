---
name: Sandesh Chapagain — Portfolio
description: Personal portfolio for a systems builder and co-founder. Dark, precise, technically grounded.
colors:
  void-black:       "#060608"
  card-surface:     "#0d0d12"
  raised-surface:   "#13131a"
  wire:             "#1e1e28"
  wire-hi:          "#2e2e3e"
  lunar-white:      "#f0f0f8"
  fog:              "#6b6b80"
  deep-signal-violet: "#7c6dfa"
  frequency-blue:   "#38bdf8"
  go-green:         "#22d3a4"
  amber-flag:       "#f59e0b"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.032em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.82
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.08em"
rounded:
  sm: "5px"
  md: "8px"
  lg: "10px"
  xl: "16px"
spacing:
  xs: "6px"
  sm: "14px"
  md: "28px"
  lg: "52px"
  xl: "80px"
  2xl: "100px"
components:
  button-primary:
    backgroundColor: "{colors.deep-signal-violet}"
    textColor: "{colors.lunar-white}"
    rounded: "{rounded.lg}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.deep-signal-violet}"
    textColor: "{colors.lunar-white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.lunar-white}"
    rounded: "{rounded.lg}"
    padding: "13px 26px"
  button-ghost-hover:
    backgroundColor: "{colors.raised-surface}"
    textColor: "{colors.lunar-white}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.fog}"
    rounded: "{rounded.sm}"
    padding: "4px 9px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.fog}"
    rounded: "{rounded.md}"
    padding: "7px 14px"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.lunar-white}"
  nav-cv:
    backgroundColor: "{colors.raised-surface}"
    textColor: "{colors.lunar-white}"
    rounded: "{rounded.md}"
    padding: "8px 17px"
---

# Design System: Sandesh Chapagain — Portfolio

## 1. Overview

**Creative North Star: "The Working Draft"**

The portfolio of an engineer who builds before polishing. Precision coexists with roughness — not because corners are cut, but because the marks of craft are honest. Dark surfaces, tight type, measured spacing. The design does not perform its own intelligence; it holds the work without getting in the way.

The system takes Linear's discipline as its floor: nothing wasted, nothing present without a reason. On top of that discipline sits something less predictable — a specificity that rewards attention. A shadow that's heavier than expected. A metric that lands before you can look away. A label that uses monospace not because it's fashionable but because the content is technical and deserves to look it.

Ambient depth throughout. Nothing is truly flat — surfaces layer with diffuse shadows that suggest weight without declaring it. The interface has physical presence, not just visual structure.

**What this system explicitly rejects:** theatrical scroll reveals (beautiful and empty), gradient text (decorative, never meaningful), the hero-metric template (big number, small label, SaaS-energy), identical card grids (lazy), glassmorphism as default (never), side-stripe borders (reflex pattern, always wrong).

**Key Characteristics:**
- Dark tonal stack from void-black through three surface steps
- One primary accent (Deep Signal Violet) used sparingly — its rarity is the point
- Monospace labels as a technical register marker, not decoration
- Ambient shadows on all surfaces — depth through diffusion, not structure
- Body text capped at 70ch; hierarchy through weight contrast of at least 2 steps

## 2. Colors: The Void Spectrum

One deep accent on a near-black foundation. Secondary blue for technical callouts only.

### Primary
- **Deep Signal Violet** (`#7c6dfa` / oklch(60% 0.19 280)): The primary accent. Used on interactive elements, active states, and the single most important signal on any screen. Appears on less than 10% of any given surface — its rarity is what makes it register.

### Secondary
- **Frequency Blue** (`#38bdf8` / oklch(74% 0.14 215)): Secondary accent for code elements, technical tags, and ambient glow effects on key interactive moments. Never used as a background.

### Tertiary
- **Go Green** (`#22d3a4`): Status color only. Live indicators, success states. Never decorative.
- **Amber Flag** (`#f59e0b`): Warning and in-progress states only.

### Neutral
- **Void Black** (`#060608`): Page background. Near-black with a barely perceptible violet tint (chroma 0.008) so it reads dark but not dead.
- **Card Surface** (`#0d0d12`): Immediate lift above the void. Cards, panels, inline code blocks.
- **Raised Surface** (`#13131a`): Second lift. Hovered cards, active sidebar items, subtle containers.
- **Wire** (`#1e1e28`): Default border. Every divider and separator.
- **Wire Hi** (`#2e2e3e`): Emphasized border. Used on focused or hovered interactive elements.
- **Lunar White** (`#f0f0f8`): Primary text. Slightly cool, tilted toward violet. Never pure white.
- **Fog** (`#6b6b80`): Secondary text, metadata, inactive labels. Roughly 50% luminosity against void-black.

### Named Rules
**The One Voice Rule.** Deep Signal Violet appears on at most 10% of any given screen. It marks the one thing that matters. Never use it as a background fill, a gradient partner, or a decorative stroke.

**The Tinted Neutral Rule.** No neutral is truly grey. Every background, text color, and border leans violet (chroma 0.005–0.01). The surface reads dark, not ash.

## 3. Typography

**Display / Body Font:** Inter (system-ui fallback)
**Label / Code Font:** JetBrains Mono (monospace fallback)

**Character:** Inter at heavy weights with tight letter-spacing carries technical authority without feeling cold. JetBrains Mono appears specifically where content is technical — stack tags, code snippets, section markers — making the distinction between prose and metadata visible without explanation.

### Hierarchy
- **Display** (800, clamp(2.75rem→4.5rem), 1.02 lh, -0.04em ls): Hero headlines, case study titles. Used once per page.
- **Headline** (800, clamp(1.75rem→2.75rem), 1.08 lh, -0.032em ls): Section titles, page headers.
- **Title** (800, 1.125rem, 1.3 lh, -0.02em ls): Card names, subsection headers, sidebar headings.
- **Body** (400, 0.9375rem, 1.82 lh): All prose. Max line length 70ch.
- **Label** (JetBrains Mono 500, 0.6875rem, 1.5 lh, 0.08em ls, uppercase): Section markers, stack tags, metadata chips, status indicators. Always uppercase, always monospace.

### Named Rules
**The Mono Boundary Rule.** JetBrains Mono appears only when the content is genuinely technical: code, stack names, section glyphs, status labels. Using it for body copy, headings, or decorative text erases its signal value.

**The Weight Jump Rule.** Adjacent type hierarchy steps must differ by at least 1 weight step (e.g. body 400 → title 800, not 400 → 500). Flat weight scales produce flat hierarchy.

## 4. Elevation

Ambient shadows throughout. No surface is truly flush — everything carries a diffuse shadow that gives the interface physical weight without announcing itself. Shadows are not used for structural hierarchy (that is handled by tonal layering: void-black → card-surface → raised-surface). Shadows express mass.

### Shadow Vocabulary
- **Ambient Low** (`0 2px 12px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)`): Resting state on all card and panel surfaces.
- **Ambient Medium** (`0 8px 32px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.35)`): Hovered cards, focused panels, elevated modals.
- **Accent Glow** (`0 0 24px rgba(124,109,250,0.18), 0 0 8px rgba(124,109,250,0.1)`): On elements where Deep Signal Violet is the primary color. The violet radiates softly outward. Used only on accent-colored interactive elements at hover/focus state.
- **Accent2 Glow** (`0 0 20px rgba(56,189,248,0.14)`): On Frequency Blue interactive moments only.

### Named Rules
**The Mass Rule.** Every card, panel, and container carries Ambient Low at rest. Nothing is truly flat. The interface has physical presence.

**The State Lift Rule.** Hover and focus states graduate from Ambient Low to Ambient Medium. The object rises to meet the cursor.

## 5. Components

### Buttons

**Character:** Measured and direct. Primary button is the only solid-fill surface that uses Deep Signal Violet. Ghost button is near-invisible at rest, legible on hover.

- **Shape:** Gently curved (10px radius). Not sharp, not pill-shaped.
- **Primary:** Deep Signal Violet fill (`#7c6dfa`), Lunar White text, 13px 26px padding, 14px font-size, 700 weight. Hover: translateY(-2px) + Accent Glow shadow.
- **Ghost:** Transparent background, Wire Hi border (`#2e2e3e`), Lunar White text. Hover: Raised Surface background, Wire Hi border shifts to Deep Signal Violet, faint Accent Glow.
- **Both:** 0.25s ease transition on transform, box-shadow, border-color.

### Tags / Chips

**Character:** Monospace, low-contrast, purely informational. Never interactive unless explicitly labeled.

- **Style:** JetBrains Mono 500, 11px, 0.07em letter-spacing. Transparent background, Wire border (`#1e1e28`), 2% white fill, Fog text.
- **Shape:** 5px radius (sm).
- **Hover (on parent card):** Border steps up to Wire Hi, text steps up to Lunar White.

### Cards / Containers

**Character:** Surfaces with physical weight. Not flat tiles; objects with depth.

- **Corner Style:** Gently curved (16px radius, xl).
- **Background:** Card Surface (`#0d0d12`), Wire border.
- **Shadow Strategy:** Ambient Low at rest; Ambient Medium on hover.
- **Hover:** translateY(-5px), border fades to transparent (replaced by Ambient Medium shadow), optional radial glow tracks cursor position via CSS custom properties.
- **Internal Padding:** 32px (md spacing scale).

### Navigation

- **Container:** Fixed, 64px height, transparent border-bottom at rest; Wire border + backdrop-blur(20px) + 85% opacity void-black background on scroll.
- **Logo:** 16px Inter 800, Deep Signal Violet as a single solid color (not gradient). Tight tracking.
- **Links:** 13px Inter 500, Fog at rest; Lunar White + Raised Surface background on hover. 7px/14px padding (rounded-lg). Active state: Lunar White, 1px Wire Hi underline at bottom edge.
- **CV button:** Raised Surface background, Wire Hi border, Lunar White text. Hover: Wire Hi → Deep Signal Violet border, faint Accent Glow. Inline download icon.

### Case Study Sidebar Cards

**Character:** Reference material. Quiet, legible, lower visual weight than main content.

- **Background:** Card Surface.
- **Header:** JetBrains Mono label (uppercase, 11px, Fog).
- **Content:** 13px body, Fog text, 1.65 line-height.
- **Padding:** 24px.
- **Spacing:** 14px gap between sibling cards.

### Metric Display

**Character:** Outcomes stated plainly. Not a SaaS hero block — these are results, not promises.

- **Value:** Display weight (800), 22px, Lunar White. Accent number in Deep Signal Violet.
- **Label:** JetBrains Mono label, uppercase, 11px, Fog, 0.04em tracking.
- **Container:** Raised Surface background, Wire border, 18px/20px padding, lg radius.
- **Layout:** 2-column grid where count allows; single column on mobile.

## 6. Do's and Don'ts

### Do:
- **Do** tint every neutral toward violet (chroma 0.005–0.01). `#060608`, not `#060606`.
- **Do** use JetBrains Mono exclusively for technical content: tags, code, section glyphs, status labels.
- **Do** apply Ambient Low shadow to every card at rest. Nothing is flat.
- **Do** use Deep Signal Violet on at most 10% of any screen. Once per primary action per view.
- **Do** write body text with a 70ch line-length cap. Long lines on a 1100px layout will break readability.
- **Do** vary spacing intentionally: sections breathe at 100px, cards sit at 32px, labels gap at 6px. Rhythm is not uniform padding.
- **Do** graduate shadows from Ambient Low (rest) to Ambient Medium (hover). The object rises.
- **Do** write in first person, direct, specific: "I built X to solve Y" not "passionate about Z."

### Don't:
- **Don't** use gradient text (`background-clip: text` + gradient). This applies to the logo, headlines, and every other text element. The nav logo currently uses this — it must be replaced with a single solid color.
- **Don't** build a theatrical portfolio. No slow scroll reveals that exist to impress. No full-screen imagery, no typographic performances that obscure rather than clarify. This is the design agency anti-reference named in PRODUCT.md, verbatim.
- **Don't** use side-stripe borders (`border-left` or `border-right` greater than 1px as a colored accent). Never intentional. Rewrite with full borders, background tints, or nothing.
- **Don't** build the hero-metric template: big number, small label, supporting stats, gradient accent. That's SaaS energy. Metrics here are outcomes, stated plainly in context.
- **Don't** use glassmorphism as default. No backdrop-blur cards used decoratively.
- **Don't** build an identical card grid. If three projects are displayed as the same-sized card with icon + heading + body, the layout has failed.
- **Don't** use a generic dev portfolio tone: no GitHub star counts, no "I love coffee and code," no pastel tones.
- **Don't** use a hacker/terminal aesthetic: no green-on-black, no ASCII decoration, no monospace headings. JetBrains Mono is for labels only.
- **Don't** write em dashes. Use colons, commas, semicolons, or parentheses.
