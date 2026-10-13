"use client";
import { useLanguage } from "@/components/providers/language-provider";

import { useState } from "react";
import { MousePointer2, TextCursorInput, CreditCard, PanelsTopLeft, Table2, CalendarDays } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
const homeMyanmar = {
  "25 components": "Components ၂၅ ခု",
  "A consistent token system with light and dark modes that adapts to your brand.": "မိမိ brand နှင့် ကိုက်ညီအောင် ပြင်နိုင်သည့် Light / Dark mode နှင့် တစ်သမတ်တည်းသော design tokens များ။",
  "Accessible components": "အသုံးပြုရလွယ်သော Components",
  "Accessible · Customizable · Community-ready": "အသုံးပြုရလွယ် · စိတ်ကြိုက်ပြင်နိုင် · ပူးပေါင်းပါဝင်နိုင်",
  "An accessible button component with variants, sizes and a clean customizable API.": "ပုံစံနှင့် အရွယ်အစား ရွေးချယ်နိုင်ပြီး စိတ်ကြိုက်ပြင်ဆင်ရလွယ်သော Button component။",
  "An open-source collection of accessible, responsive components and production-ready foundations for modern web products.": "ခေတ်မီ website များအတွက် စက်အရွယ်အစားအလိုက် အဆင်ပြေပြီး လူတိုင်း အသုံးပြုရလွယ်သော UI Components နှင့် အခြေခံပုံစံများကို စုစည်းထားသည့် open-source စနစ်။",
  "Available": "အသုံးပြုနိုင်သည်",
  "Available on npm": "npm မှ ထည့်သွင်းနိုင်သည်",
  "Binhlaig UI is developed publicly. Explore the component source, review the CLI and contribute improvements on GitHub.": "Binhlaig UI ကို အများပြည်သူ လေ့လာနိုင်အောင် တည်ဆောက်ထားပါသည်။ Component source နှင့် CLI ကို လေ့လာပြီး GitHub တွင် ပိုမိုကောင်းမွန်အောင် ပူးပေါင်းပြင်ဆင်နိုင်ပါသည်။",
  "Binhlaig UI provides reusable foundations that you can inspect, install and adapt to the needs of your own product.": "Binhlaig UI ၏ အခြေခံပုံစံများကို လေ့လာ၊ ထည့်သွင်းပြီး မိမိ product အတွက် လိုအပ်သလို ပြင်ဆင်အသုံးပြုနိုင်ပါသည်။",
  "Browse components": "Components များကြည့်ရန်",
  "Build beautiful": "လှပတဲ့ UI တွေကို",
  "Built in the open": "အများပြည်သူ လေ့လာနိုင်အောင် တည်ဆောက်ထားသည်",
  "CLI source": "CLI source code",
  "Component preview": "Component နမူနာ",
  "Components": "UI Components များ",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy component command": "Component command ကူးယူရန်",
  "Copy install command": "Install command ကူးယူရန်",
  "Core components": "အဓိက Components",
  "Email address": "အီးမေးလ်လိပ်စာ",
  "Explore components": "Components များလေ့လာရန်",
  "Foundations": "အခြေခံများ",
  "Get started": "စတင်အသုံးပြုရန်",
  "Inspect the code.": "Code ကို လေ့လာပါ။",
  "Inspect the source, copy the components and customize every detail for your product.": "Source code ကို လေ့လာ၊ Components များကို ကူးယူပြီး မိမိ product အတွက် အသေးစိတ် စိတ်ကြိုက်ပြင်ဆင်နိုင်ပါသည်။",
  "Install only what you need. The component source is added directly to your project, so you retain full control over the final code.": "လိုအပ်သော Components များကိုသာ ထည့်သွင်းပါ။ Source code ကို မိမိ project ထဲသို့ တိုက်ရိုက်ထည့်ပေးသဖြင့် code ကို အပြည့်အဝ စိတ်ကြိုက်ပြင်ဆင်နိုင်ပါသည်။",
  "Light & dark": "အလင်းနှင့် အမှောင်ပုံစံ",
  "Light and dark theme tokens": "Light / Dark အပြင်အဆင် tokens များ",
  "MIT licensed": "MIT လိုင်စင်ဖြင့် အသုံးပြုနိုင်သည်",
  "Native and Shadcn installation options": "Native နှင့် Shadcn ထည့်သွင်းနည်းများ",
  "One system. Every interface.": "စနစ်တစ်ခုတည်းဖြင့် UI အမျိုးမျိုး တည်ဆောက်ပါ။",
  "Open source": "Open-source စနစ်",
  "Open source · MIT licensed": "Open source · MIT လိုင်စင်ဖြင့် အသုံးပြုနိုင်သည်",
  "Open-source UI components.": "လေ့လာပြင်ဆင်နိုင်သော UI Components များ။",
  "Open-source and ready to customize": "စိတ်ကြိုက်ပြင်ဆင်နိုင်သော Open-source စနစ်",
  "Open-source foundation": "Open-source အခြေခံစနစ်",
  "Open-source under the MIT License": "MIT လိုင်စင်ဖြင့် open-source အဖြစ် အသုံးပြုနိုင်သည်",
  "Own the result.": "မိမိလိုအပ်သလို ပြင်ဆင်ပါ။",
  "Primary action": "အဓိကလုပ်ဆောင်ချက်",
  "Primary navigation": "အဓိကလမ်းညွှန်မီနူး",
  "Reusable components designed for responsive, keyboard-friendly product interfaces.": "စက်အရွယ်အစားအလိုက် အဆင်ပြေပြီး keyboard ဖြင့်လည်း အသုံးပြုနိုင်သော Components များ။",
  "Review the implementation, report issues and contribute through GitHub.": "GitHub မှ code ကို လေ့လာ၊ ပြဿနာများ တင်ပြပြီး ပူးပေါင်းပါဝင်နိုင်ပါသည်။",
  "Secondary": "ဒုတိယလုပ်ဆောင်ချက်",
  "Serious product quality.": "အရည်အသွေးမြင့် product တည်ဆောက်ပါ။",
  "Small building blocks.": "သေးငယ်သော Components များဖြင့်",
  "Source code lives inside your project": "Source code ကို မိမိ project ထဲတွင် သိမ်းထားသည်",
  "The foundation": "အခြေခံစနစ်",
  "Theme system": "အရောင်နှင့် အပြင်အဆင်စနစ်",
  "Theme tokens": "အပြင်အဆင် tokens",
  "UI source": "UI source code",
  "View npm package": "npm package ကြည့်ရန်",
  "View source": "Source code ကြည့်ရန်",
  "interfaces, faster.": "ပိုမြန်မြန် တည်ဆောက်ပါ။",
  "npm package": "npm package"
} as const;

type HomeMessageKey = keyof typeof homeMyanmar;

function useHomeText() {
  const { language } = useLanguage();
  const t = (text: HomeMessageKey) => language === "my" ? homeMyanmar[text] : text;
  return { language, t };
}

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
const foundations: { number: string; title: HomeMessageKey; description: HomeMessageKey; meta: HomeMessageKey; accent: string }[] = [
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
  label: HomeMessageKey;
}) {
  const { t } = useHomeText();
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
      aria-label={copied ? t("Copied") : t(label)}
      title={copied ? t("Copied") : t(label)}
      onClick={copyValue}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}
const myanmarHomeStyles = `
.mm-home { --mm-bg:#f7f6f1; --mm-panel:#fff; --mm-ink:#203b32; --mm-muted:#63736b; --mm-line:#dfe5de; --mm-green:#235b47; --mm-soft:#edf2ec; --mm-gold:#946d32; --mm-button-bg:#235b47; --mm-button-ink:#fff; color-scheme:light; background:var(--mm-bg); color:var(--mm-ink); min-height:100vh; font-family:var(--font-myanmar),"Myanmar Text",sans-serif; font-size:14px; line-height:1.95; }
.dark .mm-home { --mm-bg:#121c18; --mm-panel:#192720; --mm-ink:#e4ede6; --mm-muted:#a2b6a9; --mm-line:#314439; --mm-green:#a1d0b4; --mm-soft:#22352a; --mm-gold:#d5b67f; --mm-button-bg:#2c674f; --mm-button-ink:#fff; color-scheme:dark; }
.mm-home *, .mm-home *::before, .mm-home *::after { box-sizing:border-box; }
.mm-home :is(h1,h2,h3,p) { margin:0; letter-spacing:normal; }
.mm-home a { color:inherit; text-decoration:none; }
.mm-home a:focus-visible, .mm-home button:focus-visible { outline:2px solid var(--mm-green); outline-offset:5px; }
.mm-home svg { width:18px; height:18px; flex-shrink:0; }
.mm-home .mm-wrap { width:min(1120px,100% - 64px); margin-inline:auto; }
.mm-home .mm-header { display:flex; align-items:center; justify-content:space-between; gap:24px; min-height:86px; border-bottom:1px solid var(--mm-line); }
.mm-home .mm-brand { display:flex; align-items:center; gap:12px; font-family:Arial,sans-serif; font-size:18px; font-weight:700; letter-spacing:-.4px; }
.mm-home .mm-brand img { width:32px; height:32px; }
.mm-home .mm-nav, .mm-home .mm-controls { display:flex; align-items:center; gap:24px; }
.mm-home .mm-nav { font-size:12px; color:var(--mm-muted); }
.mm-home .mm-nav a:hover, .mm-home .mm-footer a:hover { color:var(--mm-green); text-decoration:underline; text-underline-offset:6px; }
.mm-home .mm-controls { gap:12px; }
/* Theme controls share the Home palette in both modes. Only color tokens change. */
.mm-home .mm-controls button[aria-haspopup="menu"],
.mm-home .mm-controls > div > button:disabled { background:var(--mm-panel); color:var(--mm-ink); border-color:var(--mm-line); box-shadow:none; border-radius:7px; }
.mm-home .mm-controls button[aria-haspopup="menu"]:hover { color:var(--mm-green); border-color:var(--mm-green); }
.mm-home .mm-controls button[aria-haspopup="menu"]:focus-visible { outline:2px solid var(--mm-green); outline-offset:3px; box-shadow:none; }
.mm-home .mm-controls [role="menu"] { background:var(--mm-panel); color:var(--mm-ink); border-color:var(--mm-line); border-radius:9px; min-width:180px; box-shadow:0 12px 28px rgb(0 0 0 / 12%); }
.mm-home .mm-controls [role="menuitemradio"] { font-size:12px; line-height:1.9; color:var(--mm-ink); border-radius:5px; }
.mm-home .mm-controls [role="menuitemradio"]:is(:hover,:focus-visible),
.mm-home .mm-controls [role="menuitemradio"][aria-checked="true"] { background:var(--mm-soft); }
.mm-home .mm-controls [role="menuitemradio"] svg { color:var(--mm-green); }
.mm-home .language-switch button:hover { background:var(--mm-soft); }

.mm-home .language-switch { border-color:var(--mm-line); background:var(--mm-panel); }
.mm-home .language-switch button { color:var(--mm-muted); line-height:1.8; }
.mm-home .language-switch button[aria-pressed="true"], .mm-home .language-switch button[aria-pressed="true"]:hover { background:var(--mm-button-bg); color:var(--mm-button-ink); }
.mm-home .mm-hero { display:grid; grid-template-columns:1.12fr 1fr; align-items:center; gap:64px; padding-block:72px 56px; }
.mm-home .mm-kicker { display:flex; align-items:center; gap:10px; font-size:11px; color:var(--mm-gold); font-weight:600; margin-bottom:16px; }
.mm-home .mm-kicker::before { content:""; width:24px; height:1px; background:currentColor; }
.mm-home .mm-hero h1 { font-size:clamp(28px,2.65vw,36px); font-weight:600; line-height:1.9; }
.mm-home .mm-hero h1 span { display:block; color:var(--mm-green); }
.mm-home .mm-intro { margin-top:20px; max-width:460px; color:var(--mm-muted); line-height:2.1; }
.mm-home .mm-actions { display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-top:28px; }
.mm-home .mm-link-button { display:inline-flex; align-items:center; justify-content:center; gap:12px; min-height:46px; padding:10px 18px; border:1px solid var(--mm-line); border-radius:7px; background:var(--mm-panel); font-size:12px; font-weight:500; transition:background .15s; }
.mm-home .mm-link-button:hover { background:var(--mm-soft); }
.mm-home .mm-link-button.mm-solid { border-color:var(--mm-button-bg); background:var(--mm-button-bg); color:var(--mm-button-ink); }
.mm-home .mm-solid:hover { filter:brightness(.94); }
.mm-home .mm-note { display:flex; flex-wrap:wrap; gap:16px; margin-top:24px; color:var(--mm-muted); font-size:11px; }
.mm-home .mm-note span { display:inline-flex; align-items:center; gap:6px; }
.mm-home .mm-note svg { width:14px; height:14px; color:var(--mm-green); }
.mm-home .mm-install { border:1px solid var(--mm-line); border-radius:12px; background:var(--mm-panel); overflow:hidden; box-shadow:0 12px 36px rgb(20 50 35 / 4%); }
.mm-home .mm-panel-header { padding:18px 24px; border-bottom:1px solid var(--mm-line); display:flex; align-items:center; justify-content:space-between; gap:16px; }
.mm-home .mm-panel-header strong { font-size:13px; font-weight:600; }
.mm-home .mm-tag { color:var(--mm-green); background:var(--mm-soft); border-radius:4px; padding:3px 8px; font-family:Arial,sans-serif; font-size:10px; }
.mm-home .mm-install-body { padding:24px; }
.mm-home .mm-install-body > p { color:var(--mm-muted); font-size:12px; margin-bottom:18px; }
.mm-home .mm-command { display:flex; align-items:center; gap:12px; background:var(--mm-soft); border:1px solid var(--mm-line); border-radius:7px; padding:14px 12px; }
.mm-home .mm-command code { flex:1; min-width:0; overflow:auto; white-space:nowrap; font-family:ui-monospace,SFMono-Regular,Consolas,monospace; font-size:12px; line-height:1.8; }
.mm-home .mm-command button { display:grid; place-items:center; flex-shrink:0; width:36px; height:36px; background:var(--mm-panel); border:1px solid var(--mm-line); border-radius:5px; color:var(--mm-green); }
.mm-home .mm-preview { display:flex; align-items:center; justify-content:space-between; gap:16px; margin-top:24px; padding-top:22px; border-top:1px solid var(--mm-line); }
.mm-home .mm-preview p { font-size:11px; color:var(--mm-muted); }
.mm-home .mm-preview strong { display:block; font-family:Arial,sans-serif; font-size:15px; font-weight:600; }
.mm-home .mm-preview a { margin:0; }
.mm-home .mm-install-footer { display:block; background:var(--mm-soft); padding:14px 24px; color:var(--mm-green); font-size:11px; }
.mm-home .mm-install-footer:hover { text-decoration:underline; }
.mm-home .mm-benefits { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:24px; border-block:1px solid var(--mm-line); padding-block:24px; }
.mm-home .mm-benefit { display:flex; gap:12px; align-items:flex-start; }
.mm-home .mm-benefit svg { margin-top:5px; color:var(--mm-green); }
.mm-home .mm-benefit strong { font-size:12px; font-weight:600; }
.mm-home .mm-benefit p { color:var(--mm-muted); font-size:11px; margin-top:4px; }
.mm-home .mm-section { padding-block:56px; scroll-margin-top:24px; }
.mm-home .mm-section-heading { display:flex; align-items:flex-end; justify-content:space-between; gap:24px; margin-bottom:24px; }
.mm-home .mm-section-heading h2, .mm-home .mm-source h2 { font-size:23px; font-weight:600; line-height:1.9; }
.mm-home .mm-section-heading p { margin-top:8px; color:var(--mm-muted); font-size:12px; }
.mm-home .mm-text-link { display:inline-flex; align-items:center; gap:8px; font-size:12px; color:var(--mm-green); }
.mm-home .mm-text-link:hover { text-decoration:underline; }
.mm-home .mm-steps { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
.mm-home .mm-step { background:var(--mm-panel); border:1px solid var(--mm-line); padding:24px; border-radius:9px; }
.mm-home .mm-step-number { color:var(--mm-gold); font-family:Arial,sans-serif; font-size:12px; display:block; margin-bottom:18px; }
.mm-home .mm-step h3 { font-size:15px; font-weight:600; }
.mm-home .mm-step p { margin-block:10px 18px; color:var(--mm-muted); font-size:12px; }
.mm-home .mm-catalog { border-top:1px solid var(--mm-line); }
.mm-home .mm-component-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
.mm-home .mm-component { display:flex; align-items:center; gap:16px; padding:20px; background:var(--mm-panel); border:1px solid var(--mm-line); border-radius:8px; transition:border-color .15s,background .15s; }
.mm-home .mm-component:hover { background:var(--mm-soft); border-color:var(--mm-green); }
.mm-home .mm-component-icon { display:grid; place-items:center; width:40px; height:40px; flex-shrink:0; background:var(--mm-soft); color:var(--mm-green); border-radius:7px; }
.mm-home .mm-component-copy { flex:1; min-width:0; }
.mm-home .mm-component strong { display:block; font-family:Arial,sans-serif; font-size:14px; font-weight:600; }
.mm-home .mm-component p { margin-top:4px; font-size:11px; color:var(--mm-muted); }
.mm-home .mm-component > svg { width:16px; color:var(--mm-muted); }
.mm-home .mm-source { display:grid; grid-template-columns:1.3fr 1fr; gap:48px; background:var(--mm-soft); border:1px solid var(--mm-line); padding:32px; border-radius:10px; margin-bottom:48px; scroll-margin-top:24px; }
.mm-home .mm-source p { color:var(--mm-muted); font-size:12px; margin-top:12px; max-width:520px; }
.mm-home .mm-source-links { display:grid; gap:8px; align-content:center; }
.mm-home .mm-source-links a { display:flex; align-items:center; justify-content:space-between; gap:12px; background:var(--mm-panel); border:1px solid var(--mm-line); border-radius:6px; padding:12px 16px; font-size:12px; }
.mm-home .mm-source-links a:hover { border-color:var(--mm-green); }
.mm-home .mm-footer { width:min(1120px,100% - 64px); max-width:none; margin-inline:auto; padding:24px 0; display:flex; align-items:center; justify-content:space-between; gap:16px; border-top:1px solid var(--mm-line); }
.mm-home .mm-footer p { color:var(--mm-muted); font-size:11px; }
@media (max-width:1000px) { .mm-home .mm-nav { gap:14px; } .mm-home .mm-nav a:last-child { display:none; } .mm-home .mm-hero { gap:32px; } .mm-home .mm-component-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:800px) { .mm-home .mm-header { flex-wrap:wrap; gap:12px; padding-block:18px; } .mm-home .mm-nav { order:3; width:100%; justify-content:flex-start; gap:24px; } .mm-home .mm-hero { grid-template-columns:1fr; padding-block:40px; gap:32px; } .mm-home .mm-hero h1 { font-size:30px; } .mm-home .mm-intro { max-width:580px; } .mm-home .mm-steps { grid-template-columns:1fr; } .mm-home .mm-step { padding:20px; } .mm-home .mm-step-number { margin-bottom:8px; } .mm-home .mm-benefits { gap:16px; } .mm-home .mm-source { grid-template-columns:1fr; gap:24px; } }
@media (max-width:520px) { .mm-home .mm-wrap, .mm-home .mm-footer { width:calc(100% - 36px); } .mm-home .mm-brand { font-size:16px; gap:8px; } .mm-home .mm-controls { gap:6px; } .mm-home .mm-brand img { width:26px; height:26px; } .mm-home .language-switch button { padding-inline:7px; font-size:10px; } .mm-home .mm-hero h1 { font-size:26px; } .mm-home .mm-section-heading h2, .mm-home .mm-source h2 { font-size:20px; } .mm-home .mm-section-heading { align-items:flex-start; flex-direction:column; gap:12px; } .mm-home .mm-benefits, .mm-home .mm-component-grid { grid-template-columns:1fr; } .mm-home .mm-section { padding-block:36px; } .mm-home .mm-source { padding:22px; margin-bottom:32px; } .mm-home .mm-footer { align-items:flex-start; flex-direction:column; } .mm-home .mm-install-body, .mm-home .mm-panel-header { padding:18px; } .mm-home .mm-preview { flex-wrap:wrap; } }
@media (prefers-reduced-motion:reduce) { .mm-home * { transition:none!important; } }
`;

const myanmarComponents = [
  { name: "Button", slug: "button", description: "လုပ်ဆောင်ချက်များအတွက် ခလုတ်", Icon: MousePointer2 },
  { name: "Input", slug: "input", description: "စာသားနှင့် အချက်အလက် ဖြည့်သွင်းရန်", Icon: TextCursorInput },
  { name: "Card", slug: "card", description: "ဆက်စပ်အကြောင်းအရာများ စုစည်းရန်", Icon: CreditCard },
  { name: "Dialog", slug: "dialog", description: "အချက်အလက်နှင့် အတည်ပြုချက် ပြရန်", Icon: PanelsTopLeft },
  { name: "Data Table", slug: "data-table", description: "စာရင်းများကို စီစဉ်၊ ရှာဖွေကြည့်ရန်", Icon: Table2 },
  { name: "Calendar", slug: "calendar", description: "ရက်စွဲ ရွေးချယ်အသုံးပြုရန်", Icon: CalendarDays },
];

function MyanmarHome() {
  return (
    <main lang="my" className="mm-home">
      <style>{myanmarHomeStyles}</style>
      <header className="mm-header mm-wrap">
        <BrandLogo className="mm-brand"><strong>Binhlaig UI</strong></BrandLogo>
        <nav className="mm-nav" aria-label="အဓိကမီနူး">
          <a href="#my-start">စတင်အသုံးပြုနည်း</a>
          <a href="/docs/components">Components</a>
          <a href="#my-source">Source code</a>
        </nav>
        <div className="mm-controls"><LanguageSwitch /><ThemeToggle /></div>
      </header>
      <div className="mm-wrap">
        <section className="mm-hero" aria-labelledby="my-home-title">
          <div>
            <div className="mm-kicker">မိမိစိတ်ကြိုက် ပြင်ဆင်နိုင်သော UI စနစ်</div>
            <h1 id="my-home-title">သပ်ရပ်တဲ့ ဝက်ဘ်ဆိုက်တစ်ခုကို<span>ပိုလွယ်ကူစွာ တည်ဆောက်ပါ။</span></h1>
            <p className="mm-intro">React နဲ့ Next.js အတွက် အသင့်သုံး UI Components များ။ လိုအပ်တာကို ရွေးထည့်ပြီး မိမိဝက်ဘ်ဆိုက်နဲ့ ကိုက်ညီအောင် စိတ်ကြိုက်ပြင်ဆင်နိုင်ပါတယ်။</p>
            <div className="mm-actions">
              <a href="/docs/installation" className="mm-link-button mm-solid">စတင်အသုံးပြုရန်<ArrowIcon /></a>
              <a href="/docs/components" className="mm-link-button">Components ကြည့်ရန်</a>
            </div>
            <div className="mm-note"><span><CheckIcon />MIT လိုင်စင်</span><span><CheckIcon />အခမဲ့ အသုံးပြုနိုင်သည်</span><span><CheckIcon />Source code ပါဝင်သည်</span></div>
          </div>
          <div className="mm-install">
            <div className="mm-panel-header"><strong>Component တစ်ခု စမ်းထည့်ကြည့်ပါ</strong><span className="mm-tag">CLI</span></div>
            <div className="mm-install-body">
              <p>မိမိ project ရဲ့ terminal မှာ ဒီ command ကို အသုံးပြုပါ။</p>
              <div className="mm-command"><code>{INSTALL_COMMAND}</code><CopyButton value={INSTALL_COMMAND} label="Copy install command" /></div>
              <div className="mm-preview"><div><p>ထည့်သွင်းမည့် Component</p><strong>Button</strong></div><a href="/docs/components/button" className="mm-link-button mm-solid">နမူနာကြည့်ရန်<ArrowIcon /></a></div>
            </div>
            <a href="/docs/installation" className="mm-install-footer">ထည့်သွင်းနည်း အပြည့်အစုံ ဖတ်ရန် →</a>
          </div>
        </section>
        <div className="mm-benefits">
          <div className="mm-benefit"><CheckIcon /><div><strong>မိမိပိုင် Code</strong><p>Project ထဲမှာ တိုက်ရိုက်ထည့်ပြီး ပြင်နိုင်ပါတယ်။</p></div></div>
          <div className="mm-benefit"><CheckIcon /><div><strong>မျက်နှာပြင်အမျိုးမျိုးအတွက်</strong><p>ဖုန်း၊ Tablet နဲ့ ကွန်ပျူတာမှာ အသုံးပြုနိုင်ပါတယ်။</p></div></div>
          <div className="mm-benefit"><CheckIcon /><div><strong>အလင်း / အမှောင် အပြင်အဆင်</strong><p>မိမိ Brand နဲ့အညီ အရောင်ပြောင်းနိုင်ပါတယ်။</p></div></div>
        </div>
        <section className="mm-section" id="my-start" aria-labelledby="my-start-title">
          <div className="mm-section-heading"><div><h2 id="my-start-title">ဘယ်ကနေ စရမလဲ။</h2><p>အဆင့်သုံးဆင့်နဲ့ မိမိ project မှာ စတင်အသုံးပြုနိုင်ပါတယ်။</p></div><a href="/docs/installation" className="mm-text-link">လမ်းညွှန် ဖတ်ရန်<ArrowIcon /></a></div>
          <div className="mm-steps">
            <article className="mm-step"><span className="mm-step-number">01 / ပြင်ဆင်ခြင်း</span><h3>Project ကို ပြင်ဆင်ပါ</h3><p>ထည့်သွင်းနည်းလမ်းညွှန်မှာ လိုအပ်တဲ့ setup နဲ့ command တွေကို အရင်ဖတ်ပါ။</p><a href="/docs/installation" className="mm-text-link">ထည့်သွင်းနည်း<ArrowIcon /></a></article>
            <article className="mm-step"><span className="mm-step-number">02 / ရွေးချယ်ခြင်း</span><h3>လိုအပ်တဲ့ Component ကို ရွေးပါ</h3><p>Button၊ Form၊ Table စတဲ့ နမူနာတွေကို ကြည့်ပြီး လိုအပ်တာကိုသာ ထည့်ပါ။</p><a href="/docs/components" className="mm-text-link">Components စာရင်း<ArrowIcon /></a></article>
            <article className="mm-step"><span className="mm-step-number">03 / တည်ဆောက်ခြင်း</span><h3>စိတ်ကြိုက် ပြင်ဆင်သုံးပါ</h3><p>Project ထဲက source code၊ အရောင်နဲ့ ပုံစံတွေကို မိမိလိုအပ်သလို ပြင်ဆင်ပါ။</p><a href={UI_REPOSITORY} target="_blank" rel="noreferrer" className="mm-text-link">Source code<ArrowIcon /></a></article>
          </div>
        </section>
        <section className="mm-section mm-catalog" aria-labelledby="my-components-title">
          <div className="mm-section-heading"><div><h2 id="my-components-title">အသုံးများတဲ့ Components</h2><p>နမူနာ၊ အသုံးပြုနည်းနဲ့ code ကို တစ်နေရာတည်းမှာ လေ့လာပါ။</p></div><a href="/docs/components" className="mm-text-link">အားလုံးကြည့်ရန်<ArrowIcon /></a></div>
          <div className="mm-component-grid">{myanmarComponents.map(({ name, slug, description, Icon }) => <a key={slug} href={`/docs/components/${slug}`} className="mm-component"><span className="mm-component-icon"><Icon /></span><div className="mm-component-copy"><strong>{name}</strong><p>{description}</p></div><ArrowIcon /></a>)}</div>
        </section>
        <section className="mm-source" id="my-source" aria-labelledby="my-source-title">
          <div><div className="mm-kicker">OPEN SOURCE</div><h2 id="my-source-title">လေ့လာပါ။ ပြင်ဆင်ပါ။ မျှဝေပါ။</h2><p>Binhlaig UI ရဲ့ source code ကို GitHub မှာ လေ့လာနိုင်ပါတယ်။ အကြံပြုချက်တွေ၊ တွေ့ရှိတဲ့ ပြဿနာတွေကို တင်ပြပြီး ပူးပေါင်းပါဝင်နိုင်ပါတယ်။</p></div>
          <div className="mm-source-links"><a href={UI_REPOSITORY} target="_blank" rel="noreferrer"><span>UI source code</span><GitHubIcon /></a><a href={CLI_REPOSITORY} target="_blank" rel="noreferrer"><span>CLI source code</span><ArrowIcon /></a><a href={NPM_PACKAGE} target="_blank" rel="noreferrer"><span>npm package</span><ArrowIcon /></a></div>
        </section>
      </div>
      <footer className="mm-footer"><BrandLogo className="mm-brand"><strong>Binhlaig UI</strong></BrandLogo><p>MIT လိုင်စင်ဖြင့် အသုံးပြုနိုင်သည် · <a href={UI_REPOSITORY} target="_blank" rel="noreferrer">GitHub</a> · <a href={NPM_PACKAGE} target="_blank" rel="noreferrer">npm</a></p></footer>
    </main>
  );
}

export default function Home() {
  const { t, language } = useHomeText();
  if (language === "my") return <MyanmarHome />;
  return (
    <main lang={language} className="home-page">
      <header className="site-header">
        <BrandLogo className="brand">
          <span className="brand-copy">
            <strong>Binhlaig UI</strong>
          </span>
        </BrandLogo>
        <nav className="desktop-nav" aria-label={t("Primary navigation")}>
          <a href="#foundations">{t("Foundations")}</a>
          <a href="/docs/components">{t("Components")}</a>
          <a href="#open-source">{t("Open source")}</a>
          <a
            href={NPM_PACKAGE}
            target="_blank"
            rel="noreferrer"
          >
            npm
          </a>
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
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
            </span>{t("Open source · MIT licensed")}</div>
          <h1>{t("Build beautiful")}<span>{t("interfaces, faster.")}</span>
          </h1>
          <p>{t("An open-source collection of accessible, responsive components and production-ready foundations for modern web products.")}</p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/docs/components"
            >{t("Browse components")}<ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href={UI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />{t("View source")}</a>
          </div>
          <div className="hero-proof">
            <span className="proof-avatars">
              <i>Bn</i>
              <i>UI</i>
              <i>OS</i>
            </span>
            <span>
              <strong>{t("Built in the open")}</strong>{t("Accessible · Customizable · Community-ready")}</span>
          </div>
        </div>
        <div className="showcase" aria-label={t("Component preview")}>
          <div className="showcase-window">
            <div className="window-bar">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="window-title">button.tsx</span>
              <span className="window-status">{t("Open source")}</span>
            </div>
            <div className="preview-canvas">
              <div className="preview-label">{t("Component preview")}</div>
              <div className="product-card">
                <div className="product-icon">
                  <SparkIcon />
                </div>
                <span className="new-badge">{t("Available")}</span>
                <h2>Button</h2>
                <p>{t("An accessible button component with variants, sizes and a clean customizable API.")}</p>
                <div className="product-actions">
                  <a href="/docs/components/button">{t("Get started")}<ArrowIcon />
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
            </span>{t("MIT licensed")}</div>
          <div className="floating-pill pill-bottom">
            <i />{t("Available on npm")}</div>
        </div>
      </section>
      <section className="foundation-section" id="foundations">
        <div className="section-heading">
          <div>
            <span className="section-kicker">{t("The foundation")}</span>
            <h2>{t("One system. Every interface.")}</h2>
          </div>
          <p>{t("Binhlaig UI provides reusable foundations that you can inspect, install and adapt to the needs of your own product.")}</p>
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
                    <span>{t("Theme tokens")}</span>
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
                <h3>{t(item.title)}</h3>
                <p>{t(item.description)}</p>
                <span className="card-meta">{t(item.meta)}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="component-section" id="components">
        <div className="component-copy">
          <span className="section-kicker">{t("Core components")}</span>
          <h2>{t("Small building blocks.")}<br />{t("Serious product quality.")}</h2>
          <p>{t("Install only what you need. The component source is added directly to your project, so you retain full control over the final code.")}</p>
          <ul>
            <li>
              <CheckIcon />{t("Source code lives inside your project")}</li>
            <li>
              <CheckIcon />{t("Light and dark theme tokens")}</li>
            <li>
              <CheckIcon />{t("Native and Shadcn installation options")}</li>
            <li>
              <CheckIcon />{t("Open-source under the MIT License")}</li>
          </ul>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href="/docs/components"
            >{t("Explore components")}<ArrowIcon />
            </a>
            <a
              className="button button-secondary"
              href={NPM_PACKAGE}
              target="_blank"
              rel="noreferrer"
            >{t("View npm package")}</a>
          </div>
        </div>
        <div className="component-board">
          <div className="board-row">
            <span className="ui-button primary">{t("Primary action")}</span>
            <span className="ui-button neutral">{t("Secondary")}</span>
            <span className="ui-badge">
              <i />{t("Available")}</span>
          </div>
          <label className="input-demo">
            <span>{t("Email address")}</span>
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
              <strong>{t("Open-source and ready to customize")}</strong>
              <p>{t("Review the implementation, report issues and contribute through GitHub.")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="roadmap" id="open-source">
        <div>
          <span className="section-kicker">{t("Open source")}</span>
          <h2>{t("Inspect the code.")}<br />{t("Own the result.")}</h2>
          <p>{t("Binhlaig UI is developed publicly. Explore the component source, review the CLI and contribute improvements on GitHub.")}</p>
        </div>
        <div className="roadmap-steps">
          <span className="active">
            <i>1</i>
            <a
              href={UI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >{t("UI source")}</a>
          </span>
          <span>
            <i>2</i>
            <a
              href={CLI_REPOSITORY}
              target="_blank"
              rel="noreferrer"
            >{t("CLI source")}</a>
          </span>
          <span>
            <i>3</i>
            <a
              href={NPM_PACKAGE}
              target="_blank"
              rel="noreferrer"
            >{t("npm package")}</a>
          </span>
        </div>
      </section>
      <footer>
        <BrandLogo className="brand footer-brand">
          <span className="brand-copy">
            <strong>Binhlaig UI</strong>
            <small>{t("Open-source UI components.")}</small>
          </span>
        </BrandLogo>
        <p>
          {t("MIT licensed")} ·{" "}
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