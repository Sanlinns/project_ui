"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  KeyRound,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
type PreviewTab = "preview" | "code";
type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};
const installCode = `npx binhlaig-ui@latest add input-otp`;
const importCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";`;







const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Numeric OTP", "#numeric"],
  ["Separator", "#separator"],
  ["Controlled OTP", "#controlled"],
  ["Verification Card", "#verification"],
  ["Disabled", "#disabled"],
  ["Error State", "#error"],
  ["API Reference", "#api-reference"],
];
const otpMyanmar: Record<string, string> = {
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
  "An accessible one-time password input for verification codes, login flows and security confirmations.": "အတည်ပြုကုဒ်၊ အကောင့်ဝင်ခြင်းနှင့် လုံခြုံရေးအတည်ပြုမှုများအတွက် အသုံးပြုရလွယ်သော တစ်ကြိမ်သုံးကုဒ် ဖြည့်သွင်းရန် Input။",
  "Add Input OTP to your project using the Binhlaig UI CLI.": "Binhlaig UI CLI ဖြင့် မိမိ project ထဲသို့ Input OTP ကို ထည့်သွင်းပါ။",
  "Import the OTP components from your UI directory.": "မိမိ UI directory မှ OTP components များကို import လုပ်ပါ။",
  "Create a basic six-character verification input.": "စာလုံး ၆ လုံးပါသော အတည်ပြုကုဒ် ဖြည့်သွင်းရန် Input တစ်ခု တည်ဆောက်ပါ။",
  "Numeric OTP": "ဂဏန်းသီးသန့် OTP",
  "Restrict OTP input to numbers only.": "OTP တွင် ဂဏန်းများသာ ဖြည့်သွင်းနိုင်အောင် သတ်မှတ်ပါ။",
  "With Separator": "အပိုင်းခွဲခြားခြင်း",
  "Separator": "အပိုင်းခွဲခြားခြင်း",
  "Split the OTP into groups using a separator.": "Separator ဖြင့် OTP အကွက်များကို အုပ်စုခွဲပါ။",
  "Controlled OTP": "State ဖြင့် ထိန်းချုပ်သော OTP",
  "Control the OTP value using React state.": "OTP တန်ဖိုးကို React state ဖြင့် ထိန်းချုပ်ပါ။",
  "Current value": "လက်ရှိတန်ဖိုး",
  "Empty": "ဗလာ",
  "Verification Card": "အတည်ပြုခြင်း ကတ်",
  "Use Input OTP in an email or account verification flow.": "အီးမေးလ် သို့မဟုတ် အကောင့်အတည်ပြုရန် Input OTP ကို အသုံးပြုပါ။",
  "Verify your email": "အီးမေးလ် အတည်ပြုပါ",
  "Enter the 6-digit verification code sent to your email address.": "မိမိအီးမေးလ်သို့ ပေးပို့ထားသော ဂဏန်း ၆ လုံးပါ အတည်ပြုကုဒ်ကို ဖြည့်ပါ။",
  "Verify code": "ကုဒ် အတည်ပြုရန်",
  "Resend code": "ကုဒ် ပြန်ပို့ရန်",
  "Disable the OTP input when users should not edit the value.": "တန်ဖိုးကို ပြင်ဆင်ခွင့် မပေးလိုသည့်အခါ OTP input ကို ပိတ်ထားပါ။",
  "Disabled": "အသုံးပြုခွင့် ပိတ်ထားခြင်း",
  "Display a validation message when the OTP is incorrect.": "OTP မမှန်ကန်သည့်အခါ အမှားသတိပေးစာသားကို ပြပါ။",
  "The verification code is incorrect.": "အတည်ပြုကုဒ် မမှန်ကန်ပါ။",
  "Components and important properties available in Input OTP.": "Input OTP တွင် ပါဝင်သော components နှင့် အဓိက properties များ။",
  "Important Props": "အဓိက Props များ",
  "The root OTP input component.": "OTP input ၏ အခြေခံ component။",
  "Groups related OTP slots together.": "ဆက်စပ်သော OTP အကွက်များကို စုစည်းပါတယ်။",
  "Displays one character of the OTP value.": "OTP တန်ဖိုးမှ စာလုံးတစ်လုံးကို ပြပါတယ်။",
  "Displays a visual separator between OTP groups.": "OTP အုပ်စုများကြား ခွဲခြားသည့်အမှတ်ကို ပြပါတယ်။"
};
function useOTPText() {
  const { language } = useLanguage();
  const t = (text: string) => language === "my" ? otpMyanmar[text] ?? text : text;
  return { language, t };
}
const otpExamples = {
  "basicCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\n\nexport function InputOTPDemo() {\n  return (\n<InputOTP maxLength={6}>\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\n\nexport function InputOTPDemo() {\n  return (\n<InputOTP maxLength={6}>\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}"
  },
  "numericCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function NumericOTP() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    pattern={REGEXP_ONLY_DIGITS}\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function NumericOTP() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    pattern={REGEXP_ONLY_DIGITS}\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}"
  },
  "separatorCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function OTPWithSeparator() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    pattern={REGEXP_ONLY_DIGITS}\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                    </InputOTPGroup>\n                    <InputOTPSeparator />\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function OTPWithSeparator() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    pattern={REGEXP_ONLY_DIGITS}\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                    </InputOTPGroup>\n                    <InputOTPSeparator />\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}"
  },
  "controlledCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function ControlledOTP() {\n  const [controlledValue, setControlledValue] = useState(\"\");\n\n  return (\n<div className=\"grid gap-5\">\n                    <InputOTP\n                      maxLength={6}\n                      value={controlledValue}\n                      onChange={setControlledValue}\n                      pattern={REGEXP_ONLY_DIGITS}\n                    >\n                      <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                        <InputOTPSlot index={0} />\n                        <InputOTPSlot index={1} />\n                        <InputOTPSlot index={2} />\n                        <InputOTPSlot index={3} />\n                        <InputOTPSlot index={4} />\n                        <InputOTPSlot index={5} />\n                      </InputOTPGroup>\n                    </InputOTP>\n                    <div className=\"flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950\">\n                      <span className=\"text-sm text-slate-500\">{\"Current value\"}</span>\n                      <code className=\"rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300\">\n                        {controlledValue || \"Empty\"}\n                      </code>\n                    </div>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function ControlledOTP() {\n  const [controlledValue, setControlledValue] = useState(\"\");\n\n  return (\n<div className=\"grid gap-5\">\n                    <InputOTP\n                      maxLength={6}\n                      value={controlledValue}\n                      onChange={setControlledValue}\n                      pattern={REGEXP_ONLY_DIGITS}\n                    >\n                      <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                        <InputOTPSlot index={0} />\n                        <InputOTPSlot index={1} />\n                        <InputOTPSlot index={2} />\n                        <InputOTPSlot index={3} />\n                        <InputOTPSlot index={4} />\n                        <InputOTPSlot index={5} />\n                      </InputOTPGroup>\n                    </InputOTP>\n                    <div className=\"flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950\">\n                      <span className=\"text-sm text-slate-500\">{\"လက်ရှိတန်ဖိုး\"}</span>\n                      <code className=\"rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300\">\n                        {controlledValue || \"ဗလာ\"}\n                      </code>\n                    </div>\n                  </div>\n  );\n}"
  },
  "verificationCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { Button } from \"@/components/ui/button\";\nimport { Mail, ShieldCheck } from \"lucide-react\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function VerificationCard() {\n  const [verifyOTP, setVerifyOTP] = useState(\"\");\n\n  return (\n<div className=\"w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950\">\n                    <div className=\"flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                      <Mail className=\"size-5\" />\n                    </div>\n                    <h3 className=\"mt-5 text-xl font-semibold text-slate-950 dark:text-white\">{\"Verify your email\"}</h3>\n                    <p className=\"mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400\">{\"Enter the 6-digit verification code sent to your email address.\"}</p>\n                    <div className=\"mt-6\">\n                      <InputOTP\n                        maxLength={6}\n                        value={verifyOTP}\n                        onChange={setVerifyOTP}\n                        pattern={REGEXP_ONLY_DIGITS}\n                      >\n                        <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                          <InputOTPSlot index={0} />\n                          <InputOTPSlot index={1} />\n                          <InputOTPSlot index={2} />\n                          <InputOTPSlot index={3} />\n                          <InputOTPSlot index={4} />\n                          <InputOTPSlot index={5} />\n                        </InputOTPGroup>\n                      </InputOTP>\n                    </div>\n                    <Button\n                      fullWidth\n                      className=\"mt-6\"\n                      disabled={verifyOTP.length !== 6}\n                      leftIcon={<ShieldCheck />}\n                    >{\"Verify code\"}</Button>\n                    <button\n                      type=\"button\"\n                      className=\"mt-4 w-full text-center text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400\"\n                    >{\"Resend code\"}</button>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { Button } from \"@/components/ui/button\";\nimport { Mail, ShieldCheck } from \"lucide-react\";\nimport { REGEXP_ONLY_DIGITS } from \"input-otp\";\n\nexport function VerificationCard() {\n  const [verifyOTP, setVerifyOTP] = useState(\"\");\n\n  return (\n<div className=\"w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950\">\n                    <div className=\"flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                      <Mail className=\"size-5\" />\n                    </div>\n                    <h3 className=\"mt-5 text-xl font-semibold text-slate-950 dark:text-white\">{\"အီးမေးလ် အတည်ပြုပါ\"}</h3>\n                    <p className=\"mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400\">{\"မိမိအီးမေးလ်သို့ ပေးပို့ထားသော ဂဏန်း ၆ လုံးပါ အတည်ပြုကုဒ်ကို ဖြည့်ပါ။\"}</p>\n                    <div className=\"mt-6\">\n                      <InputOTP\n                        maxLength={6}\n                        value={verifyOTP}\n                        onChange={setVerifyOTP}\n                        pattern={REGEXP_ONLY_DIGITS}\n                      >\n                        <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                          <InputOTPSlot index={0} />\n                          <InputOTPSlot index={1} />\n                          <InputOTPSlot index={2} />\n                          <InputOTPSlot index={3} />\n                          <InputOTPSlot index={4} />\n                          <InputOTPSlot index={5} />\n                        </InputOTPGroup>\n                      </InputOTP>\n                    </div>\n                    <Button\n                      fullWidth\n                      className=\"mt-6\"\n                      disabled={verifyOTP.length !== 6}\n                      leftIcon={<ShieldCheck />}\n                    >{\"ကုဒ် အတည်ပြုရန်\"}</Button>\n                    <button\n                      type=\"button\"\n                      className=\"mt-4 w-full text-center text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400\"\n                    >{\"ကုဒ် ပြန်ပို့ရန်\"}</button>\n                  </div>\n  );\n}"
  },
  "disabledCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\n\nexport function DisabledOTP() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    disabled\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\n\nexport function DisabledOTP() {\n  return (\n<InputOTP\n                    maxLength={6}\n                    disabled\n                  >\n                    <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                      <InputOTPSlot index={0} />\n                      <InputOTPSlot index={1} />\n                      <InputOTPSlot index={2} />\n                      <InputOTPSlot index={3} />\n                      <InputOTPSlot index={4} />\n                      <InputOTPSlot index={5} />\n                    </InputOTPGroup>\n                  </InputOTP>\n  );\n}"
  },
  "errorCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { KeyRound } from \"lucide-react\";\n\nexport function ErrorOTP() {\n  return (\n<div className=\"grid gap-3\">\n                    <InputOTP\n                      maxLength={6}\n                      aria-invalid=\"true\"\n                    >\n                      <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                        {[0, 1, 2, 3, 4, 5].map(\n                          (index) => (\n                            <InputOTPSlot\n                              key={index}\n                              index={index}\n                              className=\"border-red-500 data-[active=true]:border-red-500 data-[active=true]:ring-red-500/20\"\n                            />\n                          ),\n                        )}\n                      </InputOTPGroup>\n                    </InputOTP>\n                    <div className=\"flex items-center gap-2 text-sm text-red-600 dark:text-red-400\">\n                      <KeyRound className=\"size-4\" />{\"The verification code is incorrect.\"}</div>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { InputOTP, InputOTPGroup, InputOTPSlot } from \"@/components/ui/input-otp\";\nimport { KeyRound } from \"lucide-react\";\n\nexport function ErrorOTP() {\n  return (\n<div className=\"grid gap-3\">\n                    <InputOTP\n                      maxLength={6}\n                      aria-invalid=\"true\"\n                    >\n                      <InputOTPGroup className=\"[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11\">\n                        {[0, 1, 2, 3, 4, 5].map(\n                          (index) => (\n                            <InputOTPSlot\n                              key={index}\n                              index={index}\n                              className=\"border-red-500 data-[active=true]:border-red-500 data-[active=true]:ring-red-500/20\"\n                            />\n                          ),\n                        )}\n                      </InputOTPGroup>\n                    </InputOTP>\n                    <div className=\"flex items-center gap-2 text-sm text-red-600 dark:text-red-400\">\n                      <KeyRound className=\"size-4\" />{\"အတည်ပြုကုဒ် မမှန်ကန်ပါ။\"}</div>\n                  </div>\n  );\n}"
  }
} as const;
const otpPageStyles = `
.otp-docs[data-language="my"] :is(h1,h2,h3,p,label,a,td,th) { letter-spacing:normal; line-height:1.9; }
.otp-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.otp-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.otp-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; padding-block:8px; line-height:1.9; }
.otp-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .otp-docs[data-language="my"] h1 { font-size:28px; } }
`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const { t } = useOTPText();
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
            "flex min-h-[260px] items-center justify-center p-6 sm:p-10",
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
  const { t } = useOTPText();
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
  const { t } = useOTPText();
  return (
    <div id={id} className="scroll-mt-28">
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
export default function InputOTPDocumentationPage() {
  const { t, language } = useOTPText();
  const [controlledValue, setControlledValue] =
    useState("");
  const [verifyOTP, setVerifyOTP] = useState("");
  return (
    <div lang={language} data-language={language} className="otp-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{otpPageStyles}</style>
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
              Input OTP
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
                Input OTP
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("An accessible one-time password input for verification codes, login flows and security confirmations.")}</p>
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
            <section>
              <SectionTitle
                id="installation"
                title={t("Installation")}
                description={t("Add Input OTP to your project using the Binhlaig UI CLI.")}
              />
              <div className="mt-6">
                <CopyCodeBlock
                  code={installCode}
                  title={t("Terminal")}
                />
              </div>
            </section>
            {/* Import */}
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the OTP components from your UI directory.")}
              />
              <div className="mt-6">
                <CopyCodeBlock
                  code={importCode}
                  title="TypeScript"
                />
              </div>
            </section>
            {/* Usage */}
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Create a basic six-character verification input.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.basicCode[language]}>
                  <InputOTP maxLength={6}>
                    <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>
            {/* Numeric */}
            <section>
              <SectionTitle
                id="numeric"
                title={t("Numeric OTP")}
                description={t("Restrict OTP input to numbers only.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.numericCode[language]}>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>
            {/* Separator */}
            <section>
              <SectionTitle
                id="separator"
                title={t("With Separator")}
                description={t("Split the OTP into groups using a separator.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.separatorCode[language]}>
                  <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                  >
                    <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>
            {/* Controlled */}
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled OTP")}
                description={t("Control the OTP value using React state.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.controlledCode[language]}>
                  <div className="grid gap-5">
                    <InputOTP
                      maxLength={6}
                      value={controlledValue}
                      onChange={setControlledValue}
                      pattern={REGEXP_ONLY_DIGITS}
                    >
                      <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                      <span className="text-sm text-slate-500">{t("Current value")}</span>
                      <code className="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                        {controlledValue || t("Empty")}
                      </code>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Verification */}
            <section>
              <SectionTitle
                id="verification"
                title={t("Verification Card")}
                description={t("Use Input OTP in an email or account verification flow.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.verificationCode[language]}>
                  <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                      <Mail className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{t("Verify your email")}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{t("Enter the 6-digit verification code sent to your email address.")}</p>
                    <div className="mt-6">
                      <InputOTP
                        maxLength={6}
                        value={verifyOTP}
                        onChange={setVerifyOTP}
                        pattern={REGEXP_ONLY_DIGITS}
                      >
                        <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <Button
                      fullWidth
                      className="mt-6"
                      disabled={verifyOTP.length !== 6}
                      leftIcon={<ShieldCheck />}
                    >{t("Verify code")}</Button>
                    <button
                      type="button"
                      className="mt-4 w-full text-center text-sm font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400"
                    >{t("Resend code")}</button>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title={t("Disabled State")}
                description={t("Disable the OTP input when users should not edit the value.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.disabledCode[language]}>
                  <InputOTP
                    maxLength={6}
                    disabled
                  >
                    <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </CodePreview>
              </div>
            </section>
            {/* Error */}
            <section>
              <SectionTitle
                id="error"
                title={t("Error State")}
                description={t("Display a validation message when the OTP is incorrect.")}
              />
              <div className="mt-6">
                <CodePreview code={otpExamples.errorCode[language]}>
                  <div className="grid gap-3">
                    <InputOTP
                      maxLength={6}
                      aria-invalid="true"
                    >
                      <InputOTPGroup className="[&_[data-slot=input-otp-slot]]:w-8 sm:[&_[data-slot=input-otp-slot]]:w-11">
                        {[0, 1, 2, 3, 4, 5].map(
                          (index) => (
                            <InputOTPSlot
                              key={index}
                              index={index}
                              className="border-red-500 data-[active=true]:border-red-500 data-[active=true]:ring-red-500/20"
                            />
                          ),
                        )}
                      </InputOTPGroup>
                    </InputOTP>
                    <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                      <KeyRound className="size-4" />{t("The verification code is incorrect.")}</div>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Components and important properties available in Input OTP.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[800px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">{t("Component")}</th>
                        <th className="px-5 py-4 font-medium">{t("Important Props")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="InputOTP"
                        props="maxLength, value, onChange, pattern, disabled"
                        description={t("The root OTP input component.")}
                      />
                      <ApiRow
                        name="InputOTPGroup"
                        props="className"
                        description={t("Groups related OTP slots together.")}
                      />
                      <ApiRow
                        name="InputOTPSlot"
                        props="index, className"
                        description={t("Displays one character of the OTP value.")}
                      />
                      <ApiRow
                        name="InputOTPSeparator"
                        props="className"
                        description={t("Displays a visual separator between OTP groups.")}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Navigation */}
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
                href="/docs/components/tabs"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Next component")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold text-slate-950 dark:text-white">
                  Tabs
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/input-otp/page.tsx"
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
  const { t } = useOTPText();
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>
      <td className="max-w-[340px] px-5 py-4 align-top">
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