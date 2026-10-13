"use client"
import * as React from "react"
import { useLanguage } from "@/components/providers/language-provider"
import Link from "next/link"
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  Info,
  Sparkles,
  TriangleAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
const alertMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copy install command": "Install command ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "preview": "နမူနာ",
  "code": "Code",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A clear message block for status updates, notices, warnings and errors.": "အခြေအနေ၊ အသိပေးချက်၊ သတိပေးချက်နှင့် Error များကို ရှင်းလင်းစွာ ပြသပေးသော message block။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install Alert with the saved installer.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Alert ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import Alert primitives from your UI directory.": "Alert ၏ အခြေခံ Components များကို မိမိ UI folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Use AlertTitle and AlertDescription to structure a message.": "Message ကို ဖွဲ့စည်းပြသရန် AlertTitle နှင့် AlertDescription ကို အသုံးပြုပါ။",
  "Heads up": "အသိပေးချက်",
  "You can add components using the Binhlaig UI CLI.": "Binhlaig UI CLI ကို အသုံးပြု၍ Components များ ထည့်သွင်းနိုင်ပါသည်။",
  "Variants": "ပုံစံအမျိုးမျိုး",
  "Choose a semantic style that matches the message.": "Message ၏ အဓိပ္ပာယ်နှင့် ကိုက်ညီသော ပုံစံကို ရွေးချယ်ပါ။",
  "Information": "သတင်းအချက်အလက်",
  "A new update is available.": "Update အသစ် ရရှိနိုင်ပါပြီ။",
  "Success": "အောင်မြင်ပါသည်",
  "Your changes were saved.": "ပြင်ဆင်ထားသော အချက်အလက်များကို သိမ်းဆည်းပြီးပါပြီ။",
  "Warning": "သတိပေးချက်",
  "Review these settings before continuing.": "ဆက်မလုပ်မီ ဤ settings များကို ပြန်စစ်ဆေးပါ။",
  "Error": "အမှားဖြစ်ပေါ်ပါသည်",
  "Something went wrong.": "လုပ်ဆောင်ရာတွင် အမှားတစ်ခု ဖြစ်ပေါ်ခဲ့ပါသည်။",
  "With Icon": "Icon ဖြင့် ပြသခြင်း",
  "Place an icon before the title for faster visual recognition.": "Message ကို မြန်မြန်သိနိုင်ရန် title ရှေ့တွင် icon ထည့်ပါ။",
  "New feature": "လုပ်ဆောင်ချက်အသစ်",
  "Drawer is now available in the component registry.": "Component registry တွင် Drawer ကို အသုံးပြုနိုင်ပါပြီ။",
  "With Actions": "လုပ်ဆောင်ချက်ခလုတ်များ ထည့်ခြင်း",
  "Add relevant actions without turning the alert into a modal.": "Alert ကို modal အဖြစ် မပြောင်းဘဲ သက်ဆိုင်ရာ လုပ်ဆောင်ချက်ခလုတ်များ ထည့်နိုင်ပါသည်။",
  "Unsaved changes": "မသိမ်းရသေးသော ပြင်ဆင်မှုများ",
  "Save your changes before leaving this page.": "ဤစာမျက်နှာမှ မထွက်မီ ပြင်ဆင်ထားသည်များကို သိမ်းဆည်းပါ။",
  "Save changes": "ပြင်ဆင်မှုများ သိမ်းရန်",
  "Dismiss": "ပိတ်ရန်",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Alert source with the latest registry version.": "Alert source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components and variants available in Binhlaig UI Alert.": "Binhlaig UI Alert တွင် ရရှိနိုင်သော အဓိက Components နှင့် ပုံစံများ။",
  "Component": "Component",
  "Purpose": "အသုံးပြုရသည့် ရည်ရွယ်ချက်",
  "Prop": "Prop",
  "Values": "တန်ဖိုးများ",
  "Default": "မူလတန်ဖိုး",
  "Any valid ARIA role": "မှန်ကန်သော ARIA role တစ်ခုခု",
  "The semantic message container.": "Message တစ်ခုလုံးကို စုစည်းပြသသော container။",
  "A concise message heading.": "Message ၏ အကျဉ်းချုပ်ခေါင်းစဉ်။",
  "Supporting message content.": "Message အတွက် အသေးစိတ်ရှင်းလင်းချက်။",
  "Optional related actions.": "လိုအပ်သည့်အခါ ထည့်နိုင်သော ဆက်စပ်လုပ်ဆောင်ချက်များ။",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်"
}

function useAlertText() {
  const { language } = useLanguage()
  return (text: string) => language === "my" ? (alertMyanmar[text] ?? text) : text
}

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"
const initCode = `npx binhlaig-ui@latest init`
const installCode =
  `npx binhlaig-ui@latest add alert`
const overwriteCode =
  `npx binhlaig-ui@latest add alert --overwrite`
const importCode = `import {
  Alert,
  AlertActions,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"`
const basicCode = "import {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertDemo() {\n  return (\n    <Alert>\n      <AlertTitle>Heads up</AlertTitle>\n      <AlertDescription>\n        You can add components using the Binhlaig UI CLI.\n      </AlertDescription>\n    </Alert>\n  )\n}"
const variantsCode = "import { Info, CheckCircle2, TriangleAlert, AlertCircle } from \"lucide-react\"\nimport {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertVariants() {\n  return (\n    <div className=\"grid gap-4\">\n      <Alert variant=\"info\">\n        <Info />\n        <AlertTitle>Information</AlertTitle>\n        <AlertDescription>\n          A new update is available.\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"success\">\n        <CheckCircle2 />\n        <AlertTitle>Success</AlertTitle>\n        <AlertDescription>\n          Your changes were saved.\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"warning\">\n        <TriangleAlert />\n        <AlertTitle>Warning</AlertTitle>\n        <AlertDescription>\n          Review these settings before continuing.\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"destructive\">\n        <AlertCircle />\n        <AlertTitle>Error</AlertTitle>\n        <AlertDescription>\n          Something went wrong.\n        </AlertDescription>\n      </Alert>\n    </div>\n  )\n}"
const iconCode = "import { Info } from \"lucide-react\"\nimport {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertWithIcon() {\n  return (\n    <Alert variant=\"info\">\n      <Info />\n      <AlertTitle>New feature</AlertTitle>\n      <AlertDescription>\n        Drawer is now available in the component registry.\n      </AlertDescription>\n    </Alert>\n  )\n}"
const actionCode = "import { TriangleAlert } from \"lucide-react\"\nimport { Button } from \"@/components/ui/button\"\nimport {\n  Alert,\n  AlertActions,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertWithAction() {\n  return (\n    <Alert variant=\"warning\">\n      <TriangleAlert />\n      <AlertTitle>Unsaved changes</AlertTitle>\n      <AlertDescription>\n        Save your changes before leaving this page.\n      </AlertDescription>\n      <AlertActions>\n        <Button size=\"sm\">\n          Save changes\n        </Button>\n        <Button\n          size=\"sm\"\n          variant=\"outline\"\n        >\n          Dismiss\n        </Button>\n      </AlertActions>\n    </Alert>\n  )\n}"
const myanmarExampleCode: Record<string, string> = {
  [basicCode]: "import {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertDemo() {\n  return (\n    <Alert>\n      <AlertTitle>အသိပေးချက်</AlertTitle>\n      <AlertDescription>\n        Binhlaig UI CLI ကို အသုံးပြု၍ Components များ ထည့်သွင်းနိုင်ပါသည်။\n      </AlertDescription>\n    </Alert>\n  )\n}",
  [variantsCode]: "import { Info, CheckCircle2, TriangleAlert, AlertCircle } from \"lucide-react\"\nimport {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertVariants() {\n  return (\n    <div className=\"grid gap-4\">\n      <Alert variant=\"info\">\n        <Info />\n        <AlertTitle>သတင်းအချက်အလက်</AlertTitle>\n        <AlertDescription>\n          Update အသစ် ရရှိနိုင်ပါပြီ။\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"success\">\n        <CheckCircle2 />\n        <AlertTitle>အောင်မြင်ပါသည်</AlertTitle>\n        <AlertDescription>\n          ပြင်ဆင်ထားသော အချက်အလက်များကို သိမ်းဆည်းပြီးပါပြီ။\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"warning\">\n        <TriangleAlert />\n        <AlertTitle>သတိပေးချက်</AlertTitle>\n        <AlertDescription>\n          ဆက်မလုပ်မီ ဤ settings များကို ပြန်စစ်ဆေးပါ။\n        </AlertDescription>\n      </Alert>\n      <Alert variant=\"destructive\">\n        <AlertCircle />\n        <AlertTitle>အမှားဖြစ်ပေါ်ပါသည်</AlertTitle>\n        <AlertDescription>\n          လုပ်ဆောင်ရာတွင် အမှားတစ်ခု ဖြစ်ပေါ်ခဲ့ပါသည်။\n        </AlertDescription>\n      </Alert>\n    </div>\n  )\n}",
  [iconCode]: "import { Info } from \"lucide-react\"\nimport {\n  Alert,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertWithIcon() {\n  return (\n    <Alert variant=\"info\">\n      <Info />\n      <AlertTitle>လုပ်ဆောင်ချက်အသစ်</AlertTitle>\n      <AlertDescription>\n        Component registry တွင် Drawer ကို အသုံးပြုနိုင်ပါပြီ။\n      </AlertDescription>\n    </Alert>\n  )\n}",
  [actionCode]: "import { TriangleAlert } from \"lucide-react\"\nimport { Button } from \"@/components/ui/button\"\nimport {\n  Alert,\n  AlertActions,\n  AlertDescription,\n  AlertTitle,\n} from \"@/components/ui/alert\"\nexport function AlertWithAction() {\n  return (\n    <Alert variant=\"warning\">\n      <TriangleAlert />\n      <AlertTitle>မသိမ်းရသေးသော ပြင်ဆင်မှုများ</AlertTitle>\n      <AlertDescription>\n        ဤစာမျက်နှာမှ မထွက်မီ ပြင်ဆင်ထားသည်များကို သိမ်းဆည်းပါ။\n      </AlertDescription>\n      <AlertActions>\n        <Button size=\"sm\">\n          ပြင်ဆင်မှုများ သိမ်းရန်\n        </Button>\n        <Button\n          size=\"sm\"\n          variant=\"outline\"\n        >\n          ပိတ်ရန်\n        </Button>\n      </AlertActions>\n    </Alert>\n  )\n}"
};

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
  const t = useAlertText()
  const { language } = useLanguage()
  const exampleCode = language === "my" ? (myanmarExampleCode[code] ?? code) : code
  const [tab, setTab] =
    React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)
  const copyCode = async () => {
    await navigator.clipboard.writeText(exampleCode)
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
        <div className="flex min-h-[260px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
          <div className="w-full max-w-2xl">
            {children}
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{exampleCode}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
export default function AlertDocumentationPage() {
  const t = useAlertText()
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const copyInstall = async () => {
    await navigator.clipboard.writeText(installCode)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }
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
              Alert
            </span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Alert
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A clear message block for status updates, notices, warnings and errors.")}</p>
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
            <section>
              <SectionTitle
                id="installation"
                title={t("Installation")}
                description={t("Initialize Binhlaig UI once, then install Alert with the saved installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{initCode}</code>
                </pre>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="flex border-b border-border p-1">
                  {(["native", "shadcn"] as const).map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() =>
                          setInstaller(item)
                        }
                        className={cn(
                          "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium",
                          installer === item
                            ? item === "native"
                              ? "bg-primary text-primary-foreground"
                              : "bg-foreground text-background"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        {item === "native"
                          ? "Native Beta"
                          : "Shadcn Stable"}
                      </button>
                    )
                  )}
                </div>
                <div className="bg-slate-950">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <span className="text-xs text-slate-500">
                      Terminal
                    </span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
                      aria-label={copied ? t("Copied") : t("Copy install command")}
                    >
                      {copied ? (
                        <Check className="size-4 text-emerald-400" />
                      ) : (
                        <Clipboard className="size-4" />
                      )}
                    </button>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
                    <code>{installCode}</code>
                  </pre>
                </div>
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Alert primitives from your UI directory.")}
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
                description={t("Use AlertTitle and AlertDescription to structure a message.")}
              />
              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Alert>
                    <AlertTitle>{t("Heads up")}</AlertTitle>
                    <AlertDescription>{t("You can add components using the Binhlaig UI CLI.")}</AlertDescription>
                  </Alert>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="variants"
                title={t("Variants")}
                description={t("Choose a semantic style that matches the message.")}
              />
              <div className="mt-6">
                <CodePreview code={variantsCode}>
                  <div className="grid gap-4">
                    <Alert variant="info">
                      <Info />
                      <AlertTitle>{t("Information")}</AlertTitle>
                      <AlertDescription>{t("A new update is available.")}</AlertDescription>
                    </Alert>
                    <Alert variant="success">
                      <CheckCircle2 />
                      <AlertTitle>{t("Success")}</AlertTitle>
                      <AlertDescription>{t("Your changes were saved.")}</AlertDescription>
                    </Alert>
                    <Alert variant="warning">
                      <TriangleAlert />
                      <AlertTitle>{t("Warning")}</AlertTitle>
                      <AlertDescription>{t("Review these settings before continuing.")}</AlertDescription>
                    </Alert>
                    <Alert variant="destructive">
                      <AlertCircle />
                      <AlertTitle>{t("Error")}</AlertTitle>
                      <AlertDescription>{t("Something went wrong.")}</AlertDescription>
                    </Alert>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="with-icon"
                title={t("With Icon")}
                description={t("Place an icon before the title for faster visual recognition.")}
              />
              <div className="mt-6">
                <CodePreview code={iconCode}>
                  <Alert variant="info">
                    <Info />
                    <AlertTitle>{t("New feature")}</AlertTitle>
                    <AlertDescription>{t("Drawer is now available in the component registry.")}</AlertDescription>
                  </Alert>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="with-actions"
                title={t("With Actions")}
                description={t("Add relevant actions without turning the alert into a modal.")}
              />
              <div className="mt-6">
                <CodePreview code={actionCode}>
                  <Alert variant="warning">
                    <TriangleAlert />
                    <AlertTitle>{t("Unsaved changes")}</AlertTitle>
                    <AlertDescription>{t("Save your changes before leaving this page.")}</AlertDescription>
                    <AlertActions>
                      <Button size="sm">{t("Save changes")}</Button>
                      <Button
                        size="sm"
                        variant="outline"
                      >{t("Dismiss")}</Button>
                    </AlertActions>
                  </Alert>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Alert source with the latest registry version.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{overwriteCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Main components and variants available in Binhlaig UI Alert.")}
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
                        "Alert",
                        "The semantic message container.",
                      ],
                      [
                        "AlertTitle",
                        "A concise message heading.",
                      ],
                      [
                        "AlertDescription",
                        "Supporting message content.",
                      ],
                      [
                        "AlertActions",
                        "Optional related actions.",
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
              <div className="mt-5 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Prop")}</th>
                      <th className="px-5 py-4 font-medium">{t("Values")}</th>
                      <th className="px-5 py-4 font-medium">{t("Default")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-5 py-4">
                        <code>variant</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        default, info, success, warning,
                        destructive
                      </td>
                      <td className="px-5 py-4">
                        <code>default</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">
                        <code>role</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">{t("Any valid ARIA role")}</td>
                      <td className="px-5 py-4">
                        <code>alert</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/checkbox"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Checkbox
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
              ["Variants", "#variants"],
              ["With Icon", "#with-icon"],
              ["With Actions", "#with-actions"],
              ["Update or Overwrite", "#overwrite"],
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