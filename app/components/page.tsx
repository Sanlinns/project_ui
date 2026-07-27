"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const componentCode = {
  button: `export function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button className={\`rounded-lg px-4 py-2 font-semibold
      \${variant === "primary"
        ? "bg-blue-600 text-white"
        : "border border-slate-200 bg-white text-slate-700"}\`}>
      {children}
    </button>
  );
}`,
  card: `export function ProductCard() {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
        New
      </span>
      <h3 className="mt-5 text-lg font-semibold">Analytics dashboard</h3>
      <p className="mt-2 text-sm text-slate-500">
        Clear insights for growing teams.
      </p>
    </article>
  );
}`,
  input: `export function Input() {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-slate-700">
        Email address
      </span>
      <input
        type="email"
        placeholder="you@company.com"
        className="rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}`,
  alert: `export function Alert() {
  return (
    <div
      className="rounded-xl border border-emerald-200 bg-emerald-50 p-4"
      role="status"
    >
      <strong className="text-sm text-slate-900">Changes saved</strong>
      <p className="mt-1 text-sm text-emerald-800">
        Your settings have been updated.
      </p>
    </div>
  );
}`,
};

type ComponentKey = keyof typeof componentCode;

type IconProps = {
  className?: string;
};

const CodeIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  >
    <path d="m7 5-5 5 5 5M13 5l5 5-5 5" />
  </svg>
);

const CopyIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  >
    <rect x="7" y="7" width="9" height="9" rx="2" />
    <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  </svg>
);

const CheckIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  >
    <path d="m4 10 4 4 8-9" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  >
    <path d="m5 5 10 10M15 5 5 15" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.7"
  >
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

function BrandMark() {
  return (
    <span
      className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 text-xl font-extrabold text-white shadow-lg shadow-blue-500/25"
      aria-hidden="true"
    >
      B
      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-blue-500 bg-cyan-300" />
    </span>
  );
}

const categories = [
  { id: "buttons", label: "Buttons", count: 4 },
  { id: "cards", label: "Cards", count: 2 },
  { id: "forms", label: "Forms", count: 2 },
  { id: "feedback", label: "Feedback", count: 2 },
];

const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200";

const codeButton =
  "inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100";

