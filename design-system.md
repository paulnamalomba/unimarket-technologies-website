# Unimarket Technologies Design System

## Contents

- [Unimarket Technologies Design System](#unimarket-technologies-design-system)
  - [Contents](#contents)
  - [1. Purpose](#1-purpose)
  - [2. Brand idea](#2-brand-idea)
  - [3. Logo](#3-logo)
  - [4. Color system](#4-color-system)
    - [4.1 Brand palette](#41-brand-palette)
    - [4.2 Semantic usage](#42-semantic-usage)
  - [5. Typography](#5-typography)
    - [5.1 Family](#51-family)
    - [5.2 Scale](#52-scale)
  - [6. Layout and spacing](#6-layout-and-spacing)
  - [7. Shape, borders, and depth](#7-shape-borders-and-depth)
  - [8. Buttons](#8-buttons)
  - [9. Forms](#9-forms)
  - [10. Cards and surfaces](#10-cards-and-surfaces)
  - [11. Navigation](#11-navigation)
  - [12. Icon system](#12-icon-system)
  - [13. Imagery and Next.js optimization](#13-imagery-and-nextjs-optimization)
  - [14. Motion](#14-motion)
  - [15. Responsive behavior](#15-responsive-behavior)
  - [16. Accessibility](#16-accessibility)
  - [17. Content voice](#17-content-voice)
  - [18. Recommended page system](#18-recommended-page-system)
  - [19. Implementation conventions](#19-implementation-conventions)
  - [20. Governance checklist](#20-governance-checklist)

---

## 1. Purpose

This document is the source of truth for Unimarket Technologies’ public website and reusable digital-product language. It translates the approved logo into a practical system for Next.js, Tailwind CSS, shadcn/ui-style components, iconography, imagery, motion, accessibility, and future product expansion.

The system should make Unimarket Technologies feel:

- Technically capable, modern, and dependable.
- Business-minded rather than trend-driven.
- Locally relevant to Malawi while credible to regional and international clients.
- Approachable enough for small businesses and robust enough for enterprise buyers.

## 2. Brand idea

**Positioning:** technology that connects business needs to working digital systems.

**Recommended brand promise:** “Practical technology. Built around your business.”

**Personality:** clear, inventive, composed, collaborative, precise, optimistic.

The circuit-like monogram communicates connection, systems, information flow, and interoperability. Rounded geometry prevents the identity from feeling cold. Interfaces should repeat that balance: structured but human, polished but not ornamental.

## 3. Logo

Master asset: `public/logos/logo-design-1-no-bg.png`.

Rules:

- Render with `next/image`; always provide `width`, `height`, `sizes`, and descriptive alt text.
- Preserve the original ratio and transparent background.
- Use the complete logo in primary navigation, proposals, contact areas, and social preview artwork.
- A future approved monogram-only export may be used for favicons and compact product chrome.
- Keep clear space around the logo equal to at least the height of the lowercase “u”.
- Minimum recommended digital width: 148px for the full lockup.
- Prefer white or very pale blue backgrounds. On dark navy, use an approved light/reversed export—not CSS filters.
- Never stretch, crop, rotate, recolor, outline, bevel, glow, or reconstruct the logo from typography.

## 4. Color system

The primary blues are sampled and normalized from the logo. Semantic tokens are defined in `src/styles/variables.css` and exposed through `tailwind.config.ts`.

### 4.1 Brand palette

| Token | Value | Role |
|---|---:|---|
| `brand-950` | `#073071` | Deep navy, premium dark sections |
| `brand-800` | `#104896` | Strong hover and dark brand surface |
| `brand-700` | `#1652A6` | Primary action and link color |
| `brand-600` | `#3470B3` | Secondary brand accent |
| `brand-500` | `#3E80C3` | Highlights, diagrams, data accents |
| `brand-100` | `#DBEAF8` | Soft selected and informational surfaces |
| `brand-50` | `#F4F9FD` | Pale section background |

Supporting neutrals:

| Name | Value | Use |
|---|---:|---|
| Ink | `#111F31` | Primary text |
| Slate | `#536477` | Secondary text |
| Line | `#DCE3EB` | Borders and separators |
| Canvas | `#F7F9FC` | Alternate page sections |
| White | `#FFFFFF` | Primary canvas and card surface |

Status colors must remain semantic and should not compete with the brand:

- Success: `#15803D`
- Warning: `#B45309`
- Error: `#DC2626`
- Information: `brand-600`

### 4.2 Semantic usage

Use shadcn-compatible names in component code: `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, and `ring`.

Do not use raw hex values in components unless documenting a chart palette or integrating a fixed third-party brand. Theme changes should happen at the token layer.

Primary color should cover roughly 10–20% of a typical light page. White and cool neutral space should dominate. Dark navy sections are deliberate punctuation, not the default background for every block.

## 5. Typography

### 5.1 Family

Google Inter is the primary typeface because its geometric construction aligns with the wordmark. Load it through `next/font/google` using weights 400, 500, 600, 700, and 800.

Use system sans fallbacks. Use a monospaced system stack only for code, transaction IDs, or technical data.

### 5.2 Scale

| Style | Mobile | Desktop | Weight / line height |
|---|---|---|---|
| Display | 44px | 64–72px | 700 / 1.02 |
| H1 | 40px | 56px | 700 / 1.08 |
| H2 | 32px | 44px | 700 / 1.12 |
| H3 | 24px | 30px | 600 / 1.2 |
| H4 | 20px | 22px | 600 / 1.3 |
| Large body | 18px | 20px | 400 / 1.65 |
| Body | 16px | 16px | 400 / 1.65 |
| Small | 14px | 14px | 400 / 1.55 |
| Label | 13px | 14px | 600 / 1.3 |

Headings use `-0.035em` tracking and balanced wrapping. Body copy uses `-0.01em` tracking and pretty wrapping. Keep paragraph measures between 55 and 72 characters.

Avoid all-caps paragraphs. Eyebrows may use uppercase at 12–13px with `0.08em` tracking.

## 6. Layout and spacing

- Base spacing unit: 4px.
- Common sequence: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Content maximum: 86rem.
- Reading content maximum: 44rem.
- Mobile gutters: 20px; tablet: 32px; desktop: 40–48px.
- Standard section spacing: 72px mobile and 112px desktop.
- Use a 12-column desktop grid, 8-column tablet grid, and 4-column mobile grid.

Pages should feel spacious and structured. Avoid placing every piece of content inside a card. Use cards only when grouping, comparison, hierarchy, or interaction benefits from a distinct boundary.

## 7. Shape, borders, and depth

- Default control radius: 12px (`rounded-lg`).
- Compact controls: 8px (`rounded-sm`).
- Cards: 16px (`rounded-card`).
- Promotional/hero panels: 20–24px when scale warrants it.
- Pills: `9999px`, reserved for tags, statuses, and segmented controls.
- Default border: 1px cool slate line.
- Default card shadow: subtle blue-tinted depth.
- Floating shadow: reserved for dropdowns, dialogs, and hover emphasis.

Do not make every button pill-shaped. The brand lettering is rounded, but disciplined 10–12px button radii feel more credible for business software.

## 8. Buttons

Follow shadcn/ui’s variant model through the shared `BaseButton`.

| Variant | Use |
|---|---|
| `default` | Primary page action; normally one per decision area |
| `secondary` | Supporting action with lower emphasis |
| `outline` | Tertiary action on a light surface |
| `ghost` | Toolbars, navigation, and low-emphasis actions |
| `link` | Inline navigation that should read as a link |
| `destructive` | Irreversible or dangerous action only |

Sizes: `sm` 36px, `md` 40px, `lg` 48px, `icon` 40px square.

Rules:

- Use sentence case and an action verb: “Request a consultation”, “Explore POS solutions”.
- Add a right arrow only when it clarifies forward navigation.
- Minimum touch target is 44×44px, even if the visible control is smaller.
- Loading state keeps the button width stable and replaces the leading icon with a spinner.
- Disabled controls remain legible and are never the only explanation for unavailable action.
- Hover uses color and restrained elevation; avoid scaling controls.

Button variants are implemented centrally with Class Variance Authority and should not be recreated ad hoc in page components.

## 9. Forms

Forms use shadcn-style field composition:

- Persistent visible label above the control.
- Optional help text below the label or control.
- 40–44px field height, 12px radius, semantic border and focus ring.
- Placeholder text is an example, never a substitute for the label.
- Errors are linked with `aria-describedby` and explain how to recover.
- Group long enquiry forms into logical sections.

Recommended consultation fields: name, organization, work email, phone, service interest, company size, project stage, budget range (optional), message, and consent.

## 10. Cards and surfaces

Core card types:

- **Service card:** icon, title, concise outcome, optional link.
- **Solution card:** business challenge, solution, expected result.
- **Case study card:** sector, problem, intervention, measurable outcome.
- **Metric card:** value, label, context; never a decorative number without meaning.
- **Testimonial card:** quote, name, role, organization; only use verified statements.
- **Process card:** numbered phase, activity, deliverable.

Cards use white surfaces, thin borders, 16px radii, and subtle depth. On hover, shift border color and shadow; use no more than 2px vertical movement. Glassmorphism is reserved for overlays on photographic or dark hero surfaces and must maintain contrast.

## 11. Navigation

Recommended primary information architecture:

- Home
- Solutions
  - Business Solutions
  - POS Software
  - Card Machines
  - MRA EIS
  - Enterprise Software
- Services
  - UX/UI Design
  - Website Development
  - Full-stack Applications
- Work / Case Studies
- About
- Contact

Primary header CTA: **Request a consultation**.

The desktop header is sticky, 72–80px tall, and gains a white translucent surface with border/shadow after scrolling. Mobile navigation opens as an accessible sheet. Dropdowns support pointer and keyboard input and use meaningful `aria` state.

## 12. Icon system

Lucide React is the preferred interface set because its clean 2px outline language fits shadcn/ui. Material UI icons remain available for specialist concepts or existing components.

Rules:

- Import semantic aliases from `src/icons/lucide.ts` or the project icon barrel.
- Do not mix Lucide and MUI icons in one tightly grouped control set.
- Standard sizes: 16px inline, 20px controls, 24px navigation, 32px feature cards.
- Use `currentColor`; do not hard-code icon fills in feature components.
- Decorative icons use `aria-hidden="true"`. Icon-only buttons require an accessible label and tooltip.

Custom icon extensibility:

1. Create an SVG React component under `src/icons/custom/`.
2. Use a 24×24 viewBox, `currentColor`, round caps/joins, and the standard optical weight.
3. Export it with a semantic name from the icon barrel.
4. Keep the consuming component unaware of whether the icon comes from Lucide, MUI, or custom SVG.

Suggested service mappings: `Nfc` for POS, `CreditCard` for card machines, `ReceiptText` for MRA EIS, `Building2` for enterprise software, `Palette` for UX/UI, `Code2` for development.

## 13. Imagery and Next.js optimization

- Use `next/image` for all raster content.
- Supply intrinsic dimensions or `fill` with a sized parent to prevent layout shift.
- Provide a truthful `sizes` attribute.
- Use `priority` only for the likely LCP image.
- Prefer AVIF/WebP output through Next.js; do not manually ship oversized hero PNGs.
- Use `quality={75–85}` unless visual review proves otherwise.
- Use descriptive alt text for informative images and empty alt text for decorative images.
- Use local assets for approved brand imagery; configure remote image domains explicitly.
- Avoid generic “people pointing at holograms” stock imagery. Favor real retail environments, teams, terminals, dashboards, workshops, and locally credible Malawi/African business contexts.

The logo remains PNG until an approved vector master is supplied.

## 14. Motion

- Duration: 120–180ms for controls, 200–300ms for panels.
- Easing: `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Motion communicates state, hierarchy, or continuity.
- Respect `prefers-reduced-motion`; remove non-essential transforms and auto-animation.
- Avoid continuous gradient animation, dramatic scaling, parallax, and scroll-jacking.

## 15. Responsive behavior

Design mobile-first at 360px, then verify 390px, 768px, 1024px, 1280px, and 1440px.

- Collapse service grids from 3 columns to 2 to 1.
- Keep primary CTA visible without crowding the mobile header.
- Stack split heroes with copy first unless product imagery is essential for comprehension.
- Avoid horizontal scrolling except deliberate data tables or carousels with clear affordances.
- Make comparison tables transform into labeled cards on small screens.

## 16. Accessibility

Target WCAG 2.2 AA:

- 4.5:1 contrast for normal text; 3:1 for large text and UI boundaries.
- Visible keyboard focus on every interactive element.
- Logical heading hierarchy and landmark structure.
- Skip link to main content.
- Keyboard-accessible menus, sheets, tabs, dialogs, and carousels.
- 44×44px touch targets.
- Form error summaries for multi-field submission failures.
- No information communicated by color alone.
- Reduced-motion support.
- Screen-reader text for icon-only controls and external-link behavior where useful.

## 17. Content voice

Write with practical confidence. Start with the business outcome, then explain the technology.

Prefer:

- “Connect sales, stock, payments, and reporting in one workflow.”
- “Build a compliant invoicing process around how your team actually works.”

Avoid:

- Unsupported claims such as “the best” or “revolutionary”.
- Dense technical jargon before the customer problem is clear.
- Invented client counts, certifications, partnerships, testimonials, or ROI.
- Treating MRA EIS compliance as a guarantee; copy must be reviewed against current MRA requirements.

## 18. Recommended page system

Home:

1. Header.
2. Outcome-led hero with consultation CTA and logo/product visual.
3. Trust strip using only verified evidence.
4. Solutions grid.
5. “From idea to operation” delivery process.
6. POS/MRA EIS featured solution.
7. Selected work or capability proof.
8. Industries served.
9. Final consultation CTA.
10. Footer.

Solution detail pages use: problem, audience, solution, capabilities, workflow, integration/compliance notes, proof, FAQ, CTA.

Service detail pages use: outcome, approach, deliverables, process, relevant work, FAQ, CTA.

## 19. Implementation conventions

- Server components by default.
- Tailwind utilities for local composition; CSS variables for global tokens.
- Use `cn()` for conditional class merging.
- Keep primitive components in `src/components/ui`.
- Compose domain components from primitives; do not fork primitive styles per page.
- Use typed variants. If Class Variance Authority is introduced later, migrate variants centrally.
- Keep page copy and repeatable data in typed config/content modules.
- Do not adopt MUI’s full visual theme alongside Tailwind; use MUI for icons only unless an explicit product surface requires otherwise.

## 20. Governance checklist

Before merging a design-system change:

- Does it use semantic tokens?
- Does it work in keyboard, mobile, loading, empty, error, and disabled states?
- Does it preserve logo rules and typography?
- Does it meet contrast and reduced-motion requirements?
- Does it use the shared component/icon contract?
- Are image dimensions and `sizes` correct?
- Are documentation and implementation aligned?
- Does lint and production build pass?

If a one-page improvement weakens system consistency, the change is incomplete.
