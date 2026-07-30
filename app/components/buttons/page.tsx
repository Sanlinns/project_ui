"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clipboard,
  Code2,
  ExternalLink,
  LoaderCircle,
  Menu,
  Moon,
  Plus,
  Search,
  Sparkles,
  Sun,
  Trash2,
  UserPlus,
  X,
} from "lucide-react";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const sidebarItems = [
  "Accordion",
  "Alert",
  "Avatar",
  "Badge",
  "Breadcrumb",
  "Button",
  "Card",
  "Checkbox",
  "Dialog",
  "Dropdown",
  "Input",
  "Modal",
  "Pagination",
  "Popover",
  "Select",
  "Skeleton",
  "Switch",
  "Table",
  "Tabs",
  "Tooltip",
];

const importCode = `import { Button } from "@/components/ui/button";`;

const basicCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <Button>
      Get Started
    </Button>
  );
}`;

const variantsCode = `import { Button } from "@/components/ui/button";

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}`;

const sizesCode = `import { Button } from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`;

const iconsCode = `import { Plus, UserPlus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <Plus className="size-4" />
        Add Product
      </Button>

      <Button variant="secondary">
        <UserPlus className="size-4" />
        Add Member
      </Button>

      <Button variant="outline">
        Continue
        <ArrowRight className="size-4" />
      </Button>
    </div>
  );
}`;

const iconOnlyCode = `import { Search, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IconButtons() {
  return (
    <div className="flex gap-3">
      <Button size="icon" aria-label="Search">
        <Search className="size-4" />
      </Button>

      <Button size="icon" variant="secondary" aria-label="Add">
        <Plus className="size-4" />
      </Button>

      <Button size="icon" variant="danger" aria-label="Delete">
        <Trash2 className="size-4" />
      </Button>
    </div>
  );
}`;

const loadingCode = `import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadingButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>
        <LoaderCircle className="size-4 animate-spin" />
        Loading...
      </Button>

      <Button variant="secondary" disabled>
        <LoaderCircle className="size-4 animate-spin" />
        Saving...
      </Button>
    </div>
  );
}`;

const fullWidthCode = `import { Button } from "@/components/ui/button";

export function FullWidthButton() {
  return (
    <Button className="w-full">
      Create Account
    </Button>
  );
}`;

const disabledCode = `import { Button } from "@/components/ui/button";

