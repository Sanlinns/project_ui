"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

type Category = "All" | "POS" | "Restaurant" | "Retail" | "Fashion";
type Template = {
  id: string;
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  badges: ("Free" | "Pro" | "New" | "Popular")[];
  command: string;
  preview: "pos" | "restaurant" | "supermarket" | "fashion";
};

type IconProps = { className?: string };

const templates: Template[] = [
  {
    id: "pos-dashboard",
    title: "POS Dashboard",
    description:
      "A clear operations dashboard for daily sales, inventory and team performance.",
    category: "POS",
    badges: ["Free", "Popular"],
    command:
      "npx shadcn@latest add https://binhlaig.com/r/pos-dashboard.json",
    preview: "pos",
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS",
    description:
      "Table management, live orders and a fast checkout flow for busy restaurants.",
    category: "Restaurant",
    badges: ["Pro", "New"],
    command:
      "npx shadcn@latest add https://binhlaig.com/r/restaurant-pos.json",
    preview: "restaurant",
  },
  {
    id: "supermarket-admin",
    title: "Supermarket Admin",
    description:
      "Inventory, supplier and store analytics organized for multi-location retail.",
    category: "Retail",
    badges: ["Pro", "Popular"],
    command:
      "npx shadcn@latest add https://binhlaig.com/r/supermarket-admin.json",
    preview: "supermarket",
  },
  {
    id: "fashion-store",
    title: "Fashion Store",
    description:
      "A polished storefront with collections, product discovery and order insights.",
    category: "Fashion",
    badges: ["Free", "New"],
    command:
      "npx shadcn@latest add https://binhlaig.com/r/fashion-store.json",
    preview: "fashion",
  },
];

const categories: Category[] = [
  "All",
  "POS",
  "Restaurant",
  "Retail",
  "Fashion",
];

const SearchIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="9" cy="9" r="5.5" />
    <path d="m13 13 4 4" />
  </svg>
);

const ArrowIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const CopyIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <rect x="7" y="7" width="9" height="9" rx="2" />
    <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  </svg>
);

const CheckIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4 10 4 4 8-9" />
  </svg>
);

const CloseIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="m5 5 10 10M15 5 5 15" />
  </svg>
);

const TerminalIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4 6 4 4-4 4M10 14h6" />
  </svg>
);

