"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const UI_REPOSITORY = "https://github.com/Sanlinns/project_ui";
const CLI_REPOSITORY = "https://github.com/Sanlinns/binhlaig-ui-cli";
const NPM_PACKAGE = "https://www.npmjs.com/package/binhlaig-ui";
const INSTALL_COMMAND = "npx binhlaig-ui@latest add button";

const ArrowIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M11 5l5 5-5 5" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <rect x="7" y="7" width="9" height="9" rx="2" />
    <path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M10 2l1.4 4.6L16 8l-4.6 1.4L10 14l-1.4-4.6L4 8l4.6-1.4L10 2Z" />
    <path d="M16 13l.6 1.9 1.9.6-1.9.6L16 18l-.6-1.9-1.9-.6 1.9-.6L16 13Z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4 10 4 4 8-9" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.09.63-.2.63-.44v-1.8c-2.58.56-3.12-1.1-3.12-1.1-.42-1.07-1.03-1.35-1.03-1.35-.84-.58.06-.57.06-.57.93.07 1.42.96 1.42.96.83 1.41 2.17 1 2.7.76.08-.6.32-1 .59-1.23-2.06-.23-4.22-1.03-4.22-4.57 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.18.09-2.45 0 0 .77-.25 2.54.95A8.8 8.8 0 0 1 12 7.1a8.8 8.8 0 0 1 2.32.31c1.76-1.2 2.54-.95 2.54-.95.5 1.27.18 2.22.09 2.45.59.65.95 1.48.95 2.49 0 3.55-2.17 4.33-4.23 4.56.33.29.63.85.63 1.72v2.66c0 .24.17.53.64.44A9.25 9.25 0 0 0 12 2.75Z" />
  </svg>
);

const foundations = [
  {
    number: "01",
    title: "Accessible components",
    description:
      "Reusable components designed for responsive, keyboard-friendly product interfaces.",
    meta: "25 components",
    accent: "blue",
  },
  {
    number: "02",
    title: "Theme system",
    description:
      "A consistent token system with light and dark modes that adapts to your brand.",
    meta: "Light & dark",
    accent: "violet",
  },
  {
    number: "03",
    title: "Open-source foundation",
    description:
      "Inspect the source, copy the components and customize every detail for your product.",
    meta: "MIT licensed",
    accent: "cyan",
  },
];

