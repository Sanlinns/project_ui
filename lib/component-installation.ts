// Component documentation identifiers validated against registry.json.
import registry from "@/registry.json"

export const componentSlugs = [
  "alert",
  "alert-dialog",
  "avatar",
  "badge",
  "breadcrumb",
  "button",
  "calendar",
  "card",
  "checkbox",
  "combobox",
  "data-table",
  "dialog",
  "drawer",
  "form",
  "input",
  "input-otp",
  "label",
  "navbar",
  "pagination",
  "popover",
  "tabs",
  "textarea",
  "toast"
] as const
export type ComponentSlug = (typeof componentSlugs)[number]

export function componentInstallCommand(slug: ComponentSlug) {
  if (!componentSlugs.includes(slug) || !registry.items.some(item => item.name === slug)) {
    throw new Error(`Unknown component registry identifier: ${slug}`)
  }
  return `npx binhlaig-ui@latest add ${slug}`
}
