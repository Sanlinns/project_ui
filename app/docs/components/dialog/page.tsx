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
  Loader2,
  Settings,
  Sparkles,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
const dialogMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy install command": "Install command ကူးယူရန်",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A modal window for focused tasks, forms and important content.": "သီးသန့်လုပ်ဆောင်ချက်၊ form နှင့် အရေးကြီးသောအကြောင်းအရာများကို ပြသရန် modal window။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI and install Dialog with your preferred installer.": "Binhlaig UI ကို ကနဦးပြင်ဆင်ပြီး မိမိရွေးထားသော installer ဖြင့် Dialog ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import Dialog primitives from your UI directory.": "Dialog ၏ အခြေခံ Components များကို မိမိ UI folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Open a modal dialog from a composed Button trigger.": "Button trigger ဖြင့် modal dialog ကို ဖွင့်ပါ။",
  "Edit profile": "Profile ပြင်ဆင်ရန်",
  "Update your profile information.": "မိမိ profile အချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Name": "အမည်",
  "Bio": "မိမိအကြောင်း",
  "Tell us about yourself...": "မိမိအကြောင်း ရေးပါ…",
  "Cancel": "မလုပ်တော့ပါ",
  "Save changes": "ပြင်ဆင်မှုများ သိမ်းရန်",
  "Sizes": "အရွယ်အစားများ",
  "Customize the dialog width with className.": "Dialog အကျယ်ကို className ဖြင့် စိတ်ကြိုက်ပြင်ပါ။",
  "Small": "အသေး",
  "Small dialog": "Dialog အသေး",
  "Useful for short tasks.": "လုပ်ဆောင်ချက်ငယ်များအတွက် အသုံးဝင်ပါသည်။",
  "Large": "အကြီး",
  "Large dialog": "Dialog အကြီး",
  "Useful for detailed forms and settings.": "အသေးစိတ် forms နှင့် settings များအတွက် အသုံးဝင်ပါသည်။",
  "Scrollable Content": "Scroll လုပ်နိုင်သော အကြောင်းအရာ",
  "Use a constrained body area for long content.": "ရှည်လျားသောအကြောင်းအရာအတွက် body အမြင့်ကို ကန့်သတ်ပြီး scroll လုပ်နိုင်အောင်ထားပါ။",
  "Open long content": "အကြောင်းအရာအရှည် ဖွင့်ရန်",
  "Terms and conditions": "စည်းကမ်းချက်များ",
  "Review the information before continuing.": "ဆက်မလုပ်မီ အချက်အလက်များကို ဖတ်ရှုပါ။",
  "Section": "အပိုင်း",
  ": This is sample scrollable dialog content for Binhlaig UI.": " — ဤအကြောင်းအရာသည် Binhlaig UI အတွက် scroll လုပ်နိုင်သော dialog နမူနာဖြစ်ပါသည်။",
  "Close": "ပိတ်ရန်",
  "Controlled State": "State ကို ကိုယ်တိုင်ထိန်းခြင်း",
  "Manage the dialog open state from React.": "React state ဖြင့် dialog အဖွင့်အပိတ်ကို ထိန်းချုပ်ပါ။",
  "Open controlled dialog": "State ဖြင့် ထိန်းထားသော Dialog ဖွင့်ရန်",
  "Save settings": "Settings သိမ်းရန်",
  "Confirm your latest settings.": "နောက်ဆုံး settings များကို အတည်ပြုပါ။",
  "Controlled dialog content.": "State ဖြင့် ထိန်းထားသော dialog ၏ အကြောင်းအရာ။",
  "Saving...": "သိမ်းဆည်းနေပါသည်…",
  "Save": "သိမ်းရန်",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Dialog source with the latest registry version.": "Dialog source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components available in Binhlaig UI Dialog.": "Binhlaig UI Dialog တွင် ရရှိနိုင်သော အဓိက Components များ။",
  "Component": "Component",
  "Purpose": "ရည်ရွယ်ချက်",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Controls open state and modal behavior.": "Dialog အဖွင့်အပိတ်နှင့် modal behavior ကို ထိန်းချုပ်ပါသည်။",
  "preview": "နမူနာ",
  "code": "Code",
  "Opens the dialog.": "Dialog ကို ဖွင့်ပါသည်။",
  "Renders the modal content.": "Modal အကြောင်းအရာကို ပြသပါသည်။",
  "Groups title and description.": "Title နှင့် description ကို စုစည်းပါသည်။",
  "Accessible dialog title.": "Screen reader ဖတ်နိုင်သော dialog title။",
  "Accessible supporting text.": "Screen reader ဖတ်နိုင်သော ရှင်းလင်းချက်စာသား။",
  "Contains primary dialog content.": "Dialog ၏ အဓိကအကြောင်းအရာ ပါဝင်ပါသည်။",
  "Aligns dialog actions.": "Dialog ခလုတ်များကို စီပေးပါသည်။",
  "Closes the dialog.": "Dialog ကို ပိတ်ပါသည်။"
};

