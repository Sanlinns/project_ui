"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Moon,
  Search,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContainer,
  NavbarLink,
  NavbarMenuButton,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarNav,
} from "@/components/ui/navbar"

type PreviewTab = "preview" | "code"

const initCode = `npx binhlaig-ui@latest init`
const installCode = `npx binhlaig-ui@latest add navbar`
const overwriteCode =
  `npx binhlaig-ui@latest add navbar --overwrite`

const importCode = `import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContainer,
  NavbarLink,
  NavbarMenuButton,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarNav,
} from "@/components/ui/navbar"`

const basicCode = `import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContainer,
  NavbarLink,
  NavbarNav,
} from "@/components/ui/navbar"

export function NavbarDemo() {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand href="/">
          Binhlaig UI
        </NavbarBrand>

        <NavbarNav>
          <NavbarLink href="/" active>
            Home
          </NavbarLink>
          <NavbarLink href="/docs/installation">
            Docs
          </NavbarLink>
          <NavbarLink href="/docs/components">
            Components
          </NavbarLink>
        </NavbarNav>

        <NavbarActions>
          <button>Sign in</button>
        </NavbarActions>
      </NavbarContainer>
    </Navbar>
  )
}`

const responsiveCode = `"use client"

import * as React from "react"

import {
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarLink,
  NavbarMenuButton,
  NavbarMobileLink,
  NavbarMobileMenu,
  NavbarNav,
} from "@/components/ui/navbar"

export function ResponsiveNavbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand href="/">
          Binhlaig UI
        </NavbarBrand>

        <NavbarNav>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/docs/installation">Docs</NavbarLink>
          <NavbarLink href="/docs/components">
            Components
          </NavbarLink>
        </NavbarNav>

        <NavbarMenuButton
          open={open}
          onClick={() => setOpen((value) => !value)}
        />
      </NavbarContainer>

      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="/">
          Home
        </NavbarMobileLink>
        <NavbarMobileLink href="/docs/installation">
          Docs
        </NavbarMobileLink>
        <NavbarMobileLink href="/docs/components">
          Components
        </NavbarMobileLink>
      </NavbarMobileMenu>
    </Navbar>
  )
}`

const activeCode = `import {
  NavbarLink,
} from "@/components/ui/navbar"

export function ActiveNavLink() {
  return (
    <NavbarLink href="/docs/installation" active>
      Docs
    </NavbarLink>
  )
}`

const actionsCode = `import { Search, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Navbar,
  NavbarActions,
  NavbarBrand,
  NavbarContainer,
} from "@/components/ui/navbar"

export function NavbarWithActions() {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand href="/">
          Binhlaig UI
        </NavbarBrand>

        <NavbarActions>
          <Button variant="ghost" size="icon">
            <Search className="size-4" />
          </Button>

          <Button variant="ghost" size="icon">
            <Moon className="size-4" />
          </Button>

          <Button>
            Get Started
          </Button>
        </NavbarActions>
      </NavbarContainer>
    </Navbar>
  )
}`

function cn(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ")
}

