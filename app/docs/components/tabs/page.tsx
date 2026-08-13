"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  Clipboard,
  Code2,
  CreditCard,
  ExternalLink,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Settings,
  Sparkles,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const installCode = `npx binhlaig-ui@latest add tabs`;

const importCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";`;

const basicCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">
          Account
        </TabsTrigger>

        <TabsTrigger value="password">
          Password
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        Manage your account settings.
      </TabsContent>

      <TabsContent value="password">
        Change your password here.
      </TabsContent>
    </Tabs>
  );
}`;

const threeTabsCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function ThreeTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">
          Overview
        </TabsTrigger>

        <TabsTrigger value="analytics">
          Analytics
        </TabsTrigger>

        <TabsTrigger value="reports">
          Reports
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        Overview content
      </TabsContent>

      <TabsContent value="analytics">
        Analytics content
      </TabsContent>

      <TabsContent value="reports">
        Reports content
      </TabsContent>
    </Tabs>
  );
}`;

const disabledCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function DisabledTab() {
  return (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">
          Active
        </TabsTrigger>

        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>

      <TabsContent value="active">
        This tab is active.
      </TabsContent>

      <TabsContent value="disabled">
        This tab cannot be selected.
      </TabsContent>
    </Tabs>
  );
}`;

const iconTabsCode = `import {
  BarChart3,
  FileText,
  LayoutDashboard,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function IconTabs() {
  return (
    <Tabs defaultValue="dashboard">
      <TabsList>
        <TabsTrigger value="dashboard">
          <LayoutDashboard className="size-4" />
          Dashboard
        </TabsTrigger>

        <TabsTrigger value="analytics">
          <BarChart3 className="size-4" />
          Analytics
        </TabsTrigger>

        <TabsTrigger value="reports">
          <FileText className="size-4" />
          Reports
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dashboard">
        Dashboard content
      </TabsContent>

      <TabsContent value="analytics">
        Analytics content
      </TabsContent>

      <TabsContent value="reports">
        Reports content
      </TabsContent>
    </Tabs>
  );
}`;

const verticalTabsCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function VerticalTabs() {
  return (
    <Tabs
      defaultValue="profile"
      orientation="vertical"
      className="flex gap-6"
    >
      <TabsList className="h-auto w-48 flex-col items-stretch">
        <TabsTrigger
          value="profile"
          className="justify-start"
        >
          Profile
        </TabsTrigger>

        <TabsTrigger
          value="security"
          className="justify-start"
        >
          Security
        </TabsTrigger>

        <TabsTrigger
          value="billing"
          className="justify-start"
        >
          Billing
        </TabsTrigger>
      </TabsList>

      <div className="flex-1">
        <TabsContent value="profile">
          Profile settings
        </TabsContent>

        <TabsContent value="security">
          Security settings
        </TabsContent>

        <TabsContent value="billing">
          Billing settings
        </TabsContent>
      </div>
    </Tabs>
  );
}`;

const settingsCode = `import {
  Bell,
  CreditCard,
  LockKeyhole,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">
          <User className="size-4" />
          Profile
        </TabsTrigger>

        <TabsTrigger value="security">
          <LockKeyhole className="size-4" />
          Security
        </TabsTrigger>

        <TabsTrigger value="notifications">
          <Bell className="size-4" />
          Notifications
        </TabsTrigger>

        <TabsTrigger value="billing">
          <CreditCard className="size-4" />
          Billing
        </TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <div className="grid gap-4 rounded-xl border p-5">
          <div className="grid gap-2">
            <label className="text-sm font-medium">
              Name
            </label>

            <Input defaultValue="Sai Aung" />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">
              Email
            </label>

            <Input
              type="email"
              defaultValue="sai@example.com"
            />
          </div>

          <Button>
            Save changes
          </Button>
        </div>
      </TabsContent>

      <TabsContent value="security">
        Security settings
      </TabsContent>

      <TabsContent value="notifications">
        Notification settings
      </TabsContent>

      <TabsContent value="billing">
        Billing settings
      </TabsContent>
    </Tabs>
  );
}`;

const dashboardCode = `import {
  BarChart3,
  FileText,
  LayoutDashboard,
} from "lucide-react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">
          <LayoutDashboard className="size-4" />
          Overview
        </TabsTrigger>

        <TabsTrigger value="sales">
          <BarChart3 className="size-4" />
          Sales
        </TabsTrigger>

        <TabsTrigger value="reports">
          <FileText className="size-4" />
          Reports
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-4">
            <p className="text-sm text-slate-500">
              Revenue
            </p>

            <p className="mt-2 text-2xl font-bold">
              $24,500
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-slate-500">
              Orders
            </p>

            <p className="mt-2 text-2xl font-bold">
              1,248
            </p>
          </div>

          <div className="rounded-xl border p-4">
            <p className="text-sm text-slate-500">
              Customers
            </p>

            <p className="mt-2 text-2xl font-bold">
              864
            </p>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="sales">
        Sales analytics content
      </TabsContent>

      <TabsContent value="reports">
        Reports content
      </TabsContent>
    </Tabs>
  );
}`;

const controlledCode = `"use client";

import { useState } from "react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function ControlledTabs() {
  const [activeTab, setActiveTab] =
    useState("account");

  return (
    <div className="grid gap-4">
      <p className="text-sm">
        Active tab: {activeTab}
      </p>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList>
          <TabsTrigger value="account">
            Account
          </TabsTrigger>

          <TabsTrigger value="password">
            Password
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          Account settings
        </TabsContent>

        <TabsContent value="password">
          Password settings
        </TabsContent>
      </Tabs>
    </div>
  );
}`;

const customCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export function CustomTabs() {
  return (
    <Tabs defaultValue="first">
      <TabsList className="rounded-full bg-blue-50 p-1 dark:bg-blue-500/10">
        <TabsTrigger
          value="first"
          className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          First
        </TabsTrigger>

        <TabsTrigger
          value="second"
          className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Second
        </TabsTrigger>

        <TabsTrigger
          value="third"
          className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
        >
          Third
        </TabsTrigger>
      </TabsList>

      <TabsContent value="first">
        First tab content
      </TabsContent>

      <TabsContent value="second">
        Second tab content
      </TabsContent>

      <TabsContent value="third">
        Third tab content
      </TabsContent>
    </Tabs>
  );
}`;

const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Multiple Tabs", "#multiple"],
  ["Disabled", "#disabled"],
  ["With Icons", "#icons"],
  ["Vertical Tabs", "#vertical"],
  ["Settings Tabs", "#settings"],
  ["Dashboard Tabs", "#dashboard"],
  ["Controlled Tabs", "#controlled"],
  ["Custom Style", "#custom"],
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
            "flex min-h-[280px] items-center justify-center p-6 sm:p-10",
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

export default function TabsDocumentationPage() {
  const [controlledTab, setControlledTab] =
    useState("account");

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
              Tabs
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
                Tabs
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                Tabs organize related content into separate
                views and allow users to switch between them.
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
                description="Add the Tabs component using the Binhlaig UI CLI."
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
                description="Import the Tabs components from your UI directory."
              />

              <div className="mt-6">
                <CopyCodeBlock
                  code={importCode}
                  title="TypeScript"
                />
              </div>
            </section>

            {/* Basic */}
            <section>
              <SectionTitle
                id="usage"
                title="Usage"
                description="Use Tabs with a default active value."
              />

              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Tabs
                    defaultValue="account"
                    className="w-full max-w-xl"
                  >
                    <TabsList>
                      <TabsTrigger value="account">
                        Account
                      </TabsTrigger>

                      <TabsTrigger value="password">
                        Password
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="account"
                      className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        Account
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Manage your account details and public
                        profile information.
                      </p>
                    </TabsContent>

                    <TabsContent
                      value="password"
                      className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        Password
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Update your password and security
                        information.
                      </p>
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Multiple */}
            <section>
              <SectionTitle
                id="multiple"
                title="Multiple Tabs"
                description="Use three or more tabs to organize larger content groups."
              />

              <div className="mt-6">
                <CodePreview code={threeTabsCode}>
                  <Tabs
                    defaultValue="overview"
                    className="w-full max-w-2xl"
                  >
                    <TabsList>
                      <TabsTrigger value="overview">
                        Overview
                      </TabsTrigger>

                      <TabsTrigger value="analytics">
                        Analytics
                      </TabsTrigger>

                      <TabsTrigger value="reports">
                        Reports
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="overview"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Overview content
                    </TabsContent>

                    <TabsContent
                      value="analytics"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Analytics content
                    </TabsContent>

                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Reports content
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title="Disabled Tab"
                description="Disable a tab when its content is unavailable."
              />

              <div className="mt-6">
                <CodePreview code={disabledCode}>
                  <Tabs
                    defaultValue="active"
                    className="w-full max-w-md"
                  >
                    <TabsList>
                      <TabsTrigger value="active">
                        Active
                      </TabsTrigger>

                      <TabsTrigger
                        value="disabled"
                        disabled
                      >
                        Disabled
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="active"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      This tab is available.
                    </TabsContent>

                    <TabsContent value="disabled">
                      This tab cannot be selected.
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Icons */}
            <section>
              <SectionTitle
                id="icons"
                title="Tabs with Icons"
                description="Add icons to make each tab easier to identify."
              />

              <div className="mt-6">
                <CodePreview code={iconTabsCode}>
                  <Tabs
                    defaultValue="dashboard"
                    className="w-full max-w-2xl"
                  >
                    <TabsList>
                      <TabsTrigger value="dashboard">
                        <LayoutDashboard className="size-4" />
                        Dashboard
                      </TabsTrigger>

                      <TabsTrigger value="analytics">
                        <BarChart3 className="size-4" />
                        Analytics
                      </TabsTrigger>

                      <TabsTrigger value="reports">
                        <FileText className="size-4" />
                        Reports
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="dashboard"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Dashboard content
                    </TabsContent>

                    <TabsContent
                      value="analytics"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Analytics content
                    </TabsContent>

                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Reports content
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Vertical */}
            <section>
              <SectionTitle
                id="vertical"
                title="Vertical Tabs"
                description="Use vertical tabs for settings pages and side navigation."
              />

              <div className="mt-6">
                <CodePreview code={verticalTabsCode}>
                  <Tabs
                    defaultValue="profile"
                    orientation="vertical"
                    className="flex w-full max-w-2xl flex-col gap-5 sm:flex-row"
                  >
                    <TabsList className="h-auto w-full flex-col items-stretch sm:w-48">
                      <TabsTrigger
                        value="profile"
                        className="w-full justify-start"
                      >
                        <User className="size-4" />
                        Profile
                      </TabsTrigger>

                      <TabsTrigger
                        value="security"
                        className="w-full justify-start"
                      >
                        <LockKeyhole className="size-4" />
                        Security
                      </TabsTrigger>

                      <TabsTrigger
                        value="billing"
                        className="w-full justify-start"
                      >
                        <CreditCard className="size-4" />
                        Billing
                      </TabsTrigger>
                    </TabsList>

                    <div className="min-w-0 flex-1">
                      <TabsContent
                        value="profile"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        <h3 className="font-semibold">
                          Profile settings
                        </h3>

                        <p className="mt-2 text-sm text-slate-500">
                          Manage your personal information.
                        </p>
                      </TabsContent>

                      <TabsContent
                        value="security"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        Security settings
                      </TabsContent>

                      <TabsContent
                        value="billing"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        Billing settings
                      </TabsContent>
                    </div>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Settings */}
            <section>
              <SectionTitle
                id="settings"
                title="Settings Tabs"
                description="Build a complete settings interface using tabs."
              />

              <div className="mt-6">
                <CodePreview
                  code={settingsCode}
                  className="items-start"
                >
                  <Tabs
                    defaultValue="profile"
                    className="w-full max-w-3xl"
                  >
                    <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4">
                      <TabsTrigger value="profile">
                        <User className="size-4" />
                        Profile
                      </TabsTrigger>

                      <TabsTrigger value="security">
                        <LockKeyhole className="size-4" />
                        Security
                      </TabsTrigger>

                      <TabsTrigger value="notifications">
                        <Bell className="size-4" />
                        Notifications
                      </TabsTrigger>

                      <TabsTrigger value="billing">
                        <CreditCard className="size-4" />
                        Billing
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="profile">
                      <div className="mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                        <div className="grid gap-2">
                          <label
                            htmlFor="tabs-name"
                            className="text-sm font-medium"
                          >
                            Name
                          </label>

                          <input
                            id="tabs-name"
                            defaultValue="Sai Aung"
                            className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                          />
                        </div>

                        <div className="grid gap-2">
                          <label
                            htmlFor="tabs-email"
                            className="text-sm font-medium"
                          >
                            Email
                          </label>

                          <input
                            id="tabs-email"
                            type="email"
                            defaultValue="sai@example.com"
                            className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                          />
                        </div>

                        <div>
                          <Button>Save changes</Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="security"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Security settings
                    </TabsContent>

                    <TabsContent
                      value="notifications"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Notification settings
                    </TabsContent>

                    <TabsContent
                      value="billing"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Billing settings
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Dashboard */}
            <section>
              <SectionTitle
                id="dashboard"
                title="Dashboard Tabs"
                description="Use tabs to switch between dashboard views."
              />

              <div className="mt-6">
                <CodePreview
                  code={dashboardCode}
                  className="items-start"
                >
                  <Tabs
                    defaultValue="overview"
                    className="w-full max-w-3xl"
                  >
                    <TabsList>
                      <TabsTrigger value="overview">
                        <LayoutDashboard className="size-4" />
                        Overview
                      </TabsTrigger>

                      <TabsTrigger value="sales">
                        <BarChart3 className="size-4" />
                        Sales
                      </TabsTrigger>

                      <TabsTrigger value="reports">
                        <FileText className="size-4" />
                        Reports
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview">
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {[
                          {
                            label: "Revenue",
                            value: "$24,500",
                          },
                          {
                            label: "Orders",
                            value: "1,248",
                          },
                          {
                            label: "Customers",
                            value: "864",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
                          >
                            <p className="text-sm text-slate-500">
                              {item.label}
                            </p>

                            <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent
                      value="sales"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Sales analytics content
                    </TabsContent>

                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      Reports content
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* Controlled */}
            <section>
              <SectionTitle
                id="controlled"
                title="Controlled Tabs"
                description="Control the active tab using React state."
              />

              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <div className="grid w-full max-w-xl gap-4">
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                      <span className="text-sm text-slate-500">
                        Active tab
                      </span>

                      <code className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        {controlledTab}
                      </code>
                    </div>

                    <Tabs
                      value={controlledTab}
                      onValueChange={setControlledTab}
                    >
                      <TabsList>
                        <TabsTrigger value="account">
                          Account
                        </TabsTrigger>

                        <TabsTrigger value="password">
                          Password
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent
                        value="account"
                        className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        Account settings
                      </TabsContent>

                      <TabsContent
                        value="password"
                        className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        Password settings
                      </TabsContent>
                    </Tabs>
                  </div>
                </CodePreview>
              </div>
            </section>

            {/* Custom */}
            <section>
              <SectionTitle
                id="custom"
                title="Custom Style"
                description="Customize tabs using Tailwind CSS classes."
              />

              <div className="mt-6">
                <CodePreview code={customCode}>
                  <Tabs
                    defaultValue="first"
                    className="w-full max-w-xl"
                  >
                    <TabsList className="h-auto rounded-full bg-blue-50 p-1 dark:bg-blue-500/10">
                      <TabsTrigger
                        value="first"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        First
                      </TabsTrigger>

                      <TabsTrigger
                        value="second"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Second
                      </TabsTrigger>

                      <TabsTrigger
                        value="third"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                      >
                        Third
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent
                      value="first"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >
                      First tab content
                    </TabsContent>

                    <TabsContent
                      value="second"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >
                      Second tab content
                    </TabsContent>

                    <TabsContent
                      value="third"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >
                      Third tab content
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>

            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title="API Reference"
                description="Components and properties available in the Binhlaig UI Tabs component."
              />

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[780px] text-left text-sm">
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
                        name="Tabs"
                        props="defaultValue, value, onValueChange, orientation"
                        description="The root component that controls tab state."
                      />

                      <ApiRow
                        name="TabsList"
                        props="className"
                        description="Contains the tab trigger buttons."
                      />

                      <ApiRow
                        name="TabsTrigger"
                        props="value, disabled, className"
                        description="A button used to select a tab."
                      />

                      <ApiRow
                        name="TabsContent"
                        props="value, className"
                        description="Displays the content associated with a tab."
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Bottom Navigation */}
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
                href="/docs/components/badge"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">
                  Next component
                </div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">
                  Badge
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

      <td className="max-w-[320px] px-5 py-4 align-top">
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