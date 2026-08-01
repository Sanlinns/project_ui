"use client";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function ComponentSearch() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    router.push(`/components?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative hidden h-9 w-60 items-center md:flex"
    >
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search components..."
        className="h-full w-full rounded-lg border border-border bg-muted/50 py-2 pl-9 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        aria-label="Search components"
      />

      <button
        type="submit"
        className="absolute left-2 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label="Search"
      >
        <Search className="size-4" />
      </button>

      <kbd className="pointer-events-none absolute right-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
        Enter
      </kbd>
    </form>
  );
}