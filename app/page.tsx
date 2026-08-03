import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

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

const foundations = [
  {
    number: "01",
    title: "Color system",
    description:
      "Deep navy, electric blue and calm neutrals create a confident software brand.",
    meta: "8 color tokens",
    accent: "blue",
  },
  {
    number: "02",
    title: "Typography",
    description:
      "Geist keeps product interfaces crisp, modern and easy to read at every size.",
    meta: "9 type styles",
    accent: "violet",
  },
  {
    number: "03",
    title: "Core components",
    description:
      "Buttons, badges, cards and inputs form the reusable base for every template.",
    meta: "4 starters",
    accent: "cyan",
  },
];

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
          <a href="/templates">Templates</a>
          <a href="#roadmap">Roadmap</a>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="header-cta" href="#components">
            Explore UI
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="dot-grid" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span><SparkIcon /></span>
            Binhlaig UI · Foundation v0.1
          </div>

          <h1>
            Build beautiful
            <span>interfaces, faster.</span>
          </h1>

          <p>
            A thoughtful collection of accessible, responsive components and
            production-ready templates for modern web products.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#components">
              Browse components
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#foundations">
              View foundations
            </a>
          </div>

          <div className="hero-proof">
            <span className="proof-avatars">
              <i>Bn</i><i>UI</i><i>+</i>
            </span>
            <span>
              <strong>Made for real products</strong>
              Responsive · Accessible · Customizable
            </span>
          </div>
        </div>

        <div className="showcase" aria-label="Component preview">
          <div className="showcase-window">
            <div className="window-bar">
              <span className="window-dots"><i /><i /><i /></span>
              <span className="window-title">component-preview.tsx</span>
              <span className="window-status">Live</span>
            </div>

            <div className="preview-canvas">
              <div className="preview-label">Interactive preview</div>
              <div className="product-card">
                <div className="product-icon"><SparkIcon /></div>
                <span className="new-badge">New</span>
                <h2>Motion Card</h2>
                <p>A polished component with subtle motion and a clean API.</p>
                <div className="product-actions">
                  <button type="button">Get started <ArrowIcon /></button>
                  <button className="icon-button" type="button" aria-label="Copy component">
                    <CopyIcon />
                  </button>
                </div>
              </div>
            </div>

            <div className="code-line">
              <code><span>npx</span> binhlaig-ui add motion-card</code>
              <button type="button" aria-label="Copy install command"><CopyIcon /></button>
            </div>
          </div>

          <div className="floating-pill pill-top">
            <span><CheckIcon /></span>
            TypeScript ready
          </div>
          <div className="floating-pill pill-bottom">
            <i />
            Dark mode included
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
            The first layer of Binhlaig UI establishes a consistent visual
            language before the component library grows.
          </p>
        </div>

        <div className="foundation-grid">
          {foundations.map((item) => (
            <article className="foundation-card" key={item.number}>
              <div className={`card-visual ${item.accent}`}>
                <span className="card-number">{item.number}</span>
                {item.number === "01" && (
                  <div className="swatches">
                    <i /><i /><i /><i />
                  </div>
                )}
                {item.number === "02" && (
                  <div className="type-sample">
                    <strong>Aa</strong>
                    <span>Geist Sans</span>
                  </div>
                )}
                {item.number === "03" && (
                  <div className="mini-components "> 
                    <span className="bg-red-600">Button</span>
                    <i><CheckIcon /></i>
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
          <h2>Small building blocks.<br />Serious product quality.</h2>
          <p>
            Every component is responsive by default, keyboard friendly and
            ready to adapt to your brand.
          </p>
          <ul>
            <li><CheckIcon /> TypeScript-first source code</li>
            <li><CheckIcon /> Light and dark theme tokens</li>
            <li><CheckIcon /> Copy, paste and customize</li>
          </ul>
        </div>

        <div className="component-board">
          <div className="board-row">
            <span className="ui-button primary">Primary action</span>
            <span className="ui-button neutral">Secondary</span>
            <span className="ui-badge"><i /> Available</span>
          </div>
          <label className="input-demo">
            <span>Email address</span>
            <input type="email" placeholder="you@company.com" readOnly />
          </label>
          <div className="alert-demo">
            <span><SparkIcon /></span>
            <div>
              <strong>Your foundation is ready</strong>
              <p>Start building the first Binhlaig component collection.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div>
          <span className="section-kicker">Next step</span>
          <h2>Foundation complete.<br />Components come next.</h2>
        </div>
        <div className="roadmap-steps">
          <span className="active"><i>1</i>Brand foundation</span>
          <span><i>2</i>Component library</span>
          <span><i>3</i>Templates &amp; registry</span>
        </div>
      </section>

      <footer>
        <BrandLogo className="brand footer-brand">
          <span className="brand-copy">
            <strong>Binhlaig UI</strong>
            <small>Build with clarity.</small>
          </span>
        </BrandLogo>
        <p>Foundation v0.1 · Designed for modern web products.</p>
      </footer>
    </main>
  );
}
