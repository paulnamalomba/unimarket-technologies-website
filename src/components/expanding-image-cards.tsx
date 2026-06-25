'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, type CSSProperties, type FocusEvent } from 'react';

import { cn } from '@/lib/utils';

export interface ExpandingImageCardItem {
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
  imageAlt: string;
  tone?: 'light' | 'dark';
}

interface ExpandingImageCardsProps {
  items: readonly ExpandingImageCardItem[];
  className?: string;
}

export function ExpandingImageCards({ className, items }: ExpandingImageCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gridTemplateColumns = items
    .map(
      (_, index) =>
        `minmax(0, ${activeIndex === null || activeIndex !== index ? 1 : Math.max(items.length - 1, 1)}fr)`,
    )
    .join(' ');
  const rowStyle = { '--card-columns': gridTemplateColumns } as CSSProperties;

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setActiveIndex(null);
    }
  }

  return (
    <div
      className={cn('expanding-card-row', className)}
      onBlur={handleBlur}
      onMouseLeave={() => setActiveIndex(null)}
      style={rowStyle}
    >
      {items.map((item, index) => {
        const dark = item.tone === 'dark';
        const active = activeIndex === index;
        const inactive = activeIndex !== null && !active;

        return (
          <Link
            aria-label={`${item.title}: ${item.label}`}
            className={cn(
              'expanding-card group',
              active && 'is-active',
              inactive && 'is-inactive',
              dark ? 'text-white' : 'text-foreground',
            )}
            href={item.href}
            key={item.title}
            onFocus={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <Image
              alt={item.imageAlt}
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.015] group-focus-visible:scale-[1.015]"
              fill
              sizes="(max-width: 1023px) calc(100vw - 40px), 50vw"
              src={item.image}
            />
            <div
              aria-hidden="true"
              className={cn(
                'absolute inset-0',
                dark
                  ? 'bg-gradient-to-b from-[#06172f] via-[#06172f]/75 to-[#06172f]/20'
                  : 'bg-gradient-to-b from-white via-white/80 to-white/5',
              )}
            />

            <div className="relative z-10 flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={cn('text-xs font-semibold', dark ? 'text-brand-500' : 'text-brand-700')}>
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.035em] sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <span
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full border backdrop-blur-sm transition-transform duration-200 ease-in-out group-hover:rotate-45 group-focus-visible:rotate-45',
                    dark
                      ? 'border-white/20 bg-white/10 text-white'
                      : 'border-brand-950/10 bg-white/75 text-brand-950',
                  )}
                >
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </div>

              <div className="expanding-card-detail mt-4 max-w-md">
                <p className={cn('text-sm leading-7', dark ? 'text-white/72' : 'text-slate-600')}>
                  {item.description}
                </p>
              </div>

              <div className="mt-auto pt-10">
                <span
                  className={cn(
                    'inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold backdrop-blur-md',
                    dark ? 'bg-white text-brand-950' : 'bg-brand-950 text-white',
                  )}
                >
                  {item.label}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
