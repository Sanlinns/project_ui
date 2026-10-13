"use client"
import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  MessageSquareText,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"
const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add textarea`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add textarea`
const overwriteCode =
  `npx binhlaig-ui@latest add textarea --overwrite`
const importCode =
  `import { Textarea } from "@/components/ui/textarea"`







const textareaMyanmar: Record<string, string> = {
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
  "Feedback": "အကြံပြုချက်",
  "Submit": "ပေးပို့ရန်",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "API Reference": "API အသုံးပြုနည်း",
  "Component": "Component",
  "Values": "သတ်မှတ်နိုင်သော တန်ဖိုးများ",
  "Default": "ပုံမှန်တန်ဖိုး",
  "Previous component": "ယခင် Component",
  "Next": "နောက်သို့",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Preview": "နမူနာ",
  "Code": "Code",
  "Native Beta": "Native (စမ်းသပ်ဆဲ)",
  "Shadcn Stable": "Shadcn (တည်ငြိမ်သော version)",
  "Name": "အမည်",
  "Message": "စာတို",
  "Usage": "အသုံးပြုပုံ",
  "Copy install command": "Install command ကူးယူရန်",
  "Text": "စာသား",
  "With Label": "Label နှင့် တွဲသုံးခြင်း",
  "Form Example": "ဖောင် နမူနာ",
  "A styled multiline text field for messages, descriptions, feedback and longer form content.": "စာတို၊ ရှင်းလင်းချက်၊ အကြံပြုချက်နှင့် ရှည်လျားသော ဖောင်စာသားများကို လိုင်းများစွာ ဖြည့်သွင်းရန် Textarea။",
  "Initialize Binhlaig UI and install Textarea with your preferred installer.": "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Textarea ကို ထည့်သွင်းပါ။",
  "Import Textarea from your UI component directory.": "မိမိ UI component directory မှ Textarea ကို import လုပ်ပါ။",
  "Use Textarea for multiline user input.": "စာသားလိုင်းများစွာ ဖြည့်သွင်းရန် Textarea ကို အသုံးပြုပါ။",
  "Write your message...": "မိမိစာတိုကို ရေးပါ…",
  "Connect the label and helper text to the textarea.": "Label နှင့် ရှင်းလင်းချက်ကို Textarea နှင့် ချိတ်ဆက်ပါ။",
  "Type your message here.": "ဒီနေရာမှာ စာတိုကို ရေးပါ။",
  "Your message will be visible to the support team.": "မိမိစာတိုကို အကူအညီပေးသော အဖွဲ့က မြင်ရပါမယ်။",
  "Sizes": "အရွယ်အစားများ",
  "Textarea includes small, default and large sizes.": "Textarea ကို အသေး၊ ပုံမှန်နှင့် အကြီး အရွယ်အစားများဖြင့် အသုံးပြုနိုင်ပါတယ်။",
  "Small textarea": "အရွယ်အစားငယ်သော Textarea",
  "Default textarea": "ပုံမှန်အရွယ်အစား Textarea",
  "Large textarea": "အရွယ်အစားကြီးသော Textarea",
  "States": "အခြေအနေများ",
  "Use disabled and aria-invalid for form states.": "ဖောင်အခြေအနေကို ပြသရန် disabled နှင့် aria-invalid ကို အသုံးပြုပါ။",
  "Normal": "ပုံမှန်အခြေအနေ",
  "Disabled": "ဖြည့်သွင်းခွင့် ပိတ်ထားသည်",
  "This value is invalid.": "ဒီတန်ဖိုး မမှန်ကန်ပါ။",
  "Please enter a valid message.": "မှန်ကန်သော စာတိုကို ဖြည့်ပါ။",
  "Resize": "အရွယ်အစား ပြောင်းခြင်း",
  "Control how the user can resize the textarea.": "အသုံးပြုသူက Textarea အရွယ်အစားကို ပြောင်းနိုင်ပုံကို သတ်မှတ်ပါ။",
  "Resize disabled": "အရွယ်အစား ပြောင်းခွင့်မရှိ",
  "Resize vertically": "ဒေါင်လိုက် အရွယ်အစားပြောင်းနိုင်သည်",
  "Resize both directions": "နှစ်ဖက်လုံး အရွယ်အစားပြောင်းနိုင်သည်",
  "Character Count": "စာလုံးရေ တွက်ခြင်း",
  "Display the current and maximum character count.": "လက်ရှိ စာလုံးရေနှင့် အများဆုံးဖြည့်သွင်းနိုင်သော စာလုံးရေကို ပြပါ။",
  "Write a short description...": "ရှင်းလင်းချက်အတို ရေးပါ…",
  "Use Textarea in a controlled feedback form.": "State ဖြင့် ထိန်းချုပ်သော အကြံပြုချက်ဖောင်တွင် Textarea ကို အသုံးပြုပါ။",
  "Tell us what you think...": "မိမိအမြင်ကို ရေးပါ…",
  "Submit feedback": "အကြံပြုချက် ပေးပို့ရန်",
  "Replace an older Textarea source with the latest registry version.": "Textarea source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Textarea supports native HTML attributes and these styling props.": "Textarea တွင် native HTML attributes နှင့် အောက်ပါ အပြင်အဆင် props များကို အသုံးပြုနိုင်ပါတယ်။"
}
function useTextareaText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? textareaMyanmar[text] ?? text : text
  return { language, t }
}
const textareaExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaDemo() {\n  return (\n<Textarea placeholder={\"Write your message...\"} />\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaDemo() {\n  return (\n<Textarea placeholder={\"မိမိစာတိုကို ရေးပါ…\"} />\n  )\n}"
  },
  "labelCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaWithLabel() {\n  return (\n<div className=\"grid w-full gap-2\">\n                    <label\n                      htmlFor=\"docs-message\"\n                      className=\"text-sm font-medium\"\n                    >{\"Message\"}</label>\n                    <Textarea\n                      id=\"docs-message\"\n                      placeholder={\"Type your message here.\"}\n                    />\n                    <p className=\"text-xs text-muted-foreground\">{\"Your message will be visible to the support team.\"}</p>\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaWithLabel() {\n  return (\n<div className=\"grid w-full gap-2\">\n                    <label\n                      htmlFor=\"docs-message\"\n                      className=\"text-sm font-medium\"\n                    >{\"စာတို\"}</label>\n                    <Textarea\n                      id=\"docs-message\"\n                      placeholder={\"ဒီနေရာမှာ စာတိုကို ရေးပါ။\"}\n                    />\n                    <p className=\"text-xs text-muted-foreground\">{\"မိမိစာတိုကို အကူအညီပေးသော အဖွဲ့က မြင်ရပါမယ်။\"}</p>\n                  </div>\n  )\n}"
  },
  "sizesCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaSizes() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea\n                      size=\"sm\"\n                      placeholder={\"Small textarea\"}\n                    />\n                    <Textarea\n                      size=\"default\"\n                      placeholder={\"Default textarea\"}\n                    />\n                    <Textarea\n                      size=\"lg\"\n                      placeholder={\"Large textarea\"}\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaSizes() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea\n                      size=\"sm\"\n                      placeholder={\"အရွယ်အစားငယ်သော Textarea\"}\n                    />\n                    <Textarea\n                      size=\"default\"\n                      placeholder={\"ပုံမှန်အရွယ်အစား Textarea\"}\n                    />\n                    <Textarea\n                      size=\"lg\"\n                      placeholder={\"အရွယ်အစားကြီးသော Textarea\"}\n                    />\n                  </div>\n  )\n}"
  },
  "statesCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { AlertCircle } from \"lucide-react\"\n\nexport function TextareaStates() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea placeholder={\"Normal\"} />\n                    <Textarea\n                      disabled\n                      placeholder={\"Disabled\"}\n                    />\n                    <div className=\"grid gap-2\">\n                      <Textarea\n                        aria-invalid=\"true\"\n                        defaultValue={\"This value is invalid.\"}\n                      />\n                      <p className=\"flex items-center gap-1.5 text-xs text-destructive\">\n                        <AlertCircle className=\"size-3.5\" />{\"Please enter a valid message.\"}</p>\n                    </div>\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { AlertCircle } from \"lucide-react\"\n\nexport function TextareaStates() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea placeholder={\"ပုံမှန်အခြေအနေ\"} />\n                    <Textarea\n                      disabled\n                      placeholder={\"ဖြည့်သွင်းခွင့် ပိတ်ထားသည်\"}\n                    />\n                    <div className=\"grid gap-2\">\n                      <Textarea\n                        aria-invalid=\"true\"\n                        defaultValue={\"ဒီတန်ဖိုး မမှန်ကန်ပါ။\"}\n                      />\n                      <p className=\"flex items-center gap-1.5 text-xs text-destructive\">\n                        <AlertCircle className=\"size-3.5\" />{\"မှန်ကန်သော စာတိုကို ဖြည့်ပါ။\"}</p>\n                    </div>\n                  </div>\n  )\n}"
  },
  "resizeCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaResize() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea\n                      resize=\"none\"\n                      placeholder={\"Resize disabled\"}\n                    />\n                    <Textarea\n                      resize=\"vertical\"\n                      placeholder={\"Resize vertically\"}\n                    />\n                    <Textarea\n                      resize=\"both\"\n                      placeholder={\"Resize both directions\"}\n                    />\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function TextareaResize() {\n  return (\n<div className=\"grid gap-4\">\n                    <Textarea\n                      resize=\"none\"\n                      placeholder={\"အရွယ်အစား ပြောင်းခွင့်မရှိ\"}\n                    />\n                    <Textarea\n                      resize=\"vertical\"\n                      placeholder={\"ဒေါင်လိုက် အရွယ်အစားပြောင်းနိုင်သည်\"}\n                    />\n                    <Textarea\n                      resize=\"both\"\n                      placeholder={\"နှစ်ဖက်လုံး အရွယ်အစားပြောင်းနိုင်သည်\"}\n                    />\n                  </div>\n  )\n}"
  },
  "countCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function CharacterCountTextarea() {\n  const [countValue, setCountValue] = React.useState(\"\")\n\n  return (\n<div className=\"grid gap-2\">\n                    <Textarea\n                      value={countValue}\n                      maxLength={160}\n                      onChange={(event) =>\n                        setCountValue(event.target.value)\n                      }\n                      placeholder={\"Write a short description...\"}\n                    />\n                    <div className=\"text-right text-xs text-muted-foreground\">\n                      {countValue.length}/160\n                    </div>\n                  </div>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nexport function CharacterCountTextarea() {\n  const [countValue, setCountValue] = React.useState(\"\")\n\n  return (\n<div className=\"grid gap-2\">\n                    <Textarea\n                      value={countValue}\n                      maxLength={160}\n                      onChange={(event) =>\n                        setCountValue(event.target.value)\n                      }\n                      placeholder={\"ရှင်းလင်းချက်အတို ရေးပါ…\"}\n                    />\n                    <div className=\"text-right text-xs text-muted-foreground\">\n                      {countValue.length}/160\n                    </div>\n                  </div>\n  )\n}"
  },
  "formCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Button } from \"@/components/ui/button\"\nimport { MessageSquareText } from \"lucide-react\"\n\nexport function FeedbackTextarea() {\n  const [feedback, setFeedback] = React.useState(\"\")\n\n  return (\n<form\n                    className=\"grid gap-4\"\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                    }}\n                  >\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"docs-feedback\"\n                        className=\"text-sm font-medium\"\n                      >{\"Feedback\"}</label>\n                      <Textarea\n                        id=\"docs-feedback\"\n                        value={feedback}\n                        onChange={(event) =>\n                          setFeedback(event.target.value)\n                        }\n                        placeholder={\"Tell us what you think...\"}\n                      />\n                    </div>\n                    <Button type=\"submit\">\n                      <MessageSquareText className=\"size-4\" />{\"Submit feedback\"}</Button>\n                  </form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Button } from \"@/components/ui/button\"\nimport { MessageSquareText } from \"lucide-react\"\n\nexport function FeedbackTextarea() {\n  const [feedback, setFeedback] = React.useState(\"\")\n\n  return (\n<form\n                    className=\"grid gap-4\"\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                    }}\n                  >\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"docs-feedback\"\n                        className=\"text-sm font-medium\"\n                      >{\"အကြံပြုချက်\"}</label>\n                      <Textarea\n                        id=\"docs-feedback\"\n                        value={feedback}\n                        onChange={(event) =>\n                          setFeedback(event.target.value)\n                        }\n                        placeholder={\"မိမိအမြင်ကို ရေးပါ…\"}\n                      />\n                    </div>\n                    <Button type=\"submit\">\n                      <MessageSquareText className=\"size-4\" />{\"အကြံပြုချက် ပေးပို့ရန်\"}</Button>\n                  </form>\n  )\n}"
  }
} as const
const textareaPageStyles = `
.textarea-docs[data-language="my"] :is(h1,h2,h3,p,label,a,th,td) { letter-spacing:normal; line-height:1.9; }
.textarea-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.textarea-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.textarea-docs [data-slot="label"] { flex-wrap:wrap; line-height:1.9; row-gap:4px; }
.textarea-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; line-height:1.9; padding-block:8px; }
.textarea-docs[data-language="my"] textarea { line-height:1.9; }
.textarea-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .textarea-docs[data-language="my"] h1 { font-size:28px; } }
`

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}
function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const { t } = useTextareaText()
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
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
        <div className="flex items-center">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize transition-colors",
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
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
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
        <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-6 sm:p-10">
          <div className="w-full max-w-xl">
            {children}
          </div>
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
function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  const { t } = useTextareaText()
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
export default function TextareaDocumentationPage() {
  const { t, language } = useTextareaText()
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [installCopied, setInstallCopied] = React.useState(false)
  const [installCopyFailed, setInstallCopyFailed] = React.useState(false)
  const [countValue, setCountValue] =
    React.useState("")
  const [feedback, setFeedback] =
    React.useState("")
  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode
  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(installCode)
      setInstallCopyFailed(false)
      setInstallCopied(true)
      window.setTimeout(() => setInstallCopied(false), 1500)
    } catch { setInstallCopyFailed(true) }
  }
  return (
    <div lang={language} data-language={language} className="textarea-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{textareaPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="transition hover:text-foreground"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">
              Textarea
            </span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Textarea
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A styled multiline text field for messages, descriptions, feedback and longer form content.")}</p>
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
                description={t("Initialize Binhlaig UI and install Textarea with your preferred installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-muted/60 p-4 font-mono text-sm text-foreground">
                  <code>{initCode}</code>
                </pre>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="flex border-b border-border p-1">
                  <button
                    type="button"
                    onClick={() => setInstaller("native")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "native"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >{t("Native Beta")}</button>
                  <button
                    type="button"
                    onClick={() => setInstaller("shadcn")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "shadcn"
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >{t("Shadcn Stable")}</button>
                </div>
                <div className="bg-muted/60">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2">
                    <span className="text-xs text-muted-foreground">{t("Terminal")}</span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
                      aria-label={t(installCopied ? "Copied" : "Copy install command")} title={t(installCopyFailed ? "Copy failed" : installCopied ? "Copied" : "Copy install command")}
                    >
                      {installCopied ? (
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
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Textarea from your UI component directory.")}
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
                title={t("Usage")}
                description={t("Use Textarea for multiline user input.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.basicCode[language]}>
                  <Textarea placeholder={t("Write your message...")} />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="label"
                title={t("With Label")}
                description={t("Connect the label and helper text to the textarea.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.labelCode[language]}>
                  <div className="grid w-full gap-2">
                    <label
                      htmlFor="docs-message"
                      className="text-sm font-medium"
                    >{t("Message")}</label>
                    <Textarea
                      id="docs-message"
                      placeholder={t("Type your message here.")}
                    />
                    <p className="text-xs text-muted-foreground">{t("Your message will be visible to the support team.")}</p>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="sizes"
                title={t("Sizes")}
                description={t("Textarea includes small, default and large sizes.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.sizesCode[language]}>
                  <div className="grid gap-4">
                    <Textarea
                      size="sm"
                      placeholder={t("Small textarea")}
                    />
                    <Textarea
                      size="default"
                      placeholder={t("Default textarea")}
                    />
                    <Textarea
                      size="lg"
                      placeholder={t("Large textarea")}
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="states"
                title={t("States")}
                description={t("Use disabled and aria-invalid for form states.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.statesCode[language]}>
                  <div className="grid gap-4">
                    <Textarea placeholder={t("Normal")} />
                    <Textarea
                      disabled
                      placeholder={t("Disabled")}
                    />
                    <div className="grid gap-2">
                      <Textarea
                        aria-invalid="true"
                        defaultValue={t("This value is invalid.")}
                      />
                      <p className="flex items-center gap-1.5 text-xs text-destructive">
                        <AlertCircle className="size-3.5" />{t("Please enter a valid message.")}</p>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="resize"
                title={t("Resize")}
                description={t("Control how the user can resize the textarea.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.resizeCode[language]}>
                  <div className="grid gap-4">
                    <Textarea
                      resize="none"
                      placeholder={t("Resize disabled")}
                    />
                    <Textarea
                      resize="vertical"
                      placeholder={t("Resize vertically")}
                    />
                    <Textarea
                      resize="both"
                      placeholder={t("Resize both directions")}
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="character-count"
                title={t("Character Count")}
                description={t("Display the current and maximum character count.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.countCode[language]}>
                  <div className="grid gap-2">
                    <Textarea
                      value={countValue}
                      maxLength={160}
                      onChange={(event) =>
                        setCountValue(event.target.value)
                      }
                      placeholder={t("Write a short description...")}
                    />
                    <div className="text-right text-xs text-muted-foreground">
                      {countValue.length}/160
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="form"
                title={t("Form Example")}
                description={t("Use Textarea in a controlled feedback form.")}
              />
              <div className="mt-6">
                <CodePreview code={textareaExamples.formCode[language]}>
                  <form
                    className="grid gap-4"
                    onSubmit={(event) => {
                      event.preventDefault()
                    }}
                  >
                    <div className="grid gap-2">
                      <label
                        htmlFor="docs-feedback"
                        className="text-sm font-medium"
                      >{t("Feedback")}</label>
                      <Textarea
                        id="docs-feedback"
                        value={feedback}
                        onChange={(event) =>
                          setFeedback(event.target.value)
                        }
                        placeholder={t("Tell us what you think...")}
                      />
                    </div>
                    <Button type="submit">
                      <MessageSquareText className="size-4" />{t("Submit feedback")}</Button>
                  </form>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Textarea source with the latest registry version.")}
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
                description={t("Textarea supports native HTML attributes and these styling props.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        Prop
                      </th>
                      <th className="px-5 py-4 font-medium">{t("Values")}</th>
                      <th className="px-5 py-4 font-medium">{t("Default")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <ApiRow
                      name="size"
                      values="sm, default, lg"
                      defaultValue="default"
                    />
                    <ApiRow
                      name="resize"
                      values="none, vertical, horizontal, both"
                      defaultValue="vertical"
                    />
                    <ApiRow
                      name="aria-invalid"
                      values="boolean"
                      defaultValue="false"
                    />
                    <ApiRow
                      name="disabled"
                      values="boolean"
                      defaultValue="false"
                    />
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/input"
                className="group rounded-2xl border border-border p-5 transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Input
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="group rounded-2xl border border-border p-5 text-right transition hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Next")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">{t("All components")}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
              ["With Label", "#label"],
              ["Sizes", "#sizes"],
              ["States", "#states"],
              ["Resize", "#resize"],
              ["Character Count", "#character-count"],
              ["Form Example", "#form"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-muted-foreground transition hover:text-primary"
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/textarea/page.tsx"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground transition hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}
function ApiRow({
  name,
  values,
  defaultValue,
}: {
  name: string
  values: string
  defaultValue: string
}) {
  return (
    <tr>
      <td className="px-5 py-4">
        <code>{name}</code>
      </td>
      <td className="px-5 py-4 text-muted-foreground">
        {values}
      </td>
      <td className="px-5 py-4">
        <code>{defaultValue}</code>
      </td>
    </tr>
  )
}