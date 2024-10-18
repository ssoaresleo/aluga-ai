import { forwardRef, type ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center gap-2 rounded-md text-xs font-medium tracking-tight outline-none ring-offset-2 ring-offset-black focus-visible:ring-2',

  variants: {
    variant: {
      primary:
        'bg-orange-400 text-orange-950',
      secondary: 'bg-zinc-900 text-zinc-300',
      link: "text-zinc-300",
      outline: "text-zinc-500 border border-zinc-800",
    },

    size: {
      default: 'px-4 py-2.5',
      sm: 'px-3 py-1.5',
      icon: "h-10 w-10",
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={button({ variant, size, className })}
      />
    )
  }
)

Button.displayName = 'Button'
