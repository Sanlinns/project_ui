"use client"
import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Label,
  LabelOptional,
  LabelRequired,
} from "@/components/ui/label"
type PreviewTab = "preview" | "code"
const initCode = `npx binhlaig-ui@latest init`
const installCode = `npx binhlaig-ui@latest add label`
const overwriteCode = `npx binhlaig-ui@latest add label --overwrite`
const importCode = `import {
  Label,
  LabelOptional,
  LabelRequired,
} from "@/components/ui/label"`





const labelMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy failed": "ကူးယူ၍ မရပါ",
  "Components": "Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "View examples": "နမူနာများကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းခြင်း",
  "Initialize first": "ဦးစွာ စတင်ပြင်ဆင်ပါ",
  "Terminal": "Terminal",
  "Import": "Import လုပ်ခြင်း",
  "All": "အားလုံး",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "API Reference": "API အသုံးပြုနည်း",
  "Component": "Component",
  "Purpose": "အသုံးဝင်ပုံ",
  "Previous component": "ယခင် Component",
  "Next": "နောက်သို့",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Preview": "နမူနာ",
  "Code": "Code",
  "Name": "အမည်",
  "Your name": "မိမိအမည်",
  "Email": "အီးမေးလ်",
  "Copy install command": "Install command ကူးယူရန်",
  "An accessible text label for form controls, with required and optional indicators.": "Form input များအတွက် ဖတ်ရှုရလွယ်သော Label ဖြစ်ပြီး မဖြစ်မနေ ဖြည့်ရမည့်အရာနှင့် မဖြည့်လည်းရသောအရာကို ခွဲပြနိုင်ပါတယ်။",
  "Initialize Binhlaig UI once, then install Label using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ်စတင်ပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Label ကို ထည့်သွင်းပါ။",
  "Import Label and helper indicators.": "Label နှင့် ဖြည့်သွင်းမှုအညွှန်း components များကို import လုပ်ပါ။",
  "Basic": "အခြေခံ အသုံးပြုပုံ",
  "Associate a label with an input using htmlFor and id.": "htmlFor နှင့် id ဖြင့် Label ကို input နှင့် ချိတ်ဆက်ပါ။",
  "Required": "မဖြစ်မနေ ဖြည့်ရန်",
  "Show a required marker while keeping the input itself marked required.": "Input ကို required သတ်မှတ်ထားပြီး မဖြစ်မနေ ဖြည့်ရကြောင်း အမှတ်အသားကို ပြပါ။",
  "Optional": "မဖြည့်လည်းရသည်",
  "Show that a field does not require a value.": "Field ကို မဖြစ်မနေ ဖြည့်ရန် မလိုကြောင်း ပြပါ။",
  "Nickname": "ခေါ်ဆိုသည့်အမည်",
  "Optional nickname": "ခေါ်ဆိုသည့်အမည် (မဖြည့်လည်းရသည်)",
  "With Checkbox": "Checkbox နှင့် တွဲသုံးခြင်း",
  "Pair Label with Checkbox for a larger clickable target.": "Label နှင့် Checkbox ကို ချိတ်ပြီး နှိပ်ရလွယ်သော နေရာကို ချဲ့ပေးပါ။",
  "Accept terms and conditions": "စည်းကမ်းသတ်မှတ်ချက်များကို သဘောတူပါသည်",
  "Disabled Control": "ဖြည့်သွင်းခွင့် ပိတ်ထားခြင်း",
  "Labels can be paired with disabled form controls.": "ဖြည့်သွင်းခွင့်ပိတ်ထားသော input များနှင့်လည်း Label ကို တွဲသုံးနိုင်ပါတယ်။",
  "Replace an older Label source with the latest registry version.": "Label source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Main primitives available in Binhlaig UI Label.": "Binhlaig UI Label တွင် အသုံးပြုနိုင်သော အဓိက components များ။",
  "Accessible label for a form control.": "Form input အတွက် ဖတ်ရှုရလွယ်သော label။",
  "References the target form control id.": "ချိတ်ဆက်မည့် form input ၏ id ကို ရည်ညွှန်းပါတယ်။",
  "Visual required marker.": "မဖြစ်မနေ ဖြည့်ရကြောင်း အမှတ်အသား။",
  "Optional field indicator.": "မဖြည့်လည်းရကြောင်း အညွှန်း။",
  "Customize label styling.": "Label ၏ အပြင်အဆင်ကို စိတ်ကြိုက် ပြင်ဆင်နိုင်ပါတယ်။"
}
function useLabelText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? labelMyanmar[text] ?? text : text
  return { language, t }
}
const labelExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function LabelDemo() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-email\">{\"Email\"}</Label>\n                    <Input\n                      id=\"preview-email\"\n                      type=\"email\"\n                      placeholder=\"you@example.com\"\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function LabelDemo() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-email\">{\"အီးမေးလ်\"}</Label>\n                    <Input\n                      id=\"preview-email\"\n                      type=\"email\"\n                      placeholder=\"you@example.com\"\n                    />\n                  </div>\n  )\n}"
  },
  "requiredCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Label, LabelRequired } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function RequiredLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-name\">{\"Name\"}<LabelRequired />\n                    </Label>\n                    <Input\n                      id=\"preview-name\"\n                      required\n                      placeholder={\"Your name\"}\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Label, LabelRequired } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function RequiredLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-name\">{\"အမည်\"}<LabelRequired />\n                    </Label>\n                    <Input\n                      id=\"preview-name\"\n                      required\n                      placeholder={\"မိမိအမည်\"}\n                    />\n                  </div>\n  )\n}"
  },
  "optionalCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Label, LabelOptional } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function OptionalLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-nickname\">{\"Nickname\"}<LabelOptional>{\"Optional\"}</LabelOptional>\n                    </Label>\n                    <Input\n                      id=\"preview-nickname\"\n                      placeholder={\"Optional nickname\"}\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Label, LabelOptional } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function OptionalLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-nickname\">{\"ခေါ်ဆိုသည့်အမည်\"}<LabelOptional>{\"မဖြည့်လည်းရသည်\"}</LabelOptional>\n                    </Label>\n                    <Input\n                      id=\"preview-nickname\"\n                      placeholder={\"ခေါ်ဆိုသည့်အမည် (မဖြည့်လည်းရသည်)\"}\n                    />\n                  </div>\n  )\n}"
  },
  "checkboxCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Checkbox } from \"@/components/ui/checkbox\"\n\nexport function CheckboxLabel() {\n  return (\n<div className=\"flex items-center gap-2\">\n                    <Checkbox id=\"preview-terms\" className=\"shrink-0\" />\n                    <Label htmlFor=\"preview-terms\">{\"Accept terms and conditions\"}</Label>\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Checkbox } from \"@/components/ui/checkbox\"\n\nexport function CheckboxLabel() {\n  return (\n<div className=\"flex items-center gap-2\">\n                    <Checkbox id=\"preview-terms\" className=\"shrink-0\" />\n                    <Label htmlFor=\"preview-terms\">{\"စည်းကမ်းသတ်မှတ်ချက်များကို သဘောတူပါသည်\"}</Label>\n                  </div>\n  )\n}"
  },
  "disabledCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function DisabledLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-disabled-email\">{\"Email\"}</Label>\n                    <Input\n                      id=\"preview-disabled-email\"\n                      disabled\n                      value=\"disabled@example.com\"\n                      readOnly\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Label } from \"@/components/ui/label\"\nimport { Input } from \"@/components/ui/input\"\n\nexport function DisabledLabel() {\n  return (\n<div className=\"grid gap-2\">\n                    <Label htmlFor=\"preview-disabled-email\">{\"အီးမေးလ်\"}</Label>\n                    <Input\n                      id=\"preview-disabled-email\"\n                      disabled\n                      value=\"disabled@example.com\"\n                      readOnly\n                    />\n                  </div>\n  )\n}"
  }
} as const
const labelPageStyles = `
.label-docs[data-language="my"] :is(h1,h2,h3,p,label,a,th,td) { letter-spacing:normal; line-height:1.9; }
.label-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.label-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.label-docs [data-slot="label"] { flex-wrap:wrap; line-height:1.9; row-gap:4px; }
.label-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; line-height:1.9; padding-block:8px; }
.label-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.label-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .label-docs[data-language="my"] h1 { font-size:28px; } }
`

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
  const { t } = useLabelText()
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">
        {t(title)}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {t(description)}
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
  const { t } = useLabelText()
  const [tab, setTab] = React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopyFailed(false)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch { setCopyFailed(true) }
  }
  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <div className="flex items-center justify-between border-b px-3">
        <div className="flex">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize",
                tab === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {t(item === "preview" ? "Preview" : "Code")}
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
          aria-label={t(copied ? "Copied" : "Copy code")} title={t(copyFailed ? "Copy failed" : copied ? "Copied" : "Copy code")}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-[220px] items-center justify-center bg-muted/20 p-8">
          <div className="w-full max-w-sm">{children}</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-muted/60 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-foreground">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
