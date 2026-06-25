# UX Prototype Prompts

These prompts share the same four-page prototype brief but are tuned to each tool’s strengths. Attach or upload `public/logos/logo-design-1-no-bg.png` when the tool supports assets. The implemented Next.js prototype is the authoritative reference for scope, content hierarchy, and brand treatment.

## Google Stitch prompt

```text
Remix the existing template in this Stitch project into a high-fidelity responsive website prototype for Unimarket Technologies, a Malawi-based technology startup and end-to-end business technology partner.

TEMPLATE-FIRST REQUIREMENT
The currently remixed Stitch template is the mandatory structural and visual base. Do not start from a blank design and do not replace it with a generic SaaS landing-page layout.

- Preserve the template’s recognizable composition, page rhythm, content density, responsive behavior, grid proportions, navigation model, hero arrangement, section ordering, card composition, image placement, CTA placement, footer structure, and interaction patterns.
- Preserve strong template-specific characteristics unless they conflict with accessibility, the Unimarket Technologies content model, or the supplied logo.
- Re-skin and adapt the existing template with Unimarket Technologies branding, content, services, icons, imagery, and calls to action.
- Map Unimarket Technologies sections into the closest existing template sections before adding new sections.
- Extend the same template language to any required page or state that does not already exist.
- Reuse and restyle existing components before introducing new component patterns.
- Remove or replace the template’s original company name, logo, copy, imagery, colors, links, testimonials, metrics, and product claims.
- Do not copy unsupported claims or fictional proof from the template.
- The final result should clearly look like a deliberate Unimarket Technologies remix of the supplied template—not a separate redesign that merely uses similar colors.

LOGO — STRICT ASSET REQUIREMENT
Use the PNG logo appended to this prompt as the actual Unimarket Technologies logo. The appended file is the approved brand artwork and must be placed directly into the prototype.

- Use the appended `logo-design-1-no-bg.png` file itself wherever the company logo appears.
- Preserve its complete circuit monogram, “unimarket technologies” wordmark, transparent background, proportions, colors, and spacing.
- Do not redraw, reinterpret, trace, regenerate, approximate, simplify, crop, recolor, or replace the appended PNG.
- Do not generate a new circuit symbol, lettermark, wordmark, SVG, vector logo, text-only substitute, or “similar” logo.
- Do not type “Unimarket Technologies” as a replacement for the logo in the header or footer.
- If Stitch cannot place the appended PNG in a particular frame, create a correctly sized image container explicitly labeled `PLACE EXACT APPENDED PNG LOGO HERE`. Do not hallucinate replacement artwork.
- Use the same appended PNG consistently in the header, footer, contact page, and any brand presentation.

Derive the surrounding interface—not the logo itself—from the PNG’s deep/electric blue circuit motif and rounded geometric Poppins wordmark. Use Poppins, white and cool-neutral canvases, deep navy #073071, primary blue #1652A6, secondary blue #3470B3, pale blue #F4F9FD, ink #111F31, slate #536477, and subtle borders #DCE3EB.

The company provides business solutions, POS software, card machines/payment terminals, Malawi Revenue Authority Electronic Invoicing System (MRA EIS) solutions, enterprise software, UX/UI design, website development, and full-stack web application development.

Position the company as practical, capable, precise, collaborative, and locally relevant—not as a generic futuristic agency. Use modern shadcn/ui-inspired component styling: 12px controls, 16px cards, restrained blue-tinted shadows, thin borders, strong visible focus states, and pill shapes only for tags/status. Avoid neon cyberpunk, excessive gradients/glass, 3D blobs, unsupported metrics, fake client logos, and generic hologram stock imagery.

Create exactly four prototype pages using the remixed template’s page patterns. Do not create additional standalone pages.

Design responsive 390px mobile, 768px tablet, and 1440px desktop views for:

1. Home.
2. Solutions overview.
3. POS + MRA EIS solution detail.
4. Contact / request-a-consultation.

Represent UX/UI design, website development, full-stack applications, enterprise software, About, and example work as sections or cards within these four pages—not as separate pages. Navigation links for unbuilt destinations may scroll to relevant Home sections or remain clearly marked prototype links.

IMAGE DIRECTION — NO VECTOR PLACEHOLDERS
Do not use generic vector illustrations, abstract SVG scenes, empty illustration boxes, wireframe image placeholders, gradient blobs, floating geometric shapes, or icon collages as substitutes for meaningful imagery.

- Make the best effort to source or generate realistic, high-quality images suited to the section.
- Prefer real photographic imagery when suitable images are available.
- When suitable photography is unavailable, generate polished AI imagery that appears credible, natural, and commercially usable.
- Show contemporary Malawian or broader African business environments where contextually appropriate: retail counters, shops, hospitality operations, business teams, payment terminals, card transactions, inventory work, invoice workflows, designers, and software developers.
- Avoid stereotypical imagery, visibly incorrect currency or official documents, fake government branding, distorted hands, illegible screens, and generic futuristic holograms.
- Use realistic device and interface mockups for POS, payment, invoicing, and dashboard concepts. Clearly label conceptual product interfaces when they do not represent a live product.
- Every major page should include at least one purposeful photographic or AI-generated image integrated into the template’s existing media composition.
- If an image cannot be produced, use a neutral photographic-content frame with a precise generation brief written inside it. Do not insert a vector illustration.

HOME CONTENT MAPPING
Fit the following content into the closest matching sections of the remixed template. Keep the template’s section treatment and relative order wherever possible; only add a section when the template has no suitable pattern.

- Header: use the template’s existing header structure with the exact appended PNG logo, Home, Solutions, Services, Work, About, Contact, and primary “Request a consultation” CTA. Convert an existing menu into accessible Solutions and Services dropdowns if needed.
- Hero eyebrow: “Business technology, designed to work.”
- Hero headline: “Connect your business to better systems.”
- Supporting copy explaining POS, electronic invoicing, enterprise software, websites, and full-stack products.
- Primary CTA: “Request a consultation”.
- Secondary CTA: “Explore solutions”.
- Adapt the template’s hero media area using realistic photography or a polished AI-generated business image combined with a credible POS/payment, invoice/reporting, or dashboard concept, clearly framed as conceptual where needed.
- Adapt the template’s logo/trust strip into: Strategy, Design, Engineering, Integration, Support.
- Adapt feature or product cards into: POS Software, Card Machines, MRA EIS, Enterprise Software, Business Solutions.
- Adapt a secondary feature section into: UX/UI Design, Website Development, Full-stack Applications.
- Adapt timeline, steps, or process elements into: Discover, Define, Design, Build, Integrate, Support.
- Adapt the strongest large feature section into the POS + MRA EIS workflow: Sale → Payment → Inventory update → Invoice/receipt → Reporting.
- Adapt portfolio/testimonial/proof sections into cards labeled “Example engagement”; do not invent clients or outcomes.
- Final CTA: “Let’s design the system your business needs next.”
- Retain the template’s footer composition while replacing its content with Unimarket Technologies solution/service links and placeholder contact details.

Use Lucide-style outline icons only for interface controls and small supporting service symbols: Nfc for POS, CreditCard for card machines, ReceiptText for MRA EIS, Building2 for enterprise software, Palette for UX/UI, and Code2 for development. Icons must not replace page imagery.

Within the four pages, include the relevant button, input, select, textarea, checkbox, badge, accordion, alert, loading, validation-error, disabled, and form-success states. Do not create a separate design-system page.

Before finalizing, compare the result with the remixed base template and confirm that its defining layout, spacing rhythm, responsive strategy, and component character remain recognizable.

Use realistic final copy, no lorem ipsum. Meet WCAG 2.2 AA, 44px touch targets, keyboard-friendly interaction annotations, visible focus, and reduced-motion behavior. Clearly mark unverified contact, partnership, testimonial, accreditation, and case-study content as placeholders.
```

