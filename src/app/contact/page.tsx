import type { Metadata } from 'next';
// import { Clock3, MapPin, MessagesSquare, ShieldCheck } from 'lucide-react';

import { ContactForm } from '@/components/contact-form';
// import { SectionHeading } from '@/components/section-heading';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Request a consultation',
  description:
    'Tell Unimarket Technologies about a POS, MRA EIS, enterprise software, design, website, or application need.',
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-radial relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className="site-container relative py-20 text-center sm:py-24">
          <Badge>Request a consultation</Badge>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-[-0.05em] sm:text-6xl">
            Tell us more about your software, or hardware needs
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-muted-foreground">
            Tell us what you are trying to improve, replace, connect, or launch. We make anything possible and reachable.
          </p>
        </div>
      </section>

      <section className="section-space">
        {/* <div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"> */}
          {/* <div>
            <SectionHeading
              description="A little operational context is more useful than a polished specification at this stage."
              eyebrow="What happens next"
              title="A practical first conversation."
            />

            <div className="mt-8 grid gap-4">
              {[
                {
                  icon: MessagesSquare,
                  title: 'We clarify the need',
                  text: 'The workflow, affected people, current friction, and intended outcome.',
                },
                {
                  icon: Clock3,
                  title: 'We suggest a next step',
                  text: 'A discovery session, prototype, assessment, or focused implementation scope.',
                },
                {
                  icon: ShieldCheck,
                  title: 'We avoid premature promises',
                  text: 'Timelines, compliance, integrations, and pricing follow verified requirements.',
                },
              ].map((item) => (
                <div className="flex gap-4 rounded-card border border-border bg-white p-5" key={item.title}>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-primary">
                    <item.icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-card bg-brand-950 p-6 text-white">
              <MapPin className="size-5 text-brand-500" aria-hidden="true" />
              <p className="mt-4 font-semibold">Based in Malawi</p>
              <p className="mt-2 text-sm leading-7 text-white/65">
                Exact office, phone, email, and service-area details are intentionally left unclaimed in this
                prototype until verified.
              </p>
            </div>
          </div> */}

          {/* <Card className="p-6 shadow-card sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary">Prototype enquiry form</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                Tell us about the opportunity.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This form demonstrates interaction and validation. It does not send external messages yet.
              </p>
            </div>
            <ContactForm />
          </Card> */}
        {/* </div> */}

          <Card className="p-6 shadow-card sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary">Prototype enquiry form</p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.035em] sm:text-3xl">
                Tell us about the opportunity.
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                This form demonstrates interaction and validation. It does not send external messages yet.
              </p>
            </div>
            <ContactForm />
          </Card>
      </section>
    </>
  );
}
