"use client"

import * as React from "react"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  Info,
  Sparkles,
  TriangleAlert,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"

const initCode = `npx binhlaig-ui@latest init`
const installCode =
  `npx binhlaig-ui@latest add alert`
const overwriteCode =
  `npx binhlaig-ui@latest add alert --overwrite`

const importCode = `import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"`

const basicCode = `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        You can add components using the CLI.
      </AlertDescription>
    </Alert>
  )
}`

const variantsCode = `import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertVariants() {
  return (
    <div className="grid gap-4">
      <Alert variant="info">
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          A new update is available.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes were saved.
        </AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Review these settings before continuing.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong.
        </AlertDescription>
      </Alert>
    </div>
  )
}`

const iconCode = `import { Info } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertWithIcon() {
  return (
    <Alert variant="info">
      <Info />
      <AlertTitle>New feature</AlertTitle>
      <AlertDescription>
        Drawer is now available.
      </AlertDescription>
    </Alert>
  )
}`

const actionCode = `import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertWithAction() {
  return (
    <Alert variant="warning">
      <AlertTitle>Unsaved changes</AlertTitle>
      <AlertDescription>
        Save before leaving this page.
      </AlertDescription>

      <AlertActions>
        <Button size="sm">
          Save changes
        </Button>

        <Button
          size="sm"
          variant="outline"
        >
          Dismiss
        </Button>
      </AlertActions>
    </Alert>
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
        <div className="flex min-h-[260px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
          <div className="w-full max-w-2xl">
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

export default function AlertDocumentationPage() {
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)

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
              Alert
            </span>
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
                Alert
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A clear message block for status updates,
                notices, warnings and errors.
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
            </div>
          </section>

          <div className="space-y-16">
            <section>
              <SectionTitle
                id="installation"
                title="Installation"
                description="Initialize Binhlaig UI once, then install Alert with the saved installer."
              />

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">
                  Initialize first
                </p>

                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{initCode}</code>
                </pre>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="flex border-b border-border p-1">
                  {(["native", "shadcn"] as const).map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setInstaller(item)
                        }
                        className={cn(
                          "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium",
                          installer === item
                            ? item === "native"
                              ? "bg-primary text-primary-foreground"
                              : "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {item === "native"
                          ? "Native Beta"
                          : "Shadcn Stable"}
                      </button>
                    )
                  )}
                </div>

                <div className="bg-slate-950">
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
              </div>
            </section>

            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import Alert primitives from your UI directory."
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
                description="Use AlertTitle and AlertDescription to structure a message."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Alert>
                    <AlertTitle>
                      Heads up
                    </AlertTitle>

                    <AlertDescription>
                      You can add components using the
                      Binhlaig UI CLI.
                    </AlertDescription>
                  </Alert>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="variants"
                title="Variants"
                description="Choose a semantic style that matches the message."
              />

              <div className="mt-6">
                <CodePreview code={variantsCode}>
                  <div className="grid gap-4">
                    <Alert variant="info">
                      <Info />
                      <AlertTitle>
                        Information
                      </AlertTitle>
                      <AlertDescription>
                        A new update is available.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="success">
                      <CheckCircle2 />
                      <AlertTitle>
                        Success
                      </AlertTitle>
                      <AlertDescription>
                        Your changes were saved.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="warning">
                      <TriangleAlert />
                      <AlertTitle>
                        Warning
                      </AlertTitle>
                      <AlertDescription>
                        Review these settings before
                        continuing.
                      </AlertDescription>
                    </Alert>

                    <Alert variant="destructive">
                      <AlertCircle />
                      <AlertTitle>
                        Error
                      </AlertTitle>
                      <AlertDescription>
                        Something went wrong.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="with-icon"
                title="With Icon"
                description="Place an icon before the title for faster visual recognition."
              />

              <div className="mt-6">
                <CodePreview code={iconCode}>
                  <Alert variant="info">
                    <Info />
                    <AlertTitle>
                      New feature
                    </AlertTitle>
                    <AlertDescription>
                      Drawer is now available in the
                      component registry.
                    </AlertDescription>
                  </Alert>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="with-actions"
                title="With Actions"
                description="Add relevant actions without turning the alert into a modal."
              />

              <div className="mt-6">
                <CodePreview code={actionCode}>
                  <Alert variant="warning">
                    <TriangleAlert />
                    <AlertTitle>
                      Unsaved changes
                    </AlertTitle>

                    <AlertDescription>
                      Save your changes before leaving
                      this page.
                    </AlertDescription>

                    <AlertActions>
                      <Button size="sm">
                        Save changes
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                      >
                        Dismiss
                      </Button>
                    </AlertActions>
                  </Alert>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Alert source with the latest registry version."
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
                description="Main components and variants available in Binhlaig UI Alert."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
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

                  <tbody className="divide-y divide-border">
                    {[
                      [
                        "Alert",
                        "The semantic message container.",
                      ],
                      [
                        "AlertTitle",
                        "A concise message heading.",
                      ],
                      [
                        "AlertDescription",
                        "Supporting message content.",
                      ],
                      [
                        "AlertActions",
                        "Optional related actions.",
                      ],
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

              <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        Prop
                      </th>
                      <th className="px-5 py-4 font-medium">
                        Values
                      </th>
                      <th className="px-5 py-4 font-medium">
                        Default
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-5 py-4">
                        <code>variant</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        default, info, success, warning,
                        destructive
                      </td>
                      <td className="px-5 py-4">
                        <code>default</code>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4">
                        <code>role</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        Any valid ARIA role
                      </td>
                      <td className="px-5 py-4">
                        <code>alert</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/checkbox"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Checkbox
                </div>
              </Link>

              <Link
                href="/docs/components"
                className="rounded-2xl border border-border p-5 text-right hover:border-primary/40 hover:bg-primary/5"
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
        <div className="sticky top-24 border-l border-border pl-5">
          <p className="mb-4 text-sm font-semibold">
            On this page
          </p>

          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Variants", "#variants"],
              ["With Icon", "#with-icon"],
              ["With Actions", "#with-actions"],
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