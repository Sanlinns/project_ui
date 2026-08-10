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
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ToastProvider,
  Toaster,
  useToast,
} from "@/components/ui/toast"

type PreviewTab = "preview" | "code"

const initCode = `npx binhlaig-ui@latest init`
const installCode = `npx binhlaig-ui@latest add toast`
const overwriteCode =
  `npx binhlaig-ui@latest add toast --overwrite`

const importCode = `import {
  ToastProvider,
  Toaster,
  useToast,
} from "@/components/ui/toast"`

const setupCode = `import {
  ToastProvider,
  Toaster,
} from "@/components/ui/toast"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ToastProvider>
      {children}
      <Toaster position="top-center" />
    </ToastProvider>
  )
}`

const basicCode = `import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: "Event has been created",
          description: "Monday, August 10 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  )
}`

const variantsCode = `const {
  success,
  error,
  loading,
  info,
} = useToast()

success("Changes saved successfully.")
error("Something went wrong.")
loading("Uploading files...")
info("A new update is available.")`

const positionCode = `<Toaster position="top-right" />

<Toaster position="bottom-center" />

<Toaster position="bottom-right" />`

const dismissCode = `const { loading, dismiss } = useToast()

const id = loading("Uploading...")

// Later
dismiss(id)

// Dismiss all
dismiss()`

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
        <div className="flex min-h-[220px] items-center justify-center bg-muted/20 p-8">
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

function BasicPreview() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() =>
        toast({
          title: "Event has been created",
          description:
            "Monday, August 10 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  )
}

function VariantPreview() {
  const {
    success,
    error,
    loading,
    info,
  } = useToast()

  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          success("Changes saved successfully.")
        }
      >
        Success
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          error("Something went wrong.")
        }
      >
        Error
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          loading("Uploading files...")
        }
      >
        Loading
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          info("A new update is available.")
        }
      >
        Info
      </Button>
    </div>
  )
}

function DismissPreview() {
  const { loading, dismiss } =
    useToast()
  const [id, setId] =
    React.useState<string | null>(null)

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          const nextId = loading(
            "Uploading files..."
          )
          setId(nextId)
        }}
      >
        Start loading
      </Button>

      <Button
        variant="outline"
        disabled={!id}
        onClick={() => {
          if (id) dismiss(id)
          setId(null)
        }}
      >
        Dismiss
      </Button>
    </div>
  )
}

function ToastDocsContent() {
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
              Toast
            </span>
          </div>

          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              Binhlaig UI Component
            </div>

            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Toast
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              Lightweight floating notifications inspired by
              the clean interaction style of react-hot-toast,
              adapted for Binhlaig UI.
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
                description="Initialize Binhlaig UI once, then install Toast using the saved installer."
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
                id="setup"
                title="Setup"
                description="Wrap the application with ToastProvider and render one Toaster."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm leading-6 text-slate-300">
                  <code>{setupCode}</code>
                </pre>
              </div>
            </section>

            <section>
              <SectionTitle
                id="import"
                title="Import"
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
                description="Show a lightweight toast with a title and optional description."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <BasicPreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="variants"
                title="Variants"
                description="Built-in helpers for success, error, loading and info notifications."
              />

              <div className="mt-6">
                <CodePreview code={variantsCode}>
                  <VariantPreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="position"
                title="Position"
                description="Place the toaster in any common screen corner or center position."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm leading-6 text-slate-300">
                  <code>{positionCode}</code>
                </pre>
              </div>
            </section>

            <section>
              <SectionTitle
                id="dismiss"
                title="Loading and Dismiss"
                description="Loading toasts stay visible until they are dismissed manually."
              />

              <div className="mt-6">
                <CodePreview code={dismissCode}>
                  <DismissPreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
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
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        API
                      </th>
                      <th className="px-5 py-4 font-medium">
                        Purpose
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {[
                      ["ToastProvider", "Stores and manages toast state."],
                      ["Toaster", "Renders the floating toast stack."],
                      ["useToast()", "Access toast helpers."],
                      ["toast()", "Show a default/custom toast."],
                      ["success()", "Show a success toast."],
                      ["error()", "Show an error toast."],
                      ["loading()", "Show a persistent loading toast."],
                      ["info()", "Show an informational toast."],
                      ["dismiss(id?)", "Dismiss one toast or all toasts."],
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
                href="/docs/components/pagination"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Pagination
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
              ["Setup", "#setup"],
              ["Import", "#import"],
              ["Basic", "#usage"],
              ["Variants", "#variants"],
              ["Position", "#position"],
              ["Loading and Dismiss", "#dismiss"],
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

      <Toaster position="top-center" />
    </div>
  )
}

export default function ToastDocumentationPage() {
  return (
    <ToastProvider>
      <ToastDocsContent />
    </ToastProvider>
  )
}