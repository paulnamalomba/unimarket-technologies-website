'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { BrandLogo, BrandLogoHoriz } from '@/components/brand-logo';
import { Button } from '@/components/ui/button';
import { navigation } from '@/config/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-xl">
      <div className="site-container flex h-[88px] items-center justify-between gap-6">
        {/* <BrandLogo priority /> */}
        <BrandLogoHoriz priority />
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);

            return (
              <Link
                className={cn(
                  'rounded-lg px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground',
                  active && 'bg-brand-50 text-brand-800',
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">
            Request a consultation
            <ArrowRight />
          </Button>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border text-foreground transition hover:bg-muted lg:hidden"
          onClick={() => setOpen((current) => !current)}
          type="button"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="site-container grid gap-2 py-5">
            {navigation.map((item) => (
              <Link
                className={cn(
                  'rounded-xl px-4 py-3 text-base font-medium text-muted-foreground',
                  (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) &&
                    'bg-brand-50 text-brand-800',
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-3 w-full" href="/contact">
              Request a consultation
              <ArrowRight />
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
