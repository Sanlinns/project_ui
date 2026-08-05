import Link from "next/link"

type ComponentDocPageProps = {
  name: string
  description: string
  importCode: string
}

export function ComponentDocPage({ name, description, importCode }: ComponentDocPageProps) {
  const slug = name.toLowerCase()
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <p className="text-sm font-medium text-primary">Binhlaig UI Component</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{description}</p>
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <pre className="overflow-x-auto rounded-xl border bg-muted p-4"><code>{`npx binhlaig-ui@latest add ${slug}`}</code></pre>
        <p className="text-sm text-muted-foreground">The installer selected during <code>init</code> is read from <code>binhlaig.json</code>. Explicit installer flags are optional overrides.</p>
        <pre className="overflow-x-auto rounded-xl border bg-muted p-4"><code>{`npx binhlaig-ui@latest add ${slug} --overwrite`}</code></pre>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold">Import</h2>
        <pre className="overflow-x-auto rounded-xl border bg-muted p-4"><code>{importCode}</code></pre>
      </section>
      <Link className="mt-10 inline-block text-sm font-medium text-primary hover:underline" href="/docs/components">View all components</Link>
    </main>
  )
}
