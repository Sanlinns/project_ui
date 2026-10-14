"use client"
import { ComponentInstallation } from "@/components/docs/component-installation";
import * as React from "react"
import { useLanguage } from "@/components/providers/language-provider"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  Info,
  Sparkles,
  Star,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
const badgeMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy install command": "Install command ကူးယူရန်",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "Displays compact labels, statuses and categories with multiple color variants and sizes.": "အမှတ်အသား၊ အခြေအနေနှင့် အမျိုးအစားများကို အရောင်နှင့် အရွယ်အစားအမျိုးမျိုးဖြင့် ကျစ်လျစ်စွာ ပြသပေးပါသည်။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI and install Badge with your preferred installer.": "Binhlaig UI ကို ကနဦးပြင်ဆင်ပြီး မိမိရွေးထားသော installer ဖြင့် Badge ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import Badge from your UI component directory.": "Badge ကို မိမိ UI component folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Use Badge to display a compact label.": "အမှတ်အသားငယ်တစ်ခု ပြသရန် Badge ကို အသုံးပြုပါ။",
  "Default": "မူလပုံစံ",
  "Variants": "ပုံစံအမျိုးမျိုး",
  "Choose a semantic color that matches the badge meaning.": "Badge ၏ အဓိပ္ပာယ်နှင့် ကိုက်ညီသော အရောင်ကို ရွေးချယ်ပါ။",
  "Secondary": "ဒုတိယပုံစံ",
  "Outline": "ဘောင်ပါပုံစံ",
  "Destructive": "ဖျက်ခြင်း",
  "Success": "အောင်မြင်",
  "Warning": "သတိပေး",
  "Info": "အသိပေး",
  "Ghost": "နောက်ခံမပါပုံစံ",
  "Sizes": "အရွယ်အစားများ",
  "Badge includes small, default and large sizes.": "Badge တွင် အသေး၊ မူလနှင့် အကြီးအရွယ်အစားများ ပါဝင်ပါသည်။",
  "Small": "အသေး",
  "Large": "အကြီး",
  "With Icons": "Icon များဖြင့် ပြသခြင်း",
  "Add a small icon before the badge label.": "Badge စာသားရှေ့တွင် icon ငယ်တစ်ခု ထည့်ပါ။",
  "New": "အသစ်",
  "Completed": "ပြီးစီး",
  "Updated": "ပြင်ဆင်ပြီး",
  "Featured": "အထူးရွေးချယ်ထားသည်",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Badge source with the latest registry version.": "Badge source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Supported Badge variants and sizes.": "Badge တွင် အသုံးပြုနိုင်သော ပုံစံနှင့် အရွယ်အစားများ။",
  "Prop": "Prop",
  "Values": "တန်ဖိုးများ",
  "Previous component": "ယခင် Component",
  "Next component": "နောက် Component",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "preview": "နမူနာ",
  "code": "Code"
};

function useBadgeText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (badgeMyanmar[text] ?? text) : text;
}

const badgeExamples = {
  "usage": {
    "en": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<Badge>Default</Badge>);\n}\n",
    "my": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<Badge>မူလပုံစံ</Badge>);\n}\n"
  },
  "variants": {
    "en": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<div className=\"flex flex-wrap justify-center gap-3\">\n                    <Badge>Default</Badge>\n                    <Badge variant=\"secondary\">Secondary</Badge>\n                    <Badge variant=\"outline\">Outline</Badge>\n                    <Badge variant=\"destructive\">Destructive</Badge>\n                    <Badge variant=\"success\">Success</Badge>\n                    <Badge variant=\"warning\">Warning</Badge>\n                    <Badge variant=\"info\">Info</Badge>\n                    <Badge variant=\"ghost\">Ghost</Badge>\n                  </div>);\n}\n",
    "my": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<div className=\"flex flex-wrap justify-center gap-3\">\n                    <Badge>မူလပုံစံ</Badge>\n                    <Badge variant=\"secondary\">ဒုတိယပုံစံ</Badge>\n                    <Badge variant=\"outline\">ဘောင်ပါပုံစံ</Badge>\n                    <Badge variant=\"destructive\">ဖျက်ခြင်း</Badge>\n                    <Badge variant=\"success\">အောင်မြင်</Badge>\n                    <Badge variant=\"warning\">သတိပေး</Badge>\n                    <Badge variant=\"info\">အသိပေး</Badge>\n                    <Badge variant=\"ghost\">နောက်ခံမပါပုံစံ</Badge>\n                  </div>);\n}\n"
  },
  "sizes": {
    "en": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<div className=\"flex items-center gap-3\">\n                    <Badge size=\"sm\">Small</Badge>\n                    <Badge size=\"default\">Default</Badge>\n                    <Badge size=\"lg\">Large</Badge>\n                  </div>);\n}\n",
    "my": "import { Badge } from \"@/components/ui/badge\";\nexport function BadgeExample() {\n    return (<div className=\"flex items-center gap-3\">\n                    <Badge size=\"sm\">အသေး</Badge>\n                    <Badge size=\"default\">မူလပုံစံ</Badge>\n                    <Badge size=\"lg\">အကြီး</Badge>\n                  </div>);\n}\n"
  },
  "icons": {
    "en": "import { Badge } from \"@/components/ui/badge\";\nimport { Sparkles, CheckCircle, Info, Star } from \"lucide-react\";\nexport function BadgeExample() {\n    return (<div className=\"flex flex-wrap justify-center gap-3\">\n                    <Badge><Sparkles />New</Badge>\n                    <Badge variant=\"success\"><CheckCircle2 />Completed</Badge>\n                    <Badge variant=\"info\"><Info />Updated</Badge>\n                    <Badge variant=\"warning\"><Star />Featured</Badge>\n                  </div>);\n}\n",
    "my": "import { Badge } from \"@/components/ui/badge\";\nimport { Sparkles, CheckCircle, Info, Star } from \"lucide-react\";\nexport function BadgeExample() {\n    return (<div className=\"flex flex-wrap justify-center gap-3\">\n                    <Badge><Sparkles />အသစ်</Badge>\n                    <Badge variant=\"success\"><CheckCircle2 />ပြီးစီး</Badge>\n                    <Badge variant=\"info\"><Info />ပြင်ဆင်ပြီး</Badge>\n                    <Badge variant=\"warning\"><Star />အထူးရွေးချယ်ထားသည်</Badge>\n                  </div>);\n}\n"
  }
};

