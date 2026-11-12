---
name: Daniel Pachón · Career Transit Map
description: A personal portfolio drawn as a transit network whose interchange is the person.
colors:
  paper: "#f4f6f8"
  sheet: "#ffffff"
  ink: "#12161b"
  ink-2: "#3c4550"
  ink-3: "#5a6470"
  software: "#1e5bd6"
  data: "#0e8653"
  sales: "#f0a500"
  software-ink: "#1a4fbb"
  data-ink: "#0b7246"
  sales-ink: "#8a5a00"
  paper-dark: "#0e1217"
  sheet-dark: "#161b22"
  ink-dark: "#e8ecf1"
  software-dark: "#5c8ef2"
  data-dark: "#2db37a"
  sales-dark: "#f5b73a"
typography:
  display:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5.6vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Overpass Variable, Overpass, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
rounded:
  pill: "999px"
  button: "12px"
  media: "16px"
spacing:
  gap-sm: "10px"
  gap-md: "24px"
  section: "clamp(64px, 11vh, 128px)"
  page-pad: "clamp(16px, 4vw, 40px)"
components:
  button-primary:
    backgroundColor: "{colors.software}"
    textColor: "{colors.sheet}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "46px"
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "0 18px"
    height: "46px"
  line-pill-software:
    backgroundColor: "{colors.software}"
    textColor: "{colors.sheet}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "3px 12px 1px"
---

# Design System: Daniel Pachón · Career Transit Map

## Overview

The portfolio is a transit map. Three lines, one per discipline (Software, Data, Sales), run in from the left edge, bend at 45° into a parallel bundle, pass through an interchange station that frames the black and white portrait, and continue to a terminus named after where he is heading. Every later section reuses the same vocabulary: strip maps for the career, stops on a line for the stack, a bundle running into a buffer stop for contact.

It is signage, not illustration: flat strokes, one face, fixed colors. The map is the only ornament.

## Colors

### Primary
- **Software blue** (`#1e5bd6`, dark `#5c8ef2`): the Software line, the primary action, focus rings, selection.

### Secondary
- **Data green** (`#0e8653`, dark `#2db37a`): the Data line only.
- **Sales amber** (`#f0a500`, dark `#f5b73a`): the Sales line only. Text on amber is always ink.

### Neutral
- **Paper** (`#f4f6f8` / `#0e1217`): the cool map sheet. **Sheet** (`#ffffff` / `#161b22`): station fills, buttons, screenshots.
- **Ink** ramp (`ink`, `ink-2`, `ink-3`): text, the interchange ring, terminus bars, neutral stack line.

### Named Rules
- **One line, one color.** A line color always means its discipline. Never use green or amber as a generic accent.
- **Line-ink for text.** When a line color is used as text on paper it switches to its darker `-ink` variant for AA contrast.

## Typography

One family: Overpass, a highway-signage face, self-hosted through Fontsource.

### Hierarchy
- **Display** (800, up to 5.25rem, -0.035em): the station name in the hero and the contact headline.
- **Heading** (800, up to 3.75rem): section signs.
- **Body** (400, 1.0625rem, 1.55): copy kept to one or two sentences.
- **Label** (800, 0.875rem): line pills. Dates use 700 with `tabular-nums`.

### Named Rules
- **No eyebrows.** A section sign is a heading, optionally beside a line pill, never a label above it.

## Layout

Single 1240px column with `clamp(16px, 4vw, 40px)` gutters; route strokes bleed past the column to the viewport edge. The hero is a four-column grid (incoming lines, 72px bend, portrait, name and actions) whose middle row is exactly the 36px bundle. Below 820px the hero stacks: map row first, then name, actions, legend and terminus.

## Elevation & Depth

Flat map, with depth only where a physical object sits on it: the interchange (paper ring, ink ring, soft drop shadow) and the project screenshot (layered lift shadow plus a 1px inner outline). The sticky header gains a hairline and soft shadow once scrolled.

## Shapes

- Route strokes 8px (hero) and 6px (strips), 45° bends with round joins, 14px between parallel lines.
- Stops: 20px white circles with a 5px ring in the line color; planned stops are dashed.
- Pills fully round; buttons 12px; media 16px.

## Components

### Buttons
Primary is Software blue, secondary is sheet with a 1.5px inset ink ring, quiet is an underlined link. 46px tall, `scale(0.97)` on press, hover only on fine pointers.

### Chips
Line pills: the line color filled, label type. Used for line names, never for tags.

### Navigation
Station-ring monogram, four text links (hidden under 640px), and two segmented switches (language, theme) with the active option filled in ink.

### Strip map (signature)
A vertical route with stops: period, title, organisation. Jobs with more to say use a `details` disclosure on the title. With motion allowed, the route fills with scroll and stops light up as they are reached.

## Do's and Don'ts

### Do:
- Draw new content as stops on a line before inventing a container.
- Keep the intro to the one hero sequence, once per session, and nothing under reduced motion.
- Dash anything not built yet.

### Don't:
- Don't use cards, eyebrows, numbered sections or gradient text.
- Don't introduce a fourth line color without a fourth discipline.
- Don't add copy the CV already carries.
