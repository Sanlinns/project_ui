"use client";
import { useLanguage } from "@/components/providers/language-provider";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clipboard,
  Code2,
  ExternalLink,
  FileCode2,
  Folder,
  FolderOpen,
  Info,
  Laptop,
  List,
  Moon,
  Package,
  Palette,
  Plus,
  RefreshCcw,
  Rocket,
  Settings2,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const installationMyanmar: Record<string, string> = {
  "Docs": "အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Getting Started": "စတင်အသုံးပြုခြင်း",
  "Start installation": "စတင်ထည့်သွင်းရန်",
  "Add components": "Components ထည့်သွင်းရန်",
  "Introduction": "မိတ်ဆက်",
  "Requirements": "လိုအပ်ချက်များ",
  "Create Project": "Project ဖန်တီးခြင်း",
  "Initialize": "ကနဦးပြင်ဆင်ခြင်း",
  "Add Components": "Components ထည့်သွင်းခြင်း",
  "Import Components": "Components ကို Import လုပ်ခြင်း",
  "Dark Mode": "အမှောင်ပုံစံ",
  "Project Structure": "Project ဖိုင်ဖွဲ့စည်းပုံ",
  "Project structure": "Project ဖိုင်ဖွဲ့စည်းပုံ",
  "Overwrite": "ဖိုင်အစားထိုးခြင်း",
  "Available Components": "ရရှိနိုင်သော Components များ",
  "Troubleshooting": "ပြဿနာဖြေရှင်းနည်းများ",
  "Terminal": "Terminal",
  "Previous": "ယခင်စာမျက်နှာ",
  "Next": "နောက်စာမျက်နှာ",
  "Home": "ပင်မစာမျက်နှာ",
  "Components": "UI Components များ",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Copy dev command": "Development command ကူးယူရန်",
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Choose Native Beta or Shadcn Stable once during initialization. The CLI remembers that choice and automatically reuses it for every add command.": "ကနဦးပြင်ဆင်ချိန်တွင် Native Beta သို့မဟုတ် Shadcn Stable ကို တစ်ကြိမ်ရွေးချယ်ပါ။ CLI က ရွေးချယ်မှုကို မှတ်ထားပြီး နောက်ပိုင်း add command များတွင် အလိုအလျောက် ပြန်အသုံးပြုပေးပါမည်။",
  "Binhlaig UI is a collection of reusable React components designed for Next.js and Tailwind CSS projects.": "Binhlaig UI သည် Next.js နှင့် Tailwind CSS project များအတွက် ပြန်လည်အသုံးပြုနိုင်သော React Components များကို စုစည်းထားသည့် စနစ်ဖြစ်ပါသည်။",
  "Components are copied into your project": "Component ဖိုင်များကို မိမိ project ထဲသို့ ကူးထည့်ပေးပါသည်",
  "Binhlaig UI does not install components as a hidden dependency. Component source files are copied into your project, allowing you to customize the code and design.": "Binhlaig UI က Component များ၏ source ဖိုင်များကို မိမိ project ထဲသို့ တိုက်ရိုက်ကူးထည့်ပေးပါသည်။ ထို့ကြောင့် code နှင့် design ကို မိမိလိုအပ်သလို ပြင်ဆင်နိုင်ပါသည်။",
  "Make sure your development environment meets these requirements before installing Binhlaig UI.": "Binhlaig UI မထည့်သွင်းမီ မိမိ development environment တွင် အောက်ပါလိုအပ်ချက်များ ပြည့်မီကြောင်း စစ်ဆေးပါ။",
  "Node.js 20 or newer is required by the CLI.": "CLI ကို အသုံးပြုရန် Node.js 20 သို့မဟုတ် ပိုမိုသစ်သော version လိုအပ်ပါသည်။",
  "A Next.js App Router project with TypeScript is recommended.": "TypeScript ပါဝင်သော Next.js App Router project ကို အသုံးပြုရန် အကြံပြုပါသည်။",
  "Tailwind CSS v4; Native init adds the required theme styles automatically.": "Tailwind CSS v4 ကို အသုံးပြုပါ။ Native init က လိုအပ်သော theme styles များကို အလိုအလျောက် ထည့်ပေးပါသည်။",
  "Create a Next.js Project": "Next.js Project ဖန်တီးခြင်း",
  "Create a new Next.js project or continue with an existing project.": "Next.js project အသစ် ဖန်တီးနိုင်သလို ရှိပြီးသား project ကိုလည်း ဆက်အသုံးပြုနိုင်ပါသည်။",
  "Create the project": "Project ဖန်တီးပါ",
  "Run the following command and select TypeScript, Tailwind CSS, App Router and the": "အောက်ပါ command ကို run ပြီး TypeScript၊ Tailwind CSS၊ App Router တို့နှင့်",
  "import alias.": "import alias ကို ရွေးချယ်ပါ။",
  "Existing Next.js project": "ရှိပြီးသား Next.js project အတွက်",
  "You can skip this section when your Next.js project already has TypeScript and Tailwind CSS configured.": "မိမိ Next.js project တွင် TypeScript နှင့် Tailwind CSS ပြင်ဆင်ထားပြီးပါက ဤအဆင့်ကို ကျော်နိုင်ပါသည်။",
  "Initialize Binhlaig UI": "Binhlaig UI ကို ကနဦးပြင်ဆင်ခြင်း",
  "Choose an installer once. Binhlaig UI saves it in binhlaig.json for future add commands.": "Installer ကို တစ်ကြိမ်ရွေးချယ်ပါ။ Binhlaig UI က ရွေးချယ်မှုကို binhlaig.json တွင် သိမ်းပြီး နောက်ပိုင်း add command များအတွက် အသုံးပြုပါမည်။",
  "Run the init command": "init command ကို run ပါ",
  "Run this command from the root of your Next.js project. The CLI first asks which installer you want to use.": "မိမိ Next.js project ၏ အဓိက folder ထဲမှ ဤ command ကို run ပါ။ CLI က အသုံးပြုမည့် installer ကို အရင်ရွေးခိုင်းပါမည်။",
  "Creates binhlaig.json, utility files, the UI directory, theme CSS, and required shared dependencies. The selected installer is saved automatically.": "binhlaig.json၊ utility ဖိုင်များ၊ UI folder၊ theme CSS နှင့် လိုအပ်သော shared dependencies များကို ပြင်ဆင်ပေးပါသည်။ ရွေးထားသော installer ကိုလည်း အလိုအလျောက် သိမ်းပေးပါသည်။",
  "Uses the Shadcn initialization flow and saves &quot;installer&quot;: &quot;shadcn&quot; in binhlaig.json for later add commands.": "Shadcn ၏ ကနဦးပြင်ဆင်မှုကို အသုံးပြုပြီး နောက်ပိုင်း add command များအတွက် binhlaig.json တွင် \"installer\": \"shadcn\" ကို သိမ်းပေးပါသည်။",
  "Optional: initialize non-interactively": "ရွေးချယ်နိုင်သောအဆင့် — မေးခွန်းများမဖြေဘဲ ကနဦးပြင်ဆင်ခြင်း",
  "Automation and CI workflows can explicitly select Native and skip confirmation prompts.": "Automation နှင့် CI workflow များအတွက် Native ကို တိုက်ရိုက်ရွေးပြီး အတည်ပြုမေးခွန်းများကို ကျော်နိုင်ပါသည်။",
  "Initialization completed": "ကနဦးပြင်ဆင်မှု ပြီးစီးခြင်း",
  "Initialization stores the selected installer in binhlaig.json. Future add commands automatically reuse Native or Shadcn unless --installer is passed as a one-command override.": "ကနဦးပြင်ဆင်ချိန်တွင် ရွေးထားသော installer ကို binhlaig.json တွင် သိမ်းပါသည်။ နောက်ပိုင်း add command များက Native သို့မဟုတ် Shadcn ကို အလိုအလျောက် ပြန်သုံးပါမည်။ Command တစ်ကြိမ်အတွက်သာ ပြောင်းသုံးလိုပါက --installer ကို ထည့်ပေးနိုင်ပါသည်။",
  "Install only the Binhlaig UI components required by your project.": "မိမိ project အတွက် လိုအပ်သော Binhlaig UI Components များကိုသာ ထည့်သွင်းပါ။",
  "Install your first component": "ပထမဆုံး Component ကို ထည့်သွင်းပါ",
  "Add the Button component. The CLI reads the installer saved during initialization, so no installer option is required.": "Button component ကို ထည့်သွင်းပါ။ CLI က ကနဦးပြင်ဆင်ချိန်တွင် သိမ်းထားသော installer ကို ဖတ်ယူသဖြင့် installer option ထပ်ထည့်ရန် မလိုပါ။",
  "Installer selection is remembered": "ရွေးထားသော Installer ကို မှတ်ထားပေးပါသည်",
  "Native and Shadcn projects use the same add command. Pass": "Native နှင့် Shadcn project များတွင် add command အတူတူ အသုံးပြုပါသည်။",
  "only for a one-command override.": "ကို command တစ်ကြိမ်အတွက် installer ပြောင်းလိုသည့်အခါမှသာ ထည့်ပါ။",
  "Install more components": "နောက်ထပ် Components များ ထည့်သွင်းပါ",
  "You can install multiple components with one command. The saved installer is applied to every component.": "Command တစ်ခုတည်းဖြင့် Components များစွာ ထည့်သွင်းနိုင်ပါသည်။ သိမ်းထားသော installer ကို Component တိုင်းအတွက် အသုံးပြုပါမည်။",
  "Import installed components from the components/ui directory.": "ထည့်သွင်းပြီးသော Components များကို components/ui folder မှ import လုပ်ပါ။",
  "Button example": "Button အသုံးပြုပုံ နမူနာ",
  "After installation, import and use the Button component.": "ထည့်သွင်းပြီးနောက် Button component ကို import လုပ်ပြီး အသုံးပြုပါ။",
  "Card example": "Card အသုံးပြုပုံ နမူနာ",
  "Components can be combined to build complete interface sections.": "Components များကို ပေါင်းစပ်၍ UI အပိုင်းများ တည်ဆောက်နိုင်ပါသည်။",
  "Test the application": "Application ကို စမ်းသပ်ပါ",
  "Start the development server and open your app.": "Development server ကို စတင်ပြီး မိမိ application ကို ဖွင့်ပါ။",
  "Binhlaig UI components include dark mode styles using Tailwind CSS dark classes.": "Binhlaig UI Components များတွင် Tailwind CSS ၏ dark classes များကို အသုံးပြုထားသော အမှောင်ပုံစံ styles ပါဝင်ပါသည်။",
  "Install next-themes": "next-themes ထည့်သွင်းပါ",
  "Use next-themes to switch between light, dark and system themes.": "အလင်းပုံစံ၊ အမှောင်ပုံစံနှင့် စက်၏ပုံစံတို့အကြား ပြောင်းနိုင်ရန် next-themes ကို အသုံးပြုပါ။",
  "Create the Theme Provider": "Theme Provider ဖန်တီးပါ",
  "Add the provider to the root layout": "Root layout တွင် Provider ထည့်ပါ",
  "Installed components and configuration files are stored directly inside your project.": "ထည့်သွင်းထားသော Components နှင့် configuration ဖိုင်များကို မိမိ project ထဲတွင် တိုက်ရိုက်သိမ်းထားပါသည်။",
  "Installed component source files.": "ထည့်သွင်းထားသော Component source ဖိုင်များ။",
  "Utility functions such as cn().": "cn() ကဲ့သို့သော အကူအညီပေးသည့် utility functions များ။",
  "Saved installer selection, component paths, aliases, and project configuration.": "ရွေးထားသော installer၊ Component လမ်းကြောင်း၊ aliases နှင့် project configuration တို့ကို သိမ်းထားသောဖိုင်။",
  "Update or Overwrite a Component": "Component ကို Update လုပ်ခြင်း သို့မဟုတ် အစားထိုးခြင်း",
  "Reinstall a component when a newer registry version is available.": "Registry တွင် version အသစ် ရရှိပါက Component ကို ပြန်ထည့်သွင်းနိုင်ပါသည်။",
  "Your existing file will be replaced": "လက်ရှိဖိုင်ကို အစားထိုးပါမည်",
  "The overwrite option replaces the current component file. Save any custom changes before running this command.": "Overwrite option က လက်ရှိ Component ဖိုင်ကို အစားထိုးပါသည်။ ဤ command မလုပ်မီ မိမိပြင်ထားသော code ကို backup ယူထားပါ။",
  "Use the list command to display components currently available in the Binhlaig UI registry.": "Binhlaig UI registry တွင် လက်ရှိရရှိနိုင်သော Components များကို ကြည့်ရန် list command အသုံးပြုပါ။",
  "Common issues that can occur while installing Binhlaig UI.": "Binhlaig UI ထည့်သွင်းစဉ် ကြုံတွေ့နိုင်သော ပြဿနာများနှင့် ဖြေရှင်းနည်းများ။",
  "Command not found": "Command မတွေ့သော ပြဿနာ",
  "Make sure Node.js and npm are installed. Use the complete npx command instead of calling the package directly.": "Node.js နှင့် npm ထည့်သွင်းထားကြောင်း စစ်ပါ။ Package ကို တိုက်ရိုက်ခေါ်မည့်အစား npx ပါသော command အပြည့်အစုံကို အသုံးပြုပါ။",
  "binhlaig.json is missing": "binhlaig.json ဖိုင် မရှိသော ပြဿနာ",
  "Run the init command in the project root before installing a component.": "Component မထည့်သွင်းမီ project ၏ အဓိက folder ထဲတွင် init command ကို run ပါ။",
  "Dependencies are not working": "Dependencies များ အလုပ်မလုပ်သော ပြဿနာ",
  "Remove node_modules and the package lock file, then reinstall dependencies.": "node_modules နှင့် package lock ဖိုင်ကို ဖယ်ရှားပြီး dependencies များကို ပြန်ထည့်သွင်းပါ။",
  "Unknown component error": "Component မသိသော Error",
  "Check that the component exists in the current Binhlaig UI registry.": "ထည့်သွင်းလိုသော Component သည် လက်ရှိ Binhlaig UI registry တွင် ရှိမရှိ စစ်ဆေးပါ။"
};

