"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Check,
  Menu,
  Monitor,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentSearch } from "../ComponentSearch";

const navItems = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/docs/components" },
  { label: "Templates", href: "/templates" },
  { label: "Colors", href: "/colors" },
];

export function ComponentsHeader() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/docs") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-base font-bold text-primary-foreground shadow-sm">
              B
            </span>

            <span className="hidden items-center gap-1.5 sm:flex">
              <span className="text-base font-semibold tracking-tight text-foreground">
                Binhlaig
              </span>

              <span className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                UI
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    "outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">


            {/* Search input */}
            <ComponentSearch/>
           

            {/* Mobile search */}
            <button
              type="button"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
              aria-label="Search"
            >
              <Search className="size-4" />
            </button>


            {/* Theme selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setThemeMenuOpen((value) => !value)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Change theme"
                aria-expanded={themeMenuOpen}
              >
                {!mounted ? (
                  <Monitor className="size-[18px]" />
                ) : theme === "dark" ? (
                  <Moon className="size-[18px]" />
                ) : theme === "light" ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Monitor className="size-[18px]" />
                )}
              </button>

              {themeMenuOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close theme menu"
                    onClick={() => setThemeMenuOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />

                  <div className="absolute right-0 top-11 z-50 w-36 rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
                    <ThemeOption
                      label="Light"
                      value="light"
                      currentTheme={theme}
                      icon={<Sun className="size-4" />}
                      onSelect={() => {
                        setTheme("light");
                        setThemeMenuOpen(false);
                      }}
                    />

                    <ThemeOption
                      label="Dark"
                      value="dark"
                      currentTheme={theme}
                      icon={<Moon className="size-4" />}
                      onSelect={() => {
                        setTheme("dark");
                        setThemeMenuOpen(false);
                      }}
                    />

                    <ThemeOption
                      label="System"
                      value="system"
                      currentTheme={theme}
                      icon={<Monitor className="size-4" />}
                      onSelect={() => {
                        setTheme("system");
                        setThemeMenuOpen(false);
                      }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}



            </nav>
          </div>
        )}
      </header>
    </>
  );
}

type ThemeOptionProps = {
  label: string;
  value: string;
  currentTheme?: string;
  icon: React.ReactNode;
  onSelect: () => void;
};

function ThemeOption({
  label,
  value,
  currentTheme,
  icon,
  onSelect,
}: ThemeOptionProps) {
  const selected = currentTheme === value;

  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-accent"
    >
      {icon}
      <span>{label}</span>

      {selected && <Check className="ml-auto size-3.5 text-primary" />}
    </button>
  );
}