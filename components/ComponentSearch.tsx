"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { COMPONENT_SEARCH_EVENT } from "@/lib/language";

import { FormEvent, useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export function ComponentSearch({ mobile = false }: { mobile?: boolean }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = search.trim();

    if (!query) return;

    router.push(`/docs/components?search=${encodeURIComponent(query)}`);
    // A repeated submission must also replace any locally edited page input.
    const currentUrl = new URL(window.location.href);
    if (currentUrl.pathname === "/docs/components" && currentUrl.searchParams.get("search") === query) {
      window.dispatchEvent(new CustomEvent<string>(COMPONENT_SEARCH_EVENT, { detail: query }));
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={mobile ? "relative flex h-11 w-full items-center" : "relative hidden h-10 w-60 items-center md:flex"}
    >
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={t("Search components...")}
        className="h-full w-full rounded-lg border border-border bg-muted/50 py-2 pl-9 pr-12 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
        aria-label={t("Search components")}
      />

      <button
        type="submit"
        className="absolute left-2 inline-flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        aria-label={t("Search")}
      >
        <Search className="size-4" />
      </button>

      <kbd className="pointer-events-none absolute right-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
        Enter
      </kbd>
    </form>
  );
}
