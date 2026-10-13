// "use client";

// import { useLanguage } from "@/components/providers/language-provider";
// import type { MessageKey } from "@/lib/i18n";

// import { useState, useSyncExternalStore } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Check,
//   Menu,
//   Monitor,
//   Moon,
//   Search,
//   Sun,
//   X,
// } from "lucide-react";
// import { useTheme } from "next-themes";
// import { ComponentSearch } from "../ComponentSearch";
// import { LanguageSwitch } from "@/components/language-switch";
// import { BrandLogo } from "../brand-logo";

// const navItems: { label: MessageKey; href: string }[] = [
//   { label: "Docs", href: "/docs/installation" },
//   { label: "Components", href: "/docs/components" },
//   { label: "Templates", href: "/templates" },
// ];

// export function ComponentsHeader() {
//   const { t } = useLanguage();
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();

//   const mounted = useSyncExternalStore(
//     () => () => {},
//     () => true,
//     () => false,
//   );
//   const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
//   const mobileOpen = mobileOpenPath === pathname;
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [themeMenuOpen, setThemeMenuOpen] = useState(false);

//   const isActive = (href: string) => {
//     if (href === "/docs/installation") {
//       return pathname === href;
//     }

//     return pathname.startsWith(href);
//   };

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl">
//         <div className="docs-header-row mx-auto flex min-h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
//           {/* Brand */}

//           <BrandLogo className="brand shrink-0">
//             <span className="brand-copy">
//               <strong>Binhlaig UI</strong>
//             </span>
//           </BrandLogo>

//           {/* Desktop navigation */}
//           <nav className="docs-nav hidden items-center gap-1 lg:flex">
//             {navItems.map((item) => {
//               const active = isActive(item.href);

//               return (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={[
//                     "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
//                     "outline-none focus-visible:ring-2 focus-visible:ring-ring",
//                     active
//                       ? "bg-accent text-accent-foreground"
//                       : "text-muted-foreground hover:bg-accent/70 hover:text-foreground",
//                   ].join(" ")}
//                 >
//                   {t(item.label)}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="ml-auto flex items-center gap-2">


//             {/* Search input */}
//             <ComponentSearch />
//             <LanguageSwitch />


//             {/* Mobile search */}
//             <button
//               type="button"
//               className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
//               aria-label={t("Search")}
//               aria-expanded={searchOpen}
//               onClick={() => setSearchOpen((value) => !value)}
//             >
//               <Search className="size-4" />
//             </button>


//             {/* Theme selector */}
//             <div className="relative">
//               <button
//                 type="button"
//                 onClick={() => setThemeMenuOpen((value) => !value)}
//                 className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//                 aria-label={t("Change theme")}
//                 aria-expanded={themeMenuOpen}
//               >
//                 {!mounted ? (
//                   <Monitor className="size-[18px]" />
//                 ) : theme === "dark" ? (
//                   <Moon className="size-[18px]" />
//                 ) : theme === "light" ? (
//                   <Sun className="size-[18px]" />
//                 ) : (
//                   <Monitor className="size-[18px]" />
//                 )}
//               </button>

//               {themeMenuOpen && (
//                 <>
//                   <button
//                     type="button"
//                     aria-label={t("Close theme menu")}
//                     onClick={() => setThemeMenuOpen(false)}
//                     className="fixed inset-0 z-40 cursor-default"
//                   />

//                   <div className="absolute right-0 top-11 z-50 w-36 rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-xl">
//                     <ThemeOption
//                       label="Light"
//                       value="light"
//                       currentTheme={theme}
//                       icon={<Sun className="size-4" />}
//                       onSelect={() => {
//                         setTheme("light");
//                         setThemeMenuOpen(false);
//                       }}
//                     />

//                     <ThemeOption
//                       label="Dark"
//                       value="dark"
//                       currentTheme={theme}
//                       icon={<Moon className="size-4" />}
//                       onSelect={() => {
//                         setTheme("dark");
//                         setThemeMenuOpen(false);
//                       }}
//                     />

//                     <ThemeOption
//                       label="System"
//                       value="system"
//                       currentTheme={theme}
//                       icon={<Monitor className="size-4" />}
//                       onSelect={() => {
//                         setTheme("system");
//                         setThemeMenuOpen(false);
//                       }}
//                     />
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Mobile menu */}
//             <button
//               type="button"
//               onClick={() =>
//                 setMobileOpenPath((value) =>
//                   value === pathname ? null : pathname,
//                 )
//               }
//               className="docs-menu-toggle inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
//               aria-label={mobileOpen ? t("Close navigation") : t("Open navigation")}
//               aria-expanded={mobileOpen}
//             >
//               {mobileOpen ? (
//                 <X className="size-5" />
//               ) : (
//                 <Menu className="size-5" />
//               )}
//             </button>
//           </div>
//         </div>

//         {searchOpen && (
//           <div className="border-t border-border px-4 py-3 md:hidden">
//             <ComponentSearch mobile />
//           </div>
//         )}
//         {/* Mobile navigation */}
//         {mobileOpen && (
//           <div className="docs-mobile-navigation border-t border-border bg-background lg:hidden">
//             <nav className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-6">
//               {navItems.map((item) => {
//                 const active = isActive(item.href);

//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={[
//                       "rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
//                       active
//                         ? "bg-primary/10 text-primary"
//                         : "text-muted-foreground hover:bg-accent hover:text-foreground",
//                     ].join(" ")}
//                   >
//                     {t(item.label)}
//                   </Link>
//                 );
//               })}



//             </nav>
//           </div>
//         )}
//       </header>
//     </>
//   );
// }

