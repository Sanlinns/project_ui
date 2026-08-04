"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1",
    "whitespace-nowrap rounded-full border px-2.5 py-0.5",
    "text-xs font-medium leading-none",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        outline:
          "border-border bg-background text-foreground",
        destructive:
          "border-transparent bg-destructive text-white",
        success:
          "border-transparent bg-emerald-600 text-white dark:bg-emerald-500",
        warning:
          "border-transparent bg-amber-500 text-slate-950 dark:bg-amber-400",
        info:
          "border-transparent bg-blue-600 text-white dark:bg-blue-500",
        ghost:
          "border-transparent bg-muted text-muted-foreground",
      },
      size: {
        sm: "h-5 px-2 text-[10px]",
        default: "h-6 px-2.5 text-xs",
        lg: "h-7 px-3 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>

function Badge({
  className,
  variant,
  size,
  ...props
}: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(
        badgeVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  )
}

export { Badge, badgeVariants }