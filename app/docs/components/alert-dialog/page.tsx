// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import {
//   AlertTriangle,
//   ArrowLeft,
//   ArrowRight,
//   Check,
//   Clipboard,
//   Code2,
//   ExternalLink,
//   Info,
//   LogOut,
//   Package,
//   Settings,
//   ShieldAlert,
//   Sparkles,
//   Trash2,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// type PreviewTab = "preview" | "code";
// type InstallerTab = "native" | "shadcn";

// type CodePreviewProps = {
//   children: React.ReactNode;
//   code: string;
//   className?: string;
// };

// const initCode = `npx binhlaig-ui@latest init`;

// const nativeInstallCode =
//   `npx binhlaig-ui@latest add alert-dialog --installer native`;

// const shadcnInstallCode =
//   `npx binhlaig-ui@latest add alert-dialog --installer shadcn`;

// const overwriteCode =
//   `npx binhlaig-ui@latest add alert-dialog --installer native --overwrite`;

// const importCode = `import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";`;

// const basicCode = `import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export function AlertDialogDemo() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger
//         render={<Button variant="outline" />}
//       >
//         Open dialog
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>
//             Are you absolutely sure?
//           </AlertDialogTitle>

//           <AlertDialogDescription>
//             This action cannot be undone.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>
//             Cancel
//           </AlertDialogCancel>

//           <AlertDialogAction>
//             Continue
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }`;

// const deleteCode = `import { Trash2 } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export function DeleteAccountDialog() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger
//         render={<Button variant="danger" leftIcon={<Trash2 />} />}
//       >
//         Delete account
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>
//             Delete your account?
//           </AlertDialogTitle>

//           <AlertDialogDescription>
//             Your profile, projects and saved settings
//             will be permanently removed.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>
//             Keep account
//           </AlertDialogCancel>

//           <AlertDialogAction variant="danger">
//             Delete account
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }`;

// const logoutCode = `import { LogOut } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export function LogoutDialog() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger
//         render={<Button variant="outline" leftIcon={<LogOut />} />}
//       >
//         Sign out
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogTitle>
//             Sign out of your account?
//           </AlertDialogTitle>

//           <AlertDialogDescription>
//             You will need to sign in again to access
//             your dashboard.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>
//             Stay signed in
//           </AlertDialogCancel>

//           <AlertDialogAction>
//             Sign out
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }`;

// const warningCode = `import { AlertTriangle } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";

// export function WarningDialog() {
//   return (
//     <AlertDialog>
//       <AlertDialogTrigger
//         render={<Button variant="warning" leftIcon={<AlertTriangle />} />}
//       >
//         Reset settings
//       </AlertDialogTrigger>

//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
//             <AlertTriangle className="size-5" />
//           </div>

//           <AlertDialogTitle>
//             Reset all settings?
//           </AlertDialogTitle>

//           <AlertDialogDescription>
//             Your current preferences will be replaced
//             with the default configuration.
//           </AlertDialogDescription>
//         </AlertDialogHeader>

//         <AlertDialogFooter>
//           <AlertDialogCancel>
//             Cancel
//           </AlertDialogCancel>

//           <AlertDialogAction variant="warning">
//             Reset settings
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }`;

// const controlledCode = `"use client";

// import * as React from "react";

// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// export function ControlledAlertDialog() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <>
//       <Button onClick={() => setOpen(true)}>
//         Open controlled dialog
//       </Button>

//       <AlertDialog
//         open={open}
//         onOpenChange={setOpen}
//       >
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>
//               Save these changes?
//             </AlertDialogTitle>

//             <AlertDialogDescription>
//               Confirm before applying the new configuration.
//             </AlertDialogDescription>
//           </AlertDialogHeader>

//           <AlertDialogFooter>
//             <AlertDialogCancel>
//               Cancel
//             </AlertDialogCancel>

