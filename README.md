# Unimarket Technologies Website

Four-page working prototype for **Unimarket Technologies**, a Malawi-based technology startup delivering business solutions, POS software, card machines, MRA EIS solutions, enterprise software, UX/UI design, websites, and full-stack applications.

## Prototype routes

| Route | Purpose |
|---|---|
| `/` | Brand, capabilities, services, process, and featured workflow |
| `/solutions` | Business solution categories and engagement model |
| `/solutions/pos-eis` | Combined POS, card payment, inventory, and MRA EIS concept |
| `/contact` | Consultation flow with interactive form states |

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 3
- Google Inter font through `next/font`
- shadcn/ui-inspired semantic tokens and component conventions
- Class Variance Authority for typed button variants
- Lucide React icons
- `next/image` for optimized imagery and the approved logo

## Brand asset

The approved logo is:

```text
public/logos/logo-design-1-no-bg.png
```

The interface uses the exact PNG through `next/image`. Do not redraw, recolor, crop, trace, regenerate, or replace it.

## Template reference

The prototype borrows compositional cues from the MIT-licensed [Nuxt UI SaaS template](https://github.com/nuxt-ui-templates/saas): a focused hero, layered product media, alternating split sections, capability grids, restrained surfaces, and strong closing CTA panels.

It does not use Nuxt or Vue code. The implementation remains native Next.js, React, and TypeScript, with the Unimarket Technologies design system applied throughout.

## Generated imagery

The three WebP photographs under `public/images` were generated specifically for this prototype:

- `retail-pos-payment.webp`
- `inventory-team.webp`
- `technology-team.webp`

They depict conceptual business contexts and do not represent real clients, employees, partners, or live product interfaces.

## Commands

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start local development |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build |
| `npm run start` | Run the production server |

## Project structure

```text
unimarket-technologies-website/
├── public/
│   ├── images/              # Optimized generated photography
│   └── logos/               # Approved brand artwork
├── src/
│   ├── app/                 # Four routes, metadata, sitemap, robots
│   ├── components/          # Shared UI and marketing components
│   ├── config/              # Typed site content and navigation
│   └── lib/                 # Shared utilities
├── BRAND_AND_PROTOTYPE_BRIEF.md
├── DESIGN_SYSTEM.md
└── PROTOTYPE_PROMPTS.md
```

## Prototype boundaries

- The contact form demonstrates pending and success states but sends no external message.
- Contact details, office details, partnerships, certifications, customers, testimonials, and performance metrics remain unclaimed until verified.
- MRA EIS and payment content is conceptual and must be validated against current official and provider requirements before production.
- Draft legal documents require qualified legal review.

## Engineering principles

- Server components by default; client components only for real interaction.
- Semantic design tokens instead of scattered one-off values.
- Shared component variants rather than page-specific button systems.
- WCAG 2.2 AA contrast, visible focus, keyboard support, and reduced motion.
- Stable image dimensions, realistic `sizes`, and optimized formats.
- Mobile-first performance suitable for common Malawi network conditions.
