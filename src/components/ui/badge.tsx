import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  className?: string;
  tone?: 'brand' | 'neutral' | 'dark';
}

export function Badge({ children, className, tone = 'brand' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.02em]',
        tone === 'brand' && 'border-brand-700/15 bg-brand-50 text-brand-800',
        tone === 'neutral' && 'border-border bg-white text-muted-foreground',
        tone === 'dark' && 'border-white/15 bg-white/10 text-white',
        className,
      )}
    >
      {children}
    </span>
  );
}
