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
  MessageSquareText,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"

const initCode = `npx binhlaig-ui@latest init`

const nativeInstallCode =
  `npx binhlaig-ui@latest add textarea`

const shadcnInstallCode =
  `npx binhlaig-ui@latest add textarea`

const overwriteCode =
  `npx binhlaig-ui@latest add textarea --overwrite`

const importCode =
  `import { Textarea } from "@/components/ui/textarea"`

const basicCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return (
    <Textarea placeholder="Write your message..." />
  )
}`

const labelCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-2">
      <label
        htmlFor="message"
        className="text-sm font-medium"
      >
        Message
      </label>

      <Textarea
        id="message"
        placeholder="Type your message here."
      />

      <p className="text-xs text-muted-foreground">
        Your message will be visible to the support team.
      </p>
    </div>
  )
}`

const sizesCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaSizes() {
  return (
    <div className="grid gap-4">
      <Textarea
        size="sm"
        placeholder="Small textarea"
      />

      <Textarea
        size="default"
        placeholder="Default textarea"
      />

      <Textarea
        size="lg"
        placeholder="Large textarea"
      />
    </div>
  )
}`

const statesCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaStates() {
  return (
    <div className="grid gap-4">
      <Textarea placeholder="Normal" />

      <Textarea
        disabled
        placeholder="Disabled"
      />

      <Textarea
        aria-invalid="true"
        defaultValue="This value is invalid."
      />
    </div>
  )
}`

const resizeCode = `import { Textarea } from "@/components/ui/textarea"

export function TextareaResize() {
  return (
    <div className="grid gap-4">
      <Textarea
        resize="none"
        placeholder="Resize disabled"
      />

      <Textarea
        resize="vertical"
        placeholder="Resize vertically"
      />

      <Textarea
        resize="both"
        placeholder="Resize both directions"
      />
    </div>
  )
}`

const countCode = `"use client"

import * as React from "react"

import { Textarea } from "@/components/ui/textarea"

export function CharacterCountTextarea() {
  const maxLength = 160
  const [value, setValue] = React.useState("")

  return (
    <div className="grid gap-2">
      <Textarea
        value={value}
        maxLength={maxLength}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Write a short description..."
      />

      <div className="text-right text-xs text-muted-foreground">
        {value.length}/{maxLength}
      </div>
    </div>
  )
}`

