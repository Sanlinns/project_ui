"use client"
import { ComponentInstallation } from "@/components/docs/component-installation"
import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
<<<<<<< HEAD
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
=======
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
>>>>>>> 94a0d7b (update Form UI)
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clipboard,
  Code2,
  ExternalLink,
  Loader2,
  Mail,
  Save,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormActions,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  FormSection,
  FormSectionDescription,
  FormSectionHeader,
  FormSectionTitle,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
type PreviewTab = "preview" | "code"
const importCode = `import {

  Form,

  FormActions,

  FormControl,

  FormDescription,

  FormField,

  FormLabel,

  FormMessage,

  FormSection,

  FormSectionDescription,

  FormSectionHeader,

  FormSectionTitle,

} from "@/components/ui/form"`
const formMyanmar: Record<string, string> = {
  "Five interactive examples, all using React Hook Form + Zod with Binhlaig UI Form primitives.": "Binhlaig UI Form၊ React Hook Form နှင့် Zod အသုံးပြုထားသော နမူနာ ၅ ခု။",
  "Preview the validation and view the complete copyable source code.": "Validation ကို စမ်းသပ်ပြီး Code အပြည့်အစုံကို ကူးယူနိုင်ပါတယ်။",
  "All examples below use useForm with zodResolver(schema), handleSubmit, register, and FormMessage.": "အောက်ပါနမူနာအားလုံးတွင် useForm၊ zodResolver(schema)၊ handleSubmit၊ register နှင့် FormMessage တို့ကို အသုံးပြုထားပါတယ်။",

  "Copy code": "Code ကူးယူရန်",
  Copied: "ကူးယူပြီးပါပြီ",
  "Copy failed": "ကူးယူ၍ မရပါ",
  Components: "Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A gesture-enabled panel that slides from an edge of the screen for menus, filters, forms and details.":
    "မျက်နှာပြင်အစွန်းမှ ဆွဲဖွင့်နိုင်သော panel ဖြစ်ပြီး မီနူး၊ ရှာဖွေစစ်ထုတ်မှု၊ ဖောင်နှင့် အသေးစိတ်အချက်အလက်များ ပြသရန် အသုံးပြုနိုင်ပါတယ်။",
  "View examples": "နမူနာများကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  Installation: "ထည့်သွင်းခြင်း",
  "Initialize Binhlaig UI and install Drawer with your preferred installer.":
    "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Drawer ကို ထည့်သွင်းပါ။",
  "Initialize first": "ဦးစွာ စတင်ပြင်ဆင်ပါ",
  Terminal: "Terminal",
  "Copy command": "Command ကူးယူရန်",
  Import: "Import လုပ်ခြင်း",
  "Import Drawer primitives from your UI directory.":
    "မိမိ UI directory မှ Drawer components များကို import လုပ်ပါ။",
  "Bottom Drawer": "အောက်ခြေမှ ဖွင့်သော Drawer",
  "The default drawer opens from the bottom and supports swipe-to-dismiss.":
    "ပုံမှန် Drawer သည် အောက်ခြေမှ ဖွင့်ပြီး ပွတ်ဆွဲ၍ ပိတ်နိုင်ပါတယ်။",
  "Open drawer": "Drawer ဖွင့်ရန်",
  Notifications: "အသိပေးချက်များ",
  "You are all caught up.": "အသိပေးချက်အားလုံးကို ဖတ်ပြီးပါပြီ။",
  "Drawer content goes here.": "ပြသလိုသော အကြောင်းအရာများကို ဒီနေရာမှာ ထည့်ပါ။",
  Close: "ပိတ်ရန်",
  "Close drawer": "Drawer ပိတ်ရန်",
  "Side Drawers": "ဘေးမှ ဖွင့်သော Drawer များ",
  "Match the drawer side with the swipe direction used to dismiss it.":
    "Drawer ဖွင့်သည့်ဘက်နှင့် ပိတ်ရန် ပွတ်ဆွဲသည့်ဦးတည်ရာကို ကိုက်ညီအောင် သတ်မှတ်ပါ။",
  "Left drawer": "ဘယ်ဘက် Drawer",
  Navigation: "လမ်းညွှန်မီနူး",
  "Browse project sections.": "Project ၏ အပိုင်းများကို ရွေးချယ်ကြည့်ပါ။",
  "Right drawer": "ညာဘက် Drawer",
  Filters: "စစ်ထုတ်မှုများ",
  "Refine the displayed results.":
    "ပြသထားသော ရလဒ်များကို လိုအပ်သလို စစ်ထုတ်ပါ။",
  Category: "အမျိုးအစား",
  All: "အားလုံး",
  Dashboard: "အနှစ်ချုပ်",
  Settings: "ဆက်တင်များ",
  "Form Drawer": "ဖောင်ပါသော Drawer",
  "Use Drawer for compact mobile-friendly forms.":
    "ဖုန်းပေါ်တွင် အသုံးပြုရလွယ်သော ဖောင်ငယ်များအတွက် Drawer ကို အသုံးပြုပါ။",
  "Send feedback": "အကြံပြုချက် ပေးရန်",
  "Tell us how we can improve.":
    "ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်နိုင်ရန် အကြံပြုချက် ပေးပါ။",
  Feedback: "အကြံပြုချက်",
  "Write your feedback...": "မိမိအကြံပြုချက်ကို ရေးပါ…",
  Cancel: "မလုပ်တော့ပါ",
  Submit: "ပေးပို့ရန်",
  "Controlled State": "State ဖြင့် ထိန်းချုပ်ခြင်း",
  "Control the drawer with React state.":
    "Drawer အဖွင့်၊ အပိတ်ကို React state ဖြင့် ထိန်းချုပ်ပါ။",
  "Open controlled drawer": "State ဖြင့် Drawer ဖွင့်ရန်",
  "Controlled drawer": "State ဖြင့် ထိန်းချုပ်သော Drawer",
  "The parent controls the open state.":
    "အပြင်ဘက် component မှ အဖွင့်၊ အပိတ် state ကို ထိန်းချုပ်ထားပါတယ်။",
  "Controlled drawer content.":
    "State ဖြင့် ထိန်းချုပ်သော Drawer ၏ အကြောင်းအရာ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Drawer source with the latest registry version.":
    "Drawer source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main components and custom props available in the Binhlaig UI Drawer.":
    "Binhlaig UI Drawer တွင် အသုံးပြုနိုင်သော components နှင့် custom props များ။",
  Component: "Component",
  Purpose: "အသုံးဝင်ပုံ",
  "DrawerContent prop": "DrawerContent prop",
  Values: "သတ်မှတ်နိုင်သော တန်ဖိုးများ",
  Default: "ပုံမှန်တန်ဖိုး",
  "top/bottom only": "အပေါ် / အောက်ဘက်တွင်သာ",
  "Previous component": "ယခင် Component",
  Next: "နောက်သို့",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  Preview: "နမူနာ",
  Code: "Code",
  "Native Beta": "Native (စမ်းသပ်ဆဲ)",
  "Shadcn Stable": "Shadcn (တည်ငြိမ်သော version)",
  "Controls state and swipe behavior.":
    "State နှင့် ပွတ်ဆွဲမှုကို ထိန်းချုပ်ပါတယ်။",
  "Opens the drawer.": "Drawer ကို ဖွင့်ပေးပါတယ်။",
  "Renders popup, overlay and viewport.":
    "Popup၊ နောက်ခံ overlay နှင့် viewport ကို ပြသပေးပါတယ်။",
  "Groups title and description.":
    "ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းထားပါတယ်။",
  "Accessible drawer title.":
    "အသုံးပြုသူအားလုံးအတွက် ဖတ်ရှုနိုင်သော Drawer ခေါင်းစဉ်။",
  "Accessible supporting text.": "ခေါင်းစဉ်အတွက် ဖြည့်စွက်ရှင်းလင်းချက်။",
  "Scrollable selectable content area.":
    "Scroll လုပ်ပြီး စာသားရွေးချယ်နိုင်သော အကြောင်းအရာနေရာ။",
  "Aligns drawer actions.": "လုပ်ဆောင်ချက်ခလုတ်များကို စီထားပါတယ်။",
  "Closes the drawer.": "Drawer ကို ပိတ်ပေးပါတယ်။",
  Name: "အမည်",
  "Your name": "မိမိအမည်",
  Email: "အီးမေးလ်",
  "We will only use this email to reply.":
    "ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ ဒီအီးမေးလ်ကို အသုံးပြုပါမယ်။",
  Message: "စာတို",
  "How can we help?": "ဘာအတွက် ကူညီပေးရမလဲ။",
  "Message submitted successfully.": "စာတိုကို ပေးပို့ပြီးပါပြီ။",
  "Accessible layout primitives for labels, controls, helper text, validation messages, sections and actions.":
    "Label၊ input၊ ရှင်းလင်းချက်၊ အမှားသတိပေးချက်နှင့် လုပ်ဆောင်ချက်များကို စနစ်တကျ စီစဉ်တည်ဆောက်ရန် Form components များ။",
  "Initialize Binhlaig UI and install Form using your preferred installer.":
    "Binhlaig UI ကို စတင်ပြင်ဆင်ပြီး မိမိနှစ်သက်သော installer ဖြင့် Form ကို ထည့်သွင်းပါ။",
  "Import the Form layout primitives from your UI directory.":
    "မိမိ UI directory မှ Form components များကို import လုပ်ပါ။",
  Usage: "အသုံးပြုပုံ",
  "Build a basic form using field, label, control and action primitives.":
    "Field၊ label၊ input နှင့် action components များဖြင့် ဖောင်တစ်ခု တည်ဆောက်ပါ။",
  "Enter your name": "မိမိအမည်ကို ဖြည့်ပါ",
  Validation: "အချက်အလက် စစ်ဆေးခြင်း",
  "Use FormDescription and FormMessage to communicate field state.":
    "Field အခြေအနေကို ရှင်းပြရန် FormDescription နှင့် FormMessage ကို အသုံးပြုပါ။",
  "We will never share your email.": "မိမိအီးမေးလ်ကို အခြားသူများထံ မမျှဝေပါ။",
  "Enter a valid email address.": "မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။",
  Continue: "ဆက်လက်လုပ်ဆောင်ရန်",
  "Form Sections": "ဖောင်အပိုင်းများ",
  "Group related fields in a bordered section.":
    "ဆက်စပ်သော fields များကို ဘောင်ပါသော အပိုင်းတစ်ခုတွင် စုစည်းပါ။",
  "Profile information": "ကိုယ်ရေးအချက်အလက်",
  "Update your public profile details.":
    "အများမြင်နိုင်သော ကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။",
  "Display name": "ပြသမည့်အမည်",
  Bio: "မိမိအကြောင်း",
  "Tell us about yourself...": "မိမိအကြောင်း ရေးပါ…",
  "Save changes": "ပြင်ဆင်ချက် သိမ်းရန်",
  "Checkbox and Select": "Checkbox နှင့် ရွေးချယ်မှု",
  "Form primitives work with native controls and custom UI components.":
    "Form components များကို native input များနှင့် custom UI components များဖြင့် တွဲသုံးနိုင်ပါတယ်။",
  "Email notifications": "အီးမေးလ် အသိပေးချက်များ",
  "Receive updates about your account.":
    "မိမိအကောင့်ဆိုင်ရာ အသိပေးချက်များ လက်ခံရန်။",
  Role: "လုပ်ဆောင်ရသည့် အခန်းကဏ္ဍ",
  Developer: "Developer",
  Designer: "Designer",
  Manager: "မန်နေဂျာ",
  "Save settings": "ဆက်တင် သိမ်းရန်",
  "Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state.":
    "တန်ဖိုးများ၊ validation error များနှင့် ပေးပို့မှုအခြေအနေကို ထိန်းချုပ်ရန် Binhlaig Form ကို React Hook Form နှင့် ချိတ်ဆက်ပါ။",
  "Install React Hook Form": "React Hook Form ထည့်သွင်းရန်",
  "Submit State": "ပေးပို့မှု အခြေအနေ",
  "Disable the submit action and show progress while saving.":
    "သိမ်းဆည်းနေစဉ် ထပ်မနှိပ်နိုင်အောင် ခလုတ်ပိတ်ထားပြီး လုပ်ဆောင်မှုအခြေအနေကို ပြပါ။",
  "Project name": "Project အမည်",
  "Replace an older Form source with the latest registry version.":
    "Form source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Components included in the Binhlaig UI Form layout.":
    "Binhlaig UI Form တွင် ပါဝင်သော components များ။",
  "Name is required.": "အမည် ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Name must be at least 2 characters.":
    "အမည်မှာ အနည်းဆုံး စာလုံး ၂ လုံး ပါရပါမယ်။",
  "Email is required.": "အီးမေးလ် ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Message is required.": "စာတို ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Message must be at least 10 characters.":
    "စာတိုမှာ အနည်းဆုံး စာလုံး ၁၀ လုံး ပါရပါမယ်။",
  "Submitting...": "ပေးပို့နေသည်…",
  "Submit message": "စာတို ပေးပို့ရန်",
  "Saving...": "သိမ်းဆည်းနေသည်…",
  "Save project": "Project သိမ်းရန်",
  "Root form layout.": "ဖောင်၏ အခြေခံ layout။",
  "Groups a single field.": "Field တစ်ခု၏ အစိတ်အပိုင်းများကို စုစည်းပေးပါတယ်။",
  "Accessible field label.": "Field အတွက် ဖတ်ရှုရလွယ်သော label။",
  "Wraps an input control.": "Input control ကို ဝန်းရံထားပါတယ်။",
  "Displays helper text.": "အသုံးပြုနည်း ရှင်းလင်းချက်ကို ပြပါတယ်။",
  "Displays validation feedback.":
    "Validation ရလဒ်နှင့် အမှားစာသားကို ပြပါတယ်။",
  "Groups related fields.": "ဆက်စပ်သော fields များကို စုစည်းပါတယ်။",
  "Groups section heading text.":
    "အပိုင်း၏ ခေါင်းစဉ်နှင့် ရှင်းလင်းချက်ကို စုစည်းပါတယ်။",
  "Section heading.": "အပိုင်း၏ ခေါင်းစဉ်။",
  "Section supporting text.": "အပိုင်းအတွက် ဖြည့်စွက်ရှင်းလင်းချက်။",
<<<<<<< HEAD
  "Aligns submit and cancel actions.": "ပေးပို့ရန်နှင့် မလုပ်တော့ရန် ခလုတ်များကို စီထားပါတယ်။",
  "Copy install command": "Install command ကူးယူရန်",
  "Install form validation packages": "Form Validation Packages ထည့်သွင်းရန်",
  "What each package does": "Package တစ်ခုချင်းစီ၏ လုပ်ဆောင်ချက်",
  "Creates and manages field values, touched state, errors and form submission.": "Field တန်ဖိုး၊ touched state၊ error နှင့် submit အခြေအနေကို ထိန်းချုပ်ပေးပါတယ်။",
  "Defines a typed validation schema and meaningful field error messages.": "Type-safe Validation Schema နှင့် Field Error Message များ သတ်မှတ်ပေးပါတယ်။",
  "Connects Zod validation to React Hook Form through zodResolver.": "zodResolver မှတစ်ဆင့် Zod ကို React Hook Form နဲ့ ချိတ်ဆက်ပေးပါတယ်။",
  "Binhlaig UI provides the visual form layout, labels and validation-message components.": "Binhlaig UI က Form Layout၊ Label နဲ့ Validation Message UI ကို ပံ့ပိုးပေးပါတယ်။",
  "Validated sign-in example": "Validation ပါသော Login နမူနာ",
  "Try leaving the fields blank, using an invalid email or entering a short password.": "Field မဖြည့်ဘဲ၊ Email မှားထည့်ပြီး သို့မဟုတ် Password တိုတိုထည့်ကာ စမ်းသပ်ကြည့်ပါ။",
  "Email address": "အီးမေးလ်လိပ်စာ",
  "Password": "စကားဝှက်",
  "Sign in": "ဝင်ရောက်ရန်",
  "Valid form data (demo only). No login request was sent.": "Form Validation အောင်မြင်ပါပြီ (Demo သာဖြစ်ပြီး Login API မခေါ်ထားပါ)။",
  "Enter a valid email.": "မှန်ကန်သော အီးမေးလ်လိပ်စာ ထည့်ပါ။",
  "Password is required.": "စကားဝှက် ဖြည့်ရန် လိုအပ်ပါတယ်။",
  "Password must be at least 8 characters.": "စကားဝှက် အနည်းဆုံး ၈ လုံး ရှိရပါမယ်။",
  "How validation works": "Validation အလုပ်လုပ်ပုံ",
  "Zod checks email format and password length before onSubmit runs.": "onSubmit မလုပ်ဆောင်ခင် Zod က Email Format နဲ့ Password အရှည်ကို စစ်ဆေးပါတယ်။",
  "Errors are shown below their inputs with FormMessage; invalid inputs use aria-invalid.": "Error တွေကို FormMessage နဲ့ Input အောက်မှာ ပြပြီး မမှန်တဲ့ Input တွေမှာ aria-invalid ကို သတ်မှတ်ထားပါတယ်။",
  "The submit button is disabled while the form is submitting.": "Submit လုပ်နေစဉ် Button ကို Disabled လုပ်ထားပါတယ်။",
  "This is a validation demo, not an authentication service.": "ဒီဥပမာက Validation Demo ဖြစ်ပြီး Authentication Service မဟုတ်ပါ။"
=======
  "Aligns submit and cancel actions.":
    "ပေးပို့ရန်နှင့် မလုပ်တော့ရန် ခလုတ်များကို စီထားပါတယ်။",
  "Copy install command": "Install command ကူးယူရန်",
>>>>>>> 94a0d7b (update Form UI)
}
function useFormText() {
  const { language } = useLanguage()
  const t = (text: string) =>
    language === "my" ? (formMyanmar[text] ?? text) : text
  return { language, t }
}
const formExamples = {
  basicCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function BasicForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-name`}>Name</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-name`}\n            aria-invalid={Boolean(form.formState.errors.name)}\n            aria-describedby={`${formId}-name-error`}\n            {...form.register("name")}\n            autoComplete="name"\n            placeholder="Enter your name"\n          />\n        </FormControl>\n\n        {form.formState.errors.name && (\n          <FormMessage id={`${formId}-name-error`}>\n            {form.formState.errors.name.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function BasicForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-name`}>အမည်</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-name`}\n            aria-invalid={Boolean(form.formState.errors.name)}\n            aria-describedby={`${formId}-name-error`}\n            {...form.register("name")}\n            autoComplete="name"\n            placeholder="မိမိအမည်ကို ဖြည့်ပါ"\n          />\n        </FormControl>\n\n        {form.formState.errors.name && (\n          <FormMessage id={`${formId}-name-error`}>\n            {form.formState.errors.name.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
  validationCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function EmailForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    email: z.string().trim().email("Enter a valid email address.").max(200),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { email: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-email`}>Email</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-email`}\n            aria-invalid={Boolean(form.formState.errors.email)}\n            aria-describedby={`${formId}-email-description ${formId}-email-error`}\n            {...form.register("email")}\n            type="email"\n            autoComplete="email"\n            placeholder="you@example.com"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-email-description`}>\n          We only use this email to reply.\n        </FormDescription>\n        {form.formState.errors.email && (\n          <FormMessage id={`${formId}-email-error`}>\n            {form.formState.errors.email.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function EmailForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    email: z\n      .string()\n      .trim()\n      .email("မှန်ကန်သော အီးမေးလ်လိပ်စာ ဖြည့်ပါ။")\n      .max(200),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { email: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-email`}>အီးမေးလ်</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-email`}\n            aria-invalid={Boolean(form.formState.errors.email)}\n            aria-describedby={`${formId}-email-description ${formId}-email-error`}\n            {...form.register("email")}\n            type="email"\n            autoComplete="email"\n            placeholder="you@example.com"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-email-description`}>\n          ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါသည်။\n        </FormDescription>\n        {form.formState.errors.email && (\n          <FormMessage id={`${formId}-email-error`}>\n            {form.formState.errors.email.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
  sectionCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Textarea } from "@/components/ui/textarea"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function ProfileForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),\n    bio: z.string().max(240, "Use 240 characters or fewer."),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "", bio: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormSection>\n        <FormSectionHeader>\n          <FormSectionTitle>Profile information</FormSectionTitle>\n          <FormSectionDescription>\n            Update your display name and bio.\n          </FormSectionDescription>\n        </FormSectionHeader>\n        <FormField>\n          <FormLabel htmlFor={`${formId}-name`}>Display name</FormLabel>\n          <FormControl>\n            <Input\n              id={`${formId}-name`}\n              aria-invalid={Boolean(form.formState.errors.name)}\n              aria-describedby={`${formId}-name-error`}\n              {...form.register("name")}\n              autoComplete="name"\n              placeholder="Enter your name"\n            />\n          </FormControl>\n\n          {form.formState.errors.name && (\n            <FormMessage id={`${formId}-name-error`}>\n              {form.formState.errors.name.message}\n            </FormMessage>\n          )}\n        </FormField>\n        <FormField>\n          <FormLabel htmlFor={`${formId}-bio`}>Bio</FormLabel>\n          <FormControl>\n            <Textarea\n              id={`${formId}-bio`}\n              aria-invalid={Boolean(form.formState.errors.bio)}\n              aria-describedby={`${formId}-bio-error`}\n              {...form.register("bio")}\n              rows={4}\n              placeholder="Tell us about yourself..."\n            />\n          </FormControl>\n\n          {form.formState.errors.bio && (\n            <FormMessage id={`${formId}-bio-error`}>\n              {form.formState.errors.bio.message}\n            </FormMessage>\n          )}\n        </FormField>\n      </FormSection>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Textarea } from "@/components/ui/textarea"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function ProfileForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),\n    bio: z.string().max(240, "စာလုံး ၂၄၀ အထိသာ ဖြည့်ပါ။"),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "", bio: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormSection>\n        <FormSectionHeader>\n          <FormSectionTitle>ကိုယ်ရေးအချက်အလက်</FormSectionTitle>\n          <FormSectionDescription>\n            ပြသမည့်အမည်နှင့် မိမိအကြောင်းကို ပြင်ဆင်ပါ။\n          </FormSectionDescription>\n        </FormSectionHeader>\n        <FormField>\n          <FormLabel htmlFor={`${formId}-name`}>ပြသမည့်အမည်</FormLabel>\n          <FormControl>\n            <Input\n              id={`${formId}-name`}\n              aria-invalid={Boolean(form.formState.errors.name)}\n              aria-describedby={`${formId}-name-error`}\n              {...form.register("name")}\n              autoComplete="name"\n              placeholder="မိမိအမည်ကို ဖြည့်ပါ"\n            />\n          </FormControl>\n\n          {form.formState.errors.name && (\n            <FormMessage id={`${formId}-name-error`}>\n              {form.formState.errors.name.message}\n            </FormMessage>\n          )}\n        </FormField>\n        <FormField>\n          <FormLabel htmlFor={`${formId}-bio`}>မိမိအကြောင်း</FormLabel>\n          <FormControl>\n            <Textarea\n              id={`${formId}-bio`}\n              aria-invalid={Boolean(form.formState.errors.bio)}\n              aria-describedby={`${formId}-bio-error`}\n              {...form.register("bio")}\n              rows={4}\n              placeholder="မိမိအကြောင်း ရေးပါ..."\n            />\n          </FormControl>\n\n          {form.formState.errors.bio && (\n            <FormMessage id={`${formId}-bio-error`}>\n              {form.formState.errors.bio.message}\n            </FormMessage>\n          )}\n        </FormField>\n      </FormSection>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
  settingsCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function SettingsForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    role: z.enum(["developer", "designer", "manager"]),\n    notifications: z.boolean(),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { role: "developer", notifications: false },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-role`}>Role</FormLabel>\n        <FormControl>\n          <select\n            id={`${formId}-role`}\n            aria-invalid={Boolean(form.formState.errors.role)}\n            aria-describedby={`${formId}-role-error`}\n            {...form.register("role")}\n            className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm"\n          >\n            <option value="developer">Developer</option>\n            <option value="designer">Designer</option>\n            <option value="manager">Manager</option>\n          </select>\n        </FormControl>\n\n        {form.formState.errors.role && (\n          <FormMessage id={`${formId}-role-error`}>\n            {form.formState.errors.role.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-notifications`}>\n          Email notifications\n        </FormLabel>\n        <FormControl>\n          <input\n            id={`${formId}-notifications`}\n            aria-invalid={Boolean(form.formState.errors.notifications)}\n            aria-describedby={`${formId}-notifications-description ${formId}-notifications-error`}\n            type="checkbox"\n            {...form.register("notifications")}\n            className="size-4 accent-blue-600"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-notifications-description`}>\n          Receive updates about your account.\n        </FormDescription>\n        {form.formState.errors.notifications && (\n          <FormMessage id={`${formId}-notifications-error`}>\n            {form.formState.errors.notifications.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function SettingsForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    role: z.enum(["developer", "designer", "manager"]),\n    notifications: z.boolean(),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { role: "developer", notifications: false },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-role`}>ရာထူး</FormLabel>\n        <FormControl>\n          <select\n            id={`${formId}-role`}\n            aria-invalid={Boolean(form.formState.errors.role)}\n            aria-describedby={`${formId}-role-error`}\n            {...form.register("role")}\n            className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm"\n          >\n            <option value="developer">Developer</option>\n            <option value="designer">Designer</option>\n            <option value="manager">Manager</option>\n          </select>\n        </FormControl>\n\n        {form.formState.errors.role && (\n          <FormMessage id={`${formId}-role-error`}>\n            {form.formState.errors.role.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-notifications`}>\n          အီးမေးလ် အသိပေးချက်များ\n        </FormLabel>\n        <FormControl>\n          <input\n            id={`${formId}-notifications`}\n            aria-invalid={Boolean(form.formState.errors.notifications)}\n            aria-describedby={`${formId}-notifications-description ${formId}-notifications-error`}\n            type="checkbox"\n            {...form.register("notifications")}\n            className="size-4 accent-blue-600"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-notifications-description`}>\n          မိမိအကောင့်အကြောင်း update များ လက်ခံရန်။\n        </FormDescription>\n        {form.formState.errors.notifications && (\n          <FormMessage id={`${formId}-notifications-error`}>\n            {form.formState.errors.notifications.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
  reactHookFormCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Textarea } from "@/components/ui/textarea"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function ContactForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),\n    email: z.string().trim().email("Enter a valid email address.").max(200),\n    message: z\n      .string()\n      .trim()\n      .min(10, "Enter at least 10 characters.")\n      .max(2000),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "", email: "", message: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-name`}>Name</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-name`}\n            aria-invalid={Boolean(form.formState.errors.name)}\n            aria-describedby={`${formId}-name-error`}\n            {...form.register("name")}\n            autoComplete="name"\n            placeholder="Enter your name"\n          />\n        </FormControl>\n\n        {form.formState.errors.name && (\n          <FormMessage id={`${formId}-name-error`}>\n            {form.formState.errors.name.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-email`}>Email</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-email`}\n            aria-invalid={Boolean(form.formState.errors.email)}\n            aria-describedby={`${formId}-email-description ${formId}-email-error`}\n            {...form.register("email")}\n            type="email"\n            autoComplete="email"\n            placeholder="you@example.com"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-email-description`}>\n          We only use this email to reply.\n        </FormDescription>\n        {form.formState.errors.email && (\n          <FormMessage id={`${formId}-email-error`}>\n            {form.formState.errors.email.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-message`}>Message</FormLabel>\n        <FormControl>\n          <Textarea\n            id={`${formId}-message`}\n            aria-invalid={Boolean(form.formState.errors.message)}\n            aria-describedby={`${formId}-message-error`}\n            {...form.register("message")}\n            rows={4}\n            placeholder="How can we help?"\n          />\n        </FormControl>\n\n        {form.formState.errors.message && (\n          <FormMessage id={`${formId}-message-error`}>\n            {form.formState.errors.message.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport { Textarea } from "@/components/ui/textarea"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function ContactForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),\n    email: z\n      .string()\n      .trim()\n      .email("မှန်ကန်သော အီးမေးလ်လိပ်စာ ဖြည့်ပါ။")\n      .max(200),\n    message: z\n      .string()\n      .trim()\n      .min(10, "အနည်းဆုံး စာလုံး ၁၀ လုံး ဖြည့်ပါ။")\n      .max(2000),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { name: "", email: "", message: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-name`}>အမည်</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-name`}\n            aria-invalid={Boolean(form.formState.errors.name)}\n            aria-describedby={`${formId}-name-error`}\n            {...form.register("name")}\n            autoComplete="name"\n            placeholder="မိမိအမည်ကို ဖြည့်ပါ"\n          />\n        </FormControl>\n\n        {form.formState.errors.name && (\n          <FormMessage id={`${formId}-name-error`}>\n            {form.formState.errors.name.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-email`}>အီးမေးလ်</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-email`}\n            aria-invalid={Boolean(form.formState.errors.email)}\n            aria-describedby={`${formId}-email-description ${formId}-email-error`}\n            {...form.register("email")}\n            type="email"\n            autoComplete="email"\n            placeholder="you@example.com"\n          />\n        </FormControl>\n        <FormDescription id={`${formId}-email-description`}>\n          ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါသည်။\n        </FormDescription>\n        {form.formState.errors.email && (\n          <FormMessage id={`${formId}-email-error`}>\n            {form.formState.errors.email.message}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor={`${formId}-message`}>စာတို</FormLabel>\n        <FormControl>\n          <Textarea\n            id={`${formId}-message`}\n            aria-invalid={Boolean(form.formState.errors.message)}\n            aria-describedby={`${formId}-message-error`}\n            {...form.register("message")}\n            rows={4}\n            placeholder="ဘာအတွက် ကူညီပေးရမလဲ။"\n          />\n        </FormControl>\n\n        {form.formState.errors.message && (\n          <FormMessage id={`${formId}-message-error`}>\n            {form.formState.errors.message.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
  loadingCode: {
    en: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function LoadingForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    project: z.string().trim().min(2, "Enter at least 2 characters.").max(100),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { project: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-project`}>Project name</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-project`}\n            aria-invalid={Boolean(form.formState.errors.project)}\n            aria-describedby={`${formId}-project-error`}\n            {...form.register("project")}\n            placeholder="Binhlaig UI"\n          />\n        </FormControl>\n\n        {form.formState.errors.project && (\n          <FormMessage id={`${formId}-project-error`}>\n            {form.formState.errors.project.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          Demo submitted successfully. No data was sent to a server.\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "Submitting..." : "Submit"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
    my: '"use client"\n\nimport * as React from "react"\nimport { useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Loader2 } from "lucide-react"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormSectionDescription,\n  FormActions,\n} from "@/components/ui/form"\n\nexport function LoadingForm() {\n  const formId = React.useId()\n  const schema = z.object({\n    project: z\n      .string()\n      .trim()\n      .min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။")\n      .max(100),\n  })\n  type Values = z.infer<typeof schema>\n  const form = useForm<Values>({\n    resolver: zodResolver(schema),\n    defaultValues: { project: "" },\n    mode: "onTouched",\n  })\n  const [success, setSuccess] = React.useState(false)\n  const submitting = React.useRef(false)\n  async function onSubmit(_values: Values) {\n    if (submitting.current) return\n    submitting.current = true\n    setSuccess(false)\n    try {\n      // Demo only. Replace with your authenticated API request.\n      await new Promise<void>((resolve) => setTimeout(resolve, 700))\n      setSuccess(true)\n    } finally {\n      submitting.current = false\n    }\n  }\n  return (\n    <Form\n      noValidate\n      onSubmit={form.handleSubmit(onSubmit)}\n      onChange={() => setSuccess(false)}\n      className="space-y-5"\n    >\n      <FormField>\n        <FormLabel htmlFor={`${formId}-project`}>Project အမည်</FormLabel>\n        <FormControl>\n          <Input\n            id={`${formId}-project`}\n            aria-invalid={Boolean(form.formState.errors.project)}\n            aria-describedby={`${formId}-project-error`}\n            {...form.register("project")}\n            placeholder="Binhlaig UI"\n          />\n        </FormControl>\n\n        {form.formState.errors.project && (\n          <FormMessage id={`${formId}-project-error`}>\n            {form.formState.errors.project.message}\n          </FormMessage>\n        )}\n      </FormField>\n      {success && (\n        <p\n          role="status"\n          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"\n        >\n          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။\n        </p>\n      )}\n      <FormActions>\n        <Button\n          type="submit"\n          disabled={form.formState.isSubmitting}\n          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"\n        >\n          {form.formState.isSubmitting && (\n            <Loader2 className="size-4 animate-spin" aria-hidden="true" />\n          )}\n          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  },
<<<<<<< HEAD
  "zodCode": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions } from \"@/components/ui/form\"\n\nconst schema = z.object({\n  email: z.string().trim().min(1, \"Email is required.\").email(\"Enter a valid email.\"),\n  password: z.string().min(1, \"Password is required.\").min(8, \"Password must be at least 8 characters.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function ZodLoginExample() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =\n    useForm<Values>({\n      resolver: zodResolver(schema),\n      mode: \"onTouched\",\n      defaultValues: { email: \"\", password: \"\" },\n    })\n\n  async function onSubmit(_values: Values) {\n    // Demo only: connect your authentication service here.\n    await Promise.resolve()\n  }\n\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"zod-email\">Email address</FormLabel>\n        <FormControl>\n          <input id=\"zod-email\" type=\"email\" autoComplete=\"email\"\n            placeholder=\"you@example.com\" aria-invalid={!!errors.email}\n            className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-destructive\"\n            {...register(\"email\")} />\n        </FormControl>\n        {errors.email && <FormMessage role=\"alert\">{errors.email.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"zod-password\">Password</FormLabel>\n        <FormControl>\n          <input id=\"zod-password\" type=\"password\" autoComplete=\"current-password\"\n            placeholder=\"At least 8 characters\" aria-invalid={!!errors.password}\n            className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-destructive\"\n            {...register(\"password\")} />\n        </FormControl>\n        {errors.password && <FormMessage role=\"alert\">{errors.password.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\" className=\"text-sm text-emerald-600 dark:text-emerald-400\">Valid form data (demo only). No login request was sent.</p>}\n      <FormActions>\n        <Button type=\"submit\" disabled={isSubmitting}>\n          {isSubmitting ? \"Submitting...\" : \"Sign in\"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions } from \"@/components/ui/form\"\n\nconst schema = z.object({\n  email: z.string().trim().min(1, \"အီးမေးလ် ဖြည့်ရန် လိုအပ်ပါတယ်။\").email(\"မှန်ကန်သော အီးမေးလ်လိပ်စာ ထည့်ပါ။\"),\n  password: z.string().min(1, \"စကားဝှက် ဖြည့်ရန် လိုအပ်ပါတယ်။\").min(8, \"စကားဝှက် အနည်းဆုံး ၈ လုံး ရှိရပါမယ်။\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function ZodLoginExample() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } =\n    useForm<Values>({\n      resolver: zodResolver(schema),\n      mode: \"onTouched\",\n      defaultValues: { email: \"\", password: \"\" },\n    })\n\n  async function onSubmit(_values: Values) {\n    // Demo only: connect your authentication service here.\n    await Promise.resolve()\n  }\n\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"zod-email\">အီးမေးလ်လိပ်စာ</FormLabel>\n        <FormControl>\n          <input id=\"zod-email\" type=\"email\" autoComplete=\"email\"\n            placeholder=\"you@example.com\" aria-invalid={!!errors.email}\n            className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-destructive\"\n            {...register(\"email\")} />\n        </FormControl>\n        {errors.email && <FormMessage role=\"alert\">{errors.email.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"zod-password\">စကားဝှက်</FormLabel>\n        <FormControl>\n          <input id=\"zod-password\" type=\"password\" autoComplete=\"current-password\"\n            placeholder=\"At least 8 characters\" aria-invalid={!!errors.password}\n            className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-destructive\"\n            {...register(\"password\")} />\n        </FormControl>\n        {errors.password && <FormMessage role=\"alert\">{errors.password.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\" className=\"text-sm text-emerald-600 dark:text-emerald-400\">Form Validation အောင်မြင်ပါပြီ (Demo သာဖြစ်ပြီး Login API မခေါ်ထားပါ)။</p>}\n      <FormActions>\n        <Button type=\"submit\" disabled={isSubmitting}>\n          {isSubmitting ? \"Submitting...\" : \"ဝင်ရောက်ရန်\"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}"
  },
  "loadingCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Loader2, CheckCircle2 } from \"lucide-react\"\n\nexport function LoadingForm() {\n  const [loading, setLoading] = React.useState(false)\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setLoading(true)\n                      window.setTimeout(() => setLoading(false), 1200)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-project-name\">{\"Project name\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-project-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder=\"Binhlaig UI\"\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\" disabled={loading}>\n                        {loading ? (\n                          <Loader2 className=\"size-4 animate-spin\" />\n                        ) : (\n                          <CheckCircle2 className=\"size-4\" />\n                        )}\n                        {loading ? \"Saving...\" : \"Save project\"}\n                      </Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Loader2, CheckCircle2 } from \"lucide-react\"\n\nexport function LoadingForm() {\n  const [loading, setLoading] = React.useState(false)\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setLoading(true)\n                      window.setTimeout(() => setLoading(false), 1200)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-project-name\">{\"Project အမည်\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-project-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder=\"Binhlaig UI\"\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\" disabled={loading}>\n                        {loading ? (\n                          <Loader2 className=\"size-4 animate-spin\" />\n                        ) : (\n                          <CheckCircle2 className=\"size-4\" />\n                        )}\n                        {loading ? \"သိမ်းဆည်းနေသည်…\" : \"Project သိမ်းရန်\"}\n                      </Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  }
=======
>>>>>>> 94a0d7b (update Form UI)
} as const
const formPageStyles = `

.form-docs[data-language="my"] :is(h1,h2,h3,p,label,th,td,a) { letter-spacing:normal; line-height:1.9; }

.form-docs[data-language="my"] h1 { font-size:32px; font-weight:600; }

.form-docs[data-language="my"] h2 { font-size:21px; font-weight:600; }

.form-docs[data-language="my"] button { white-space:nowrap; letter-spacing:normal; }

.form-docs[data-language="my"] input:not([type="checkbox"]), .form-docs[data-language="my"] select { min-height:44px; line-height:1.8; }

.form-docs code { font-family:var(--font-geist-mono),var(--font-myanmar),monospace; }

@media(max-width:640px) { .form-docs[data-language="my"] h1 { font-size:28px; } }

`
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}
function SectionTitle({
  id,
  title,
  description,
}: {
  id: string
  title: string
  description?: string
}) {
  const { t } = useFormText()
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">{t(title)}</h2>

      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {t(description)}
        </p>
      )}
    </div>
  )
}
function CodePreview({
  children,
  code,
}: {
  children: React.ReactNode
  code: string
}) {
  const { t } = useFormText()
  const [tab, setTab] = React.useState<PreviewTab>("preview")
  const [copied, setCopied] = React.useState(false)
  const [copyFailed, setCopyFailed] = React.useState(false)
  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopyFailed(false)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopyFailed(true)
    }
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border px-3">
        <div className="flex">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize transition-colors",
                tab === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(item === "preview" ? "Preview" : "Code")}

              {tab === item && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label={t(copied ? "Copied" : "Copy code")}
          title={t(
            copyFailed ? "Copy failed" : copied ? "Copied" : "Copy code",
          )}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>

      {tab === "preview" ? (
        <div className="flex min-h-[320px] items-center justify-center bg-muted/20 p-6 sm:p-10">
          <div className="w-full max-w-xl">{children}</div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-muted/60 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-foreground">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
<<<<<<< HEAD
const rhfZodUsageCodes = {
  "basic": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  name: z.string().trim().min(2, \"Name must have at least 2 characters.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function BasicForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { name: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"basic-name\">Name</FormLabel>\n        <FormControl>\n          <input id=\"basic-name\" type=\"text\" aria-invalid={!!errors.name} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"name\")} />\n        </FormControl>\n        {errors.name && <FormMessage>{errors.name.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  name: z.string().trim().min(2, \"Name must have at least 2 characters.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function BasicForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { name: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"basic-name\">အမည်</FormLabel>\n        <FormControl>\n          <input id=\"basic-name\" type=\"text\" aria-invalid={!!errors.name} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"name\")} />\n        </FormControl>\n        {errors.name && <FormMessage>{errors.name.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n"
  },
  "validation": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  email: z.string().trim().email(\"Enter a valid email address.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function EmailValidationForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { email: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"validation-email\">Email</FormLabel>\n        <FormControl>\n          <input id=\"validation-email\" type=\"email\" aria-invalid={!!errors.email} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"email\")} />\n        </FormControl>\n        <FormDescription>Validated with Zod.</FormDescription>\n        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  email: z.string().trim().email(\"Enter a valid email address.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function EmailValidationForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { email: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"validation-email\">အီးမေးလ်</FormLabel>\n        <FormControl>\n          <input id=\"validation-email\" type=\"email\" aria-invalid={!!errors.email} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"email\")} />\n        </FormControl>\n        <FormDescription>Validated with Zod.</FormDescription>\n        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n"
  },
  "profile": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  name: z.string().trim().min(2, \"Name is required.\"),\n  bio: z.string().trim().min(10, \"Bio must have at least 10 characters.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function ProfileForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { name: \"\", bio: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormSection><FormSectionHeader><FormSectionTitle>Profile information</FormSectionTitle></FormSectionHeader></FormSection>\n      <FormField>\n        <FormLabel htmlFor=\"profile-name\">Display name</FormLabel>\n        <FormControl>\n          <input id=\"profile-name\" type=\"text\" aria-invalid={!!errors.name} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"name\")} />\n        </FormControl>\n        {errors.name && <FormMessage>{errors.name.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"profile-bio\">Bio</FormLabel>\n        <FormControl>\n          <Textarea id=\"profile-bio\" aria-invalid={!!errors.bio} {...register(\"bio\")} />\n        </FormControl>\n        {errors.bio && <FormMessage>{errors.bio.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  name: z.string().trim().min(2, \"Name is required.\"),\n  bio: z.string().trim().min(10, \"Bio must have at least 10 characters.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function ProfileForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { name: \"\", bio: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormSection><FormSectionHeader><FormSectionTitle>Profile information</FormSectionTitle></FormSectionHeader></FormSection>\n      <FormField>\n        <FormLabel htmlFor=\"profile-name\">ပြသမည့်အမည်</FormLabel>\n        <FormControl>\n          <input id=\"profile-name\" type=\"text\" aria-invalid={!!errors.name} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"name\")} />\n        </FormControl>\n        {errors.name && <FormMessage>{errors.name.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"profile-bio\">မိမိအကြောင်း</FormLabel>\n        <FormControl>\n          <Textarea id=\"profile-bio\" aria-invalid={!!errors.bio} {...register(\"bio\")} />\n        </FormControl>\n        {errors.bio && <FormMessage>{errors.bio.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n"
  },
  "settings": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  role: z.enum([\"Developer\", \"Designer\", \"Manager\"]),\n  notifications: z.boolean(),\n})\ntype Values = z.infer<typeof schema>\n\nexport function SettingsForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { role: \"Developer\", notifications: false },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"settings-role\">Role</FormLabel>\n        <FormControl>\n          <select id=\"settings-role\" className=\"h-11 w-full rounded-xl border border-border bg-background px-3\" {...register(\"role\")}>\n            <option value=\"Developer\">Developer</option><option value=\"Designer\">Designer</option><option value=\"Manager\">Manager</option>\n          </select>\n        </FormControl>\n        {errors.role && <FormMessage>{errors.role.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormControl>\n          <input id=\"settings-notifications\" type=\"checkbox\" {...register(\"notifications\")} />\n        </FormControl>\n        <FormLabel htmlFor=\"settings-notifications\">Email notifications</FormLabel>\n        {errors.notifications && <FormMessage>{errors.notifications.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  role: z.enum([\"Developer\", \"Designer\", \"Manager\"]),\n  notifications: z.boolean(),\n})\ntype Values = z.infer<typeof schema>\n\nexport function SettingsForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { role: \"Developer\", notifications: false },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"settings-role\">တာဝန်</FormLabel>\n        <FormControl>\n          <select id=\"settings-role\" className=\"h-11 w-full rounded-xl border border-border bg-background px-3\" {...register(\"role\")}>\n            <option value=\"Developer\">Developer</option><option value=\"Designer\">Designer</option><option value=\"Manager\">Manager</option>\n          </select>\n        </FormControl>\n        {errors.role && <FormMessage>{errors.role.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormControl>\n          <input id=\"settings-notifications\" type=\"checkbox\" {...register(\"notifications\")} />\n        </FormControl>\n        <FormLabel htmlFor=\"settings-notifications\">အီးမေးလ်အသိပေးချက်</FormLabel>\n        {errors.notifications && <FormMessage>{errors.notifications.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n"
  },
  "login": {
    "en": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  email: z.string().trim().email(\"Enter a valid email address.\"),\n  password: z.string().min(8, \"At least 8 characters required.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function LoginForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { email: \"\", password: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"login-email\">Email</FormLabel>\n        <FormControl>\n          <input id=\"login-email\" type=\"email\" aria-invalid={!!errors.email} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"email\")} />\n        </FormControl>\n        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"login-password\">Password</FormLabel>\n        <FormControl>\n          <input id=\"login-password\" type=\"password\" aria-invalid={!!errors.password} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"password\")} />\n        </FormControl>\n        {errors.password && <FormMessage>{errors.password.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n",
    "my": "\"use client\"\nimport { useForm } from \"react-hook-form\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { z } from \"zod\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormActions, FormDescription, FormSection, FormSectionHeader, FormSectionTitle } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\n\nconst schema = z.object({\n  email: z.string().trim().email(\"Enter a valid email address.\"),\n  password: z.string().min(8, \"At least 8 characters required.\"),\n})\ntype Values = z.infer<typeof schema>\n\nexport function LoginForm() {\n  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<Values>({\n    resolver: zodResolver(schema),\n    mode: \"onTouched\",\n    defaultValues: { email: \"\", password: \"\" },\n  })\n  async function onSubmit(_values: Values) {\n    // Demo only: send validated values to your real API here.\n    await Promise.resolve()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"login-email\">အီးမေးလ်</FormLabel>\n        <FormControl>\n          <input id=\"login-email\" type=\"email\" aria-invalid={!!errors.email} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"email\")} />\n        </FormControl>\n        {errors.email && <FormMessage>{errors.email.message}</FormMessage>}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"login-password\">စကားဝှက်</FormLabel>\n        <FormControl>\n          <input id=\"login-password\" type=\"password\" aria-invalid={!!errors.password} className=\"h-11 w-full rounded-xl border border-border bg-background px-3 text-foreground aria-invalid:border-destructive\" {...register(\"password\")} />\n        </FormControl>\n        {errors.password && <FormMessage>{errors.password.message}</FormMessage>}\n      </FormField>\n      {isSubmitSuccessful && <p role=\"status\">Validation passed (demo only).</p>}\n      <FormActions><Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Submitting...\" : \"Submit\"}</Button></FormActions>\n    </Form>\n  )\n}\n"
  }
} as const


type DemoFieldKind = "text" | "email" | "password" | "textarea" | "select" | "checkbox";
type DemoKind = "basic" | "validation" | "profile" | "settings" | "login";
type DemoValues = { name?: string; email?: string; password?: string; bio?: string; role?: string; notifications?: boolean };

const demoSchemas = {
  basic: z.object({ name: z.string().trim().min(2, "Name must have at least 2 characters.") }),
  validation: z.object({ email: z.string().trim().email("Enter a valid email address.") }),
  profile: z.object({
    name: z.string().trim().min(2, "Name must have at least 2 characters."),
    bio: z.string().trim().min(10, "Bio must have at least 10 characters."),
  }),
  settings: z.object({
    role: z.enum(["Developer", "Designer", "Manager"]),
    notifications: z.boolean(),
  }),
  login: z.object({
    email: z.string().trim().email("Enter a valid email address."),
    password: z.string().min(8, "Password must have at least 8 characters."),
  }),
};
const demoFields: Record<DemoKind, { name: keyof DemoValues; kind: DemoFieldKind; title: string; my: string; placeholder?: string }[]> = {
  basic: [{ name: "name", kind: "text", title: "Name", my: "အမည်", placeholder: "Your name" }],
  validation: [{ name: "email", kind: "email", title: "Email", my: "အီးမေးလ်", placeholder: "you@example.com" }],
  profile: [
    { name: "name", kind: "text", title: "Display name", my: "ပြသမည့်အမည်", placeholder: "Your name" },
    { name: "bio", kind: "textarea", title: "Bio", my: "မိမိအကြောင်း", placeholder: "Tell us about yourself..." },
  ],
  settings: [
    { name: "role", kind: "select", title: "Role", my: "တာဝန်", },
    { name: "notifications", kind: "checkbox", title: "Email notifications", my: "အီးမေးလ်အသိပေးချက်" },
  ],
  login: [
    { name: "email", kind: "email", title: "Email", my: "အီးမေးလ်", placeholder: "you@example.com" },
    { name: "password", kind: "password", title: "Password", my: "စကားဝှက်", placeholder: "At least 8 characters" },
  ],
};
function ZodUsagePreview({ kind }: { kind: DemoKind }) {
  const { language } = useFormText();
  // All five examples use the same React Hook Form + Zod resolver workflow.
  const schema = demoSchemas[kind];
  const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<DemoValues>({
    resolver: zodResolver(schema) as any,
    mode: "onTouched",
    defaultValues: { name: "", email: "", password: "", bio: "", role: "Developer", notifications: false },
  });
  async function onSubmit(_values: DemoValues) {
    // UI demonstration only. Never log passwords or pretend API success.
    await Promise.resolve();
  }
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      {kind === "profile" && <FormSection><FormSectionHeader>
        <FormSectionTitle>{language === "my" ? "ကိုယ်ရေးအချက်အလက်" : "Profile information"}</FormSectionTitle>
        <FormSectionDescription>{language === "my" ? "ကိုယ်ရေးအချက်အလက်များကို ဖြည့်ပါ" : "Fill in your profile details"}</FormSectionDescription>
      </FormSectionHeader></FormSection>}
      {demoFields[kind].map((field) => {
        const id = `example-${kind}-${field.name}`;
        const message = errors[field.name]?.message;
        return (
          <FormField key={id} className={field.kind === "checkbox" ? "grid-cols-[auto_1fr] items-center gap-x-3" : undefined}>
            {field.kind !== "checkbox" && <FormLabel htmlFor={id}>{language === "my" ? field.my : field.title}</FormLabel>}
            <FormControl>
              {field.kind === "textarea" ? (
                <Textarea id={id} placeholder={field.placeholder} aria-invalid={!!message} {...register(field.name)} />
              ) : field.kind === "select" ? (
                <select id={id} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground" {...register(field.name)}>
                  <option value="Developer">Developer</option><option value="Designer">Designer</option><option value="Manager">Manager</option>
                </select>
              ) : field.kind === "checkbox" ? (
                <input id={id} type="checkbox" className="size-4" {...register(field.name)} />
              ) : (
                <input id={id} type={field.kind} placeholder={field.placeholder} aria-invalid={!!message}
                  className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/30 aria-invalid:border-destructive"
                  {...register(field.name)} />
              )}
            </FormControl>
            {field.kind === "checkbox" && <FormLabel htmlFor={id}>{language === "my" ? field.my : field.title}</FormLabel>}
            {kind === "validation" && <FormDescription>{language === "my" ? "မှန်ကန်သော အီးမေးလ်ထည့်ပါ" : "We validate the email format with Zod."}</FormDescription>}
            {message && <FormMessage role="alert">{String(message)}</FormMessage>}
          </FormField>
        );
      })}
      {isSubmitSuccessful && <p role="status" className="text-sm text-emerald-600 dark:text-emerald-400">{language === "my" ? "Validation အောင်မြင်ပါသည် (Demo သာဖြစ်သည်)။" : "Validation passed (demo only)."}</p>}
      <FormActions><Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <CheckCircle2 className="size-4" />}
        {language === "my" ? "ပေးပို့ရန်" : "Submit"}
      </Button></FormActions>
=======
function BasicEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-name`}>Name</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-name`}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={`${formId}-name-error`}
            {...form.register("name")}
            autoComplete="name"
            placeholder="Enter your name"
          />
        </FormControl>

        {form.formState.errors.name && (
          <FormMessage id={`${formId}-name-error`}>
            {form.formState.errors.name.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
>>>>>>> 94a0d7b (update Form UI)
    </Form>
  );
}
<<<<<<< HEAD

export default function FormDocumentationPage() {
  const { t, language } = useFormText()
  const [loading, setLoading] = React.useState(false)

=======
function BasicMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-name`}>အမည်</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-name`}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={`${formId}-name-error`}
            {...form.register("name")}
            autoComplete="name"
            placeholder="မိမိအမည်ကို ဖြည့်ပါ"
          />
        </FormControl>

        {form.formState.errors.name && (
          <FormMessage id={`${formId}-name-error`}>
            {form.formState.errors.name.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
function EmailEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    email: z.string().trim().email("Enter a valid email address.").max(200),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-email`}>Email</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-email`}
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={`${formId}-email-description ${formId}-email-error`}
            {...form.register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormControl>
        <FormDescription id={`${formId}-email-description`}>
          We only use this email to reply.
        </FormDescription>
        {form.formState.errors.email && (
          <FormMessage id={`${formId}-email-error`}>
            {form.formState.errors.email.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
    </Form>
  )
}
function EmailMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    email: z
      .string()
      .trim()
      .email("မှန်ကန်သော အီးမေးလ်လိပ်စာ ဖြည့်ပါ။")
      .max(200),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-email`}>အီးမေးလ်</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-email`}
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={`${formId}-email-description ${formId}-email-error`}
            {...form.register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormControl>
        <FormDescription id={`${formId}-email-description`}>
          ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါသည်။
        </FormDescription>
        {form.formState.errors.email && (
          <FormMessage id={`${formId}-email-error`}>
            {form.formState.errors.email.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
function ProfileEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),
    bio: z.string().max(240, "Use 240 characters or fewer."),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", bio: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>Profile information</FormSectionTitle>
          <FormSectionDescription>
            Update your display name and bio.
          </FormSectionDescription>
        </FormSectionHeader>
        <FormField>
          <FormLabel htmlFor={`${formId}-name`}>Display name</FormLabel>
          <FormControl>
            <Input
              id={`${formId}-name`}
              aria-invalid={Boolean(form.formState.errors.name)}
              aria-describedby={`${formId}-name-error`}
              {...form.register("name")}
              autoComplete="name"
              placeholder="Enter your name"
            />
          </FormControl>

          {form.formState.errors.name && (
            <FormMessage id={`${formId}-name-error`}>
              {form.formState.errors.name.message}
            </FormMessage>
          )}
        </FormField>
        <FormField>
          <FormLabel htmlFor={`${formId}-bio`}>Bio</FormLabel>
          <FormControl>
            <Textarea
              id={`${formId}-bio`}
              aria-invalid={Boolean(form.formState.errors.bio)}
              aria-describedby={`${formId}-bio-error`}
              {...form.register("bio")}
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </FormControl>

          {form.formState.errors.bio && (
            <FormMessage id={`${formId}-bio-error`}>
              {form.formState.errors.bio.message}
            </FormMessage>
          )}
        </FormField>
      </FormSection>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
    </Form>
  )
}
function ProfileMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),
    bio: z.string().max(240, "စာလုံး ၂၄၀ အထိသာ ဖြည့်ပါ။"),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", bio: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>ကိုယ်ရေးအချက်အလက်</FormSectionTitle>
          <FormSectionDescription>
            ပြသမည့်အမည်နှင့် မိမိအကြောင်းကို ပြင်ဆင်ပါ။
          </FormSectionDescription>
        </FormSectionHeader>
        <FormField>
          <FormLabel htmlFor={`${formId}-name`}>ပြသမည့်အမည်</FormLabel>
          <FormControl>
            <Input
              id={`${formId}-name`}
              aria-invalid={Boolean(form.formState.errors.name)}
              aria-describedby={`${formId}-name-error`}
              {...form.register("name")}
              autoComplete="name"
              placeholder="မိမိအမည်ကို ဖြည့်ပါ"
            />
          </FormControl>

          {form.formState.errors.name && (
            <FormMessage id={`${formId}-name-error`}>
              {form.formState.errors.name.message}
            </FormMessage>
          )}
        </FormField>
        <FormField>
          <FormLabel htmlFor={`${formId}-bio`}>မိမိအကြောင်း</FormLabel>
          <FormControl>
            <Textarea
              id={`${formId}-bio`}
              aria-invalid={Boolean(form.formState.errors.bio)}
              aria-describedby={`${formId}-bio-error`}
              {...form.register("bio")}
              rows={4}
              placeholder="မိမိအကြောင်း ရေးပါ..."
            />
          </FormControl>

          {form.formState.errors.bio && (
            <FormMessage id={`${formId}-bio-error`}>
              {form.formState.errors.bio.message}
            </FormMessage>
          )}
        </FormField>
      </FormSection>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
function SettingsEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    role: z.enum(["developer", "designer", "manager"]),
    notifications: z.boolean(),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { role: "developer", notifications: false },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-role`}>Role</FormLabel>
        <FormControl>
          <select
            id={`${formId}-role`}
            aria-invalid={Boolean(form.formState.errors.role)}
            aria-describedby={`${formId}-role-error`}
            {...form.register("role")}
            className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm"
          >
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </FormControl>

        {form.formState.errors.role && (
          <FormMessage id={`${formId}-role-error`}>
            {form.formState.errors.role.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-notifications`}>
          Email notifications
        </FormLabel>
        <FormControl>
          <input
            id={`${formId}-notifications`}
            aria-invalid={Boolean(form.formState.errors.notifications)}
            aria-describedby={`${formId}-notifications-description ${formId}-notifications-error`}
            type="checkbox"
            {...form.register("notifications")}
            className="size-4 accent-blue-600"
          />
        </FormControl>
        <FormDescription id={`${formId}-notifications-description`}>
          Receive updates about your account.
        </FormDescription>
        {form.formState.errors.notifications && (
          <FormMessage id={`${formId}-notifications-error`}>
            {form.formState.errors.notifications.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
    </Form>
  )
}
function SettingsMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    role: z.enum(["developer", "designer", "manager"]),
    notifications: z.boolean(),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { role: "developer", notifications: false },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-role`}>ရာထူး</FormLabel>
        <FormControl>
          <select
            id={`${formId}-role`}
            aria-invalid={Boolean(form.formState.errors.role)}
            aria-describedby={`${formId}-role-error`}
            {...form.register("role")}
            className="h-10 w-full rounded-xl border border-input bg-background px-3 text-sm"
          >
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
          </select>
        </FormControl>

        {form.formState.errors.role && (
          <FormMessage id={`${formId}-role-error`}>
            {form.formState.errors.role.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-notifications`}>
          အီးမေးလ် အသိပေးချက်များ
        </FormLabel>
        <FormControl>
          <input
            id={`${formId}-notifications`}
            aria-invalid={Boolean(form.formState.errors.notifications)}
            aria-describedby={`${formId}-notifications-description ${formId}-notifications-error`}
            type="checkbox"
            {...form.register("notifications")}
            className="size-4 accent-blue-600"
          />
        </FormControl>
        <FormDescription id={`${formId}-notifications-description`}>
          မိမိအကောင့်အကြောင်း update များ လက်ခံရန်။
        </FormDescription>
        {form.formState.errors.notifications && (
          <FormMessage id={`${formId}-notifications-error`}>
            {form.formState.errors.notifications.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
function ContactEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "Enter at least 2 characters.").max(100),
    email: z.string().trim().email("Enter a valid email address.").max(200),
    message: z
      .string()
      .trim()
      .min(10, "Enter at least 10 characters.")
      .max(2000),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-name`}>Name</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-name`}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={`${formId}-name-error`}
            {...form.register("name")}
            autoComplete="name"
            placeholder="Enter your name"
          />
        </FormControl>

        {form.formState.errors.name && (
          <FormMessage id={`${formId}-name-error`}>
            {form.formState.errors.name.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-email`}>Email</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-email`}
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={`${formId}-email-description ${formId}-email-error`}
            {...form.register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormControl>
        <FormDescription id={`${formId}-email-description`}>
          We only use this email to reply.
        </FormDescription>
        {form.formState.errors.email && (
          <FormMessage id={`${formId}-email-error`}>
            {form.formState.errors.email.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-message`}>Message</FormLabel>
        <FormControl>
          <Textarea
            id={`${formId}-message`}
            aria-invalid={Boolean(form.formState.errors.message)}
            aria-describedby={`${formId}-message-error`}
            {...form.register("message")}
            rows={4}
            placeholder="How can we help?"
          />
        </FormControl>

        {form.formState.errors.message && (
          <FormMessage id={`${formId}-message-error`}>
            {form.formState.errors.message.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
    </Form>
  )
}
function ContactMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    name: z.string().trim().min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။").max(100),
    email: z
      .string()
      .trim()
      .email("မှန်ကန်သော အီးမေးလ်လိပ်စာ ဖြည့်ပါ။")
      .max(200),
    message: z
      .string()
      .trim()
      .min(10, "အနည်းဆုံး စာလုံး ၁၀ လုံး ဖြည့်ပါ။")
      .max(2000),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-name`}>အမည်</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-name`}
            aria-invalid={Boolean(form.formState.errors.name)}
            aria-describedby={`${formId}-name-error`}
            {...form.register("name")}
            autoComplete="name"
            placeholder="မိမိအမည်ကို ဖြည့်ပါ"
          />
        </FormControl>

        {form.formState.errors.name && (
          <FormMessage id={`${formId}-name-error`}>
            {form.formState.errors.name.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-email`}>အီးမေးလ်</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-email`}
            aria-invalid={Boolean(form.formState.errors.email)}
            aria-describedby={`${formId}-email-description ${formId}-email-error`}
            {...form.register("email")}
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </FormControl>
        <FormDescription id={`${formId}-email-description`}>
          ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ အသုံးပြုပါသည်။
        </FormDescription>
        {form.formState.errors.email && (
          <FormMessage id={`${formId}-email-error`}>
            {form.formState.errors.email.message}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor={`${formId}-message`}>စာတို</FormLabel>
        <FormControl>
          <Textarea
            id={`${formId}-message`}
            aria-invalid={Boolean(form.formState.errors.message)}
            aria-describedby={`${formId}-message-error`}
            {...form.register("message")}
            rows={4}
            placeholder="ဘာအတွက် ကူညီပေးရမလဲ။"
          />
        </FormControl>

        {form.formState.errors.message && (
          <FormMessage id={`${formId}-message-error`}>
            {form.formState.errors.message.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
function LoadingEnPreview() {
  const formId = React.useId()
  const schema = z.object({
    project: z.string().trim().min(2, "Enter at least 2 characters.").max(100),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { project: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-project`}>Project name</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-project`}
            aria-invalid={Boolean(form.formState.errors.project)}
            aria-describedby={`${formId}-project-error`}
            {...form.register("project")}
            placeholder="Binhlaig UI"
          />
        </FormControl>

        {form.formState.errors.project && (
          <FormMessage id={`${formId}-project-error`}>
            {form.formState.errors.project.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          Demo submitted successfully. No data was sent to a server.
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </FormActions>
    </Form>
  )
}
function LoadingMyPreview() {
  const formId = React.useId()
  const schema = z.object({
    project: z
      .string()
      .trim()
      .min(2, "အနည်းဆုံး စာလုံး ၂ လုံး ဖြည့်ပါ။")
      .max(100),
  })
  type Values = z.infer<typeof schema>
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { project: "" },
    mode: "onTouched",
  })
  const [success, setSuccess] = React.useState(false)
  const submitting = React.useRef(false)
  async function onSubmit(_values: Values) {
    if (submitting.current) return
    submitting.current = true
    setSuccess(false)
    try {
      // Demo only. Replace with your authenticated API request.
      await new Promise<void>((resolve) => setTimeout(resolve, 700))
      setSuccess(true)
    } finally {
      submitting.current = false
    }
  }
  return (
    <Form
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      onChange={() => setSuccess(false)}
      className="space-y-5"
    >
      <FormField>
        <FormLabel htmlFor={`${formId}-project`}>Project အမည်</FormLabel>
        <FormControl>
          <Input
            id={`${formId}-project`}
            aria-invalid={Boolean(form.formState.errors.project)}
            aria-describedby={`${formId}-project-error`}
            {...form.register("project")}
            placeholder="Binhlaig UI"
          />
        </FormControl>

        {form.formState.errors.project && (
          <FormMessage id={`${formId}-project-error`}>
            {form.formState.errors.project.message}
          </FormMessage>
        )}
      </FormField>
      {success && (
        <p
          role="status"
          className="text-sm leading-7 text-emerald-700 dark:text-emerald-400"
        >
          နမူနာကို ပေးပို့ပြီးပါပြီ။ Server သို့ အချက်အလက် မပို့ပါ။
        </p>
      )}
      <FormActions>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="min-h-11 h-auto whitespace-normal px-4 py-2 text-sm leading-7"
        >
          {form.formState.isSubmitting && (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          )}
          {form.formState.isSubmitting ? "ပေးပို့နေသည်..." : "ပေးပို့ရန်"}
        </Button>
      </FormActions>
    </Form>
  )
}
const reportSchema = z.object({
  title: z.string().trim().min(5, "Enter at least 5 characters.").max(80),
})

type ReportValues = z.infer<typeof reportSchema>

function ControllerReportEnPreview() {
  const id = React.useId()
  const [result, setResult] = React.useState<ReportValues | null>(null)
  const form = useForm<ReportValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: { title: "" },
    mode: "onTouched",
  })

  function onSubmit(values: ReportValues) {
    // Local demo: connect your API here to persist values.
    setResult(values)
  }

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>Issue report</FormSectionTitle>
        </FormSectionHeader>
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <FormField data-invalid={fieldState.invalid}>
              <FormLabel htmlFor={`${id}-title`}>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={`${id}-title`}
                  aria-invalid={fieldState.invalid}
                  aria-describedby={`${id}-help${fieldState.error ? ` ${id}-error` : ""}`}
                  placeholder="Describe the issue"
                />
              </FormControl>
              <FormDescription id={`${id}-help`}>
                Use 5 to 80 characters.
              </FormDescription>
              {fieldState.error && (
                <FormMessage id={`${id}-error`}>
                  {fieldState.error.message}
                </FormMessage>
              )}
            </FormField>
          )}
        />
      </FormSection>
      {result && (
        <p role="status">Validated: {result.title}. Local demo only.</p>
      )}
      <FormActions>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            form.reset()
            setResult(null)
          }}
        >
          Reset
        </Button>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Submit
        </Button>
      </FormActions>
    </Form>
  )
}

const reportMyanmarSchema = z.object({
  title: z.string().trim().min(5, "အနည်းဆုံး စာလုံး ၅ လုံး ဖြည့်ပါ။").max(80),
})

type ReportMyanmarValues = z.infer<typeof reportMyanmarSchema>

function ControllerReportMyPreview() {
  const id = React.useId()
  const [result, setResult] = React.useState<ReportMyanmarValues | null>(null)
  const form = useForm<ReportMyanmarValues>({
    resolver: zodResolver(reportMyanmarSchema),
    defaultValues: { title: "" },
    mode: "onTouched",
  })

  function onSubmit(values: ReportMyanmarValues) {
    // Local demo: connect your API here to persist values.
    setResult(values)
  }

  return (
    <Form onSubmit={form.handleSubmit(onSubmit)} noValidate>
      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>ပြဿနာ အကြောင်းကြားရန်</FormSectionTitle>
        </FormSectionHeader>
        <Controller
          control={form.control}
          name="title"
          render={({ field, fieldState }) => (
            <FormField data-invalid={fieldState.invalid}>
              <FormLabel htmlFor={`${id}-title`}>ခေါင်းစဉ်</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id={`${id}-title`}
                  aria-invalid={fieldState.invalid}
                  aria-describedby={`${id}-help${fieldState.error ? ` ${id}-error` : ""}`}
                  placeholder="ပြဿနာခေါင်းစဉ် ဖြည့်ပါ"
                />
              </FormControl>
              <FormDescription id={`${id}-help`}>
                စာလုံး ၅ လုံးမှ ၈၀ အထိ ဖြည့်ပါ။
              </FormDescription>
              {fieldState.error && (
                <FormMessage id={`${id}-error`}>
                  {fieldState.error.message}
                </FormMessage>
              )}
            </FormField>
          )}
        />
      </FormSection>
      {result && (
        <p role="status">စစ်ဆေးပြီး: {result.title}. သရုပ်ပြသာ ဖြစ်ပါသည်။</p>
      )}
      <FormActions>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            form.reset()
            setResult(null)
          }}
        >
          ပြန်ရှင်းရန်
        </Button>
        <Button type="submit" disabled={form.formState.isSubmitting}>
          ပေးပို့ရန်
        </Button>
      </FormActions>
    </Form>
  )
}

const controllerGuideCode = {
  en: '"use client"\n\nimport * as React from "react"\nimport { Controller, useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormActions,\n} from "@/components/ui/form"\n\nconst reportSchema = z.object({\n  title: z.string().trim().min(5, "Enter at least 5 characters.").max(80),\n})\n\ntype ReportValues = z.infer<typeof reportSchema>\n\nexport function ControllerReportExample() {\n  const id = React.useId()\n  const [result, setResult] = React.useState<ReportValues | null>(null)\n  const form = useForm<ReportValues>({\n    resolver: zodResolver(reportSchema),\n    defaultValues: { title: "" },\n    mode: "onTouched",\n  })\n\n  function onSubmit(values: ReportValues) {\n    // Local demo: connect your API here to persist values.\n    setResult(values)\n  }\n\n  return (\n    <Form onSubmit={form.handleSubmit(onSubmit)} noValidate>\n      <FormSection>\n        <FormSectionHeader>\n          <FormSectionTitle>Issue report</FormSectionTitle>\n        </FormSectionHeader>\n        <Controller\n          control={form.control}\n          name="title"\n          render={({ field, fieldState }) => (\n            <FormField data-invalid={fieldState.invalid}>\n              <FormLabel htmlFor={`${id}-title`}>Title</FormLabel>\n              <FormControl>\n                <Input\n                  {...field}\n                  id={`${id}-title`}\n                  aria-invalid={fieldState.invalid}\n                  aria-describedby={`${id}-help${fieldState.error ? ` ${id}-error` : ""}`}\n                  placeholder="Describe the issue"\n                />\n              </FormControl>\n              <FormDescription id={`${id}-help`}>\n                Use 5 to 80 characters.\n              </FormDescription>\n              {fieldState.error && (\n                <FormMessage id={`${id}-error`}>\n                  {fieldState.error.message}\n                </FormMessage>\n              )}\n            </FormField>\n          )}\n        />\n      </FormSection>\n      {result && (\n        <p role="status">Validated: {result.title}. Local demo only.</p>\n      )}\n      <FormActions>\n        <Button\n          type="button"\n          variant="outline"\n          onClick={() => {\n            form.reset()\n            setResult(null)\n          }}\n        >\n          Reset\n        </Button>\n        <Button type="submit" disabled={form.formState.isSubmitting}>\n          Submit\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
  my: '"use client"\n\nimport * as React from "react"\nimport { Controller, useForm } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"\nimport { Button } from "@/components/ui/button"\nimport { Input } from "@/components/ui/input"\nimport {\n  Form,\n  FormField,\n  FormLabel,\n  FormControl,\n  FormDescription,\n  FormMessage,\n  FormSection,\n  FormSectionHeader,\n  FormSectionTitle,\n  FormActions,\n} from "@/components/ui/form"\n\nconst reportSchema = z.object({\n  title: z.string().trim().min(5, "အနည်းဆုံး စာလုံး ၅ လုံး ဖြည့်ပါ။").max(80),\n})\n\ntype ReportValues = z.infer<typeof reportSchema>\n\nexport function ControllerReportExample() {\n  const id = React.useId()\n  const [result, setResult] = React.useState<ReportValues | null>(null)\n  const form = useForm<ReportValues>({\n    resolver: zodResolver(reportSchema),\n    defaultValues: { title: "" },\n    mode: "onTouched",\n  })\n\n  function onSubmit(values: ReportValues) {\n    // Local demo: connect your API here to persist values.\n    setResult(values)\n  }\n\n  return (\n    <Form onSubmit={form.handleSubmit(onSubmit)} noValidate>\n      <FormSection>\n        <FormSectionHeader>\n          <FormSectionTitle>ပြဿနာ အကြောင်းကြားရန်</FormSectionTitle>\n        </FormSectionHeader>\n        <Controller\n          control={form.control}\n          name="title"\n          render={({ field, fieldState }) => (\n            <FormField data-invalid={fieldState.invalid}>\n              <FormLabel htmlFor={`${id}-title`}>ခေါင်းစဉ်</FormLabel>\n              <FormControl>\n                <Input\n                  {...field}\n                  id={`${id}-title`}\n                  aria-invalid={fieldState.invalid}\n                  aria-describedby={`${id}-help${fieldState.error ? ` ${id}-error` : ""}`}\n                  placeholder="ပြဿနာခေါင်းစဉ် ဖြည့်ပါ"\n                />\n              </FormControl>\n              <FormDescription id={`${id}-help`}>\n                စာလုံး ၅ လုံးမှ ၈၀ အထိ ဖြည့်ပါ။\n              </FormDescription>\n              {fieldState.error && (\n                <FormMessage id={`${id}-error`}>\n                  {fieldState.error.message}\n                </FormMessage>\n              )}\n            </FormField>\n          )}\n        />\n      </FormSection>\n      {result && (\n        <p role="status">စစ်ဆေးပြီး: {result.title}. သရုပ်ပြသာ ဖြစ်ပါသည်။</p>\n      )}\n      <FormActions>\n        <Button\n          type="button"\n          variant="outline"\n          onClick={() => {\n            form.reset()\n            setResult(null)\n          }}\n        >\n          ပြန်ရှင်းရန်\n        </Button>\n        <Button type="submit" disabled={form.formState.isSubmitting}>\n          ပေးပို့ရန်\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}\n',
} as const

function IntegrationCode({ code }: { code: string }) {
  const { t, language } = useFormText()
  const [copied, setCopied] = React.useState(false)
  const [failed, setFailed] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  React.useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current)
    },
    [],
  )
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-muted/40">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-xs text-muted-foreground">TSX / Terminal</span>
        <Button
          type="button"
          size="sm"
          variant="ghost"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code)
              setCopied(true)
              setFailed(false)
            } catch {
              setFailed(true)
            }
            if (timer.current) clearTimeout(timer.current)
            timer.current = setTimeout(() => setCopied(false), 1600)
          }}
        >
          {copied ? (
            <Check className="size-4" />
          ) : (
            <Clipboard className="size-4" />
          )}
          {t(copied ? "Copied" : "Copy code")}
        </Button>
      </div>
      {failed && (
        <p role="alert" className="px-4 text-sm text-destructive">
          {t("Copy failed")}
        </p>
      )}
      <pre
        tabIndex={0}
        className="max-h-[600px] overflow-auto p-5 text-sm leading-7 text-foreground"
        style={
          language === "my"
            ? { fontFamily: '"Noto Sans Myanmar", "Myanmar Text", sans-serif' }
            : undefined
        }
      >
        <code>{code}</code>
      </pre>
    </div>
  )
}

function FormIntegrationGuide() {
  const { language } = useFormText()
  const my = language === "my"
  const text = (en: string, mm: string) => (my ? mm : en)
  const steps = [
    {
      title: text(
        "1. Install dependencies",
        "၁။ လိုအပ်သော package များ ထည့်ပါ",
      ),
      body: text(
        "Install Form through Binhlaig UI, then add the three form packages. Input and Button must also exist in your UI folder.",
        "Binhlaig UI မှ Form ထည့်ပြီး form package ၃ ခု ထည့်ပါ။ UI folder ထဲတွင် Input နှင့် Button လည်း ရှိရပါမည်။",
      ),
      code: "npx binhlaig-ui@latest add form\nnpm install react-hook-form zod @hookform/resolvers",
    },
    {
      title: text(
        "2. Import the tools",
        "၂။ အသုံးပြုမည့် tools ကို import လုပ်ပါ",
      ),
      body: text(
        "React Hook Form manages values, touched fields, errors and submission state. Zod defines rules. zodResolver connects the schema to useForm.",
        "React Hook Form က တန်ဖိုး၊ touched field၊ error နှင့် submit အခြေအနေကို ထိန်းပါသည်။ Zod က စစ်ဆေးရန် rule သတ်မှတ်ပြီး zodResolver က schema ကို useForm နှင့် ချိတ်ပေးပါသည်။",
      ),
      code: 'import { useForm, Controller } from "react-hook-form"\nimport { z } from "zod"\nimport { zodResolver } from "@hookform/resolvers/zod"',
    },
    {
      title: text(
        "3. Define the schema and TypeScript type",
        "၃။ Schema နှင့် TypeScript type သတ်မှတ်ပါ",
      ),
      body: text(
        "Define rules once and infer the value type from the schema. trim() removes surrounding spaces before validation. Add a message to each rule for your users.",
        "Rule ကို schema တွင် သတ်မှတ်ပြီး type ကို z.infer ဖြင့် ယူပါ။ trim() က ရှေ့နောက် space များ ဖြုတ်ပေးပါသည်။ Rule များတွင် နားလည်လွယ်သော error စာသား ထည့်ပေးပါ။",
      ),
      code: 'const schema = z.object({\n  name: z.string().trim().min(2, "Enter at least 2 characters."),\n  email: z.string().trim().email("Enter a valid email."),\n})\n\ntype Values = z.infer<typeof schema>',
    },
    {
      title: text(
        "4. Connect useForm to Zod",
        "၄။ useForm ကို Zod နှင့် ချိတ်ပါ",
      ),
      body: text(
        "Inside your component, pass zodResolver(schema) and defaultValues to useForm. onTouched validates after a field is blurred and then as it changes. Submit validates the complete schema.",
        "Component အတွင်း useForm ကို zodResolver(schema) နှင့် defaultValues ပေးပါ။ onTouched သည် field မှ ထွက်ပြီးနောက် စစ်ဆေးကာ ပြင်သည့်အခါ ပြန်စစ်ပါသည်။ Submit လုပ်ချိန် schema တစ်ခုလုံး စစ်ပါသည်။",
      ),
      code: 'const form = useForm<Values>({\n  resolver: zodResolver(schema),\n  defaultValues: { name: "", email: "" },\n  mode: "onTouched",\n})',
    },
    {
      title: text(
        "5. Register native inputs and display errors",
        "၅။ Input ချိတ်ပြီး error ပြပါ",
      ),
      body: text(
        "Use register() for native input, textarea, select and checkbox controls. Binhlaig FormField is a div wrapper. Link the label and error IDs explicitly; FormMessage displays the children you pass.",
        "ပုံမှန် input၊ textarea၊ select နှင့် checkbox တွင် register() သုံးပါ။ Binhlaig FormField သည် div wrapper ဖြစ်ပါသည်။ Label နှင့် error ID ကို ချိတ်ပြီး FormMessage ထဲ error စာသား ပေးပါ။",
      ),
      code: '<FormField>\n  <FormLabel htmlFor="name">Name</FormLabel>\n  <FormControl>\n    <Input\n      id="name"\n      {...form.register("name")}\n      aria-invalid={Boolean(form.formState.errors.name)}\n      aria-describedby={form.formState.errors.name ? "name-error" : undefined}\n    />\n  </FormControl>\n  {form.formState.errors.name && (\n    <FormMessage id="name-error">\n      {form.formState.errors.name.message}\n    </FormMessage>\n  )}\n</FormField>',
    },
    {
      title: text(
        "6. Submit, reset and handle server errors",
        "၆။ Submit၊ reset နှင့် server error ကို ကိုင်တွယ်ပါ",
      ),
      body: text(
        "Form is already an HTML form: use handleSubmit directly. An async onSubmit keeps isSubmitting active while awaiting a request. reset() restores defaults; setError() can show an API error. Server-side validation is still required. The snippets below illustrate wiring; use your actual API and handle its response.",
        "Form သည် HTML form ဖြစ်ပြီးသားဖြစ်၍ handleSubmit ကို တိုက်ရိုက်ချိတ်ပါ။ Async onSubmit တွင် request ကို await လုပ်နေစဉ် isSubmitting မှန်နေပါသည်။ reset() က မူလတန်ဖိုးပြန်ထားပြီး setError() ဖြင့် API error ပြနိုင်ပါသည်။ Backend မှာလည်း validation လုပ်ရပါမည်။ အောက်ပါ code သည် ချိတ်ပုံဖြစ်ပြီး မိမိ API response အတိုင်း ကိုင်တွယ်ပါ။",
      ),
      code: '<Form onSubmit={form.handleSubmit(onSubmit)} noValidate>\n  {/* Registered fields */}\n  {form.formState.errors.root?.server && (\n    <FormMessage>{form.formState.errors.root.server.message}</FormMessage>\n  )}\n  <Button type="button" onClick={() => form.reset()}>Reset</Button>\n  <Button type="submit" disabled={form.formState.isSubmitting}>\n    {form.formState.isSubmitting ? "Saving..." : "Submit"}\n  </Button>\n</Form>\n\n// After a failed API response, inside onSubmit:\nform.setError("root.server", { type: "server", message: "Unable to save. Try again." })',
    },
    {
      title: text(
        "7. Use Controller for controlled components",
        "၇။ Controlled component အတွက် Controller သုံးပါ",
      ),
      body: text(
        "Import Controller from react-hook-form and wrap FormField inside its render function. Pass field to the actual control and fieldState.error to FormMessage. Do not pass control, name or render to Binhlaig FormField. For a custom Select, map value/onValueChange to field.value/field.onChange; for a custom Checkbox, map checked/onCheckedChange and keep a boolean value. Do not register a controlled field a second time.",
        "Controller ကို react-hook-form မှ import လုပ်ပြီး render အတွင်း FormField ထည့်ပါ။ Input ကို field၊ FormMessage ကို fieldState.error ပေးပါ။ Binhlaig FormField ကို control၊ name၊ render မပေးပါနှင့်။ Custom Select တွင် value/onValueChange၊ custom Checkbox တွင် checked/onCheckedChange ကို field နှင့် ချိတ်ပြီး checkbox တန်ဖိုး boolean ဖြစ်ပါစေ။ Controller field ကို register() ထပ်မလုပ်ပါနှင့်။",
      ),
    },
  ]
  return (
    <section>
      <SectionTitle
        id="validation-tools"
        title="React Hook Form + Zod"
        description={text(
          "A step-by-step guide using your existing Binhlaig Form components.",
          "လက်ရှိ Binhlaig Form components ဖြင့် ချိတ်ဆက်သုံးနည်းကို အဆင့်လိုက် လေ့လာပါ။",
        )}
      />
      <div className="mt-6 space-y-8">
        {steps.map((step) => (
          <div key={step.title} className="space-y-4">
            <h3 className="text-lg font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="text-sm leading-7 text-muted-foreground">
              {step.body}
            </p>
            {step.code && <IntegrationCode code={step.code} />}
          </div>
        ))}
        <CodePreview code={controllerGuideCode[language]}>
          {my ? <ControllerReportMyPreview /> : <ControllerReportEnPreview />}
        </CodePreview>
        <div className="rounded-2xl border border-border bg-muted/30 p-5 text-sm leading-7">
          <h3 className="font-semibold">
            {text("Common mistakes", "မှားလေ့ရှိသော အချက်များ")}
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>
              {text(
                "Keep one Form element. Do not wrap a second form inside it or use Form as FormProvider.",
                "Form အတွင်း form ထပ်မထည့်ပါနှင့်။ Form ကို FormProvider ပုံစံ မသုံးပါနှင့်။",
              )}
            </li>
            <li>
              {text(
                "Give inputs IDs and labels matching htmlFor. Set aria-invalid and aria-describedby for errors.",
                "Input id နှင့် label htmlFor ကို တူအောင်ထားပါ။ Error အတွက် aria-invalid နှင့် aria-describedby ထည့်ပါ။",
              )}
            </li>
            <li>
              {text(
                "Set defaultValues to avoid undefined controlled values. Use compatible resolver and Zod package versions.",
                "Controlled value undefined မဖြစ်ရန် defaultValues ပေးပါ။ Resolver နှင့် Zod ကို ကိုက်ညီသော version သုံးပါ။",
              )}
            </li>
            <li>
              {text(
                "noValidate in these demos makes schema errors visible. Add appropriate native constraints in your production form.",
                "ဤနမူနာများတွင် schema error ပြရန် noValidate သုံးထားပါသည်။ Production တွင် သင့်လျော်သော native validation constraints များ ထည့်ပါ။",
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default function FormDocumentationPage() {
  const { t, language } = useFormText()
>>>>>>> 94a0d7b (update Form UI)
  return (
    <div
      lang={language}
      data-language={language}
      className="form-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]"
    >
      <style>{formPageStyles}</style>

      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">
              {t("Components")}
            </Link>

            <span>/</span>

            <span className="text-foreground">Form</span>
          </div>

          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />
                {t("Binhlaig UI Component")}
              </div>

              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Form
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {t(
                  "Accessible layout primitives for labels, controls, helper text, validation messages, sections and actions.",
                )}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.querySelector("#usage")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  {t("View examples")}
                  <ArrowRight className="size-4" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Code2 className="size-4" />
                  {t("API reference")}
                </Button>
              </div>
            </div>
          </section>

          <div className="space-y-16">
            <ComponentInstallation componentName="Form" componentSlug="form" />

            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t(
                  "Import the Form layout primitives from your UI directory.",
                )}
              />

              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm text-foreground">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>

            <FormIntegrationGuide />
            <section>
<<<<<<< HEAD
              <SectionTitle id="react-hook-form" title="React Hook Form + Zod" description={t("Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state.")} />
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-border bg-background p-5 sm:p-6">
                  <h3 className="text-base font-semibold">{t("Install form validation packages")}</h3>
                  <div className="mt-3 overflow-x-auto rounded-xl bg-muted/70 p-4">
                    <code className="whitespace-nowrap font-mono text-sm text-foreground">npm install react-hook-form zod @hookform/resolvers</code>
                  </div>
                  <h3 className="mt-6 text-base font-semibold">{t("What each package does")}</h3>
                  <div className="mt-4 grid gap-3">
                    {[
                      ["react-hook-form", "Creates and manages field values, touched state, errors and form submission."],
                      ["zod", "Defines a typed validation schema and meaningful field error messages."],
                      ["@hookform/resolvers", "Connects Zod validation to React Hook Form through zodResolver."],
                      ["Binhlaig UI Form", "Binhlaig UI provides the visual form layout, labels and validation-message components."],
                    ].map(([name, description]) => (
                      <div key={name} className="grid gap-1 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-4">
                        <code className="text-sm font-semibold text-foreground">{name}</code>
                        <p className="text-sm leading-7 text-muted-foreground">{t(description)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-7 text-muted-foreground">{t("All examples below use useForm with zodResolver(schema), handleSubmit, register, and FormMessage.")}</p>
=======
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t(
                  "Build a basic form using field, label, control and action primitives.",
                )}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.basicCode[language]}>
                  {language === "my" ? <BasicMyPreview /> : <BasicEnPreview />}
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="validation"
                title={t("Validation")}
                description={t(
                  "Use FormDescription and FormMessage to communicate field state.",
                )}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.validationCode[language]}>
                  {language === "my" ? <EmailMyPreview /> : <EmailEnPreview />}
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="sections"
                title={t("Form Sections")}
                description={t("Group related fields in a bordered section.")}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.sectionCode[language]}>
                  {language === "my" ? (
                    <ProfileMyPreview />
                  ) : (
                    <ProfileEnPreview />
                  )}
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="settings"
                title={t("Checkbox and Select")}
                description={t(
                  "Form primitives work with native controls and custom UI components.",
                )}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.settingsCode[language]}>
                  {language === "my" ? (
                    <SettingsMyPreview />
                  ) : (
                    <SettingsEnPreview />
                  )}
                </CodePreview>
>>>>>>> 94a0d7b (update Form UI)
              </div>
            </section>

            <section>
<<<<<<< HEAD
              <SectionTitle id="usage" title={t("Usage")} description={t("Five interactive examples, all using React Hook Form + Zod with Binhlaig UI Form primitives.")} />
              <div className="mt-6 space-y-10">
                <div id="usage-basic" className="scroll-mt-28">
                  <h3 className="mb-2 text-lg font-semibold">1. {language === "my" ? "အခြေခံ Form" : "Basic Form"}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{t("Preview the validation and view the complete copyable source code.")}</p>
                  <CodePreview code={rhfZodUsageCodes.basic[language]}><ZodUsagePreview kind="basic" /></CodePreview>
                </div>
                <div id="usage-validation" className="scroll-mt-28">
                  <h3 className="mb-2 text-lg font-semibold">2. {language === "my" ? "အီးမေးလ် စစ်ဆေးခြင်း" : "Email Validation"}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{t("Preview the validation and view the complete copyable source code.")}</p>
                  <CodePreview code={rhfZodUsageCodes.validation[language]}><ZodUsagePreview kind="validation" /></CodePreview>
                </div>
                <div id="usage-profile" className="scroll-mt-28">
                  <h3 className="mb-2 text-lg font-semibold">3. {language === "my" ? "ကိုယ်ရေးအချက်အလက် Form" : "Profile Form"}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{t("Preview the validation and view the complete copyable source code.")}</p>
                  <CodePreview code={rhfZodUsageCodes.profile[language]}><ZodUsagePreview kind="profile" /></CodePreview>
                </div>
                <div id="usage-settings" className="scroll-mt-28">
                  <h3 className="mb-2 text-lg font-semibold">4. {language === "my" ? "ဆက်တင် / Checkbox နှင့် Select" : "Settings / Checkbox & Select"}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{t("Preview the validation and view the complete copyable source code.")}</p>
                  <CodePreview code={rhfZodUsageCodes.settings[language]}><ZodUsagePreview kind="settings" /></CodePreview>
                </div>
                <div id="usage-login" className="scroll-mt-28">
                  <h3 className="mb-2 text-lg font-semibold">5. {language === "my" ? "Login Form" : "Login Form"}</h3>
                  <p className="mb-4 text-sm leading-7 text-muted-foreground">{t("Preview the validation and view the complete copyable source code.")}</p>
                  <CodePreview code={rhfZodUsageCodes.login[language]}><ZodUsagePreview kind="login" /></CodePreview>
                </div>
=======
              <SectionTitle
                id="react-hook-form"
                title="React Hook Form"
                description={t(
                  "Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state.",
                )}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.reactHookFormCode[language]}>
                  {language === "my" ? (
                    <ContactMyPreview />
                  ) : (
                    <ContactEnPreview />
                  )}
                </CodePreview>
>>>>>>> 94a0d7b (update Form UI)
              </div>
            </section>

            <section>
              <SectionTitle
                id="loading"
                title={t("Submit State")}
                description={t(
                  "Disable the submit action and show progress while saving.",
                )}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.loadingCode[language]}>
                  {language === "my" ? (
                    <LoadingMyPreview />
                  ) : (
                    <LoadingEnPreview />
                  )}
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t(
                  "Components included in the Binhlaig UI Form layout.",
                )}
              />

              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">
                        {t("Component")}
                      </th>

                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-border">
                    {[
                      ["Form", "Root form layout."],
                      ["FormField", "Groups a single field."],
                      ["FormLabel", "Accessible field label."],
                      ["FormControl", "Wraps an input control."],
                      ["FormDescription", "Displays helper text."],
                      ["FormMessage", "Displays validation feedback."],
                      ["FormSection", "Groups related fields."],
                      ["FormSectionHeader", "Groups section heading text."],
                      ["FormSectionTitle", "Section heading."],
                      ["FormSectionDescription", "Section supporting text."],
                      ["FormActions", "Aligns submit and cancel actions."],
                    ].map(([name, purpose]) => (
                      <tr key={name}>
                        <td className="px-5 py-4">
                          <code>{name}</code>
                        </td>

                        <td className="px-5 py-4 text-muted-foreground">
                          {t(purpose)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <div className="grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/popover"
                className="group rounded-2xl border border-border p-5 hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">
                  {t("Previous component")}
                </div>

                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Popover
                </div>
              </Link>

              <Link
                href="/docs/components"
                className="group rounded-2xl border border-border p-5 text-right hover:border-primary/40 hover:bg-primary/5"
              >
                <div className="text-xs text-muted-foreground">{t("Next")}</div>

                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  {t("All components")}
                  <ArrowRight className="size-4" />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <aside className="hidden xl:block">
        <div className="sticky top-24 border-l border-border pl-5">
          <p className="mb-4 text-sm font-semibold">{t("On this page")}</p>

          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
<<<<<<< HEAD
              ["React Hook Form + Zod", "#react-hook-form"],
=======
              ["React Hook Form + Zod", "#validation-tools"],
>>>>>>> 94a0d7b (update Form UI)
              ["Usage", "#usage"],
              ["Basic Form", "#usage-basic"],
              ["Email Validation", "#usage-validation"],
              ["Profile Form", "#usage-profile"],
              ["Settings", "#usage-settings"],
              ["Login Form", "#usage-login"],
              ["Submit State", "#loading"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block rounded-md py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {t(label)}
              </a>
            ))}
          </nav>

          <a
            href="https\://github.com/Sanlinns/project_ui/blob/main/app/docs/components/form/page.tsx"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground hover:text-foreground"
          >
            {t("Edit this page")}
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}
