// "use client"

// import * as React from "react"
// import Link from "next/link"
// import {
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   Clipboard,
//   Code2,
//   ExternalLink,
//   Sparkles,
// } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Combobox,
//   ComboboxClear,
//   ComboboxEmpty,
//   ComboboxGroup,
//   ComboboxGroupLabel,
//   ComboboxInput,
//   ComboboxInputGroup,
//   ComboboxItem,
//   ComboboxItemIndicator,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxPortal,
//   ComboboxPositioner,
//   ComboboxSeparator,
//   ComboboxTrigger,
// } from "@/components/ui/combobox"

// type PreviewTab = "preview" | "code"

// type Option = {
//   value: string
//   label: string
//   group?: string
// }

// const frameworks: Option[] = [
//   { value: "next", label: "Next.js" },
//   { value: "react", label: "React" },
//   { value: "vue", label: "Vue" },
//   { value: "svelte", label: "Svelte" },
//   { value: "angular", label: "Angular" },
// ]

// const groupedOptions: Option[] = [
//   { value: "next", label: "Next.js", group: "React" },
//   { value: "remix", label: "Remix", group: "React" },
//   { value: "nuxt", label: "Nuxt", group: "Vue" },
//   { value: "vite-vue", label: "Vue + Vite", group: "Vue" },
// ]

// const initCode = `npx binhlaig-ui@latest init`
// const installCode =
//   `npx binhlaig-ui@latest add combobox`
// const overwriteCode =
//   `npx binhlaig-ui@latest add combobox --overwrite`

// const importCode = `import {
//   Combobox,
//   ComboboxClear,
//   ComboboxEmpty,
//   ComboboxInput,
//   ComboboxInputGroup,
//   ComboboxItem,
//   ComboboxItemIndicator,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxPortal,
//   ComboboxPositioner,
//   ComboboxTrigger,
// } from "@/components/ui/combobox"`

// const basicCode = `import {
//   Combobox,
//   ComboboxClear,
//   ComboboxEmpty,
//   ComboboxInput,
//   ComboboxInputGroup,
//   ComboboxItem,
//   ComboboxItemIndicator,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxPortal,
//   ComboboxPositioner,
//   ComboboxTrigger,
// } from "@/components/ui/combobox"

// const frameworks = [
//   { value: "next", label: "Next.js" },
//   { value: "react", label: "React" },
//   { value: "vue", label: "Vue" },
// ]

// export function ComboboxDemo() {
//   return (
//     <Combobox items={frameworks}>
//       <ComboboxInputGroup>
//         <ComboboxInput
//           aria-label="Framework"
//           placeholder="Select framework..."
//         />
//         <ComboboxClear aria-label="Clear selection" />
//         <ComboboxTrigger aria-label="Open options" />
//       </ComboboxInputGroup>

//       <ComboboxPortal>
//         <ComboboxPositioner>
//           <ComboboxPopup>
//             <ComboboxEmpty>
//               No frameworks found.
//             </ComboboxEmpty>

//             <ComboboxList>
//               {(item) => (
//                 <ComboboxItem
//                   key={item.value}
//                   value={item}
//                 >
//                   {item.label}
//                   <ComboboxItemIndicator />
//                 </ComboboxItem>
//               )}
//             </ComboboxList>
//           </ComboboxPopup>
//         </ComboboxPositioner>
//       </ComboboxPortal>
//     </Combobox>
//   )
// }`

// const controlledCode = `"use client"

// import * as React from "react"

// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxInputGroup,
//   ComboboxItem,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxPortal,
//   ComboboxPositioner,
//   ComboboxTrigger,
// } from "@/components/ui/combobox"

// export function ControlledCombobox() {
//   const [value, setValue] =
//     React.useState(null)

//   return (
//     <Combobox
//       items={frameworks}
//       value={value}
//       onValueChange={setValue}
//     >
//       {/* children */}
//     </Combobox>
//   )
// }`

// const groupedCode = `import {
//   Combobox,
//   ComboboxEmpty,
//   ComboboxGroup,
//   ComboboxGroupLabel,
//   ComboboxInput,
//   ComboboxInputGroup,
//   ComboboxItem,
//   ComboboxList,
//   ComboboxPopup,
//   ComboboxPortal,
//   ComboboxPositioner,
//   ComboboxSeparator,
//   ComboboxTrigger,
// } from "@/components/ui/combobox"

// export function GroupedCombobox() {
//   return (
//     <Combobox>
//       <ComboboxInputGroup>
//         <ComboboxInput placeholder="Choose a framework..." />
//         <ComboboxTrigger />
//       </ComboboxInputGroup>

