"use client"
import { ComponentInstallation } from "@/components/docs/component-installation";
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
import {
  ToastProvider,
  Toaster,
  useToast,
} from "@/components/ui/toast"
type PreviewTab = "preview" | "code"

const importCode = `import {
  ToastProvider,
  Toaster,
  useToast,
} from "@/components/ui/toast"`
const setupCode = "import type { ReactNode } from \"react\"\nimport { ToastProvider, Toaster } from \"@/components/ui/toast\"\n\nexport default function RootLayout({ children }: { children: ReactNode }) {\n  return (\n    <html lang=\"my\">\n      <body>\n        <ToastProvider>\n          {children}\n          <Toaster position=\"top-center\" className=\"[&_.leading-5]:leading-8\" />\n        </ToastProvider>\n      </body>\n    </html>\n  )\n}"

const positionCode = "import { Toaster } from \"@/components/ui/toast\"\n\nexport function PositionedToaster() {\n  return <Toaster position=\"top-right\" />\n}\n\n// Alternative positions: bottom-center, bottom-right, top-left, top-center, bottom-left"

const toastMyanmar: Record<string, string> = {
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
  "Lightweight floating notifications inspired by the clean interaction style of react-hot-toast, adapted for Binhlaig UI.": "react-hot-toast ၏ ရိုးရှင်းသောပုံစံကို အခြေခံပြီး Binhlaig UI အတွက် ပြင်ဆင်ထားသော နေရာယူမှုနည်းသည့် အသိပေးချက်များ။",
  "Initialize Binhlaig UI once, then install Toast using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ်စတင်ပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Toast ကို ထည့်သွင်းပါ။",
  "Setup": "စတင်ပြင်ဆင်ခြင်း",
  "Wrap the application with ToastProvider and render one Toaster.": "App ကို ToastProvider ဖြင့် ဝန်းရံပြီး Toaster တစ်ခု ထည့်သွင်းပါ။",
  "Basic": "အခြေခံ အသုံးပြုပုံ",
  "Show a lightweight toast with a title and optional description.": "ခေါင်းစဉ်နှင့် လိုအပ်ပါက ရှင်းလင်းချက်ပါသော အသိပေးချက်ကို ပြပါ။",
  "Variants": "အသိပေးချက် ပုံစံများ",
  "Built-in helpers for success, error, loading and info notifications.": "အောင်မြင်မှု၊ အမှား၊ လုပ်ဆောင်နေမှုနှင့် အချက်အလက် အသိပေးချက်များအတွက် helper များ။",
  "Position": "ပြသမည့်နေရာ",
  "Place the toaster in any common screen corner or center position.": "Toaster ကို မျက်နှာပြင်ထောင့်များ သို့မဟုတ် အလယ်တွင် ထားနိုင်ပါတယ်။",
  "Loading and Dismiss": "Loading နှင့် ပိတ်ခြင်း",
  "Loading toasts stay visible until they are dismissed manually.": "Loading အသိပေးချက်များကို ကိုယ်တိုင်ပိတ်သည့်အချိန်အထိ ပြထားပါတယ်။",
  "Event has been created": "အစီအစဉ်ကို ဖန်တီးပြီးပါပြီ",
  "Monday, August 10 at 9:00 AM": "ဩဂုတ် ၁၀၊ တနင်္လာနေ့ မနက် ၉ နာရီ",
  "Show toast": "အသိပေးချက် ပြရန်",
  "Success": "အောင်မြင်မှု",
  "Error": "အမှား",
  "Loading": "လုပ်ဆောင်နေမှု",
  "Info": "အချက်အလက်",
  "Changes saved successfully.": "ပြင်ဆင်ချက်များကို သိမ်းပြီးပါပြီ။",
  "Something went wrong.": "ပြဿနာတစ်ခု ဖြစ်ပေါ်နေပါတယ်။",
  "Uploading files...": "ဖိုင်များ တင်နေသည်…",
  "A new update is available.": "Update အသစ် ရရှိနိုင်ပါပြီ။",
  "Start loading": "Loading စတင်ရန်",
  "Dismiss": "ပိတ်ရန်",
  "Stores and manages toast state.": "အသိပေးချက် state ကို သိမ်းဆည်း၊ ထိန်းချုပ်ပါတယ်။",
  "Renders the floating toast stack.": "အသိပေးချက်များကို အစီလိုက် ပြပါတယ်။",
  "Access toast helpers.": "Toast helpers များကို အသုံးပြုရန်။",
  "Show a default/custom toast.": "ပုံမှန် သို့မဟုတ် စိတ်ကြိုက် အသိပေးချက် ပြရန်။",
  "Show a success toast.": "အောင်မြင်မှု အသိပေးချက် ပြရန်။",
  "Show an error toast.": "အမှား အသိပေးချက် ပြရန်။",
  "Show a persistent loading toast.": "ကိုယ်တိုင်ပိတ်သည်အထိ Loading အသိပေးချက် ပြရန်။",
  "Show an informational toast.": "အချက်အလက် အသိပေးချက် ပြရန်။",
  "Dismiss one toast or all toasts.": "အသိပေးချက်တစ်ခု သို့မဟုတ် အားလုံးကို ပိတ်ရန်။"
}
function useToastText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? toastMyanmar[text] ?? text : text
  return { language, t }
}
const toastExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function ToastDemo() {\n\n  const { toast } = useToast()\n  return (\n    <Button\n      onClick={() =>\n        toast({\n          title: \"Event has been created\",\n          description:\n            \"Monday, August 10 at 9:00 AM\",\n        })\n      }\n    >{\"Show toast\"}</Button>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function ToastDemo() {\n\n  const { toast } = useToast()\n  return (\n    <Button\n      onClick={() =>\n        toast({\n          title: \"အစီအစဉ်ကို ဖန်တီးပြီးပါပြီ\",\n          description:\n            \"ဩဂုတ် ၁၀၊ တနင်္လာနေ့ မနက် ၉ နာရီ\",\n        })\n      }\n    >{\"အသိပေးချက် ပြရန်\"}</Button>\n  )\n}"
  },
  "variantsCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function ToastVariants() {\n\n  const {\n    success,\n    error,\n    loading,\n    info,\n  } = useToast()\n  return (\n    <div className=\"flex flex-wrap justify-center gap-2\">\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          success(\"Changes saved successfully.\")\n        }\n      >{\"Success\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          error(\"Something went wrong.\")\n        }\n      >{\"Error\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          loading(\"Uploading files...\")\n        }\n      >{\"Loading\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          info(\"A new update is available.\")\n        }\n      >{\"Info\"}</Button>\n    </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function ToastVariants() {\n\n  const {\n    success,\n    error,\n    loading,\n    info,\n  } = useToast()\n  return (\n    <div className=\"flex flex-wrap justify-center gap-2\">\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          success(\"ပြင်ဆင်ချက်များကို သိမ်းပြီးပါပြီ။\")\n        }\n      >{\"အောင်မြင်မှု\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          error(\"ပြဿနာတစ်ခု ဖြစ်ပေါ်နေပါတယ်။\")\n        }\n      >{\"အမှား\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          loading(\"ဖိုင်များ တင်နေသည်…\")\n        }\n      >{\"လုပ်ဆောင်နေမှု\"}</Button>\n      <Button\n        variant=\"outline\"\n        onClick={() =>\n          info(\"Update အသစ် ရရှိနိုင်ပါပြီ။\")\n        }\n      >{\"အချက်အလက်\"}</Button>\n    </div>\n  )\n}"
  },
  "dismissCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function LoadingAndDismissToast() {\n\n  const { loading, dismiss } =\n    useToast()\n  const [id, setId] =\n    React.useState<string | null>(null)\n  return (\n    <div className=\"flex flex-wrap justify-center gap-2\">\n      <Button disabled={Boolean(id)}\n        onClick={() => {\n          const nextId = loading(\n            \"Uploading files...\"\n          )\n          setId(nextId)\n        }}\n      >{\"Start loading\"}</Button>\n      <Button\n        variant=\"outline\"\n        disabled={!id}\n        onClick={() => {\n          if (id) dismiss(id)\n          setId(null)\n        }}\n      >{\"Dismiss\"}</Button>\n    </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { useToast } from \"@/components/ui/toast\"\n\nexport function LoadingAndDismissToast() {\n\n  const { loading, dismiss } =\n    useToast()\n  const [id, setId] =\n    React.useState<string | null>(null)\n  return (\n    <div className=\"flex flex-wrap justify-center gap-2\">\n      <Button disabled={Boolean(id)}\n        onClick={() => {\n          const nextId = loading(\n            \"ဖိုင်များ တင်နေသည်…\"\n          )\n          setId(nextId)\n        }}\n      >{\"Loading စတင်ရန်\"}</Button>\n      <Button\n        variant=\"outline\"\n        disabled={!id}\n        onClick={() => {\n          if (id) dismiss(id)\n          setId(null)\n        }}\n      >{\"ပိတ်ရန်\"}</Button>\n    </div>\n  )\n}"
  }
} as const
const toastPageStyles = `
.toast-docs[data-language="my"] :is(h1,h2,h3,p,label,a,th,td) { letter-spacing:normal; line-height:1.9; }
.toast-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.toast-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.toast-docs [data-slot="label"] { flex-wrap:wrap; line-height:1.9; row-gap:4px; }
.toast-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; line-height:1.9; padding-block:8px; }
.toast-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.toast-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .toast-docs[data-language="my"] h1 { font-size:28px; } }
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
  const { t } = useToastText()
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
  const { t } = useToastText()
  const [tab, setTab] =
    React.useState<PreviewTab>("preview")
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
          {children}
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
function BasicPreview() {
  const { t } = useToastText()
  const { toast } = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          title: t("Event has been created"),
          description:
            t("Monday, August 10 at 9:00 AM"),
        })
      }
    >{t("Show toast")}</Button>
  )
}
function VariantPreview() {
  const { t } = useToastText()
  const {
    success,
    error,
    loading,
    info,
  } = useToast()
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          success(t("Changes saved successfully."))
        }
      >{t("Success")}</Button>
      <Button
        variant="outline"
        onClick={() =>
          error(t("Something went wrong."))
        }
      >{t("Error")}</Button>
      <Button
        variant="outline"
        onClick={() =>
          loading(t("Uploading files..."))
        }
      >{t("Loading")}</Button>
      <Button
        variant="outline"
        onClick={() =>
          info(t("A new update is available."))
        }
      >{t("Info")}</Button>
    </div>
  )
}
function DismissPreview() {
  const { t } = useToastText()
  const { loading, dismiss } =
    useToast()
  const [id, setId] =
    React.useState<string | null>(null)
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button disabled={Boolean(id)}
        onClick={() => {
          const nextId = loading(
            t("Uploading files...")
          )
          setId(nextId)
        }}
      >{t("Start loading")}</Button>
      <Button
        variant="outline"
        disabled={!id}
        onClick={() => {
          if (id) dismiss(id)
          setId(null)
        }}
      >{t("Dismiss")}</Button>
    </div>
  )
}
function ToastDocsContent() {
  const { t, language } = useToastText()

  return (
    <div lang={language} data-language={language} className="toast-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{toastPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">
              Toast
            </span>
          </div>
          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Toast
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{t("Lightweight floating notifications inspired by the clean interaction style of react-hot-toast, adapted for Binhlaig UI.")}</p>
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
          </section>
          <div className="mt-12 space-y-16">
            <ComponentInstallation componentName="Toast" componentSlug="toast" />
            <section>
              <SectionTitle
                id="setup"
                title={t("Setup")}
                description={t("Wrap the application with ToastProvider and render one Toaster.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm leading-6 text-foreground">
                  <code>{language === "my" ? setupCode : setupCode.replace('lang="my"', 'lang="en"')}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
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
                description={t("Show a lightweight toast with a title and optional description.")}
              />
              <div className="mt-6">
                <CodePreview code={toastExamples.basicCode[language]}>
                  <BasicPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="variants"
                title={t("Variants")}
                description={t("Built-in helpers for success, error, loading and info notifications.")}
              />
              <div className="mt-6">
                <CodePreview code={toastExamples.variantsCode[language]}>
                  <VariantPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="position"
                title={t("Position")}
                description={t("Place the toaster in any common screen corner or center position.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm leading-6 text-foreground">
                  <code>{positionCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="dismiss"
                title={t("Loading and Dismiss")}
                description={t("Loading toasts stay visible until they are dismissed manually.")}
              />
              <div className="mt-6">
                <CodePreview code={toastExamples.dismissCode[language]}>
                  <DismissPreview />
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        API
                      </th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["ToastProvider", t("Stores and manages toast state.")],
                      ["Toaster", t("Renders the floating toast stack.")],
                      ["useToast()", t("Access toast helpers.")],
                      ["toast()", t("Show a default/custom toast.")],
                      ["success()", t("Show a success toast.")],
                      ["error()", t("Show an error toast.")],
                      ["loading()", t("Show a persistent loading toast.")],
                      ["info()", t("Show an informational toast.")],
                      ["dismiss(id?)", t("Dismiss one toast or all toasts.")],
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
                href="/docs/components/pagination"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Pagination
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
              [t("Installation"), "#installation"],
              [t("Setup"), "#setup"],
              [t("Import"), "#import"],
              [t("Basic"), "#usage"],
              [t("Variants"), "#variants"],
              [t("Position"), "#position"],
              [t("Loading and Dismiss"), "#dismiss"],
              [t("API Reference"), "#api-reference"],
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/toast/page.tsx"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
      <Toaster position="top-center" />
    </div>
  )
}
export default function ToastDocumentationPage() {
  return (
    <ToastProvider>
      <ToastDocsContent />
    </ToastProvider>
  )
}