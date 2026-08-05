"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"

type CheckboxProps =
  React.ComponentProps<typeof CheckboxPrimitive.Root> & {
    indicatorClassName?: string
  }

function Checkbox({
  className,
  indicatorClassName,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer inline-flex size-5 shrink-0 items-center justify-center rounded-md border border-input bg-background shadow-sm outline-none transition",
        "hover:border-primary/60",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "data-[checked]:border-primary data-[checked]:bg-primary data-[checked]:text-primary-foreground",
        "data-[indeterminate]:border-primary data-[indeterminate]:bg-primary data-[indeterminate]:text-primary-foreground",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        "data-[invalid]:border-destructive data-[invalid]:ring-2 data-[invalid]:ring-destructive/20",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          "group relative flex size-full items-center justify-center text-current",
          "transition data-[starting-style]:scale-75 data-[starting-style]:opacity-0",
          "data-[ending-style]:scale-75 data-[ending-style]:opacity-0",
          indicatorClassName
        )}
      >
        <Check
          className={cn(
            "size-3.5",
            "group-data-[indeterminate]:hidden"
          )}
        />

        <Minus
          className={cn(
            "absolute size-3.5 hidden",
            "group-data-[indeterminate]:block"
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
