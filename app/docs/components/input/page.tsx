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
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const installCode = `npx binhlaig-ui@latest add input`;

const importCode = `import { Input } from "@/components/ui/input";`;

const basicCode = `import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <Input placeholder="Enter your name" />
  );
}`;

const typesCode = `import { Input } from "@/components/ui/input";

export function InputTypes() {
  return (
    <div className="grid gap-4">
      <Input
        type="text"
        placeholder="Text"
      />

      <Input
        type="email"
        placeholder="Email address"
      />

      <Input
        type="password"
        placeholder="Password"
      />

      <Input
        type="number"
        placeholder="Number"
      />

      <Input type="date" />
    </div>
  );
}`;

const labelCode = `import { Input } from "@/components/ui/input";

export function InputWithLabel() {
  return (
    <div className="grid gap-2">
      <label
        htmlFor="email"
        className="text-sm font-medium"
      >
        Email address
      </label>

      <Input
        id="email"
        type="email"
        placeholder="you@example.com"
      />
    </div>
  );
}`;

const descriptionCode = `import { Input } from "@/components/ui/input";

export function InputWithDescription() {
  return (
    <div className="grid gap-2">
      <label
        htmlFor="username"
        className="text-sm font-medium"
      >
        Username
      </label>

      <Input
        id="username"
        placeholder="binhlaig"
      />

      <p className="text-sm text-slate-500">
        This will be your public display name.
      </p>
    </div>
  );
}`;

const iconCode = `import {
  Mail,
  Search,
  User,
} from "lucide-react";

import { Input } from "@/components/ui/input";

export function InputWithIcon() {
  return (
    <div className="grid gap-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

        <Input
          className="pl-10"
          placeholder="Search components..."
        />
      </div>

      <div className="relative">
        <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

        <Input
          className="pl-10"
          type="email"
          placeholder="Email address"
        />
      </div>

      <div className="relative">
        <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

        <Input
          className="pl-10"
          placeholder="Username"
        />
      </div>
    </div>
  );
}`;

const passwordCode = `"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

import { Input } from "@/components/ui/input";

export function PasswordInput() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

      <Input
        type={visible ? "text" : "password"}
        className="px-10"
        placeholder="Enter password"
      />

      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
        aria-label={
          visible
            ? "Hide password"
            : "Show password"
        }
      >
        {visible ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}`;

const disabledCode = `import { Input } from "@/components/ui/input";

export function DisabledInput() {
  return (
    <div className="grid gap-4">
      <Input
        disabled
        placeholder="Disabled input"
      />

      <Input
        disabled
        value="Cannot be edited"
        readOnly
      />
    </div>
  );
}`;

const errorCode = `import { Input } from "@/components/ui/input";

export function InputError() {
  return (
    <div className="grid gap-2">
      <label
        htmlFor="error-email"
        className="text-sm font-medium"
      >
        Email address
      </label>

      <Input
        id="error-email"
        type="email"
        defaultValue="invalid-email"
        aria-invalid="true"
        className="border-red-500 focus-visible:ring-red-500/30"
      />

      <p className="text-sm text-red-600 dark:text-red-400">
        Enter a valid email address.
      </p>
    </div>
  );
}`;

const fileCode = `import { Input } from "@/components/ui/input";

export function FileInput() {
  return (
    <div className="grid gap-2">
      <label
        htmlFor="picture"
        className="text-sm font-medium"
      >
        Profile picture
      </label>

      <Input
        id="picture"
        type="file"
        accept="image/*"
      />
    </div>
  );
}`;

const formCode = `import { Mail, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  return (
    <form className="grid gap-5">
      <div className="grid gap-2">
        <label
          htmlFor="full-name"
          className="text-sm font-medium"
        >
          Full name
        </label>

        <div className="relative">
          <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="full-name"
            className="pl-10"
            placeholder="Your name"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium"
        >
          Email
        </label>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

          <Input
            id="contact-email"
            type="email"
            className="pl-10"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </form>
  );
}`;