// type ThemeOptionProps = {
//   label: MessageKey;
//   value: string;
//   currentTheme?: string;
//   icon: React.ReactNode;
//   onSelect: () => void;
// };

// function ThemeOption({
//   label,
//   value,
//   currentTheme,
//   icon,
//   onSelect,
// }: ThemeOptionProps) {
//   const { t } = useLanguage();
//   const selected = currentTheme === value;

//   return (
//     <button
//       type="button"
//       onClick={onSelect}
//       className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-accent"
//     >
//       {icon}
//       <span>{t(label)}</span>

//       {selected && <Check className="ml-auto size-3.5 text-primary" />}
//     </button>
//   );
// }




"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import { ComponentSearch } from "../ComponentSearch";
import { LanguageSwitch } from "@/components/language-switch";
import { BrandLogo } from "../brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Docs", href: "/docs/installation" },
  { label: "Components", href: "/docs/components" },
  { label: "Templates", href: "/templates" },
] as const;

// Scope styles to this header. Light/Dark mode uses the same layout.
const headerStyles = `
.components-header .docs-header-brand { display:inline-flex; align-items:center; gap:10px; font-family:Arial,sans-serif; font-size:16px; font-weight:700; line-height:1.4; white-space:nowrap; }
.components-header .docs-header-brand img { width:32px; height:32px; }
.components-header .docs-header-actions { min-width:0; }
.components-header .docs-theme-control button[aria-haspopup="menu"],
.components-header .docs-theme-control > div > button:disabled { background:var(--background); color:var(--foreground); border-color:var(--border); border-radius:8px; box-shadow:none; }
.components-header .docs-theme-control button[aria-haspopup="menu"]:hover { background:var(--accent); color:var(--accent-foreground); border-color:var(--border); }
.components-header .docs-theme-control button[aria-haspopup="menu"]:focus-visible { outline:2px solid var(--ring); outline-offset:3px; box-shadow:none; }
.components-header .docs-theme-control [role="menu"] { min-width:190px; width:max-content; max-width:calc(100vw - 32px); background:var(--popover); color:var(--popover-foreground); border-color:var(--border); border-radius:10px; }
.components-header .docs-theme-control [role="menuitemradio"] { white-space:nowrap; min-height:44px; line-height:1.8; }
.components-header .docs-theme-control [role="menuitemradio"]:is(:hover,:focus),
.components-header .docs-theme-control [role="menuitemradio"][aria-checked="true"] { background:var(--accent); color:var(--accent-foreground); }
.components-header .docs-theme-control [role="menuitemradio"] svg { color:currentColor; }
.components-header[data-language="my"] :is(.docs-nav a,.docs-mobile-navigation a) { font-size:12px; line-height:1.9; letter-spacing:normal; }
.components-header[data-language="my"] .docs-theme-control [role="menuitemradio"] { font-size:12px; line-height:1.9; }
@media(max-width:420px) {
  .components-header .docs-header-row { flex-wrap:wrap; gap:10px; padding-block:12px; }
  .components-header .docs-header-brand { width:100%; }
  .components-header .docs-header-actions { width:100%; margin-left:0; justify-content:flex-end; }
  .components-header .docs-header-actions > .language-switch { margin-right:auto; }
}
`;

export function ComponentsHeader() {
  const { t, language } = useLanguage();
  const pathname = usePathname();
  const [mobileOpenPath, setMobileOpenPath] = useState<string | null>(null);
  const [searchOpenPath, setSearchOpenPath] = useState<string | null>(null);
  const mobileOpen = mobileOpenPath === pathname;
  const searchOpen = searchOpenPath === pathname;

  const isActive = (href: string) => href === "/docs/installation"
    ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header data-language={language} className="components-header sticky top-0 z-50 w-full border-b border-border/70 bg-background/95">
      <style>{headerStyles}</style>
      <div className="docs-header-row mx-auto flex min-h-16 w-full max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo className="docs-header-brand shrink-0"><strong>Binhlaig UI</strong></BrandLogo>
        <nav aria-label={t("Primary navigation")} className="docs-nav hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring ${isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"}`}>
              {t(item.label)}
            </Link>
          ))}
        </nav>
        <div className="docs-header-actions ml-auto flex items-center gap-2">
          <ComponentSearch />
          <LanguageSwitch />
          <button type="button" className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
            aria-label={t("Search")} aria-expanded={searchOpen} aria-controls="docs-mobile-search"
            onClick={() => setSearchOpenPath(searchOpen ? null : pathname)}>
            <Search className="size-4" />
          </button>
          {/* Shared theme control: outside click + Escape close the menu; no full-screen button overlay. */}
          <div className="docs-theme-control shrink-0"><ThemeToggle /></div>
          <button type="button" onClick={() => setMobileOpenPath(mobileOpen ? null : pathname)}
            className="docs-menu-toggle inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent lg:hidden"
            aria-label={mobileOpen ? t("Close navigation") : t("Open navigation")}
            aria-expanded={mobileOpen} aria-controls="docs-mobile-navigation">
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {searchOpen && <div id="docs-mobile-search" className="border-t border-border px-4 py-3 md:hidden"><ComponentSearch mobile /></div>}
      {mobileOpen && (
        <div id="docs-mobile-navigation" className="docs-mobile-navigation border-t border-border bg-background lg:hidden">
          <nav aria-label={t("Primary navigation")} className="mx-auto grid max-w-[1440px] gap-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setMobileOpenPath(null)}
              className={`rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${isActive(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}>
              {t(item.label)}
            </Link>)}
          </nav>
        </div>
      )}
    </header>
  );
}