"use client"

import * as React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  Loader2,
  Mail,
  Save,
  Sparkles,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"

const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add form`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add form`
const overwriteCode =
  `npx binhlaig-ui@latest add form --overwrite`

const importCode = `import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
} from "@/components/ui/form"`

const basicCode = `import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormField,
  FormLabel,
} from "@/components/ui/form"

export function BasicForm() {
  return (
    <Form>
      <FormField>
        <FormLabel htmlFor="name">Name</FormLabel>

        <FormControl>
          <input
            id="name"
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm"
            placeholder="Enter your name"
          />
        </FormControl>
      </FormField>

      <FormActions>
        <Button type="submit">Submit</Button>
      </FormActions>
    </Form>
  )
}`

const validationCode = `"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export function ValidationForm() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)

  const invalid =
    submitted && !email.includes("@")

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>

        <FormControl>
          <input
            id="email"
            type="email"
            value={email}
            aria-invalid={invalid}
            onChange={(event) => setEmail(event.target.value)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm aria-invalid:border-destructive"
            placeholder="you@example.com"
          />
        </FormControl>

        <FormDescription>
          We will never share your email.
        </FormDescription>

        {invalid && (
          <FormMessage>
            Enter a valid email address.
          </FormMessage>
        )}
      </FormField>

      <FormActions>
        <Button type="submit">Continue</Button>
      </FormActions>
    </Form>
  )
}`

const sectionCode = `import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormField,
  FormLabel,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

export function ProfileForm() {
  return (
    <Form>
      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>
            Profile information
          </FormSectionTitle>

          <FormSectionDescription>
            Update your public profile details.
          </FormSectionDescription>
        </FormSectionHeader>

        <FormField>
          <FormLabel htmlFor="display-name">
            Display name
          </FormLabel>

          <FormControl>
            <input
              id="display-name"
              className="h-10 w-full rounded-xl border bg-background px-3 text-sm"
            />
          </FormControl>
        </FormField>

        <FormField>
          <FormLabel htmlFor="bio">Bio</FormLabel>

          <FormControl>
            <Textarea id="bio" />
          </FormControl>
        </FormField>
      </FormSection>

      <FormActions>
        <Button type="submit">Save changes</Button>
      </FormActions>
    </Form>
  )
}`

const settingsCode = `import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
} from "@/components/ui/form"

export function SettingsForm() {
  return (
    <Form>
      <FormField className="grid-cols-[auto_1fr] items-start gap-x-3">
        <FormControl>
          <input
            id="notifications"
            type="checkbox"
            className="mt-1 size-4"
          />
        </FormControl>

        <div className="grid gap-1">
          <FormLabel htmlFor="notifications">
            Email notifications
          </FormLabel>

          <FormDescription>
            Receive updates about your account.
          </FormDescription>
        </div>
      </FormField>

      <FormField>
        <FormLabel htmlFor="role">Role</FormLabel>

        <FormControl>
          <select
            id="role"
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm"
          >
            <option>Developer</option>
            <option>Designer</option>
            <option>Manager</option>
          </select>
        </FormControl>
      </FormField>

      <FormActions>
        <Button type="submit">Save settings</Button>
      </FormActions>
    </Form>
  )
}`

const reactHookFormInstallCode = `npm install react-hook-form`

const reactHookFormCode = `"use client"

import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ReactHookFormExample() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
    reset,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (
    values: ContactFormValues
  ) => {
    await new Promise((resolve) =>
      window.setTimeout(resolve, 700)
    )

    console.log(values)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel htmlFor="name">
          Name
        </FormLabel>

        <FormControl>
          <input
            id="name"
            aria-invalid={Boolean(errors.name)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder="Your name"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message:
                  "Name must be at least 2 characters.",
              },
            })}
          />
        </FormControl>

        {errors.name && (
          <FormMessage>
            {errors.name.message}
          </FormMessage>
        )}
      </FormField>

      <FormField>
        <FormLabel htmlFor="email">
          Email
        </FormLabel>

        <FormControl>
          <input
            id="email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Enter a valid email address.",
              },
            })}
          />
        </FormControl>

        <FormDescription>
          We will only use this email to reply.
        </FormDescription>

        {errors.email && (
          <FormMessage>
            {errors.email.message}
          </FormMessage>
        )}
      </FormField>

      <FormField>
        <FormLabel htmlFor="message">
          Message
        </FormLabel>

        <FormControl>
          <Textarea
            id="message"
            aria-invalid={Boolean(errors.message)}
            placeholder="How can we help?"
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message:
                  "Message must be at least 10 characters.",
              },
            })}
          />
        </FormControl>

        {errors.message && (
          <FormMessage>
            {errors.message.message}
          </FormMessage>
        )}
      </FormField>

      {isSubmitSuccessful && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Message submitted successfully.
        </p>
      )}

      <FormActions>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Submitting..."
            : "Submit message"}
        </Button>
      </FormActions>
    </Form>
  )
}`

