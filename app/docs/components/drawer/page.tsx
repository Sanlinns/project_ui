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
  Filter,
  Menu,
  Settings,
  ShoppingBag,
  Sparkles,
  User,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Textarea } from "@/components/ui/textarea"
type PreviewTab = "preview" | "code"
type InstallerTab = "native" | "shadcn"
const initCode = `npx binhlaig-ui@latest init`
const nativeInstallCode =
  `npx binhlaig-ui@latest add drawer --installer native`
const shadcnInstallCode =
  `npx binhlaig-ui@latest add drawer --installer shadcn`
const overwriteCode =
  `npx binhlaig-ui@latest add drawer --installer native --overwrite`
const importCode = `import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"`

const drawerMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy failed": "ကူးယူ၍ မရပါ",
  "Components": "Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A gesture-enabled panel that slides from an edge of the screen for menus, filters, forms and details.": "မျက်နှာပြင်အစွန်းမှ ဆွဲဖွင့်နိုင်သော panel ဖြစ်ပြီး မီနူး၊ ရှာဖွေစစ်ထုတ်မှု၊ ဖောင်နှင့် အသေးစိတ်အချက်အလက်များ ပြသရန် အသုံးပြုနိုင်ပါတယ်။",
  "View examples": "နမူနာများကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းခြင်း",
  "Initialize Binhlaig UI and install Drawer with your preferred installer.": "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Drawer ကို ထည့်သွင်းပါ။",
  "Initialize first": "ဦးစွာ စတင်ပြင်ဆင်ပါ",
  "Terminal": "Terminal",
  "Copy command": "Command ကူးယူရန်",
  "Import": "Import လုပ်ခြင်း",
  "Import Drawer primitives from your UI directory.": "မိမိ UI directory မှ Drawer components များကို import လုပ်ပါ။",
  "Bottom Drawer": "အောက်ခြေမှ ဖွင့်သော Drawer",
  "The default drawer opens from the bottom and supports swipe-to-dismiss.": "ပုံမှန် Drawer သည် အောက်ခြေမှ ဖွင့်ပြီး ပွတ်ဆွဲ၍ ပိတ်နိုင်ပါတယ်။",
  "Open drawer": "Drawer ဖွင့်ရန်",
  "Notifications": "အသိပေးချက်များ",
  "You are all caught up.": "အသိပေးချက်အားလုံးကို ဖတ်ပြီးပါပြီ။",
  "Drawer content goes here.": "ပြသလိုသော အကြောင်းအရာများကို ဒီနေရာမှာ ထည့်ပါ။",
  "Close": "ပိတ်ရန်",
  "Close drawer": "Drawer ပိတ်ရန်",
  "Side Drawers": "ဘေးမှ ဖွင့်သော Drawer များ",
  "Match the drawer side with the swipe direction used to dismiss it.": "Drawer ဖွင့်သည့်ဘက်နှင့် ပိတ်ရန် ပွတ်ဆွဲသည့်ဦးတည်ရာကို ကိုက်ညီအောင် သတ်မှတ်ပါ။",
  "Left drawer": "ဘယ်ဘက် Drawer",
  "Navigation": "လမ်းညွှန်မီနူး",
  "Browse project sections.": "Project ၏ အပိုင်းများကို ရွေးချယ်ကြည့်ပါ။",
  "Right drawer": "ညာဘက် Drawer",
  "Filters": "စစ်ထုတ်မှုများ",
  "Refine the displayed results.": "ပြသထားသော ရလဒ်များကို လိုအပ်သလို စစ်ထုတ်ပါ။",
  "Category": "အမျိုးအစား",
  "All": "အားလုံး",
  "Dashboard": "အနှစ်ချုပ်",
  "Settings": "ဆက်တင်များ",
  "Form Drawer": "ဖောင်ပါသော Drawer",
  "Use Drawer for compact mobile-friendly forms.": "ဖုန်းပေါ်တွင် အသုံးပြုရလွယ်သော ဖောင်ငယ်များအတွက် Drawer ကို အသုံးပြုပါ။",
  "Send feedback": "အကြံပြုချက် ပေးရန်",
  "Tell us how we can improve.": "ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်ရန် အကြံပြုချက် ပေးပါ။",
  "Feedback": "အကြံပြုချက်",
  "Write your feedback...": "မိမိအကြံပြုချက်ကို ရေးပါ…",
  "Cancel": "မလုပ်တော့ပါ",
  "Submit": "ပေးပို့ရန်",
  "Controlled State": "State ဖြင့် ထိန်းချုပ်ခြင်း",
  "Control the drawer with React state.": "Drawer အဖွင့်၊ အပိတ်ကို React state ဖြင့် ထိန်းချုပ်ပါ။",
  "Open controlled drawer": "State ဖြင့် Drawer ဖွင့်ရန်",
  "Controlled drawer": "State ဖြင့် ထိန်းချုပ်သော Drawer",
  "The parent controls the open state.": "အပြင်ဘက် component မှ အဖွင့်၊ အပိတ် state ကို ထိန်းချုပ်ထားပါတယ်။",
  "Controlled drawer content.": "State ဖြင့် ထိန်းချုပ်သော Drawer ၏ အကြောင်းအရာ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Drawer source with the latest registry version.": "Drawer source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components and custom props available in the Binhlaig UI Drawer.": "Binhlaig UI Drawer တွင် အသုံးပြုနိုင်သော components နှင့် custom props များ။",
  "Component": "Component",
  "Purpose": "အသုံးဝင်ပုံ",
  "DrawerContent prop": "DrawerContent prop",
  "Values": "သတ်မှတ်နိုင်သော တန်ဖိုးများ",
  "Default": "ပုံမှန်တန်ဖိုး",
  "top/bottom only": "အပေါ် / အောက်ဘက်တွင်သာ",
  "Previous component": "ယခင် Component",
  "Next": "နောက်သို့",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Preview": "နမူနာ",
  "Code": "Code",
  "Native Beta": "Native (စမ်းသပ်ဆဲ)",
  "Shadcn Stable": "Shadcn (တည်ငြိမ်သော version)",
  "Controls state and swipe behavior.": "State နှင့် ပွတ်ဆွဲမှုကို ထိန်းချုပ်ပါတယ်။",
  "Opens the drawer.": "Drawer ကို ဖွင့်ပေးပါတယ်။",
  "Renders popup, overlay and viewport.": "Popup၊ နောက်ခံ overlay နှင့် viewport ကို ပြသပေးပါတယ်။",
  "Groups title and description.": "ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းထားပါတယ်။",
  "Accessible drawer title.": "အသုံးပြုသူအားလုံးအတွက် ဖတ်ရှုနိုင်သော Drawer ခေါင်းစဉ်။",
  "Accessible supporting text.": "ခေါင်းစဉ်အတွက် ဖြည့်စွက်ရှင်းလင်းချက်။",
  "Scrollable selectable content area.": "Scroll လုပ်ပြီး စာသားရွေးချယ်နိုင်သော အကြောင်းအရာနေရာ။",
  "Aligns drawer actions.": "လုပ်ဆောင်ချက်ခလုတ်များကို စီထားပါတယ်။",
  "Closes the drawer.": "Drawer ကို ပိတ်ပေးပါတယ်။"
}
function useDrawerText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? drawerMyanmar[text] ?? text : text
  return { language, t }
}
const drawerPageStyles = `
.drawer-docs[data-language="my"] :is(h1,h2,h3,p,button,label,th,td,a) { letter-spacing:normal; line-height:1.9; }
.drawer-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.drawer-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.drawer-docs[data-language="my"] button { height:auto; min-height:36px; padding-block:8px; white-space:normal; }
.drawer-docs pre { tab-size:2; line-height:1.9; }
.drawer-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .drawer-docs[data-language="my"] h1 { font-size:28px; } }
`
const basicCodeSource = "<Drawer>\n                    <DrawerTrigger asChild>\n                      <Button variant=\"outline\">\n                        <ShoppingBag className=\"size-4\" />{t(\"Open drawer\")}</Button>\n                    </DrawerTrigger>\n                    <DrawerContent className=\"leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2\">\n                      <DrawerHeader>\n                        <DrawerTitle>{t(\"Notifications\")}</DrawerTitle>\n                        <DrawerDescription>{t(\"You are all caught up.\")}</DrawerDescription>\n                      </DrawerHeader>\n                      <DrawerBody>\n                        <div className=\"mx-auto max-w-xl rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground\">{t(\"Drawer content goes here.\")}</div>\n                      </DrawerBody>\n                      <DrawerFooter className=\"flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                        <DrawerClose className=\"h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7\">{t(\"Close\")}</DrawerClose>\n                      </DrawerFooter>\n                    </DrawerContent>\n                  </Drawer>"
const sideCodeSource = "<div className=\"flex flex-wrap gap-3\">\n                    <Drawer swipeDirection=\"right\">\n                      <DrawerTrigger asChild>\n                        <Button variant=\"outline\">\n                          <Menu className=\"size-4\" />{t(\"Left drawer\")}</Button>\n                      </DrawerTrigger>\n                      <DrawerContent side=\"left\" className=\"leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2\">\n                      <DrawerClose aria-label={t(\"Close drawer\")} className=\"absolute right-3 top-3 size-9\"><X className=\"size-4\" /></DrawerClose>\n                        <DrawerHeader>\n                          <DrawerTitle>{t(\"Navigation\")}</DrawerTitle>\n                          <DrawerDescription>{t(\"Browse project sections.\")}</DrawerDescription>\n                        </DrawerHeader>\n                        <DrawerBody>\n                          <nav className=\"grid gap-2\">\n                            {[\"Dashboard\", \"Components\", \"Settings\"].map(\n                              (item) => (\n                                <button\n                                  key={item}\n                                  type=\"button\"\n                                  className=\"rounded-xl px-3 py-2 text-left text-sm hover:bg-muted\"\n                                >\n                                  {t(item)}\n                                </button>\n                              )\n                            )}\n                          </nav>\n                        </DrawerBody>\n                      </DrawerContent>\n                    </Drawer>\n                    <Drawer swipeDirection=\"left\">\n                      <DrawerTrigger asChild>\n                        <Button variant=\"outline\">\n                          <Filter className=\"size-4\" />{t(\"Right drawer\")}</Button>\n                      </DrawerTrigger>\n                      <DrawerContent side=\"right\" className=\"leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2\">\n                      <DrawerClose aria-label={t(\"Close drawer\")} className=\"absolute right-3 top-3 size-9\"><X className=\"size-4\" /></DrawerClose>\n                        <DrawerHeader>\n                          <DrawerTitle>{t(\"Filters\")}</DrawerTitle>\n                          <DrawerDescription>{t(\"Refine the displayed results.\")}</DrawerDescription>\n                        </DrawerHeader>\n                        <DrawerBody>\n                          <label className=\"grid gap-1.5 text-sm\">{t(\"Category\")}<select className=\"h-10 rounded-xl border bg-background px-3\">\n                              <option>{t(\"All\")}</option>\n                              <option>UI</option>\n                              <option>{t(\"Dashboard\")}</option>\n                            </select>\n                          </label>\n                        </DrawerBody>\n                      </DrawerContent>\n                    </Drawer>\n                  </div>"
const formCodeSource = "<Drawer>\n                    <DrawerTrigger asChild>\n                      <Button>\n                        <User className=\"size-4\" />{t(\"Send feedback\")}</Button>\n                    </DrawerTrigger>\n                    <DrawerContent className=\"leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2\">\n                      <DrawerHeader>\n                        <DrawerTitle>{t(\"Send feedback\")}</DrawerTitle>\n                        <DrawerDescription>{t(\"Tell us how we can improve.\")}</DrawerDescription>\n                      </DrawerHeader>\n                      <DrawerBody>\n                        <div className=\"mx-auto grid w-full max-w-xl gap-2\">\n                          <label\n                            htmlFor=\"drawer-feedback\"\n                            className=\"text-sm font-medium\"\n                          >{t(\"Feedback\")}</label>\n                          <Textarea\n                            id=\"drawer-feedback\"\n                            placeholder={t(\"Write your feedback...\")}\n                          />\n                        </div>\n                      </DrawerBody>\n                      <DrawerFooter className=\"flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                        <DrawerClose className=\"h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7\">{t(\"Cancel\")}</DrawerClose>\n                        <Button>{t(\"Submit\")}</Button>\n                      </DrawerFooter>\n                    </DrawerContent>\n                  </Drawer>"
const controlledCodeSource = "<>\n                    <Button onClick={() => setControlledOpen(true)}>\n                      <Settings className=\"size-4\" />{t(\"Open controlled drawer\")}</Button>\n                    <Drawer\n                      open={controlledOpen}\n                      onOpenChange={setControlledOpen}\n                    >\n                      <DrawerContent className=\"leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2\">\n                        <DrawerHeader>\n                          <DrawerTitle>{t(\"Controlled drawer\")}</DrawerTitle>\n                          <DrawerDescription>{t(\"The parent controls the open state.\")}</DrawerDescription>\n                        </DrawerHeader>\n                        <DrawerBody>\n                          <div className=\"mx-auto max-w-xl text-sm text-muted-foreground\">{t(\"Controlled drawer content.\")}</div>\n                        </DrawerBody>\n                        <DrawerFooter className=\"flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                          <DrawerClose className=\"h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7\">{t(\"Close\")}</DrawerClose>\n                        </DrawerFooter>\n                      </DrawerContent>\n                    </Drawer>\n                  </>"
function exampleCode(source: string, name: string, t: (text: string) => string) {
  const jsx = source.replace(/t\(("(?:[^"\\]|\\.)*")\)/g, (_, literal: string) => JSON.stringify(t(JSON.parse(literal))))
    .replace(/\["Dashboard", "Components", "Settings"\]/g, () => JSON.stringify(["Dashboard", "Components", "Settings"].map(t)))
    .replace(/t\(item\)/g, "item")
  const tags = new Set(Array.from(jsx.matchAll(/<([A-Z][A-Za-z0-9]*)/g), match => match[1]))
  const drawers = [...tags].filter(tag => tag.startsWith("Drawer"))
  const icons = [...tags].filter(tag => !tag.startsWith("Drawer") && tag !== "Button" && tag !== "Textarea")
  const imports = ['"use client"', 'import * as React from "react"', 'import { Button } from "@/components/ui/button"', 'import { '+drawers.join(", ")+' } from "@/components/ui/drawer"']
  if (tags.has("Textarea")) imports.push('import { Textarea } from "@/components/ui/textarea"')
  if (icons.length) imports.push('import { '+icons.join(", ")+' } from "lucide-react"')
  const state = name === "ControlledDrawer" ? '\n  const [controlledOpen, setControlledOpen] = React.useState(false)\n' : ""
  return imports.join("\n") + "\n\nexport function " + name + "() {" + state + "\n  return (\n" + jsx + "\n  )\n}"
}

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
  const { t } = useDrawerText()
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
function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const { t } = useDrawerText()
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
        <div className="flex min-h-[280px] items-center justify-center bg-muted/20 p-8">
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
export default function DrawerDocumentationPage() {
  const { t, language } = useDrawerText()
  const [installer, setInstaller] =
    React.useState<InstallerTab>("native")
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const [controlledOpen, setControlledOpen] = React.useState(false)
  const basicCode = exampleCode(basicCodeSource, "DrawerDemo", t)
  const sideCode = exampleCode(sideCodeSource, "SideDrawers", t)
  const formCode = exampleCode(formCodeSource, "FeedbackDrawer", t)
  const controlledCode = exampleCode(controlledCodeSource, "ControlledDrawer", t)
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
    <div lang={language} data-language={language} className="drawer-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{drawerPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Drawer</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Drawer
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("A gesture-enabled panel that slides from an edge of the screen for menus, filters, forms and details.")}</p>
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
                description={t("Initialize Binhlaig UI and install Drawer with your preferred installer.")}
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
                      {t(item === "native" ? "Native Beta" : "Shadcn Stable")}
                    </button>
                  ))}
                </div>
                <div className="bg-slate-950">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2">
                    <span className="text-xs text-muted-foreground">{t("Terminal")}</span>
                    <button
                      type="button"
                      onClick={copyInstall}
                      className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent hover:text-foreground"
                      aria-label={t(copied ? "Copied" : "Copy command")} title={t(copyFailed ? "Copy failed" : copied ? "Copied" : "Copy command")}
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
                description={t("Import Drawer primitives from your UI directory.")}
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
                title={t("Bottom Drawer")}
                description={t("The default drawer opens from the bottom and supports swipe-to-dismiss.")}
              />
              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="outline">
                        <ShoppingBag className="size-4" />{t("Open drawer")}</Button>
                    </DrawerTrigger>
                    <DrawerContent className="leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2">
                      <DrawerHeader>
                        <DrawerTitle>{t("Notifications")}</DrawerTitle>
                        <DrawerDescription>{t("You are all caught up.")}</DrawerDescription>
                      </DrawerHeader>
                      <DrawerBody>
                        <div className="mx-auto max-w-xl rounded-xl border bg-muted/30 p-4 text-sm text-muted-foreground">{t("Drawer content goes here.")}</div>
                      </DrawerBody>
                      <DrawerFooter className="flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                        <DrawerClose className="h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7">{t("Close")}</DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="side-drawers"
                title={t("Side Drawers")}
                description={t("Match the drawer side with the swipe direction used to dismiss it.")}
              />
              <div className="mt-6">
                <CodePreview code={sideCode}>
                  <div className="flex flex-wrap gap-3">
                    <Drawer swipeDirection="right">
                      <DrawerTrigger asChild>
                        <Button variant="outline">
                          <Menu className="size-4" />{t("Left drawer")}</Button>
                      </DrawerTrigger>
                      <DrawerContent side="left" className="leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2">
                      <DrawerClose aria-label={t("Close drawer")} className="absolute right-3 top-3 size-9"><X className="size-4" /></DrawerClose>
                        <DrawerHeader>
                          <DrawerTitle>{t("Navigation")}</DrawerTitle>
                          <DrawerDescription>{t("Browse project sections.")}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerBody>
                          <nav className="grid gap-2">
                            {["Dashboard", "Components", "Settings"].map(
                              (item) => (
                                <button
                                  key={item}
                                  type="button"
                                  className="rounded-xl px-3 py-2 text-left text-sm hover:bg-muted"
                                >
                                  {t(item)}
                                </button>
                              )
                            )}
                          </nav>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                    <Drawer swipeDirection="left">
                      <DrawerTrigger asChild>
                        <Button variant="outline">
                          <Filter className="size-4" />{t("Right drawer")}</Button>
                      </DrawerTrigger>
                      <DrawerContent side="right" className="leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2">
                      <DrawerClose aria-label={t("Close drawer")} className="absolute right-3 top-3 size-9"><X className="size-4" /></DrawerClose>
                        <DrawerHeader>
                          <DrawerTitle>{t("Filters")}</DrawerTitle>
                          <DrawerDescription>{t("Refine the displayed results.")}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerBody>
                          <label className="grid gap-1.5 text-sm">{t("Category")}<select className="h-10 rounded-xl border bg-background px-3">
                              <option>{t("All")}</option>
                              <option>UI</option>
                              <option>{t("Dashboard")}</option>
                            </select>
                          </label>
                        </DrawerBody>
                      </DrawerContent>
                    </Drawer>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="form"
                title={t("Form Drawer")}
                description={t("Use Drawer for compact mobile-friendly forms.")}
              />
              <div className="mt-6">
                <CodePreview code={formCode}>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button>
                        <User className="size-4" />{t("Send feedback")}</Button>
                    </DrawerTrigger>
                    <DrawerContent className="leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2">
                      <DrawerHeader>
                        <DrawerTitle>{t("Send feedback")}</DrawerTitle>
                        <DrawerDescription>{t("Tell us how we can improve.")}</DrawerDescription>
                      </DrawerHeader>
                      <DrawerBody>
                        <div className="mx-auto grid w-full max-w-xl gap-2">
                          <label
                            htmlFor="drawer-feedback"
                            className="text-sm font-medium"
                          >{t("Feedback")}</label>
                          <Textarea
                            id="drawer-feedback"
                            placeholder={t("Write your feedback...")}
                          />
                        </div>
                      </DrawerBody>
                      <DrawerFooter className="flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                        <DrawerClose className="h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7">{t("Cancel")}</DrawerClose>
                        <Button>{t("Submit")}</Button>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled State")}
                description={t("Control the drawer with React state.")}
              />
              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <>
                    <Button onClick={() => setControlledOpen(true)}>
                      <Settings className="size-4" />{t("Open controlled drawer")}</Button>
                    <Drawer
                      open={controlledOpen}
                      onOpenChange={setControlledOpen}
                    >
                      <DrawerContent className="leading-8 [&_button]:h-auto [&_button]:min-h-10 [&_button]:whitespace-nowrap [&_button]:py-2">
                        <DrawerHeader>
                          <DrawerTitle>{t("Controlled drawer")}</DrawerTitle>
                          <DrawerDescription>{t("The parent controls the open state.")}</DrawerDescription>
                        </DrawerHeader>
                        <DrawerBody>
                          <div className="mx-auto max-w-xl text-sm text-muted-foreground">{t("Controlled drawer content.")}</div>
                        </DrawerBody>
                        <DrawerFooter className="flex-row flex-wrap items-center justify-end gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                          <DrawerClose className="h-auto min-h-10 w-auto shrink-0 whitespace-nowrap rounded-lg border border-border px-4 py-2 text-sm leading-7">{t("Close")}</DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Drawer source with the latest registry version.")}
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
                description={t("Main components and custom props available in the Binhlaig UI Drawer.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[780px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Component")}</th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Drawer", "Controls state and swipe behavior."],
                      ["DrawerTrigger", "Opens the drawer."],
                      ["DrawerContent", "Renders popup, overlay and viewport."],
                      ["DrawerHeader", "Groups title and description."],
                      ["DrawerTitle", "Accessible drawer title."],
                      ["DrawerDescription", "Accessible supporting text."],
                      ["DrawerBody", "Scrollable selectable content area."],
                      ["DrawerFooter", "Aligns drawer actions."],
                      ["DrawerClose", "Closes the drawer."],
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
                <table className="w-full min-w-[780px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("DrawerContent prop")}</th>
                      <th className="px-5 py-4 font-medium">{t("Values")}</th>
                      <th className="px-5 py-4 font-medium">{t("Default")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="px-5 py-4"><code>side</code></td>
                      <td className="px-5 py-4 text-muted-foreground">
                        top, right, bottom, left
                      </td>
                      <td className="px-5 py-4"><code>bottom</code></td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4"><code>showHandle</code></td>
                      <td className="px-5 py-4 text-muted-foreground">boolean</td>
                      <td className="px-5 py-4">{t("top/bottom only")}</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4">
                        <code>showCloseButton</code>
                      </td>
                      <td className="px-5 py-4 text-muted-foreground">boolean</td>
                      <td className="px-5 py-4"><code>false</code></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/form"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Form
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
              ["Bottom Drawer", "#usage"],
              ["Side Drawers", "#side-drawers"],
              ["Form Drawer", "#form"],
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/drawer/page.tsx"
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