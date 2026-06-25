import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import { BrandLogo } from '@/components/brand-logo';
import { navigation, services, solutions } from '@/config/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="site-container grid gap-12 py-16 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div className="max-w-md">
          <BrandLogo />
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            Practical business technology designed, built, and supported around the way your organization
            actually works.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Malawi · Exact office details to be confirmed
            </span>
            <span className="flex items-center gap-2">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              Contact email to be confirmed
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-5 grid gap-3">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="text-sm text-muted-foreground transition hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Capabilities</p>
          <ul className="mt-5 grid gap-3">
            {[...solutions.slice(0, 3), ...services.slice(0, 2)].map((item) => (
              <li key={item.title}>
                <Link
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-primary"
                  href={'href' in item ? item.href : '/solutions'}
                >
                  {item.title}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="site-container flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Unimarket Technologies. Prototype content.</p>
          <p>Next.js · TypeScript · Tailwind CSS · shadcn-inspired components</p>
        </div>
      </div>
    </footer>
  );
}
