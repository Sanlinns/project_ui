"use client";
import React, { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Info,
  LogOut,
  Package,
  Settings,
  ShieldAlert,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
const alertDialogMyanmar: Record<string, string> = {
  "Preview": "နမူနာ",
  "Code": "Code",
  "Copy code": "Code ကူးယူရန်",
  "Copy command": "Command ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "Alert Dialog interrupts the user with an important confirmation before a destructive or irreversible action.": "Alert Dialog သည် အချက်အလက်ဖျက်ခြင်း သို့မဟုတ် ပြန်ပြင်မရသော လုပ်ဆောင်ချက် မလုပ်မီ အသုံးပြုသူ၏ အတည်ပြုချက်ကို တောင်းခံပေးပါသည်။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI, then install Alert Dialog using your preferred installer.": "Binhlaig UI ကို ကနဦးပြင်ဆင်ပြီး မိမိရွေးထားသော installer ဖြင့် Alert Dialog ကို ထည့်သွင်းပါ။",
  "Initialize the project first": "Project ကို အရင် ကနဦးပြင်ဆင်ပါ",
  "Initialization prepares the shared theme, utility file and required dependencies.": "ကနဦးပြင်ဆင်မှုက shared theme၊ utility ဖိုင်နှင့် လိုအပ်သော dependencies များကို ပြင်ဆင်ပေးပါသည်။",
  "Import": "Import လုပ်ခြင်း",
  "Import the Alert Dialog primitives from your UI components directory.": "Alert Dialog ၏ အခြေခံ Components များကို မိမိ UI components folder မှ import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Use Alert Dialog for actions that require explicit confirmation.": "အသုံးပြုသူ၏ အတည်ပြုချက် လိုအပ်သော လုပ်ဆောင်ချက်များအတွက် Alert Dialog ကို အသုံးပြုပါ။",
  "Open dialog": "Dialog ဖွင့်ရန်",
  "Are you absolutely sure?": "သေချာပါသလား။",
  "This action cannot be undone.": "ဤလုပ်ဆောင်ချက်ကို ပြန်ပြင်၍ မရနိုင်ပါ။",
  "Cancel": "မလုပ်တော့ပါ",
  "Continue": "ဆက်လုပ်ရန်",
  "Destructive Action": "အချက်အလက် ဖျက်ခြင်း",
  "Use a danger action when deleting data or an account.": "အချက်အလက် သို့မဟုတ် အကောင့် ဖျက်သည့်အခါ danger ပုံစံကို အသုံးပြုပါ။",
  "Delete account": "အကောင့်ဖျက်ရန်",
  "Delete your account?": "အကောင့်ကို ဖျက်မည်လား။",
  "Your profile, projects and saved settings will be permanently removed.": "မိမိ profile၊ project များနှင့် သိမ်းထားသော settings များကို အပြီးတိုင် ဖျက်ပါမည်။",
  "Keep account": "အကောင့် ဆက်ထားမည်",
  "Sign Out Confirmation": "ထွက်ရန် အတည်ပြုခြင်း",
  "Confirm before ending the current user session.": "လက်ရှိ user session မပိတ်မီ အတည်ပြုချက် တောင်းခံပါ။",
  "Sign out": "အကောင့်မှ ထွက်ရန်",
  "Sign out of your account?": "အကောင့်မှ ထွက်မည်လား။",
  "You will need to sign in again to access your dashboard.": "Dashboard ကို ပြန်အသုံးပြုရန် အကောင့်ပြန်ဝင်ရပါမည်။",
  "Stay signed in": "ဆက်ဝင်ထားမည်",
  "Warning Dialog": "သတိပေး Dialog",
  "Use warning styling for risky but reversible actions.": "ပြန်ပြင်နိုင်သော်လည်း သတိထားရမည့် လုပ်ဆောင်ချက်များအတွက် warning ပုံစံကို အသုံးပြုပါ။",
  "Reset settings": "Settings ပြန်သတ်မှတ်ရန်",
  "Reset all settings?": "Settings အားလုံးကို ပြန်သတ်မှတ်မည်လား။",
  "Your current preferences will be replaced with the default configuration.": "လက်ရှိရွေးထားသော settings များကို မူလ configuration ဖြင့် အစားထိုးပါမည်။",
  "Controlled State": "State ကို ကိုယ်တိုင်ထိန်းခြင်း",
  "Control the dialog state from your own React state.": "မိမိ React state ဖြင့် dialog အဖွင့်အပိတ်ကို ထိန်းချုပ်ပါ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Alert Dialog source with the latest registry version.": "Alert Dialog source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Save custom changes before overwriting the installed file.": "ထည့်သွင်းထားသောဖိုင်ကို အစားမထိုးမီ မိမိပြင်ထားသော code ကို သိမ်းထားပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Components available in the Binhlaig UI Alert Dialog.": "Binhlaig UI Alert Dialog တွင် ပါဝင်သော Components များ။",
  "Component": "Component",
  "Purpose": "ရည်ရွယ်ချက်",
  "Description": "ရှင်းလင်းချက်",
  "Controls open state and coordinates all dialog parts.": "အဖွင့်အပိတ် state ကို ထိန်းပြီး dialog အစိတ်အပိုင်းအားလုံးကို ချိတ်ဆက်ပေးပါသည်။",
  "Opens the alert dialog.": "Alert dialog ကို ဖွင့်ပေးပါသည်။",
  "Renders the modal overlay and dialog panel.": "Modal overlay နှင့် dialog panel ကို ပြသပေးပါသည်။",
  "Groups the title and description.": "Title နှင့် description ကို စုစည်းပေးပါသည်။",
  "Provides the accessible dialog title.": "အသုံးပြုသူနှင့် screen reader အတွက် dialog title ကို သတ်မှတ်ပေးပါသည်။",
  "Explains the action and its consequences.": "လုပ်ဆောင်ချက်နှင့် ဖြစ်လာမည့်အကျိုးဆက်ကို ရှင်းပြပါသည်။",
  "Groups confirmation and cancellation actions.": "အတည်ပြုခြင်းနှင့် ပယ်ဖျက်ခြင်းခလုတ်များကို စုစည်းပေးပါသည်။",
  "Closes the dialog without confirming.": "အတည်မပြုဘဲ dialog ကို ပိတ်ပေးပါသည်။",
  "Confirms the requested action.": "တောင်းဆိုထားသော လုပ်ဆောင်ချက်ကို အတည်ပြုပေးပါသည်။",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Open controlled dialog": "State ဖြင့် ထိန်းထားသော Dialog ဖွင့်ရန်",
  "Save these changes?": "ဤပြင်ဆင်မှုများကို သိမ်းမည်လား။",
  "Confirm before applying the new configuration.": "Configuration အသစ် မသုံးမီ အတည်ပြုပါ။",
  "Save changes": "ပြင်ဆင်မှုများ သိမ်းရန်",
  "Root": "အဓိကအစိတ်အပိုင်း",
  "Trigger": "ဖွင့်ပေးသောခလုတ်",
  "Content": "အကြောင်းအရာ",
  "Layout": "ဖွဲ့စည်းပုံ",
  "Heading": "ခေါင်းစဉ်",
  "Confirm": "အတည်ပြုခြင်း"
};

function useAlertDialogText() {
  const { language } = useLanguage();
  return (text: string) => language === "my" ? (alertDialogMyanmar[text] ?? text) : text;
}

type PreviewTab = "preview" | "code";
type InstallerTab = "native" | "shadcn";
type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};
const initCode = `npx binhlaig-ui@latest init`;
const nativeInstallCode =
  `npx binhlaig-ui@latest add alert-dialog`;