//       <ComboboxPortal>
//         <ComboboxPositioner>
//           <ComboboxPopup>
//             <ComboboxEmpty>No results.</ComboboxEmpty>

//             <ComboboxList>
//               <ComboboxGroup>
//                 <ComboboxGroupLabel>
//                   React
//                 </ComboboxGroupLabel>
//                 {/* items */}
//               </ComboboxGroup>

//               <ComboboxSeparator />

//               <ComboboxGroup>
//                 <ComboboxGroupLabel>
//                   Vue
//                 </ComboboxGroupLabel>
//                 {/* items */}
//               </ComboboxGroup>
//             </ComboboxList>
//           </ComboboxPopup>
//         </ComboboxPositioner>
//       </ComboboxPortal>
//     </Combobox>
//   )
// }`

// function cn(
//   ...classes: Array<string | false | null | undefined>
// ) {
//   return classes.filter(Boolean).join(" ")
// }

// function SectionTitle({
//   id,
//   title,
//   description,
// }: {
//   id: string
//   title: string
//   description?: string
// }) {
//   return (
//     <div id={id} className="scroll-mt-28">
//       <h2 className="text-2xl font-bold tracking-tight">
//         {title}
//       </h2>
//       {description && (
//         <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
//           {description}
//         </p>
//       )}
//     </div>
//   )
// }

// function CodePreview({
//   children,
//   code,
// }: {
//   children: React.ReactNode
//   code: string
// }) {
//   const [tab, setTab] =
//     React.useState<PreviewTab>("preview")
//   const [copied, setCopied] =
//     React.useState(false)

//   const copyCode = async () => {
//     await navigator.clipboard.writeText(code)
//     setCopied(true)
//     window.setTimeout(() => setCopied(false), 1500)
//   }

//   return (
//     <div className="overflow-hidden rounded-2xl border bg-background">
//       <div className="flex items-center justify-between border-b px-3">
//         <div className="flex">
//           {(["preview", "code"] as const).map((item) => (
//             <button
//               key={item}
//               type="button"
//               onClick={() => setTab(item)}
//               className={cn(
//                 "relative px-3 py-3 text-sm font-medium capitalize",
//                 tab === item
//                   ? "text-primary"
//                   : "text-muted-foreground hover:text-foreground"
//               )}
//             >
//               {item}
//               {tab === item && (
//                 <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
//               )}
//             </button>
//           ))}
//         </div>

//         <button
//           type="button"
//           onClick={copyCode}
//           className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
//           aria-label="Copy code"
//         >
//           {copied ? (
//             <Check className="size-4 text-emerald-500" />
//           ) : (
//             <Clipboard className="size-4" />
//           )}
//         </button>
//       </div>

//       {tab === "preview" ? (
//         <div className="flex min-h-[280px] items-center justify-center bg-muted/20 p-8">
//           <div className="w-full max-w-sm">
//             {children}
//           </div>
//         </div>
//       ) : (
//         <div className="overflow-x-auto bg-slate-950 p-5">
//           <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
//             <code>{code}</code>
//           </pre>
//         </div>
//       )}
//     </div>
//   )
// }

// function FrameworkCombobox({
//   value,
//   onValueChange,
// }: {
//   value?: Option | null
//   onValueChange?: (value: Option | null) => void
// }) {
//   return (
//     <Combobox
//       items={frameworks}
//       value={value}
//       onValueChange={onValueChange}
//     >
//       <ComboboxInputGroup>
//         <ComboboxInput
//           aria-label="Framework"
//           placeholder="Select framework..."
//         />
//         <ComboboxClear aria-label="Clear selection" />
//         <ComboboxTrigger aria-label="Open options" />
//       </ComboboxInputGroup>

//       <ComboboxPortal>
//         <ComboboxPositioner>
//           <ComboboxPopup>
//             <ComboboxEmpty>
//               No frameworks found.
//             </ComboboxEmpty>

//             <ComboboxList>
//               {(item: Option) => (
//                 <ComboboxItem
//                   key={item.value}
//                   value={item}
//                 >
//                   {item.label}
//                   <ComboboxItemIndicator />
//                 </ComboboxItem>
//               )}
//             </ComboboxList>
//           </ComboboxPopup>
//         </ComboboxPositioner>
//       </ComboboxPortal>
//     </Combobox>
//   )
// }

// export default function ComboboxDocumentationPage() {
//   const [copied, setCopied] = React.useState(false)
//   const [selected, setSelected] =
//     React.useState<Option | null>(frameworks[0])