function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const [tab, setTab] =
    React.useState<PreviewTab>("preview")
  const [copied, setCopied] =
    React.useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <div className="flex items-center justify-between border-b px-3">
        <div className="flex">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize",
                tab === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
              {tab === item && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>

      {tab === "preview" ? (
        <div className="min-h-[240px] bg-muted/20 p-6">
          <div className="overflow-hidden rounded-xl border bg-background">
            {children}
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

function ResponsivePreview() {
  const [open, setOpen] = React.useState(false)

  return (
    <Navbar>
      <NavbarContainer className="px-4">
        <NavbarBrand href="#">
          Binhlaig UI
        </NavbarBrand>

        <NavbarNav>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink href="#">
            Docs
          </NavbarLink>
          <NavbarLink href="#">
            Components
          </NavbarLink>
        </NavbarNav>

        <NavbarMenuButton
          open={open}
          onClick={() => setOpen((value) => !value)}
        />
      </NavbarContainer>

      <NavbarMobileMenu open={open}>
        <NavbarMobileLink href="#" active>
          Home
        </NavbarMobileLink>
        <NavbarMobileLink href="#">
          Docs
        </NavbarMobileLink>
        <NavbarMobileLink href="#">
          Components
        </NavbarMobileLink>
      </NavbarMobileMenu>
    </Navbar>
  )
}

export default function NavbarDocumentationPage() {
  const [copied, setCopied] =
    React.useState(false)

  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCode)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >
              Components
            </Link>

            <span>/</span>
            <span className="text-foreground">
              Navbar
            </span>
          </div>

          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Binhlaig UI Component
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Navbar
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              A responsive navigation bar with brand,
              links, actions and mobile menu support.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  document
                    .querySelector("#usage")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                View examples
                <ArrowRight className="size-4" />
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#api-reference")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                <Code2 className="size-4" />
                API reference
              </Button>
            </div>
          </section>

          <div className="mt-12 space-y-16">
            <section>
              <SectionTitle
                id="installation"
                title="Installation"
                description="Initialize Binhlaig UI once, then install Navbar using the saved installer."
              />

              <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
                <p className="text-sm font-medium">
                  Initialize first
                </p>

                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{initCode}</code>
                </pre>
              </div>

              <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                  <span className="text-xs text-slate-500">
                    Terminal
                  </span>

                  <button
                    type="button"
                    onClick={copyInstall}
                    className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
                    aria-label="Copy install command"
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Clipboard className="size-4" />
                    )}
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
                  <code>{installCode}</code>
                </pre>
              </div>
            </section>

            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import the Navbar primitives you need."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>

            <section>
              <SectionTitle
                id="usage"
                title="Basic"
                description="Use brand, navigation links and actions inside the navbar container."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Navbar>
                    <NavbarContainer className="px-4">
                      <NavbarBrand href="#">
                        Binhlaig UI
                      </NavbarBrand>

                      <NavbarNav>
                        <NavbarLink href="#" active>
                          Home
                        </NavbarLink>
                        <NavbarLink href="#">
                          Docs
                        </NavbarLink>
                        <NavbarLink href="#">
                          Components
                        </NavbarLink>
                      </NavbarNav>

                      <NavbarActions>
                        <Button size="sm">
                          Sign in
                        </Button>
                      </NavbarActions>
                    </NavbarContainer>
                  </Navbar>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="responsive"
                title="Responsive"
                description="Hide desktop navigation and show a mobile menu button on smaller screens."
              />

              <div className="mt-6">
                <CodePreview code={responsiveCode}>
                  <ResponsivePreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="active-link"
                title="Active Link"
                description="Use the active prop to highlight the current route."
              />

              <div className="mt-6">
                <CodePreview code={activeCode}>
                  <div className="flex items-center gap-2">
                    <NavbarLink href="#">
                      Home
                    </NavbarLink>
                    <NavbarLink href="#" active>
                      Docs
                    </NavbarLink>
                    <NavbarLink href="#">
                      Components
                    </NavbarLink>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="actions"
                title="With Actions"
                description="Add search, theme controls or primary actions."
              />

              <div className="mt-6">
                <CodePreview code={actionsCode}>
                  <Navbar>
                    <NavbarContainer className="px-4">
                      <NavbarBrand href="#">
                        Binhlaig UI
                      </NavbarBrand>

                      <NavbarActions>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Search"
                        >
                          <Search className="size-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Theme"
                        >
                          <Moon className="size-4" />
                        </Button>

                        <Button size="sm">
                          Get Started
                        </Button>
                      </NavbarActions>
                    </NavbarContainer>
                  </Navbar>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Navbar source with the latest registry version."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{overwriteCode}</code>
                </pre>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="Main primitives available in Binhlaig UI Navbar."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        Component
                      </th>
                      <th className="px-5 py-4 font-medium">
                        Purpose
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {[
                      ["Navbar", "Root navigation header."],
                      ["NavbarContainer", "Centers and spaces navbar content."],
                      ["NavbarBrand", "Brand or logo link."],
                      ["NavbarNav", "Desktop navigation links."],
                      ["NavbarLink", "Navigation link with active state."],
                      ["NavbarActions", "Right-side action controls."],
                      ["NavbarMenuButton", "Mobile menu toggle."],
                      ["NavbarMobileMenu", "Responsive mobile navigation panel."],
                      ["NavbarMobileLink", "Mobile navigation link."],
                    ].map(([name, purpose]) => (
                      <tr key={name}>
                        <td className="px-5 py-4">
                          <code>{name}</code>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-4 border-t pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/label"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Label
                </div>
              </Link>

              <Link
                href="/docs/components"
                className="rounded-2xl border p-5 text-right hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">
                  Next
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  All components
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l pl-5">
          <p className="mb-4 text-sm font-semibold">
            On this page
          </p>

          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Basic", "#usage"],
              ["Responsive", "#responsive"],
              ["Active Link", "#active-link"],
              ["With Actions", "#actions"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground hover:text-foreground"
          >
            Edit this page
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}