## Figma prompt

```text
Remix the existing template in this Figma/Figma Make file into a responsive website design system and clickable UX prototype for Unimarket Technologies.

TEMPLATE-FIRST REQUIREMENT
The currently remixed Figma template is the mandatory base file and visual source of truth. Do not create an unrelated design from scratch.

- Audit the existing template’s pages, sections, frames, grids, variables, text styles, color styles, components, variants, Auto Layout rules, spacing, radii, imagery, and prototype links before editing.
- Preserve the template’s recognizable information hierarchy, hero composition, section rhythm, grid proportions, card anatomy, responsive behavior, navigation model, footer model, and strongest signature details.
- Duplicate or branch the original template pages before modifying them so the untouched base remains available for comparison.
- Rename and organize adapted layers and components for Unimarket Technologies; do not leave original brand naming in production-ready frames.
- Rebrand and repurpose existing components before creating new ones.
- Map Unimarket Technologies content into the nearest matching template sections. Add new patterns only when no suitable template pattern exists, and derive them from the template’s existing spacing and component logic.
- Replace all original branding, copy, imagery, links, testimonials, metrics, and claims. Do not inherit unsupported proof from the template.
- The completed file must remain visibly traceable to the remixed template while feeling fully owned by Unimarket Technologies.

Organize the adapted file into Foundations, Components, Patterns, and Responsive Pages. Reuse or normalize the template’s existing variables, styles, component properties, Auto Layout, and modes so the file can hand off cleanly to Next.js + Tailwind CSS.

FOUNDATIONS
- Attach and use the supplied Unimarket Technologies logo without modifying it.
- Font: Poppins 400/500/600/700/800.
- Color variables: brand/950 #073071, brand/800 #104896, brand/700 #1652A6, brand/600 #3470B3, brand/500 #3E80C3, brand/100 #DBEAF8, brand/50 #F4F9FD, ink #111F31, slate #536477, border #DCE3EB, canvas #F7F9FC, white #FFFFFF; include semantic primary, secondary, background, foreground, muted, border, input, ring, success, warning, destructive.
- Spacing variables based on 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Radius variables: 8 compact, 12 control, 16 card, 24 feature panel, full pill.
- Shadows: xs, card, floating, focus ring.
- Desktop 12-column, tablet 8-column, mobile 4-column grids.
- Type styles for Display, H1–H4, large body, body, small, label, eyebrow.

COMPONENTS
Adapt the remixed template’s existing Auto Layout components first, then complete missing properties and variants inspired by shadcn/ui:
- Buttons: default, secondary, outline, ghost, link, destructive × small/medium/large/icon × default/hover/focus/disabled/loading.
- Inputs, textarea, select, checkbox, radio with default/focus/filled/error/disabled.
- Header, dropdown/mega menu, mobile navigation sheet.
- Service card, solution card, metric card, process step, case-study card, testimonial placeholder.
- Badge, breadcrumb, tabs, accordion, alert, toast, tooltip, dialog, skeleton, empty/error/success states.
- Icon components use a consistent Lucide-style 2px outline and semantic names.

COMPANY AND CONTENT
Unimarket Technologies is a Malawi-based startup delivering business solutions, POS software, card machines/payment terminals, MRA EIS solutions, enterprise software, UX/UI design, website development, and full-stack web application development. Position it as a practical end-to-end partner that discovers, designs, builds, integrates, and supports systems.

INFORMATION ARCHITECTURE
Home; Solutions (Business Solutions, POS Software, Card Machines, MRA EIS, Enterprise Software); Services (UX/UI Design, Website Development, Full-stack Applications); Work; About; Contact.

PAGES AND FLOWS
Use the template’s existing page and breakpoint patterns as the starting point. Create exactly four pages at 390, 768, and 1440 widths:
1. Home.
2. Solutions overview.
3. Combined POS + MRA EIS detail and consultation flow.
4. Contact form with validation and submitted state.

Represent UX/UI design, website development, full-stack applications, enterprise software, process, About, and example work as sections within these four pages.

HOME TEMPLATE MAPPING
- Keep the remixed template’s header, hero layout, major section sequence, card patterns, CTA treatment, and footer composition.
- Replace the template brand with the supplied Unimarket Technologies logo and tokens.
- Map the template’s trust/logo row to Strategy, Design, Engineering, Integration, Support.
- Map its primary feature/product cards to POS Software, Card Machines, MRA EIS, Enterprise Software, and Business Solutions.
- Map a secondary feature/service pattern to UX/UI Design, Website Development, and Full-stack Applications.
- Map any process/timeline pattern to Discover, Define, Design, Build, Integrate, Support.
- Map its strongest large feature panel to the workflow Sale → Payment → Inventory update → Invoice/receipt → Reporting.
- Convert portfolio, testimonial, or proof areas into clearly labeled “Example engagement” content without invented clients or outcomes.

Hero copy:
Eyebrow: “Business technology, designed to work.”
Headline: “Connect your business to better systems.”
Support: “Unimarket Technologies designs and delivers POS, electronic invoicing, enterprise software, websites, and full-stack digital products built around real operational needs.”
CTAs: “Request a consultation” and “Explore solutions”.

Prototype desktop and mobile navigation; Home → POS → Request demo; Home → MRA EIS → Consultation; Home → Service → Work → Contact; form validation and success.

Add a non-prototype “Template Fidelity Review” section in the working/design-system area of the Figma file containing:
- A thumbnail of each original template frame beside its Unimarket Technologies remix.
- Notes describing what was preserved, what was rebranded, and what was extended.
- A list of any template component that was replaced and the accessibility or content reason for replacing it.

Use realistic content and accessible annotation: WCAG 2.2 AA contrast, visible focus, 44px touch targets, keyboard behavior, reduced motion. Do not invent client logos, partner status, MRA accreditation, testimonials, metrics, addresses, or contact details. Label such content “Placeholder” or “Example engagement”.
```

