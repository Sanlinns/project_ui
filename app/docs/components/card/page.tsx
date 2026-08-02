"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Clipboard,
  Code2,
  CreditCard,
  ExternalLink,
  Heart,
  MoreHorizontal,
  Package,
  ShoppingCart,
  Sparkles,
  Star,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const installCode = `npx binhlaig-ui@latest add card`;

const importCode = `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";`;

const basicCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Binhlaig UI</CardTitle>

        <CardDescription>
          Reusable components for React and Next.js projects.
        </CardDescription>
      </CardHeader>

      <CardContent>
        Build clean and modern user interfaces quickly.
      </CardContent>
    </Card>
  );
}`;

const footerCode = `import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithFooter() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create project</CardTitle>

        <CardDescription>
          Start a new project using Binhlaig UI.
        </CardDescription>
      </CardHeader>

      <CardContent>
        Your project will include reusable components
        and Tailwind CSS styles.
      </CardContent>

      <CardFooter className="gap-3">
        <Button variant="outline">
          Cancel
        </Button>

        <Button>
          Create project
        </Button>
      </CardFooter>
    </Card>
  );
}`;

const actionCode = `import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Team members</CardTitle>

        <CardDescription>
          Manage people with access to this project.
        </CardDescription>

        <CardAction>
          <Button
            size="icon"
            variant="ghost"
            aria-label="More options"
          >
            <MoreHorizontal />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        12 members have access to this workspace.
      </CardContent>
    </Card>
  );
}`;

const loginCode = `import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function LoginCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>

        <CardDescription>
          Enter your account details to continue.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium"
          >
            Email
          </label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium"
          >
            Password
          </label>

          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </CardContent>

      <CardFooter>
        <Button fullWidth>
          Sign in
        </Button>
      </CardFooter>
    </Card>
  );
}`;

const productCode = `import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProductCard() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-900" />

      <CardHeader>
        <CardTitle>Wireless Headphones</CardTitle>

        <CardDescription>
          High-quality sound with active noise cancellation.
        </CardDescription>

        <CardAction>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Add to favourites"
          >
            <Heart />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            $129
          </span>

          <div className="flex items-center gap-1 text-sm">
            <Star className="size-4 fill-amber-400 text-amber-400" />
            4.8
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          fullWidth
          leftIcon={<ShoppingCart />}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}`;

const notificationCode = `import {
  Bell,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NotificationCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Bell className="size-5" />
        </div>

        <CardTitle>Notifications</CardTitle>

        <CardDescription>
          You have three unread notifications.
        </CardDescription>

        <CardAction>
          <Button
            variant="ghost"
            size="icon"
            aria-label="View notifications"
          >
            <ChevronRight />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
          <CheckCircle2 className="mt-0.5 size-5 text-emerald-500" />

          <div>
            <p className="text-sm font-medium">
              Deployment successful
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Your project was deployed successfully.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}`;

const horizontalCode = `import { Package } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function HorizontalCard() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          <Package className="size-7" />
        </div>

        <div className="min-w-0 flex-1">
          <CardTitle>Starter components</CardTitle>

          <CardDescription className="mt-2">
            Install reusable buttons, cards, inputs and
            tabs in your Next.js project.
          </CardDescription>
        </div>

        <Button className="shrink-0">
          View package
        </Button>
      </CardContent>
    </Card>
  );
}`;

const customCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CustomCard() {
  return (
    <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-500/10 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-slate-950">
      <CardHeader>
        <CardTitle className="text-blue-700 dark:text-blue-300">
          Custom card
        </CardTitle>

        <CardDescription>
          Use className to customize the card style.
        </CardDescription>
      </CardHeader>

      <CardContent>
        Binhlaig UI components support Tailwind CSS
        utility classes.
      </CardContent>
    </Card>
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
            "flex min-h-[300px] items-center justify-center p-6 sm:p-10",
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

export default function CardDocumentationPage() {
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
              Card
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
                Card
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                Cards group related content and actions into a
                clear, flexible container.
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
                description="Add the Card component to your project using the Binhlaig UI CLI."
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

            {/* Import */}
            <section>
              <SectionTitle
                id="import"
                title="Import"
                description="Import the Card components from your UI components directory."
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

            {/* Usage */}
            <section>
              <SectionTitle
                id="usage"
                title="Usage"
                description="Use Card components to group related content."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Binhlaig UI</CardTitle>

                      <CardDescription>
                        Reusable components for React and Next.js
                        projects.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Build clean and modern user interfaces
                        quickly.
                      </p>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Footer */}
            <section>
              <SectionTitle
                id="footer"
                title="Card Footer"
                description="Use CardFooter to display related actions."
              />

              <div className="mt-6">
                <CodePreview code={footerCode}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Create project</CardTitle>

                      <CardDescription>
                        Start a new project using Binhlaig UI.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Your project will include reusable
                        components and Tailwind CSS styles.
                      </p>
                    </CardContent>

                    <CardFooter className="gap-3">
                      <Button variant="outline">
                        Cancel
                      </Button>

                      <Button>Create project</Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Action */}
            <section>
              <SectionTitle
                id="action"
                title="Card Action"
                description="Use CardAction for actions aligned with the card heading."
              />

              <div className="mt-6">
                <CodePreview code={actionCode}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Team members</CardTitle>

                      <CardDescription>
                        Manage people with access to this project.
                      </CardDescription>

                      <CardAction>
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label="More options"
                        >
                          <MoreHorizontal />
                        </Button>
                      </CardAction>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                          <User className="size-5" />
                        </div>

                        <div>
                          <p className="text-sm font-medium">
                            12 team members
                          </p>

                          <p className="text-sm text-slate-500">
                            Workspace access enabled
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Login Card */}
            <section>
              <SectionTitle
                id="login-card"
                title="Login Card"
                description="Cards can contain forms, inputs and actions."
              />

              <div className="mt-6">
                <CodePreview code={loginCode}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Welcome back</CardTitle>

                      <CardDescription>
                        Enter your account details to continue.
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="demo-email"
                          className="text-sm font-medium text-slate-900 dark:text-slate-100"
                        >
                          Email
                        </label>

                        <input
                          id="demo-email"
                          type="email"
                          placeholder="you@example.com"
                          className="flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="demo-password"
                          className="text-sm font-medium text-slate-900 dark:text-slate-100"
                        >
                          Password
                        </label>

                        <input
                          id="demo-password"
                          type="password"
                          placeholder="Enter your password"
                          className="flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button fullWidth>Sign in</Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Product Card */}
            <section>
              <SectionTitle
                id="product-card"
                title="Product Card"
                description="Combine images, content and actions in a product card."
              />

              <div className="mt-6">
                <CodePreview code={productCode}>
                  <Card className="w-full max-w-sm overflow-hidden pt-0">
                    <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-50 to-violet-100 dark:from-blue-500/10 dark:to-violet-500/10">
                      <CreditCard className="size-20 text-blue-500/60" />
                    </div>

                    <CardHeader>
                      <CardTitle>
                        Wireless Headphones
                      </CardTitle>

                      <CardDescription>
                        High-quality sound with active noise
                        cancellation.
                      </CardDescription>

                      <CardAction>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Add to favourites"
                        >
                          <Heart />
                        </Button>
                      </CardAction>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-slate-950 dark:text-white">
                          $129
                        </span>

                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Star className="size-4 fill-amber-400 text-amber-400" />
                          4.8
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        fullWidth
                        leftIcon={<ShoppingCart />}
                      >
                        Add to cart
                      </Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Notification */}
            <section>
              <SectionTitle
                id="notification-card"
                title="Notification Card"
                description="Display alerts, notifications and status information."
              />

              <div className="mt-6">
                <CodePreview code={notificationCode}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Bell className="size-5" />
                      </div>

                      <CardTitle>Notifications</CardTitle>

                      <CardDescription>
                        You have three unread notifications.
                      </CardDescription>

                      <CardAction>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="View notifications"
                        >
                          <ChevronRight />
                        </Button>
                      </CardAction>
                    </CardHeader>

                    <CardContent>
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />

                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                            Deployment successful
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-500">
                            Your project was deployed
                            successfully.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Horizontal */}
            <section>
              <SectionTitle
                id="horizontal-card"
                title="Horizontal Card"
                description="Use a horizontal layout for compact content and actions."
              />

              <div className="mt-6">
                <CodePreview code={horizontalCode}>
                  <Card className="w-full max-w-2xl">
                    <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                      <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Package className="size-7" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <CardTitle>
                          Starter components
                        </CardTitle>

                        <CardDescription className="mt-2">
                          Install reusable buttons, cards, inputs
                          and tabs in your Next.js project.
                        </CardDescription>
                      </div>

                      <Button className="shrink-0">
                        View package
                      </Button>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* Custom */}
            <section>
              <SectionTitle
                id="custom-style"
                title="Custom Style"
                description="Customize Card components using Tailwind CSS classes."
              />

              <div className="mt-6">
                <CodePreview code={customCode}>
                  <Card className="w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-500/10 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-slate-950">
                    <CardHeader>
                      <CardTitle className="text-blue-700 dark:text-blue-300">
                        Custom card
                      </CardTitle>

                      <CardDescription>
                        Use className to customize the card style.
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Binhlaig UI components support Tailwind CSS
                        utility classes.
                      </p>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>

            {/* API Reference */}
            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="Components available in the Binhlaig UI Card."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">
                          Component
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Element
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="Card"
                        element="div"
                        description="The main card container."
                      />

                      <ApiRow
                        name="CardHeader"
                        element="div"
                        description="Contains the card title, description and action."
                      />

                      <ApiRow
                        name="CardTitle"
                        element="div"
                        description="Displays the primary card heading."
                      />

                      <ApiRow
                        name="CardDescription"
                        element="div"
                        description="Displays supporting text below the title."
                      />

                      <ApiRow
                        name="CardAction"
                        element="div"
                        description="Displays an action aligned with the card heading."
                      />

                      <ApiRow
                        name="CardContent"
                        element="div"
                        description="Contains the main card content."
                      />

                      <ApiRow
                        name="CardFooter"
                        element="div"
                        description="Contains actions or supporting content at the bottom."
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Bottom Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/components/button"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Previous component
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Button
                </div>
              </Link>

              <Link
                href="/components/input"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Next component
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  Input
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
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Card Footer", "#footer"],
              ["Card Action", "#action"],
              ["Login Card", "#login-card"],
              ["Product Card", "#product-card"],
              ["Notification Card", "#notification-card"],
              ["Horizontal Card", "#horizontal-card"],
              ["Custom Style", "#custom-style"],
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
  element,
  description,
}: {
  name: string;
  element: string;
  description: string;
}) {
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>

      <td className="px-5 py-4 align-top">
        <code className="text-xs text-purple-600 dark:text-purple-400">
          {element}
        </code>
      </td>

      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </td>
    </tr>
  );
}