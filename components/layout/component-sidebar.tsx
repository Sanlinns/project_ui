"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Box,
  ChevronDown,
  Component,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type SidebarItem = {
  title: string;
  href: string;
  badge?: string;
};

type SidebarGroup = {
  title: string;
  icon: React.ElementType;
  items: SidebarItem[];
};

const sidebarGroups: SidebarGroup[] = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      {
        title: "Introduction",
        href: "/components",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
      {
        title: "Theming",
        href: "/components/theming",
      },
      {
        title: "CLI",
        href: "/components/cli",
      },
    ],
  },
  {
    title: "General",
    icon: Component,
    items: [
      {
        title: "Accordion",
        href: "/components/accordion",
      },
      {
        title: "Avatar",
        href: "/components/avatar",
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
      },
      {
        title: "Button",
        href: "/docs/components/buttons",
      },
      {
        title: "Card",
        href: "/docs/components/card",
      },
      {
        title: "Chip",
        href: "/components/chip",
      },
      {
        title: "Divider",
        href: "/components/divider",
      },
      {
        title: "Image",
        href: "/components/image",
      },
      {
        title: "Link",
        href: "/components/link",
      },
    ],
  },
  {
    title: "Forms",
    icon: Box,
    items: [
      {
        title: "Checkbox",
        href: "/components/checkbox",
      },
      {
        title: "Input",
        href: "/docs/components/input",
      },
      {
        title: "Radio Group",
        href: "/components/radio-group",
      },
      {
        title: "Select",
        href: "/components/select",
      },
      {
        title: "Switch",
        href: "/components/switch",
      },
      {
        title: "Textarea",
        href: "/components/textarea",
      },
    ],
  },
  {
    title: "Overlays",
    icon: Sparkles,
    items: [
      {
        title: "Dialog",
        href: "/components/dialog",
      },
      {
        title: "Alert Dialog",
        href: "/docs/components/alert-dialog",
      },
      {
        title: "Drawer",
        href: "/components/drawer",
      },
      {
        title: "Dropdown",
        href: "/components/dropdown",
      },
      {
        title: "Popover",
        href: "/components/popover",
      },
      {
        title: "Tooltip",
        href: "/components/tooltip",
      },
    ],
  },
  {
    title: "Feedback",
    icon: Sparkles,
    items: [
      {
        title: "Alert",
        href: "/components/alert",
      },
      {
        title: "Progress",
        href: "/components/progress",
      },
      {
        title: "Skeleton",
        href: "/components/skeleton",
      },
      {
        title: "Spinner",
        href: "/components/spinner",
      },
      {
        title: "Toast",
        href: "/components/toast",
        badge: "New",
      },
    ],
  },
];

type ComponentSidebarProps = {
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
};

export function ComponentSidebar({
  mobileOpen = false,
  onMobileOpenChange,
}: ComponentSidebarProps) {
  const pathname = usePathname();
  const [search, setSearch] = React.useState("");
  const [openGroups, setOpenGroups] = React.useState<string[]>(
    sidebarGroups.map((group) => group.title),
  );

  const filteredGroups = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return sidebarGroups;

    return sidebarGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((item) =>
          item.title.toLowerCase().includes(query),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [search]);

  const toggleGroup = (title: string) => {
    setOpenGroups((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title],
    );
  };

  const sidebarContent = (
    <div className="flex h-full flex-col bg-background">
      {/* Mobile title */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5 lg:hidden">
        <div>
          <p className="text-sm font-semibold text-foreground">Components</p>
          <p className="text-xs text-muted-foreground">Binhlaig UI</p>
        </div>

        <button
          type="button"
          onClick={() => onMobileOpenChange?.(false)}
          className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Close sidebar"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Search */}
      <div className="shrink-0 border-b border-border p-4">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search components..."
            className="h-10 w-full rounded-xl border border-border bg-muted/40 pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {filteredGroups.length === 0 ? (
          <div className="px-3 py-10 text-center">
            <Search className="mx-auto size-5 text-muted-foreground" />

            <p className="mt-3 text-sm font-medium text-foreground">
              No component found
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Try another component name.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredGroups.map((group) => {
              const Icon = group.icon;
              const isOpen =
                openGroups.includes(group.title) || search.length > 0;

              return (
                <div key={group.title}>
                  <button
                    type="button"
                    onClick={() => toggleGroup(group.title)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    <Icon className="size-4" />

                    <span>{group.title}</span>

                    <ChevronDown
                      className={cn(
                        "ml-auto size-3.5 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-1 space-y-0.5">
                      {group.items.map((item) => {
                        const isActive =
                          pathname === item.href ||
                          (item.href !== "/components" &&
                            pathname.startsWith(`${item.href}/`));

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => onMobileOpenChange?.(false)}
                            className={cn(
                              "group relative flex h-9 items-center rounded-lg px-3 pl-9 text-sm transition-colors",
                              isActive
                                ? "bg-primary/10 font-medium text-primary"
                                : "text-muted-foreground hover:bg-accent hover:text-foreground",
                            )}
                          >
                            <span
                              className={cn(
                                "absolute left-[18px] size-1.5 rounded-full transition-colors",
                                isActive
                                  ? "bg-primary"
                                  : "bg-border group-hover:bg-muted-foreground",
                              )}
                            />

                            <span className="truncate">{item.title}</span>

                            {item.badge && (
                              <span className="ml-auto rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="shrink-0 border-t border-border p-4">
        <div className="rounded-xl border border-border bg-muted/30 p-3">
          <p className="text-xs font-semibold text-foreground">
            Binhlaig UI
          </p>

          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Reusable and accessible React components.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            onClick={() => onMobileOpenChange?.(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-label="Close sidebar overlay"
          />

          <aside className="absolute inset-y-0 left-0 w-[85%] max-w-xs border-r border-border shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
}