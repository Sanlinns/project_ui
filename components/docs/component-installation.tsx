"use client"

import Link from "next/link"
import { Check, Clipboard, Terminal } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/providers/language-provider"
import { componentInstallCommand, type ComponentSlug } from "@/lib/component-installation"

export function ComponentInstallation({ componentName, componentSlug }: {
  componentName: string
  componentSlug: ComponentSlug
}) {
  const { t, language } = useLanguage()
  const command = componentInstallCommand(componentSlug)
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current) }, [])

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command)
      setFailed(false)
      setCopied(true)
      if (timeout.current) clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
      setFailed(true)
    }
  }

  return (
    <section id="installation" aria-labelledby="installation-heading" className="min-w-0 scroll-mt-28 space-y-5">
      <div>
        <h2 id="installation-heading" className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">{t("Installation")}</h2>
        <p className="mt-2 text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          {language === "my" ? `${componentName} ကို မိမိ project ထဲသို့ ထည့်သွင်းပါ။` : `Install ${componentName} in your project.`}
        </p>
      </div>
      <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 px-4 py-2">
          <span className="inline-flex items-center gap-2 text-xs text-slate-400"><Terminal aria-hidden="true" className="size-4" />Terminal</span>
          <button type="button" onClick={copyCommand} aria-label={t("Copy command")} className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs text-slate-300 transition hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
            {copied ? <Check aria-hidden="true" className="size-3.5" /> : <Clipboard aria-hidden="true" className="size-3.5" />}
            {copied ? t("Copied") : t("Copy command")}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-6 text-slate-300"><code>{command}</code></pre>
      </div>
      <span role="status" className={failed ? "block text-sm text-red-600 dark:text-red-400" : "sr-only"}>{failed ? t("Unable to copy command. Please select and copy it manually.") : copied ? t("Copied") : ""}</span>
      <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{t("For project setup, installer selection, dependencies, and advanced installation instructions, see the Installation Guide.")}</p>
      <Link href="/docs/installation" className="inline-block rounded-sm text-sm font-medium text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-blue-400">{t("View Installation Guide")} →</Link>
      <Link href="/docs/installation#overwrite" className="block w-fit rounded-sm text-sm text-slate-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 dark:text-slate-400">{t("Update or Overwrite") } →</Link>
    </section>
  )
}