const loadingCode = `"use client"

import * as React from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormField,
  FormLabel,
} from "@/components/ui/form"

export function LoadingForm() {
  const [loading, setLoading] = React.useState(false)

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        setLoading(true)
        window.setTimeout(() => setLoading(false), 1200)
      }}
    >
      <FormField>
        <FormLabel htmlFor="project-name">
          Project name
        </FormLabel>

        <FormControl>
          <input
            id="project-name"
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm"
            placeholder="Binhlaig UI"
          />
        </FormControl>
      </FormField>

      <FormActions>
        <Button type="submit" disabled={loading}>
          {loading && (
            <Loader2 className="size-4 animate-spin" />
          )}
          {loading ? "Saving..." : "Save project"}
        </Button>
      </FormActions>
    </Form>
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
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
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
        <div className="flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-6 sm:p-10">
          <div className="w-full max-w-xl">{children}</div>
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

function ReactHookFormPreview() {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
    reset,
  } = useForm<{
    name: string
    email: string
    message: string
  }>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  const onSubmit = async (values: {
    name: string
    email: string
    message: string
  }) => {
    await new Promise((resolve) =>
      window.setTimeout(resolve, 700)
    )

    console.log(values)
    reset()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel htmlFor="rhf-name">
          Name
        </FormLabel>

        <FormControl>
          <input
            id="rhf-name"
            aria-invalid={Boolean(errors.name)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder="Your name"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message:
                  "Name must be at least 2 characters.",
              },
            })}
          />
        </FormControl>

        {errors.name && (
          <FormMessage>
            {errors.name.message}
          </FormMessage>
        )}
      </FormField>

      <FormField>
        <FormLabel htmlFor="rhf-email">
          Email
        </FormLabel>

        <FormControl>
          <input
            id="rhf-email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Enter a valid email address.",
              },
            })}
          />
        </FormControl>

        <FormDescription>
          We will only use this email to reply.
        </FormDescription>

        {errors.email && (
          <FormMessage>
            {errors.email.message}
          </FormMessage>
        )}
      </FormField>

      <FormField>
        <FormLabel htmlFor="rhf-message">
          Message
        </FormLabel>

        <FormControl>
          <Textarea
            id="rhf-message"
            aria-invalid={Boolean(errors.message)}
            placeholder="How can we help?"
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message:
                  "Message must be at least 10 characters.",
              },
            })}
          />
        </FormControl>

        {errors.message && (
          <FormMessage>
            {errors.message.message}
          </FormMessage>
        )}
      </FormField>

      {isSubmitSuccessful && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          Message submitted successfully.
        </p>
      )}

      <FormActions>
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <Loader2 className="size-4 animate-spin" />
          )}
          {isSubmitting
            ? "Submitting..."
            : "Submit message"}
        </Button>
      </FormActions>
    </Form>
  )
}

export default function FormDocumentationPage() {
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode

  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCode)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  const emailInvalid =
    submitted && !email.includes("@")

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">
              Components
            </Link>
            <span>/</span>
            <span className="text-foreground">Form</span>
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
                Form
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Accessible layout primitives for labels, controls,
                helper text, validation messages, sections and actions.
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
                description="Initialize Binhlaig UI and install Form using your preferred installer."
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
                description="Import the Form layout primitives from your UI directory."
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
                description="Build a basic form using field, label, control and action primitives."
              />
              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Form
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-name">
                        Name
                      </FormLabel>

                      <FormControl>
                        <input
                          id="docs-name"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                    </FormField>

                    <FormActions>
                      <Button type="submit">Submit</Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="validation"
                title="Validation"
                description="Use FormDescription and FormMessage to communicate field state."
              />
              <div className="mt-6">
                <CodePreview code={validationCode}>
                  <Form
                    onSubmit={(event) => {
                      event.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-email">
                        Email
                      </FormLabel>

                      <FormControl>
                        <input
                          id="docs-email"
                          type="email"
                          value={email}
                          aria-invalid={emailInvalid}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
                          placeholder="you@example.com"
                        />
                      </FormControl>

                      <FormDescription>
                        We will never share your email.
                      </FormDescription>

                      {emailInvalid && (
                        <FormMessage>
                          Enter a valid email address.
                        </FormMessage>
                      )}
                    </FormField>

                    <FormActions>
                      <Button type="submit">
                        <Mail className="size-4" />
                        Continue
                      </Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="sections"
                title="Form Sections"
                description="Group related fields in a bordered section."
              />
              <div className="mt-6">
                <CodePreview code={sectionCode}>
                  <Form onSubmit={(event) => event.preventDefault()}>
                    <FormSection>
                      <FormSectionHeader>
                        <FormSectionTitle>
                          Profile information
                        </FormSectionTitle>

                        <FormSectionDescription>
                          Update your public profile details.
                        </FormSectionDescription>
                      </FormSectionHeader>

                      <FormField>
                        <FormLabel htmlFor="docs-display-name">
                          Display name
                        </FormLabel>

                        <FormControl>
                          <input
                            id="docs-display-name"
                            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                            defaultValue="Binhlaig"
                          />
                        </FormControl>
                      </FormField>

                      <FormField>
                        <FormLabel htmlFor="docs-bio">
                          Bio
                        </FormLabel>

                        <FormControl>
                          <Textarea
                            id="docs-bio"
                            placeholder="Tell us about yourself..."
                          />
                        </FormControl>
                      </FormField>
                    </FormSection>

                    <FormActions>
                      <Button type="submit">
                        <Save className="size-4" />
                        Save changes
                      </Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="settings"
                title="Checkbox and Select"
                description="Form primitives work with native controls and custom UI components."
              />
              <div className="mt-6">
                <CodePreview code={settingsCode}>
                  <Form onSubmit={(event) => event.preventDefault()}>
                    <FormField className="grid-cols-[auto_1fr] items-start gap-x-3">
                      <FormControl>
                        <input
                          id="docs-notifications"
                          type="checkbox"
                          className="mt-1 size-4"
                          defaultChecked
                        />
                      </FormControl>

                      <div className="grid gap-1">
                        <FormLabel htmlFor="docs-notifications">
                          Email notifications
                        </FormLabel>

                        <FormDescription>
                          Receive updates about your account.
                        </FormDescription>
                      </div>
                    </FormField>

                    <FormField>
                      <FormLabel htmlFor="docs-role">
                        Role
                      </FormLabel>

                      <FormControl>
                        <select
                          id="docs-role"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                        >
                          <option>Developer</option>
                          <option>Designer</option>
                          <option>Manager</option>
                        </select>
                      </FormControl>
                    </FormField>

                    <FormActions>
                      <Button type="submit">
                        Save settings
                      </Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="react-hook-form"
                title="React Hook Form"
                description="Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state."
              />

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">
                  Install React Hook Form
                </p>

                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{reactHookFormInstallCode}</code>
                </pre>
              </div>

              <div className="mt-6">
                <CodePreview code={reactHookFormCode}>
                  <ReactHookFormPreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="loading"
                title="Submit State"
                description="Disable the submit action and show progress while saving."
              />
              <div className="mt-6">
                <CodePreview code={loadingCode}>
                  <Form
                    onSubmit={(event) => {
                      event.preventDefault()
                      setLoading(true)
                      window.setTimeout(() => setLoading(false), 1200)
                    }}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-project-name">
                        Project name
                      </FormLabel>

                      <FormControl>
                        <input
                          id="docs-project-name"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="Binhlaig UI"
                        />
                      </FormControl>
                    </FormField>

                    <FormActions>
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <CheckCircle2 className="size-4" />
                        )}
                        {loading ? "Saving..." : "Save project"}
                      </Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="overwrite"
                title="Update or Overwrite"
                description="Replace an older Form source with the latest registry version."
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
                description="Components included in the Binhlaig UI Form layout."
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
                      ["Form", "Root form layout."],
                      ["FormField", "Groups a single field."],
                      ["FormLabel", "Accessible field label."],
                      ["FormControl", "Wraps an input control."],
                      ["FormDescription", "Displays helper text."],
                      ["FormMessage", "Displays validation feedback."],
                      ["FormSection", "Groups related fields."],
                      ["FormSectionHeader", "Groups section heading text."],
                      ["FormSectionTitle", "Section heading."],
                      ["FormSectionDescription", "Section supporting text."],
                      ["FormActions", "Aligns submit and cancel actions."],
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
                href="/docs/components/popover"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  Previous component
                </div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Popover
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
              ["Validation", "#validation"],
              ["Form Sections", "#sections"],
              ["Checkbox and Select", "#settings"],
              ["React Hook Form", "#react-hook-form"],
              ["Submit State", "#loading"],
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