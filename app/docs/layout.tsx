"use client";

import { useLanguage } from "@/components/providers/language-provider";

import type { ReactNode } from "react";
import { useState } from "react";
import { Menu } from "lucide-react";

import { ComponentsHeader } from "@/components/layout/components-header";
import { ComponentSidebar } from "@/components/layout/component-sidebar";

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { t } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ComponentsHeader />

      <div className="flex">
        {/* Desktop + Mobile sidebar */}
        <ComponentSidebar
          mobileOpen={sidebarOpen}
          onMobileOpenChange={setSidebarOpen}
        />

        <main className="min-w-0 flex-1">
          {/* Mobile sidebar button */}
          <div className="sticky top-16 z-30 flex h-12 items-center border-b border-border bg-background/90 px-4 backdrop-blur-md lg:hidden">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="inline-flex h-9 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={t("Open components sidebar")}
            >
              <Menu className="size-4" />
              <span>{t("Components")}</span>
            </button>
          </div>

          {/* Page content */}
          <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
