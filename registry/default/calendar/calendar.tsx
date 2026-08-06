"use client"

import * as React from "react"
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import {
  DayPicker,
  type DayPickerProps,
} from "react-day-picker"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CalendarProps = DayPickerProps

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      captionLayout={captionLayout}
      className={cn(
        "w-fit rounded-2xl border bg-background p-3 text-foreground shadow-sm",
        className
      )}
      classNames={{
        months:
          "relative flex flex-col gap-4 sm:flex-row",
        month:
          "space-y-4",
        month_caption:
          "relative flex h-9 items-center justify-center px-10",
        caption_label:
          "text-sm font-semibold",
        dropdowns:
          "flex items-center justify-center gap-2",
        dropdown_root:
          "relative rounded-md border bg-background px-2 py-1 text-sm",
        dropdown:
          "absolute inset-0 cursor-pointer opacity-0",
        nav:
          "absolute inset-x-0 top-0 flex items-center justify-between",
        button_previous: cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "size-9 p-0"
        ),
        button_next: cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "size-9 p-0"
        ),
        month_grid:
          "w-full border-collapse space-y-1",
        weekdays:
          "flex",
        weekday:
          "w-9 rounded-md text-center text-xs font-medium text-muted-foreground",
        week:
          "mt-2 flex w-full",
        day:
          "relative size-9 p-0 text-center text-sm",
        day_button: cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "size-9 rounded-lg p-0 font-normal aria-selected:opacity-100"
        ),
        selected:
          "rounded-lg bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today:
          "rounded-lg bg-accent text-accent-foreground",
        outside:
          "text-muted-foreground opacity-40",
        disabled:
          "text-muted-foreground opacity-40",
        hidden:
          "invisible",
        range_start:
          "rounded-l-lg bg-primary text-primary-foreground",
        range_middle:
          "rounded-none bg-accent text-accent-foreground",
        range_end:
          "rounded-r-lg bg-primary text-primary-foreground",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className }) => {
          if (orientation === "left") {
            return (
              <ChevronLeft
                className={cn("size-4", className)}
              />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRight
                className={cn("size-4", className)}
              />
            )
          }

          return (
            <ChevronDown
              className={cn("size-4", className)}
            />
          )
        },
      }}
      {...props}
    />
  )
}

export { Calendar }