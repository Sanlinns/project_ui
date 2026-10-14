"use client"
import { ComponentInstallation } from "@/components/docs/component-installation";
import * as React from "react"
import { useLanguage } from "@/components/providers/language-provider"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Clipboard, Code2, ExternalLink, Home, Slash, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
const breadcrumbMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copy install command": "Install command ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A navigation trail that shows the current page location and its hierarchy.": "လက်ရှိစာမျက်နှာ၏ တည်နေရာနှင့် အဆင့်ဆင့်လမ်းကြောင်းကို ပြသသော လမ်းညွှန်မီနူး။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install Breadcrumb using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Breadcrumb ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import Breadcrumb primitives from your UI directory.": "Breadcrumb ၏ အခြေခံ Components များကို မိမိ UI folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Use BreadcrumbPage for the current page and links for parent pages.": "လက်ရှိစာမျက်နှာအတွက် BreadcrumbPage ကို သုံးပြီး အထက်အဆင့်စာမျက်နှာများအတွက် links ကို အသုံးပြုပါ။",
  "Home": "ပင်မစာမျက်နှာ",
  "With Icon": "Icon ဖြင့် ပြသခြင်း",
  "Use an icon-only home link with an accessible label.": "ပင်မစာမျက်နှာ link ကို icon ဖြင့် ပြသပြီး screen reader ဖတ်နိုင်သော label ထည့်ပါ။",
  "Dashboard": "Dashboard",
  "Settings": "ဆက်တင်များ",
  "Collapsed": "လမ်းကြောင်းကို အတိုချုံ့ပြခြင်း",
  "Collapse long middle sections with BreadcrumbEllipsis.": "ရှည်လျားသော လမ်းကြောင်း၏ အလယ်အပိုင်းများကို BreadcrumbEllipsis ဖြင့် အတိုချုံ့ပြပါ။",
  "Custom Separator": "စိတ်ကြိုက် ခွဲခြားအမှတ်အသား",
  "Pass any icon or text to BreadcrumbSeparator.": "BreadcrumbSeparator ထဲတွင် မိမိကြိုက်သော icon သို့မဟုတ် စာသား ထည့်နိုင်ပါသည်။",
  "Account": "အကောင့်",
  "Responsive Breadcrumb": "စက်အရွယ်အစားအလိုက် ပြောင်းလဲသော Breadcrumb",
  "Hide less important items on smaller screens using utility classes.": "မျက်နှာပြင်ငယ်များတွင် ဦးစားပေးနည်းသော အပိုင်းများကို utility classes ဖြင့် ဖျောက်ထားပါ။",
  "Docs": "အသုံးပြုနည်း",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Breadcrumb source with the latest registry version.": "Breadcrumb source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main primitives available in Binhlaig UI Breadcrumb.": "Binhlaig UI Breadcrumb တွင် ရရှိနိုင်သော အဓိက Components များ။",
  "Component": "Component",
  "Purpose": "ရည်ရွယ်ချက်",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Navigation landmark container.": "လမ်းညွှန်မီနူးအဖြစ် သတ်မှတ်ပေးသော container။",
  "Ordered breadcrumb list.": "လမ်းကြောင်းအဆင့်များကို အစီအစဉ်တကျ ပြသသော list။",
  "A single path item.": "လမ်းကြောင်းထဲမှ အဆင့်တစ်ခု။",
  "Link to a parent location.": "အထက်အဆင့်စာမျက်နှာသို့ သွားရန် link။",
  "Current page label.": "လက်ရှိစာမျက်နှာ၏ အမည်။",
  "Visual separator between items.": "လမ်းကြောင်းအဆင့်များအကြား ခွဲခြားအမှတ်အသား။",
  "Collapsed path indicator.": "အတိုချုံ့ထားသော လမ်းကြောင်းအမှတ်အသား။",
  "preview": "နမူနာ",
  "code": "Code"
};

function useBreadcrumbText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (breadcrumbMyanmar[text] ?? text) : text;
}