export default function ComponentsPage() {
  const [activeCode, setActiveCode] = useState<ComponentKey | null>(null);
  const [copied, setCopied] = useState<ComponentKey | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (!dialogOpen && !activeCode) return;

    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDialogOpen(false);
        setActiveCode(null);
      }
    };

    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [dialogOpen, activeCode]);

  async function copyCode(key: ComponentKey) {
    try {
      await navigator.clipboard.writeText(componentCode[key]);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1500);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            className="inline-flex items-center gap-3"
            href="/"
            aria-label="Binhlaig UI home"
          >
            <BrandMark />
            <span className="flex flex-col leading-none">
              <strong className="text-lg tracking-tight">Binhlaig</strong>
              <small className="mt-1.5 hidden text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:block">
                Software &amp; IT Solutions
              </small>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary navigation"
          >
            <Link
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              href="/#foundations"
            >
              Foundations
            </Link>
            <Link
              className="text-sm font-semibold text-blue-600"
              href="/components"
            >
              Components
            </Link>
            <Link
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              href="/templates"
            >
              Templates
            </Link>
            <Link
              className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
              href="/#roadmap"
            >
              Roadmap
            </Link>
          </nav>

          <a
            className="inline-flex items-center gap-2 rounded-xl  px-4 py-3 text-xs font-semibold text-white transition hover:bg-blue-500"
            href="#buttons"
          >
            Browse library
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-20 text-center sm:px-6 sm:py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-52 w-52 rounded-full bg-cyan-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Component library · v0.2
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Beautiful building blocks.
            <br />
            Ready for your next product.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            Accessible React components with clean TypeScript source. Preview,
            copy and customize every detail.
          </p>

          <div className="mt-10 flex justify-center divide-x divide-slate-200">
            {[
              ["10", "components"],
              ["4", "categories"],
              ["100%", "responsive"],
            ].map(([value, label]) => (
              <span
                className="flex min-w-24 flex-col px-4 sm:min-w-36 sm:px-7"
                key={label}
              >
                <strong className="text-xl font-bold tracking-tight text-slate-950">
                  {value}
                </strong>
                <small className="mt-1 text-[9px] uppercase tracking-[0.14em] text-slate-400">
                  {label}
                </small>
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 lg:px-8 lg:py-20">
        <aside className="top-24 z-20 self-start overflow-x-auto bg-slate-50 lg:sticky lg:overflow-visible">
          <span className="hidden px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 lg:block">
            Components
          </span>

          <nav
            className="flex min-w-max gap-1 py-2 lg:mt-2 lg:grid lg:min-w-0"
            aria-label="Component categories"
          >
            {categories.map((category) => (
              <a
                className="flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                href={`#${category.id}`}
                key={category.id}
              >
                <span>{category.label}</span>
                <i className="flex h-6 min-w-6 items-center justify-center rounded-md bg-slate-200 px-1.5 text-[10px] not-italic text-slate-500">
                  {category.count}
                </i>
              </a>
            ))}
          </nav>

          <div className="relative mt-7 hidden overflow-hidden rounded-2xl bg-slate-950 p-5 text-white lg:block">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-600/60 blur-2xl" />
            <CodeIcon className="relative h-5 w-5 text-blue-400" />
            <strong className="relative mt-4 block text-sm">
              Built for Next.js
            </strong>
            <p className="relative mt-2 text-xs leading-5 text-slate-400">
              TypeScript and Tailwind-friendly component source.
            </p>
          </div>
        </aside>

        <div className="grid min-w-0 gap-20">
          <section className="scroll-mt-28" id="buttons">
            <SectionHeader
              eyebrow="01 · Actions"
              title="Buttons"
              description="Clear actions for every level of emphasis."
              onCode={() => setActiveCode("button")}
            />

            <PreviewPanel className="flex-col sm:flex-row">
              <button className={primaryButton}>
                Get started <ArrowIcon />
              </button>
              <button className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600">
                Learn more
              </button>
              <button className="rounded-xl px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">
                Cancel
              </button>
              <button
                className="cursor-not-allowed rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-400"
                disabled
              >
                Disabled
              </button>
            </PreviewPanel>
          </section>

          <section className="scroll-mt-28" id="cards">
            <SectionHeader
              eyebrow="02 · Surfaces"
              title="Cards"
              description="Flexible containers for product content and data."
              onCode={() => setActiveCode("card")}
            />

            <PreviewPanel className="grid-cols-1 md:grid-cols-2">
              <article className="relative w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <CodeIcon />
                </span>
                <span className="absolute right-5 top-5 rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700">
                  New
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  Analytics dashboard
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Clear insights and real-time metrics for growing teams.
                </p>
                <button className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-600">
                  View dashboard <ArrowIcon />
                </button>
              </article>

              <article className="relative min-h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
                <span className="text-xs text-slate-500">Monthly revenue</span>
                <strong className="mt-2 block text-3xl tracking-tight">
                  ¥1,248,000
                </strong>
                <small className="mt-2 block text-xs font-medium text-emerald-600">
                  ↗ 12.8% from last month
                </small>
                <div className="absolute bottom-6 left-6 right-6 flex h-20 items-end gap-2">
                  {[35, 52, 43, 72, 62, 88, 100].map((height, index) => (
                    <i
                      className={`flex-1 rounded-t-md ${
                        index === 6 ? "bg-blue-500" : "bg-blue-100"
                      }`}
                      key={height}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </article>
            </PreviewPanel>
          </section>

          <section className="scroll-mt-28" id="forms">
            <SectionHeader
              eyebrow="03 · Forms"
              title="Input fields"
              description="Thoughtful fields with labels, hints and clear states."
              onCode={() => setActiveCode("input")}
            />

            <PreviewPanel className="grid-cols-1 items-start md:grid-cols-2">
              <label className="flex w-full flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Email address
                </span>
                <input
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  type="email"
                  placeholder="you@company.com"
                />
                <small className="text-xs text-slate-400">
                  We will never share your email.
                </small>
              </label>

              <label className="flex w-full flex-col gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Company
                </span>
                <input
                  className="rounded-xl border border-emerald-300 bg-white px-4 py-3 text-sm outline-none ring-4 ring-emerald-50"
                  type="text"
                  value="Binhlaig"
                  readOnly
                />
                <small className="flex items-center gap-1 text-xs font-medium text-emerald-600">
                  <CheckIcon className="h-4 w-4" /> Looks good
                </small>
              </label>
            </PreviewPanel>
          </section>

          <section className="scroll-mt-28" id="feedback">
            <SectionHeader
              eyebrow="04 · Feedback"
              title="Alerts & Dialog"
              description="Communicate important updates without getting in the way."
              onCode={() => setActiveCode("alert")}
            />

            <PreviewPanel className="flex-col">
              <div
                className="flex w-full max-w-lg items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4"
                role="status"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-emerald-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <strong className="block text-sm">Changes saved</strong>
                  <p className="mt-1 text-xs text-emerald-800">
                    Your profile settings have been updated successfully.
                  </p>
                </div>
              </div>

              <button
                className={primaryButton}
                onClick={() => setDialogOpen(true)}
              >
                Open dialog
              </button>
            </PreviewPanel>
          </section>
        </div>
      </div>

      <section className="mx-auto mb-20 flex max-w-6xl flex-col items-start justify-between gap-7 overflow-hidden rounded-3xl bg-slate-950 px-7 py-10 text-white sm:px-12 lg:flex-row lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
            Foundation + components
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to build templates.
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            The core library is prepared for dashboards, POS systems and
            landing pages.
          </p>
        </div>
        <Link
          className="inline-flex items-center gap-2 rounded-xl  px-5 py-3 text-sm font-semibold text-slate-950"
          href="/#roadmap"
        >
          See the roadmap <ArrowIcon />
        </Link>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 border-t border-slate-200 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <Link className="inline-flex items-center gap-3" href="/">
          <BrandMark />
          <span className="flex flex-col leading-none">
            <strong>Binhlaig UI</strong>
            <small className="mt-1.5 text-[9px] uppercase tracking-[0.15em] text-slate-400">
              Build with clarity.
            </small>
          </span>
        </Link>
        <p className="text-xs text-slate-400">
          Component library v0.2 · Designed for modern web products.
        </p>
      </footer>

      {activeCode && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/60 backdrop-blur-sm"
          role="presentation"
          onMouseDown={() => setActiveCode(null)}
        >
          <section
            className="flex h-full w-full max-w-xl flex-col bg-slate-900 p-6 text-white shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="code-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
                  Component source
                </span>
                <h2 className="mt-1 text-xl font-semibold" id="code-title">
                  {activeCode}.tsx
                </h2>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-slate-300 transition hover:bg-slate-700 hover:text-white"
                onClick={() => setActiveCode(null)}
                aria-label="Close source code"
              >
                <CloseIcon />
              </button>
            </div>

            <pre className="my-7 flex-1 overflow-auto whitespace-pre-wrap rounded-2xl border border-slate-700 bg-slate-950 p-5 text-xs leading-7 text-blue-200">
              <code>{componentCode[activeCode]}</code>
            </pre>

            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              onClick={() => copyCode(activeCode)}
            >
              {copied === activeCode ? <CheckIcon /> : <CopyIcon />}
              {copied === activeCode ? "Copied" : "Copy component"}
            </button>
          </section>
        </div>
      )}

      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-5 backdrop-blur-sm"
          onMouseDown={() => setDialogOpen(false)}
        >
          <section
            className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-dialog-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition hover:bg-slate-200"
              onClick={() => setDialogOpen(false)}
              aria-label="Close dialog"
            >
              <CloseIcon />
            </button>

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckIcon />
            </span>
            <h2
              className="mt-5 text-2xl font-semibold tracking-tight"
              id="demo-dialog-title"
            >
              Project created
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Your Binhlaig UI workspace is ready. Start adding components to
              build your product.
            </p>
            <button
              className={`${primaryButton} mt-6 w-full`}
              onClick={() => setDialogOpen(false)}
            >
              Continue building <ArrowIcon />
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  onCode,
}: {
  eyebrow: string;
  title: string;
  description: string;
  onCode: () => void;
}) {
  return (
    <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
          {eyebrow}
        </span>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-slate-500">{description}</p>
      </div>
      <button className={codeButton} onClick={onCode}>
        <CodeIcon className="h-4 w-4" /> View code
      </button>
    </div>
  );
}

function PreviewPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid min-h-64 place-items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 ${className}`}
    >
      {children}
    </div>
  );
}
