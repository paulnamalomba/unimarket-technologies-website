import {
  ArrowRight,
  BadgeCheck,
  Check,
  CircleDot,
  Layers3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';

import { CategoryContentShowcase } from '@/components/category-content-showcase';
import { CommerceDashboard } from '@/components/commerce-dashboard';
import { ExpandingImageCards } from '@/components/expanding-image-cards';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { capabilities, deliveryProcess, services, solutions } from '@/config/site';

export default function HomePage() {
  return (
    <>
      <section className="hero-radial relative overflow-hidden">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className="site-container relative pb-20 pt-20 text-center sm:pt-24 lg:pb-28 lg:pt-28">
          <Badge>
            <Sparkles className="size-3.5" aria-hidden="true" />
            Business technology, designed to work
          </Badge>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-[1.04] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[72px]">
            Connecting businesses to{' '}
            <span className="text-primary">better systems.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            Unimarket Technologies designs and delivers POS, electronic invoicing, enterprise software,
            websites, and full-stack digital products around real operational needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              Request a consultation
              <ArrowRight aria-hidden="true" />
            </Button>
            <Button href="/solutions" size="lg" variant="outline">
              Explore solutions
            </Button>
          </div>

          <div className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
            <div className="image-frame aspect-[16/9]">
              <Image
                alt="Retail manager using a point-of-sale system while a customer makes a card payment"
                className="object-cover"
                fill
                loading="eager"
                priority
                sizes="(max-width: 768px) calc(100vw - 40px), (max-width: 1440px) calc(100vw - 80px), 1280px"
                src="/images/retail-pos-payment.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-950/35 via-transparent to-transparent" />
            </div>
            <CommerceDashboard className="relative mx-auto -mt-10 w-[92%] text-left sm:-mt-20 lg:-mt-32 lg:w-[78%]" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="site-container grid gap-5 py-8 sm:grid-cols-5">
          {capabilities.map((capability, index) => (
            <div
              className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-muted-foreground"
              key={capability}
            >
              <CircleDot className="size-4 text-brand-500" aria-hidden="true" />
              {capability}
              {index < capabilities.length - 1 ? (
                <span className="ml-auto hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="Choose a focused starting point or bring us the messy operational problem. We connect the pieces into one clear system."
            eyebrow="Solutions"
            title="One technology partner across the workflow."
          />
          <ExpandingImageCards
            className="mt-12"
            items={solutions.slice(0, 4).map((solution) => ({
              title: solution.title,
              description: solution.description,
              href: solution.href,
              label: solution.label,
              image: solution.image,
              imageAlt: solution.imageAlt,
              tone: 'tone' in solution ? solution.tone : ('light' as const),
            }))}
          />
        </div>
      </section>

      <section className="section-space bg-[#f7f9fc]">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              description="The technology is only useful when the people, process, interface, data, and support model make sense together."
              eyebrow="Built around the business"
              title="Start with how the work happens."
            />
            <div className="mt-8 grid gap-5">
              {[
                {
                  icon: Layers3,
                  title: 'See the whole operation',
                  text: 'Map the hand-offs, duplicated work, data gaps, and decisions that a system needs to improve.',
                },
                {
                  icon: BadgeCheck,
                  title: 'Prototype before committing',
                  text: 'Make workflows visible and testable before full implementation reduces expensive surprises.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Build for dependable use',
                  text: 'Treat permissions, resilience, support, and maintainability as core product decisions.',
                },
              ].map((item) => (
                <div className="flex gap-4" key={item.title}>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-xs">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="mt-9" href="/solutions" variant="outline">
              See how we approach solutions
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>

          <div className="image-frame aspect-[4/3]">
            <Image
              alt="African technology team collaborating on a business software product"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) calc(100vw - 40px), 640px"
              src="/images/technology-team.webp"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="Design, software, and delivery capabilities that can stand alone—or work together as one engagement."
            eyebrow="Services"
            title="From early direction to a working product."
          />
          <CategoryContentShowcase
            className="mt-12"
            items={services.map((service) => ({
              title: service.title,
              description: service.description,
              details: service.details,
              href: '/contact',
              label: 'Discuss this service',
              image: service.image,
              imageAlt: service.imageAlt,
              tone: 'tone' in service ? service.tone : ('light' as const),
            }))}
          />
        </div>
      </section>

      <section className="dark-panel section-space text-white">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="A disciplined path from the first conversation to a system people can confidently use."
            eyebrow="Delivery process"
            inverse
            title="Make the work visible at every stage."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {deliveryProcess.map((step) => (
              <div className="bg-[#071b3a]/90 p-7 lg:p-8" key={step.number}>
                <p className="text-sm font-semibold text-brand-500">{step.number}</p>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              description="A connected retail workflow can reduce repeated capture and give teams a more useful view of what happened."
              eyebrow="Featured workflow"
              title="From a sale to information the business can use."
            />
            <div className="mt-8 grid gap-3">
              {['Sale captured', 'Payment recorded', 'Stock updated', 'Invoice or receipt prepared', 'Reporting refreshed'].map(
                (item) => (
                <div className="flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3" key={item}>
                  <span className="grid size-6 place-items-center rounded-full bg-brand-700 text-white">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
                ),
              )}
            </div>
            <p className="mt-5 text-xs leading-6 text-muted-foreground">
              Concept workflow only. Final MRA EIS and payment behavior depends on verified technical,
              provider, and regulatory requirements.
            </p>
          </div>
          <div className="image-frame aspect-[3/2]">
            <Image
              alt="Retail owner reviewing inventory on a tablet while a staff member scans stock"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) calc(100vw - 40px), 720px"
              src="/images/inventory-team.webp"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="site-container">
          <div className="dark-panel overflow-hidden rounded-[28px] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <Badge tone="dark">Start with the business need</Badge>
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-[-0.045em] sm:text-5xl">
              Let’s design the system your business needs next.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
              Bring the workflow, challenge, or product idea. We’ll help make the right next step clear.
            </p>
            <Button className="mt-8" href="/contact" size="lg" variant="inverse">
              Request a consultation
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
