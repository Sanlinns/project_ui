
"use client"
import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Settings,
  Sparkles,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"
const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add popover`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add popover`
const overwriteCode =
  `npx binhlaig-ui@latest add popover --overwrite`
const importCode = `import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"`




const popoverMyanmar: Record<string, string> = {
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
  "Close": "ပိတ်ရန်",
  "All": "အားလုံး",
  "Settings": "ဆက်တင်များ",
  "Controlled State": "State ဖြင့် ထိန်းချုပ်ခြင်း",
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
  "Native Beta": "Native (စမ်းသပ်ဆဲ)",
  "Shadcn Stable": "Shadcn (တည်ငြိမ်သော version)",
  "Groups title and description.": "ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းထားပါတယ်။",
  "Name": "အမည်",
  "Usage": "အသုံးပြုပုံ",
  "Initialize Binhlaig UI and install Popover using your preferred installer.": "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Popover ကို ထည့်သွင်းပါ။",
  "Import Popover primitives from your UI directory.": "မိမိ UI directory မှ Popover components များကို import လုပ်ပါ။",
  "Use Popover for compact contextual content.": "ဆက်စပ်အကြောင်းအရာကို နေရာယူမှုနည်းစွာ ပြသရန် Popover ကို အသုံးပြုပါ။",
  "Open popover": "Popover ဖွင့်ရန်",
  "Account settings": "အကောင့် ဆက်တင်များ",
  "Manage your account preferences.": "မိမိအကောင့် ဆက်တင်များကို ပြင်ဆင်ပါ။",
  "Form Popover": "ဖောင်ပါသော Popover",
  "Place compact form controls inside the popover.": "Popover ထဲတွင် ဖောင်ငယ်၏ input များကို ထည့်သွင်းပါ။",
  "Dimensions": "အရွယ်အစားများ",
  "Width": "အကျယ်",
  "Height": "အမြင့်",
  "Open on Hover": "ညွှန်တံတင်လျှင် ဖွင့်ခြင်း",
  "Enable openOnHover and configure the delay.": "openOnHover ကို ဖွင့်ပြီး နှောင့်နှေးချိန်ကို သတ်မှတ်ပါ။",
  "Hover me": "ညွှန်တံ တင်ကြည့်ပါ",
  "This popover opens when the trigger is hovered.": "ခလုတ်ပေါ်သို့ ညွှန်တံတင်သည့်အခါ ဒီ Popover ပွင့်လာပါတယ်။",
  "Manage the open state from the parent component.": "အပြင်ဘက် component မှ အဖွင့်၊ အပိတ် state ကို ထိန်းချုပ်ပါ။",
  "Open controlled popover": "State ဖြင့် Popover ဖွင့်ရန်",
  "Controlled state": "State ဖြင့် ထိန်းချုပ်ခြင်း",
  "The parent component controls this popover.": "ဒီ Popover ကို အပြင်ဘက် component မှ ထိန်းချုပ်ထားပါတယ်။",
  "Replace an older Popover source with the latest registry version.": "Popover source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Main components available in the Binhlaig UI Popover.": "Binhlaig UI Popover တွင် အသုံးပြုနိုင်သော အဓိက components များ။",
  "Controls the open state.": "အဖွင့်၊ အပိတ် state ကို ထိန်းချုပ်ပါတယ်။",
  "Opens the popover.": "Popover ကို ဖွင့်ပေးပါတယ်။",
  "Renders the positioned popup.": "သတ်မှတ်ထားသော နေရာတွင် popup ကို ပြပါတယ်။",
  "Accessible title.": "အသုံးပြုသူအားလုံးအတွက် ဖတ်ရှုနိုင်သော ခေါင်းစဉ်။",
  "Accessible description.": "ခေါင်းစဉ်အတွက် ရှင်းလင်းချက်။",
  "Closes the popover.": "Popover ကို ပိတ်ပေးပါတယ်။",
  "Displays rich content in an accessible popup anchored to a trigger.": "ခလုတ်နှင့် ချိတ်ဆက်ထားသော popup ထဲတွင် အသုံးပြုရလွယ်အောင် အကြောင်းအရာများကို ပြသပေးပါတယ်။"
}
function usePopoverText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? popoverMyanmar[text] ?? text : text
  return { language, t }
}
const popoverExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from \"@/components/ui/popover\"\nimport { User } from \"lucide-react\"\n\nexport function PopoverDemo() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild>\n                      <Button variant=\"outline\">\n                        <User className=\"size-4\" />{\"Open popover\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverHeader>\n                        <PopoverTitle>{\"Account settings\"}</PopoverTitle>\n                        <PopoverDescription>{\"Manage your account preferences.\"}</PopoverDescription>\n                      </PopoverHeader>\n                    </PopoverContent>\n                  </Popover>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription } from \"@/components/ui/popover\"\nimport { User } from \"lucide-react\"\n\nexport function PopoverDemo() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild>\n                      <Button variant=\"outline\">\n                        <User className=\"size-4\" />{\"Popover ဖွင့်ရန်\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverHeader>\n                        <PopoverTitle>{\"အကောင့် ဆက်တင်များ\"}</PopoverTitle>\n                        <PopoverDescription>{\"မိမိအကောင့် ဆက်တင်များကို ပြင်ဆင်ပါ။\"}</PopoverDescription>\n                      </PopoverHeader>\n                    </PopoverContent>\n                  </Popover>\n  )\n}"
  },
  "formCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from \"@/components/ui/popover\"\nimport { Settings } from \"lucide-react\"\n\nexport function SettingsPopover() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild>\n                      <Button variant=\"outline\">\n                        <Settings className=\"size-4\" />{\"Settings\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"w-80 max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverHeader>\n                        <PopoverTitle>{\"Dimensions\"}</PopoverTitle>\n                      </PopoverHeader>\n                      <div className=\"mt-4 grid gap-3\">\n                        <label className=\"grid gap-1.5 text-sm\">{\"Width\"}<input className=\"h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\" />\n                        </label>\n                        <label className=\"grid gap-1.5 text-sm\">{\"Height\"}<input className=\"h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\" />\n                        </label>\n                      </div>\n                    </PopoverContent>\n                  </Popover>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle } from \"@/components/ui/popover\"\nimport { Settings } from \"lucide-react\"\n\nexport function SettingsPopover() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild>\n                      <Button variant=\"outline\">\n                        <Settings className=\"size-4\" />{\"ဆက်တင်များ\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"w-80 max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverHeader>\n                        <PopoverTitle>{\"အရွယ်အစားများ\"}</PopoverTitle>\n                      </PopoverHeader>\n                      <div className=\"mt-4 grid gap-3\">\n                        <label className=\"grid gap-1.5 text-sm\">{\"အကျယ်\"}<input className=\"h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\" />\n                        </label>\n                        <label className=\"grid gap-1.5 text-sm\">{\"အမြင့်\"}<input className=\"h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\" />\n                        </label>\n                      </div>\n                    </PopoverContent>\n                  </Popover>\n  )\n}"
  },
  "hoverCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverDescription } from \"@/components/ui/popover\"\nimport { Bell } from \"lucide-react\"\n\nexport function HoverPopover() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild openOnHover delay={200}>\n                      <Button variant=\"outline\">\n                        <Bell className=\"size-4\" />{\"Hover me\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverDescription>{\"This popover opens when the trigger is hovered.\"}</PopoverDescription>\n                    </PopoverContent>\n                  </Popover>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverDescription } from \"@/components/ui/popover\"\nimport { Bell } from \"lucide-react\"\n\nexport function HoverPopover() {\n  return (\n<Popover>\n                    <PopoverTrigger asChild openOnHover delay={200}>\n                      <Button variant=\"outline\">\n                        <Bell className=\"size-4\" />{\"ညွှန်တံ တင်ကြည့်ပါ\"}</Button>\n                    </PopoverTrigger>\n                    <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                      <PopoverDescription>{\"ခလုတ်ပေါ်သို့ ညွှန်တံတင်သည့်အခါ ဒီ Popover ပွင့်လာပါတယ်။\"}</PopoverDescription>\n                    </PopoverContent>\n                  </Popover>\n  )\n}"
  },
  "controlledCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription, PopoverClose } from \"@/components/ui/popover\"\n\nexport function ControlledPopover() {\n  const [controlledOpen, setControlledOpen] = React.useState(false)\n\n  return (\n<Popover\n                      open={controlledOpen}\n                      onOpenChange={setControlledOpen}\n                    >\n<PopoverTrigger asChild><Button onClick={() => setControlledOpen(true)}>{\"Open controlled popover\"}</Button></PopoverTrigger>\n                      <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                        <div className=\"flex items-start justify-between gap-4\">\n                          <PopoverHeader>\n                            <PopoverTitle>{\"Controlled state\"}</PopoverTitle>\n                            <PopoverDescription>{\"The parent component controls this popover.\"}</PopoverDescription>\n                          </PopoverHeader>\n                          <PopoverClose aria-label={\"Close\"} className=\"shrink-0\" />\n                        </div>\n                      </PopoverContent>\n                    </Popover>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverTitle, PopoverDescription, PopoverClose } from \"@/components/ui/popover\"\n\nexport function ControlledPopover() {\n  const [controlledOpen, setControlledOpen] = React.useState(false)\n\n  return (\n<Popover\n                      open={controlledOpen}\n                      onOpenChange={setControlledOpen}\n                    >\n<PopoverTrigger asChild><Button onClick={() => setControlledOpen(true)}>{\"State ဖြင့် Popover ဖွင့်ရန်\"}</Button></PopoverTrigger>\n                      <PopoverContent className=\"max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10\">\n                        <div className=\"flex items-start justify-between gap-4\">\n                          <PopoverHeader>\n                            <PopoverTitle>{\"State ဖြင့် ထိန်းချုပ်ခြင်း\"}</PopoverTitle>\n                            <PopoverDescription>{\"ဒီ Popover ကို အပြင်ဘက် component မှ ထိန်းချုပ်ထားပါတယ်။\"}</PopoverDescription>\n                          </PopoverHeader>\n                          <PopoverClose aria-label={\"ပိတ်ရန်\"} className=\"shrink-0\" />\n                        </div>\n                      </PopoverContent>\n                    </Popover>\n  )\n}"
  }
} as const
const popoverPageStyles = `
.popover-docs[data-language="my"] :is(h1,h2,h3,p,label,a,th,td) { letter-spacing:normal; line-height:1.9; }
.popover-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.popover-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.popover-docs [data-slot="label"] { flex-wrap:wrap; line-height:1.9; row-gap:4px; }
.popover-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; line-height:1.9; padding-block:8px; }
.popover-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.popover-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .popover-docs[data-language="my"] h1 { font-size:28px; } }
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
  const { t } = usePopoverText()
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
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
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
                <span className="absolute inset-x-2 bottom-0 h-0.5 bg-primary" />
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
        <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
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
function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  const { t } = usePopoverText()
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">{t(title)}</h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {t(description)}
        </p>
      )}
    </div>
  )
}
export default function PopoverDocumentationPage() {
  const { t, language } = usePopoverText()
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const [controlledOpen, setControlledOpen] =
    React.useState(false)
  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode
  const copyInstall = async () => {
    try {
      await navigator.clipboard.writeText(installCode)
      setCopyFailed(false)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch { setCopyFailed(true) }
  }
  return (
    <div lang={language} data-language={language} className="popover-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{popoverPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Popover</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Popover
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("Displays rich content in an accessible popup anchored to a trigger.")}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.querySelector("#usage")?.scrollIntoView({
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
                      ?.scrollIntoView({ behavior: "smooth" })
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
                description={t("Initialize Binhlaig UI and install Popover using your preferred installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-muted/60 p-4 font-mono text-sm text-foreground">
                  <code>{initCode}</code>
                </pre>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <div className="flex border-b border-border p-1">
                  {(["native", "shadcn"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setInstaller(item)}
                      className={cn(
                        "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium",
                        installer === item
                          ? item === "native"
                            ? "bg-primary text-primary-foreground"
                            : "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {t(item === "native" ? "Native Beta" : "Shadcn Stable")}
                    </button>
                  ))}
                </div>
                <div className="bg-muted/60">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2">
                    <span className="text-xs text-muted-foreground">{t("Terminal")}</span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      aria-label={t(copied ? "Copied" : "Copy code")}
                      title={t(copyFailed ? "Copy failed" : copied ? "Copied" : "Copy code")}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
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
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Popover primitives from your UI directory.")}
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
                description={t("Use Popover for compact contextual content.")}
              />
              <div className="mt-6">
                <CodePreview code={popoverExamples.basicCode[language]}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <User className="size-4" />{t("Open popover")}</Button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10">
                      <PopoverHeader>
                        <PopoverTitle>{t("Account settings")}</PopoverTitle>
                        <PopoverDescription>{t("Manage your account preferences.")}</PopoverDescription>
                      </PopoverHeader>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="form"
                title={t("Form Popover")}
                description={t("Place compact form controls inside the popover.")}
              />
              <div className="mt-6">
                <CodePreview code={popoverExamples.formCode[language]}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <Settings className="size-4" />{t("Settings")}</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10">
                      <PopoverHeader>
                        <PopoverTitle>{t("Dimensions")}</PopoverTitle>
                      </PopoverHeader>
                      <div className="mt-4 grid gap-3">
                        <label className="grid gap-1.5 text-sm">{t("Width")}<input className="h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20" />
                        </label>
                        <label className="grid gap-1.5 text-sm">{t("Height")}<input className="h-9 rounded-lg border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20" />
                        </label>
                      </div>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="hover"
                title={t("Open on Hover")}
                description={t("Enable openOnHover and configure the delay.")}
              />
              <div className="mt-6">
                <CodePreview code={popoverExamples.hoverCode[language]}>
                  <Popover>
                    <PopoverTrigger asChild openOnHover delay={200}>
                      <Button variant="outline">
                        <Bell className="size-4" />{t("Hover me")}</Button>
                    </PopoverTrigger>
                    <PopoverContent className="max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10">
                      <PopoverDescription>{t("This popover opens when the trigger is hovered.")}</PopoverDescription>
                    </PopoverContent>
                  </Popover>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled State")}
                description={t("Manage the open state from the parent component.")}
              />
              <div className="mt-6">
                <CodePreview code={popoverExamples.controlledCode[language]}>
                  <Popover
                      open={controlledOpen}
                      onOpenChange={setControlledOpen}
                    >
<PopoverTrigger asChild><Button onClick={() => setControlledOpen(true)}>{t("Open controlled popover")}</Button></PopoverTrigger>
                      <PopoverContent className="max-w-[calc(100vw-2rem)] [&_h2]:leading-8 [&_p]:leading-8 [&_label]:leading-8 [&_input]:min-h-10">
                        <div className="flex items-start justify-between gap-4">
                          <PopoverHeader>
                            <PopoverTitle>{t("Controlled state")}</PopoverTitle>
                            <PopoverDescription>{t("The parent component controls this popover.")}</PopoverDescription>
                          </PopoverHeader>
                          <PopoverClose aria-label={t("Close")} className="shrink-0" />
                        </div>
                      </PopoverContent>
                    </Popover>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Popover source with the latest registry version.")}
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
                description={t("Main components available in the Binhlaig UI Popover.")}
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
                      ["Popover", "Controls the open state."],
                      ["PopoverTrigger", "Opens the popover."],
                      ["PopoverContent", "Renders the positioned popup."],
                      ["PopoverHeader", "Groups title and description."],
                      ["PopoverTitle", "Accessible title."],
                      ["PopoverDescription", "Accessible description."],
                      ["PopoverClose", "Closes the popover."],
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
                href="/docs/components/textarea"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Textarea
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="group rounded-2xl border border-border p-5 text-right hover:border-primary/40 hover:bg-primary/5"
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
              ["Form Popover", "#form"],
              ["Open on Hover", "#hover"],
              ["Controlled State", "#controlled"],
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/popover/page.tsx"
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