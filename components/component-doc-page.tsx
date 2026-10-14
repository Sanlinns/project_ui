import { ComponentInstallation } from "@/components/docs/component-installation"
import type { ComponentSlug } from "@/lib/component-installation"
import Link from "next/link"

type ComponentDocPageProps = {
  componentSlug: ComponentSlug
  name: string
  description: string
  importCode: string
}

export function ComponentDocPage({ name, componentSlug, description, importCode }: ComponentDocPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <p className="text-sm font-medium text-primary">Binhlaig UI Component</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      <div className="mt-10"><ComponentInstallation componentName={name} componentSlug={componentSlug} /></div>
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <pre className="overflow-x-auto rounded-xl border bg-muted p-4"><code>{importCode}</code></pre>
      </section>
      <Link className="mt-10 inline-block text-sm font-medium text-primary hover:underline" href="/docs/components">View all components</Link>
    </main>
  )
}