const formCode = `"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function FeedbackTextarea() {
  const [feedback, setFeedback] = React.useState("")

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        console.log(feedback)
      }}
    >
      <div className="grid gap-2">
        <label
          htmlFor="feedback"
          className="text-sm font-medium"
        >
          Feedback
        </label>

        <Textarea
          id="feedback"
          value={feedback}
          onChange={(event) =>
            setFeedback(event.target.value)
          }
          placeholder="Tell us what you think..."
        />
      </div>

      <Button type="submit">
        Submit feedback
      </Button>
    </form>
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
        <div className="flex items-center">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize transition-colors",
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
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
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
        <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-6 sm:p-10">
          <div className="w-full max-w-xl">
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

export default function TextareaDocumentationPage() {
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [installCopied, setInstallCopied] =
    React.useState(false)
  const [countValue, setCountValue] =
    React.useState("")
  const [feedback, setFeedback] =
    React.useState("")

  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode

  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCode)
    setInstallCopied(true)
    window.setTimeout(() => setInstallCopied(false), 1500)
  }

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="transition hover:text-foreground"
            >
              Components
            </Link>

            <span>/</span>
            <span className="text-foreground">
              Textarea
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
                Textarea
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                A styled multiline text field for messages,
                descriptions, feedback and longer form content.
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
                description="Initialize Binhlaig UI and install Textarea with your preferred installer."
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
                  <button
                    type="button"
                    onClick={() => setInstaller("native")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "native"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Native Beta
                  </button>

                  <button
                    type="button"
                    onClick={() => setInstaller("shadcn")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "shadcn"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    Shadcn Stable
                  </button>
                </div>

                <div className="bg-slate-950">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <span className="text-xs text-slate-500">
                      Terminal
                    </span>

                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
                      aria-label="Copy install command"
                    >
                      {installCopied ? (
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
                description="Import Textarea from your UI component directory."
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
                description="Use Textarea for multiline user input."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Textarea placeholder="Write your message..." />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="label"
                title="With Label"
                description="Connect the label and helper text to the textarea."
              />

              <div className="mt-6">
                <CodePreview code={labelCode}>
                  <div className="grid w-full gap-2">
                    <label
                      htmlFor="docs-message"
                      className="text-sm font-medium"
                    >
                      Message
                    </label>

                    <Textarea
                      id="docs-message"
                      placeholder="Type your message here."
                    />

                    <p className="text-xs text-muted-foreground">
                      Your message will be visible to the support team.
                    </p>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="sizes"
                title="Sizes"
                description="Textarea includes small, default and large sizes."
              />

              <div className="mt-6">
                <CodePreview code={sizesCode}>
                  <div className="grid gap-4">
                    <Textarea
                      size="sm"
                      placeholder="Small textarea"
                    />

                    <Textarea
                      size="default"
                      placeholder="Default textarea"
                    />

                    <Textarea
                      size="lg"
                      placeholder="Large textarea"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="states"
                title="States"
                description="Use disabled and aria-invalid for form states."
              />

              <div className="mt-6">
                <CodePreview code={statesCode}>
                  <div className="grid gap-4">
                    <Textarea placeholder="Normal" />

                    <Textarea
                      disabled
                      placeholder="Disabled"
                    />

                    <div className="grid gap-2">
                      <Textarea
                        aria-invalid="true"
                        defaultValue="This value is invalid."
                      />

                      <p className="flex items-center gap-1.5 text-xs text-destructive">
                        <AlertCircle className="size-3.5" />
                        Please enter a valid message.
                      </p>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="resize"
                title="Resize"
                description="Control how the user can resize the textarea."
              />

              <div className="mt-6">
                <CodePreview code={resizeCode}>
                  <div className="grid gap-4">
                    <Textarea
                      resize="none"
                      placeholder="Resize disabled"
                    />

                    <Textarea
                      resize="vertical"
                      placeholder="Resize vertically"
                    />

                    <Textarea
                      resize="both"
                      placeholder="Resize both directions"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="character-count"
                title="Character Count"
                description="Display the current and maximum character count."
              />

              <div className="mt-6">
                <CodePreview code={countCode}>
                  <div className="grid gap-2">
                    <Textarea
                      value={countValue}
                      maxLength={160}
                      onChange={(event) =>
                        setCountValue(event.target.value)
                      }
                      placeholder="Write a short description..."
                    />

                    <div className="text-right text-xs text-muted-foreground">
                      {countValue.length}/160
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="form"
                title="Form Example"
                description="Use Textarea in a controlled feedback form."
              />

              <div className="mt-6">
                <CodePreview code={formCode}>
                  <form
                    className="grid gap-4"
                    onSubmit={(event) => {
                      event.preventDefault()
                    }}
                  >
                    <div className="grid gap-2">
                      <label
                        htmlFor="docs-feedback"
                        className="text-sm font-medium"
                      >
                        Feedback
                      </label>

                      <Textarea
                        id="docs-feedback"
                        value={feedback}
                        onChange={(event) =>
                          setFeedback(event.target.value)
                        }
                        placeholder="Tell us what you think..."
                      />
                    </div>

                    <Button type="submit">
                      <MessageSquareText className="size-4" />
                      Submit feedback
                    </Button>
                  </form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Textarea source with the latest registry version."
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
                description="Textarea supports native HTML attributes and these styling props."
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[720px] text-left text-sm">
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
                    <ApiRow
                      name="size"
                      values="sm, default, lg"
                      defaultValue="default"
                    />

                    <ApiRow
                      name="resize"
                      values="none, vertical, horizontal, both"
                      defaultValue="vertical"
                    />

                    <ApiRow
                      name="aria-invalid"
                      values="boolean"
                      defaultValue="false"
                    />

                    <ApiRow
                      name="disabled"
                      values="boolean"
                      defaultValue="false"
                    />
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/input"
                className="group rounded-2xl border border-border p-5 transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Input
                </div>
              </Link>

              <Link
                href="/docs/components"
                className="group rounded-2xl border border-border p-5 text-right transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Next
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  All components
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
              ["With Label", "#label"],
              ["Sizes", "#sizes"],
              ["States", "#states"],
              ["Resize", "#resize"],
              ["Character Count", "#character-count"],
              ["Form Example", "#form"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-muted-foreground transition hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground transition hover:text-foreground"
          >
            Edit this page
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}

function ApiRow({
  name,
  values,
  defaultValue,
}: {
  name: string
  values: string
  defaultValue: string
}) {
  return (
    <tr>
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
  )
}