import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  [
    "relative grid w-full gap-y-1 rounded-2xl border px-4 py-3.5 text-sm",
    "has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3",
    "[&>svg]:mt-0.5 [&>svg]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground",
        info:
          "border-blue-200 bg-blue-50 text-blue-950 dark:border-blue-500/25 dark:bg-blue-500/10 dark:text-blue-100",
        success:
          "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-100",
        warning:
          "border-amber-200 bg-amber-50 text-amber-950 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-100",
        destructive:
          "border-destructive/25 bg-destructive/10 text-destructive dark:border-destructive/35",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type AlertProps =
  React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants>

function Alert({
  className,
  variant,
  role = "alert",
  ...props
}: AlertProps) {
  return (
    <div
      data-slot="alert"
      role={role}
      className={cn(
        alertVariants({ variant }),
        className
      )}
      {...props}
    />
  )
}

function AlertTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 text-sm leading-6 opacity-90",
        "[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

function AlertActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-actions"
      className={cn(
        "col-span-full mt-3 flex flex-wrap items-center gap-2",
        "sm:col-start-2",
        className
      )}
      {...props}
    />
  )
}

export {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
  alertVariants,
}