const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Input Types", "#types"],
  ["With Label", "#label"],
  ["Description", "#description"],
  ["With Icon", "#icon"],
  ["Password", "#password"],
  ["Disabled", "#disabled"],
  ["Error State", "#error"],
  ["File Input", "#file"],
  ["Form Example", "#form"],
  ["API Reference", "#api-reference"],
];

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
                : "text-slate-500 hover:text-slate-950 dark:hover:text-white",
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
                : "text-slate-500 hover:text-slate-950 dark:hover:text-white",
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
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-900 dark:hover:text-white"
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
            "flex min-h-[250px] items-center justify-center p-6 sm:p-10",
            "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
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

function CopyCodeBlock({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
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
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
        <span className="text-xs font-medium text-slate-500">
          {title}
        </span>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
          aria-label={`Copy ${title}`}
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
        <code>{code}</code>
      </pre>
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
    <div
      id={id}
      className="scroll-mt-28"
    >
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

export default function InputDocumentationPage() {
  const [passwordVisible, setPasswordVisible] =
    useState(false);

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/components"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >
              Components
            </Link>

            <span>/</span>

            <span className="text-slate-800 dark:text-slate-300">
              Input
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
                Input
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                Input fields allow users to enter text, email,
                passwords, numbers, dates and files.
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
            {/* Installation */}
            <section>
              <SectionTitle
                id="installation"
                title="Installation"
                description="Add the Input component using the Binhlaig UI CLI."
              />

              <div className="mt-6">
                <CopyCodeBlock
                  code={installCode}
                  title="Terminal"
                />
              </div>
            </section>

            {/* Import */}
            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import the Input component from your UI directory."
              />

              <div className="mt-6">
                <CopyCodeBlock
                  code={importCode}
                  title="TypeScript"
                />
              </div>
            </section>

            {/* Usage */}
            <section>
              <SectionTitle
                id="usage"
                title="Usage"
                description="Use Input for simple text entry."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <div className="w-full max-w-md">
                    <Input placeholder="Enter your name" />
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Types */}
            <section>
              <SectionTitle
                id="types"
                title="Input Types"
                description="Input supports all standard HTML input types."
              />

              <div className="mt-6">
                <CodePreview code={typesCode}>
                  <div className="grid w-full max-w-md gap-4">
                    <Input
                      type="text"
                      placeholder="Text"
                    />

                    <Input
                      type="email"
                      placeholder="Email address"
                    />

                    <Input
                      type="password"
                      placeholder="Password"
                    />

                    <Input
                      type="number"
                      placeholder="Number"
                    />

                    <Input type="date" />
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Label */}
            <section>
              <SectionTitle
                id="label"
                title="With Label"
                description="Use a label to clearly identify the requested value."
              />

              <div className="mt-6">
                <CodePreview code={labelCode}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-email"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >
                      Email address
                    </label>

                    <Input
                      id="demo-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Description */}
            <section>
              <SectionTitle
                id="description"
                title="With Description"
                description="Supporting text can explain the expected input value."
              />

              <div className="mt-6">
                <CodePreview code={descriptionCode}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-username"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >
                      Username
                    </label>

                    <Input
                      id="demo-username"
                      placeholder="binhlaig"
                    />

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      This will be your public display name.
                    </p>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Icons */}
            <section>
              <SectionTitle
                id="icon"
                title="With Icons"
                description="Add an icon to provide visual context."
              />

              <div className="mt-6">
                <CodePreview code={iconCode}>
                  <div className="grid w-full max-w-md gap-4">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                      <Input
                        className="pl-10"
                        placeholder="Search components..."
                      />
                    </div>

                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                      <Input
                        className="pl-10"
                        type="email"
                        placeholder="Email address"
                      />
                    </div>

                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                      <Input
                        className="pl-10"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Password */}
            <section>
              <SectionTitle
                id="password"
                title="Password Input"
                description="Allow users to show or hide their password."
              />

              <div className="mt-6">
                <CodePreview code={passwordCode}>
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                      <Input
                        type={
                          passwordVisible
                            ? "text"
                            : "password"
                        }
                        className="px-10"
                        placeholder="Enter password"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setPasswordVisible(
                            !passwordVisible,
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-950 dark:hover:text-white"
                        aria-label={
                          passwordVisible
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {passwordVisible ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title="Disabled State"
                description="Disabled inputs cannot be edited or focused."
              />

              <div className="mt-6">
                <CodePreview code={disabledCode}>
                  <div className="grid w-full max-w-md gap-4">
                    <Input
                      disabled
                      placeholder="Disabled input"
                    />

                    <Input
                      disabled
                      value="Cannot be edited"
                      readOnly
                    />
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Error */}
            <section>
              <SectionTitle
                id="error"
                title="Error State"
                description="Use aria-invalid and error styles for invalid values."
              />

              <div className="mt-6">
                <CodePreview code={errorCode}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="invalid-email"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >
                      Email address
                    </label>

                    <Input
                      id="invalid-email"
                      type="email"
                      defaultValue="invalid-email"
                      aria-invalid="true"
                      className="border-red-500 focus-visible:ring-red-500/30"
                    />

                    <p className="text-sm text-red-600 dark:text-red-400">
                      Enter a valid email address.
                    </p>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* File */}
            <section>
              <SectionTitle
                id="file"
                title="File Input"
                description="Use the file input type to upload files."
              />

              <div className="mt-6">
                <CodePreview code={fileCode}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-picture"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >
                      Profile picture
                    </label>

                    <Input
                      id="demo-picture"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Form */}
            <section>
              <SectionTitle
                id="form"
                title="Form Example"
                description="Combine inputs and buttons to create a complete form."
              />

              <div className="mt-6">
                <CodePreview code={formCode}>
                  <form
                    className="grid w-full max-w-md gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                    onSubmit={(event) =>
                      event.preventDefault()
                    }
                  >
                    <div className="grid gap-2">
                      <label
                        htmlFor="form-name"
                        className="text-sm font-medium text-slate-950 dark:text-white"
                      >
                        Full name
                      </label>

                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                        <Input
                          id="form-name"
                          className="pl-10"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="grid gap-2">
                      <label
                        htmlFor="form-email"
                        className="text-sm font-medium text-slate-950 dark:text-white"
                      >
                        Email
                      </label>

                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                        <Input
                          id="form-email"
                          type="email"
                          className="pl-10"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      fullWidth
                      leftIcon={<KeyRound />}
                    >
                      Submit
                    </Button>
                  </form>
                </CodePreview>
              </div>
            </section>

            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="The Input component accepts standard React input properties."
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
                        name="type"
                        type="React.HTMLInputTypeAttribute"
                        defaultValue={`"text"`}
                        description="Controls the type of input value."
                      />

                      <ApiRow
                        name="placeholder"
                        type="string"
                        defaultValue="—"
                        description="Displays temporary hint text."
                      />

                      <ApiRow
                        name="value"
                        type="string | number"
                        defaultValue="—"
                        description="Controls the current input value."
                      />

                      <ApiRow
                        name="defaultValue"
                        type="string | number"
                        defaultValue="—"
                        description="Sets the initial uncontrolled value."
                      />

                      <ApiRow
                        name="disabled"
                        type="boolean"
                        defaultValue="false"
                        description="Prevents interaction with the input."
                      />

                      <ApiRow
                        name="readOnly"
                        type="boolean"
                        defaultValue="false"
                        description="Prevents editing while allowing focus."
                      />

                      <ApiRow
                        name="required"
                        type="boolean"
                        defaultValue="false"
                        description="Marks the input as required."
                      />

                      <ApiRow
                        name="aria-invalid"
                        type="boolean"
                        defaultValue="false"
                        description="Marks the current value as invalid."
                      />

                      <ApiRow
                        name="className"
                        type="string"
                        defaultValue="—"
                        description="Adds custom Tailwind CSS classes."
                      />

                      <ApiRow
                        name="onChange"
                        type="React.ChangeEventHandler<HTMLInputElement>"
                        defaultValue="—"
                        description="Runs whenever the input value changes."
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/components/card"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Card
                </div>
              </Link>

              <Link
                href="/components/tabs"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Next component
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">
                  Tabs
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Table of Contents */}
      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
          <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">
            On this page
          </p>

          <nav className="space-y-1">
            {tableOfContents.map(([label, href]) => (
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