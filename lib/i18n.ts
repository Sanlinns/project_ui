import en from "@/messages/en.json";
import my from "@/messages/my.json";

import type { Language } from "@/lib/language";
export { LANGUAGE_COOKIE, parseLanguage as validateLanguage, type Language } from "@/lib/language";
export type MessageKey = keyof typeof en;
export const messages: Record<Language, Record<MessageKey, string>> = { en, my };
// Exact key parity is also checked in both directions by TypeScript.
const matchingKeys: Record<keyof typeof my, string> = en;
void matchingKeys;
export function isMessageKey(value: string): value is MessageKey {
  return Object.hasOwn(en, value);
}