function useDialogText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (dialogMyanmar[text] ?? text) : text;
}

const dialogExamples = {
  "usage": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nimport { Textarea } from \"@/components/ui/textarea\";\nimport { User } from \"lucide-react\";\nexport function DialogExample() {\n    return (<Dialog>\n                    <DialogTrigger asChild>\n                      <Button variant=\"outline\">\n                        <User className=\"size-4\"/>\n                        Edit profile\n                      </Button>\n                    </DialogTrigger>\n                    <DialogContent>\n                      <DialogHeader>\n                        <DialogTitle>Edit profile</DialogTitle>\n                        <DialogDescription>\n                          Update your profile information.\n                        </DialogDescription>\n                      </DialogHeader>\n                      <DialogBody className=\"grid gap-4\">\n                        <label className=\"grid gap-2 text-sm\">\n                          Name\n                          <input className=\"h-10 rounded-xl border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\"/>\n                        </label>\n                        <label className=\"grid gap-2 text-sm\">\n                          Bio\n                          <Textarea placeholder=\"Tell us about yourself...\"/>\n                        </label>\n                      </DialogBody>\n                      <DialogFooter>\n                        <DialogClose>Cancel</DialogClose>\n                        <Button>Save changes</Button>\n                      </DialogFooter>\n                    </DialogContent>\n                  </Dialog>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nimport { Textarea } from \"@/components/ui/textarea\";\nimport { User } from \"lucide-react\";\nexport function DialogExample() {\n    return (<Dialog>\n                    <DialogTrigger asChild>\n                      <Button variant=\"outline\">\n                        <User className=\"size-4\"/>\n                        Profile ပြင်ဆင်ရန်\n                      </Button>\n                    </DialogTrigger>\n                    <DialogContent>\n                      <DialogHeader>\n                        <DialogTitle>Profile ပြင်ဆင်ရန်</DialogTitle>\n                        <DialogDescription>\n                          မိမိ profile အချက်အလက်များကို ပြင်ဆင်ပါ။\n                        </DialogDescription>\n                      </DialogHeader>\n                      <DialogBody className=\"grid gap-4\">\n                        <label className=\"grid gap-2 text-sm\">\n                          အမည်\n                          <input className=\"h-10 rounded-xl border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20\"/>\n                        </label>\n                        <label className=\"grid gap-2 text-sm\">\n                          မိမိအကြောင်း\n                          <Textarea placeholder=\"မိမိအကြောင်း ရေးပါ…\"/>\n                        </label>\n                      </DialogBody>\n                      <DialogFooter>\n                        <DialogClose>မလုပ်တော့ပါ</DialogClose>\n                        <Button>ပြင်ဆင်မှုများ သိမ်းရန်</Button>\n                      </DialogFooter>\n                    </DialogContent>\n                  </Dialog>);\n}\n"
  },
  "sizes": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nexport function DialogExample() {\n    return (<div className=\"flex flex-wrap gap-3\">\n                    <Dialog>\n                      <DialogTrigger asChild>\n                        <Button variant=\"outline\">Small</Button>\n                      </DialogTrigger>\n                      <DialogContent className=\"max-w-sm\">\n                        <DialogHeader>\n                          <DialogTitle>Small dialog</DialogTitle>\n                          <DialogDescription>\n                            Useful for short tasks.\n                          </DialogDescription>\n                        </DialogHeader>\n                      </DialogContent>\n                    </Dialog>\n                    <Dialog>\n                      <DialogTrigger asChild>\n                        <Button variant=\"outline\">Large</Button>\n                      </DialogTrigger>\n                      <DialogContent className=\"max-w-3xl\">\n                        <DialogHeader>\n                          <DialogTitle>Large dialog</DialogTitle>\n                          <DialogDescription>\n                            Useful for detailed forms and settings.\n                          </DialogDescription>\n                        </DialogHeader>\n                      </DialogContent>\n                    </Dialog>\n                  </div>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nexport function DialogExample() {\n    return (<div className=\"flex flex-wrap gap-3\">\n                    <Dialog>\n                      <DialogTrigger asChild>\n                        <Button variant=\"outline\">အသေး</Button>\n                      </DialogTrigger>\n                      <DialogContent className=\"max-w-sm\">\n                        <DialogHeader>\n                          <DialogTitle>Dialog အသေး</DialogTitle>\n                          <DialogDescription>\n                            လုပ်ဆောင်ချက်ငယ်များအတွက် အသုံးဝင်ပါသည်။\n                          </DialogDescription>\n                        </DialogHeader>\n                      </DialogContent>\n                    </Dialog>\n                    <Dialog>\n                      <DialogTrigger asChild>\n                        <Button variant=\"outline\">အကြီး</Button>\n                      </DialogTrigger>\n                      <DialogContent className=\"max-w-3xl\">\n                        <DialogHeader>\n                          <DialogTitle>Dialog အကြီး</DialogTitle>\n                          <DialogDescription>\n                            အသေးစိတ် forms နှင့် settings များအတွက် အသုံးဝင်ပါသည်။\n                          </DialogDescription>\n                        </DialogHeader>\n                      </DialogContent>\n                    </Dialog>\n                  </div>);\n}\n"
  },
  "scrollable": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nexport function DialogExample() {\n    return (<Dialog>\n                    <DialogTrigger asChild>\n                      <Button variant=\"outline\">Open long content</Button>\n                    </DialogTrigger>\n                    <DialogContent className=\"max-h-[85vh]\">\n                      <DialogHeader>\n                        <DialogTitle>Terms and conditions</DialogTitle>\n                        <DialogDescription>\n                          Review the information before continuing.\n                        </DialogDescription>\n                      </DialogHeader>\n                      <DialogBody className=\"max-h-[55vh] overflow-y-auto pr-2\">\n                        <div className=\"space-y-4 text-sm leading-7 text-muted-foreground\">\n                          {Array.from({ length: 8 }).map((_, index) => (<p key={index}>\n                              Section {index + 1}: This is sample scrollable\n                              dialog content for Binhlaig UI.\n                            </p>))}\n                        </div>\n                      </DialogBody>\n                      <DialogFooter>\n                        <DialogClose>Close</DialogClose>\n                      </DialogFooter>\n                    </DialogContent>\n                  </Dialog>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nexport function DialogExample() {\n    return (<Dialog>\n                    <DialogTrigger asChild>\n                      <Button variant=\"outline\">အကြောင်းအရာအရှည် ဖွင့်ရန်</Button>\n                    </DialogTrigger>\n                    <DialogContent className=\"max-h-[85vh]\">\n                      <DialogHeader>\n                        <DialogTitle>စည်းကမ်းချက်များ</DialogTitle>\n                        <DialogDescription>\n                          ဆက်မလုပ်မီ အချက်အလက်များကို ဖတ်ရှုပါ။\n                        </DialogDescription>\n                      </DialogHeader>\n                      <DialogBody className=\"max-h-[55vh] overflow-y-auto pr-2\">\n                        <div className=\"space-y-4 text-sm leading-7 text-muted-foreground\">\n                          {Array.from({ length: 8 }).map((_, index) => (<p key={index}>\n                              အပိုင်း {index + 1} — ဤအကြောင်းအရာသည် Binhlaig UI အတွက် scroll လုပ်နိုင်သော dialog နမူနာဖြစ်ပါသည်။\n                            </p>))}\n                        </div>\n                      </DialogBody>\n                      <DialogFooter>\n                        <DialogClose>ပိတ်ရန်</DialogClose>\n                      </DialogFooter>\n                    </DialogContent>\n                  </Dialog>);\n}\n"
  },
  "controlled": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nimport { Settings, Loader2 } from \"lucide-react\";\nexport function DialogExample() {\n    const [open, setOpen] = React.useState(false);\n    const [saving, setSaving] = React.useState(false);\n    return (<>\n                    <Button onClick={() => setOpen(true)}>\n                      <Settings className=\"size-4\"/>\n                      Open controlled dialog\n                    </Button>\n                    <Dialog open={open} onOpenChange={setOpen}>\n                      <DialogContent>\n                        <DialogHeader>\n                          <DialogTitle>Save settings</DialogTitle>\n                          <DialogDescription>\n                            Confirm your latest settings.\n                          </DialogDescription>\n                        </DialogHeader>\n                        <DialogBody>\n                          Controlled dialog content.\n                        </DialogBody>\n                        <DialogFooter>\n                          <DialogClose>Cancel</DialogClose>\n                          <Button disabled={saving} onClick={() => {\n            setSaving(true);\n            window.setTimeout(() => {\n                setSaving(false);\n                setOpen(false);\n            }, 800);\n        }}>\n                            {saving && (<Loader2 className=\"size-4 animate-spin\"/>)}\n                            {saving ? \"Saving...\" : \"Save\"}\n                          </Button>\n                        </DialogFooter>\n                      </DialogContent>\n                    </Dialog>\n                  </>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter, DialogClose } from \"@/components/ui/dialog\";\nimport { Button } from \"@/components/ui/button\";\nimport { Settings, Loader2 } from \"lucide-react\";\nexport function DialogExample() {\n    const [open, setOpen] = React.useState(false);\n    const [saving, setSaving] = React.useState(false);\n    return (<>\n                    <Button onClick={() => setOpen(true)}>\n                      <Settings className=\"size-4\"/>\n                      State ဖြင့် ထိန်းထားသော Dialog ဖွင့်ရန်\n                    </Button>\n                    <Dialog open={open} onOpenChange={setOpen}>\n                      <DialogContent>\n                        <DialogHeader>\n                          <DialogTitle>Settings သိမ်းရန်</DialogTitle>\n                          <DialogDescription>\n                            နောက်ဆုံး settings များကို အတည်ပြုပါ။\n                          </DialogDescription>\n                        </DialogHeader>\n                        <DialogBody>\n                          State ဖြင့် ထိန်းထားသော dialog ၏ အကြောင်းအရာ။\n                        </DialogBody>\n                        <DialogFooter>\n                          <DialogClose>မလုပ်တော့ပါ</DialogClose>\n                          <Button disabled={saving} onClick={() => {\n            setSaving(true);\n            window.setTimeout(() => {\n                setSaving(false);\n                setOpen(false);\n            }, 800);\n        }}>\n                            {saving && (<Loader2 className=\"size-4 animate-spin\"/>)}\n                            {saving ? \"သိမ်းဆည်းနေပါသည်…\" : \"သိမ်းရန်\"}\n                          </Button>\n                        </DialogFooter>\n                      </DialogContent>\n                    </Dialog>\n                  </>);\n}\n"
  }
};

