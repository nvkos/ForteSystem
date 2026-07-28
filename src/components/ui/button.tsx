import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  gap-2
  whitespace-nowrap
  rounded-full
  text-sm
  font-medium
  transition-all
  duration-200

  disabled:pointer-events-none
  disabled:opacity-50

  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-primary
  focus-visible:ring-offset-2

  hover:cursor-pointer

  [&_svg]:pointer-events-none
  [&_svg]:size-4
  [&_svg]:shrink-0
  `,
  {
    variants: {
      variant: {
        /* Основная кнопка Forte System */

        default: `
          bg-primary
          text-white
          font-light
          shadow-sm
          hover:bg-primary-hover
          active:bg-primary-active
          `,

        /*
        Вторичная
        */

        secondary: `
          bg-secondary/10
          text-primary
          hover:bg-secondary/20
          `,

        /* Контурная */

        outline: `
          border
          border-border
          bg-transparent
          text-text-primary
          hover:bg-surface
          `,

        /* Без фона */

        ghost: `
          text-text-primary
          hover:bg-surface
          `,

        /* Стеклянная */

        glass: `
          border
          border-white/20
          bg-white/10

          text-primary
          font-normal

          backdrop-blur-xl

          shadow-glass

          hover:bg-white/60
          `,

        glassBlue: `
          relative
          text-white
          text-unbounded
          bg-primary

          backdrop-saturate-180%

        `,

        /*
        Темная
        */

        dark: `
          bg-black
          text-white

          hover:bg-neutral-800
          `,
      },

      size: {
        sm: `
          h-9
          px-3
          `,

        default: `
          h-11
          px-5
          `,

        md: `
          h-10

          px-5
          py-12px
          font-unbounded

          tracking-wider
        `,

        lg: `
          h-12
          px-8
          text-base
          `,

        xl: `
          h-14
          px-10
          text-base
          rounded-xl
          `,

        icon: `
          h-11
          w-11
          `,
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : ('button' as React.ElementType);

    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