export function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Primary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="outline" disabled>
        Outline
      </Button>
    </div>
  );
}`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
};

function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white shadow-sm shadow-blue-600/20 hover:bg-blue-500 active:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400",
    secondary:
      "bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100 active:bg-slate-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900",
    ghost:
      "bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-900",
    danger:
      "bg-red-600 text-white shadow-sm shadow-red-600/20 hover:bg-red-500 active:bg-red-700",
  };

  const sizes = {
    sm: "h-8 rounded-lg px-3 text-xs",
    md: "h-10 rounded-xl px-4 text-sm",
    lg: "h-12 rounded-xl px-6 text-base",
    icon: "size-10 rounded-xl",
  };

  return (
    <button
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-all duration-200",
        "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "active:scale-[0.97]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function CodePreview({ children, code, className }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<PreviewTab>("preview");
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 dark:border-slate-800">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "relative px-3 py-3 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
            )}
          >
            Preview

            {activeTab === "preview" && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("code")}
            className={cn(
              "relative px-3 py-3 text-sm font-medium transition-colors",
              activeTab === "code"
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
            )}
          >
            Code

            {activeTab === "code" && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
        </div>

        <button
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>

      {activeTab === "preview" ? (
        <div
          className={cn(
            "flex min-h-[220px] items-center justify-center p-6 sm:p-10",
            "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <div className="relative overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}

function SectionTitle({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="scroll-mt-28" id={id}>
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function ButtonDocumentationPage() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [importCopied, setImportCopied] = useState(false);

  const copyImportCode = async () => {
    try {
      await navigator.clipboard.writeText(importCode);
      setImportCopied(true);

      window.setTimeout(() => {
        setImportCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy import:", error);
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-slate-950 dark:bg-[#080b12] dark:text-white">
        {/* Navbar */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-[#080b12]/80">
          <div className="mx-auto flex h-16 max-w-[1600px] items-center gap-4 px-4 lg:px-6">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="inline-flex size-10 items-center justify-center rounded-xl border border-slate-200 lg:hidden dark:border-slate-800"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </button>

            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                B
              </div>

              <div>
                <div className="text-sm font-bold tracking-tight">
                  Binhlaig UI
                </div>
                <div className="text-[10px] text-slate-500">
                  React components
                </div>
              </div>
            </Link>

            <nav className="ml-6 hidden items-center gap-1 lg:flex">
              <Link
                href="#"
                className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                Docs
              </Link>

              <Link
                href="#"
                className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-950 dark:bg-slate-900 dark:text-white"
              >
                Components
              </Link>

              <Link
                href="#"
                className="rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
              >
                Templates
              </Link>
            </nav>

            <button className="mx-auto hidden h-10 w-full max-w-md items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 text-left text-sm text-slate-500 transition hover:border-slate-300 md:flex dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700">
              <Search className="size-4" />
              <span className="flex-1">Search documentation...</span>
              <kbd className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] dark:border-slate-700 dark:bg-slate-950">
                ⌘ K
              </kbd>
            </button>

            <div className="ml-auto flex items-center gap-1">
              {/* <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                aria-label="GitHub"
              >
                <Github className="size-[18px]" />
              </a> */}

              <button
                onClick={() => setDarkMode((current) => !current)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="size-[18px]" />
                ) : (
                  <Moon className="size-[18px]" />
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Sidebar */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-[70] lg:hidden">
            <button
              className="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close navigation overlay"
            />

            <aside className="absolute inset-y-0 left-0 w-[290px] overflow-y-auto bg-white p-4 shadow-2xl dark:bg-slate-950">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                    B
                  </div>
                  <span className="font-bold">Binhlaig UI</span>
                </div>

                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="inline-flex size-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
                  aria-label="Close navigation"
                >
                  <X className="size-5" />
                </button>
              </div>

              <SidebarContent
                onItemClick={() => setMobileSidebarOpen(false)}
              />
            </aside>
          </div>
        )}

        <div className="mx-auto flex max-w-[1600px] pt-16">
          {/* Desktop Sidebar */}
          <aside className="fixed bottom-0 top-16 hidden w-64 overflow-y-auto border-r border-slate-200 bg-white px-4 py-7 lg:block dark:border-slate-800 dark:bg-[#080b12]">
            <SidebarContent />
          </aside>

          {/* Main Content */}
          <main className="min-w-0 flex-1 px-5 py-10 lg:ml-64 lg:px-10 xl:mr-64 xl:px-14">
            <article className="mx-auto max-w-4xl">
              {/* Breadcrumb */}
              <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
                <Link
                  href="#"
                  className="transition hover:text-slate-950 dark:hover:text-white"
                >
                  Components
                </Link>
                <span>/</span>
                <span className="text-slate-800 dark:text-slate-300">
                  Button
                </span>
              </div>

              {/* Hero */}
              <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
                <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                    <Sparkles className="size-3.5" />
                    Binhlaig UI Component
                  </div>

                  <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">
                    Button
                  </h1>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                    Buttons allow users to perform actions and make choices with
                    a single click or tap.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href="#usage"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-medium text-white transition hover:bg-blue-500"
                    >
                      View examples
                      <ArrowRight className="size-4" />
                    </a>

                    <a
                      href="#api-reference"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      API reference
                      <Code2 className="size-4" />
                    </a>
                  </div>
                </div>
              </section>

              <div className="space-y-16">
                {/* Installation */}
                <section>
                  <SectionTitle
                    id="installation"
                    title="Installation"
                    description="Add the Button component to your project using the Binhlaig UI CLI."
                  />

                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                    <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                      <span className="text-xs text-slate-500">Terminal</span>

                      <button
                        onClick={copyImportCode}
                        className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
                        aria-label="Copy installation command"
                      >
                        {importCopied ? (
                          <Check className="size-4 text-emerald-400" />
                        ) : (
                          <Clipboard className="size-4" />
                        )}
                      </button>
                    </div>

                    <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
                      <code>npx binhlaig-ui@latest add button</code>
                    </pre>
                  </div>
                </section>

                {/* Import */}
                <section>
                  <SectionTitle
                    id="import"
                    title="Import"
                    description="Import the Button component from your UI components directory."
                  />

                  <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <pre className="font-mono text-sm text-slate-300">
                      <code>{importCode}</code>
                    </pre>
                  </div>
                </section>

                {/* Usage */}
                <section>
                  <SectionTitle
                    id="usage"
                    title="Usage"
                    description="Use the default button for primary actions in your application."
                  />

                  <div className="mt-6">
                    <CodePreview code={basicCode}>
                      <Button>Get Started</Button>
                    </CodePreview>
                  </div>
                </section>

                {/* Variants */}
                <section>
                  <SectionTitle
                    id="variants"
                    title="Variants"
                    description="Use different visual styles to represent action priority and meaning."
                  />

                  <div className="mt-6">
                    <CodePreview code={variantsCode}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="danger">Danger</Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* Sizes */}
                <section>
                  <SectionTitle
                    id="sizes"
                    title="Sizes"
                    description="Buttons are available in small, medium and large sizes."
                  />

                  <div className="mt-6">
                    <CodePreview code={sizesCode}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* With Icons */}
                <section>
                  <SectionTitle
                    id="with-icons"
                    title="With Icons"
                    description="Add icons before or after button labels to make actions easier to understand."
                  />

                  <div className="mt-6">
                    <CodePreview code={iconsCode}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button>
                          <Plus className="size-4" />
                          Add Product
                        </Button>

                        <Button variant="secondary">
                          <UserPlus className="size-4" />
                          Add Member
                        </Button>

                        <Button variant="outline">
                          Continue
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* Icon Only */}
                <section>
                  <SectionTitle
                    id="icon-only"
                    title="Icon Only"
                    description="Icon-only buttons are useful for compact toolbars and repeated actions."
                  />

                  <div className="mt-6">
                    <CodePreview code={iconOnlyCode}>
                      <div className="flex items-center justify-center gap-3">
                        <Button size="icon" aria-label="Search">
                          <Search className="size-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="secondary"
                          aria-label="Add"
                        >
                          <Plus className="size-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          aria-label="Next"
                        >
                          <ArrowRight className="size-4" />
                        </Button>

                        <Button
                          size="icon"
                          variant="danger"
                          aria-label="Delete"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* Loading */}
                <section>
                  <SectionTitle
                    id="loading"
                    title="Loading State"
                    description="Disable the button and show a spinner while an action is processing."
                  />

                  <div className="mt-6">
                    <CodePreview code={loadingCode}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button disabled>
                          <LoaderCircle className="size-4 animate-spin" />
                          Loading...
                        </Button>

                        <Button variant="secondary" disabled>
                          <LoaderCircle className="size-4 animate-spin" />
                          Saving...
                        </Button>

                        <Button variant="outline" disabled>
                          <LoaderCircle className="size-4 animate-spin" />
                          Uploading...
                        </Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* Full Width */}
                <section>
                  <SectionTitle
                    id="full-width"
                    title="Full Width"
                    description="Set the button width to fill its parent container."
                  />

                  <div className="mt-6">
                    <CodePreview
                      code={fullWidthCode}
                      className="justify-stretch"
                    >
                      <div className="mx-auto w-full max-w-xl">
                        <Button className="w-full">
                          Create Account
                          <ArrowRight className="size-4" />
                        </Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* Disabled */}
                <section>
                  <SectionTitle
                    id="disabled"
                    title="Disabled State"
                    description="Disabled buttons prevent interaction and appear with reduced opacity."
                  />

                  <div className="mt-6">
                    <CodePreview code={disabledCode}>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <Button disabled>Primary</Button>
                        <Button variant="secondary" disabled>
                          Secondary
                        </Button>
                        <Button variant="outline" disabled>
                          Outline
                        </Button>
                        <Button variant="danger" disabled>
                          Danger
                        </Button>
                      </div>
                    </CodePreview>
                  </div>
                </section>

                {/* API Reference */}
                <section>
                  <SectionTitle
                    id="api-reference"
                    title="API Reference"
                    description="Properties available on the Binhlaig UI Button component."
                  />

                  <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[700px] text-left text-sm">
                        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                          <tr>
                            <th className="px-5 py-4 font-medium">Prop</th>
                            <th className="px-5 py-4 font-medium">Type</th>
                            <th className="px-5 py-4 font-medium">Default</th>
                            <th className="px-5 py-4 font-medium">
                              Description
                            </th>
                          </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                          <ApiRow
                            name="variant"
                            type={`"primary" | "secondary" | "outline" | "ghost" | "danger"`}
                            defaultValue={`"primary"`}
                            description="Controls the visual style of the button."
                          />

                          <ApiRow
                            name="size"
                            type={`"sm" | "md" | "lg" | "icon"`}
                            defaultValue={`"md"`}
                            description="Controls the height and padding."
                          />

                          <ApiRow
                            name="disabled"
                            type="boolean"
                            defaultValue="false"
                            description="Prevents users from interacting with the button."
                          />

                          <ApiRow
                            name="className"
                            type="string"
                            defaultValue="—"
                            description="Adds custom Tailwind CSS classes."
                          />

                          <ApiRow
                            name="children"
                            type="React.ReactNode"
                            defaultValue="—"
                            description="Content rendered inside the button."
                          />
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                {/* Bottom Navigation */}
                <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
                  <Link
                    href="#"
                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
                  >
                    <div className="text-xs text-slate-500">
                      Previous component
                    </div>

                    <div className="mt-2 flex items-center gap-2 font-semibold">
                      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                      Breadcrumb
                    </div>
                  </Link>

                  <Link
                    href="#"
                    className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
                  >
                    <div className="text-xs text-slate-500">
                      Next component
                    </div>

                    <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                      Button Group
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </article>
          </main>

          {/* Right Table of Contents */}
          <aside className="fixed bottom-0 right-0 top-16 hidden w-64 overflow-y-auto px-7 py-10 xl:block">
            <div className="border-l border-slate-200 pl-5 dark:border-slate-800">
              <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">
                On this page
              </p>

              <nav className="space-y-1">
                {[
                  ["Installation", "#installation"],
                  ["Import", "#import"],
                  ["Usage", "#usage"],
                  ["Variants", "#variants"],
                  ["Sizes", "#sizes"],
                  ["With Icons", "#with-icons"],
                  ["Icon Only", "#icon-only"],
                  ["Loading State", "#loading"],
                  ["Full Width", "#full-width"],
                  ["Disabled State", "#disabled"],
                  ["API Reference", "#api-reference"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="block rounded-md py-1.5 text-[13px] text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 transition hover:text-slate-950 dark:border-slate-800 dark:hover:text-white"
              >
                Edit this page
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function SidebarContent({
  onItemClick,
}: {
  onItemClick?: () => void;
}) {
  return (
    <nav>
      <div className="mb-7">
        <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
          Getting started
        </p>

        <Link
          href="#"
          onClick={onItemClick}
          className="flex items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
        >
          Introduction
        </Link>

        <Link
          href="#"
          onClick={onItemClick}
          className="flex items-center rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
        >
          Installation
        </Link>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between px-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
            Components
          </p>

          <ChevronDown className="size-3.5 text-slate-400" />
        </div>

        <div className="space-y-0.5">
          {sidebarItems.map((item) => {
            const active = item === "Button";

            return (
              <Link
                key={item}
                href={active ? "#usage" : "#"}
                onClick={onItemClick}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-sm transition",
                  active
                    ? "bg-blue-50 font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white",
                )}
              >
                {item}

                {active && (
                  <span className="ml-auto size-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function ApiRow({
  name,
  type,
  defaultValue,
  description,
}: {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}) {
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>

      <td className="max-w-[250px] px-5 py-4 align-top">
        <code className="text-xs leading-5 text-purple-600 dark:text-purple-400">
          {type}
        </code>
      </td>

      <td className="px-5 py-4 align-top">
        <code className="text-xs text-slate-600 dark:text-slate-400">
          {defaultValue}
        </code>
      </td>

      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </td>
    </tr>
  );
}