function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyValue = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : label}
      title={copied ? "Copied" : label}
      onClick={copyValue}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <BrandLogo className="brand">
          <span className="brand-copy">
            <strong>Binhlaig UI</strong>
          </span>
        </BrandLogo>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#foundations">Foundations</a>
          <a href="/docs/components">Components</a>
          <a href="#open-source">Open source</a>
          <a
            href={NPM_PACKAGE}
            target="_blank"
            rel="noreferrer"
          >
            npm
          </a>
        </nav>

        <div className="header-actions">
          <ThemeToggle />

          <a
            className="header-cta"
            href={UI_REPOSITORY}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="dot-grid" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span>
              <SparkIcon />
            </span>
            Open source · MIT licensed
          </div>

          <h1>
            Build beautiful
            <span>interfaces, faster.</span>
          </h1>

          <p>
            An open-source collection of accessible, responsive components and
            production-ready foundations for modern web products.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/docs/components"
            >
              Browse components
              <ArrowIcon />
            </a>

            <a
              className="button button-secondary"
              href={UI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              View source
            </a>
          </div>

          <div className="hero-proof">
            <span className="proof-avatars">
              <i>Bn</i>
              <i>UI</i>
              <i>OS</i>
            </span>

            <span>
              <strong>Built in the open</strong>
              Accessible · Customizable · Community-ready
            </span>
          </div>
        </div>

        <div className="showcase" aria-label="Component preview">
          <div className="showcase-window">
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>

              <span className="window-title">button.tsx</span>
              <span className="window-status">Open source</span>
            </div>

            <div className="preview-canvas">
              <div className="preview-label">Component preview</div>

              <div className="product-card">
                <div className="product-icon">
                  <SparkIcon />
                </div>

                <span className="new-badge">Available</span>

                <h2>Button</h2>

                <p>
                  An accessible button component with variants, sizes and a
                  clean customizable API.
                </p>

                <div className="product-actions">
                  <a href="/docs/components/button">
                    Get started
                    <ArrowIcon />
                  </a>

                  <div className="icon-button">
                    <CopyButton
                      value={INSTALL_COMMAND}
                      label="Copy component command"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="code-line">
              <code>
                <span>npx</span> binhlaig-ui@latest add button
              </code>

              <CopyButton
                value={INSTALL_COMMAND}
                label="Copy install command"
              />
            </div>
          </div>

          <div className="floating-pill pill-top">
            <span>
              <CheckIcon />
            </span>
            MIT licensed
          </div>

          <div className="floating-pill pill-bottom">
            <i />
            Available on npm
          </div>
        </div>
      </section>

      <section className="foundation-section" id="foundations">
        <div className="section-heading">
          <div>
            <span className="section-kicker">The foundation</span>
            <h2>One system. Every interface.</h2>
          </div>

          <p>
            Binhlaig UI provides reusable foundations that you can inspect,
            install and adapt to the needs of your own product.
          </p>
        </div>

        <div className="foundation-grid">
          {foundations.map((item) => (
            <article className="foundation-card" key={item.number}>
              <div className={`card-visual ${item.accent}`}>
                <span className="card-number">{item.number}</span>

                {item.number === "01" && (
                  <div className="swatches">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                )}

                {item.number === "02" && (
                  <div className="type-sample">
                    <strong>Aa</strong>
                    <span>Theme tokens</span>
                  </div>
                )}

                {item.number === "03" && (
                  <div className="mini-components">
                    <span>MIT</span>
                    <i>
                      <CheckIcon />
                    </i>
                  </div>
                )}
              </div>

              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="card-meta">{item.meta}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="component-section" id="components">
        <div className="component-copy">
          <span className="section-kicker">Core components</span>

          <h2>
            Small building blocks.
            <br />
            Serious product quality.
          </h2>

          <p>
            Install only what you need. The component source is added directly
            to your project, so you retain full control over the final code.
          </p>

          <ul>
            <li>
              <CheckIcon />
              Source code lives inside your project
            </li>
            <li>
              <CheckIcon />
              Light and dark theme tokens
            </li>
            <li>
              <CheckIcon />
              Native and Shadcn installation options
            </li>
            <li>
              <CheckIcon />
              Open-source under the MIT License
            </li>
          </ul>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/docs/components"
            >
              Explore components
              <ArrowIcon />
            </a>

            <a
              className="button button-secondary"
              href={NPM_PACKAGE}
              target="_blank"
              rel="noreferrer"
            >
              View npm package
            </a>
          </div>
        </div>

        <div className="component-board">
          <div className="board-row">
            <span className="ui-button primary">Primary action</span>
            <span className="ui-button neutral">Secondary</span>

            <span className="ui-badge">
              <i />
              Available
            </span>
          </div>

          <label className="input-demo">
            <span>Email address</span>
            <input
              type="email"
              placeholder="you@company.com"
              readOnly
            />
          </label>

          <div className="alert-demo">
            <span>
              <GitHubIcon />
            </span>

            <div>
              <strong>Open-source and ready to customize</strong>
              <p>
                Review the implementation, report issues and contribute through
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" id="open-source">
        <div>
          <span className="section-kicker">Open source</span>

          <h2>
            Inspect the code.
            <br />
            Own the result.
          </h2>

          <p>
            Binhlaig UI is developed publicly. Explore the component source,
            review the CLI and contribute improvements on GitHub.
          </p>
        </div>

        <div className="roadmap-steps">
          <span className="active">
            <i>1</i>
            <a
              href={UI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >
              UI source
            </a>
          </span>

          <span>
            <i>2</i>
            <a
              href={CLI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >
              CLI source
            </a>
          </span>

          <span>
            <i>3</i>
            <a
              href={NPM_PACKAGE}
              target="_blank"
              rel="noreferrer"
            >
              npm package
            </a>
          </span>
        </div>
      </section>

      <footer>
        <BrandLogo className="brand footer-brand">
          <span className="brand-copy">
            <strong>Binhlaig UI</strong>
            <small>Open-source UI components.</small>
          </span>
        </BrandLogo>

        <p>
          MIT licensed ·{" "}
          <a
            href={UI_REPOSITORY}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href={NPM_PACKAGE}
            target="_blank"
            rel="noreferrer"
          >
            npm
          </a>
        </p>
      </footer>
    </main>
  );
}