# Unimarket Technologies React and Next.js Guide

## Architecture

- `src/app`: App Router pages, metadata, sitemap, and robots.
- `src/components/ui`: reusable shadcn-inspired primitives.
- `src/components`: composed website sections and client interactions.
- `src/config`: typed navigation and repeatable content.
- `src/app/globals.css`: semantic tokens and global Tailwind layers.
- `src/lib`: shared utilities.

## Component rules

- Use React Server Components by default.
- Add `'use client'` only for browser state, events, effects, or client-only APIs.
- Keep client boundaries small.
- Reuse shared primitives before creating page-specific styling.
- Keep repeated marketing content in typed config arrays.
- Use `cn()` for conditional class merging.

## Styling

- Follow [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).
- Use semantic classes such as `bg-primary`, `text-foreground`, and `border-border`.
- Use the shared Class Variance Authority button implementation.
- Keep control, card, spacing, and shadow decisions aligned with the token system.
- Treat the Nuxt SaaS template as a compositional reference, not a source of Vue components or branding.

## Icons

Use Lucide React with consistent sizing, stroke language, and `currentColor`. If custom icons are introduced later, isolate them behind semantic project exports rather than scattering raw SVG markup through page code.

## Images

Use `next/image` for raster content and the approved logo. Always provide intrinsic dimensions or a sized `fill` parent and an accurate `sizes` value. Only the likely LCP image receives `priority`.

Generated photography is stored as optimized WebP under `public/images`. Keep descriptions and alt text truthful; do not present conceptual people or interfaces as real clients or live products.

## Metadata

- Use one descriptive H1 per page.
- Keep important navigation and CTAs crawlable.
- Keep `sitemap.ts` aligned with the four prototype routes until scope expands.
- Add structured data only for facts that are actually represented and verified.

## Forms

- The current contact form is an interaction prototype only.
- Production submission should use a server action or route handler.
- Validate on the client and server.
- Add rate limiting, anti-spam protection, secure observability, and explicit error recovery.
- Keep secrets server-only.

## Accessibility

- Use native HTML before ARIA.
- Preserve visible focus and logical tab order.
- Give icon-only controls accessible names.
- Ensure mobile navigation closes with Escape.
- Respect reduced motion.
- Test keyboard-only use, 200% zoom, and target sizes.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Prototype boundary

Unverified contact details, partnerships, certifications, MRA status, payment-provider relationships, and client proof must remain absent or clearly marked as placeholders until confirmed.