type PreviewTab = "preview" | "code"

const importCode = `import { Badge } from "@/components/ui/badge"`

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}
function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const t = useBadgeText()
  const [tab, setTab] = React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
        <div className="flex items-center">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={t(item)}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize transition-colors",
                tab === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
              {tab === item && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label={copied ? t("Copied") : t("Copy code")}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-[240px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-6 sm:p-10">
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
  )
}
export default function BadgeDocumentationPage() {
  const t = useBadgeText()
  const { language } = useLanguage()

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="transition hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Badge</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Badge
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("Displays compact labels, statuses and categories with multiple color variants and sizes.")}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.querySelector("#usage")?.scrollIntoView({ behavior: "smooth" })
                  }
                >{t("View examples")}<ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document.querySelector("#api-reference")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Code2 className="size-4" />{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            <ComponentInstallation componentName="Badge" componentSlug="badge" />
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Badge from your UI component directory.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle id="usage" title={t("Usage")} description={t("Use Badge to display a compact label.")} />
              <div className="mt-6">
                <CodePreview code={badgeExamples["usage"][language]}>
                  <Badge>{t("Default")}</Badge>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="variants" title={t("Variants")} description={t("Choose a semantic color that matches the badge meaning.")} />
              <div className="mt-6">
                <CodePreview code={badgeExamples["variants"][language]}>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge>{t("Default")}</Badge>
                    <Badge variant="secondary">{t("Secondary")}</Badge>
                    <Badge variant="outline">{t("Outline")}</Badge>
                    <Badge variant="destructive">{t("Destructive")}</Badge>
                    <Badge variant="success">{t("Success")}</Badge>
                    <Badge variant="warning">{t("Warning")}</Badge>
                    <Badge variant="info">{t("Info")}</Badge>
                    <Badge variant="ghost">{t("Ghost")}</Badge>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="sizes" title={t("Sizes")} description={t("Badge includes small, default and large sizes.")} />
              <div className="mt-6">
                <CodePreview code={badgeExamples["sizes"][language]}>
                  <div className="flex items-center gap-3">
                    <Badge size="sm">{t("Small")}</Badge>
                    <Badge size="default">{t("Default")}</Badge>
                    <Badge size="lg">{t("Large")}</Badge>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle id="icons" title={t("With Icons")} description={t("Add a small icon before the badge label.")} />
              <div className="mt-6">
                <CodePreview code={badgeExamples["icons"][language]}>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Badge><Sparkles />{t("New")}</Badge>
                    <Badge variant="success"><CheckCircle2 />{t("Completed")}</Badge>
                    <Badge variant="info"><Info />{t("Updated")}</Badge>
                    <Badge variant="warning"><Star />{t("Featured")}</Badge>
                  </div>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle id="api-reference" title={t("API Reference")} description={t("Supported Badge variants and sizes.")} />
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[680px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Prop")}</th>
                      <th className="px-5 py-4 font-medium">{t("Values")}</th>
                      <th className="px-5 py-4 font-medium">{t("Default")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-5 py-4"><code>variant</code></td>
                      <td className="px-5 py-4 text-muted-foreground">default, secondary, outline, destructive, success, warning, info, ghost</td>
                      <td className="px-5 py-4"><code>default</code></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4"><code>size</code></td>
                      <td className="px-5 py-4 text-muted-foreground">sm, default, lg</td>
                      <td className="px-5 py-4"><code>default</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link href="/docs/components/alert-dialog" className="group rounded-2xl border border-border p-5 transition hover:border-primary/40 hover:bg-primary/5">
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Alert Dialog
                </div>
              </Link>
              <Link href="/docs/components/button" className="group rounded-2xl border border-border p-5 text-right transition hover:border-primary/40 hover:bg-primary/5">
                <div className="text-xs text-muted-foreground">{t("Next component")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  Button
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-border pl-5">
          <p className="mb-4 text-sm font-semibold">{t("On this page")}</p>
          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Variants", "#variants"],
              ["Sizes", "#sizes"],
              ["With Icons", "#icons"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="block rounded-md py-1.5 text-[13px] text-muted-foreground transition hover:text-primary">
                {t(label)}
              </a>
            ))}
          </nav>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground transition hover:text-foreground">{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}