## Replit prompt

```text
Build a polished responsive UX prototype for Unimarket Technologies using Next.js App Router, React, TypeScript, Tailwind CSS, shadcn/ui component conventions, Lucide React icons, and next/image. The result should run as a realistic interactive prototype with reusable components, not a single static landing page.

Use the supplied transparent logo at /public/logos/logo-design-1-no-bg.png through next/image with intrinsic dimensions and responsive sizes. Use Poppins via next/font.

Brand tokens:
- #073071 deep navy
- #104896 dark blue
- #1652A6 primary
- #3470B3 secondary
- #3E80C3 accent
- #DBEAF8 pale blue
- #F4F9FD tinted canvas
- #111F31 ink
- #536477 muted text
- #DCE3EB borders
- #FFFFFF background

Implement semantic CSS variables compatible with shadcn naming: background, foreground, card, primary, secondary, muted, accent, destructive, border, input, ring. Use 12px control radius, 16px card radius, thin borders, restrained blue shadows, and pills only for tags/status.

Company:
Unimarket Technologies is a Malawi-based startup delivering business solutions, POS software, card machines/payment terminals, MRA EIS solutions, enterprise software, UX/UI design, website development, and full-stack application development. The value proposition is end-to-end delivery from discovery and design through engineering, integration, and support.

Create exactly these four routes:
/
/solutions
/solutions/pos-eis
/contact

Create typed content data and reusable components for header, accessible dropdown/mega menu, mobile sheet, hero, solution cards, service cards, process steps, case-study examples, FAQ accordion, consultation form, CTA, and footer.

Home content:
- Eyebrow “Business technology, designed to work.”
- H1 “Connect your business to better systems.”
- Description: Unimarket Technologies designs and delivers POS, electronic invoicing, enterprise software, websites, and full-stack digital products built around real operational needs.
- CTAs “Request a consultation” and “Explore solutions”.
- Conceptual POS/payment/invoice/dashboard visual.
- Capability strip: Strategy, Design, Engineering, Integration, Support.
- Solutions grid.
- Services grid.
- Process: Discover, Define, Design, Build, Integrate, Support.
- Featured workflow: Sale → Payment → Inventory update → Invoice/receipt → Reporting.
- “Example engagement” cards with no invented client names or metrics.
- Final CTA “Let’s design the system your business needs next.”

Use Lucide icons through a semantic local icon barrel. Include Nfc, CreditCard, ReceiptText, Building2, Palette, Code2, ArrowRight, ShieldCheck, and Menu. Make it easy to replace any alias with a custom SVG later.

Build shadcn-style Button variants default/secondary/outline/ghost/link/destructive and form controls with focus, error, disabled, loading, success, and validation states. The contact form may submit locally to a mocked server action and show a realistic pending and success state; do not send external email.

Responsive requirements:
- Mobile-first; verify 390, 768, and 1440 layouts.
- Sticky responsive header, keyboard-operable menus, Escape handling, focus restoration.
- 44px touch targets, skip link, semantic landmarks, one H1 per page, WCAG 2.2 AA contrast, visible focus, reduced-motion support.
- No horizontal overflow.

Image/performance requirements:
- next/image for raster images, stable dimensions, accurate sizes, priority only for LCP.
- Use CSS/HTML product mockups rather than downloading arbitrary stock assets.
- Keep pages server-rendered by default and client boundaries localized.

Do not invent contact details, customers, testimonials, certifications, partnerships, MRA accreditation, payment-provider relationships, or performance metrics. Use clearly labeled placeholders. Add a README explaining the architecture, commands, design tokens, and where real business content must be supplied.
```