//   const copyInstall = async () => {
//     await navigator.clipboard.writeText(installCode)
//     setCopied(true)
//     window.setTimeout(() => setCopied(false), 1500)
//   }

//   const reactItems = groupedOptions.filter(
//     (item) => item.group === "React"
//   )
//   const vueItems = groupedOptions.filter(
//     (item) => item.group === "Vue"
//   )

//   return (
//     <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
//       <main className="min-w-0">
//         <article className="mx-auto max-w-4xl">
//           <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
//             <Link
//               href="/docs/components"
//               className="hover:text-foreground"
//             >
//               Components
//             </Link>
//             <span>/</span>
//             <span className="text-foreground">
//               ComboBox
//             </span>
//           </div>

//           <section className="border-b pb-10">
//             <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
//               <Sparkles className="size-3.5" />
//               Binhlaig UI Component
//             </div>

//             <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
//               ComboBox
//             </h1>

//             <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
//               A searchable input combined with a predefined
//               list of selectable options.
//             </p>

//             <div className="mt-7 flex flex-wrap gap-3">
//               <Button
//                 onClick={() =>
//                   document
//                     .querySelector("#usage")
//                     ?.scrollIntoView({
//                       behavior: "smooth",
//                     })
//                 }
//               >
//                 View examples
//                 <ArrowRight className="size-4" />
//               </Button>

//               <Button
//                 variant="outline"
//                 onClick={() =>
//                   document
//                     .querySelector("#api-reference")
//                     ?.scrollIntoView({
//                       behavior: "smooth",
//                     })
//                 }
//               >
//                 <Code2 className="size-4" />
//                 API reference
//               </Button>
//             </div>
//           </section>

//           <div className="mt-12 space-y-16">
//             <section>
//               <SectionTitle
//                 id="installation"
//                 title="Installation"
//                 description="Initialize Binhlaig UI once, then install ComboBox using the saved installer."
//               />

//               <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
//                 <p className="text-sm font-medium">
//                   Initialize first
//                 </p>

//                 <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
//                   <code>{initCode}</code>
//                 </pre>
//               </div>

//               <div className="mt-5 overflow-hidden rounded-2xl border bg-slate-950">
//                 <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
//                   <span className="text-xs text-slate-500">
//                     Terminal
//                   </span>

//                   <button
//                     type="button"
//                     onClick={copyInstall}
//                     className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-900 hover:text-white"
//                   >
//                     {copied ? (
//                       <Check className="size-4 text-emerald-400" />
//                     ) : (
//                       <Clipboard className="size-4" />
//                     )}
//                   </button>
//                 </div>

//                 <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
//                   <code>{installCode}</code>
//                 </pre>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="import"
//                 title="Import"
//                 description="Import the ComboBox primitives you need."
//               />

//               <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
//                 <pre className="font-mono text-sm text-slate-300">
//                   <code>{importCode}</code>
//                 </pre>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="usage"
//                 title="Basic"
//                 description="Filter and select from a predefined list."
//               />

//               <div className="mt-6">
//                 <CodePreview code={basicCode}>
//                   <FrameworkCombobox />
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="controlled"
//                 title="Controlled Value"
//                 description="Manage the selected option from React state."
//               />

//               <div className="mt-6">
//                 <CodePreview code={controlledCode}>
//                   <div className="grid gap-3">
//                     <FrameworkCombobox
//                       value={selected}
//                       onValueChange={setSelected}
//                     />

//                     <p className="text-sm text-muted-foreground">
//                       Selected: {selected?.label ?? "None"}
//                     </p>
//                   </div>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="grouped"
//                 title="Grouped Options"
//                 description="Organize large option lists into readable groups."
//               />

//               <div className="mt-6">
//                 <CodePreview code={groupedCode}>
//                   <Combobox>
//                     <ComboboxInputGroup>
//                       <ComboboxInput
//                         aria-label="Framework"
//                         placeholder="Choose a framework..."
//                       />
//                       <ComboboxTrigger aria-label="Open options" />
//                     </ComboboxInputGroup>

//                     <ComboboxPortal>
//                       <ComboboxPositioner>
//                         <ComboboxPopup>
//                           <ComboboxEmpty>
//                             No results.
//                           </ComboboxEmpty>

//                           <ComboboxList>
//                             <ComboboxGroup>
//                               <ComboboxGroupLabel>
//                                 React
//                               </ComboboxGroupLabel>

//                               {reactItems.map((item) => (
//                                 <ComboboxItem
//                                   key={item.value}
//                                   value={item}
//                                 >
//                                   {item.label}
//                                   <ComboboxItemIndicator />
//                                 </ComboboxItem>
//                               ))}
//                             </ComboboxGroup>