function useInstallationText() {
  const { language } = useLanguage();
  return (text: string) => language === "my" ? (installationMyanmar[text] ?? text) : text.replaceAll("&quot;", '"');
}

type CodeBlockProps = {
  code: string;
  title?: string;
  language?: string;
};
type RequirementCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};
const createProjectCode = `npx create-next-app@latest my-app
cd my-app`;
const initCode = `npx binhlaig-ui@latest init`;
const nativeInitCode = `npx binhlaig-ui@latest init --installer native`;
const shadcnInitCode = `npx binhlaig-ui@latest init --installer shadcn`;
const initYesCode = `npx binhlaig-ui@latest init --installer native --yes`;
const nativeConfigCode = `{
  "$schema": "https://ui.binhlaig.com/schema.json",
  "installer": "native"
}`;
const shadcnConfigCode = `{
  "$schema": "https://ui.binhlaig.com/schema.json",
  "installer": "shadcn",
  "base": "base"
}`;
const addButtonCode = `npx binhlaig-ui@latest add button`;
const addMultipleCode = `npx binhlaig-ui@latest add button card input badge tabs alert avatar breadcrumb`;
const listCode = `npx binhlaig-ui@latest list`;
const overwriteCode = `npx binhlaig-ui@latest add button --overwrite`;
const importButtonCode = `import { Button } from "@/components/ui/button";
export default function Page() {
  return (
    <main className="p-10">
      <Button>
        Get Started
      </Button>
    </main>
  );
}`;
const importCardCode = `import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Binhlaig UI</CardTitle>
          <CardDescription>
            Reusable components for React and Next.js.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Build modern interfaces quickly.
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}`;
const darkModeInstallCode = `npm install next-themes`;
const themeProviderCode = `"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
type ThemeProviderProps = React.ComponentProps<
  typeof NextThemesProvider
>;
export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}`;
const layoutCode = `import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
export const metadata: Metadata = {
  title: "Binhlaig UI App",
  description: "Built with Binhlaig UI",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`;
