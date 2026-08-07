"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import {
  Check,
  ChevronDown,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"

function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitive.Root.Props<Value, Multiple>
) {
  return (
    <ComboboxPrimitive.Root
      data-slot="combobox"
      {...props}
    />
  )
}

function ComboboxInputGroup({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.InputGroup
>) {
  return (
    <ComboboxPrimitive.InputGroup
      data-slot="combobox-input-group"
      className={cn(
        "flex min-h-10 w-full items-center rounded-xl border border-input bg-background shadow-sm",
        "focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/20",
        "has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Input
>) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(
        "h-10 min-w-0 flex-1 bg-transparent px-3 text-sm outline-none",
        "placeholder:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Trigger
>) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground",
        "transition hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
        className
      )}
      {...props}
    >
      {children ?? <ChevronDown className="size-4" />}
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Clear
>) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground",
        "transition hover:bg-muted hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-4" />}
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxPortal(
  props: React.ComponentProps<
    typeof ComboboxPrimitive.Portal
  >
) {
  return (
    <ComboboxPrimitive.Portal
      data-slot="combobox-portal"
      {...props}
    />
  )
}

function ComboboxPositioner({
  className,
  sideOffset = 6,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Positioner
>) {
  return (
    <ComboboxPrimitive.Positioner
      data-slot="combobox-positioner"
      sideOffset={sideOffset}
      className={cn("z-50", className)}
      {...props}
    />
  )
}

function ComboboxPopup({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Popup
>) {
  return (
    <ComboboxPrimitive.Popup
      data-slot="combobox-popup"
      className={cn(
        "w-[var(--anchor-width)] min-w-56 overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-xl outline-none",
        "origin-[var(--transform-origin)] transition duration-150",
        "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxList({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.List
>) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "max-h-72 overflow-y-auto p-1",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Item
>) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex min-h-9 cursor-default select-none items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[selected]:font-medium",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </ComboboxPrimitive.Item>
  )
}

function ComboboxItemIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.ItemIndicator
>) {
  return (
    <ComboboxPrimitive.ItemIndicator
      data-slot="combobox-item-indicator"
      className={cn(
        "ml-auto inline-flex size-4 items-center justify-center",
        className
      )}
      {...props}
    >
      {children ?? <Check className="size-4" />}
    </ComboboxPrimitive.ItemIndicator>
  )
}

function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Empty
>) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "px-3 py-8 text-center text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ComboboxGroup({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Group
>) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className={cn("py-1", className)}
      {...props}
    />
  )
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.GroupLabel
>) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn(
        "px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function ComboboxSeparator({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Separator
>) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn(
        "-mx-1 my-1 h-px bg-border",
        className
      )}
      {...props}
    />
  )
}

/**
 * Base UI Combobox.Value is a render/value utility component.
 * It does not render a normal DOM element, so className and
 * data attributes must not be passed to it.
 */
function ComboboxValue(
  props: React.ComponentProps<
    typeof ComboboxPrimitive.Value
  >
) {
  return <ComboboxPrimitive.Value {...props} />
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Chips
>) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        "flex min-h-10 flex-1 flex-wrap items-center gap-1.5 px-2 py-1.5",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.Chip
>) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs font-medium",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: React.ComponentProps<
  typeof ComboboxPrimitive.ChipRemove
>) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn(
        "inline-flex size-4 items-center justify-center rounded text-muted-foreground",
        "hover:bg-background hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? <X className="size-3" />}
    </ComboboxPrimitive.ChipRemove>
  )
}

export {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
}