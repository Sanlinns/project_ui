import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
};

function Input({
  className,
  type,
  error = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={error || props["aria-invalid"]}
      className={cn(
        "flex h-10 w-full min-w-0 rounded-xl border bg-transparent px-3 py-2",
        "text-sm text-slate-950 shadow-sm outline-none transition-all",
        "placeholder:text-slate-400",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent",
        "file:text-sm file:font-medium file:text-slate-900",
        "selection:bg-blue-600 selection:text-white",
        "focus-visible:border-blue-500",
        "focus-visible:ring-4 focus-visible:ring-blue-500/15",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "dark:text-slate-100 dark:placeholder:text-slate-500",
        "dark:file:text-slate-100",
        error || props["aria-invalid"]
          ? "border-red-500 ring-4 ring-red-500/10"
          : "border-slate-300 dark:border-slate-700",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
export type { InputProps };