"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Form({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      data-slot="form"
      className={cn("grid gap-6", className)}
      {...props}
    />
  )
}

function FormField({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-field"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

function FormItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-item"
      className={cn("grid gap-2", className)}
      {...props}
    />
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="form-label"
      className={cn(
        "text-sm font-medium leading-none",
        "peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

function FormControl({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-control"
      className={cn("min-w-0", className)}
      {...props}
    />
  )
}

function FormDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-description"
      className={cn(
        "text-sm leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function FormMessage({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-message"
      role="alert"
      className={cn(
        "text-sm font-medium text-destructive",
        className
      )}
      {...props}
    />
  )
}

function FormSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="form-section"
      className={cn(
        "grid gap-5 rounded-2xl border border-border bg-card p-5 text-card-foreground",
        className
      )}
      {...props}
    />
  )
}

function FormSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-section-header"
      className={cn("grid gap-1.5", className)}
      {...props}
    />
  )
}

function FormSectionTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="form-section-title"
      className={cn(
        "text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function FormSectionDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="form-section-description"
      className={cn(
        "text-sm leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function FormActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-actions"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

export {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
}