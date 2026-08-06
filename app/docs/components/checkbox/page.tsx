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
import { Checkbox } from "@/components/ui/checkbox"

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"

const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add checkbox --installer native`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add checkbox --installer shadcn`
const overwriteCode =
  `npx binhlaig-ui@latest add checkbox --installer native --overwrite`

const importCode =
  `import { Checkbox } from "@/components/ui/checkbox"`

const basicCode = `import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <label className="flex items-center gap-3">
      <Checkbox defaultChecked />
      Accept terms and conditions
    </label>
  )
}`

const controlledCode = `"use client"

import * as React from "react"

import { Checkbox } from "@/components/ui/checkbox"

export function ControlledCheckbox() {
  const [checked, setChecked] =
    React.useState(false)

  return (
    <label className="flex items-center gap-3">
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
      />
      Enable notifications
    </label>
  )
}`

const indeterminateCode = `import { Checkbox } from "@/components/ui/checkbox"

export function IndeterminateCheckbox() {
  return (
    <label className="flex items-center gap-3">
      <Checkbox checked="indeterminate" />
      Select some items
    </label>
  )
}`

const formCode = `import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxForm() {
  return (
    <form className="grid gap-4">
      <label className="flex items-start gap-3">
        <Checkbox
          name="terms"
          required
        />

        <span className="grid gap-1">
          <span className="text-sm font-medium">
            Accept terms
          </span>

          <span className="text-sm text-muted-foreground">
            You must accept before continuing.
          </span>
        </span>
      </label>

      <Button type="submit">
        Continue
      </Button>
    </form>
  )
}`

function cn(...classes: Array<string | false | null | undefined>) {
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
        <div className="flex min-h-[240px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
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

export default function CheckboxDocumentationPage() {
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [checked, setChecked] = React.useState(false)

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
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >
              Components
            </Link>

            <span>/</span>
            <span className="text-foreground">
              Checkbox
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
                Checkbox
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A compact control for selecting one or more options,
                with checked, unchecked and indeterminate states.
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
                description="Initialize Binhlaig UI and install Checkbox with your preferred installer."
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
                      {item === "native"
                        ? "Native Beta"
                        : "Shadcn Stable"}
                    </button>
                  ))}
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
                description="Import Checkbox from your UI directory."
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
                description="Wrap Checkbox and its text in a label for accessible naming."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <label className="flex items-center gap-3 text-sm font-medium">
                    <Checkbox defaultChecked />
                    Accept terms and conditions
                  </label>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="states"
                title="States"
                description="Checkbox supports checked, unchecked, indeterminate and disabled states."
              />

              <div className="mt-6">
                <CodePreview code={indeterminateCode}>
                  <div className="grid gap-4">
                    <label className="flex items-center gap-3 text-sm">
                      <Checkbox />
                      Unchecked
                    </label>

                    <label className="flex items-center gap-3 text-sm">
                      <Checkbox defaultChecked />
                      Checked
                    </label>

                    <label className="flex items-center gap-3 text-sm">
                      <Checkbox checked={false} />
                      Indeterminate
                    </label>

                    <label className="flex items-center gap-3 text-sm opacity-70">
                      <Checkbox disabled />
                      Disabled
                    </label>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="controlled"
                title="Controlled State"
                description="Control the checked state with React."
              />

              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <div className="grid gap-3">
                    <label className="flex items-center gap-3 text-sm font-medium">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={setChecked}
                      />
                      Enable notifications
                    </label>

                    <p className="text-sm text-muted-foreground">
                      State: {checked ? "checked" : "unchecked"}
                    </p>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="form"
                title="Form Example"
                description="Use name and required for native form submission."
              />

              <div className="mt-6">
                <CodePreview code={formCode}>
                  <form
                    className="grid gap-5"
                    onSubmit={(event) =>
                      event.preventDefault()
                    }
                  >
                    <label className="flex items-start gap-3">
                      <Checkbox
                        name="terms"
                        required
                      />

                      <span className="grid gap-1">
                        <span className="text-sm font-medium">
                          Accept terms
                        </span>

                        <span className="text-sm text-muted-foreground">
                          You must accept before continuing.
                        </span>
                      </span>
                    </label>

                    <Button type="submit">
                      Continue
                    </Button>
                  </form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Checkbox source with the latest registry version."
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
                description="Checkbox supports Base UI Root props and its three selection states."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
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
                    {[
                      ["checked", "boolean | indeterminate", "undefined"],
                      ["defaultChecked", "boolean", "false"],
                      ["onCheckedChange", "function", "—"],
                      ["disabled", "boolean", "false"],
                      ["required", "boolean", "false"],
                      ["name", "string", "undefined"],
                    ].map(([name, values, defaultValue]) => (
                      <tr key={name}>
                        <td className="px-5 py-4">
                          <code>{name}</code>
                        </td>

                        <td className="px-5 py-4 text-muted-foreground">
                          {values}
                        </td>

                        <td className="px-5 py-4">
                          <code>{defaultValue}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/dialog"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Dialog
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
              ["States", "#states"],
              ["Controlled State", "#controlled"],
              ["Form Example", "#form"],
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