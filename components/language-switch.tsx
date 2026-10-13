"use client"

import { useLanguage } from "@/components/providers/language-provider"
import { Fragment } from "react"

export function LanguageSwitch() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <div role="group" aria-label={t("Language")} className="language-switch inline-flex shrink-0 items-center rounded-lg border border-border bg-background p-1 text-xs">
      {([ ["en", "English"], ["my", "မြန်မာ"] ] as const).map(([value, label]) => (
        <Fragment key={value}>
        {value === "my" && <span aria-hidden="true">|</span>}
        <button key={value} type="button" lang={value} aria-pressed={language === value}
          onClick={() => setLanguage(value)}
          className={`min-h-8 rounded-md px-2 py-1.5 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-ring ${language === value ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent"}`}>
          {label}
        </button>
        </Fragment>
      ))}
    </div>
  )
}