const breadcrumbExamples = {
  "usage": {
    "en": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          Home\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/docs/components\">\n                          Components\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n",
    "my": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          ပင်မစာမျက်နှာ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/docs/components\">\n                          UI Components များ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n"
  },
  "with-icon": {
    "en": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nimport { Home } from \"lucide-react\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\" aria-label=\"Home\">\n                          <Home className=\"size-4\"/>\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"#\">\n                          Dashboard\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Settings\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n",
    "my": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nimport { Home } from \"lucide-react\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\" aria-label=\"ပင်မစာမျက်နှာ\">\n                          <Home className=\"size-4\"/>\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"#\">\n                          Dashboard\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          ဆက်တင်များ\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n"
  },
  "ellipsis": {
    "en": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          Home\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbEllipsis />\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/docs/components\">\n                          Components\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n",
    "my": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          ပင်မစာမျက်နှာ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbEllipsis />\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/docs/components\">\n                          UI Components များ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n"
  },
  "custom-separator": {
    "en": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nimport { Slash } from \"lucide-react\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          Home\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator>\n                        <Slash />\n                      </BreadcrumbSeparator>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"#\">\n                          Settings\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator>\n                        <Slash />\n                      </BreadcrumbSeparator>\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Account\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n",
    "my": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nimport { Slash } from \"lucide-react\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          ပင်မစာမျက်နှာ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator>\n                        <Slash />\n                      </BreadcrumbSeparator>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"#\">\n                          ဆက်တင်များ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator>\n                        <Slash />\n                      </BreadcrumbSeparator>\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          အကောင့်\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n"
  },
  "responsive": {
    "en": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          Home\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem className=\"hidden sm:inline-flex\">\n                        <BreadcrumbLink href=\"/docs/installation\">\n                          Docs\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator className=\"hidden sm:list-item\"/>\n                      <BreadcrumbItem className=\"hidden md:inline-flex\">\n                        <BreadcrumbLink href=\"/docs/components\">\n                          Components\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator className=\"hidden md:list-item\"/>\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n",
    "my": "import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from \"@/components/ui/breadcrumb\";\nexport function BreadcrumbExample() {\n    return (<Breadcrumb>\n                    <BreadcrumbList>\n                      <BreadcrumbItem>\n                        <BreadcrumbLink href=\"/\">\n                          ပင်မစာမျက်နှာ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator />\n                      <BreadcrumbItem className=\"hidden sm:inline-flex\">\n                        <BreadcrumbLink href=\"/docs/installation\">\n                          အသုံးပြုနည်း\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator className=\"hidden sm:list-item\"/>\n                      <BreadcrumbItem className=\"hidden md:inline-flex\">\n                        <BreadcrumbLink href=\"/docs/components\">\n                          UI Components များ\n                        </BreadcrumbLink>\n                      </BreadcrumbItem>\n                      <BreadcrumbSeparator className=\"hidden md:list-item\"/>\n                      <BreadcrumbItem>\n                        <BreadcrumbPage>\n                          Breadcrumb\n                        </BreadcrumbPage>\n                      </BreadcrumbItem>\n                    </BreadcrumbList>\n                  </Breadcrumb>);\n}\n"
  }
};

type PreviewTab = "preview" | "code"

const importCode = `import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"`

function cn(
  ...classes: Array<string | false | null | undefined>
) {
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
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
      </h2>
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
  const t = useBreadcrumbText()
  const [tab, setTab] =
    React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
        <div className="flex">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={t(item)}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize",
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
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
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
        <div className="flex min-h-[220px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
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
export default function BreadcrumbDocumentationPage() {
  const t = useBreadcrumbText()
  const { language } = useLanguage()

  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">
              Breadcrumb
            </span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Breadcrumb
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A navigation trail that shows the current page location and its hierarchy.")}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document
                      .querySelector("#usage")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >{t("View examples")}<ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  <Code2 className="size-4" />{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            <ComponentInstallation componentName="Breadcrumb" componentSlug="breadcrumb" />
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Breadcrumb primitives from your UI directory.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Use BreadcrumbPage for the current page and links for parent pages.")}
              />
              <div className="mt-6">
                <CodePreview code={breadcrumbExamples["usage"][language]}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components">{t("Components")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          Breadcrumb
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="with-icon"
                title={t("With Icon")}
                description={t("Use an icon-only home link with an accessible label.")}
              />
              <div className="mt-6">
                <CodePreview code={breadcrumbExamples["with-icon"][language]}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href="/"
                          aria-label={t("Home")}
                        >
                          <Home className="size-4" />
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">{t("Dashboard")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{t("Settings")}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="ellipsis"
                title={t("Collapsed")}
                description={t("Collapse long middle sections with BreadcrumbEllipsis.")}
              />
              <div className="mt-6">
                <CodePreview code={breadcrumbExamples["ellipsis"][language]}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/docs/components">{t("Components")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          Breadcrumb
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="custom-separator"
                title={t("Custom Separator")}
                description={t("Pass any icon or text to BreadcrumbSeparator.")}
              />
              <div className="mt-6">
                <CodePreview code={breadcrumbExamples["custom-separator"][language]}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <Slash />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">{t("Settings")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <Slash />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbPage>{t("Account")}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="responsive"
                title={t("Responsive Breadcrumb")}
                description={t("Hide less important items on smaller screens using utility classes.")}
              />
              <div className="mt-6">
                <CodePreview code={breadcrumbExamples["responsive"][language]}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{t("Home")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem className="hidden sm:inline-flex">
                        <BreadcrumbLink href="/docs/installation">{t("Docs")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden sm:list-item" />
                      <BreadcrumbItem className="hidden md:inline-flex">
                        <BreadcrumbLink href="/docs/components">{t("Components")}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:list-item" />
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          Breadcrumb
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Main primitives available in Binhlaig UI Breadcrumb.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Component")}</th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      [
                        "Breadcrumb",
                        "Navigation landmark container.",
                      ],
                      [
                        "BreadcrumbList",
                        "Ordered breadcrumb list.",
                      ],
                      [
                        "BreadcrumbItem",
                        "A single path item.",
                      ],
                      [
                        "BreadcrumbLink",
                        "Link to a parent location.",
                      ],
                      [
                        "BreadcrumbPage",
                        "Current page label.",
                      ],
                      [
                        "BreadcrumbSeparator",
                        "Visual separator between items.",
                      ],
                      [
                        "BreadcrumbEllipsis",
                        "Collapsed path indicator.",
                      ],
                    ].map(([name, purpose]) => (
                      <tr key={name}>
                        <td className="px-5 py-4">
                          <code>{name}</code>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {t(purpose)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/avatar"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Avatar
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="rounded-2xl border border-border p-5 text-right hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Next")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">{t("All components")}<ArrowRight className="size-4" />
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
              ["With Icon", "#with-icon"],
              ["Collapsed", "#ellipsis"],
              ["Custom Separator", "#custom-separator"],
              ["Responsive", "#responsive"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}