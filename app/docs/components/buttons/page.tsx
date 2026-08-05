"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  Clipboard,
  Code2,
  ExternalLink,
  Package,
  Plus,
  Search,
  Sparkles,
  Terminal,
  Trash2,
  UserPlus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type PreviewTab = "preview" | "code";
type InstallerTab = "native" | "shadcn";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const nativeInstallCode =
  "npx binhlaig-ui@latest add button";

const shadcnInstallCode =
  "npx binhlaig-ui@latest add button";

const initCode = "npx --yes binhlaig-ui@latest init";

const overwriteCode =
  "npx binhlaig-ui@latest add button --overwrite";

const importCode = `import { Button } from "@/components/ui/button";`;

const basicCode = `import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return <Button>Get Started</Button>;
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

const iconsCode = `import { ArrowRight, Plus, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button leftIcon={<Plus />}>Add Product</Button>
      <Button variant="secondary" leftIcon={<UserPlus />}>
        Add Member
      </Button>
      <Button variant="outline" rightIcon={<ArrowRight />}>
        Continue
      </Button>
    </div>
  );
}`;

const iconOnlyCode = `import { ArrowRight, Plus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IconButtons() {
  return (
    <div className="flex gap-3">
      <Button size="icon" aria-label="Search"><Search /></Button>
      <Button size="icon" variant="secondary" aria-label="Add"><Plus /></Button>
      <Button size="icon" variant="outline" aria-label="Next"><ArrowRight /></Button>
      <Button size="icon" variant="danger" aria-label="Delete"><Trash2 /></Button>
    </div>
  );
}`;

const loadingCode = `import { Button } from "@/components/ui/button";

export function LoadingButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button loading loadingText="Loading...">Load Data</Button>
      <Button variant="secondary" loading loadingText="Saving...">Save</Button>
      <Button variant="outline" loading loadingText="Uploading...">Upload</Button>
    </div>
  );
}`;

const fullWidthCode = `import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FullWidthButton() {
  return (
    <Button fullWidth rightIcon={<ArrowRight />}>
      Create Account
    </Button>
  );
}`;

const disabledCode = `import { Button } from "@/components/ui/button";