type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"
const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add dialog --installer native`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add dialog --installer shadcn`
const overwriteCode =
  `npx binhlaig-ui@latest add dialog --installer native --overwrite`
const importCode = `import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"`

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
  const t = useDialogText()
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
        <div className="flex min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)] p-8">
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
export default function DialogDocumentationPage() {
  const t = useDialogText()
  const { language } = useLanguage()
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [saving, setSaving] = React.useState(false)
  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode
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
            <Link href="/docs/components" className="hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Dialog</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Dialog
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A modal window for focused tasks, forms and important content.")}</p>
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
                    document.querySelector("#api-reference")?.scrollIntoView({
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
                description={t("Initialize Binhlaig UI and install Dialog with your preferred installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <p className="font-semibold">{t("Initialize first")}</p>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
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
                      {item === "native" ? "Native Beta" : "Shadcn Stable"}
                    </button>
                  ))}
                </div>
                <div className="bg-slate-950">
                  <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                    <span className="text-xs text-slate-500">Terminal</span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
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
                description={t("Import Dialog primitives from your UI directory.")}
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
                description={t("Open a modal dialog from a composed Button trigger.")}
              />
              <div className="mt-6">
                <CodePreview code={dialogExamples["usage"][language]}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <User className="size-4" />{t("Edit profile")}</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{t("Edit profile")}</DialogTitle>
                        <DialogDescription>{t("Update your profile information.")}</DialogDescription>
                      </DialogHeader>
                      <DialogBody className="grid gap-4">
                        <label className="grid gap-2 text-sm">{t("Name")}<input className="h-10 rounded-xl border bg-background px-3 outline-none focus:ring-2 focus:ring-ring/20" />
                        </label>
                        <label className="grid gap-2 text-sm">{t("Bio")}<Textarea placeholder={t("Tell us about yourself...")} />
                        </label>
                      </DialogBody>
                      <DialogFooter>
                        <DialogClose>{t("Cancel")}</DialogClose>
                        <Button>{t("Save changes")}</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="sizes"
                title={t("Sizes")}
                description={t("Customize the dialog width with className.")}
              />
              <div className="mt-6">
                <CodePreview code={dialogExamples["sizes"][language]}>
                  <div className="flex flex-wrap gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">{t("Small")}</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm">
                        <DialogHeader>
                          <DialogTitle>{t("Small dialog")}</DialogTitle>
                          <DialogDescription>{t("Useful for short tasks.")}</DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">{t("Large")}</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>{t("Large dialog")}</DialogTitle>
                          <DialogDescription>{t("Useful for detailed forms and settings.")}</DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="scrollable"
                title={t("Scrollable Content")}
                description={t("Use a constrained body area for long content.")}
              />
              <div className="mt-6">
                <CodePreview code={dialogExamples["scrollable"][language]}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">{t("Open long content")}</Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh]">
                      <DialogHeader>
                        <DialogTitle>{t("Terms and conditions")}</DialogTitle>
                        <DialogDescription>{t("Review the information before continuing.")}</DialogDescription>
                      </DialogHeader>
                      <DialogBody className="max-h-[55vh] overflow-y-auto pr-2">
                        <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                          {Array.from({ length: 8 }).map((_, index) => (
                            <p key={index}>{t("Section")}{index + 1}{t(": This is sample scrollable dialog content for Binhlaig UI.")}</p>
                          ))}
                        </div>
                      </DialogBody>
                      <DialogFooter>
                        <DialogClose>{t("Close")}</DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled State")}
                description={t("Manage the dialog open state from React.")}
              />
              <div className="mt-6">
                <CodePreview code={dialogExamples["controlled"][language]}>
                  <>
                    <Button onClick={() => setOpen(true)}>
                      <Settings className="size-4" />{t("Open controlled dialog")}</Button>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{t("Save settings")}</DialogTitle>
                          <DialogDescription>{t("Confirm your latest settings.")}</DialogDescription>
                        </DialogHeader>
                        <DialogBody>{t("Controlled dialog content.")}</DialogBody>
                        <DialogFooter>
                          <DialogClose>{t("Cancel")}</DialogClose>
                          <Button
                            disabled={saving}
                            onClick={() => {
                              setSaving(true)
                              window.setTimeout(() => {
                                setSaving(false)
                                setOpen(false)
                              }, 800)
                            }}
                          >
                            {saving && (
                              <Loader2 className="size-4 animate-spin" />
                            )}
                            {t(saving ? "Saving..." : "Save")}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Dialog source with the latest registry version.")}
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
                description={t("Main components available in Binhlaig UI Dialog.")}
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
                      ["Dialog", "Controls open state and modal behavior."],
                      ["DialogTrigger", "Opens the dialog."],
                      ["DialogContent", "Renders the modal content."],
                      ["DialogHeader", "Groups title and description."],
                      ["DialogTitle", "Accessible dialog title."],
                      ["DialogDescription", "Accessible supporting text."],
                      ["DialogBody", "Contains primary dialog content."],
                      ["DialogFooter", "Aligns dialog actions."],
                      ["DialogClose", "Closes the dialog."],
                    ].map(([name, purpose]) => (
                      <tr key={name}>
                        <td className="px-5 py-4">
                          <code>{name}</code>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">
                          {purpose}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/drawer"
                className="rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Drawer
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
              ["Sizes", "#sizes"],
              ["Scrollable Content", "#scrollable"],
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