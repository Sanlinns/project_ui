"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  KeyRound,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const installCode = `npx binhlaig-ui@latest add input-otp`;

const importCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";`;

const basicCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function InputOTPDemo() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

const numericCode = `import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function NumericOTP() {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

const separatorCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function OTPWithSeparator() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>

      <InputOTPSeparator />

      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

const controlledCode = `"use client";

import { useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ControlledOTP() {
  const [value, setValue] = useState("");

  return (
    <div className="grid gap-4">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
        pattern={REGEXP_ONLY_DIGITS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-slate-500">
        Current value: {value || "Empty"}
      </p>
    </div>
  );
}`;

const verificationCode = `"use client";

import { useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Mail, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function VerificationCard() {
  const [otp, setOtp] = useState("");

  return (
    <div className="w-full max-w-md rounded-2xl border p-6">
      <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Mail className="size-5" />
      </div>

      <h2 className="mt-5 text-xl font-semibold">
        Verify your email
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Enter the 6-digit code sent to your email.
      </p>

      <div className="mt-6">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={setOtp}
          pattern={REGEXP_ONLY_DIGITS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        className="mt-6"
        fullWidth
        disabled={otp.length !== 6}
        leftIcon={<ShieldCheck />}
      >
        Verify
      </Button>
    </div>
  );
}`;

const disabledCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function DisabledOTP() {
  return (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`;

const errorCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export function ErrorOTP() {
  return (
    <div className="grid gap-3">
      <InputOTP
        maxLength={6}
        aria-invalid="true"
      >
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="border-red-500"
          />
          <InputOTPSlot
            index={1}
            className="border-red-500"
          />
          <InputOTPSlot
            index={2}
            className="border-red-500"
          />
          <InputOTPSlot
            index={3}
            className="border-red-500"
          />
          <InputOTPSlot
            index={4}
            className="border-red-500"
          />
          <InputOTPSlot
            index={5}
            className="border-red-500"
          />
        </InputOTPGroup>
      </InputOTP>

      <p className="text-sm text-red-600">
        The verification code is incorrect.
      </p>
    </div>
  );
}`;

const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Numeric OTP", "#numeric"],
  ["Separator", "#separator"],
  ["Controlled OTP", "#controlled"],
  ["Verification Card", "#verification"],
  ["Disabled", "#disabled"],
  ["Error State", "#error"],
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
            "flex min-h-[260px] items-center justify-center p-6 sm:p-10",
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

export default function InputOTPDocumentationPage() {
  const [controlledValue, setControlledValue] =
    useState("");

  const [verifyOTP, setVerifyOTP] = useState("");

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
              Input OTP
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
                Input OTP
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                An accessible one-time password input for
                verification codes, login flows and security
                confirmations.
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
                description="Add Input OTP to your project using the Binhlaig UI CLI."
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
                description="Import the OTP components from your UI directory."
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
                description="Create a basic six-character verification input."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>

            {/* Numeric */}
            <section>
              <SectionTitle
                id="numeric"
                title="Numeric OTP"
                description="Restrict OTP input to numbers only."
              />

              <div className="mt-6">
                <CodePreview code={numericCode}>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>

            {/* Separator */}
            <section>
              <SectionTitle
                id="separator"
                title="With Separator"
                description="Split the OTP into groups using a separator."
              />

              <div className="mt-6">
                <CodePreview code={separatorCode}>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>

                    <InputOTPSeparator />

                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>

            {/* Controlled */}
            <section>
              <SectionTitle
                id="controlled"
                title="Controlled OTP"
                description="Control the OTP value using React state."
              />

              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <div className="grid gap-5">
                    <InputOTP
                      maxLength={6}
                      value={controlledValue}
                      onChange={setControlledValue}
                      pattern={REGEXP_ONLY_DIGITS}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>

                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                      <span className="text-sm text-slate-500">
                        Current value
                      </span>

                      <code className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        {controlledValue || "Empty"}
                      </code>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Verification */}
            <section>
              <SectionTitle
                id="verification"
                title="Verification Card"
                description="Use Input OTP in an email or account verification flow."
              />

              <div className="mt-6">
                <CodePreview code={verificationCode}>
                  <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Mail className="size-5" />
                    </div>

                    <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                      Verify your email
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Enter the 6-digit verification code sent
                      to your email address.
                    </p>

                    <div className="mt-6">
                      <InputOTP
                        maxLength={6}
                        value={verifyOTP}
                        onChange={setVerifyOTP}
                        pattern={REGEXP_ONLY_DIGITS}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>

                    <Button
                      fullWidth
                      className="mt-6"
                      disabled={verifyOTP.length !== 6}
                      leftIcon={<ShieldCheck />}
                    >
                      Verify code
                    </Button>

                    <button
                      type="button"
                      className="mt-4 w-full text-center text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400"
                    >
                      Resend code
                    </button>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title="Disabled State"
                description="Disable the OTP input when users should not edit the value."
              />

              <div className="mt-6">
                <CodePreview code={disabledCode}>
                  <InputOTP
                    maxLength={6}
                    disabled
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>

            {/* Error */}
            <section>
              <SectionTitle
                id="error"
                title="Error State"
                description="Display a validation message when the OTP is incorrect."
              />

              <div className="mt-6">
                <CodePreview code={errorCode}>
                  <div className="grid gap-3">
                    <InputOTP
                      maxLength={6}
                      aria-invalid="true"
                    >
                      <InputOTPGroup>
                        {[0, 1, 2, 3, 4, 5].map(
                          (index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="border-red-500 data-[active=true]:border-red-500 data-[active=true]:ring-red-500/20"
                            />
                          ),
                        )}
                      </InputOTPGroup>
                    </InputOTP>

                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                      <KeyRound className="size-4" />
                      The verification code is incorrect.
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="Components and important properties available in Input OTP."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">
                          Component
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Important Props
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="InputOTP"
                        props="maxLength, value, onChange, pattern, disabled"
                        description="The root OTP input component."
                      />

                      <ApiRow
                        name="InputOTPGroup"
                        props="className"
                        description="Groups related OTP slots together."
                      />

                      <ApiRow
                        name="InputOTPSlot"
                        props="index, className"
                        description="Displays one character of the OTP value."
                      />

                      <ApiRow
                        name="InputOTPSeparator"
                        props="className"
                        description="Displays a visual separator between OTP groups."
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/docs/components/input"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Input
                </div>
              </Link>

              <Link
                href="/docs/components/tabs"
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
  props,
  description,
}: {
  name: string;
  props: string;
  description: string;
}) {
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>

      <td className="max-w-[340px] px-5 py-4 align-top">
        <code className="text-xs leading-5 text-purple-600 dark:text-purple-400">
          {props}
        </code>
      </td>

      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </td>
    </tr>
  );
}