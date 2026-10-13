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
  Eye,
  EyeOff,
  KeyRound,
  LockKeyhole,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
type PreviewTab = "preview" | "code";
type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};
const installCode = `npx binhlaig-ui@latest add input`;
const importCode = `import { Input } from "@/components/ui/input";`;










const tableOfContents = [
  ["Installation", "#installation"],
  ["Import", "#import"],
  ["Usage", "#usage"],
  ["Input Types", "#types"],
  ["With Label", "#label"],
  ["Description", "#description"],
  ["With Icon", "#icon"],
  ["Password", "#password"],
  ["Disabled", "#disabled"],
  ["Error State", "#error"],
  ["File Input", "#file"],
  ["Form Example", "#form"],
  ["API Reference", "#api-reference"],
];
const inputMyanmar: Record<string, string> = {
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
  "Copy Terminal": "Terminal command ကူးယူရန်"
};
function useInputText() {
  const { language } = useLanguage();
  const t = (text: string) => language === "my" ? inputMyanmar[text] ?? text : text;
  return { language, t };
}
const inputExamples = {
  "basicCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputDemo() {\n  return (\n<div className=\"w-full max-w-md\">\n                    <Input placeholder={\"Enter your name\"} />\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputDemo() {\n  return (\n<div className=\"w-full max-w-md\">\n                    <Input placeholder={\"မိမိအမည်ကို ဖြည့်ပါ\"} />\n                  </div>\n  );\n}"
  },
  "typesCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputTypes() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <Input\n                      type=\"text\"\n                      placeholder={\"Text\"}\n                    />\n                    <Input\n                      type=\"email\"\n                      placeholder={\"Email address\"}\n                    />\n                    <Input\n                      type=\"password\"\n                      placeholder={\"Password\"}\n                    />\n                    <Input\n                      type=\"number\"\n                      placeholder={\"Number\"}\n                    />\n                    <Input type=\"date\" />\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputTypes() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <Input\n                      type=\"text\"\n                      placeholder={\"စာသား\"}\n                    />\n                    <Input\n                      type=\"email\"\n                      placeholder={\"အီးမေးလ်လိပ်စာ\"}\n                    />\n                    <Input\n                      type=\"password\"\n                      placeholder={\"စကားဝှက်\"}\n                    />\n                    <Input\n                      type=\"number\"\n                      placeholder={\"ဂဏန်း\"}\n                    />\n                    <Input type=\"date\" />\n                  </div>\n  );\n}"
  },
  "labelCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputWithLabel() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-email\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"Email address\"}</label>\n                    <Input\n                      id=\"demo-email\"\n                      type=\"email\"\n                      placeholder=\"you@example.com\"\n                    />\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputWithLabel() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-email\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"အီးမေးလ်လိပ်စာ\"}</label>\n                    <Input\n                      id=\"demo-email\"\n                      type=\"email\"\n                      placeholder=\"you@example.com\"\n                    />\n                  </div>\n  );\n}"
  },
  "descriptionCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputWithDescription() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-username\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"Username\"}</label>\n                    <Input\n                      id=\"demo-username\"\n                      placeholder=\"binhlaig\"\n                    />\n                    <p className=\"text-sm text-slate-500 dark:text-slate-400\">{\"This will be your public display name.\"}</p>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputWithDescription() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-username\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"အသုံးပြုသူအမည်\"}</label>\n                    <Input\n                      id=\"demo-username\"\n                      placeholder=\"binhlaig\"\n                    />\n                    <p className=\"text-sm text-slate-500 dark:text-slate-400\">{\"ဒီအမည်ကို အများမြင်နိုင်သော အမည်အဖြစ် ပြသပါမယ်။\"}</p>\n                  </div>\n  );\n}"
  },
  "iconCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { Search, Mail, User } from \"lucide-react\";\n\nexport function InputWithIcon() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <div className=\"relative\">\n                      <Search className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        placeholder={\"Search components...\"}\n                      />\n                    </div>\n                    <div className=\"relative\">\n                      <Mail className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        type=\"email\"\n                        placeholder={\"Email address\"}\n                      />\n                    </div>\n                    <div className=\"relative\">\n                      <User className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        placeholder={\"Username\"}\n                      />\n                    </div>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { Search, Mail, User } from \"lucide-react\";\n\nexport function InputWithIcon() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <div className=\"relative\">\n                      <Search className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        placeholder={\"Components များ ရှာရန်…\"}\n                      />\n                    </div>\n                    <div className=\"relative\">\n                      <Mail className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        type=\"email\"\n                        placeholder={\"အီးမေးလ်လိပ်စာ\"}\n                      />\n                    </div>\n                    <div className=\"relative\">\n                      <User className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        className=\"pl-10\"\n                        placeholder={\"အသုံးပြုသူအမည်\"}\n                      />\n                    </div>\n                  </div>\n  );\n}"
  },
  "passwordCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { LockKeyhole, EyeOff, Eye } from \"lucide-react\";\n\nexport function PasswordInput() {\n  const [passwordVisible, setPasswordVisible] = useState(false);\n\n  return (\n<div className=\"w-full max-w-md\">\n                    <div className=\"relative\">\n                      <LockKeyhole className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        type={\n                          passwordVisible\n                            ? \"text\"\n                            : \"password\"\n                        }\n                        className=\"px-10\"\n                        placeholder={\"Enter password\"}\n                      />\n                      <button\n                        type=\"button\"\n                        onClick={() =>\n                          setPasswordVisible(\n                            !passwordVisible,\n                          )\n                        }\n                        className=\"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-950 dark:hover:text-white\"\n                        aria-label={passwordVisible ? \"Hide password\" : \"Show password\"}\n                      >\n                        {passwordVisible ? (\n                          <EyeOff className=\"size-4\" />\n                        ) : (\n                          <Eye className=\"size-4\" />\n                        )}\n                      </button>\n                    </div>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { LockKeyhole, EyeOff, Eye } from \"lucide-react\";\n\nexport function PasswordInput() {\n  const [passwordVisible, setPasswordVisible] = useState(false);\n\n  return (\n<div className=\"w-full max-w-md\">\n                    <div className=\"relative\">\n                      <LockKeyhole className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                      <Input\n                        type={\n                          passwordVisible\n                            ? \"text\"\n                            : \"password\"\n                        }\n                        className=\"px-10\"\n                        placeholder={\"စကားဝှက်ကို ဖြည့်ပါ\"}\n                      />\n                      <button\n                        type=\"button\"\n                        onClick={() =>\n                          setPasswordVisible(\n                            !passwordVisible,\n                          )\n                        }\n                        className=\"absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-950 dark:hover:text-white\"\n                        aria-label={passwordVisible ? \"စကားဝှက် ဖျောက်ရန်\" : \"စကားဝှက် ပြရန်\"}\n                      >\n                        {passwordVisible ? (\n                          <EyeOff className=\"size-4\" />\n                        ) : (\n                          <Eye className=\"size-4\" />\n                        )}\n                      </button>\n                    </div>\n                  </div>\n  );\n}"
  },
  "disabledCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function DisabledInput() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <Input\n                      disabled\n                      placeholder={\"Disabled input\"}\n                    />\n                    <Input\n                      disabled\n                      value={\"Cannot be edited\"}\n                      readOnly\n                    />\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function DisabledInput() {\n  return (\n<div className=\"grid w-full max-w-md gap-4\">\n                    <Input\n                      disabled\n                      placeholder={\"ဖြည့်သွင်းခွင့် ပိတ်ထားသည်\"}\n                    />\n                    <Input\n                      disabled\n                      value={\"ပြင်ဆင်၍ မရပါ\"}\n                      readOnly\n                    />\n                  </div>\n  );\n}"
  },
  "errorCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputError() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"invalid-email\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"Email address\"}</label>\n                    <Input\n                      id=\"invalid-email\"\n                      type=\"email\"\n                      defaultValue=\"invalid-email\"\n                      aria-invalid=\"true\"\n                      className=\"border-red-500 focus-visible:ring-red-500/30\"\n                    />\n                    <p className=\"text-sm text-red-600 dark:text-red-400\">{\"Enter a valid email address.\"}</p>\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function InputError() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"invalid-email\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"အီးမေးလ်လိပ်စာ\"}</label>\n                    <Input\n                      id=\"invalid-email\"\n                      type=\"email\"\n                      defaultValue=\"invalid-email\"\n                      aria-invalid=\"true\"\n                      className=\"border-red-500 focus-visible:ring-red-500/30\"\n                    />\n                    <p className=\"text-sm text-red-600 dark:text-red-400\">{\"မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။\"}</p>\n                  </div>\n  );\n}"
  },
  "fileCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function FileInput() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-picture\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"Profile picture\"}</label>\n                    <Input\n                      id=\"demo-picture\"\n                      type=\"file\"\n                      accept=\"image/*\"\n                    />\n                  </div>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\n\nexport function FileInput() {\n  return (\n<div className=\"grid w-full max-w-md gap-2\">\n                    <label\n                      htmlFor=\"demo-picture\"\n                      className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                    >{\"ကိုယ်ရေးပုံ\"}</label>\n                    <Input\n                      id=\"demo-picture\"\n                      type=\"file\"\n                      accept=\"image/*\"\n                    />\n                  </div>\n  );\n}"
  },
  "formCode": {
    "en": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { Button } from \"@/components/ui/button\";\nimport { User, Mail, KeyRound } from \"lucide-react\";\n\nexport function ContactForm() {\n  return (\n<form\n                    className=\"grid w-full max-w-md gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950\"\n                    onSubmit={(event) =>\n                      event.preventDefault()\n                    }\n                  >\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"form-name\"\n                        className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                      >{\"Full name\"}</label>\n                      <div className=\"relative\">\n                        <User className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                        <Input\n                          id=\"form-name\"\n                          className=\"pl-10\"\n                          placeholder={\"Your name\"}\n                        />\n                      </div>\n                    </div>\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"form-email\"\n                        className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                      >{\"Email\"}</label>\n                      <div className=\"relative\">\n                        <Mail className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                        <Input\n                          id=\"form-email\"\n                          type=\"email\"\n                          className=\"pl-10\"\n                          placeholder=\"you@example.com\"\n                        />\n                      </div>\n                    </div>\n                    <Button\n                      type=\"submit\"\n                      fullWidth\n                      leftIcon={<KeyRound />}\n                    >{\"Submit\"}</Button>\n                  </form>\n  );\n}",
    "my": "\"use client\";\nimport React, { useState } from \"react\";\nimport { Input } from \"@/components/ui/input\";\nimport { Button } from \"@/components/ui/button\";\nimport { User, Mail, KeyRound } from \"lucide-react\";\n\nexport function ContactForm() {\n  return (\n<form\n                    className=\"grid w-full max-w-md gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950\"\n                    onSubmit={(event) =>\n                      event.preventDefault()\n                    }\n                  >\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"form-name\"\n                        className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                      >{\"အမည်အပြည့်အစုံ\"}</label>\n                      <div className=\"relative\">\n                        <User className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                        <Input\n                          id=\"form-name\"\n                          className=\"pl-10\"\n                          placeholder={\"မိမိအမည်\"}\n                        />\n                      </div>\n                    </div>\n                    <div className=\"grid gap-2\">\n                      <label\n                        htmlFor=\"form-email\"\n                        className=\"text-sm font-medium text-slate-950 dark:text-white\"\n                      >{\"အီးမေးလ်\"}</label>\n                      <div className=\"relative\">\n                        <Mail className=\"pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400\" />\n                        <Input\n                          id=\"form-email\"\n                          type=\"email\"\n                          className=\"pl-10\"\n                          placeholder=\"you@example.com\"\n                        />\n                      </div>\n                    </div>\n                    <Button\n                      type=\"submit\"\n                      fullWidth\n                      leftIcon={<KeyRound />}\n                    >{\"ပေးပို့ရန်\"}</Button>\n                  </form>\n  );\n}"
  }
} as const;
const inputPageStyles = `
.input-docs[data-language="my"] :is(h1,h2,h3,p,label,a,td,th) { letter-spacing:normal; line-height:1.9; }
.input-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }
.input-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }
.input-docs[data-language="my"] input { min-height:44px; line-height:1.8; }
.input-docs[data-language="my"] [data-slot="button"] { height:auto; min-height:40px; white-space:nowrap; padding-block:8px; line-height:1.9; }
.input-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }
@media(max-width:640px) { .input-docs[data-language="my"] h1 { font-size:28px; } }
`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const { t } = useInputText();
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
            "flex min-h-[250px] items-center justify-center p-6 sm:p-10",
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
  const { t } = useInputText();
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
  const { t } = useInputText();
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
export default function InputDocumentationPage() {
  const { t, language } = useInputText();
  const [passwordVisible, setPasswordVisible] =
    useState(false);
  return (
    <div lang={language} data-language={language} className="input-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{inputPageStyles}</style>
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
              Input
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
                Input
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Input fields allow users to enter text, email, passwords, numbers, dates and files.")}</p>
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
                description={t("Add the Input component using the Binhlaig UI CLI.")}
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
                description={t("Import the Input component from your UI directory.")}
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
                description={t("Use Input for simple text entry.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.basicCode[language]}>
                  <div className="w-full max-w-md">
                    <Input placeholder={t("Enter your name")} />
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Types */}
            <section>
              <SectionTitle
                id="types"
                title={t("Input Types")}
                description={t("Input supports all standard HTML input types.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.typesCode[language]}>
                  <div className="grid w-full max-w-md gap-4">
                    <Input
                      type="text"
                      placeholder={t("Text")}
                    />
                    <Input
                      type="email"
                      placeholder={t("Email address")}
                    />
                    <Input
                      type="password"
                      placeholder={t("Password")}
                    />
                    <Input
                      type="number"
                      placeholder={t("Number")}
                    />
                    <Input type="date" />
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Label */}
            <section>
              <SectionTitle
                id="label"
                title={t("With Label")}
                description={t("Use a label to clearly identify the requested value.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.labelCode[language]}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-email"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >{t("Email address")}</label>
                    <Input
                      id="demo-email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Description */}
            <section>
              <SectionTitle
                id="description"
                title={t("With Description")}
                description={t("Supporting text can explain the expected input value.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.descriptionCode[language]}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-username"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >{t("Username")}</label>
                    <Input
                      id="demo-username"
                      placeholder="binhlaig"
                    />
                    <p className="text-sm text-slate-500 dark:text-slate-400">{t("This will be your public display name.")}</p>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Icons */}
            <section>
              <SectionTitle
                id="icon"
                title={t("With Icons")}
                description={t("Add an icon to provide visual context.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.iconCode[language]}>
                  <div className="grid w-full max-w-md gap-4">
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        className="pl-10"
                        placeholder={t("Search components...")}
                      />
                    </div>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        className="pl-10"
                        type="email"
                        placeholder={t("Email address")}
                      />
                    </div>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        className="pl-10"
                        placeholder={t("Username")}
                      />
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Password */}
            <section>
              <SectionTitle
                id="password"
                title={t("Password Input")}
                description={t("Allow users to show or hide their password.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.passwordCode[language]}>
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                      <Input
                        type={
                          passwordVisible
                            ? "text"
                            : "password"
                        }
                        className="px-10"
                        placeholder={t("Enter password")}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setPasswordVisible(
                            !passwordVisible,
                          )
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-950 dark:hover:text-white"
                        aria-label={t(passwordVisible ? "Hide password" : "Show password")}
                      >
                        {passwordVisible ? (
                          <EyeOff className="size-4" />
                        ) : (
                          <Eye className="size-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Disabled */}
            <section>
              <SectionTitle
                id="disabled"
                title={t("Disabled State")}
                description={t("Disabled inputs cannot be edited or focused.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.disabledCode[language]}>
                  <div className="grid w-full max-w-md gap-4">
                    <Input
                      disabled
                      placeholder={t("Disabled input")}
                    />
                    <Input
                      disabled
                      value={t("Cannot be edited")}
                      readOnly
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Error */}
            <section>
              <SectionTitle
                id="error"
                title={t("Error State")}
                description={t("Use aria-invalid and error styles for invalid values.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.errorCode[language]}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="invalid-email"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >{t("Email address")}</label>
                    <Input
                      id="invalid-email"
                      type="email"
                      defaultValue="invalid-email"
                      aria-invalid="true"
                      className="border-red-500 focus-visible:ring-red-500/30"
                    />
                    <p className="text-sm text-red-600 dark:text-red-400">{t("Enter a valid email address.")}</p>
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* File */}
            <section>
              <SectionTitle
                id="file"
                title={t("File Input")}
                description={t("Use the file input type to upload files.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.fileCode[language]}>
                  <div className="grid w-full max-w-md gap-2">
                    <label
                      htmlFor="demo-picture"
                      className="text-sm font-medium text-slate-950 dark:text-white"
                    >{t("Profile picture")}</label>
                    <Input
                      id="demo-picture"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </CodePreview>
              </div>
            </section>
            {/* Form */}
            <section>
              <SectionTitle
                id="form"
                title={t("Form Example")}
                description={t("Combine inputs and buttons to create a complete form.")}
              />
              <div className="mt-6">
                <CodePreview code={inputExamples.formCode[language]}>
                  <form
                    className="grid w-full max-w-md gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
                    onSubmit={(event) =>
                      event.preventDefault()
                    }
                  >
                    <div className="grid gap-2">
                      <label
                        htmlFor="form-name"
                        className="text-sm font-medium text-slate-950 dark:text-white"
                      >{t("Full name")}</label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="form-name"
                          className="pl-10"
                          placeholder={t("Your name")}
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <label
                        htmlFor="form-email"
                        className="text-sm font-medium text-slate-950 dark:text-white"
                      >{t("Email")}</label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="form-email"
                          type="email"
                          className="pl-10"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <Button
                      type="submit"
                      fullWidth
                      leftIcon={<KeyRound />}
                    >{t("Submit")}</Button>
                  </form>
                </CodePreview>
              </div>
            </section>
            {/* API */}
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("The Input component accepts standard React input properties.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">
                          Prop
                        </th>
                        <th className="px-5 py-4 font-medium">
                          Type
                        </th>
                        <th className="px-5 py-4 font-medium">{t("Default")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="type"
                        type="React.HTMLInputTypeAttribute"
                        defaultValue={`"text"`}
                        description={t("Controls the type of input value.")}
                      />
                      <ApiRow
                        name="placeholder"
                        type="string"
                        defaultValue="—"
                        description={t("Displays temporary hint text.")}
                      />
                      <ApiRow
                        name="value"
                        type="string | number"
                        defaultValue="—"
                        description={t("Controls the current input value.")}
                      />
                      <ApiRow
                        name="defaultValue"
                        type="string | number"
                        defaultValue="—"
                        description={t("Sets the initial uncontrolled value.")}
                      />
                      <ApiRow
                        name="disabled"
                        type="boolean"
                        defaultValue="false"
                        description={t("Prevents interaction with the input.")}
                      />
                      <ApiRow
                        name="readOnly"
                        type="boolean"
                        defaultValue="false"
                        description={t("Prevents editing while allowing focus.")}
                      />
                      <ApiRow
                        name="required"
                        type="boolean"
                        defaultValue="false"
                        description={t("Marks the input as required.")}
                      />
                      <ApiRow
                        name="aria-invalid"
                        type="boolean"
                        defaultValue="false"
                        description={t("Marks the current value as invalid.")}
                      />
                      <ApiRow
                        name="className"
                        type="string"
                        defaultValue="—"
                        description={t("Adds custom Tailwind CSS classes.")}
                      />
                      <ApiRow
                        name="onChange"
                        type="React.ChangeEventHandler<HTMLInputElement>"
                        defaultValue="—"
                        description={t("Runs whenever the input value changes.")}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/docs/components/card"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold text-slate-950 dark:text-white">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Card
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/input/page.tsx"
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
  type,
  defaultValue,
  description,
}: {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}) {
  const { t } = useInputText();
  return (
    <tr className="bg-white dark:bg-slate-950">
      <td className="px-5 py-4 align-top">
        <code className="rounded-md bg-blue-50 px-1.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          {name}
        </code>
      </td>
      <td className="max-w-[300px] px-5 py-4 align-top">
        <code className="text-xs leading-5 text-purple-600 dark:text-purple-400">
          {type}
        </code>
      </td>
      <td className="px-5 py-4 align-top">
        <code className="text-xs text-slate-600 dark:text-slate-400">
          {defaultValue}
        </code>
      </td>
      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {t(description)}
      </td>
    </tr>
  );
}