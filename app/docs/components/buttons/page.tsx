"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Plus,
  Search,
  Sparkles,
  Trash2,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const installCode = `npx binhlaig-ui@latest add button`;

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
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`;

const sizesCode = `import { Button } from "@/components/ui/button";

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}`;

const radiusCode = `import { Button } from "@/components/ui/button";

export function ButtonRadius() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button radius="none">None</Button>
      <Button radius="sm">Small</Button>
      <Button radius="md">Medium</Button>
      <Button radius="lg">Large</Button>
      <Button radius="full">Full</Button>
    </div>
  );
}`;

const iconsCode = `import {
  ArrowRight,
  Plus,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button leftIcon={<Plus />}>
        Add Product
      </Button>

      <Button
        variant="secondary"
        leftIcon={<UserPlus />}
      >
        Add Member
      </Button>

      <Button
        variant="outline"
        rightIcon={<ArrowRight />}
      >
        Continue
      </Button>
    </div>
  );
}`;

const iconOnlyCode = `import {
  ArrowRight,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function IconButtons() {
  return (
    <div className="flex gap-3">
      <Button size="icon" aria-label="Search">
        <Search />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        aria-label="Add"
      >
        <Plus />
      </Button>

      <Button
        size="icon"
        variant="outline"
        aria-label="Next"
      >
        <ArrowRight />
      </Button>

      <Button
        size="icon"
        variant="danger"
        aria-label="Delete"
      >
        <Trash2 />
      </Button>
    </div>
  );
}`;

const loadingCode = `import { Button } from "@/components/ui/button";

export function LoadingButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button loading loadingText="Loading...">
        Load Data
      </Button>

      <Button
        variant="secondary"
        loading
        loadingText="Saving..."
      >
        Save
      </Button>

      <Button
        variant="outline"
        loading
        loadingText="Uploading..."
      >
        Upload
      </Button>
    </div>
  );
}`;

const fullWidthCode = `import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FullWidthButton() {
  return (
    <Button
      fullWidth
      rightIcon={<ArrowRight />}
    >
      Create Account
    </Button>
  );
}`;

const disabledCode = `import { Button } from "@/components/ui/button";

