"use client";

import { useLanguage } from "@/components/providers/language-provider";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

type ThemeName = "light" | "dark" | "system";
type IconProps = { className?: string };

const SunIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
  </svg>
);

const MoonIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.4 15.5A8.5 8.5 0 0 1 8.5 3.6 8.5 8.5 0 1 0 20.4 15.5Z" />
  </svg>
);

const MonitorIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const CheckIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const options = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
] as const;

export function ThemeToggle() {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedTheme: ThemeName =
    theme === "light" || theme === "dark" ? theme : "system";
  const SelectedIcon =
    options.find((option) => option.value === selectedTheme)?.Icon ??
    MonitorIcon;

  useEffect(() => {
    // Hydration guard: theme storage is only available after the client mounts.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const selectedIndex = options.findIndex(
      (option) => option.value === selectedTheme,
    );
    itemRefs.current[selectedIndex]?.focus();

    const close = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open, selectedTheme]);

  function selectTheme(value: ThemeName) {
    setTheme(value);
    setOpen(false);
    buttonRef.current?.focus();
  }

  function handleMenuKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    const currentIndex = itemRefs.current.findIndex(
      (item) => item === document.activeElement,
    );

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      buttonRef.current?.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextIndex =
        (currentIndex + direction + options.length) % options.length;
      itemRefs.current[nextIndex]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      itemRefs.current[event.key === "Home" ? 0 : options.length - 1]?.focus();
    }
  }

  if (!mounted) {
    return (
      <button
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
        type="button"
        aria-label={t("Choose theme")}
        aria-expanded="false"
        disabled
      >
        <MonitorIcon />
      </button>
    );
  }

  return (
    <div className="relative z-[60]" ref={rootRef}>
      <button
        ref={buttonRef}
        className="flex h-10 w-10 shrink-0 touch-manipulation items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-400 dark:focus:ring-blue-950"
        type="button"
        aria-label={`${t("Choose theme")}: ${t(options.find((option) => option.value === selectedTheme)?.label ?? "System")}`}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <SelectedIcon />
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-[70] mt-2 w-40 rounded-xl border border-slate-200 bg-white p-1.5 text-slate-700 shadow-2xl shadow-slate-950/15 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
          role="menu"
          aria-label={t("Theme")}
          onKeyDown={handleMenuKeyDown}
        >
          {options.map(({ value, label, Icon }, index) => (
            <button
              key={value}
              ref={(element) => {
                itemRefs.current[index] = element;
              }}
              className="flex w-full touch-manipulation items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-800 dark:focus:bg-slate-800"
              type="button"
              role="menuitemradio"
              aria-checked={selectedTheme === value}
              onClick={() => selectTheme(value)}
            >
              <Icon />
              <span className="flex-1">{t(label)}</span>
              {selectedTheme === value && (
                <CheckIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
