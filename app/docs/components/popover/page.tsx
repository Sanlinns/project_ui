
"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Info,
  Settings,
  Sparkles,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"

const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add popover --installer native`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add popover --installer shadcn`
const overwriteCode =
  `npx binhlaig-ui@latest add popover --installer native --overwrite`

const importCode = `import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"`

const basicCode = `import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Open popover
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Account settings</PopoverTitle>
          <PopoverDescription>
            Manage your account preferences.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}`

const formCode = `import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function SettingsPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          Settings
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
        </PopoverHeader>

        <div className="mt-4 grid gap-3">
          <label className="grid gap-1.5 text-sm">
            Width
            <input className="h-9 rounded-lg border bg-background px-3" />
          </label>

          <label className="grid gap-1.5 text-sm">
            Height
            <input className="h-9 rounded-lg border bg-background px-3" />
          </label>
        </div>
      </PopoverContent>
    </Popover>
  )
}`

const hoverCode = `import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTrigger,
} from "@/components/ui/popover"

export function HoverPopover() {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        openOnHover
        delay={200}
      >
        <Button variant="outline">
          Hover me
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverDescription>
          This popover opens when the trigger is hovered.
        </PopoverDescription>
      </PopoverContent>
    </Popover>
  )
}`

const controlledCode = `"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover"

export function ControlledPopover() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open controlled popover
      </Button>

      <Popover
        open={open}
        onOpenChange={setOpen}
      >
        <PopoverContent>
          <div className="flex items-start justify-between gap-4">
            <PopoverHeader>
              <PopoverTitle>Controlled state</PopoverTitle>
              <PopoverDescription>
                The parent component controls this popover.
              </PopoverDescription>
            </PopoverHeader>

            <PopoverClose />
          </div>
        </PopoverContent>
      </Popover>
    </>
  )
}`

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const [tab, setTab] = React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
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
                <span className="absolute inset-x-2 bottom-0 h-0.5 bg-primary" />
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
        <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
          {children}
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
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export default function PopoverDocumentationPage() {
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [controlledOpen, setControlledOpen] =
    React.useState(false)

  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode

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
            <Link href="/docs/components" className="hover:text-foreground">
              Components
            </Link>
            <span>/</span>
            <span className="text-foreground">Popover</span>
          </div>

          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />
                Binhlaig UI Component
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Popover
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Displays rich content in an accessible popup anchored
                to a trigger.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.querySelector("#usage")?.scrollIntoView({
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
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Code2 className="size-4" />
                  API reference
                </Button>
              </div>
            </div>
          </section>

          <div className="space-y-16">
            <section>
              <SectionTitle
                id="installation"
                title="Installation"
                description="Initialize Binhlaig UI and install Popover using your preferred installer."
              />

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">Initialize first</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{initCode}</code>
                </pre>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="flex border-b border-border p-1">
                  {(["native", "shadcn"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInstaller(item)}
                      className={cn(
                        "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium",
                        installer === item
                          ? item === "native"
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item === "native" ? "Native Beta" : "Shadcn Stable"}
                    </button>
                  ))}
                </div>

                <div className="bg-slate-950">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <span className="text-xs text-slate-500">Terminal</span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
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
              </div>
            </section>

            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import Popover primitives from your UI directory."
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
                title="Usage"
                description="Use Popover for compact contextual content."
              />
              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <User className="size-4" />
                        Open popover
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                      <PopoverHeader>
                        <PopoverTitle>Account settings</PopoverTitle>
                        <PopoverDescription>
                          Manage your account preferences.
                        </PopoverDescription>
                      </PopoverHeader>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="form"
                title="Form Popover"
                description="Place compact form controls inside the popover."
              />
              <div className="mt-6">
                <CodePreview code={formCode}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <Settings className="size-4" />
                        Settings
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-80">
                      <PopoverHeader>
                        <PopoverTitle>Dimensions</PopoverTitle>
                      </PopoverHeader>

                      <div className="mt-4 grid gap-3">
                        <label className="grid gap-1.5 text-sm">
                          Width
                          <input className="h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20" />
                        </label>

                        <label className="grid gap-1.5 text-sm">
                          Height
                          <input className="h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20" />
                        </label>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="hover"
                title="Open on Hover"
                description="Enable openOnHover and configure the delay."
              />
              <div className="mt-6">
                <CodePreview code={hoverCode}>
                  <Popover>
                    <PopoverTrigger asChild openOnHover delay={200}>
                      <Button variant="outline">
                        <Bell className="size-4" />
                        Hover me
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent>
                      <PopoverDescription>
                        This popover opens when the trigger is hovered.
                      </PopoverDescription>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="controlled"
                title="Controlled State"
                description="Manage the open state from the parent component."
              />
              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <>
                    <Button onClick={() => setControlledOpen(true)}>
                      Open controlled popover
                    </Button>

                    <Popover
                      open={controlledOpen}
                      onOpenChange={setControlledOpen}
                    >
                      <PopoverContent>
                        <div className="flex items-start justify-between gap-4">
                          <PopoverHeader>
                            <PopoverTitle>Controlled state</PopoverTitle>
                            <PopoverDescription>
                              The parent component controls this popover.
                            </PopoverDescription>
                          </PopoverHeader>

                          <PopoverClose />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Popover source with the latest registry version."
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
                description="Main components available in the Binhlaig UI Popover."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">Component</th>
                      <th className="px-5 py-4 font-medium">Purpose</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {[
                      ["Popover", "Controls the open state."],
                      ["PopoverTrigger", "Opens the popover."],
                      ["PopoverContent", "Renders the positioned popup."],
                      ["PopoverHeader", "Groups title and description."],
                      ["PopoverTitle", "Accessible title."],
                      ["PopoverDescription", "Accessible description."],
                      ["PopoverClose", "Closes the popover."],
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

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/textarea"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Textarea
                </div>
              </Link>

              <Link
                href="/docs/components"
                className="group rounded-2xl border border-border p-5 text-right hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">Next</div>
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
        <div className="sticky top-24 border-l border-border pl-5">
          <p className="mb-4 text-sm font-semibold">On this page</p>
          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Form Popover", "#form"],
              ["Open on Hover", "#hover"],
              ["Controlled State", "#controlled"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground hover:text-foreground"
          >
            Edit this page
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}