function Badge({ children }: { children: Template["badges"][number] }) {
  const styles = {
    Free: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    Pro: "bg-indigo-50 text-indigo-700 ring-indigo-600/10",
    New: "bg-blue-50 text-blue-700 ring-blue-600/10",
    Popular: "bg-amber-50 text-amber-700 ring-amber-600/10",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ring-inset ${styles[children]}`}
    >
      {children}
    </span>
  );
}

function DashboardPreview({
  variant,
  expanded = false,
}: {
  variant: Template["preview"];
  expanded?: boolean;
}) {
  const config = {
    pos: {
      label: "Point of sale",
      amount: "$24,680",
      accent: "bg-blue-600",
      soft: "bg-blue-50",
      text: "text-blue-600",
      nav: ["Overview", "Sales", "Products"],
    },
    restaurant: {
      label: "Restaurant floor",
      amount: "38 orders",
      accent: "bg-indigo-600",
      soft: "bg-indigo-50",
      text: "text-indigo-600",
      nav: ["Tables", "Kitchen", "Orders"],
    },
    supermarket: {
      label: "Store overview",
      amount: "8,492 items",
      accent: "bg-cyan-600",
      soft: "bg-cyan-50",
      text: "text-cyan-700",
      nav: ["Inventory", "Stores", "Suppliers"],
    },
    fashion: {
      label: "Storefront",
      amount: "New season",
      accent: "bg-violet-600",
      soft: "bg-violet-50",
      text: "text-violet-700",
      nav: ["Shop", "Collections", "Orders"],
    },
  }[variant];

  const chart = variant === "restaurant"
    ? [34, 58, 48, 76, 67, 88, 72]
    : variant === "fashion"
      ? [28, 42, 64, 48, 78, 62, 92]
      : [38, 55, 46, 70, 61, 84, 96];

  return (
    <div
      className={`overflow-hidden bg-slate-100 dark:bg-slate-800 ${expanded ? "min-h-[320px] rounded-2xl sm:min-h-[430px]" : "h-60"}`}
    >
      <div className="flex h-full">
        <aside className="hidden w-28 shrink-0 bg-slate-950 p-3 text-white sm:block">
          <div className="flex items-center gap-2">
            <span className={`h-6 w-6 rounded-lg ${config.accent}`} />
            <span className="text-[9px] font-bold">Binhlaig</span>
          </div>
          <div className="mt-7 grid gap-2">
            {config.nav.map((item, index) => (
              <span
                className={`rounded-md px-2 py-2 text-[7px] ${index === 0 ? "bg-white/10 text-white" : "text-slate-500 dark:text-slate-400"}`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </aside>
        <div className="min-w-0 flex-1 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[7px] uppercase tracking-widest text-slate-400">
                {config.label}
              </span>
              <strong className="mt-1 block text-sm tracking-tight text-slate-900 dark:text-slate-100 sm:text-base">
                {config.amount}
              </strong>
            </div>
            <span className={`h-7 w-7 rounded-full ${config.soft}`} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Revenue", "Orders", "Growth"].map((item, index) => (
              <div className="rounded-lg bg-white dark:bg-slate-900 p-2 shadow-sm" key={item}>
                <span className="block text-[6px] text-slate-400">{item}</span>
                <strong className="mt-1 block text-[9px] text-slate-700 dark:text-slate-200">
                  {index === 0 ? "+12.4%" : index === 1 ? "1,284" : "8.2%"}
                </strong>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-[1.5fr_1fr] gap-2">
            <div className="rounded-lg bg-white dark:bg-slate-900 p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-[7px] font-semibold text-slate-600 dark:text-slate-300">
                  Weekly activity
                </span>
                <span className={`text-[6px] ${config.text}`}>Live</span>
              </div>
              <div className={`mt-3 flex items-end gap-1 ${expanded ? "h-24 sm:h-36" : "h-16"}`}>
                {chart.map((height, index) => (
                  <i
                    className={`flex-1 rounded-t-sm ${index === chart.length - 1 ? config.accent : config.soft}`}
                    key={`${variant}-${index}`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white dark:bg-slate-900 p-3 shadow-sm">
              <span className="text-[7px] font-semibold text-slate-600 dark:text-slate-300">
                Recent
              </span>
              <div className="mt-3 grid gap-2">
                {[0, 1, 2].map((item) => (
                  <span className="flex items-center gap-2" key={item}>
                    <i className={`h-4 w-4 rounded-md ${config.soft}`} />
                    <i className="h-1.5 flex-1 rounded bg-slate-100 dark:bg-slate-800" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesPage() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Template | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const filteredTemplates = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return templates.filter((template) => {
      const matchesCategory =
        category === "All" || template.category === category;
      const matchesQuery =
        !normalized ||
        `${template.title} ${template.description} ${template.category}`
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  async function copyCommand(template: Template) {
    try {
      await navigator.clipboard.writeText(template.command);
      setCopied(template.id);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <header className="sticky top-0 z-40 overflow-visible border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <BrandLogo>
            <span className="flex flex-col leading-none">
              <strong className="text-lg tracking-tight">Binhlaig</strong>
              <small className="mt-1.5 hidden text-[8px] uppercase tracking-[0.18em] text-slate-400 sm:block">
                Software &amp; IT Solutions
              </small>
            </span>
          </BrandLogo>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            <Link className="text-sm font-medium text-slate-500 dark:text-slate-400 transition hover:text-blue-600" href="/#foundations">
              Foundations
            </Link>
            <Link className="text-sm font-medium text-slate-500 dark:text-slate-400 transition hover:text-blue-600" href="/docs/components">
              Components
            </Link>
            <Link className="text-sm font-semibold text-blue-600" href="/templates" aria-current="page">
              Templates
            </Link>
            <Link className="text-sm font-medium text-slate-500 dark:text-slate-400 transition hover:text-blue-600" href="/#roadmap">
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600 dark:bg-blue-600 sm:px-4 sm:py-3"
              href="#registry"
            >
              <TerminalIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Use registry</span>
            </a>
          </div>
        </div>
        <nav className="flex justify-center gap-5 border-t border-slate-100 dark:border-slate-800 px-4 py-2 md:hidden" aria-label="Mobile navigation">
          <Link className="text-xs font-medium text-slate-500 dark:text-slate-400" href="/#foundations">Foundations</Link>
          <Link className="text-xs font-medium text-slate-500 dark:text-slate-400" href="/docs/components">Components</Link>
          <Link className="text-xs font-semibold text-blue-600" href="/templates" aria-current="page">Templates</Link>
          <Link className="text-xs font-medium text-slate-500 dark:text-slate-400" href="/#roadmap">Roadmap</Link>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-52 w-52 rounded-full bg-indigo-100/70 blur-3xl" />
        <div className="relative mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Product templates · Stage 3
          </span>
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Start with a complete product. Make it yours.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            Production-ready screens for commerce teams. Preview the flow,
            install from the registry, then customize every detail.
          </p>
          <label className="relative mx-auto mt-9 block max-w-xl text-left">
            <span className="sr-only">Search templates</span>
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4 pl-12 pr-4 text-sm shadow-xl shadow-slate-200/50 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              type="search"
              placeholder="Search POS, restaurant, retail..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="templates-title">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-600">
              Template gallery
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight" id="templates-title">
              Built for real operations
            </h2>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter templates by category">
            {categories.map((item) => (
              <button
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                  category === item
                    ? "bg-slate-950 text-white"
                    : "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:border-blue-200 hover:text-blue-600"
                }`}
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filteredTemplates.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {filteredTemplates.map((template) => (
              <article
                className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                key={template.id}
              >
                <DashboardPreview variant={template.preview} />
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                        {template.category}
                      </span>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight">
                        {template.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {template.badges.map((badge) => (
                        <Badge key={badge}>{badge}</Badge>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {template.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                    <span className="text-xs text-slate-400">Next.js · TypeScript</span>
                    <button
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"
                      type="button"
                      onClick={() => setSelected(template)}
                    >
                      Preview <ArrowIcon />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-20 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
              <SearchIcon />
            </span>
            <h3 className="mt-4 text-lg font-semibold">No templates found</h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try another search or reset the category to see every template.
            </p>
            <button
              className="mt-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs font-semibold text-blue-600 shadow-sm"
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20" id="registry" aria-labelledby="registry-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
              Component registry
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl" id="registry-title">
              Install a complete template in one command.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
              The Binhlaig registry works with the shadcn CLI, so template
              source lands directly in your project and stays yours.
            </p>
          </div>
          <ol className="grid gap-3">
            {[
              ["1", "Prepare your app", "Start with a Next.js project configured for Tailwind CSS."],
              ["2", "Run the registry command", "Choose a template and run its install command from your project root."],
              ["3", "Customize the source", "Update tokens, content and data connections for your product."],
            ].map(([step, title, copy]) => (
              <li className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5" key={step}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold">
                  {step}
                </span>
                <div>
                  <strong className="text-sm">{title}</strong>
                  <p className="mt-1 text-xs leading-5 text-slate-400">{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 border-t border-slate-200 dark:border-slate-800 px-4 py-8 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <BrandLogo>
          <span className="flex flex-col leading-none">
            <strong>Binhlaig UI</strong>
            <small className="mt-1.5 text-[9px] uppercase tracking-[0.15em] text-slate-400">
              Software &amp; IT Solutions
            </small>
          </span>
        </BrandLogo>
        <p className="text-xs text-slate-400">
          Templates &amp; Registry · Built for modern product teams.
        </p>
      </footer>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/70 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="my-auto w-full max-w-5xl rounded-3xl bg-white dark:bg-slate-900 p-4 shadow-2xl sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="template-dialog-title"
          >
            <div className="flex items-start justify-between gap-4 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-blue-600">
                  {selected.category} template
                </span>
                <h2 className="mt-1 text-2xl font-semibold tracking-tight" id="template-dialog-title">
                  {selected.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 transition hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-blue-100"
                type="button"
                aria-label={`Close ${selected.title} preview`}
                onClick={() => setSelected(null)}
              >
                <CloseIcon />
              </button>
            </div>
            <DashboardPreview variant={selected.preview} expanded />
            <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-slate-950 p-4 sm:flex-row sm:items-center">
              <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-xs text-blue-200">
                {selected.command}
              </code>
              <button
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/30"
                type="button"
                onClick={() => copyCommand(selected)}
              >
                {copied === selected.id ? <CheckIcon /> : <CopyIcon />}
                {copied === selected.id ? "Copied!" : "Copy command"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied === selected.id ? "Installation command copied" : ""}
              </span>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
