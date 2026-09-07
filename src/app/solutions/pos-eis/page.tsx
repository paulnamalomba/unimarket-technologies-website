import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  CreditCard,
  PackageSearch,
  ReceiptText,
  ShoppingCart,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';

// import { CommerceDashboard } from '@/components/commerce-dashboard';
import { ExpandingImageCards } from '@/components/expanding-image-cards';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'POS and MRA EIS solutions',
  description:
    'Explore the Unimarket Technologies concept for connected sales, card payments, inventory, electronic invoicing, and business reporting.',
};

const workflow = [
  { icon: ShoppingCart, label: 'Sale captured', detail: 'Products, quantities, pricing, and operator context.' },
  { icon: CreditCard, label: 'Payment recorded', detail: 'Cash, card, or another configured payment path.' },
  { icon: PackageSearch, label: 'Stock updated', detail: 'Inventory movement reflected in the same workflow.' },
  { icon: ReceiptText, label: 'Document prepared', detail: 'Receipt or invoice behavior based on verified rules.' },
  { icon: BarChart3, label: 'Reporting refreshed', detail: 'Useful operating information without repeat capture.' },
] as const;

const paymentCapabilities = [
  {
    title: 'Clear payment state',
    description:
      'Keep initiated, approved, declined, cancelled, and retry states understandable for staff and customers.',
    href: '/contact',
    label: 'Design the payment flow',
    image: '/images/solution-cards/card-payments.webp',
    imageAlt: 'Customer completing a contactless payment on a modern card terminal',
  },
  {
    title: 'Reconciliation-ready',
    description:
      'Retain transaction references and operational context so teams can investigate and resolve mismatches.',
    href: '/contact',
    label: 'Connect reconciliation',
    image: '/images/solution-cards/electronic-invoicing.webp',
    imageAlt: 'Operations professional reviewing connected payment and invoicing records',
  },
  {
    title: 'High-trust boundaries',
    description:
      'Keep sensitive credentials server-side and design clear, recoverable behavior for failures and interruptions.',
    href: '/contact',
    label: 'Plan secure integration',
    image: '/images/solution-cards/enterprise-software.webp',
    imageAlt: 'Secure enterprise payment systems monitored from an operations workspace',
    tone: 'dark' as const,
  },
] as const;

export default function PosEisPage() {
  return (
    <>
      <section className="dark-panel overflow-hidden text-white">
        <div className="site-container grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <div>
            <Badge tone="dark">POS + MRA EIS concept</Badge>
            <h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-[-0.05em] sm:text-6xl">
              One retail workflow from checkout to reporting.
            </h1>
            <p className="mt-6 text-lg leading-9 text-white/70">
              Connect the point of sale, payment context, inventory movement, electronic invoicing, and the
              information managers need to act.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" variant="inverse">
                Request a solution workshop
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button
                className="border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                href="#workflow"
                size="lg"
                variant="outline"
              >
                See the workflow
              </Button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border-2 border-white/20 shadow-[0_30px_90px_rgba(7,48,113,0.35)]">
            <Image
              alt="Commerce dashboard concept showing sales, card payments, and stock alerts"
              className="h-auto w-full object-cover"
              height={1972}
              priority
              sizes="(max-width: 1024px) 100vw, 650px"
              src="/images/commerce-dashboard.png"
              width={3420}
            />
          </div>
        </div>
      </section>

      <section className="section-space" id="workflow">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="A connected workflow reduces repeated capture and makes each step visible to the people responsible for it."
            eyebrow="Concept workflow"
            title="Each event should move the business forward."
          />

          <div className="relative mt-14 grid gap-4 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-9 hidden h-px bg-border lg:block" aria-hidden="true" />
            {workflow.map((item, index) => (
              <div className="relative text-center" key={item.label}>
                <span className="relative z-10 mx-auto grid size-[72px] place-items-center rounded-2xl border border-border bg-white text-primary shadow-xs">
                  <item.icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-semibold text-brand-500">0{index + 1}</p>
                <h2 className="mt-2 font-semibold">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-muted-foreground">
            This is a prototype workflow, not a statement of certification or current MRA integration.
            Production behavior must be validated against official requirements, technical specifications,
            and any approved provider arrangements.
          </p>
        </div>
      </section>

      <section className="section-space bg-[#f7f9fc]" id="pos">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="image-frame aspect-[16/10]">
            <Image
              alt="Retail manager at a modern checkout while a customer makes a card payment"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) calc(100vw - 40px), 640px"
              src="/images/retail-pos-payment.webp"
            />
          </div>
          <div>
            <SectionHeading
              description="The point of sale should be fast for the operator and informative for the business—without turning checkout into an accounting exercise."
              eyebrow="Point of sale"
              title="A checkout experience designed around daily use."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: ShoppingCart, title: 'Faster selling', text: 'Clear product, pricing, cart, and payment steps.' },
                { icon: UsersRound, title: 'Role-aware access', text: 'Interfaces and permissions suited to each team member.' },
                { icon: PackageSearch, title: 'Stock visibility', text: 'Inventory movement connected to the transaction.' },
                { icon: BarChart3, title: 'Useful reporting', text: 'Information shaped for operational decisions.' },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon className="size-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" id="payments">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="Design the physical payment moment and the software state together, so staff and customers receive clear feedback."
            eyebrow="Payments"
            title="Card machines belong in the workflow—not beside it."
          />
          <ExpandingImageCards className="mt-12" items={paymentCapabilities} />
        </div>
      </section>

      <section className="section-space bg-brand-50" id="eis">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              description="Electronic invoicing should be approached as an operational and compliance workflow—not a decorative feature toggle."
              eyebrow="MRA EIS"
              title="Prepare the process around verified requirements."
            />
            <div className="mt-8 grid gap-4">
              {[
                'Confirm current official requirements and the organization’s obligations.',
                'Map the sales, invoice, return, correction, and outage scenarios.',
                'Define identifiers, audit events, reconciliation, and access controls.',
                'Test with real operational cases before production rollout.',
              ].map((item) => (
                <div className="flex items-start gap-3" key={item}>
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <p className="leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-brand-700/15 shadow-card">
            <div className="border-b border-border bg-brand-950 p-6 text-white">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10">
                  <ReceiptText className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold">Electronic invoicing readiness</p>
                  <p className="mt-1 text-xs text-white/60">Prototype checklist</p>
                </div>
              </div>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                ['Business process', 'Sales and document scenarios mapped'],
                ['Technical scope', 'Interfaces and data boundaries defined'],
                ['Controls', 'Permissions and audit events considered'],
                ['Operations', 'Outage and reconciliation paths planned'],
              ].map(([label, value]) => (
                <div className="bg-white p-6" key={label}>
                  <BadgeCheck className="size-5 text-primary" aria-hidden="true" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">{label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-20 pt-20 sm:pb-28 sm:pt-24">
        <div className="site-container">
          <div className="dark-panel rounded-[28px] px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Define the right retail and invoicing workflow before selecting the implementation path.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-white/70">
              A focused workshop can clarify the operation, constraints, and next technical decisions.
            </p>
            <Button className="mt-7" href="/contact" size="lg" variant="inverse">
              Request a solution workshop
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