export function DisabledButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="danger" disabled>Danger</Button>
    </div>
  );
}`;

const tableOfContents = [
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
  ["Overwrite", "#overwrite"],
  ["API Reference", "#api-reference"],
];

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
      aria-label={label}
    >
      {copied ? (
        <Check className="size-4 text-emerald-400" />
      ) : (
        <Clipboard className="size-4" />
      )}
    </button>
  );
}

function TerminalBlock({ code, title = "Terminal" }: { code: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Terminal className="size-3.5" />
          {title}
        </div>
        <CopyButton value={code} label={`Copy ${title}`} />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function CodePreview({ children, code, className }: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<PreviewTab>("preview");

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 dark:border-slate-800">
        <div className="flex items-center">
          {(["preview", "code"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize transition-colors",
                activeTab === tab
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
              )}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => navigator.clipboard.writeText(code)}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
          aria-label="Copy code"
        >
          <Clipboard className="size-4" />
        </button>
      </div>

      {activeTab === "preview" ? (
        <div
          className={cn(
            "flex min-h-[220px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-6 sm:p-10",
            className,
          )}
        >
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
    <div id={id} className="scroll-mt-28">
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
  const [installer, setInstaller] = useState<InstallerTab>("native");
  const installCommand = installer === "native" ? nativeInstallCode : shadcnInstallCode;

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/components" className="transition hover:text-slate-950 dark:hover:text-white">
              Components
            </Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-300">Button</span>
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
                Accessible action buttons with variants, sizes, icons, loading states and full-width support.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  rightIcon={<ArrowRight />}
                  onClick={() => document.querySelector("#usage")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View examples
                </Button>
                <Button
                  variant="outline"
                  leftIcon={<Code2 />}
                  onClick={() => document.querySelector("#api-reference")?.scrollIntoView({ behavior: "smooth" })}
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
                description="Initialize Binhlaig UI once, then install Button with Native Beta or Shadcn Stable."
              />

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 dark:border-blue-500/20 dark:bg-blue-500/10">
                <div className="flex items-start gap-3">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">
                      Initialize your project first
                    </p>
                    <p className="mt-1 text-sm leading-6 text-blue-800/80 dark:text-blue-200/70">
                      Native initialization creates <code>binhlaig.json</code>, <code>lib/utils.ts</code>, the UI directory, required CSS and dependencies.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <TerminalBlock code={initCode} />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <div className="flex border-b border-slate-200 p-2 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setInstaller("native")}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-medium transition",
                      installer === "native"
                        ? "bg-blue-600 text-white"
                        : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900",
                    )}
                  >
                    Native Beta
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstaller("shadcn")}
                    className={cn(
                      "rounded-xl px-4 py-2 text-sm font-medium transition",
                      installer === "shadcn"
                        ? "bg-blue-600 text-white"
                        : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-900",
                    )}
                  >
                    Shadcn Stable
                  </button>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-center gap-2 text-sm font-medium text-slate-950 dark:text-white">
                    <Package className="size-4 text-blue-600 dark:text-blue-400" />
                    {installer === "native" ? "Recommended native installer" : "Shadcn compatibility installer"}
                  </div>
                  <TerminalBlock code={installCommand} />
                </div>
              </div>
            </section>

            <section>
              <SectionTitle id="import" title="Import" description="Import Button from your project UI directory." />
              <div className="mt-6"><TerminalBlock code={importCode} title="TypeScript" /></div>
            </section>

            <section>
              <SectionTitle id="usage" title="Usage" description="Use the default button for a primary action." />
              <div className="mt-6"><CodePreview code={basicCode}><Button>Get Started</Button></CodePreview></div>
            </section>

            <section>
              <SectionTitle id="variants" title="Variants" description="Choose a visual style that matches action priority and meaning." />
              <div className="mt-6">
                <CodePreview code={variantsCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
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
              <SectionTitle id="sizes" title="Sizes" description="Use small, medium, large and extra-large button sizes." />
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
              <SectionTitle id="radius" title="Border Radius" description="Control the corner radius independently from size." />
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
              <SectionTitle id="with-icons" title="With Icons" description="Place an icon before or after the label." />
              <div className="mt-6">
                <CodePreview code={iconsCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button leftIcon={<Plus />}>Add Product</Button>
                    <Button variant="secondary" leftIcon={<UserPlus />}>Add Member</Button>
                    <Button variant="outline" rightIcon={<ArrowRight />}>Continue</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="icon-only" title="Icon Only" description="Use accessible labels for compact icon-only actions." />
              <div className="mt-6">
                <CodePreview code={iconOnlyCode}>
                  <div className="flex items-center justify-center gap-3">
                    <Button size="icon" aria-label="Search"><Search /></Button>
                    <Button size="icon" variant="secondary" aria-label="Add"><Plus /></Button>
                    <Button size="icon" variant="outline" aria-label="Next"><ArrowRight /></Button>
                    <Button size="icon" variant="danger" aria-label="Delete"><Trash2 /></Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="loading" title="Loading State" description="Disable interaction and show progress while an action runs." />
              <div className="mt-6">
                <CodePreview code={loadingCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button loading loadingText="Loading...">Load Data</Button>
                    <Button variant="secondary" loading loadingText="Saving...">Save</Button>
                    <Button variant="outline" loading loadingText="Uploading...">Upload</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="full-width" title="Full Width" description="Fill the available width of the parent container." />
              <div className="mt-6">
                <CodePreview code={fullWidthCode} className="justify-stretch">
                  <div className="mx-auto w-full max-w-xl">
                    <Button fullWidth rightIcon={<ArrowRight />}>Create Account</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="disabled" title="Disabled State" description="Prevent interaction and communicate unavailable actions." />
              <div className="mt-6">
                <CodePreview code={disabledCode}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button disabled>Default</Button>
                    <Button variant="secondary" disabled>Secondary</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="danger" disabled>Danger</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="overwrite" title="Update or Overwrite" description="Replace an existing local Button file with the latest registry version." />
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-500/20 dark:bg-amber-500/10">
                <p className="text-sm font-semibold text-amber-900 dark:text-amber-200">Back up custom changes first</p>
                <p className="mt-1 text-sm leading-6 text-amber-800/80 dark:text-amber-200/70">The overwrite option replaces your current component source file.</p>
              </div>
              <div className="mt-5"><TerminalBlock code={overwriteCode} /></div>
            </section>

            <section>
              <SectionTitle id="api-reference" title="API Reference" description="Properties available on the Binhlaig UI Button component." />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">Prop</th>
                        <th className="px-5 py-4 font-medium">Type</th>
                        <th className="px-5 py-4 font-medium">Default</th>
                        <th className="px-5 py-4 font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow name="variant" type='"default" | "secondary" | "outline" | "ghost" | "danger" | "destructive" | "success" | "warning" | "link"' defaultValue='"default"' description="Controls the visual style." />
                      <ApiRow name="size" type='"sm" | "md" | "default" | "lg" | "xl" | "icon" | "iconSm" | "iconLg"' defaultValue='"md"' description="Controls dimensions and typography." />
                      <ApiRow name="radius" type='"none" | "sm" | "md" | "lg" | "full"' defaultValue='"lg"' description="Controls corner radius." />
                      <ApiRow name="fullWidth" type="boolean" defaultValue="false" description="Fills the parent width." />
                      <ApiRow name="loading" type="boolean" defaultValue="false" description="Shows progress and disables interaction." />
                      <ApiRow name="loadingText" type="string" defaultValue="—" description="Label displayed while loading." />
                      <ApiRow name="leftIcon" type="React.ReactNode" defaultValue="—" description="Icon before the label." />
                      <ApiRow name="rightIcon" type="React.ReactNode" defaultValue="—" description="Icon after the label." />
                      <ApiRow name="disabled" type="boolean" defaultValue="false" description="Prevents interaction." />
                      <ApiRow name="className" type="string" defaultValue="—" description="Adds custom classes." />
                      <ApiRow name="children" type="React.ReactNode" defaultValue="—" description="Content inside the button." />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link href="/components/breadcrumb" className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5">
                <div className="text-xs text-slate-500">Previous component</div>
                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white"><ArrowLeft className="size-4" />Breadcrumb</div>
              </Link>
              <Link href="/components/button-group" className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5">
                <div className="text-xs text-slate-500">Next component</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">Button Group<ArrowRight className="size-4" /></div>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
          <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">On this page</p>
          <nav className="space-y-1">
            {tableOfContents.map(([label, href]) => (
              <a key={href} href={href} className="block rounded-md py-1.5 text-[13px] text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-400">
                {label}
              </a>
            ))}
          </nav>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 transition hover:text-slate-950 dark:border-slate-800 dark:hover:text-white">
            Edit this page <ExternalLink className="size-3.5" />
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
      <td className="px-5 py-4 align-top"><code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{name}</code></td>
      <td className="max-w-[300px] px-5 py-4 align-top"><code className="text-xs leading-5 text-purple-600 dark:text-purple-400">{type}</code></td>
      <td className="px-5 py-4 align-top"><code className="text-xs text-slate-600 dark:text-slate-400">{defaultValue}</code></td>
      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">{description}</td>
    </tr>
  );
}
