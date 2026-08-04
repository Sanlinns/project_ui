"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  [
    "flex w-full rounded-xl border bg-background px-3 py-2",
    "text-sm text-foreground shadow-sm outline-none transition",
    "placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
    "dark:aria-invalid:ring-destructive/30",
  ],
  {
    variants: {
      size: {
        sm: "min-h-20 text-xs",
        default: "min-h-28 text-sm",
        lg: "min-h-36 text-base",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      size: "default",
      resize: "vertical",
    },
  }
)

type TextareaProps = React.ComponentProps<"textarea"> &
  VariantProps<typeof textareaVariants>

function Textarea({
  className,
  size,
  resize,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        textareaVariants({
          size,
          resize,
        }),
        className
      )}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }