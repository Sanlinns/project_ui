"use client"
import * as React from "react"
import { useLanguage } from "@/components/providers/language-provider"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Sparkles,
  UserRound,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarStatus,
} from "@/components/ui/avatar"
const avatarMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A profile image component with fallback initials, sizes, status indicators and grouped layouts.": "Profile ပုံ၊ ပုံမရှိလျှင် အမည်အတိုကောက်၊ အရွယ်အစား၊ အခြေအနေအမှတ်အသားနှင့် အုပ်စုပုံစံတို့ကို ပြသနိုင်သော Component။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install Avatar using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Avatar ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Copy install command": "Install command ကူးယူရန်",
  "Import": "Import လုပ်ခြင်း",
  "Import Avatar primitives from your UI directory.": "Avatar ၏ အခြေခံ Components များကို မိမိ UI folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Render the fallback first and place the image above it.": "Fallback ကို အရင်ထည့်ပြီး ၎င်းအပေါ်တွင် image ကို ပြသပါ။",
  "Fallback": "ပုံမရှိသည့်အခါ အစားထိုးပြသမှု",
  "Fallback initials remain visible when the image is missing or fails to load.": "ပုံမရှိသည့်အခါ သို့မဟုတ် ပုံဖွင့်မရသည့်အခါ အမည်အတိုကောက်ကို ဆက်ပြပေးပါသည်။",
  "Sizes": "အရွယ်အစားများ",
  "Use sm, md, lg or xl depending on the layout.": "Layout နှင့် ကိုက်ညီသည့် sm၊ md၊ lg သို့မဟုတ် xl အရွယ်အစားကို အသုံးပြုပါ။",
  "Status": "အခြေအနေ",
  "Add a compact presence indicator.": "အသုံးပြုသူ၏ အခြေအနေကို ပြသသော အမှတ်အသားငယ် ထည့်ပါ။",
  "Avatar Group": "Avatar အုပ်စု",
  "Stack multiple avatars and display the remaining count.": "Avatar များကို ထပ်စီပြပြီး ကျန်ရှိသူအရေအတွက်ကို ပြသပါ။",
  "Custom Colors": "စိတ်ကြိုက်အရောင်များ",
  "Style the fallback with ordinary utility classes.": "Fallback ၏ အရောင်နှင့် ပုံစံကို utility classes များဖြင့် ပြင်ဆင်ပါ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Avatar source with the latest registry version.": "Avatar source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components and custom props available in Binhlaig UI Avatar.": "Binhlaig UI Avatar တွင် ရရှိနိုင်သော အဓိက Components နှင့် props များ။",
  "Component": "Component",
  "Purpose": "ရည်ရွယ်ချက်",
  "Prop": "Prop",
  "Values": "တန်ဖိုးများ",
  "Default": "မူလတန်ဖိုး",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Profile image container.": "Profile ပုံကို စုစည်းပြသသော container။",
  "Profile image with load failure handling.": "ပုံဖွင့်မရသည့်အခြေအနေကို ကိုင်တွယ်ပေးသော profile image။",
  "Initials or fallback icon.": "အမည်အတိုကောက် သို့မဟုတ် အစားထိုး icon။",
  "Presence indicator.": "အသုံးပြုသူ၏ အခြေအနေအမှတ်အသား။",
  "Overlapping avatar layout.": "Avatar များကို ထပ်စီပြသော layout။",
  "Remaining people count.": "ကျန်ရှိသူအရေအတွက်။",
  "preview": "နမူနာ",
  "code": "Code",
  "online": "အွန်လိုင်း",
  "offline": "အော့ဖ်လိုင်း",
  "busy": "အလုပ်များနေသည်",
  "away": "ခေတ္တမရှိပါ"
};

function useAvatarText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (avatarMyanmar[text] ?? text) : text;
}

const avatarExamples = {
  "usage": {
    "en": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<Avatar size=\"lg\">\n                    <AvatarFallback>SA</AvatarFallback>\n                    <AvatarImage src=\"/avatars/sai-aung.jpg\" alt=\"Sai Aung\"/>\n                  </Avatar>);\n}\n",
    "my": "import { Avatar, AvatarFallback, AvatarImage } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<Avatar size=\"lg\">\n                    <AvatarFallback>SA</AvatarFallback>\n                    <AvatarImage src=\"/avatars/sai-aung.jpg\" alt=\"Sai Aung\"/>\n                  </Avatar>);\n}\n"
  },
  "fallback": {
    "en": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nimport { UserRound } from \"lucide-react\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    <Avatar size=\"lg\">\n                      <AvatarFallback>SA</AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback>\n                        <UserRound className=\"size-5\"/>\n                      </AvatarFallback>\n                    </Avatar>\n                  </div>);\n}\n",
    "my": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nimport { UserRound } from \"lucide-react\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    <Avatar size=\"lg\">\n                      <AvatarFallback>SA</AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback>\n                        <UserRound className=\"size-5\"/>\n                      </AvatarFallback>\n                    </Avatar>\n                  </div>);\n}\n"
  },
  "sizes": {
    "en": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    {([\"sm\", \"md\", \"lg\", \"xl\"] as const).map((size) => (<Avatar key={size} size={size}>\n                          <AvatarFallback>\n                            SA\n                          </AvatarFallback>\n                        </Avatar>))}\n                  </div>);\n}\n",
    "my": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    {([\"sm\", \"md\", \"lg\", \"xl\"] as const).map((size) => (<Avatar key={size} size={size}>\n                          <AvatarFallback>\n                            SA\n                          </AvatarFallback>\n                        </Avatar>))}\n                  </div>);\n}\n"
  },
  "status": {
    "en": "import { Avatar, AvatarFallback, AvatarStatus } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-5\">\n                    {([\n            \"online\",\n            \"offline\",\n            \"busy\",\n            \"away\",\n        ] as const).map((status) => (<div key={status} className=\"grid justify-items-center gap-2\">\n                        <Avatar size=\"lg\">\n                          <AvatarFallback>\n                            SA\n                          </AvatarFallback>\n                          <AvatarStatus status={status}/>\n                        </Avatar>\n                        <span className=\"text-xs capitalize text-muted-foreground\">\n                          {status}\n                        </span>\n                      </div>))}\n                  </div>);\n}\n",
    "my": "import { Avatar, AvatarFallback, AvatarStatus } from \"@/components/ui/avatar\";\nconst statusLabels = { \"online\": \"အွန်လိုင်း\", \"offline\": \"အော့ဖ်လိုင်း\", \"busy\": \"အလုပ်များနေသည်\", \"away\": \"ခေတ္တမရှိပါ\" } as const;\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-5\">\n                    {([\n            \"online\",\n            \"offline\",\n            \"busy\",\n            \"away\",\n        ] as const).map((status) => (<div key={status} className=\"grid justify-items-center gap-2\">\n                        <Avatar size=\"lg\">\n                          <AvatarFallback>\n                            SA\n                          </AvatarFallback>\n                          <AvatarStatus status={status}/>\n                        </Avatar>\n                        <span className=\"text-xs capitalize text-muted-foreground\">\n                          {statusLabels[status]}\n                        </span>\n                      </div>))}\n                  </div>);\n}\n"
  },
  "group": {
    "en": "import { AvatarGroup, Avatar, AvatarFallback, AvatarGroupCount } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<AvatarGroup>\n                    <Avatar>\n                      <AvatarFallback>SA</AvatarFallback>\n                    </Avatar>\n                    <Avatar>\n                      <AvatarFallback>MM</AvatarFallback>\n                    </Avatar>\n                    <Avatar>\n                      <AvatarFallback>TK</AvatarFallback>\n                    </Avatar>\n                    <AvatarGroupCount>\n                      +4\n                    </AvatarGroupCount>\n                  </AvatarGroup>);\n}\n",
    "my": "import { AvatarGroup, Avatar, AvatarFallback, AvatarGroupCount } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<AvatarGroup>\n                    <Avatar>\n                      <AvatarFallback>SA</AvatarFallback>\n                    </Avatar>\n                    <Avatar>\n                      <AvatarFallback>MM</AvatarFallback>\n                    </Avatar>\n                    <Avatar>\n                      <AvatarFallback>TK</AvatarFallback>\n                    </Avatar>\n                    <AvatarGroupCount>\n                      +4\n                    </AvatarGroupCount>\n                  </AvatarGroup>);\n}\n"
  },
  "custom-colors": {
    "en": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300\">\n                        SA\n                      </AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300\">\n                        BL\n                      </AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300\">\n                        UI\n                      </AvatarFallback>\n                    </Avatar>\n                  </div>);\n}\n",
    "my": "import { Avatar, AvatarFallback } from \"@/components/ui/avatar\";\nexport function AvatarExample() {\n    return (<div className=\"flex items-center gap-4\">\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300\">\n                        SA\n                      </AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300\">\n                        BL\n                      </AvatarFallback>\n                    </Avatar>\n                    <Avatar size=\"lg\">\n                      <AvatarFallback className=\"bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300\">\n                        UI\n                      </AvatarFallback>\n                    </Avatar>\n                  </div>);\n}\n"
  }
};

type PreviewTab = "preview" | "code"
const initCode = `npx binhlaig-ui@latest init`
const installCode = `npx binhlaig-ui@latest add avatar`
const overwriteCode =
  `npx binhlaig-ui@latest add avatar --overwrite`
const importCode = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AvatarStatus,
} from "@/components/ui/avatar"`




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
  const t = useAvatarText()
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
        <div className="flex min-h-[240px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
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
export default function AvatarDocumentationPage() {
  const t = useAvatarText()
  const { language } = useLanguage()
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
              Avatar
            </span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Avatar
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A profile image component with fallback initials, sizes, status indicators and grouped layouts.")}</p>
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
                description={t("Initialize Binhlaig UI once, then install Avatar using the saved installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                  <code>{initCode}</code>
                </pre>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-slate-950">
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
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import Avatar primitives from your UI directory.")}
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
                description={t("Render the fallback first and place the image above it.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["usage"][language]}>
                  <Avatar size="lg">
                    <AvatarFallback>SA</AvatarFallback>
                    <AvatarImage
                      src="/avatars/sai-aung.jpg"
                      alt="Sai Aung"
                    />
                  </Avatar>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="fallback"
                title={t("Fallback")}
                description={t("Fallback initials remain visible when the image is missing or fails to load.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["fallback"][language]}>
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback>
                        <UserRound className="size-5" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="sizes"
                title={t("Sizes")}
                description={t("Use sm, md, lg or xl depending on the layout.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["sizes"][language]}>
                  <div className="flex items-center gap-4">
                    {(["sm", "md", "lg", "xl"] as const).map(
                      (size) => (
                        <Avatar key={size} size={size}>
                          <AvatarFallback>
                            SA
                          </AvatarFallback>
                        </Avatar>
                      )
                    )}
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="status"
                title={t("Status")}
                description={t("Add a compact presence indicator.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["status"][language]}>
                  <div className="flex items-center gap-5">
                    {(
                      [
                        "online",
                        "offline",
                        "busy",
                        "away",
                      ] as const
                    ).map((status) => (
                      <div
                        key={status}
                        className="grid justify-items-center gap-2"
                      >
                        <Avatar size="lg">
                          <AvatarFallback>
                            SA
                          </AvatarFallback>
                          <AvatarStatus
                            status={status}
                          />
                        </Avatar>
                        <span className="text-xs capitalize text-muted-foreground">
                          {t(status)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="group"
                title={t("Avatar Group")}
                description={t("Stack multiple avatars and display the remaining count.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["group"][language]}>
                  <AvatarGroup>
                    <Avatar>
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>MM</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>TK</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>
                      +4
                    </AvatarGroupCount>
                  </AvatarGroup>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="custom-colors"
                title={t("Custom Colors")}
                description={t("Style the fallback with ordinary utility classes.")}
              />
              <div className="mt-6">
                <CodePreview code={avatarExamples["custom-colors"][language]}>
                  <div className="flex items-center gap-4">
                    <Avatar size="lg">
                      <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                        SA
                      </AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback className="bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                        BL
                      </AvatarFallback>
                    </Avatar>
                    <Avatar size="lg">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
                        UI
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Avatar source with the latest registry version.")}
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
                description={t("Main components and custom props available in Binhlaig UI Avatar.")}
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
                      ["Avatar", "Profile image container."],
                      ["AvatarImage", "Profile image with load failure handling."],
                      ["AvatarFallback", "Initials or fallback icon."],
                      ["AvatarStatus", "Presence indicator."],
                      ["AvatarGroup", "Overlapping avatar layout."],
                      ["AvatarGroupCount", "Remaining people count."],
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
                        <code>size</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        sm, md, lg, xl
                      </td>
                      <td className="px-5 py-4">
                        <code>md</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">
                        <code>status</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">
                        online, offline, busy, away
                      </td>
                      <td className="px-5 py-4">
                        <code>{t("online")}</code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/alert"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Alert
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
              ["Fallback", "#fallback"],
              ["Sizes", "#sizes"],
              ["Status", "#status"],
              ["Avatar Group", "#group"],
              ["Custom Colors", "#custom-colors"],
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