const folderStructureCode = `my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── theme-provider.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
├── binhlaig.json
├── package.json
└── tsconfig.json`;
const checkVersionCode = `node --version
npm --version`;
const cleanInstallCode = `rm -rf node_modules package-lock.json
npm install
npm run dev`;
const windowsCleanInstallCode = `Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install
npm run dev`;
const developmentCode = `npm run dev`;
const tableOfContents = [
  ["Introduction", "#introduction"],
  ["Requirements", "#requirements"],
  ["Create Project", "#create-project"],
  ["Initialize", "#initialize"],
  ["Add Components", "#add-components"],
  ["Import Components", "#import-components"],
  ["Dark Mode", "#dark-mode"],
  ["Project Structure", "#project-structure"],
  ["Overwrite", "#overwrite"],
  ["Available Components", "#available-components"],
  ["Troubleshooting", "#troubleshooting"],
];
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
function CodeBlock({
  code,
  title = "Terminal",
  language,
}: CodeBlockProps) {
  const t = useInstallationText();
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          {title === "Terminal" ? (
            <Terminal className="size-3.5 text-slate-500" />
          ) : (
            <FileCode2 className="size-3.5 text-slate-500" />
          )}
          <span className="text-xs font-medium text-slate-500">
            {t(title)}
          </span>
          {language && (
            <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-slate-500">
              {language}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
          aria-label={copied ? t("Copied") : `${t("Copy code")}: ${t(title)}`}
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="min-w-max p-5 font-mono text-[13px] leading-6 text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
function SectionTitle({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description?: string;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
function RequirementCard({
  icon,
  title,
  description,
}: RequirementCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}
function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-sm shadow-blue-600/20">
      {children}
    </div>
  );
}
function InfoBox({
  title,
  children,
  variant = "info",
}: {
  title: string;
  children: React.ReactNode;
  variant?: "info" | "warning" | "success";
}) {
  const styles = {
    info: {
      container:
        "border-blue-200 bg-blue-50/70 dark:border-blue-500/20 dark:bg-blue-500/10",
      icon: "text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-200",
      text: "text-blue-800/80 dark:text-blue-200/70",
    },
    warning: {
      container:
        "border-amber-200 bg-amber-50/70 dark:border-amber-500/20 dark:bg-amber-500/10",
      icon: "text-amber-600 dark:text-amber-400",
      title: "text-amber-900 dark:text-amber-200",
      text: "text-amber-800/80 dark:text-amber-200/70",
    },
    success: {
      container:
        "border-emerald-200 bg-emerald-50/70 dark:border-emerald-500/20 dark:bg-emerald-500/10",
      icon: "text-emerald-600 dark:text-emerald-400",
      title: "text-emerald-900 dark:text-emerald-200",
      text: "text-emerald-800/80 dark:text-emerald-200/70",
    },
  };
  const style = styles[variant];
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-4",
        style.container,
      )}
    >
      <div className={cn("mt-0.5 shrink-0", style.icon)}>
        {variant === "warning" ? (
          <CircleAlert className="size-5" />
        ) : variant === "success" ? (
          <CheckCircle2 className="size-5" />
        ) : (
          <Info className="size-5" />
        )}
      </div>
      <div>
        <p className={cn("text-sm font-semibold", style.title)}>
          {title}
        </p>
        <div className={cn("mt-1 text-sm leading-6", style.text)}>
          {children}
        </div>
      </div>
    </div>
  );
}
export default function InstallationPage() {
  const t = useInstallationText();
  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/docs/installation"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >{t("Docs")}</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-300">{t("Installation")}</span>
          </div>
          {/* Hero */}
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Getting Started")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">{t("Installation")}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Choose Native Beta or Shadcn Stable once during initialization. The CLI remembers that choice and automatically reuses it for every add command.")}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => {
                    document
                      .querySelector("#create-project")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >{t("Start installation")}<ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    document
                      .querySelector("#add-components")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >
                  <Package className="size-4" />{t("Add components")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            {/* Introduction */}
            <section>
              <SectionTitle
                id="introduction"
                title={t("Introduction")}
                description={t("Binhlaig UI is a collection of reusable React components designed for Next.js and Tailwind CSS projects.")}
              />
              <div className="mt-6">
                <InfoBox title={t("Components are copied into your project")}>{t("Binhlaig UI does not install components as a hidden dependency. Component source files are copied into your project, allowing you to customize the code and design.")}</InfoBox>
              </div>
            </section>
            {/* Requirements */}
            <section>
              <SectionTitle
                id="requirements"
                title={t("Requirements")}
                description={t("Make sure your development environment meets these requirements before installing Binhlaig UI.")}
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <RequirementCard
                  icon={<Laptop className="size-5" />}
                  title="Node.js"
                  description={t("Node.js 20 or newer is required by the CLI.")}
                />
                <RequirementCard
                  icon={<Code2 className="size-5" />}
                  title="Next.js"
                  description={t("A Next.js App Router project with TypeScript is recommended.")}
                />
                <RequirementCard
                  icon={<Palette className="size-5" />}
                  title="Tailwind CSS"
                  description={t("Tailwind CSS v4; Native init adds the required theme styles automatically.")}
                />
              </div>
              <div className="mt-6">
                <CodeBlock
                  code={checkVersionCode}
                  title="Terminal"
                />
              </div>
            </section>
            {/* Create Project */}
            <section>
              <SectionTitle
                id="create-project"
                title={t("Create a Next.js Project")}
                description={t("Create a new Next.js project or continue with an existing project.")}
              />
              <div className="mt-6 flex items-start gap-4">
                <StepNumber>1</StepNumber>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{t("Create the project")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Run the following command and select TypeScript, Tailwind CSS, App Router and the")}{" "}
                    <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-slate-900">
                      @/*
                    </code>{" "}{t("import alias.")}</p>
                  <div className="mt-5">
                    <CodeBlock code={createProjectCode} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <InfoBox title={t("Existing Next.js project")}>{t("You can skip this section when your Next.js project already has TypeScript and Tailwind CSS configured.")}</InfoBox>
              </div>
            </section>
            {/* Initialize */}
            <section>
              <SectionTitle
                id="initialize"
                title={t("Initialize Binhlaig UI")}
                description={t("Choose an installer once. Binhlaig UI saves it in binhlaig.json for future add commands.")}
              />
              <div className="mt-6 flex items-start gap-4">
                <StepNumber>2</StepNumber>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{t("Run the init command")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Run this command from the root of your Next.js project. The CLI first asks which installer you want to use.")}</p>
                  <div className="mt-5">
                    <CodeBlock code={initCode} />
                  </div>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-500/20 dark:bg-amber-500/10">
                      <p className="font-semibold text-amber-950 dark:text-amber-200">
                        Binhlaig Native Beta
                      </p>
                      <p className="mt-2 text-sm leading-6 text-amber-800/80 dark:text-amber-200/70">{t("Creates binhlaig.json, utility files, the UI directory, theme CSS, and required shared dependencies. The selected installer is saved automatically.")}</p>
                      <div className="mt-4">
                        <CodeBlock code={nativeInitCode} />
                      </div>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                      <p className="font-semibold text-emerald-950 dark:text-emerald-200">
                        Shadcn CLI Stable
                      </p>
                      <p className="mt-2 text-sm leading-6 text-emerald-800/80 dark:text-emerald-200/70">{t("Uses the Shadcn initialization flow and saves &quot;installer&quot;: &quot;shadcn&quot; in binhlaig.json for later add commands.")}</p>
                      <div className="mt-4">
                        <CodeBlock code={shadcnInitCode} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <CodeBlock
                      code={nativeConfigCode}
                      title="binhlaig.json · Native"
                      language="json"
                    />
                    <CodeBlock
                      code={shadcnConfigCode}
                      title="binhlaig.json · Shadcn"
                      language="json"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <StepNumber>3</StepNumber>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{t("Optional: initialize non-interactively")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Automation and CI workflows can explicitly select Native and skip confirmation prompts.")}</p>
                  <div className="mt-5">
                    <CodeBlock code={initYesCode} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <InfoBox
                  title={t("Initialization completed")}
                  variant="success"
                >{t("Initialization stores the selected installer in binhlaig.json. Future add commands automatically reuse Native or Shadcn unless --installer is passed as a one-command override.")}</InfoBox>
              </div>
            </section>
            {/* Add Components */}
            <section>
              <SectionTitle
                id="add-components"
                title={t("Add Components")}
                description={t("Install only the Binhlaig UI components required by your project.")}
              />
              <div className="mt-6 flex items-start gap-4">
                <StepNumber>4</StepNumber>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{t("Install your first component")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Add the Button component. The CLI reads the installer saved during initialization, so no installer option is required.")}</p>
                  <div className="mt-5">
                    <CodeBlock code={addButtonCode} />
                  </div>
                  <div className="mt-5">
                    <InfoBox title={t("Installer selection is remembered")} variant="success">{t("Native and Shadcn projects use the same add command. Pass")}<code className="mx-1 rounded bg-emerald-100 px-1.5 py-0.5 text-xs dark:bg-emerald-500/20">
                        --installer
                      </code>{t("only for a one-command override.")}</InfoBox>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-slate-950 dark:text-white">{t("Install more components")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("You can install multiple components with one command. The saved installer is applied to every component.")}</p>
                <div className="mt-5">
                  <CodeBlock code={addMultipleCode} />
                </div>
              </div>
            </section>
            {/* Import Components */}
            <section>
              <SectionTitle
                id="import-components"
                title={t("Import Components")}
                description={t("Import installed components from the components/ui directory.")}
              />
              <div className="mt-6">
                <h3 className="font-semibold text-slate-950 dark:text-white">{t("Button example")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("After installation, import and use the Button component.")}</p>
                <div className="mt-5">
                  <CodeBlock
                    code={importButtonCode}
                    title="app/page.tsx"
                    language="tsx"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-slate-950 dark:text-white">{t("Card example")}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Components can be combined to build complete interface sections.")}</p>
                <div className="mt-5">
                  <CodeBlock
                    code={importCardCode}
                    title="app/page.tsx"
                    language="tsx"
                  />
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <p className="font-semibold text-slate-950 dark:text-white">{t("Test the application")}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{t("Start the development server and open your app.")}</p>
                  </div>
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(developmentCode);
                    }}
                  >{t("Copy dev command")}<Rocket className="size-4" />
                  </Button>
                </div>
                <div className="mt-5">
                  <CodeBlock code={developmentCode} />
                </div>
              </div>
            </section>
            {/* Dark Mode */}
            <section>
              <SectionTitle
                id="dark-mode"
                title={t("Dark Mode")}
                description={t("Binhlaig UI components include dark mode styles using Tailwind CSS dark classes.")}
              />
              <div className="mt-6 flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <Moon className="size-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-950 dark:text-white">{t("Install next-themes")}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Use next-themes to switch between light, dark and system themes.")}</p>
                </div>
              </div>
              <div className="mt-5">
                <CodeBlock code={darkModeInstallCode} />
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-slate-950 dark:text-white">{t("Create the Theme Provider")}</h3>
                <div className="mt-5">
                  <CodeBlock
                    code={themeProviderCode}
                    title="components/theme-provider.tsx"
                    language="tsx"
                  />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-semibold text-slate-950 dark:text-white">{t("Add the provider to the root layout")}</h3>
                <div className="mt-5">
                  <CodeBlock
                    code={layoutCode}
                    title="app/layout.tsx"
                    language="tsx"
                  />
                </div>
              </div>
            </section>
            {/* Project Structure */}
            <section>
              <SectionTitle
                id="project-structure"
                title={t("Project Structure")}
                description={t("Installed components and configuration files are stored directly inside your project.")}
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <FolderOpen className="size-5 text-blue-600 dark:text-blue-400" />
                  <p className="mt-3 font-medium text-slate-950 dark:text-white">
                    components/ui
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{t("Installed component source files.")}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <Wrench className="size-5 text-blue-600 dark:text-blue-400" />
                  <p className="mt-3 font-medium text-slate-950 dark:text-white">
                    lib/utils.ts
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{t("Utility functions such as cn().")}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <Settings2 className="size-5 text-blue-600 dark:text-blue-400" />
                  <p className="mt-3 font-medium text-slate-950 dark:text-white">
                    binhlaig.json
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{t("Saved installer selection, component paths, aliases, and project configuration.")}</p>
                </div>
              </div>
              <div className="mt-6">
                <CodeBlock
                  code={folderStructureCode}
                  title="Project structure"
                />
              </div>
            </section>
            {/* Overwrite */}
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite a Component")}
                description={t("Reinstall a component when a newer registry version is available.")}
              />
              <div className="mt-6">
                <InfoBox
                  title={t("Your existing file will be replaced")}
                  variant="warning"
                >{t("The overwrite option replaces the current component file. Save any custom changes before running this command.")}</InfoBox>
              </div>
              <div className="mt-5">
                <CodeBlock code={overwriteCode} />
              </div>
            </section>
            {/* Available Components */}
            <section>
              <SectionTitle
                id="available-components"
                title={t("Available Components")}
                description={t("Use the list command to display components currently available in the Binhlaig UI registry.")}
              />
              <div className="mt-6">
                <CodeBlock code={listCode} />
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { name: "Button", href: "/docs/components/button" },
                  { name: "Card", href: "/docs/components/card" },
                  { name: "Badge", href: "/docs/components/badge" },
                  { name: "Input", href: "/docs/components/input" },
                  { name: "Textarea", href: "/docs/components/textarea" },
                  { name: "Tabs", href: "/docs/components/tabs" },
                  { name: "Popover", href: "/docs/components/popover" },
                  { name: "Form", href: "/docs/components/form" },
                  { name: "Drawer", href: "/docs/components/drawer" },
                  { name: "Dialog", href: "/docs/components/dialog" },
                  { name: "Checkbox", href: "/docs/components/checkbox" },
                  { name: "Alert", href: "/docs/components/alert" },
                  { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
                  { name: "Avatar", href: "/docs/components/avatar" },
                  { name: "Breadcrumb", href: "/docs/components/breadcrumb" },
                ].map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400">
                        <Package className="size-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {component.name}
                      </span>
                    </div>
                    <ChevronRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </section>
            {/* Troubleshooting */}
            <section>
              <SectionTitle
                id="troubleshooting"
                title={t("Troubleshooting")}
                description={t("Common issues that can occur while installing Binhlaig UI.")}
              />
              <div className="mt-6 space-y-4">
                <details className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <CircleAlert className="size-5 text-amber-500" />
                      <span className="font-medium text-slate-950 dark:text-white">{t("Command not found")}</span>
                    </div>
                    <Plus className="size-4 text-slate-500 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-800">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Make sure Node.js and npm are installed. Use the complete npx command instead of calling the package directly.")}</p>
                    <div className="mt-4">
                      <CodeBlock code={initCode} />
                    </div>
                  </div>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <Folder className="size-5 text-blue-500" />
                      <span className="font-medium text-slate-950 dark:text-white">{t("binhlaig.json is missing")}</span>
                    </div>
                    <Plus className="size-4 text-slate-500 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-800">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Run the init command in the project root before installing a component.")}</p>
                    <div className="mt-4">
                      <CodeBlock code={initCode} />
                    </div>
                  </div>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <RefreshCcw className="size-5 text-violet-500" />
                      <span className="font-medium text-slate-950 dark:text-white">{t("Dependencies are not working")}</span>
                    </div>
                    <Plus className="size-4 text-slate-500 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-800">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Remove node_modules and the package lock file, then reinstall dependencies.")}</p>
                    <div className="mt-4">
                      <CodeBlock
                        code={windowsCleanInstallCode}
                        title="Windows PowerShell"
                      />
                    </div>
                    <div className="mt-4">
                      <CodeBlock
                        code={cleanInstallCode}
                        title="macOS / Linux"
                      />
                    </div>
                  </div>
                </details>
                <details className="group rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                    <div className="flex items-center gap-3">
                      <List className="size-5 text-emerald-500" />
                      <span className="font-medium text-slate-950 dark:text-white">{t("Unknown component error")}</span>
                    </div>
                    <Plus className="size-4 text-slate-500 transition-transform group-open:rotate-45" />
                  </summary>
                  <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-800">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Check that the component exists in the current Binhlaig UI registry.")}</p>
                    <div className="mt-4">
                      <CodeBlock code={listCode} />
                    </div>
                  </div>
                </details>
              </div>
            </section>
            {/* Bottom Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Previous")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />{t("Home")}</div>
              </Link>
              <Link
                href="/docs/components"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Next")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">{t("Components")}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>
      {/* Right Table of Contents */}
      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
          <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">{t("On this page")}</p>
          <nav className="space-y-1">
            {tableOfContents.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-slate-500 transition hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 transition hover:text-slate-950 dark:border-slate-800 dark:hover:text-white"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  );
}