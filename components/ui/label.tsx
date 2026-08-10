"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function LabelRequired({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="label-required"
      aria-hidden="true"
      className={cn(
        "text-destructive",
        className
      )}
      {...props}
    >
      {children ?? "*"}
    </span>
  )
}

function LabelOptional({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="label-optional"
      className={cn(
        "text-xs font-normal text-muted-foreground",
        className
      )}
      {...props}
    >
      {children ?? "Optional"}
    </span>
  )
}

export {
  Label,
  LabelOptional,
  LabelRequired,
}