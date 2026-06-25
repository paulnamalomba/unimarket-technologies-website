import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold tracking-[-0.015em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-card',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/75',
        outline:
          'border border-border bg-background text-foreground shadow-xs hover:border-primary/30 hover:bg-brand-50',
        ghost: 'text-foreground hover:bg-muted',
        link: 'min-h-0 rounded-none p-0 text-primary underline-offset-4 hover:underline',
        inverse:
          'bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-card',
      },
      size: {
        sm: 'min-h-9 rounded-lg px-3',
        default: 'px-5 py-2.5',
        lg: 'min-h-12 px-6 text-base',
        icon: 'h-11 w-11 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
    href?: string;
    className?: string;
  };

export function Button({
  children,
  className,
  href,
  size,
  variant,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };
