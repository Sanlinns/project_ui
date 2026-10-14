"use client";
import { ComponentInstallation } from "@/components/docs/component-installation";
import React, { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clipboard, Code2, ExternalLink, Plus, Search, Sparkles, Terminal, Trash2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
const buttonMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "Accessible action buttons with variants, sizes, icons, loading states and full-width support.": "ပုံစံ၊ အရွယ်အစား၊ icon၊ loading state နှင့် အကျယ်အပြည့်ပုံစံတို့ကို အသုံးပြုနိုင်သော လုပ်ဆောင်ချက်ခလုတ်များ။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install Button with Native Beta or Shadcn Stable.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး Native Beta သို့မဟုတ် Shadcn Stable ဖြင့် Button ကို ထည့်သွင်းပါ။",
  "Initialize your project first": "Project ကို အရင် ကနဦးပြင်ဆင်ပါ",
  "Native initialization creates": "Native ကနဦးပြင်ဆင်မှုက",
  ", the UI directory, required CSS and dependencies.": "၊ UI folder၊ လိုအပ်သော CSS နှင့် dependencies များကို ဖန်တီးပေးပါသည်။",
  "Import": "Import လုပ်ခြင်း",
  "Import Button from your project UI directory.": "Button ကို မိမိ project ၏ UI folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Use the default button for a primary action.": "အဓိကလုပ်ဆောင်ချက်အတွက် မူလ Button ပုံစံကို အသုံးပြုပါ။",
  "Get Started": "စတင်အသုံးပြုရန်",
  "Variants": "ပုံစံအမျိုးမျိုး",
  "Choose a visual style that matches action priority and meaning.": "လုပ်ဆောင်ချက်၏ ဦးစားပေးမှုနှင့် အဓိပ္ပာယ်ကိုက်ညီသော ပုံစံကို ရွေးချယ်ပါ။",
  "Default": "မူလပုံစံ",
  "Secondary": "ဒုတိယပုံစံ",
  "Outline": "ဘောင်ပါပုံစံ",
  "Ghost": "နောက်ခံမပါပုံစံ",
  "Danger": "ဖျက်ခြင်း",
  "Success": "အောင်မြင်",
  "Warning": "သတိပေး",
  "Link": "လင့်ခ်",
  "Sizes": "အရွယ်အစားများ",
  "Use small, medium, large and extra-large button sizes.": "Button ကို အသေး၊ အလတ်၊ အကြီးနှင့် အထူးအကြီး အရွယ်အစားများဖြင့် အသုံးပြုနိုင်ပါသည်။",
  "Small": "အသေး",
  "Medium": "အလတ်",
  "Large": "အကြီး",
  "Extra Large": "အထူးအကြီး",
  "Border Radius": "ထောင့်ဝိုင်းပုံစံ",
  "Control the corner radius independently from size.": "အရွယ်အစားနှင့် သီးခြား ထောင့်ဝိုင်းပုံစံကို သတ်မှတ်နိုင်ပါသည်။",
  "None": "ထောင့်မဝိုင်း",
  "Full": "အပြည့်ဝိုင်း",
  "With Icons": "Icon များဖြင့် ပြသခြင်း",
  "Place an icon before or after the label.": "စာသားရှေ့ သို့မဟုတ် နောက်တွင် icon ထည့်ပါ။",
  "Add Product": "ကုန်ပစ္စည်း ထည့်ရန်",
  "Add Member": "အဖွဲ့ဝင် ထည့်ရန်",
  "Continue": "ဆက်လုပ်ရန်",
  "Icon Only": "Icon သီးသန့်",
  "Use accessible labels for compact icon-only actions.": "Icon သီးသန့်ခလုတ်များတွင် screen reader ဖတ်နိုင်သော label ထည့်ပါ။",
  "Search": "ရှာရန်",
  "Add": "ထည့်ရန်",
  "Next": "နောက်သို့",
  "Delete": "ဖျက်ရန်",
  "Loading State": "လုပ်ဆောင်နေသော အခြေအနေ",
  "Disable interaction and show progress while an action runs.": "လုပ်ဆောင်နေစဉ် ခလုတ်ကို ပိတ်ထားပြီး တိုးတက်မှုအခြေအနေကို ပြသပါ။",
  "Loading...": "ရယူနေပါသည်…",
  "Load Data": "အချက်အလက် ရယူရန်",
  "Saving...": "သိမ်းဆည်းနေပါသည်…",
  "Save": "သိမ်းရန်",
  "Uploading...": "တင်နေပါသည်…",
  "Upload": "ဖိုင်တင်ရန်",
  "Full Width": "အကျယ်အပြည့်",
  "Fill the available width of the parent container.": "မိခင် container ၏ အကျယ်အပြည့်ကို အသုံးပြုပါ။",
  "Create Account": "အကောင့် ဖန်တီးရန်",
  "Disabled State": "အသုံးမပြုနိုင်သော အခြေအနေ",
  "Prevent interaction and communicate unavailable actions.": "မရရှိနိုင်သေးသော လုပ်ဆောင်ချက်အတွက် ခလုတ်ကို ပိတ်ထားပါ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an existing local Button file with the latest registry version.": "လက်ရှိ Button ဖိုင်ကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Back up custom changes first": "မိမိပြင်ထားသော code ကို အရင် backup ယူပါ",
  "The overwrite option replaces your current component source file.": "Overwrite option က လက်ရှိ Component source ဖိုင်ကို အစားထိုးပါသည်။",
  "API Reference": "API အသုံးပြုနည်း",
  "Properties available on the Binhlaig UI Button component.": "Binhlaig UI Button component တွင် အသုံးပြုနိုင်သော properties များ။",
  "Prop": "Prop",
  "Type": "အမျိုးအစား",
  "Description": "ရှင်းလင်းချက်",
  "Controls the visual style.": "ခလုတ်၏ ပုံစံကို သတ်မှတ်ပါသည်။",
  "Controls dimensions and typography.": "အရွယ်အစားနှင့် စာလုံးပုံစံကို သတ်မှတ်ပါသည်။",
  "Controls corner radius.": "ထောင့်ဝိုင်းပုံစံကို သတ်မှတ်ပါသည်။",
  "Fills the parent width.": "မိခင် container ၏ အကျယ်အပြည့်ကို ယူပါသည်။",
  "Shows progress and disables interaction.": "လုပ်ဆောင်နေကြောင်း ပြပြီး ခလုတ်ကို ပိတ်ထားပါသည်။",
  "Label displayed while loading.": "Loading အချိန်တွင် ပြသသော စာသား။",
  "Icon before the label.": "စာသားရှေ့တွင် ပြသသော icon။",
  "Icon after the label.": "စာသားနောက်တွင် ပြသသော icon။",
  "Prevents interaction.": "ခလုတ်ကို အသုံးပြု၍ မရအောင် ပိတ်ထားပါသည်။",
  "Adds custom classes.": "စိတ်ကြိုက် CSS classes ထည့်ပါသည်။",
  "Content inside the button.": "ခလုတ်အတွင်း ပြသသော အကြောင်းအရာ။",
  "Previous component": "ယခင် Component",
  "Next component": "နောက် Component",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "preview": "နမူနာ",
  "code": "Code"
};

function useButtonText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (buttonMyanmar[text] ?? text) : text;
}

const buttonExamples = {
  "usage": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<Button>Get Started</Button>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<Button>စတင်အသုံးပြုရန်</Button>);\n}\n"
  },
  "variants": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button variant=\"default\">Default</Button>\n                    <Button variant=\"secondary\">Secondary</Button>\n                    <Button variant=\"outline\">Outline</Button>\n                    <Button variant=\"ghost\">Ghost</Button>\n                    <Button variant=\"danger\">Danger</Button>\n                    <Button variant=\"success\">Success</Button>\n                    <Button variant=\"warning\">Warning</Button>\n                    <Button variant=\"link\">Link</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button variant=\"default\">မူလပုံစံ</Button>\n                    <Button variant=\"secondary\">ဒုတိယပုံစံ</Button>\n                    <Button variant=\"outline\">ဘောင်ပါပုံစံ</Button>\n                    <Button variant=\"ghost\">နောက်ခံမပါပုံစံ</Button>\n                    <Button variant=\"danger\">ဖျက်ခြင်း</Button>\n                    <Button variant=\"success\">အောင်မြင်</Button>\n                    <Button variant=\"warning\">သတိပေး</Button>\n                    <Button variant=\"link\">လင့်ခ်</Button>\n                  </div>);\n}\n"
  },
  "sizes": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button size=\"sm\">Small</Button>\n                    <Button size=\"md\">Medium</Button>\n                    <Button size=\"lg\">Large</Button>\n                    <Button size=\"xl\">Extra Large</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button size=\"sm\">အသေး</Button>\n                    <Button size=\"md\">အလတ်</Button>\n                    <Button size=\"lg\">အကြီး</Button>\n                    <Button size=\"xl\">အထူးအကြီး</Button>\n                  </div>);\n}\n"
  },
  "radius": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button radius=\"none\">None</Button>\n                    <Button radius=\"sm\">Small</Button>\n                    <Button radius=\"md\">Medium</Button>\n                    <Button radius=\"lg\">Large</Button>\n                    <Button radius=\"full\">Full</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button radius=\"none\">ထောင့်မဝိုင်း</Button>\n                    <Button radius=\"sm\">အသေး</Button>\n                    <Button radius=\"md\">အလတ်</Button>\n                    <Button radius=\"lg\">အကြီး</Button>\n                    <Button radius=\"full\">အပြည့်ဝိုင်း</Button>\n                  </div>);\n}\n"
  },
  "with-icons": {
    "en": "import { Button } from \"@/components/ui/button\";\nimport { Plus, UserPlus, ArrowRight } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button leftIcon={<Plus />}>Add Product</Button>\n                    <Button variant=\"secondary\" leftIcon={<UserPlus />}>Add Member</Button>\n                    <Button variant=\"outline\" rightIcon={<ArrowRight />}>Continue</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nimport { Plus, UserPlus, ArrowRight } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button leftIcon={<Plus />}>ကုန်ပစ္စည်း ထည့်ရန်</Button>\n                    <Button variant=\"secondary\" leftIcon={<UserPlus />}>အဖွဲ့ဝင် ထည့်ရန်</Button>\n                    <Button variant=\"outline\" rightIcon={<ArrowRight />}>ဆက်လုပ်ရန်</Button>\n                  </div>);\n}\n"
  },
  "icon-only": {
    "en": "import { Button } from \"@/components/ui/button\";\nimport { Search, Plus, ArrowRight, Trash } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"flex items-center justify-center gap-3\">\n                    <Button size=\"icon\" aria-label=\"Search\"><Search /></Button>\n                    <Button size=\"icon\" variant=\"secondary\" aria-label=\"Add\"><Plus /></Button>\n                    <Button size=\"icon\" variant=\"outline\" aria-label=\"Next\"><ArrowRight /></Button>\n                    <Button size=\"icon\" variant=\"danger\" aria-label=\"Delete\"><Trash2 /></Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nimport { Search, Plus, ArrowRight, Trash } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"flex items-center justify-center gap-3\">\n                    <Button size=\"icon\" aria-label=\"ရှာရန်\"><Search /></Button>\n                    <Button size=\"icon\" variant=\"secondary\" aria-label=\"ထည့်ရန်\"><Plus /></Button>\n                    <Button size=\"icon\" variant=\"outline\" aria-label=\"နောက်သို့\"><ArrowRight /></Button>\n                    <Button size=\"icon\" variant=\"danger\" aria-label=\"ဖျက်ရန်\"><Trash2 /></Button>\n                  </div>);\n}\n"
  },
  "loading": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button loading loadingText=\"Loading...\">Load Data</Button>\n                    <Button variant=\"secondary\" loading loadingText=\"Saving...\">Save</Button>\n                    <Button variant=\"outline\" loading loadingText=\"Uploading...\">Upload</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button loading loadingText=\"ရယူနေပါသည်…\">အချက်အလက် ရယူရန်</Button>\n                    <Button variant=\"secondary\" loading loadingText=\"သိမ်းဆည်းနေပါသည်…\">သိမ်းရန်</Button>\n                    <Button variant=\"outline\" loading loadingText=\"တင်နေပါသည်…\">ဖိုင်တင်ရန်</Button>\n                  </div>);\n}\n"
  },
  "full-width": {
    "en": "import { Button } from \"@/components/ui/button\";\nimport { ArrowRight } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"mx-auto w-full max-w-xl\">\n                    <Button fullWidth rightIcon={<ArrowRight />}>Create Account</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nimport { ArrowRight } from \"lucide-react\";\nexport function ButtonExample() {\n    return (<div className=\"mx-auto w-full max-w-xl\">\n                    <Button fullWidth rightIcon={<ArrowRight />}>အကောင့် ဖန်တီးရန်</Button>\n                  </div>);\n}\n"
  },
  "disabled": {
    "en": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button disabled>Default</Button>\n                    <Button variant=\"secondary\" disabled>Secondary</Button>\n                    <Button variant=\"outline\" disabled>Outline</Button>\n                    <Button variant=\"danger\" disabled>Danger</Button>\n                  </div>);\n}\n",
    "my": "import { Button } from \"@/components/ui/button\";\nexport function ButtonExample() {\n    return (<div className=\"flex flex-wrap items-center justify-center gap-3\">\n                    <Button disabled>မူလပုံစံ</Button>\n                    <Button variant=\"secondary\" disabled>ဒုတိယပုံစံ</Button>\n                    <Button variant=\"outline\" disabled>ဘောင်ပါပုံစံ</Button>\n                    <Button variant=\"danger\" disabled>ဖျက်ခြင်း</Button>\n                  </div>);\n}\n"
  }
};

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const importCode = `import { Button } from "@/components/ui/button";`;

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
  ["API Reference", "#api-reference"],
];
function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}
function CopyButton({ value, label }: { value: string; label: string }) {
  const t = useButtonText();
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
      aria-label={t(label)}
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
 const t = useButtonText();
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Terminal className="size-3.5" />
          {title}
        </div>
        <CopyButton value={code} label={`${t("Copy code")}: ${title}`} />
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
function CodePreview({ children, code, className }: CodePreviewProps) {
  const t = useButtonText();
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
          aria-label={t("Copy code")}
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
  const t = useButtonText()
  const { language } = useLanguage()

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/docs/components" className="transition hover:text-slate-950 dark:hover:text-white">{t("Components")}</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-300">Button</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">
                Button
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Accessible action buttons with variants, sizes, icons, loading states and full-width support.")}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  rightIcon={<ArrowRight />}
                  onClick={() => document.querySelector("#usage")?.scrollIntoView({ behavior: "smooth" })}
                >{t("View examples")}</Button>
                <Button
                  variant="outline"
                  leftIcon={<Code2 />}
                  onClick={() => document.querySelector("#api-reference")?.scrollIntoView({ behavior: "smooth" })}
                >{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            <ComponentInstallation componentName="Button" componentSlug="button" />
            <section>
              <SectionTitle id="import" title={t("Import")} description={t("Import Button from your project UI directory.")} />
              <div className="mt-6"><TerminalBlock code={importCode} title="TypeScript" /></div>
            </section>
            <section>
              <SectionTitle id="usage" title={t("Usage")} description={t("Use the default button for a primary action.")} />
              <div className="mt-6"><CodePreview code={buttonExamples["usage"][language]}><Button>{t("Get Started")}</Button></CodePreview></div>
            </section>
            <section>
              <SectionTitle id="variants" title={t("Variants")} description={t("Choose a visual style that matches action priority and meaning.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["variants"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button variant="default">{t("Default")}</Button>
                    <Button variant="secondary">{t("Secondary")}</Button>
                    <Button variant="outline">{t("Outline")}</Button>
                    <Button variant="ghost">{t("Ghost")}</Button>
                    <Button variant="danger">{t("Danger")}</Button>
                    <Button variant="success">{t("Success")}</Button>
                    <Button variant="warning">{t("Warning")}</Button>
                    <Button variant="link">{t("Link")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="sizes" title={t("Sizes")} description={t("Use small, medium, large and extra-large button sizes.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["sizes"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button size="sm">{t("Small")}</Button>
                    <Button size="md">{t("Medium")}</Button>
                    <Button size="lg">{t("Large")}</Button>
                    <Button size="xl">{t("Extra Large")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="radius" title={t("Border Radius")} description={t("Control the corner radius independently from size.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["radius"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button radius="none">{t("None")}</Button>
                    <Button radius="sm">{t("Small")}</Button>
                    <Button radius="md">{t("Medium")}</Button>
                    <Button radius="lg">{t("Large")}</Button>
                    <Button radius="full">{t("Full")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="with-icons" title={t("With Icons")} description={t("Place an icon before or after the label.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["with-icons"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button leftIcon={<Plus />}>{t("Add Product")}</Button>
                    <Button variant="secondary" leftIcon={<UserPlus />}>{t("Add Member")}</Button>
                    <Button variant="outline" rightIcon={<ArrowRight />}>{t("Continue")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="icon-only" title={t("Icon Only")} description={t("Use accessible labels for compact icon-only actions.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["icon-only"][language]}>
                  <div className="flex items-center justify-center gap-3">
                    <Button size="icon" aria-label={t("Search")}><Search /></Button>
                    <Button size="icon" variant="secondary" aria-label={t("Add")}><Plus /></Button>
                    <Button size="icon" variant="outline" aria-label={t("Next")}><ArrowRight /></Button>
                    <Button size="icon" variant="danger" aria-label={t("Delete")}><Trash2 /></Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="loading" title={t("Loading State")} description={t("Disable interaction and show progress while an action runs.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["loading"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button loading loadingText={t("Loading...")}>{t("Load Data")}</Button>
                    <Button variant="secondary" loading loadingText={t("Saving...")}>{t("Save")}</Button>
                    <Button variant="outline" loading loadingText={t("Uploading...")}>{t("Upload")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="full-width" title={t("Full Width")} description={t("Fill the available width of the parent container.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["full-width"][language]} className="justify-stretch">
                  <div className="mx-auto w-full max-w-xl">
                    <Button fullWidth rightIcon={<ArrowRight />}>{t("Create Account")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="disabled" title={t("Disabled State")} description={t("Prevent interaction and communicate unavailable actions.")} />
              <div className="mt-6">
                <CodePreview code={buttonExamples["disabled"][language]}>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button disabled>{t("Default")}</Button>
                    <Button variant="secondary" disabled>{t("Secondary")}</Button>
                    <Button variant="outline" disabled>{t("Outline")}</Button>
                    <Button variant="danger" disabled>{t("Danger")}</Button>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="api-reference" title={t("API Reference")} description={t("Properties available on the Binhlaig UI Button component.")} />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">{t("Prop")}</th>
                        <th className="px-5 py-4 font-medium">{t("Type")}</th>
                        <th className="px-5 py-4 font-medium">{t("Default")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow name="variant" type='"default" | "secondary" | "outline" | "ghost" | "danger" | "destructive" | "success" | "warning" | "link"' defaultValue='"default"' description={t("Controls the visual style.")} />
                      <ApiRow name="size" type='"sm" | "md" | "default" | "lg" | "xl" | "icon" | "iconSm" | "iconLg"' defaultValue='"md"' description={t("Controls dimensions and typography.")} />
                      <ApiRow name="radius" type='"none" | "sm" | "md" | "lg" | "full"' defaultValue='"lg"' description={t("Controls corner radius.")} />
                      <ApiRow name="fullWidth" type="boolean" defaultValue="false" description={t("Fills the parent width.")} />
                      <ApiRow name="loading" type="boolean" defaultValue="false" description={t("Shows progress and disables interaction.")} />
                      <ApiRow name="loadingText" type="string" defaultValue="—" description={t("Label displayed while loading.")} />
                      <ApiRow name="leftIcon" type="React.ReactNode" defaultValue="—" description={t("Icon before the label.")} />
                      <ApiRow name="rightIcon" type="React.ReactNode" defaultValue="—" description={t("Icon after the label.")} />
                      <ApiRow name="disabled" type="boolean" defaultValue="false" description={t("Prevents interaction.")} />
                      <ApiRow name="className" type="string" defaultValue="—" description={t("Adds custom classes.")} />
                      <ApiRow name="children" type="React.ReactNode" defaultValue="—" description={t("Content inside the button.")} />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link href="/docs/components/breadcrumb" className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5">
                <div className="text-xs text-slate-500">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white"><ArrowLeft className="size-4" />Breadcrumb</div>
              </Link>
              <Link href="/docs/components/calendar" className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5">
                <div className="text-xs text-slate-500">{t("Next component")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">Calendar<ArrowRight className="size-4" /></div>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
          <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">{t("On this page")}</p>
          <nav className="space-y-1">
            {tableOfContents.map(([label, href]) => (
              <a key={href} href={href} className="block rounded-md py-1.5 text-[13px] text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-400">
                {label}
              </a>
            ))}
          </nav>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 transition hover:text-slate-950 dark:border-slate-800 dark:hover:text-white">{t("Edit this page")}<ExternalLink className="size-3.5" />
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