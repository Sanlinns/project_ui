export const LANGUAGE_COOKIE = "binhlaig_ui_language"
export const COMPONENT_SEARCH_EVENT = "binhlaig:component-search"
export type Language = "en" | "my"
export function parseLanguage(value: unknown): Language {
  return value === "my" ? "my" : "en"
}
