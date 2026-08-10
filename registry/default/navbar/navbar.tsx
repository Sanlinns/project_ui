"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

function Navbar({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="navbar"
      className={cn(
        "w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80",
        className
      )}
      {...props}
    />
  )
}

function NavbarContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-container"
      className={cn(
        "mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
}

function NavbarBrand({
  href = "/",
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="navbar-brand"
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-semibold tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

function NavbarNav({
  className,
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="navbar-nav"
      className={cn(
        "hidden items-center gap-1 md:flex",
        className
      )}
      {...props}
    />
  )
}

type NavbarLinkProps = React.ComponentProps<typeof Link> & {
  active?: boolean
}

function NavbarLink({
  active = false,
  className,
  ...props
}: NavbarLinkProps) {
  return (
    <Link
      data-slot="navbar-link"
      data-active={active ? "true" : undefined}
      className={cn(
        "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors",
        "hover:bg-muted hover:text-foreground",
        "data-[active=true]:bg-muted data-[active=true]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function NavbarActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn(
        "flex items-center gap-2",
        className
      )}
      {...props}
    />
  )
}

type NavbarMenuButtonProps = React.ComponentProps<"button"> & {
  open?: boolean
}

function NavbarMenuButton({
  open = false,
  className,
  ...props
}: NavbarMenuButtonProps) {
  return (
    <button
      type="button"
      data-slot="navbar-menu-button"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={open}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-lg border text-muted-foreground transition",
        "hover:bg-muted hover:text-foreground md:hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
        className
      )}
      {...props}
    >
      {open ? (
        <X className="size-5" />
      ) : (
        <Menu className="size-5" />
      )}
    </button>
  )
}

function NavbarMobileMenu({
  open,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  open: boolean
}) {
  if (!open) return null

  return (
    <div
      data-slot="navbar-mobile-menu"
      className={cn(
        "border-t bg-background md:hidden",
        className
      )}
      {...props}
    >
      <div className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
        {children}
      </div>
    </div>
  )
}

function NavbarMobileLink({
  active = false,
  className,
  ...props
}: NavbarLinkProps) {
  return (
    <Link
      data-slot="navbar-mobile-link"
      data-active={active ? "true" : undefined}
      className={cn(
        "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors",
        "hover:bg-muted hover:text-foreground",
        "data-[active=true]:bg-muted data-[active=true]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContainer,
  NavbarLink,
  NavbarMenuButton,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarNav,
}