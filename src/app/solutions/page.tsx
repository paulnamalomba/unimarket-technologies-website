import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, CircleDot } from 'lucide-react';
import Image from 'next/image';

import { CategoryContentShowcase } from '@/components/category-content-showcase';
import { ExpandingImageCards } from '@/components/expanding-image-cards';
import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { solutionGroups, solutions } from '@/config/site';

export const metadata: Metadata = {
  title: 'Business solutions',
  description:
    'Explore POS, MRA EIS, enterprise software, business systems, UX/UI, websites, and application development from Unimarket Technologies.',
};

export default function SolutionsPage() {
  return (
    <>
      <section className="hero-radial relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className="site-container relative py-20 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Badge>Solutions overview</Badge>
              <h1 className="mt-6 text-4xl font-bold leading-[1.07] tracking-[-0.05em] sm:text-6xl">
                Solve the operational problem, not just the software request.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">
                We connect business analysis, product design, engineering, integration, and support so the
                final system works as one coherent whole.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg">
                  Discuss a business need
                  <ArrowRight aria-hidden="true" />
                </Button>
                <Button href="/solutions/pos-eis" size="lg" variant="outline">
                  View POS + MRA EIS
                </Button>
              </div>
            </div>

            <div className="image-frame aspect-[3/2]">
              <Image
                alt="Retail owner reviewing inventory on a tablet with a staff member scanning products"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 1024px) calc(100vw - 40px), 720px"
                src="/images/inventory-team.webp"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-container">
          <SectionHeading
            align="center"
            description="The right starting point depends on what the organization needs to operate, modernize, or create."
            eyebrow="Three ways we help"
            title="Choose a solution path without boxing the problem in."
          />

          <CategoryContentShowcase
            className="mt-14"
            items={solutionGroups.map((group) => ({
              eyebrow: group.eyebrow,
              title: group.title,
              description: group.description,
              details: group.items.map((item) => item.label),
              image: group.image,
              imageAlt: group.imageAlt,
              href: group.href,
              label: group.label,
              tone: 'tone' in group ? group.tone : ('light' as const),
            }))}
          />
        </div>
      </section>

      <section className="section-space bg-[#f7f9fc]">
        <div className="site-container">
          <SectionHeading
            description="Each can begin as a focused engagement and expand only when the case is clear. Start small while leaving the architecture and workflow ready for what comes next."
            eyebrow="Capabilities"
            title="Specific enough to start. Connected enough to grow."
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

      <section className="section-space">
        <div className="site-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="image-frame aspect-[4/3]">
            <Image
              alt="Product and engineering team working together on business software"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) calc(100vw - 40px), 640px"
              src="/images/technology-team.webp"
            />
          </div>
          <div>
            <SectionHeading
              description="The prototype defines a practical standard for how future engagements can be framed."
              eyebrow="What an engagement includes"
              title="Clarity before code—and support after launch."
            />
            <div className="mt-8 grid gap-4">
              {[
                'A shared understanding of the business problem and intended outcome.',
                'A visible workflow, scope, and set of delivery decisions.',
                'Testable interface direction before full implementation.',
                'Technical architecture proportionate to the real risk and growth path.',
                'Launch, training, observation, and a clear support model.',
              ].map((item) => (
                <div className="flex items-start gap-3" key={item}>
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <p className="leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="site-container">
          <div className="rounded-[28px] border border-border bg-brand-50 px-6 py-14 text-center sm:px-12">
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-brand-800">
              <CircleDot className="size-4" aria-hidden="true" />
              Not sure which category fits?
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
              Start with the friction your team feels every day.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-muted-foreground">
              We can shape the right engagement after understanding the workflow—not before.
            </p>
            <Button className="mt-7" href="/contact" size="lg">
              Tell us what is not working
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
