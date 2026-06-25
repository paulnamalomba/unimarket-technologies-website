import {
  Blocks,
  Building2,
  Code2,
  CreditCard,
  FileCheck2,
  LayoutDashboard,
  Nfc,
  Palette,
  ReceiptText,
  Store,
  Workflow,
} from 'lucide-react';

export const siteConfig = {
  name: 'Unimarket Technologies',
  description:
    'Business technology, POS, electronic invoicing, enterprise software, UX/UI design, websites, and full-stack applications built around real operations.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://unimarkettechnologies.com',
  location: 'Malawi',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'POS + MRA EIS', href: '/solutions/pos-eis' },
  { label: 'Contact', href: '/contact' },
] as const;

export const capabilities = [
  'Strategy',
  'Experience design',
  'Engineering',
  'Integration',
  'Support',
] as const;

export const solutions = [
  {
    icon: Store,
    title: 'POS software',
    description:
      'Bring sales, stock, staff permissions, and reporting into one practical retail workflow.',
    href: '/solutions/pos-eis#pos',
    label: 'Explore POS',
    image: '/images/solution-cards/pos-software.webp',
    imageAlt: 'Retail operator using modern point-of-sale software at a checkout',
  },
  {
    icon: CreditCard,
    title: 'Card machines',
    description:
      'Connect in-store payments to a checkout experience designed for speed and operational clarity.',
    href: '/solutions/pos-eis#payments',
    label: 'Explore payments',
    image: '/images/solution-cards/card-payments.webp',
    imageAlt: 'Customer tapping a card on a handheld payment terminal',
  },
  {
    icon: ReceiptText,
    title: 'MRA EIS solutions',
    description:
      'Prepare electronic invoicing workflows around your sales process, reporting needs, and current requirements.',
    href: '/solutions/pos-eis#eis',
    label: 'Explore EIS',
    image: '/images/solution-cards/electronic-invoicing.webp',
    imageAlt: 'Operations professional reviewing electronic invoices and business reporting',
  },
  {
    icon: Building2,
    title: 'Enterprise software',
    description:
      'Replace disconnected spreadsheets and legacy tasks with role-aware systems built for your operation.',
    href: '/solutions#enterprise',
    label: 'Explore enterprise',
    image: '/images/solution-cards/enterprise-software.webp',
    imageAlt: 'Operations team collaborating around a connected enterprise dashboard',
    tone: 'dark' as const,
  },
  {
    icon: Workflow,
    title: 'Business solutions',
    description:
      'Map the real problem first, then design the process, integrations, and software around it.',
    href: '/solutions#business',
    label: 'Explore solutions',
    image: '/images/technology-team.webp',
    imageAlt: 'Technology team mapping a connected business workflow',
  },
] as const;

export const services = [
  {
    icon: Palette,
    title: 'UX/UI design',
    description:
      'Research, journeys, interface systems, and prototypes that make complex workflows easier to use.',
    deliverable: 'From insight to testable product direction',
    details: ['Workflow and user research', 'Interactive product prototypes', 'Reusable interface systems'],
    image: '/images/technology-team.webp',
    imageAlt: 'Technology team collaborating on product experience design',
  },
  {
    icon: LayoutDashboard,
    title: 'Website development',
    description:
      'Fast, responsive marketing and service websites built to explain, convert, and grow with the business.',
    deliverable: 'From content structure to production launch',
    details: ['Content and conversion architecture', 'Responsive production development', 'Performance and launch readiness'],
    image: '/images/retail-pos-payment.webp',
    imageAlt: 'Modern digital commerce experience in a retail environment',
  },
  {
    icon: Code2,
    title: 'Full-stack applications',
    description:
      'Secure web products, APIs, dashboards, and integrations designed as one maintainable system.',
    deliverable: 'From architecture to long-term support',
    details: ['Secure product architecture', 'APIs, dashboards, and integrations', 'Deployment and ongoing support'],
    image: '/images/solution-cards/enterprise-software.webp',
    imageAlt: 'Engineering team working with connected enterprise software',
    tone: 'dark' as const,
  },
] as const;

export const deliveryProcess = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the operation, people, constraints, and outcomes before choosing technology.',
  },
  {
    number: '02',
    title: 'Define',
    description: 'Turn the findings into a clear scope, system map, success measures, and delivery plan.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Prototype the workflow and interface early enough to learn before expensive implementation.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Engineer the product in focused increments with quality, security, and maintainability in view.',
  },
  {
    number: '05',
    title: 'Integrate',
    description: 'Connect data, payments, reporting, and external services without losing operational clarity.',
  },
  {
    number: '06',
    title: 'Support',
    description: 'Launch carefully, equip the team, observe real usage, and improve the system over time.',
  },
] as const;

export const solutionGroups = [
  {
    eyebrow: 'Operate',
    title: 'Run daily business with clearer information.',
    description:
      'Tools for sales, stock, invoicing, payments, team permissions, reporting, and the decisions that depend on them.',
    items: [
      { icon: Nfc, label: 'Point of sale' },
      { icon: ReceiptText, label: 'Electronic invoicing' },
      { icon: FileCheck2, label: 'Operational reporting' },
    ],
    image: '/images/solution-cards/pos-software.webp',
    imageAlt: 'Retail operator working with point-of-sale software',
    href: '/solutions/pos-eis',
    label: 'Explore operations',
  },
  {
    eyebrow: 'Modernize',
    title: 'Replace fragmented work with connected systems.',
    description:
      'Custom platforms and integrations shaped around the way your organization actually delivers its work.',
    items: [
      { icon: Building2, label: 'Enterprise platforms' },
      { icon: Workflow, label: 'Workflow automation' },
      { icon: Blocks, label: 'System integration' },
    ],
    image: '/images/solution-cards/enterprise-software.webp',
    imageAlt: 'Operations team reviewing connected enterprise systems',
    href: '/contact',
    label: 'Discuss modernization',
    tone: 'dark' as const,
  },
  {
    eyebrow: 'Create',
    title: 'Turn an idea into a useful digital product.',
    description:
      'Product thinking, interface design, websites, applications, and the engineering required to take them live.',
    items: [
      { icon: Palette, label: 'Product design' },
      { icon: LayoutDashboard, label: 'Web experiences' },
      { icon: Code2, label: 'Full-stack delivery' },
    ],
    image: '/images/technology-team.webp',
    imageAlt: 'Product team creating a new digital service',
    href: '/contact',
    label: 'Start a product',
  },
] as const;
