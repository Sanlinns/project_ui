"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { messages, type MessageKey } from "@/lib/i18n"
import { LANGUAGE_COOKIE, parseLanguage, type Language } from "@/lib/language"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (text: MessageKey) => string
}
const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children, initialLanguage }: {
  children: React.ReactNode
  initialLanguage: Language
}) {
  const [language, updateLanguage] = useState(initialLanguage)
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])
  const setLanguage = useCallback((value: Language) => {
    const next = parseLanguage(value)
    const secure = window.location.protocol === "https:" ? "; Secure" : ""
    document.cookie = `${LANGUAGE_COOKIE}=${next}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
    document.documentElement.lang = next
    updateLanguage(next)
  }, [])
  const t = useCallback((text: MessageKey) => messages[language][text], [language])
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider")
  return context
}
