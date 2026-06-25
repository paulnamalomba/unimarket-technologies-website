import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  inverse?: boolean;
}

export function SectionHeading({
  align = 'left',
  description,
  eyebrow,
  inverse = false,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      <Badge tone={inverse ? 'dark' : 'brand'}>{eyebrow}</Badge>
      <h2
        className={cn(
          'mt-5 text-3xl font-bold tracking-[-0.04em] sm:text-4xl lg:text-5xl',
          inverse ? 'text-white' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-8 sm:text-lg',
            inverse ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
