import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Link
      aria-label="Unimarket Technologies Home"
      className={cn('relative block h-[68px] w-[68px] shrink-0 sm:h-[74px] sm:w-[74px]', className)}
      href="/"
    >
      <Image
        alt="Unimarket Technologies"
        className="object-contain"
        fill
        priority={priority}
        sizes="(max-width: 640px) 68px, 74px"
        src="/logos/unimarket-logo-vertical.png"
      />
    </Link>
  );
}

export function BrandLogoHoriz({ className, priority = false }: BrandLogoProps) {
  return (
    <Link
      aria-label="Unimarket Technologies Home"
      className={cn('relative block h-[68px] w-[203px] shrink-0 sm:h-[74px] sm:w-[221px]', className)}
      href="/"
    >
      <Image
        alt="Unimarket Technologies"
        className="object-contain"
        fill
        priority={priority}
        sizes="(max-width: 640px) 203px, 221px"
        src="/logos/unimarket-logo-horizontal.png"
      />
    </Link>
  );
}