const shadcnInstallCode =
  `npx binhlaig-ui@latest add alert-dialog`;
const overwriteCode =
  `npx binhlaig-ui@latest add alert-dialog --overwrite`;
const importCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";`;
const basicCode = `import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline" />}
      >
        Open dialog
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;
const deleteCode = `import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export function DeleteAccountDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="danger" leftIcon={<Trash2 />} />}
      >
        Delete account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete your account?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your profile, projects and saved settings
            will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Keep account
          </AlertDialogCancel>
          <AlertDialogAction variant="danger">
            Delete account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;
const logoutCode = `import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export function LogoutDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline" leftIcon={<LogOut />} />}
      >
        Sign out
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Sign out of your account?
          </AlertDialogTitle>
          <AlertDialogDescription>
            You will need to sign in again to access
            your dashboard.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Stay signed in
          </AlertDialogCancel>
          <AlertDialogAction>
            Sign out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;
const warningCode = `import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export function WarningDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="warning" leftIcon={<AlertTriangle />} />}
      >
        Reset settings
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
            <AlertTriangle className="size-5" />
          </div>
          <AlertDialogTitle>
            Reset all settings?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your current preferences will be replaced
            with the default configuration.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction variant="warning">
            Reset settings
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`;
const controlledCode = `"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
export function ControlledAlertDialog() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open controlled dialog
      </Button>
      <AlertDialog
        open={open}
        onOpenChange={setOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Save these changes?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Confirm before applying the new configuration.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setOpen(false)}
            >
              Save changes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}`;
const myanmarExampleCode: Record<string, string> = {
  [basicCode]: "import { Button } from \"@/components/ui/button\";\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nexport function AlertDialogDemo() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger\n        render={<Button variant=\"outline\" />}\n      >\n        Dialog ဖွင့်ရန်\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>\n            သေချာပါသလား။\n          </AlertDialogTitle>\n          <AlertDialogDescription>\n            ဤလုပ်ဆောင်ချက်ကို ပြန်ပြင်၍ မရနိုင်ပါ။\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>\n            မလုပ်တော့ပါ\n          </AlertDialogCancel>\n          <AlertDialogAction>\n            ဆက်လုပ်ရန်\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}",
  [deleteCode]: "import { Trash2 } from \"lucide-react\";\nimport { Button } from \"@/components/ui/button\";\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nexport function DeleteAccountDialog() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger\n        render={<Button variant=\"danger\" leftIcon={<Trash2 />} />}\n      >\n        အကောင့်ဖျက်ရန်\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>\n            အကောင့်ကို ဖျက်မည်လား။\n          </AlertDialogTitle>\n          <AlertDialogDescription>\n            မိမိ profile၊ project များနှင့် သိမ်းထားသော settings များကို အပြီးတိုင် ဖျက်ပါမည်။\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>\n            အကောင့် ဆက်ထားမည်\n          </AlertDialogCancel>\n          <AlertDialogAction variant=\"danger\">\n            အကောင့်ဖျက်ရန်\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}",
  [logoutCode]: "import { LogOut } from \"lucide-react\";\nimport { Button } from \"@/components/ui/button\";\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nexport function LogoutDialog() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger\n        render={<Button variant=\"outline\" leftIcon={<LogOut />} />}\n      >\n        အကောင့်မှ ထွက်ရန်\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>\n            အကောင့်မှ ထွက်မည်လား။\n          </AlertDialogTitle>\n          <AlertDialogDescription>\n            Dashboard ကို ပြန်အသုံးပြုရန် အကောင့်ပြန်ဝင်ရပါမည်။\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>\n            ဆက်ဝင်ထားမည်\n          </AlertDialogCancel>\n          <AlertDialogAction>\n            အကောင့်မှ ထွက်ရန်\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}",
  [warningCode]: "import { AlertTriangle } from \"lucide-react\";\nimport { Button } from \"@/components/ui/button\";\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n  AlertDialogTrigger,\n} from \"@/components/ui/alert-dialog\";\nexport function WarningDialog() {\n  return (\n    <AlertDialog>\n      <AlertDialogTrigger\n        render={<Button variant=\"warning\" leftIcon={<AlertTriangle />} />}\n      >\n        Settings ပြန်သတ်မှတ်ရန်\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <div className=\"mb-2 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400\">\n            <AlertTriangle className=\"size-5\" />\n          </div>\n          <AlertDialogTitle>\n            Settings အားလုံးကို ပြန်သတ်မှတ်မည်လား။\n          </AlertDialogTitle>\n          <AlertDialogDescription>\n            လက်ရှိရွေးထားသော settings များကို မူလ configuration ဖြင့် အစားထိုးပါမည်။\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>\n            မလုပ်တော့ပါ\n          </AlertDialogCancel>\n          <AlertDialogAction variant=\"warning\">\n            Settings ပြန်သတ်မှတ်ရန်\n          </AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>\n  );\n}",
  [controlledCode]: "\"use client\";\nimport * as React from \"react\";\nimport { Button } from \"@/components/ui/button\";\nimport {\n  AlertDialog,\n  AlertDialogAction,\n  AlertDialogCancel,\n  AlertDialogContent,\n  AlertDialogDescription,\n  AlertDialogFooter,\n  AlertDialogHeader,\n  AlertDialogTitle,\n} from \"@/components/ui/alert-dialog\";\nexport function ControlledAlertDialog() {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>\n        State ဖြင့် ထိန်းထားသော Dialog ဖွင့်ရန်\n      </Button>\n      <AlertDialog\n        open={open}\n        onOpenChange={setOpen}\n      >\n        <AlertDialogContent>\n          <AlertDialogHeader>\n            <AlertDialogTitle>\n              ဤပြင်ဆင်မှုများကို သိမ်းမည်လား။\n            </AlertDialogTitle>\n            <AlertDialogDescription>\n              Configuration အသစ် မသုံးမီ အတည်ပြုပါ။\n            </AlertDialogDescription>\n          </AlertDialogHeader>\n          <AlertDialogFooter>\n            <AlertDialogCancel>\n              မလုပ်တော့ပါ\n            </AlertDialogCancel>\n            <AlertDialogAction\n              onClick={() => setOpen(false)}\n            >\n              ပြင်ဆင်မှုများ သိမ်းရန်\n            </AlertDialogAction>\n          </AlertDialogFooter>\n        </AlertDialogContent>\n      </AlertDialog>\n    </>\n  );\n}"
};

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const t = useAlertDialogText();
  const { language } = useLanguage();
  const exampleCode = language === "my" ? (myanmarExampleCode[code] ?? code) : code;
  const [activeTab, setActiveTab] =
    useState<PreviewTab>("preview");
  const [copied, setCopied] = useState(false);
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(exampleCode);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy code:", error);
    }
  };
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 dark:border-slate-800">
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={cn(
              "relative px-3 py-3 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
            )}
          >{t("Preview")}{activeTab === "preview" && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={cn(
              "relative px-3 py-3 text-sm font-medium transition-colors",
              activeTab === "code"
                ? "text-blue-600 dark:text-blue-400"
                : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
            )}
          >{t("Code")}{activeTab === "code" && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white"
          aria-label={copied ? t("Copied") : t("Copy code")}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      {activeTab === "preview" ? (
        <div
          className={cn(
            "flex min-h-[260px] items-center justify-center p-6 sm:p-10",
            "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <div className="overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{exampleCode}</code>
          </pre>
        </div>
      )}
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
function TerminalBlock({
  code,
  copied,
  onCopy,
}: {
  code: string;
  copied: boolean;
  onCopy: () => void;
}) {
  const t = useAlertDialogText();
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
        <span className="text-xs text-slate-500">
          Terminal
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
          aria-label={copied ? t("Copied") : t("Copy command")}
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
export default function AlertDialogDocumentationPage() {
  const t = useAlertDialogText();
  const [installer, setInstaller] =
    useState<InstallerTab>("native");
  const [installCopied, setInstallCopied] =
    useState(false);
  const [importCopied, setImportCopied] =
    useState(false);
  const installCode =
    installer === "native"
      ? nativeInstallCode
      : shadcnInstallCode;
  const copyInstallCode = async () => {
    await navigator.clipboard.writeText(installCode);
    setInstallCopied(true);
    window.setTimeout(() => setInstallCopied(false), 1500);
  };
  const copyImportCode = async () => {
    await navigator.clipboard.writeText(importCode);
    setImportCopied(true);
    window.setTimeout(() => setImportCopied(false), 1500);
  };
  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/docs/components"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-300">
              Alert Dialog
            </span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-red-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-amber-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">
                Alert Dialog
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Alert Dialog interrupts the user with an important confirmation before a destructive or irreversible action.")}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  rightIcon={<ArrowRight />}
                  onClick={() =>
                    document
                      .querySelector("#usage")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >{t("View examples")}</Button>
                <Button
                  variant="outline"
                  leftIcon={<Code2 />}
                  onClick={() =>
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            <section>
              <SectionTitle
                id="installation"
                title={t("Installation")}
                description={t("Initialize Binhlaig UI, then install Alert Dialog using your preferred installer.")}
              />
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-4 text-sm text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-200">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <p className="font-semibold">{t("Initialize the project first")}</p>
                    <p className="mt-1 leading-6 text-blue-800/80 dark:text-blue-200/70">{t("Initialization prepares the shared theme, utility file and required dependencies.")}</p>
                    <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm text-slate-300">
                      <code>{initCode}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
                <div className="flex border-b border-slate-200 p-1 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setInstaller("native")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "native"
                        ? "bg-blue-600 text-white"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white",
                    )}
                  >
                    Native Beta
                  </button>
                  <button
                    type="button"
                    onClick={() => setInstaller("shadcn")}
                    className={cn(
                      "flex-1 rounded-xl px-4 py-2.5 text-sm font-medium transition",
                      installer === "shadcn"
                        ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white",
                    )}
                  >
                    Shadcn Stable
                  </button>
                </div>
                <TerminalBlock
                  code={installCode}
                  copied={installCopied}
                  onCopy={copyInstallCode}
                />
                <p className="p-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {installer === "native"
                    ? "Native Beta fetches Alert Dialog and its registry dependencies directly from the Binhlaig registry."
                    : "Shadcn Stable uses the Shadcn CLI engine but installs the same Binhlaig Alert Dialog source."}
                </p>
              </div>
            </section>
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the Alert Dialog primitives from your UI components directory.")}
              />
              <div className="mt-6">
                <TerminalBlock
                  code={importCode}
                  copied={importCopied}
                  onCopy={copyImportCode}
                />
              </div>
            </section>
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Use Alert Dialog for actions that require explicit confirmation.")}
              />
              <div className="mt-6">
                <CodePreview code={basicCode}>
                  <AlertDialog>
                    <AlertDialogTrigger
                      render={<Button variant="outline" />}
                    >{t("Open dialog")}</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{t("Are you absolutely sure?")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("This action cannot be undone.")}</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
                        <AlertDialogAction>{t("Continue")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="delete-account"
                title={t("Destructive Action")}
                description={t("Use a danger action when deleting data or an account.")}
              />
              <div className="mt-6">
                <CodePreview code={deleteCode}>
                  <AlertDialog>
                    <AlertDialogTrigger
                      render={
                        <Button
                          variant="danger"
                          leftIcon={<Trash2 />}
                        />
                      }
                    >{t("Delete account")}</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                          <ShieldAlert className="size-5" />
                        </div>
                        <AlertDialogTitle>{t("Delete your account?")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("Your profile, projects and saved settings will be permanently removed.")}</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>{t("Keep account")}</AlertDialogCancel>
                        <AlertDialogAction variant="danger">{t("Delete account")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="sign-out"
                title={t("Sign Out Confirmation")}
                description={t("Confirm before ending the current user session.")}
              />
              <div className="mt-6">
                <CodePreview code={logoutCode}>
                  <AlertDialog>
                    <AlertDialogTrigger
                      render={
                        <Button
                          variant="outline"
                          leftIcon={<LogOut />}
                        />
                      }
                    >{t("Sign out")}</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{t("Sign out of your account?")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("You will need to sign in again to access your dashboard.")}</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>{t("Stay signed in")}</AlertDialogCancel>
                        <AlertDialogAction>{t("Sign out")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="warning"
                title={t("Warning Dialog")}
                description={t("Use warning styling for risky but reversible actions.")}
              />
              <div className="mt-6">
                <CodePreview code={warningCode}>
                  <AlertDialog>
                    <AlertDialogTrigger
                      render={
                        <Button
                          variant="warning"
                          leftIcon={<AlertTriangle />}
                        />
                      }
                    >{t("Reset settings")}</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                          <AlertTriangle className="size-5" />
                        </div>
                        <AlertDialogTitle>{t("Reset all settings?")}</AlertDialogTitle>
                        <AlertDialogDescription>{t("Your current preferences will be replaced with the default configuration.")}</AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
                        <AlertDialogAction variant="warning">{t("Reset settings")}</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled State")}
                description={t("Control the dialog state from your own React state.")}
              />
              <div className="mt-6">
                <CodePreview code={controlledCode}>
                  <ControlledPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="overwrite"
                title={t("Update or Overwrite")}
                description={t("Replace an older Alert Dialog source with the latest registry version.")}
              />
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">{t("Save custom changes before overwriting the installed file.")}</div>
              <div className="mt-5">
                <TerminalBlock
                  code={overwriteCode}
                  copied={false}
                  onCopy={() =>
                    navigator.clipboard.writeText(overwriteCode)
                  }
                />
              </div>
            </section>
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Components available in the Binhlaig UI Alert Dialog.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">{t("Component")}</th>
                        <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="AlertDialog"
                        purpose={t("Root")}
                        description={t("Controls open state and coordinates all dialog parts.")}
                      />
                      <ApiRow
                        name="AlertDialogTrigger"
                        purpose={t("Trigger")}
                        description={t("Opens the alert dialog.")}
                      />
                      <ApiRow
                        name="AlertDialogContent"
                        purpose={t("Content")}
                        description={t("Renders the modal overlay and dialog panel.")}
                      />
                      <ApiRow
                        name="AlertDialogHeader"
                        purpose={t("Layout")}
                        description={t("Groups the title and description.")}
                      />
                      <ApiRow
                        name="AlertDialogTitle"
                        purpose={t("Heading")}
                        description={t("Provides the accessible dialog title.")}
                      />
                      <ApiRow
                        name="AlertDialogDescription"
                        purpose={t("Description")}
                        description={t("Explains the action and its consequences.")}
                      />
                      <ApiRow
                        name="AlertDialogFooter"
                        purpose={t("Layout")}
                        description={t("Groups confirmation and cancellation actions.")}
                      />
                      <ApiRow
                        name="AlertDialogCancel"
                        purpose={t("Cancel")}
                        description={t("Closes the dialog without confirming.")}
                      />
                      <ApiRow
                        name="AlertDialogAction"
                        purpose={t("Confirm")}
                        description={t("Confirms the requested action.")}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/docs/components/tabs"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Tabs
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Next")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">{t("All components")}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>
      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-slate-200 pl-5 dark:border-slate-800">
          <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">{t("On this page")}</p>
          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Destructive Action", "#delete-account"],
              ["Sign Out", "#sign-out"],
              ["Warning Dialog", "#warning"],
              ["Controlled State", "#controlled"],
              ["Update or Overwrite", "#overwrite"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
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
function ControlledPreview() {
  const t = useAlertDialogText();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        leftIcon={<Settings />}
        onClick={() => setOpen(true)}
      >{t("Open controlled dialog")}</Button>
      <AlertDialog
        open={open}
        onOpenChange={setOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t("Save these changes?")}</AlertDialogTitle>
            <AlertDialogDescription>{t("Confirm before applying the new configuration.")}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t("Cancel")}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setOpen(false)}
            >{t("Save changes")}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
function ApiRow({
  name,
  purpose,
  description,
}: {
  name: string;
  purpose: string;
  description: string;
}) {
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>
      <td className="px-5 py-4 align-top">
        <code className="text-xs text-purple-600 dark:text-purple-400">
          {purpose}
        </code>
      </td>
      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </td>
    </tr>
  );
}