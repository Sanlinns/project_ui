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
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Button } from "@/components/ui/button"
type PreviewTab = "preview" | "code"

const importCode = `import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"`

const paginationMyanmar: Record<string, string> = {
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
  "Next": "နောက်",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Preview": "နမူနာ",
  "Code": "Code",
  "Name": "အမည်",
  "Copy install command": "Install command ကူးယူရန်",
  "Initialize Binhlaig UI once, then install Pagination using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ်စတင်ပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Pagination ကို ထည့်သွင်းပါ။",
  "Import the Pagination primitives you need.": "လိုအပ်သော Pagination components များကို import လုပ်ပါ။",
  "Use numbered pages together with previous, next and ellipsis controls.": "စာမျက်နှာနံပါတ်များကို ယခင်၊ နောက်နှင့် အပိုင်းကျော် အညွှန်းများဖြင့် တွဲသုံးပါ။",
  "Controlled": "State ဖြင့် ထိန်းချုပ်ခြင်း",
  "Use PaginationButton when pagination state is managed by React.": "စာမျက်နှာ state ကို React ဖြင့် ထိန်းချုပ်ပါက PaginationButton ကို အသုံးပြုပါ။",
  "Previous and Next": "ယခင် / နောက် စာမျက်နှာ",
  "A simple pattern for compact applications and dashboards.": "App နှင့် Dashboard များအတွက် နေရာယူမှုနည်းသော ရိုးရှင်းသည့်ပုံစံ။",
  "Compact": "နေရာယူမှုနည်းသော ပုံစံ",
  "Use ellipsis when the total page count is large.": "စာမျက်နှာများစွာ ရှိသည့်အခါ ellipsis အညွှန်းကို အသုံးပြုပါ။",
  "Replace an older Pagination source with the latest registry version.": "Pagination source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Main primitives available in Binhlaig UI Pagination.": "Binhlaig UI Pagination တွင် အသုံးပြုနိုင်သော အဓိက components များ။",
  "Previous": "ယခင်",
  "Page": "စာမျက်နှာ",
  "Page navigation": "စာမျက်နှာ ရွေးချယ်ခြင်း",
  "Previous page": "ယခင်စာမျက်နှာသို့",
  "Next page": "နောက်စာမျက်နှာသို့",
  "Root navigation wrapper.": "စာမျက်နှာရွေးချယ်မှု၏ အခြေခံ nav component။",
  "Container for pagination items.": "စာမျက်နှာရွေးချယ်မှုများကို စုစည်းထားသော နေရာ။",
  "Wraps an individual pagination control.": "စာမျက်နှာရွေးချယ်မှုတစ်ခုကို ဝန်းရံထားပါတယ်။",
  "Anchor-based page link.": "လင့်ခ်ဖြင့် စာမျက်နှာရွေးချယ်ရန်။",
  "Button-based page control for local state.": "မိမိ state ကို ခလုတ်ဖြင့် ထိန်းချုပ်ရန်။",
  "Previous page link.": "ယခင်စာမျက်နှာသို့ သွားရန် လင့်ခ်။",
  "Next page link.": "နောက်စာမျက်နှာသို့ သွားရန် လင့်ခ်။",
  "Indicates skipped page ranges.": "ကျော်ထားသော စာမျက်နှာအပိုင်းများကို ပြပါတယ်။",
  "Basic": "အခြေခံ အသုံးပြုပုံ",
  "A flexible pagination component for navigating through pages, tables and result sets.": "စာမျက်နှာများ၊ ဇယားများနှင့် ရလဒ်စာရင်းများကို လှည့်ကြည့်ရန် စိတ်ကြိုက်ပြင်ဆင်နိုင်သော Pagination component။"
}
function usePaginationText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? paginationMyanmar[text] ?? text : text
  return { language, t }
}
const paginationExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from \"@/components/ui/pagination\"\n\nexport function PaginationDemo() {\n  return (\n<Pagination aria-label={\"Page navigation\"}>\n                    <PaginationContent className=\"flex-wrap justify-center gap-2\">\n                      <PaginationItem>\n                        <PaginationPrevious href=\"#\" aria-label={\"Previous page\"} className=\"h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7\">{\"Previous\"}</PaginationPrevious>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\" isActive>\n                          1\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          2\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          3\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationEllipsis />\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationNext href=\"#\" aria-label={\"Next page\"} className=\"h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7\">{\"Next\"}</PaginationNext>\n                      </PaginationItem>\n                    </PaginationContent>\n                  </Pagination>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationEllipsis, PaginationNext } from \"@/components/ui/pagination\"\n\nexport function PaginationDemo() {\n  return (\n<Pagination aria-label={\"စာမျက်နှာ ရွေးချယ်ခြင်း\"}>\n                    <PaginationContent className=\"flex-wrap justify-center gap-2\">\n                      <PaginationItem>\n                        <PaginationPrevious href=\"#\" aria-label={\"ယခင်စာမျက်နှာသို့\"} className=\"h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7\">{\"ယခင်\"}</PaginationPrevious>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\" isActive>\n                          1\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          2\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          3\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationEllipsis />\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationNext href=\"#\" aria-label={\"နောက်စာမျက်နှာသို့\"} className=\"h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7\">{\"နောက်\"}</PaginationNext>\n                      </PaginationItem>\n                    </PaginationContent>\n                  </Pagination>\n  )\n}"
  },
  "controlledCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationButton } from \"@/components/ui/pagination\"\n\nexport function ControlledPagination() {\n\n  const [page, setPage] = React.useState(1)\n  return (\n    <Pagination aria-label={\"Page navigation\"}>\n      <PaginationContent className=\"flex-wrap justify-center gap-2\">\n        {[1, 2, 3, 4, 5].map((item) => (\n          <PaginationItem key={item}>\n            <PaginationButton\n              isActive={page === item}\n              onClick={() => setPage(item)}\n            >\n              {item}\n            </PaginationButton>\n          </PaginationItem>\n        ))}\n      </PaginationContent>\n    </Pagination>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationButton } from \"@/components/ui/pagination\"\n\nexport function ControlledPagination() {\n\n  const [page, setPage] = React.useState(1)\n  return (\n    <Pagination aria-label={\"စာမျက်နှာ ရွေးချယ်ခြင်း\"}>\n      <PaginationContent className=\"flex-wrap justify-center gap-2\">\n        {[1, 2, 3, 4, 5].map((item) => (\n          <PaginationItem key={item}>\n            <PaginationButton\n              isActive={page === item}\n              onClick={() => setPage(item)}\n            >\n              {item}\n            </PaginationButton>\n          </PaginationItem>\n        ))}\n      </PaginationContent>\n    </Pagination>\n  )\n}"
  },
  "prevNextCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationButton } from \"@/components/ui/pagination\"\n\nexport function PreviousNextPagination() {\n\n  const [page, setPage] = React.useState(1)\n  const totalPages = 5\n  return (\n    <Pagination aria-label={\"Page navigation\"}>\n      <PaginationContent className=\"flex-wrap justify-center gap-2\">\n        <PaginationItem>\n          <PaginationButton\n            size=\"default\" className=\"h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7\"\n            disabled={page === 1}\n            onClick={() => setPage((value) => value - 1)}\n          >{\"Previous\"}</PaginationButton>\n        </PaginationItem>\n        <PaginationItem>\n          <span className=\"px-3 text-sm text-muted-foreground\">{\"Page\"}{\" \"}{page}{\" / \"}{totalPages}\n          </span>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationButton\n            size=\"default\" className=\"h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7\"\n            disabled={page === totalPages}\n            onClick={() => setPage((value) => value + 1)}\n          >{\"Next\"}</PaginationButton>\n        </PaginationItem>\n      </PaginationContent>\n    </Pagination>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationButton } from \"@/components/ui/pagination\"\n\nexport function PreviousNextPagination() {\n\n  const [page, setPage] = React.useState(1)\n  const totalPages = 5\n  return (\n    <Pagination aria-label={\"စာမျက်နှာ ရွေးချယ်ခြင်း\"}>\n      <PaginationContent className=\"flex-wrap justify-center gap-2\">\n        <PaginationItem>\n          <PaginationButton\n            size=\"default\" className=\"h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7\"\n            disabled={page === 1}\n            onClick={() => setPage((value) => value - 1)}\n          >{\"ယခင်\"}</PaginationButton>\n        </PaginationItem>\n        <PaginationItem>\n          <span className=\"px-3 text-sm text-muted-foreground\">{\"စာမျက်နှာ\"}{\" \"}{page}{\" / \"}{totalPages}\n          </span>\n        </PaginationItem>\n        <PaginationItem>\n          <PaginationButton\n            size=\"default\" className=\"h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7\"\n            disabled={page === totalPages}\n            onClick={() => setPage((value) => value + 1)}\n          >{\"နောက်\"}</PaginationButton>\n        </PaginationItem>\n      </PaginationContent>\n    </Pagination>\n  )\n}"
  },
  "compactCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis } from \"@/components/ui/pagination\"\n\nexport function CompactPagination() {\n  return (\n<Pagination aria-label={\"Page navigation\"}>\n                    <PaginationContent className=\"flex-wrap justify-center gap-2\">\n                      <PaginationItem>\n                        <PaginationLink href=\"#\" isActive>\n                          1\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          2\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationEllipsis />\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          10\n                        </PaginationLink>\n                      </PaginationItem>\n                    </PaginationContent>\n                  </Pagination>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationEllipsis } from \"@/components/ui/pagination\"\n\nexport function CompactPagination() {\n  return (\n<Pagination aria-label={\"စာမျက်နှာ ရွေးချယ်ခြင်း\"}>\n                    <PaginationContent className=\"flex-wrap justify-center gap-2\">\n                      <PaginationItem>\n                        <PaginationLink href=\"#\" isActive>\n                          1\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          2\n                        </PaginationLink>\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationEllipsis />\n                      </PaginationItem>\n                      <PaginationItem>\n                        <PaginationLink href=\"#\">\n                          10\n                        </PaginationLink>\n                      </PaginationItem>\n                    </PaginationContent>\n                  </Pagination>\n  )\n}"
  }
} as const
const paginationPageStyles = `
.pagination-docs[data-language="my"] :is(h1,h2,h3,p,label,a,th,td) { letter-spacing:normal; line-height:1.9; }
.pagination-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.pagination-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.pagination-docs [data-slot="label"] { flex-wrap:wrap; line-height:1.9; row-gap:4px; }
.pagination-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; line-height:1.9; padding-block:8px; }
.pagination-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.pagination-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .pagination-docs[data-language="my"] h1 { font-size:28px; } }
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
  const { t } = usePaginationText()
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
  const { t } = usePaginationText()
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
          <div className="w-full">{children}</div>
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
function ControlledPreview() {
  const { t } = usePaginationText()
  const [page, setPage] = React.useState(1)
  return (
    <Pagination aria-label={t("Page navigation")}>
      <PaginationContent className="flex-wrap justify-center gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <PaginationItem key={item}>
            <PaginationButton
              isActive={page === item}
              onClick={() => setPage(item)}
            >
              {item}
            </PaginationButton>
          </PaginationItem>
        ))}
      </PaginationContent>
    </Pagination>
  )
}
function PreviousNextPreview() {
  const { t } = usePaginationText()
  const [page, setPage] = React.useState(1)
  const totalPages = 5
  return (
    <Pagination aria-label={t("Page navigation")}>
      <PaginationContent className="flex-wrap justify-center gap-2">
        <PaginationItem>
          <PaginationButton
            size="default" className="h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7"
            disabled={page === 1}
            onClick={() => setPage((value) => value - 1)}
          >{t("Previous")}</PaginationButton>
        </PaginationItem>
        <PaginationItem>
          <span className="px-3 text-sm text-muted-foreground">{t("Page")}{" "}{page}{" / "}{totalPages}
          </span>
        </PaginationItem>
        <PaginationItem>
          <PaginationButton
            size="default" className="h-auto min-h-10 shrink-0 whitespace-nowrap px-3 py-2 leading-7"
            disabled={page === totalPages}
            onClick={() => setPage((value) => value + 1)}
          >{t("Next")}</PaginationButton>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
export default function PaginationDocumentationPage() {
  const { t, language } = usePaginationText()

  return (
    <div lang={language} data-language={language} className="pagination-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{paginationPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">
              Pagination
            </span>
          </div>
          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Pagination
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{t("A flexible pagination component for navigating through pages, tables and result sets.")}</p>
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
            <ComponentInstallation componentName="Pagination" componentSlug="pagination" />
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the Pagination primitives you need.")}
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
                description={t("Use numbered pages together with previous, next and ellipsis controls.")}
              />
              <div className="mt-6">
                <CodePreview code={paginationExamples.basicCode[language]}>
                  <Pagination aria-label={t("Page navigation")}>
                    <PaginationContent className="flex-wrap justify-center gap-2">
                      <PaginationItem>
                        <PaginationPrevious href="#" aria-label={t("Previous page")} className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7">{t("Previous")}</PaginationPrevious>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" aria-label={t("Next page")} className="h-auto min-h-10 shrink-0 whitespace-nowrap py-2 leading-7">{t("Next")}</PaginationNext>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled")}
                description={t("Use PaginationButton when pagination state is managed by React.")}
              />
              <div className="mt-6">
                <CodePreview code={paginationExamples.controlledCode[language]}>
                  <ControlledPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="previous-next"
                title={t("Previous and Next")}
                description={t("A simple pattern for compact applications and dashboards.")}
              />
              <div className="mt-6">
                <CodePreview code={paginationExamples.prevNextCode[language]}>
                  <PreviousNextPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="compact"
                title={t("Compact")}
                description={t("Use ellipsis when the total page count is large.")}
              />
              <div className="mt-6">
                <CodePreview code={paginationExamples.compactCode[language]}>
                  <Pagination aria-label={t("Page navigation")}>
                    <PaginationContent className="flex-wrap justify-center gap-2">
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">
                          10
                        </PaginationLink>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Main primitives available in Binhlaig UI Pagination.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Component")}</th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["Pagination", "Root navigation wrapper."],
                      ["PaginationContent", "Container for pagination items."],
                      ["PaginationItem", "Wraps an individual pagination control."],
                      ["PaginationLink", "Anchor-based page link."],
                      ["PaginationButton", "Button-based page control for local state."],
                      ["PaginationPrevious", "Previous page link."],
                      ["PaginationNext", "Next page link."],
                      ["PaginationEllipsis", "Indicates skipped page ranges."],
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
                href="/docs/components/navbar"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Navbar
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
              ["Controlled", "#controlled"],
              ["Previous and Next", "#previous-next"],
              ["Compact", "#compact"],
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/pagination/page.tsx"
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