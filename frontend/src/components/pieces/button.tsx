import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
const colorMap = {
  sky: "bg-sky-500 hover:bg-sky-600 text-white",
  red: "bg-red-500 hover:bg-red-600 text-white",
  green: "bg-green-500 hover:bg-green-600 text-white",
  black: "bg-black hover:bg-gray-800 text-white",
}
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-border bg-background hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent",
        link: "text-primary underline-offset-4 hover:underline",
        rounded: "px-8 py-3 rounded-full flex items-center justify-center gap-2 transition-colors"
      },

      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-10 px-6 text-lg",
      },

      gap: {
        small: "gap-1",
        default: "gap-2",
        large: "gap-4",
      },

      hug: {
        true: "w-auto self-start",
        false: "w-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
      gap: "default",
      hug: true,
    },
  }
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
    iconPosition?: "left" | "right"
    color?:"sky" | "red" | "green" | "black"
  }

export function Button({
  className,
  variant,
  size,
  gap,
  hug,
  asChild = false,
  icon,
  iconPosition = "left",
  color,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, gap, hug }),

        !variant && color && colorMap[color],

        className
      )}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      {children}

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </Comp>
  )
}