'use client';

import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { KeyboardEvent, useId, useState } from 'react';

import { cn } from '@/lib/utils';

export interface CategoryContentItem {
  title: string;
  description: string;
  details: readonly string[];
  image: string;
  imageAlt: string;
  href: string;
  label: string;
  eyebrow?: string;
  tone?: 'light' | 'dark';
}

interface CategoryContentShowcaseProps {
  items: readonly CategoryContentItem[];
  className?: string;
}

export function CategoryContentShowcase({ className, items }: CategoryContentShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const id = useId();

  function focusTab(index: number) {
    setActiveIndex(index);
    document.getElementById(`${id}-tab-${index}`)?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    event.preventDefault();

    if (event.key === 'Home') {
      focusTab(0);
      return;
    }

    if (event.key === 'End') {
      focusTab(items.length - 1);
      return;
    }

    const direction = event.key === 'ArrowDown' ? 1 : -1;
    focusTab((index + direction + items.length) % items.length);
  }

  return (
    <div className={cn('grid items-stretch gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14', className)}>
      <div
        aria-label="Select a category"
        className="relative grid content-center border-l border-border"
        role="tablist"
        aria-orientation="vertical"
      >
        {items.map((item, index) => {
          const active = activeIndex === index;

          return (
            <button
              aria-controls={`${id}-panel`}
              aria-selected={active}
              className={cn(
                'category-showcase-tab relative w-full px-6 py-5 text-left sm:px-8',
                active ? 'text-foreground' : 'text-muted-foreground hover:bg-brand-50/60 hover:text-foreground',
              )}
              id={`${id}-tab-${index}`}
              key={item.title}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              role="tab"
              tabIndex={active ? 0 : -1}
              type="button"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'category-showcase-marker absolute -left-px top-0 h-full w-[3px] origin-center rounded-full bg-primary',
                  active ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0',
                )}
              />
              {item.eyebrow ? (
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                  {item.eyebrow}
                </span>
              ) : null}
              <span className="block text-lg font-semibold tracking-[-0.025em]">{item.title}</span>
              <span
                className={cn(
                  'category-showcase-description mt-2 block max-w-xl text-sm leading-7',
                  active ? 'text-muted-foreground' : 'text-muted-foreground/70',
                )}
              >
                {item.description}
              </span>
            </button>
          );
        })}
      </div>

      <div
        aria-labelledby={`${id}-tab-${activeIndex}`}
        className="category-showcase-panel relative min-h-[31rem] overflow-hidden rounded-[2rem] border border-brand-100 bg-brand-50 shadow-card"
        id={`${id}-panel`}
        role="tabpanel"
        tabIndex={0}
      >
        {items.map((item, index) => {
          const active = activeIndex === index;

          return (
            <div
              aria-hidden={!active}
              className={cn(
                'category-showcase-layer absolute inset-0',
                active ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
              )}
              key={item.title}
            >
              <Image
                alt={item.imageAlt}
                className={cn(
                  'category-showcase-image object-cover',
                  active ? 'scale-100' : 'scale-[1.025]',
                )}
                fill
                sizes="(max-width: 1024px) calc(100vw - 40px), 700px"
                src={item.image}
              />
              <div
                aria-hidden="true"
                className={cn(
                  'absolute inset-0',
                  item.tone === 'dark'
                    ? 'bg-gradient-to-b from-brand-950/10 via-brand-950/35 to-brand-950/95'
                    : 'bg-gradient-to-b from-white/5 via-brand-950/5 to-brand-950/75',
                )}
              />

              <div
                className={cn(
                  'category-showcase-content absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/45 bg-white/95 p-5 shadow-float backdrop-blur-xl sm:inset-x-8 sm:bottom-8 sm:p-7',
                  active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                )}
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                      What this includes
                    </p>
                    <ul className="mt-4 grid gap-2.5">
                      {item.details.map((detail) => (
                        <li className="flex items-start gap-2.5 text-sm font-medium text-foreground" key={detail}>
                          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-800">
                            <Check className="size-3" aria-hidden="true" />
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-primary/92"
                    href={item.href}
                    tabIndex={active ? 0 : -1}
                  >
                    {item.label}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