//             <AlertDialogAction
//               onClick={() => setOpen(false)}
//             >
//               Save changes
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }`;

// function cn(...classes: Array<string | false | null | undefined>) {
//   return classes.filter(Boolean).join(" ");
// }

// function CodePreview({
//   children,
//   code,
//   className,
// }: CodePreviewProps) {
//   const [activeTab, setActiveTab] =
//     useState<PreviewTab>("preview");
//   const [copied, setCopied] = useState(false);

//   const copyCode = async () => {
//     try {
//       await navigator.clipboard.writeText(code);
//       setCopied(true);

//       window.setTimeout(() => {
//         setCopied(false);
//       }, 1500);
//     } catch (error) {
//       console.error("Unable to copy code:", error);
//     }
//   };

//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
//       <div className="flex items-center justify-between border-b border-slate-200 px-3 dark:border-slate-800">
//         <div className="flex items-center">
//           <button
//             type="button"
//             onClick={() => setActiveTab("preview")}
//             className={cn(
//               "relative px-3 py-3 text-sm font-medium transition-colors",
//               activeTab === "preview"
//                 ? "text-blue-600 dark:text-blue-400"
//                 : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
//             )}
//           >
//             Preview

//             {activeTab === "preview" && (
//               <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
//             )}
//           </button>

//           <button
//             type="button"
//             onClick={() => setActiveTab("code")}
//             className={cn(
//               "relative px-3 py-3 text-sm font-medium transition-colors",
//               activeTab === "code"
//                 ? "text-blue-600 dark:text-blue-400"
//                 : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
//             )}
//           >
//             Code

//             {activeTab === "code" && (
//               <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
//             )}
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={copyCode}
//           className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
//           aria-label="Copy code"
//         >
//           {copied ? (
//             <Check className="size-4 text-emerald-500" />
//           ) : (
//             <Clipboard className="size-4" />
//           )}
//         </button>
//       </div>

//       {activeTab === "preview" ? (
//         <div
//           className={cn(
//             "flex min-h-[260px] items-center justify-center p-6 sm:p-10",
//             "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
//             className,
//           )}
//         >
//           {children}
//         </div>
//       ) : (
//         <div className="overflow-x-auto bg-slate-950 p-5">
//           <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
//             <code>{code}</code>
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// }

// function SectionTitle({
//   id,
//   title,
//   description,
// }: {
//   id: string;
//   title: string;
//   description?: string;
// }) {
//   return (
//     <div id={id} className="scroll-mt-28">
//       <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
//         {title}
//       </h2>

//       {description && (
//         <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// function TerminalBlock({
//   code,
//   copied,
//   onCopy,
// }: {
//   code: string;
//   copied: boolean;
//   onCopy: () => void;
// }) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
//       <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
//         <span className="text-xs text-slate-500">
//           Terminal
//         </span>

//         <button
//           type="button"
//           onClick={onCopy}
//           className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
//           aria-label="Copy command"
//         >
//           {copied ? (
//             <Check className="size-4 text-emerald-400" />
//           ) : (
//             <Clipboard className="size-4" />
//           )}
//         </button>
//       </div>

//       <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
//         <code>{code}</code>
//       </pre>
//     </div>
//   );
// }

// export default function AlertDialogDocumentationPage() {
//   const [installer, setInstaller] =
//     useState<InstallerTab>("native");
//   const [installCopied, setInstallCopied] =
//     useState(false);
//   const [importCopied, setImportCopied] =
//     useState(false);

//   const installCode =
//     installer === "native"
//       ? nativeInstallCode
//       : shadcnInstallCode;

//   const copyInstallCode = async () => {
//     await navigator.clipboard.writeText(installCode);
//     setInstallCopied(true);
//     window.setTimeout(() => setInstallCopied(false), 1500);
//   };

//   const copyImportCode = async () => {
//     await navigator.clipboard.writeText(importCode);
//     setImportCopied(true);
//     window.setTimeout(() => setImportCopied(false), 1500);
//   };

//   return (
//     <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
//       <main className="min-w-0">
//         <article className="mx-auto max-w-4xl">
//           <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
//             <Link
//               href="/components"
//               className="transition hover:text-slate-950 dark:hover:text-white"
//             >
//               Components
//             </Link>

//             <span>/</span>

//             <span className="text-slate-800 dark:text-slate-300">
//               Alert Dialog
//             </span>
//           </div>

//           <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
//             <div className="absolute -right-20 -top-24 size-64 rounded-full bg-red-500/10 blur-3xl" />
//             <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-amber-400/10 blur-3xl" />

//             <div className="relative">
//               <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
//                 <Sparkles className="size-3.5" />
//                 Binhlaig UI Component
//               </div>

//               <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">
//                 Alert Dialog
//               </h1>

//               <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
//                 Alert Dialog interrupts the user with an important
//                 confirmation before a destructive or irreversible action.
//               </p>

//               <div className="mt-7 flex flex-wrap items-center gap-3">
//                 <Button
//                   rightIcon={<ArrowRight />}
//                   onClick={() =>
//                     document
//                       .querySelector("#usage")
//                       ?.scrollIntoView({ behavior: "smooth" })
//                   }
//                 >
//                   View examples
//                 </Button>

//                 <Button
//                   variant="outline"
//                   leftIcon={<Code2 />}
//                   onClick={() =>
//                     document
//                       .querySelector("#api-reference")
//                       ?.scrollIntoView({ behavior: "smooth" })
//                   }
//                 >
//                   API reference
//                 </Button>
//               </div>
//             </div>
//           </section>

//           <div className="space-y-16">
//             <section>
//               <SectionTitle
//                 id="installation"
//                 title="Installation"
//                 description="Initialize Binhlaig UI, then install Alert Dialog using your preferred installer."
//               />

//               <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
//                 <div className="flex items-start gap-3">
//                   <Info className="mt-0.5 size-5 shrink-0" />

//                   <div>
//                     <p className="font-semibold">
//                       Initialize the project first
//                     </p>

//                     <p className="mt-1 leading-6 text-blue-800/80 dark:text-blue-200/70">
//                       Initialization prepares the shared theme, utility file
//                       and required dependencies.
//                     </p>

//                     <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
//                       <code>{initCode}</code>
//                     </pre>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
//                 <div className="flex border-b border-slate-200 p-1 dark:border-slate-800">
//                   <button
//                     type="button"
//                     onClick={() => setInstaller("native")}
//                     className={cn(
//                       "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
//                       installer === "native"
//                         ? "bg-blue-600 text-white"
//                         : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white",
//                     )}
//                   >
//                     Native Beta
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setInstaller("shadcn")}
//                     className={cn(
//                       "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
//                       installer === "shadcn"
//                         ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
//                         : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white",
//                     )}
//                   >
//                     Shadcn Stable
//                   </button>
//                 </div>

//                 <TerminalBlock
//                   code={installCode}
//                   copied={installCopied}
//                   onCopy={copyInstallCode}
//                 />

//                 <p className="p-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
//                   {installer === "native"
//                     ? "Native Beta fetches Alert Dialog and its registry dependencies directly from the Binhlaig registry."
//                     : "Shadcn Stable uses the Shadcn CLI engine but installs the same Binhlaig Alert Dialog source."}
//                 </p>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="import"
//                 title="Import"
//                 description="Import the Alert Dialog primitives from your UI components directory."
//               />

//               <div className="mt-6">
//                 <TerminalBlock
//                   code={importCode}
//                   copied={importCopied}
//                   onCopy={copyImportCode}
//                 />
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="usage"
//                 title="Usage"
//                 description="Use Alert Dialog for actions that require explicit confirmation."
//               />

//               <div className="mt-6">
//                 <CodePreview code={basicCode}>
//                   <AlertDialog>
//                     <AlertDialogTrigger
//                       render={<Button variant="outline" />}
//                     >
//                       Open dialog
//                     </AlertDialogTrigger>

//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <AlertDialogTitle>
//                           Are you absolutely sure?
//                         </AlertDialogTitle>

//                         <AlertDialogDescription>
//                           This action cannot be undone.
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>

//                       <AlertDialogFooter>
//                         <AlertDialogCancel>
//                           Cancel
//                         </AlertDialogCancel>

//                         <AlertDialogAction>
//                           Continue
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="delete-account"
//                 title="Destructive Action"
//                 description="Use a danger action when deleting data or an account."
//               />

//               <div className="mt-6">
//                 <CodePreview code={deleteCode}>
//                   <AlertDialog>
//                     <AlertDialogTrigger
//                       render={
//                         <Button
//                           variant="danger"
//                           leftIcon={<Trash2 />}
//                         />
//                       }
//                     >
//                       Delete account
//                     </AlertDialogTrigger>

//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
//                           <ShieldAlert className="size-5" />
//                         </div>

//                         <AlertDialogTitle>
//                           Delete your account?
//                         </AlertDialogTitle>

//                         <AlertDialogDescription>
//                           Your profile, projects and saved settings will be
//                           permanently removed.
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>

//                       <AlertDialogFooter>
//                         <AlertDialogCancel>
//                           Keep account
//                         </AlertDialogCancel>

//                         <AlertDialogAction variant="danger">
//                           Delete account
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="sign-out"
//                 title="Sign Out Confirmation"
//                 description="Confirm before ending the current user session."
//               />

//               <div className="mt-6">
//                 <CodePreview code={logoutCode}>
//                   <AlertDialog>
//                     <AlertDialogTrigger
//                       render={
//                         <Button
//                           variant="outline"
//                           leftIcon={<LogOut />}
//                         />
//                       }
//                     >
//                       Sign out
//                     </AlertDialogTrigger>

//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <AlertDialogTitle>
//                           Sign out of your account?
//                         </AlertDialogTitle>

//                         <AlertDialogDescription>
//                           You will need to sign in again to access your
//                           dashboard.
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>

//                       <AlertDialogFooter>
//                         <AlertDialogCancel>
//                           Stay signed in
//                         </AlertDialogCancel>

//                         <AlertDialogAction>
//                           Sign out
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="warning"
//                 title="Warning Dialog"
//                 description="Use warning styling for risky but reversible actions."
//               />

//               <div className="mt-6">
//                 <CodePreview code={warningCode}>
//                   <AlertDialog>
//                     <AlertDialogTrigger
//                       render={
//                         <Button
//                           variant="warning"
//                           leftIcon={<AlertTriangle />}
//                         />
//                       }
//                     >
//                       Reset settings
//                     </AlertDialogTrigger>

//                     <AlertDialogContent>
//                       <AlertDialogHeader>
//                         <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
//                           <AlertTriangle className="size-5" />
//                         </div>

//                         <AlertDialogTitle>
//                           Reset all settings?
//                         </AlertDialogTitle>

//                         <AlertDialogDescription>
//                           Your current preferences will be replaced with the
//                           default configuration.
//                         </AlertDialogDescription>
//                       </AlertDialogHeader>

//                       <AlertDialogFooter>
//                         <AlertDialogCancel>
//                           Cancel
//                         </AlertDialogCancel>

//                         <AlertDialogAction variant="warning">
//                           Reset settings
//                         </AlertDialogAction>
//                       </AlertDialogFooter>
//                     </AlertDialogContent>
//                   </AlertDialog>
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="controlled"
//                 title="Controlled State"
//                 description="Control the dialog state from your own React state."
//               />

//               <div className="mt-6">
//                 <CodePreview code={controlledCode}>
//                   <ControlledPreview />
//                 </CodePreview>
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="overwrite"
//                 title="Update or Overwrite"
//                 description="Replace an older Alert Dialog source with the latest registry version."
//               />

//               <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
//                 Save custom changes before overwriting the installed file.
//               </div>

//               <div className="mt-5">
//                 <TerminalBlock
//                   code={overwriteCode}
//                   copied={false}
//                   onCopy={() =>
//                     navigator.clipboard.writeText(overwriteCode)
//                   }
//                 />
//               </div>
//             </section>

//             <section>
//               <SectionTitle
//                 id="api-reference"
//                 title="API Reference"
//                 description="Components available in the Binhlaig UI Alert Dialog."
//               />

//               <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
//                 <div className="overflow-x-auto">
//                   <table className="w-full min-w-[760px] text-left text-sm">
//                     <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
//                       <tr>
//                         <th className="px-5 py-4 font-medium">Component</th>
//                         <th className="px-5 py-4 font-medium">Purpose</th>
//                         <th className="px-5 py-4 font-medium">Description</th>
//                       </tr>
//                     </thead>

//                     <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
//                       <ApiRow
//                         name="AlertDialog"
//                         purpose="Root"
//                         description="Controls open state and coordinates all dialog parts."
//                       />
//                       <ApiRow
//                         name="AlertDialogTrigger"
//                         purpose="Trigger"
//                         description="Opens the alert dialog."
//                       />
//                       <ApiRow
//                         name="AlertDialogContent"
//                         purpose="Content"
//                         description="Renders the modal overlay and dialog panel."
//                       />
//                       <ApiRow
//                         name="AlertDialogHeader"
//                         purpose="Layout"
//                         description="Groups the title and description."
//                       />
//                       <ApiRow
//                         name="AlertDialogTitle"
//                         purpose="Heading"
//                         description="Provides the accessible dialog title."
//                       />
//                       <ApiRow
//                         name="AlertDialogDescription"
//                         purpose="Description"
//                         description="Explains the action and its consequences."
//                       />
//                       <ApiRow
//                         name="AlertDialogFooter"
//                         purpose="Layout"
//                         description="Groups confirmation and cancellation actions."
//                       />
//                       <ApiRow
//                         name="AlertDialogCancel"
//                         purpose="Cancel"
//                         description="Closes the dialog without confirming."
//                       />
//                       <ApiRow
//                         name="AlertDialogAction"
//                         purpose="Confirm"
//                         description="Confirms the requested action."
//                       />
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </section>

//             <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
//               <Link
//                 href="/components/tabs"
//                 className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
//               >
//                 <div className="text-xs text-slate-500">
//                   Previous component
//                 </div>

//                 <div className="mt-2 flex items-center gap-2 font-semibold">
//                   <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
//                   Tabs
//                 </div>
//               </Link>

//               <Link
//                 href="/components"
//                 className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
//               >
//                 <div className="text-xs text-slate-500">
//                   Next
//                 </div>

//                 <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
//                   All components
//                   <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </article>
//       </main>

//       <aside className="hidden xl:block">
//         <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
//           <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">
//             On this page
//           </p>

//           <nav className="space-y-1">
//             {[
//               ["Installation", "#installation"],
//               ["Import", "#import"],
//               ["Usage", "#usage"],
//               ["Destructive Action", "#delete-account"],
//               ["Sign Out", "#sign-out"],
//               ["Warning Dialog", "#warning"],
//               ["Controlled State", "#controlled"],
//               ["Update or Overwrite", "#overwrite"],
//               ["API Reference", "#api-reference"],
//             ].map(([label, href]) => (
//               <a
//                 key={href}
//                 href={href}
//                 className="block rounded-md py-1.5 text-[13px] text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-400"
//               >
//                 {label}
//               </a>
//             ))}
//           </nav>

//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noreferrer"
//             className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 transition hover:text-slate-950 dark:border-slate-800 dark:hover:text-white"
//           >
//             Edit this page
//             <ExternalLink className="size-3.5" />
//           </a>
//         </div>
//       </aside>
//     </div>
//   );
// }

// function ControlledPreview() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <Button
//         leftIcon={<Settings />}
//         onClick={() => setOpen(true)}
//       >
//         Open controlled dialog
//       </Button>

//       <AlertDialog
//         open={open}
//         onOpenChange={setOpen}
//       >
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>
//               Save these changes?
//             </AlertDialogTitle>

//             <AlertDialogDescription>
//               Confirm before applying the new configuration.
//             </AlertDialogDescription>
//           </AlertDialogHeader>

//           <AlertDialogFooter>
//             <AlertDialogCancel>
//               Cancel
//             </AlertDialogCancel>

//             <AlertDialogAction
//               onClick={() => setOpen(false)}
//             >
//               Save changes
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }

// function ApiRow({
//   name,
//   purpose,
//   description,
// }: {
//   name: string;
//   purpose: string;
//   description: string;
// }) {
//   return (
//     <tr className="bg-white dark:bg-slate-950">
//       <td className="px-5 py-4 align-top">
//         <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
//           {name}
//         </code>
//       </td>

//       <td className="px-5 py-4 align-top">
//         <code className="text-xs text-purple-600 dark:text-purple-400">
//           {purpose}
//         </code>
//       </td>

//       <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
//         {description}
//       </td>
//     </tr>
//   );
// }





import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page