"use client";

import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Root>) {
  return (
    <BaseTabs.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-4",
        className,
      )}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.List>) {
  return (
    <BaseTabs.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-10 w-fit items-center gap-1 rounded-xl",
        "border border-slate-200 bg-slate-100 p-1",
        "dark:border-slate-800 dark:bg-slate-900",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Tab>) {
  return (
    <BaseTabs.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-lg px-3",
        "text-sm font-medium text-slate-500 outline-none transition",
        "hover:text-slate-950",
        "focus-visible:ring-2 focus-visible:ring-blue-500/50",
        "data-[selected]:bg-white data-[selected]:text-slate-950",
        "data-[selected]:shadow-sm",
        "disabled:pointer-events-none disabled:opacity-50",
        "dark:text-slate-400 dark:hover:text-white",
        "dark:data-[selected]:bg-slate-800 dark:data-[selected]:text-white",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof BaseTabs.Panel>) {
  return (
    <BaseTabs.Panel
      data-slot="tabs-content"
      className={cn(
        "outline-none",
        "focus-visible:ring-2 focus-visible:ring-blue-500/50",
        className,
      )}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
};