//                             <ComboboxSeparator />

//                             <ComboboxGroup>
//                               <ComboboxGroupLabel>
//                                 Vue
//                               </ComboboxGroupLabel>

//                               {vueItems.map((item) => (
//                                 <ComboboxItem
//                                   key={item.value}
//                                   value={item}
//                                 >
//                                   {item.label}
//                                   <ComboboxItemIndicator />
//                                 </ComboboxItem>
//                               ))}
//                             </ComboboxGroup>
//                           </ComboboxList>
//                         </ComboboxPopup>
//                       </ComboboxPositioner>
//                     </ComboboxPortal>
//                   </Combobox>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="disabled"
//                 title="Disabled"
//                 description="Disable the complete control when selection is unavailable."
//               />

//               <div className="mt-6">
//                 <CodePreview code={basicCode}>
//                   <Combobox items={frameworks} disabled>
//                     <ComboboxInputGroup>
//                       <ComboboxInput
//                         aria-label="Framework"
//                         placeholder="Unavailable"
//                       />
//                       <ComboboxTrigger aria-label="Open options" />
//                     </ComboboxInputGroup>
//                   </Combobox>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="overwrite"
//                 title="Update or Overwrite"
//                 description="Replace an older ComboBox source with the latest registry version."
//               />

//               <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
//                 <pre className="font-mono text-sm text-slate-300">
//                   <code>{overwriteCode}</code>
//                 </pre>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="api-reference"
//                 title="API Reference"
//                 description="Main primitives available in Binhlaig UI ComboBox."
//               />

//               <div className="mt-6 overflow-x-auto rounded-2xl border">
//                 <table className="w-full min-w-[760px] text-left text-sm">
//                   <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
//                     <tr>
//                       <th className="px-5 py-4 font-medium">
//                         Component
//                       </th>
//                       <th className="px-5 py-4 font-medium">
//                         Purpose
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody className="divide-y">
//                     {[
//                       ["Combobox", "Controls items, value and open state."],
//                       ["ComboboxInput", "Filters available options."],
//                       ["ComboboxTrigger", "Opens or closes the popup."],
//                       ["ComboboxClear", "Clears the selected option."],
//                       ["ComboboxPopup", "Floating option container."],
//                       ["ComboboxList", "Renders available items."],
//                       ["ComboboxItem", "A selectable option."],
//                       ["ComboboxItemIndicator", "Marks the selected option."],
//                       ["ComboboxEmpty", "Shown when filtering has no results."],
//                       ["ComboboxGroup", "Groups related options."],
//                     ].map(([name, purpose]) => (
//                       <tr key={name}>
//                         <td className="px-5 py-4">
//                           <code>{name}</code>
//                         </td>
//                         <td className="px-5 py-4 text-muted-foreground">
//                           {purpose}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>

//             <div className="grid gap-4 border-t pt-8 sm:grid-cols-2">
//               <Link
//                 href="/docs/components/calendar"
//                 className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
//               >
//                 <div className="text-xs text-muted-foreground">
//                   Previous component
//                 </div>

//                 <div className="mt-2 flex items-center gap-2 font-semibold">
//                   <ArrowLeft className="size-4" />
//                   Calendar
//                 </div>
//               </Link>

//               <Link
//                 href="/docs/components"
//                 className="rounded-2xl border p-5 text-right hover:border-primary/40 hover:bg-muted/40"
//               >
//                 <div className="text-xs text-muted-foreground">
//                   Next
//                 </div>

//                 <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
//                   All components
//                   <ArrowRight className="size-4" />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </article>
//       </main>

//       <aside className="hidden xl:block">
//         <div className="sticky top-24 border-l pl-5">
//           <p className="mb-4 text-sm font-semibold">
//             On this page
//           </p>

//           <nav className="space-y-1">
//             {[
//               ["Installation", "#installation"],
//               ["Import", "#import"],
//               ["Basic", "#usage"],
//               ["Controlled Value", "#controlled"],
//               ["Grouped Options", "#grouped"],
//               ["Disabled", "#disabled"],
//               ["Update or Overwrite", "#overwrite"],
//               ["API Reference", "#api-reference"],
//             ].map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="block py-1.5 text-[13px] text-muted-foreground hover:text-primary"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-7 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground hover:text-foreground"
//           >
//             Edit this page
//             <ExternalLink className="size-3.5" />
//           </a>
//         </div>
//       </aside>
//     </div>
//   )
// }



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page