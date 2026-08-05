"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type AvatarSize = "sm" | "md" | "lg" | "xl"

type AvatarProps = React.ComponentProps<"span"> & {
  size?: AvatarSize
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-14 text-base",
  xl: "size-20 text-xl",
}

function Avatar({
  className,
  size = "md",
  ...props
}: AvatarProps) {
  return (
    <span
      data-slot="avatar"
      data-size={size}
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-full bg-muted align-middle",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  alt,
  onError,
  ...props
}: React.ComponentProps<"img">) {
  const [visible, setVisible] = React.useState(true)

  if (!visible) {
    return null
  }

  return (
    <img
      data-slot="avatar-image"
      alt={alt}
      className={cn(
        "relative z-10 aspect-square size-full object-cover",
        className
      )}
      onError={(event) => {
        setVisible(false)
        onError?.(event)
      }}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-fallback"
      className={cn(
        "absolute inset-0 flex items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

type AvatarStatus = "online" | "offline" | "busy" | "away"

type AvatarStatusProps = React.ComponentProps<"span"> & {
  status?: AvatarStatus
}

const statusClasses: Record<AvatarStatus, string> = {
  online: "bg-emerald-500",
  offline: "bg-slate-400",
  busy: "bg-rose-500",
  away: "bg-amber-500",
}

function AvatarStatus({
  className,
  status = "online",
  ...props
}: AvatarStatusProps) {
  return (
    <span
      data-slot="avatar-status"
      data-status={status}
      aria-label={status}
      className={cn(
        "absolute bottom-0 right-0 size-3 rounded-full border-2 border-background",
        statusClasses[status],
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "flex -space-x-3 [&_[data-slot=avatar]]:ring-2 [&_[data-slot=avatar]]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-group-count"
      className={cn(
        "relative inline-flex size-10 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground ring-2 ring-background",
        className
      )}
      {...props}
    />
  )
}

export {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarStatus,
}