export default function LabelDocumentationPage() {
  const { t, language } = useLabelText()
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(installCode)
      setCopyFailed(false)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch { setCopyFailed(true) }
  }
  return (
    <div lang={language} data-language={language} className="label-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{labelPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Label</span>
          </div>
          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Label
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{t("An accessible text label for form controls, with required and optional indicators.")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  document
                    .querySelector("#usage")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >{t("View examples")}<ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#api-reference")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Code2 className="size-4" />{t("API reference")}</Button>
            </div>
          </section>
          <div className="mt-12 space-y-16">
            <section>
              <SectionTitle
                id="installation"
                title={t("Installation")}
                description={t("Initialize Binhlaig UI once, then install Label using the saved installer.")}
              />
              <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
                <p className="text-sm font-medium">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-muted/60 p-4 font-mono text-sm text-foreground">
                  <code>{initCode}</code>
                </pre>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border bg-muted/60">
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <span className="text-xs text-muted-foreground">{t("Terminal")}</span>
                  <button
                    type="button"
                    onClick={copyInstall}
                    className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
                    aria-label={t(copied ? "Copied" : "Copy install command")} title={t(copyFailed ? "Copy failed" : copied ? "Copied" : "Copy install command")}
                  >
                    {copied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Clipboard className="size-4" />
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-sm text-foreground">
                  <code>{installCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Label and helper indicators.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm text-foreground">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="usage"
                title={t("Basic")}
                description={t("Associate a label with an input using htmlFor and id.")}
              />
              <div className="mt-6">
                <CodePreview code={labelExamples.basicCode[language]}>
                  <div className="grid gap-2">
                    <Label htmlFor="preview-email">{t("Email")}</Label>
                    <Input
                      id="preview-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="required"
                title={t("Required")}
                description={t("Show a required marker while keeping the input itself marked required.")}
              />
              <div className="mt-6">
                <CodePreview code={labelExamples.requiredCode[language]}>
                  <div className="grid gap-2">
                    <Label htmlFor="preview-name">{t("Name")}<LabelRequired />
                    </Label>
                    <Input
                      id="preview-name"
                      required
                      placeholder={t("Your name")}
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="optional"
                title={t("Optional")}
                description={t("Show that a field does not require a value.")}
              />
              <div className="mt-6">
                <CodePreview code={labelExamples.optionalCode[language]}>
                  <div className="grid gap-2">
                    <Label htmlFor="preview-nickname">{t("Nickname")}<LabelOptional>{t("Optional")}</LabelOptional>
                    </Label>
                    <Input
                      id="preview-nickname"
                      placeholder={t("Optional nickname")}
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="checkbox"
                title={t("With Checkbox")}
                description={t("Pair Label with Checkbox for a larger clickable target.")}
              />
              <div className="mt-6">
                <CodePreview code={labelExamples.checkboxCode[language]}>
                  <div className="flex items-center gap-2">
                    <Checkbox id="preview-terms" className="shrink-0" />
                    <Label htmlFor="preview-terms">{t("Accept terms and conditions")}</Label>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="disabled"
                title={t("Disabled Control")}
                description={t("Labels can be paired with disabled form controls.")}
              />
              <div className="mt-6">
                <CodePreview code={labelExamples.disabledCode[language]}>
                  <div className="grid gap-2">
                    <Label htmlFor="preview-disabled-email">{t("Email")}</Label>
                    <Input
                      id="preview-disabled-email"
                      disabled
                      value="disabled@example.com"
                      readOnly
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Label source with the latest registry version.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm text-foreground">
                  <code>{overwriteCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Main primitives available in Binhlaig UI Label.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">API</th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["Label", "Accessible label for a form control."],
                      ["htmlFor", "References the target form control id."],
                      ["LabelRequired", "Visual required marker."],
                      ["LabelOptional", "Optional field indicator."],
                      ["className", "Customize label styling."],
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
            <div className="grid gap-4 border-t pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/data-table"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Data Table
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="rounded-2xl border p-5 text-right hover:border-primary/40 hover:bg-muted/40"
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
        <div className="sticky top-24 border-l pl-5">
          <p className="mb-4 text-sm font-semibold">{t("On this page")}</p>
          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Basic", "#usage"],
              ["Required", "#required"],
              ["Optional", "#optional"],
              ["With Checkbox", "#checkbox"],
              ["Disabled Control", "#disabled"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/label/page.tsx"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}