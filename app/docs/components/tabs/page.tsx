"use client";
import { ComponentInstallation } from "@/components/docs/component-installation";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  Clipboard,
  Code2,
  CreditCard,
  ExternalLink,
  FileText,
  LayoutDashboard,
  LockKeyhole,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
type PreviewTab = "preview" | "code";
type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const importCode = `import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";`;

const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Multiple Tabs", "#multiple"],
  ["Disabled", "#disabled"],
  ["With Icons", "#icons"],
  ["Vertical Tabs", "#vertical"],
  ["Settings Tabs", "#settings"],
  ["Dashboard Tabs", "#dashboard"],
  ["Controlled Tabs", "#controlled"],
  ["Custom Style", "#custom"],
  ["API Reference", "#api-reference"],
];
const tabsMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy failed": "ကူးယူ၍ မရပါ",
  "Components": "Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A gesture-enabled panel that slides from an edge of the screen for menus, filters, forms and details.": "မျက်နှာပြင်အစွန်းမှ ဆွဲဖွင့်နိုင်သော panel ဖြစ်ပြီး မီနူး၊ ရှာဖွေစစ်ထုတ်မှု၊ ဖောင်နှင့် အသေးစိတ်အချက်အလက်များ ပြသရန် အသုံးပြုနိုင်ပါတယ်။",
  "View examples": "နမူနာများကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းခြင်း",
  "Initialize Binhlaig UI and install Drawer with your preferred installer.": "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Drawer ကို ထည့်သွင်းပါ။",
  "Initialize first": "ဦးစွာ စတင်ပြင်ဆင်ပါ",
  "Terminal": "Terminal",
  "Copy command": "Command ကူးယူရန်",
  "Import": "Import လုပ်ခြင်း",
  "Import Drawer primitives from your UI directory.": "မိမိ UI directory မှ Drawer components များကို import လုပ်ပါ။",
  "Bottom Drawer": "အောက်ခြေမှ ဖွင့်သော Drawer",
  "The default drawer opens from the bottom and supports swipe-to-dismiss.": "ပုံမှန် Drawer သည် အောက်ခြေမှ ဖွင့်ပြီး ပွတ်ဆွဲ၍ ပိတ်နိုင်ပါတယ်။",
  "Open drawer": "Drawer ဖွင့်ရန်",
  "Notifications": "အသိပေးချက်များ",
  "You are all caught up.": "အသိပေးချက်အားလုံးကို ဖတ်ပြီးပါပြီ။",
  "Drawer content goes here.": "ပြသလိုသော အကြောင်းအရာများကို ဒီနေရာမှာ ထည့်ပါ။",
  "Close": "ပိတ်ရန်",
  "Close drawer": "Drawer ပိတ်ရန်",
  "Side Drawers": "ဘေးမှ ဖွင့်သော Drawer များ",
  "Match the drawer side with the swipe direction used to dismiss it.": "Drawer ဖွင့်သည့်ဘက်နှင့် ပိတ်ရန် ပွတ်ဆွဲသည့်ဦးတည်ရာကို ကိုက်ညီအောင် သတ်မှတ်ပါ။",
  "Left drawer": "ဘယ်ဘက် Drawer",
  "Navigation": "လမ်းညွှန်မီနူး",
  "Browse project sections.": "Project ၏ အပိုင်းများကို ရွေးချယ်ကြည့်ပါ။",
  "Right drawer": "ညာဘက် Drawer",
  "Filters": "စစ်ထုတ်မှုများ",
  "Refine the displayed results.": "ပြသထားသော ရလဒ်များကို လိုအပ်သလို စစ်ထုတ်ပါ။",
  "Category": "အမျိုးအစား",
  "All": "အားလုံး",
  "Dashboard": "အနှစ်ချုပ်",
  "Settings": "ဆက်တင်များ",
  "Form Drawer": "ဖောင်ပါသော Drawer",
  "Use Drawer for compact mobile-friendly forms.": "ဖုန်းပေါ်တွင် အသုံးပြုရလွယ်သော ဖောင်ငယ်များအတွက် Drawer ကို အသုံးပြုပါ။",
  "Send feedback": "အကြံပြုချက် ပေးရန်",
  "Tell us how we can improve.": "ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်ရန် အကြံပြုချက် ပေးပါ။",
  "Feedback": "အကြံပြုချက်",
  "Write your feedback...": "မိမိအကြံပြုချက်ကို ရေးပါ…",
  "Cancel": "မလုပ်တော့ပါ",
  "Submit": "ပေးပို့ရန်",
  "Controlled State": "State ဖြင့် ထိန်းချုပ်ခြင်း",
  "Control the drawer with React state.": "Drawer အဖွင့်၊ အပိတ်ကို React state ဖြင့် ထိန်းချုပ်ပါ။",
  "Open controlled drawer": "State ဖြင့် Drawer ဖွင့်ရန်",
  "Controlled drawer": "State ဖြင့် ထိန်းချုပ်သော Drawer",
  "The parent controls the open state.": "အပြင်ဘက် component မှ အဖွင့်၊ အပိတ် state ကို ထိန်းချုပ်ထားပါတယ်။",
  "Controlled drawer content.": "State ဖြင့် ထိန်းချုပ်သော Drawer ၏ အကြောင်းအရာ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Drawer source with the latest registry version.": "Drawer source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components and custom props available in the Binhlaig UI Drawer.": "Binhlaig UI Drawer တွင် အသုံးပြုနိုင်သော components နှင့် custom props များ။",
  "Component": "Component",
  "Purpose": "အသုံးဝင်ပုံ",
  "DrawerContent prop": "DrawerContent prop",
  "Values": "သတ်မှတ်နိုင်သော တန်ဖိုးများ",
  "Default": "ပုံမှန်တန်ဖိုး",
  "top/bottom only": "အပေါ် / အောက်ဘက်တွင်သာ",
  "Previous component": "ယခင် Component",
  "Next": "နောက်သို့",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Preview": "နမူနာ",
  "Code": "Code",
  "Native Beta": "Native (စမ်းသပ်ဆဲ)",
  "Shadcn Stable": "Shadcn (တည်ငြိမ်သော version)",
  "Controls state and swipe behavior.": "State နှင့် ပွတ်ဆွဲမှုကို ထိန်းချုပ်ပါတယ်။",
  "Opens the drawer.": "Drawer ကို ဖွင့်ပေးပါတယ်။",
  "Renders popup, overlay and viewport.": "Popup၊ နောက်ခံ overlay နှင့် viewport ကို ပြသပေးပါတယ်။",
  "Groups title and description.": "ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းထားပါတယ်။",
  "Accessible drawer title.": "အသုံးပြုသူအားလုံးအတွက် ဖတ်ရှုနိုင်သော Drawer ခေါင်းစဉ်။",
  "Accessible supporting text.": "ခေါင်းစဉ်အတွက် ဖြည့်စွက်ရှင်းလင်းချက်။",
  "Scrollable selectable content area.": "Scroll လုပ်ပြီး စာသားရွေးချယ်နိုင်သော အကြောင်းအရာနေရာ။",
  "Aligns drawer actions.": "လုပ်ဆောင်ချက်ခလုတ်များကို စီထားပါတယ်။",
  "Closes the drawer.": "Drawer ကို ပိတ်ပေးပါတယ်။",
  "Name": "အမည်",
  "Your name": "မိမိအမည်",
  "Email": "အီးမေးလ်",
  "We will only use this email to reply.": "ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ ဒီအီးမေးလ်ကို အသုံးပြုပါမယ်။",
  "Message": "စာတို",
  "How can we help?": "ဘာအတွက် ကူညီပေးရမလဲ။",
  "Message submitted successfully.": "စာတိုကို ပေးပို့ပြီးပါပြီ။",
  "Accessible layout primitives for labels, controls, helper text, validation messages, sections and actions.": "Label၊ input၊ ရှင်းလင်းချက်၊ အမှားသတိပေးချက်နှင့် လုပ်ဆောင်ချက်များကို စနစ်တကျ စီစဉ်တည်ဆောက်ရန် Form components များ။",
  "Initialize Binhlaig UI and install Form using your preferred installer.": "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Form ကို ထည့်သွင်းပါ။",
  "Import the Form layout primitives from your UI directory.": "မိမိ UI directory မှ Form components များကို import လုပ်ပါ။",
  "Usage": "အသုံးပြုပုံ",
  "Build a basic form using field, label, control and action primitives.": "Field၊ label၊ input နှင့် action components များဖြင့် ဖောင်တစ်ခု တည်ဆောက်ပါ။",
  "Enter your name": "မိမိအမည်ကို ဖြည့်ပါ",
  "Validation": "အချက်အလက် စစ်ဆေးခြင်း",
  "Use FormDescription and FormMessage to communicate field state.": "Field အခြေအနေကို ရှင်းပြရန် FormDescription နှင့် FormMessage ကို အသုံးပြုပါ။",
  "We will never share your email.": "မိမိအီးမေးလ်ကို အခြားသူများထံ မမျှဝေပါ။",
  "Enter a valid email address.": "မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။",
  "Continue": "ဆက်လက်လုပ်ဆောင်ရန်",
  "Form Sections": "ဖောင်အပိုင်းများ",
  "Group related fields in a bordered section.": "ဆက်စပ်သော fields များကို ဘောင်ပါသော အပိုင်းတစ်ခုတွင် စုစည်းပါ။",
  "Profile information": "ကိုယ်ရေးအချက်အလက်",
  "Update your public profile details.": "အများမြင်နိုင်သော ကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Display name": "ပြသမည့်အမည်",
  "Bio": "မိမိအကြောင်း",
  "Tell us about yourself...": "မိမိအကြောင်း ရေးပါ…",
  "Save changes": "ပြင်ဆင်ချက် သိမ်းရန်",
  "Checkbox and Select": "Checkbox နှင့် ရွေးချယ်မှု",
  "Form primitives work with native controls and custom UI components.": "Form components များကို native input များနှင့် custom UI components များဖြင့် တွဲသုံးနိုင်ပါတယ်။",
  "Email notifications": "အီးမေးလ် အသိပေးချက်များ",
  "Receive updates about your account.": "မိမိအကောင့်ဆိုင်ရာ အသိပေးချက်များ လက်ခံရန်။",
  "Role": "လုပ်ဆောင်ရသည့် အခန်းကဏ္ဍ",
  "Developer": "Developer",
  "Designer": "Designer",
  "Manager": "မန်နေဂျာ",
  "Save settings": "ဆက်တင် သိမ်းရန်",
  "Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state.": "တန်ဖိုးများ၊ validation error များနှင့် ပေးပို့မှုအခြေအနေကို ထိန်းချုပ်ရန် Binhlaig Form ကို React Hook Form နှင့် ချိတ်ဆက်ပါ။",
  "Install React Hook Form": "React Hook Form ထည့်သွင်းရန်",
  "Submit State": "ပေးပို့မှု အခြေအနေ",
  "Disable the submit action and show progress while saving.": "သိမ်းဆည်းနေစဉ် ထပ်မနှိပ်နိုင်အောင် ခလုတ်ပိတ်ထားပြီး လုပ်ဆောင်မှုအခြေအနေကို ပြပါ။",
  "Project name": "Project အမည်",
  "Replace an older Form source with the latest registry version.": "Form source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Components included in the Binhlaig UI Form layout.": "Binhlaig UI Form တွင် ပါဝင်သော components များ။",
  "Name is required.": "အမည် ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Name must be at least 2 characters.": "အမည်မှာ အနည်းဆုံး စာလုံး ၂ လုံး ပါရပါမယ်။",
  "Email is required.": "အီးမေးလ် ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Message is required.": "စာတို ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Message must be at least 10 characters.": "စာတိုမှာ အနည်းဆုံး စာလုံး ၁၀ လုံး ပါရပါမယ်။",
  "Submitting...": "ပေးပို့နေသည်…",
  "Submit message": "စာတို ပေးပို့ရန်",
  "Saving...": "သိမ်းဆည်းနေသည်…",
  "Save project": "Project သိမ်းရန်",
  "Root form layout.": "ဖောင်၏ အခြေခံ layout။",
  "Groups a single field.": "Field တစ်ခု၏ အစိတ်အပိုင်းများကို စုစည်းပေးပါတယ်။",
  "Accessible field label.": "Field အတွက် ဖတ်ရှုရလွယ်သော label။",
  "Wraps an input control.": "Input control ကို ဝန်းရံထားပါတယ်။",
  "Displays helper text.": "အသုံးပြုနည်း ရှင်းလင်းချက်ကို ပြပါတယ်။",
  "Displays validation feedback.": "Validation ရလဒ်နှင့် အမှားစာသားကို ပြပါတယ်။",
  "Groups related fields.": "ဆက်စပ်သော fields များကို စုစည်းပါတယ်။",
  "Groups section heading text.": "အပိုင်း၏ ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းပါတယ်။",
  "Section heading.": "အပိုင်း၏ ခေါင်းစဉ်။",
  "Section supporting text.": "အပိုင်းအတွက် ဖြည့်စွက်ရှင်းလင်းချက်။",
  "Aligns submit and cancel actions.": "ပေးပို့ရန်နှင့် မလုပ်တော့ရန် ခလုတ်များကို စီထားပါတယ်။",
  "Copy install command": "Install command ကူးယူရန်",
  "Input fields allow users to enter text, email, passwords, numbers, dates and files.": "စာသား၊ အီးမေးလ်၊ စကားဝှက်၊ ဂဏန်း၊ ရက်စွဲနှင့် ဖိုင်များကို ဖြည့်သွင်းရန် Input ကို အသုံးပြုနိုင်ပါတယ်။",
  "Add the Input component using the Binhlaig UI CLI.": "Binhlaig UI CLI ဖြင့် Input component ကို ထည့်သွင်းပါ။",
  "Import the Input component from your UI directory.": "မိမိ UI directory မှ Input component ကို import လုပ်ပါ။",
  "Use Input for simple text entry.": "ရိုးရှင်းသော စာသားဖြည့်သွင်းမှုအတွက် Input ကို အသုံးပြုပါ။",
  "Input Types": "Input အမျိုးအစားများ",
  "Input supports all standard HTML input types.": "Input သည် စံ HTML input အမျိုးအစားအားလုံးကို အသုံးပြုနိုင်ပါတယ်။",
  "Text": "စာသား",
  "Email address": "အီးမေးလ်လိပ်စာ",
  "Password": "စကားဝှက်",
  "Number": "ဂဏန်း",
  "With Label": "Label နှင့် တွဲသုံးခြင်း",
  "Use a label to clearly identify the requested value.": "ဖြည့်သွင်းရမည့် အချက်အလက်ကို ရှင်းပြရန် label ကို အသုံးပြုပါ။",
  "With Description": "ရှင်းလင်းချက်နှင့် တွဲသုံးခြင်း",
  "Supporting text can explain the expected input value.": "ဖြည့်သွင်းရမည့်တန်ဖိုးကို ရှင်းပြရန် ဖြည့်စွက်စာသား ထည့်နိုင်ပါတယ်။",
  "Username": "အသုံးပြုသူအမည်",
  "This will be your public display name.": "ဒီအမည်ကို အများမြင်နိုင်သော အမည်အဖြစ် ပြသပါမယ်။",
  "With Icons": "Icon နှင့် တွဲသုံးခြင်း",
  "Add an icon to provide visual context.": "ဖြည့်သွင်းရမည့် အကြောင်းအရာကို သိသာစေရန် icon ထည့်ပါ။",
  "Search components...": "Components များ ရှာရန်…",
  "Password Input": "စကားဝှက် ဖြည့်သွင်းခြင်း",
  "Allow users to show or hide their password.": "အသုံးပြုသူက စကားဝှက်ကို ပြသခြင်း၊ ဖျောက်ခြင်း ပြုလုပ်နိုင်ပါတယ်။",
  "Enter password": "စကားဝှက်ကို ဖြည့်ပါ",
  "Show password": "စကားဝှက် ပြရန်",
  "Hide password": "စကားဝှက် ဖျောက်ရန်",
  "Disabled State": "အသုံးပြုခွင့် ပိတ်ထားခြင်း",
  "Disabled inputs cannot be edited or focused.": "Disabled input ကို ပြင်ဆင်ခြင်းနှင့် focus ပြုလုပ်ခြင်း မပြုနိုင်ပါ။",
  "Disabled input": "ဖြည့်သွင်းခွင့် ပိတ်ထားသည်",
  "Cannot be edited": "ပြင်ဆင်၍ မရပါ",
  "Error State": "အမှား အခြေအနေ",
  "Use aria-invalid and error styles for invalid values.": "မမှန်ကန်သော တန်ဖိုးများအတွက် aria-invalid နှင့် အမှားပြသသော အပြင်အဆင်ကို အသုံးပြုပါ။",
  "File Input": "ဖိုင် ရွေးချယ်ခြင်း",
  "Use the file input type to upload files.": "ဖိုင်များတင်ရန် file input အမျိုးအစားကို အသုံးပြုပါ။",
  "Profile picture": "ကိုယ်ရေးပုံ",
  "Form Example": "ဖောင် နမူနာ",
  "Combine inputs and buttons to create a complete form.": "Input များနှင့် ခလုတ်များကို တွဲပြီး ဖောင်တစ်ခု တည်ဆောက်ပါ။",
  "Full name": "အမည်အပြည့်အစုံ",
  "The Input component accepts standard React input properties.": "Input component တွင် စံ React input properties များကို အသုံးပြုနိုင်ပါတယ်။",
  "Description": "ရှင်းလင်းချက်",
  "Controls the type of input value.": "ဖြည့်သွင်းမည့် တန်ဖိုးအမျိုးအစားကို သတ်မှတ်ပါတယ်။",
  "Displays temporary hint text.": "မဖြည့်ရသေးချိန်တွင် အရိပ်အမြွက်စာသားကို ပြပါတယ်။",
  "Controls the current input value.": "လက်ရှိ input တန်ဖိုးကို ထိန်းချုပ်ပါတယ်။",
  "Sets the initial uncontrolled value.": "State ဖြင့် မထိန်းချုပ်ထားသော input ၏ ကနဦးတန်ဖိုးကို သတ်မှတ်ပါတယ်။",
  "Prevents interaction with the input.": "Input ကို အသုံးပြုခွင့် ပိတ်ထားပါတယ်။",
  "Prevents editing while allowing focus.": "Focus ပြုလုပ်နိုင်သော်လည်း ပြင်ဆင်ခွင့် မပေးပါ။",
  "Marks the input as required.": "မဖြစ်မနေ ဖြည့်သွင်းရမည့် input အဖြစ် သတ်မှတ်ပါတယ်။",
  "Marks the current value as invalid.": "လက်ရှိတန်ဖိုးကို မမှန်ကန်ကြောင်း သတ်မှတ်ပါတယ်။",
  "Adds custom Tailwind CSS classes.": "မိမိစိတ်ကြိုက် Tailwind CSS classes ထည့်နိုင်ပါတယ်။",
  "Runs whenever the input value changes.": "Input တန်ဖိုး ပြောင်းတိုင်း လုပ်ဆောင်ပါတယ်။",
  "Next component": "နောက် Component",
  "Copy TypeScript": "TypeScript code ကူးယူရန်",
  "Copy Terminal": "Terminal command ကူးယူရန်",
  "Tabs organize related content into separate views and allow users to switch between them.": "ဆက်စပ်အကြောင်းအရာများကို အပိုင်းခွဲပြီး အသုံးပြုသူက အပိုင်းတစ်ခုမှ တစ်ခုသို့ ပြောင်းကြည့်နိုင်အောင် Tabs ကို အသုံးပြုပါတယ်။",
  "Add the Tabs component using the Binhlaig UI CLI.": "Binhlaig UI CLI ဖြင့် Tabs component ကို ထည့်သွင်းပါ။",
  "Import the Tabs components from your UI directory.": "မိမိ UI directory မှ Tabs components များကို import လုပ်ပါ။",
  "Use Tabs with a default active value.": "ပုံမှန်ရွေးချယ်ထားမည့် value သတ်မှတ်ပြီး Tabs ကို အသုံးပြုပါ။",
  "Account": "အကောင့်",
  "Manage your account details and public profile information.": "အကောင့်နှင့် အများမြင်နိုင်သော ကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Update your password and security information.": "စကားဝှက်နှင့် လုံခြုံရေးအချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Multiple Tabs": "Tab အများအပြား",
  "Use three or more tabs to organize larger content groups.": "အကြောင်းအရာများကို စုစည်းရန် Tab သုံးခုနှင့်အထက် အသုံးပြုပါ။",
  "Overview": "အနှစ်ချုပ်",
  "Analytics": "ခွဲခြမ်းစိတ်ဖြာမှု",
  "Reports": "အစီရင်ခံစာများ",
  "Overview content": "အနှစ်ချုပ် အကြောင်းအရာ",
  "Analytics content": "ခွဲခြမ်းစိတ်ဖြာမှု အကြောင်းအရာ",
  "Reports content": "အစီရင်ခံစာ အကြောင်းအရာ",
  "Disabled Tab": "ရွေးချယ်ခွင့် ပိတ်ထားသော Tab",
  "Disable a tab when its content is unavailable.": "အကြောင်းအရာ မရရှိနိုင်သေးပါက Tab ကို ပိတ်ထားပါ။",
  "Active": "အသုံးပြုနိုင်သည်",
  "Disabled": "အသုံးပြုခွင့် ပိတ်ထားသည်",
  "This tab is available.": "ဒီ Tab ကို အသုံးပြုနိုင်ပါတယ်။",
  "This tab cannot be selected.": "ဒီ Tab ကို ရွေးချယ်၍ မရပါ။",
  "Tabs with Icons": "Icon ပါသော Tabs",
  "Add icons to make each tab easier to identify.": "Tab တစ်ခုချင်းကို ခွဲခြားရလွယ်အောင် icon ထည့်ပါ။",
  "Dashboard content": "အနှစ်ချုပ်စာမျက်နှာ အကြောင်းအရာ",
  "Vertical Tabs": "ဒေါင်လိုက် Tabs",
  "Use vertical tabs for settings pages and side navigation.": "ဆက်တင်စာမျက်နှာနှင့် ဘေးဘက်မီနူးအတွက် ဒေါင်လိုက် Tabs ကို အသုံးပြုပါ။",
  "Profile": "ကိုယ်ရေးအချက်အလက်",
  "Security": "လုံခြုံရေး",
  "Billing": "ငွေတောင်းခံမှု",
  "Profile settings": "ကိုယ်ရေးအချက်အလက် ဆက်တင်များ",
  "Manage your personal information.": "မိမိကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Security settings": "လုံခြုံရေး ဆက်တင်များ",
  "Billing settings": "ငွေတောင်းခံမှု ဆက်တင်များ",
  "Settings Tabs": "ဆက်တင် Tabs",
  "Build a complete settings interface using tabs.": "Tabs ဖြင့် ဆက်တင်စာမျက်နှာတစ်ခု တည်ဆောက်ပါ။",
  "Notification settings": "အသိပေးချက် ဆက်တင်များ",
  "Dashboard Tabs": "Dashboard Tabs",
  "Use tabs to switch between dashboard views.": "Dashboard အကြောင်းအရာများအကြား ပြောင်းကြည့်ရန် Tabs ကို အသုံးပြုပါ။",
  "Sales": "အရောင်း",
  "Sales analytics content": "အရောင်း ခွဲခြမ်းစိတ်ဖြာမှု အကြောင်းအရာ",
  "Controlled Tabs": "State ဖြင့် ထိန်းချုပ်သော Tabs",
  "Control the active tab using React state.": "ရွေးချယ်ထားသော Tab ကို React state ဖြင့် ထိန်းချုပ်ပါ။",
  "Active tab": "ရွေးချယ်ထားသော Tab",
  "Account settings": "အကောင့် ဆက်တင်များ",
  "Password settings": "စကားဝှက် ဆက်တင်များ",
  "Custom Style": "စိတ်ကြိုက် အပြင်အဆင်",
  "Customize tabs using Tailwind CSS classes.": "Tailwind CSS classes ဖြင့် Tabs အပြင်အဆင်ကို ပြင်ဆင်ပါ။",
  "First": "ပထမ",
  "Second": "ဒုတိယ",
  "Third": "တတိယ",
  "First tab content": "ပထမ Tab အကြောင်းအရာ",
  "Second tab content": "ဒုတိယ Tab အကြောင်းအရာ",
  "Third tab content": "တတိယ Tab အကြောင်းအရာ",
  "Components and properties available in the Binhlaig UI Tabs component.": "Binhlaig UI Tabs တွင် ပါဝင်သော components နှင့် properties များ။",
  "Important Props": "အဓိက Props များ",
  "The root component that controls tab state.": "Tab state ကို ထိန်းချုပ်သော အခြေခံ component။",
  "Contains the tab trigger buttons.": "Tab ရွေးချယ်သည့် ခလုတ်များကို စုစည်းထားပါတယ်။",
  "A button used to select a tab.": "Tab ရွေးချယ်ရန် ခလုတ်။",
  "Displays the content associated with a tab.": "သက်ဆိုင်သော Tab ၏ အကြောင်းအရာကို ပြပါတယ်။"
};
function useTabsText() {
  const { language } = useLanguage();
  const t = (text: string) => language === "my" ? tabsMyanmar[text] ?? text : text;
  return { language, t };
}
const tabsExamples = {
  "basicCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function TabsDemo() {\n  return (\n<Tabs\n                    defaultValue=\"account\"\n                    className=\"w-full max-w-xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"account\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Account\"}</TabsTrigger>\n                      <TabsTrigger value=\"password\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Password\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"account\"\n                      className=\"mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\"\n                    >\n                      <h3 className=\"font-semibold text-slate-950 dark:text-white\">{\"Account\"}</h3>\n                      <p className=\"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400\">{\"Manage your account details and public profile information.\"}</p>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"password\"\n                      className=\"mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\"\n                    >\n                      <h3 className=\"font-semibold text-slate-950 dark:text-white\">{\"Password\"}</h3>\n                      <p className=\"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400\">{\"Update your password and security information.\"}</p>\n                    </TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function TabsDemo() {\n  return (\n<Tabs\n                    defaultValue=\"account\"\n                    className=\"w-full max-w-xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"account\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အကောင့်\"}</TabsTrigger>\n                      <TabsTrigger value=\"password\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"စကားဝှက်\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"account\"\n                      className=\"mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\"\n                    >\n                      <h3 className=\"font-semibold text-slate-950 dark:text-white\">{\"အကောင့်\"}</h3>\n                      <p className=\"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400\">{\"အကောင့်နှင့် အများမြင်နိုင်သော ကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။\"}</p>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"password\"\n                      className=\"mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\"\n                    >\n                      <h3 className=\"font-semibold text-slate-950 dark:text-white\">{\"စကားဝှက်\"}</h3>\n                      <p className=\"mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400\">{\"စကားဝှက်နှင့် လုံခြုံရေးအချက်အလက်များကို ပြင်ဆင်ပါ။\"}</p>\n                    </TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "threeTabsCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function ThreeTabs() {\n  return (\n<Tabs\n                    defaultValue=\"overview\"\n                    className=\"w-full max-w-2xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"overview\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Overview\"}</TabsTrigger>\n                      <TabsTrigger value=\"analytics\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Analytics\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Reports\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"overview\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Overview content\"}</TabsContent>\n                    <TabsContent\n                      value=\"analytics\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Analytics content\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Reports content\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function ThreeTabs() {\n  return (\n<Tabs\n                    defaultValue=\"overview\"\n                    className=\"w-full max-w-2xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"overview\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အနှစ်ချုပ်\"}</TabsTrigger>\n                      <TabsTrigger value=\"analytics\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"ခွဲခြမ်းစိတ်ဖြာမှု\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အစီရင်ခံစာများ\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"overview\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အနှစ်ချုပ် အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"analytics\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"ခွဲခြမ်းစိတ်ဖြာမှု အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အစီရင်ခံစာ အကြောင်းအရာ\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "disabledCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function DisabledTab() {\n  return (\n<Tabs\n                    defaultValue=\"active\"\n                    className=\"w-full max-w-md\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"active\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Active\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"disabled\"\n                        disabled\n                       className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Disabled\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"active\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"This tab is available.\"}</TabsContent>\n                    <TabsContent value=\"disabled\">{\"This tab cannot be selected.\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function DisabledTab() {\n  return (\n<Tabs\n                    defaultValue=\"active\"\n                    className=\"w-full max-w-md\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"active\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အသုံးပြုနိုင်သည်\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"disabled\"\n                        disabled\n                       className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အသုံးပြုခွင့် ပိတ်ထားသည်\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"active\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"ဒီ Tab ကို အသုံးပြုနိုင်ပါတယ်။\"}</TabsContent>\n                    <TabsContent value=\"disabled\">{\"ဒီ Tab ကို ရွေးချယ်၍ မရပါ။\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "iconTabsCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { LayoutDashboard, BarChart3, FileText } from \"lucide-react\";\n\nexport function IconTabs() {\n  return (\n<Tabs\n                    defaultValue=\"dashboard\"\n                    className=\"w-full max-w-2xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"dashboard\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LayoutDashboard className=\"size-4\" />{\"Dashboard\"}</TabsTrigger>\n                      <TabsTrigger value=\"analytics\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <BarChart3 className=\"size-4\" />{\"Analytics\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <FileText className=\"size-4\" />{\"Reports\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"dashboard\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Dashboard content\"}</TabsContent>\n                    <TabsContent\n                      value=\"analytics\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Analytics content\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Reports content\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { LayoutDashboard, BarChart3, FileText } from \"lucide-react\";\n\nexport function IconTabs() {\n  return (\n<Tabs\n                    defaultValue=\"dashboard\"\n                    className=\"w-full max-w-2xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"dashboard\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LayoutDashboard className=\"size-4\" />{\"အနှစ်ချုပ်\"}</TabsTrigger>\n                      <TabsTrigger value=\"analytics\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <BarChart3 className=\"size-4\" />{\"ခွဲခြမ်းစိတ်ဖြာမှု\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <FileText className=\"size-4\" />{\"အစီရင်ခံစာများ\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"dashboard\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အနှစ်ချုပ်စာမျက်နှာ အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"analytics\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"ခွဲခြမ်းစိတ်ဖြာမှု အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အစီရင်ခံစာ အကြောင်းအရာ\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "verticalTabsCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { User, LockKeyhole, CreditCard } from \"lucide-react\";\n\nexport function VerticalTabs() {\n  return (\n<Tabs\n                    defaultValue=\"profile\"\n                    orientation=\"vertical\"\n                    className=\"flex w-full max-w-2xl flex-col gap-5 sm:flex-row\"\n                  >\n                    <TabsList className=\"h-auto w-full flex-col items-stretch sm:w-48 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger\n                        value=\"profile\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <User className=\"size-4\" />{\"Profile\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"security\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <LockKeyhole className=\"size-4\" />{\"Security\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"billing\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <CreditCard className=\"size-4\" />{\"Billing\"}</TabsTrigger>\n                    </TabsList>\n                    <div className=\"min-w-0 flex-1\">\n                      <TabsContent\n                        value=\"profile\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >\n                        <h3 className=\"font-semibold\">{\"Profile settings\"}</h3>\n                        <p className=\"mt-2 text-sm text-slate-500\">{\"Manage your personal information.\"}</p>\n                      </TabsContent>\n                      <TabsContent\n                        value=\"security\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"Security settings\"}</TabsContent>\n                      <TabsContent\n                        value=\"billing\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"Billing settings\"}</TabsContent>\n                    </div>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { User, LockKeyhole, CreditCard } from \"lucide-react\";\n\nexport function VerticalTabs() {\n  return (\n<Tabs\n                    defaultValue=\"profile\"\n                    orientation=\"vertical\"\n                    className=\"flex w-full max-w-2xl flex-col gap-5 sm:flex-row\"\n                  >\n                    <TabsList className=\"h-auto w-full flex-col items-stretch sm:w-48 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger\n                        value=\"profile\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <User className=\"size-4\" />{\"ကိုယ်ရေးအချက်အလက်\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"security\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <LockKeyhole className=\"size-4\" />{\"လုံခြုံရေး\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"billing\"\n                        className=\"w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >\n                        <CreditCard className=\"size-4\" />{\"ငွေတောင်းခံမှု\"}</TabsTrigger>\n                    </TabsList>\n                    <div className=\"min-w-0 flex-1\">\n                      <TabsContent\n                        value=\"profile\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >\n                        <h3 className=\"font-semibold\">{\"ကိုယ်ရေးအချက်အလက် ဆက်တင်များ\"}</h3>\n                        <p className=\"mt-2 text-sm text-slate-500\">{\"မိမိကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။\"}</p>\n                      </TabsContent>\n                      <TabsContent\n                        value=\"security\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"လုံခြုံရေး ဆက်တင်များ\"}</TabsContent>\n                      <TabsContent\n                        value=\"billing\"\n                        className=\"mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"ငွေတောင်းခံမှု ဆက်တင်များ\"}</TabsContent>\n                    </div>\n                  </Tabs>\n  );\n}"
  },
  "settingsCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { Button } from \"@/components/ui/button\";\nimport { User, LockKeyhole, Bell, CreditCard } from \"lucide-react\";\n\nexport function SettingsTabs() {\n  return (\n<Tabs\n                    defaultValue=\"profile\"\n                    className=\"w-full max-w-3xl\"\n                  >\n                    <TabsList className=\"grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"profile\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <User className=\"size-4\" />{\"Profile\"}</TabsTrigger>\n                      <TabsTrigger value=\"security\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LockKeyhole className=\"size-4\" />{\"Security\"}</TabsTrigger>\n                      <TabsTrigger value=\"notifications\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <Bell className=\"size-4\" />{\"Notifications\"}</TabsTrigger>\n                      <TabsTrigger value=\"billing\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <CreditCard className=\"size-4\" />{\"Billing\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent value=\"profile\">\n                      <div className=\"mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\">\n                        <div className=\"grid gap-2\">\n                          <label\n                            htmlFor=\"tabs-name\"\n                            className=\"text-sm font-medium\"\n                          >{\"Name\"}</label>\n                          <input\n                            id=\"tabs-name\"\n                            defaultValue=\"Sai Aung\"\n                            className=\"h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950\"\n                          />\n                        </div>\n                        <div className=\"grid gap-2\">\n                          <label\n                            htmlFor=\"tabs-email\"\n                            className=\"text-sm font-medium\"\n                          >{\"Email\"}</label>\n                          <input\n                            id=\"tabs-email\"\n                            type=\"email\"\n                            defaultValue=\"sai@example.com\"\n                            className=\"h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950\"\n                          />\n                        </div>\n                        <div>\n                          <Button>{\"Save changes\"}</Button>\n                        </div>\n                      </div>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"security\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Security settings\"}</TabsContent>\n                    <TabsContent\n                      value=\"notifications\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Notification settings\"}</TabsContent>\n                    <TabsContent\n                      value=\"billing\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Billing settings\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { Button } from \"@/components/ui/button\";\nimport { User, LockKeyhole, Bell, CreditCard } from \"lucide-react\";\n\nexport function SettingsTabs() {\n  return (\n<Tabs\n                    defaultValue=\"profile\"\n                    className=\"w-full max-w-3xl\"\n                  >\n                    <TabsList className=\"grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"profile\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <User className=\"size-4\" />{\"ကိုယ်ရေးအချက်အလက်\"}</TabsTrigger>\n                      <TabsTrigger value=\"security\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LockKeyhole className=\"size-4\" />{\"လုံခြုံရေး\"}</TabsTrigger>\n                      <TabsTrigger value=\"notifications\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <Bell className=\"size-4\" />{\"အသိပေးချက်များ\"}</TabsTrigger>\n                      <TabsTrigger value=\"billing\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <CreditCard className=\"size-4\" />{\"ငွေတောင်းခံမှု\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent value=\"profile\">\n                      <div className=\"mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950\">\n                        <div className=\"grid gap-2\">\n                          <label\n                            htmlFor=\"tabs-name\"\n                            className=\"text-sm font-medium\"\n                          >{\"အမည်\"}</label>\n                          <input\n                            id=\"tabs-name\"\n                            defaultValue=\"Sai Aung\"\n                            className=\"h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950\"\n                          />\n                        </div>\n                        <div className=\"grid gap-2\">\n                          <label\n                            htmlFor=\"tabs-email\"\n                            className=\"text-sm font-medium\"\n                          >{\"အီးမေးလ်\"}</label>\n                          <input\n                            id=\"tabs-email\"\n                            type=\"email\"\n                            defaultValue=\"sai@example.com\"\n                            className=\"h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950\"\n                          />\n                        </div>\n                        <div>\n                          <Button>{\"ပြင်ဆင်ချက် သိမ်းရန်\"}</Button>\n                        </div>\n                      </div>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"security\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"လုံခြုံရေး ဆက်တင်များ\"}</TabsContent>\n                    <TabsContent\n                      value=\"notifications\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အသိပေးချက် ဆက်တင်များ\"}</TabsContent>\n                    <TabsContent\n                      value=\"billing\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"ငွေတောင်းခံမှု ဆက်တင်များ\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "dashboardCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { LayoutDashboard, BarChart3, FileText } from \"lucide-react\";\n\nexport function DashboardTabs() {\n  return (\n<Tabs\n                    defaultValue=\"overview\"\n                    className=\"w-full max-w-3xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"overview\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LayoutDashboard className=\"size-4\" />{\"Overview\"}</TabsTrigger>\n                      <TabsTrigger value=\"sales\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <BarChart3 className=\"size-4\" />{\"Sales\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <FileText className=\"size-4\" />{\"Reports\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent value=\"overview\">\n                      <div className=\"mt-4 grid gap-4 sm:grid-cols-3\">\n                        {[\n                          {\n                            label: \"Revenue\",\n                            value: \"$24,500\",\n                          },\n                          {\n                            label: \"Orders\",\n                            value: \"1,248\",\n                          },\n                          {\n                            label: \"Customers\",\n                            value: \"864\",\n                          },\n                        ].map((item) => (\n                          <div\n                            key={item.label}\n                            className=\"rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950\"\n                          >\n                            <p className=\"text-sm text-slate-500\">\n                              {item.label}\n                            </p>\n                            <p className=\"mt-2 text-2xl font-bold text-slate-950 dark:text-white\">\n                              {item.value}\n                            </p>\n                          </div>\n                        ))}\n                      </div>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"sales\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Sales analytics content\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"Reports content\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\nimport { LayoutDashboard, BarChart3, FileText } from \"lucide-react\";\n\nexport function DashboardTabs() {\n  return (\n<Tabs\n                    defaultValue=\"overview\"\n                    className=\"w-full max-w-3xl\"\n                  >\n                    <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger value=\"overview\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <LayoutDashboard className=\"size-4\" />{\"အနှစ်ချုပ်\"}</TabsTrigger>\n                      <TabsTrigger value=\"sales\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <BarChart3 className=\"size-4\" />{\"အရောင်း\"}</TabsTrigger>\n                      <TabsTrigger value=\"reports\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">\n                        <FileText className=\"size-4\" />{\"အစီရင်ခံစာများ\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent value=\"overview\">\n                      <div className=\"mt-4 grid gap-4 sm:grid-cols-3\">\n                        {[\n                          {\n                            label: \"Revenue\",\n                            value: \"$24,500\",\n                          },\n                          {\n                            label: \"Orders\",\n                            value: \"1,248\",\n                          },\n                          {\n                            label: \"Customers\",\n                            value: \"864\",\n                          },\n                        ].map((item) => (\n                          <div\n                            key={item.label}\n                            className=\"rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950\"\n                          >\n                            <p className=\"text-sm text-slate-500\">\n                              {item.label}\n                            </p>\n                            <p className=\"mt-2 text-2xl font-bold text-slate-950 dark:text-white\">\n                              {item.value}\n                            </p>\n                          </div>\n                        ))}\n                      </div>\n                    </TabsContent>\n                    <TabsContent\n                      value=\"sales\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အရောင်း ခွဲခြမ်းစိတ်ဖြာမှု အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"reports\"\n                      className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                    >{\"အစီရင်ခံစာ အကြောင်းအရာ\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  },
  "controlledCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function ControlledTabs() {\n  const [controlledTab, setControlledTab] = useState(\"account\");\n\n  return (\n<div className=\"grid w-full max-w-xl gap-4\">\n                    <div className=\"flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950\">\n                      <span className=\"text-sm text-slate-500\">{\"Active tab\"}</span>\n                      <code className=\"rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300\">\n                        {controlledTab}\n                      </code>\n                    </div>\n                    <Tabs\n                      value={controlledTab}\n                      onValueChange={setControlledTab}\n                    >\n                      <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                        <TabsTrigger value=\"account\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Account\"}</TabsTrigger>\n                        <TabsTrigger value=\"password\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"Password\"}</TabsTrigger>\n                      </TabsList>\n                      <TabsContent\n                        value=\"account\"\n                        className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"Account settings\"}</TabsContent>\n                      <TabsContent\n                        value=\"password\"\n                        className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"Password settings\"}</TabsContent>\n                    </Tabs>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function ControlledTabs() {\n  const [controlledTab, setControlledTab] = useState(\"account\");\n\n  return (\n<div className=\"grid w-full max-w-xl gap-4\">\n                    <div className=\"flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950\">\n                      <span className=\"text-sm text-slate-500\">{\"ရွေးချယ်ထားသော Tab\"}</span>\n                      <code className=\"rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300\">\n                        {controlledTab}\n                      </code>\n                    </div>\n                    <Tabs\n                      value={controlledTab}\n                      onValueChange={setControlledTab}\n                    >\n                      <TabsList className=\"h-auto max-w-full overflow-x-auto\">\n                        <TabsTrigger value=\"account\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"အကောင့်\"}</TabsTrigger>\n                        <TabsTrigger value=\"password\" className=\"h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\">{\"စကားဝှက်\"}</TabsTrigger>\n                      </TabsList>\n                      <TabsContent\n                        value=\"account\"\n                        className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"အကောင့် ဆက်တင်များ\"}</TabsContent>\n                      <TabsContent\n                        value=\"password\"\n                        className=\"mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800\"\n                      >{\"စကားဝှက် ဆက်တင်များ\"}</TabsContent>\n                    </Tabs>\n                  </div>\n  );\n}"
  },
  "customCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function CustomTabs() {\n  return (\n<Tabs\n                    defaultValue=\"first\"\n                    className=\"w-full max-w-xl\"\n                  >\n                    <TabsList className=\"h-auto rounded-full bg-blue-50 p-1 dark:bg-blue-500/10 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger\n                        value=\"first\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"First\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"second\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"Second\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"third\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"Third\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"first\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"First tab content\"}</TabsContent>\n                    <TabsContent\n                      value=\"second\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"Second tab content\"}</TabsContent>\n                    <TabsContent\n                      value=\"third\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"Third tab content\"}</TabsContent>\n                  </Tabs>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from \"@/components/ui/tabs\";\n\nexport function CustomTabs() {\n  return (\n<Tabs\n                    defaultValue=\"first\"\n                    className=\"w-full max-w-xl\"\n                  >\n                    <TabsList className=\"h-auto rounded-full bg-blue-50 p-1 dark:bg-blue-500/10 h-auto max-w-full overflow-x-auto\">\n                      <TabsTrigger\n                        value=\"first\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"ပထမ\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"second\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"ဒုတိယ\"}</TabsTrigger>\n                      <TabsTrigger\n                        value=\"third\"\n                        className=\"rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7\"\n                      >{\"တတိယ\"}</TabsTrigger>\n                    </TabsList>\n                    <TabsContent\n                      value=\"first\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"ပထမ Tab အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"second\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"ဒုတိယ Tab အကြောင်းအရာ\"}</TabsContent>\n                    <TabsContent\n                      value=\"third\"\n                      className=\"mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5\"\n                    >{\"တတိယ Tab အကြောင်းအရာ\"}</TabsContent>\n                  </Tabs>\n  );\n}"
  }
} as const;
const tabsPageStyles = `
.tabs-docs[data-language="my"] :is(h1,h2,h3,p,label,a,td,th) { letter-spacing:normal; line-height:1.9; }
.tabs-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.tabs-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.tabs-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.tabs-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; padding-block:8px; line-height:1.9; }
.tabs-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .tabs-docs[data-language="my"] h1 { font-size:28px; } }
`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const { t } = useTabsText();
  const [activeTab, setActiveTab] =
    useState<PreviewTab>("preview");
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
                : "text-slate-500 hover:text-slate-950 dark:hover:text-white",
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
                : "text-slate-500 hover:text-slate-950 dark:hover:text-white",
            )}
          >{t("Code")}{activeTab === "code" && (
              <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-900 dark:hover:text-white"
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
            "flex min-h-[280px] items-center justify-center p-6 sm:p-10",
            "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <div className="overflow-x-auto bg-muted/60 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-foreground">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
function CopyCodeBlock({
  code,
  title,
}: {
  code: string;
  title: string;
}) {
  const { t } = useTabsText();
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
    <div className="overflow-hidden rounded-2xl border border-border bg-muted/60">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-slate-500">
          {t(title)}
        </span>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-foreground"
          aria-label={`Copy ${t(title)}`}
        >
          {copied ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-sm text-foreground">
        <code>{code}</code>
      </pre>
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
  const { t } = useTabsText();
  return (
    <div
      id={id}
      className="scroll-mt-28"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
        {t(title)}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-slate-600 dark:text-slate-400">
          {t(description)}
        </p>
      )}
    </div>
  );
}
export default function TabsDocumentationPage() {
  const { t, language } = useTabsText();
  const [controlledTab, setControlledTab] =
    useState("account");
  return (
    <div lang={language} data-language={language} className="tabs-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{tabsPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-7 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/docs/components"
              className="transition hover:text-slate-950 dark:hover:text-white"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-300">
              Tabs
            </span>
          </div>
          {/* Hero */}
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 dark:border-slate-800 dark:bg-slate-950">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl dark:text-white">
                Tabs
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Tabs organize related content into separate views and allow users to switch between them.")}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button
                  rightIcon={<ArrowRight />}
                  onClick={() => {
                    document
                      .querySelector("#usage")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >{t("View examples")}</Button>
                <Button
                  variant="outline"
                  leftIcon={<Code2 />}
                  onClick={() => {
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                >{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            {/* Installation */}
            <ComponentInstallation componentName="Tabs" componentSlug="tabs" />
            {/* Import */}
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the Tabs components from your UI directory.")}
              />
              <div className="mt-6">
                <CopyCodeBlock
                  code={importCode}
                  title="TypeScript"
                />
              </div>
            </section>
            {/* Basic */}
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Use Tabs with a default active value.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.basicCode[language]}>
                  <Tabs
                    defaultValue="account"
                    className="w-full max-w-xl"
                  >
                    <TabsList className="h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="account" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Account")}</TabsTrigger>
                      <TabsTrigger value="password" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Password")}</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="account"
                      className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <h3 className="font-semibold text-slate-950 dark:text-white">{t("Account")}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Manage your account details and public profile information.")}</p>
                    </TabsContent>
                    <TabsContent
                      value="password"
                      className="mt-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950"
                    >
                      <h3 className="font-semibold text-slate-950 dark:text-white">{t("Password")}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Update your password and security information.")}</p>
                    </TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Multiple */}
            <section>
              <SectionTitle
                id="multiple"
                title={t("Multiple Tabs")}
                description={t("Use three or more tabs to organize larger content groups.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.threeTabsCode[language]}>
                  <Tabs
                    defaultValue="overview"
                    className="w-full max-w-2xl"
                  >
                    <TabsList className="h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="overview" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Overview")}</TabsTrigger>
                      <TabsTrigger value="analytics" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Analytics")}</TabsTrigger>
                      <TabsTrigger value="reports" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Reports")}</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="overview"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Overview content")}</TabsContent>
                    <TabsContent
                      value="analytics"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Analytics content")}</TabsContent>
                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Reports content")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title={t("Disabled Tab")}
                description={t("Disable a tab when its content is unavailable.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.disabledCode[language]}>
                  <Tabs
                    defaultValue="active"
                    className="w-full max-w-md"
                  >
                    <TabsList className="h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="active" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Active")}</TabsTrigger>
                      <TabsTrigger
                        value="disabled"
                        disabled
                       className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Disabled")}</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="active"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("This tab is available.")}</TabsContent>
                    <TabsContent value="disabled">{t("This tab cannot be selected.")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Icons */}
            <section>
              <SectionTitle
                id="icons"
                title={t("Tabs with Icons")}
                description={t("Add icons to make each tab easier to identify.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.iconTabsCode[language]}>
                  <Tabs
                    defaultValue="dashboard"
                    className="w-full max-w-2xl"
                  >
                    <TabsList className="h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="dashboard" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <LayoutDashboard className="size-4" />{t("Dashboard")}</TabsTrigger>
                      <TabsTrigger value="analytics" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <BarChart3 className="size-4" />{t("Analytics")}</TabsTrigger>
                      <TabsTrigger value="reports" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <FileText className="size-4" />{t("Reports")}</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="dashboard"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Dashboard content")}</TabsContent>
                    <TabsContent
                      value="analytics"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Analytics content")}</TabsContent>
                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Reports content")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Vertical */}
            <section>
              <SectionTitle
                id="vertical"
                title={t("Vertical Tabs")}
                description={t("Use vertical tabs for settings pages and side navigation.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.verticalTabsCode[language]}>
                  <Tabs
                    defaultValue="profile"
                    orientation="vertical"
                    className="flex w-full max-w-2xl flex-col gap-5 sm:flex-row"
                  >
                    <TabsList className="h-auto w-full flex-col items-stretch sm:w-48 h-auto max-w-full overflow-x-auto">
                      <TabsTrigger
                        value="profile"
                        className="w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >
                        <User className="size-4" />{t("Profile")}</TabsTrigger>
                      <TabsTrigger
                        value="security"
                        className="w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >
                        <LockKeyhole className="size-4" />{t("Security")}</TabsTrigger>
                      <TabsTrigger
                        value="billing"
                        className="w-full justify-start h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >
                        <CreditCard className="size-4" />{t("Billing")}</TabsTrigger>
                    </TabsList>
                    <div className="min-w-0 flex-1">
                      <TabsContent
                        value="profile"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >
                        <h3 className="font-semibold">{t("Profile settings")}</h3>
                        <p className="mt-2 text-sm text-slate-500">{t("Manage your personal information.")}</p>
                      </TabsContent>
                      <TabsContent
                        value="security"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >{t("Security settings")}</TabsContent>
                      <TabsContent
                        value="billing"
                        className="mt-0 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >{t("Billing settings")}</TabsContent>
                    </div>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Settings */}
            <section>
              <SectionTitle
                id="settings"
                title={t("Settings Tabs")}
                description={t("Build a complete settings interface using tabs.")}
              />
              <div className="mt-6">
                <CodePreview
                  code={tabsExamples.settingsCode[language]}
                  className="items-start"
                >
                  <Tabs
                    defaultValue="profile"
                    className="w-full max-w-3xl"
                  >
                    <TabsList className="grid h-auto w-full grid-cols-2 gap-1 sm:grid-cols-4 h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="profile" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <User className="size-4" />{t("Profile")}</TabsTrigger>
                      <TabsTrigger value="security" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <LockKeyhole className="size-4" />{t("Security")}</TabsTrigger>
                      <TabsTrigger value="notifications" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <Bell className="size-4" />{t("Notifications")}</TabsTrigger>
                      <TabsTrigger value="billing" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <CreditCard className="size-4" />{t("Billing")}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                      <div className="mt-4 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                        <div className="grid gap-2">
                          <label
                            htmlFor="tabs-name"
                            className="text-sm font-medium"
                          >{t("Name")}</label>
                          <input
                            id="tabs-name"
                            defaultValue="Sai Aung"
                            className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label
                            htmlFor="tabs-email"
                            className="text-sm font-medium"
                          >{t("Email")}</label>
                          <input
                            id="tabs-email"
                            type="email"
                            defaultValue="sai@example.com"
                            className="h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950"
                          />
                        </div>
                        <div>
                          <Button>{t("Save changes")}</Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="security"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Security settings")}</TabsContent>
                    <TabsContent
                      value="notifications"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Notification settings")}</TabsContent>
                    <TabsContent
                      value="billing"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Billing settings")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Dashboard */}
            <section>
              <SectionTitle
                id="dashboard"
                title={t("Dashboard Tabs")}
                description={t("Use tabs to switch between dashboard views.")}
              />
              <div className="mt-6">
                <CodePreview
                  code={tabsExamples.dashboardCode[language]}
                  className="items-start"
                >
                  <Tabs
                    defaultValue="overview"
                    className="w-full max-w-3xl"
                  >
                    <TabsList className="h-auto max-w-full overflow-x-auto">
                      <TabsTrigger value="overview" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <LayoutDashboard className="size-4" />{t("Overview")}</TabsTrigger>
                      <TabsTrigger value="sales" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <BarChart3 className="size-4" />{t("Sales")}</TabsTrigger>
                      <TabsTrigger value="reports" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">
                        <FileText className="size-4" />{t("Reports")}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview">
                      <div className="mt-4 grid gap-4 sm:grid-cols-3">
                        {[
                          {
                            label: "Revenue",
                            value: "$24,500",
                          },
                          {
                            label: "Orders",
                            value: "1,248",
                          },
                          {
                            label: "Customers",
                            value: "864",
                          },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"
                          >
                            <p className="text-sm text-slate-500">
                              {item.label}
                            </p>
                            <p className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent
                      value="sales"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Sales analytics content")}</TabsContent>
                    <TabsContent
                      value="reports"
                      className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                    >{t("Reports content")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* Controlled */}
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled Tabs")}
                description={t("Control the active tab using React state.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.controlledCode[language]}>
                  <div className="grid w-full max-w-xl gap-4">
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                      <span className="text-sm text-slate-500">{t("Active tab")}</span>
                      <code className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        {controlledTab}
                      </code>
                    </div>
                    <Tabs
                      value={controlledTab}
                      onValueChange={setControlledTab}
                    >
                      <TabsList className="h-auto max-w-full overflow-x-auto">
                        <TabsTrigger value="account" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Account")}</TabsTrigger>
                        <TabsTrigger value="password" className="h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7">{t("Password")}</TabsTrigger>
                      </TabsList>
                      <TabsContent
                        value="account"
                        className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >{t("Account settings")}</TabsContent>
                      <TabsContent
                        value="password"
                        className="mt-4 rounded-xl border border-slate-200 p-5 dark:border-slate-800"
                      >{t("Password settings")}</TabsContent>
                    </Tabs>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Custom */}
            <section>
              <SectionTitle
                id="custom"
                title={t("Custom Style")}
                description={t("Customize tabs using Tailwind CSS classes.")}
              />
              <div className="mt-6">
                <CodePreview code={tabsExamples.customCode[language]}>
                  <Tabs
                    defaultValue="first"
                    className="w-full max-w-xl"
                  >
                    <TabsList className="h-auto rounded-full bg-blue-50 p-1 dark:bg-blue-500/10 h-auto max-w-full overflow-x-auto">
                      <TabsTrigger
                        value="first"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >{t("First")}</TabsTrigger>
                      <TabsTrigger
                        value="second"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >{t("Second")}</TabsTrigger>
                      <TabsTrigger
                        value="third"
                        className="rounded-full data-[state=active]:bg-blue-600 data-[state=active]:text-white h-auto min-h-10 shrink-0 gap-2 whitespace-nowrap py-2 leading-7"
                      >{t("Third")}</TabsTrigger>
                    </TabsList>
                    <TabsContent
                      value="first"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >{t("First tab content")}</TabsContent>
                    <TabsContent
                      value="second"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >{t("Second tab content")}</TabsContent>
                    <TabsContent
                      value="third"
                      className="mt-4 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 dark:border-blue-500/20 dark:bg-blue-500/5"
                    >{t("Third tab content")}</TabsContent>
                  </Tabs>
                </CodePreview>
              </div>
            </section>
            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Components and properties available in the Binhlaig UI Tabs component.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[780px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">{t("Component")}</th>
                        <th className="px-5 py-4 font-medium">{t("Important Props")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="Tabs"
                        props="defaultValue, value, onValueChange, orientation"
                        description={t("The root component that controls tab state.")}
                      />
                      <ApiRow
                        name="TabsList"
                        props="className"
                        description={t("Contains the tab trigger buttons.")}
                      />
                      <ApiRow
                        name="TabsTrigger"
                        props="value, disabled, className"
                        description={t("A button used to select a tab.")}
                      />
                      <ApiRow
                        name="TabsContent"
                        props="value, className"
                        description={t("Displays the content associated with a tab.")}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Bottom Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/docs/components/input"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Input
                </div>
              </Link>
              <Link
                href="/docs/components/badge"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Next component")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">
                  Badge
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>
      {/* Table of Contents */}
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/tabs/page.tsx"
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
function ApiRow({
  name,
  props,
  description,
}: {
  name: string;
  props: string;
  description: string;
}) {
  const { t } = useTabsText();
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>
      <td className="max-w-[320px] px-5 py-4 align-top">
        <code className="text-xs leading-5 text-purple-600 dark:text-purple-400">
          {props}
        </code>
      </td>
      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {t(description)}
      </td>
    </tr>
  );
}