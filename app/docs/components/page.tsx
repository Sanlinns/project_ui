"use client"

import * as React from "react"
import Link from "next/link"
import {
  AlertCircle,
  BadgeCheck,
  Box,
  CheckSquare,
  ChevronRight,
  CircleUserRound,
  CreditCard,
  FormInput,
  Layers3,
  MessageSquare,
  PanelBottom,
  PanelTop,
  Search,
  Table2,
  TextCursorInput,
  TextQuote,
  ToggleLeft,
} from "lucide-react"

import { Input } from "@/components/ui/input"

type ComponentItem = {
  name: string
  slug: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

type ComponentGroup = {
  id: string
  title: string
  items: ComponentItem[]
}

const componentGroups: ComponentGroup[] = [
  {
    id: "actions",
    title: "Actions",
    items: [
      {
        name: "Button",
        slug: "button",
        description: "Trigger actions and submit forms.",
        icon: ToggleLeft,
      },
    ],
  },
  {
    id: "forms",
    title: "Forms",
    items: [
      {
        name: "Input",
        slug: "input",
        description: "Single-line text input.",
        icon: TextCursorInput,
      },
      {
        name: "Textarea",
        slug: "textarea",
        description: "Multi-line text input.",
        icon: TextQuote,
      },
      {
        name: "Checkbox",
        slug: "checkbox",
        description: "Select one or more options.",
        icon: CheckSquare,
      },
      {
        name: "Form",
        slug: "form",
        description: "Build accessible form layouts.",
        icon: FormInput,
      },
    ],
  },
  {
    id: "data-display",
    title: "Data Display",
    items: [
      {
        name: "Card",
        slug: "card",
        description: "Group related content.",
        icon: CreditCard,
      },
      {
        name: "Badge",
        slug: "badge",
        description: "Show status or labels.",
        icon: BadgeCheck,
      },
      {
        name: "Avatar",
        slug: "avatar",
        description: "Display a user image or initials.",
        icon: CircleUserRound,
      },
      {
        name: "Data Table",
        slug: "data-table",
        description: "Sort, filter, paginate, and select tabular data.",
        icon: Table2,
      },
    ],
  },
  {
    id: "feedback",
    title: "Feedback",
    items: [
      {
        name: "Alert",
        slug: "alert",
        description: "Show important status messages.",
        icon: AlertCircle,
      },
      {
        name: "Alert Dialog",
        slug: "alert-dialog",
        description: "Confirm important actions.",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: "navigation",
    title: "Navigation",
    items: [
      {
        name: "Tabs",
        slug: "tabs",
        description: "Switch between content sections.",
        icon: Layers3,
      },
      {
        name: "Breadcrumb",
        slug: "breadcrumb",
        description: "Show the current page path.",
        icon: ChevronRight,
      },
    ],
  },
  {
    id: "overlays",
    title: "Overlays",
    items: [
      {
        name: "Popover",
        slug: "popover",
        description: "Show contextual floating content.",
        icon: PanelTop,
      },
      {
        name: "Dialog",
        slug: "dialog",
        description: "Open focused modal content.",
        icon: Box,
      },
      {
        name: "Drawer",
        slug: "drawer",
        description: "Slide content from a screen edge.",
        icon: PanelBottom,
      },
    ],
  },
]

export default function ComponentsPage() {
  const [query, setQuery] = React.useState("")
  const normalizedQuery = query.trim().toLowerCase()

  const filteredGroups = React.useMemo(() => {
    if (!normalizedQuery) {
      return componentGroups
    }

    return componentGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery)
        ),
      }))
      .filter((group) => group.items.length > 0)
  }, [normalizedQuery])

  const visibleCount = filteredGroups.reduce(
    (total, group) => total + group.items.length,
    0
  )

  return (
    <div className="grid w-full gap-10 xl:grid-cols-[minmax(0,1fr)_200px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs" className="hover:text-foreground">
              Docs
            </Link>
            <span>/</span>
            <span className="text-foreground">Components</span>
          </div>

          <header className="border-b pb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Components
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              Reusable UI components for building modern React and
              Next.js applications.
            </p>

            <div className="relative mt-6 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search components..."
                className="h-10 pl-9"
              />
            </div>
          </header>

          <div className="mt-10 space-y-12">
            {filteredGroups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                className="scroll-mt-24"
              >
                <h2 className="mb-4 text-xl font-semibold tracking-tight">
                  {group.title}
                </h2>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item) => {
                    const Icon = item.icon

                    return (
                      <Link
                        key={item.slug}
                        href={`/docs/components/${item.slug}`}
                        className="group rounded-xl border bg-background p-4 transition-colors hover:border-primary/40 hover:bg-muted/40"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                            <Icon className="size-4" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-medium">
                                {item.name}
                              </h3>

                              <ChevronRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                            </div>

                            <p className="mt-1.5 text-sm leading-5 text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </section>
            ))}

            {visibleCount === 0 && (
              <div className="rounded-xl border border-dashed p-10 text-center">
                <Search className="mx-auto size-5 text-muted-foreground" />

                <h2 className="mt-3 font-medium">
                  No components found
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Try a different search term.
                </p>
              </div>
            )}
          </div>
        </article>
      </main>

      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l pl-5">
          <p className="mb-3 text-sm font-medium">
            On this page
          </p>

          <nav className="space-y-1">
            {componentGroups.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="block py-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  )
}