export function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Default</Button>

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
  );
}`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const [activeTab, setActiveTab] =
    useState<PreviewTab>("preview");
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
            type="button"
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
            type="button"
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
          type="button"
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
  const [installCopied, setInstallCopied] = useState(false);
  const [importCopied, setImportCopied] = useState(false);

  const copyInstallCode = async () => {
    try {
      await navigator.clipboard.writeText(installCode);
      setInstallCopied(true);

      window.setTimeout(() => {
        setInstallCopied(false);
      }, 1500);
    } catch (error) {
      console.error(
        "Unable to copy installation command:",
        error,
      );
    }
  };

  const copyImportCode = async () => {
    try {
      await navigator.clipboard.writeText(importCode);
      setImportCopied(true);

      window.setTimeout(() => {
        setImportCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy import code:", error);
    }
  };

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/components"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              Components
            </Link>

            <span>/</span>

            <span className="text-slate-800 dark:text-slate-300">
              Button
            </span>
          </div>

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
                Buttons allow users to perform actions and make
                choices with a single click or tap.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  rightIcon={<ArrowRight />}
                  onClick={() => {
                    document
                      .querySelector("#usage")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  View examples
                </Button>

                <Button
                  variant="outline"
                  leftIcon={<Code2 />}
                  onClick={() => {
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
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
                description="Add the Button component to your project using the Binhlaig UI CLI."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                  <span className="text-xs text-slate-500">
                    Terminal
                  </span>

                  <button
                    type="button"
                    onClick={copyInstallCode}
                    className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    aria-label="Copy installation command"
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
            </section>

            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import the Button component from your UI components directory."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                  <span className="text-xs text-slate-500">
                    TypeScript
                  </span>

                  <button
                    type="button"
                    onClick={copyImportCode}
                    className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    aria-label="Copy import code"
                  >
                    {importCopied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Clipboard className="size-4" />
                    )}
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>

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

            <section>
              <SectionTitle
                id="variants"
                title="Variants"
                description="Use different visual styles to represent action priority and meaning."
              />

              <div className="mt-6">
                <CodePreview code={variantsCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">
                      Secondary
                    </Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="sizes"
                title="Sizes"
                description="Buttons are available in small, medium, large and extra-large sizes."
              />

              <div className="mt-6">
                <CodePreview code={sizesCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="radius"
                title="Border Radius"
                description="Control the corner radius of the button."
              />

              <div className="mt-6">
                <CodePreview code={radiusCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button radius="none">None</Button>
                    <Button radius="sm">Small</Button>
                    <Button radius="md">Medium</Button>
                    <Button radius="lg">Large</Button>
                    <Button radius="full">Full</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="with-icons"
                title="With Icons"
                description="Add icons before or after button labels to make actions easier to understand."
              />

              <div className="mt-6">
                <CodePreview code={iconsCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button leftIcon={<Plus />}>
                      Add Product
                    </Button>

                    <Button
                      variant="secondary"
                      leftIcon={<UserPlus />}
                    >
                      Add Member
                    </Button>

                    <Button
                      variant="outline"
                      rightIcon={<ArrowRight />}
                    >
                      Continue
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="icon-only"
                title="Icon Only"
                description="Icon-only buttons are useful for compact toolbars and repeated actions."
              />

              <div className="mt-6">
                <CodePreview code={iconOnlyCode}>
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      size="icon"
                      aria-label="Search"
                    >
                      <Search />
                    </Button>

                    <Button
                      size="icon"
                      variant="secondary"
                      aria-label="Add"
                    >
                      <Plus />
                    </Button>

                    <Button
                      size="icon"
                      variant="outline"
                      aria-label="Next"
                    >
                      <ArrowRight />
                    </Button>

                    <Button
                      size="icon"
                      variant="danger"
                      aria-label="Delete"
                    >
                      <Trash2 />
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="loading"
                title="Loading State"
                description="Display a spinner and disable the button while an action is processing."
              />

              <div className="mt-6">
                <CodePreview code={loadingCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                      loading
                      loadingText="Loading..."
                    >
                      Load Data
                    </Button>

                    <Button
                      variant="secondary"
                      loading
                      loadingText="Saving..."
                    >
                      Save
                    </Button>

                    <Button
                      variant="outline"
                      loading
                      loadingText="Uploading..."
                    >
                      Upload
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

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
                    <Button
                      fullWidth
                      rightIcon={<ArrowRight />}
                    >
                      Create Account
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="disabled"
                title="Disabled State"
                description="Disabled buttons prevent interaction and appear with reduced opacity."
              />

              <div className="mt-6">
                <CodePreview code={disabledCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button disabled>Default</Button>

                    <Button
                      variant="secondary"
                      disabled
                    >
                      Secondary
                    </Button>

                    <Button
                      variant="outline"
                      disabled
                    >
                      Outline
                    </Button>

                    <Button
                      variant="danger"
                      disabled
                    >
                      Danger
                    </Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="Properties available on the Binhlaig UI Button component."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">
                          Prop
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Type
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Default
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="variant"
                        type={`"default" | "secondary" | "outline" | "ghost" | "danger" | "destructive" | "success" | "warning" | "link"`}
                        defaultValue={`"default"`}
                        description="Controls the visual style of the button."
                      />

                      <ApiRow
                        name="size"
                        type={`"sm" | "md" | "default" | "lg" | "xl" | "icon" | "iconSm" | "iconLg"`}
                        defaultValue={`"md"`}
                        description="Controls the height, padding and font size."
                      />

                      <ApiRow
                        name="radius"
                        type={`"none" | "sm" | "md" | "lg" | "full"`}
                        defaultValue={`"lg"`}
                        description="Controls the corner radius."
                      />

                      <ApiRow
                        name="fullWidth"
                        type="boolean"
                        defaultValue="false"
                        description="Makes the button fill its parent width."
                      />

                      <ApiRow
                        name="loading"
                        type="boolean"
                        defaultValue="false"
                        description="Displays a spinner and disables the button."
                      />

                      <ApiRow
                        name="loadingText"
                        type="string"
                        defaultValue="—"
                        description="Text displayed while loading."
                      />

                      <ApiRow
                        name="leftIcon"
                        type="React.ReactNode"
                        defaultValue="—"
                        description="Displays an icon before the button label."
                      />

                      <ApiRow
                        name="rightIcon"
                        type="React.ReactNode"
                        defaultValue="—"
                        description="Displays an icon after the button label."
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

            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/components/breadcrumb"
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
                href="/components/button-group"
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

      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
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
              ["Border Radius", "#radius"],
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

      <td className="max-w-[300px] px-5 py-4 align-top">
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