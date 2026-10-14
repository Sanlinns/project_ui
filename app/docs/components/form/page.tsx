"use client"
import { ComponentInstallation } from "@/components/docs/component-installation";
import * as React from "react"
import Link from "next/link"
import { useLanguage } from "@/components/providers/language-provider"
import { useForm } from "react-hook-form"
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
  "Copy install command": "Install command ကူးယူရန်"
}
function useFormText() {
  const { language } = useLanguage()
  const t = (text: string) => language === "my" ? formMyanmar[text] ?? text : text
  return { language, t }
}
const formExamples = {
  "basicCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\n\nexport function BasicForm() {\n  return (\n<Form noValidate\n                    onSubmit={(event) => event.preventDefault()}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-name\">{\"Name\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder={\"Enter your name\"}\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">{\"Submit\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\n\nexport function BasicForm() {\n  return (\n<Form noValidate\n                    onSubmit={(event) => event.preventDefault()}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-name\">{\"အမည်\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder={\"မိမိအမည်ကို ဖြည့်ပါ\"}\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">{\"ပေးပို့ရန်\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  },
  "validationCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, FormActions } from \"@/components/ui/form\"\nimport { Mail } from \"lucide-react\"\n\nexport function ValidationForm() {\n  const [email, setEmail] = React.useState(\"\")\n  const [submitted, setSubmitted] = React.useState(false)\n  const emailInvalid = submitted && !email.includes(\"@\")\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setSubmitted(true)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-email\">{\"Email\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-email\"\n                          type=\"email\"\n                          value={email}\n                          aria-invalid={emailInvalid}\n                          onChange={(event) =>\n                            setEmail(event.target.value)\n                          }\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n                          placeholder=\"you@example.com\"\n                        />\n                      </FormControl>\n                      <FormDescription>{\"We will never share your email.\"}</FormDescription>\n                      {emailInvalid && (\n                        <FormMessage>{\"Enter a valid email address.\"}</FormMessage>\n                      )}\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">\n                        <Mail className=\"size-4\" />{\"Continue\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormDescription, FormMessage, FormActions } from \"@/components/ui/form\"\nimport { Mail } from \"lucide-react\"\n\nexport function ValidationForm() {\n  const [email, setEmail] = React.useState(\"\")\n  const [submitted, setSubmitted] = React.useState(false)\n  const emailInvalid = submitted && !email.includes(\"@\")\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setSubmitted(true)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-email\">{\"အီးမေးလ်\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-email\"\n                          type=\"email\"\n                          value={email}\n                          aria-invalid={emailInvalid}\n                          onChange={(event) =>\n                            setEmail(event.target.value)\n                          }\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n                          placeholder=\"you@example.com\"\n                        />\n                      </FormControl>\n                      <FormDescription>{\"မိမိအီးမေးလ်ကို အခြားသူများထံ မမျှဝေပါ။\"}</FormDescription>\n                      {emailInvalid && (\n                        <FormMessage>{\"မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။\"}</FormMessage>\n                      )}\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">\n                        <Mail className=\"size-4\" />{\"ဆက်လက်လုပ်ဆောင်ရန်\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  },
  "sectionCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormSection, FormSectionHeader, FormSectionTitle, FormSectionDescription, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Save } from \"lucide-react\"\n\nexport function ProfileForm() {\n  return (\n<Form onSubmit={(event) => event.preventDefault()}>\n                    <FormSection>\n                      <FormSectionHeader>\n                        <FormSectionTitle>{\"Profile information\"}</FormSectionTitle>\n                        <FormSectionDescription>{\"Update your public profile details.\"}</FormSectionDescription>\n                      </FormSectionHeader>\n                      <FormField>\n                        <FormLabel htmlFor=\"docs-display-name\">{\"Display name\"}</FormLabel>\n                        <FormControl>\n                          <input\n                            id=\"docs-display-name\"\n                            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                            defaultValue=\"Binhlaig\"\n                          />\n                        </FormControl>\n                      </FormField>\n                      <FormField>\n                        <FormLabel htmlFor=\"docs-bio\">{\"Bio\"}</FormLabel>\n                        <FormControl>\n                          <Textarea\n                            id=\"docs-bio\"\n                            placeholder={\"Tell us about yourself...\"}\n                          />\n                        </FormControl>\n                      </FormField>\n                    </FormSection>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">\n                        <Save className=\"size-4\" />{\"Save changes\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormSection, FormSectionHeader, FormSectionTitle, FormSectionDescription, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Save } from \"lucide-react\"\n\nexport function ProfileForm() {\n  return (\n<Form onSubmit={(event) => event.preventDefault()}>\n                    <FormSection>\n                      <FormSectionHeader>\n                        <FormSectionTitle>{\"ကိုယ်ရေးအချက်အလက်\"}</FormSectionTitle>\n                        <FormSectionDescription>{\"အများမြင်နိုင်သော ကိုယ်ရေးအချက်အလက်များကို ပြင်ဆင်ပါ။\"}</FormSectionDescription>\n                      </FormSectionHeader>\n                      <FormField>\n                        <FormLabel htmlFor=\"docs-display-name\">{\"ပြသမည့်အမည်\"}</FormLabel>\n                        <FormControl>\n                          <input\n                            id=\"docs-display-name\"\n                            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                            defaultValue=\"Binhlaig\"\n                          />\n                        </FormControl>\n                      </FormField>\n                      <FormField>\n                        <FormLabel htmlFor=\"docs-bio\">{\"မိမိအကြောင်း\"}</FormLabel>\n                        <FormControl>\n                          <Textarea\n                            id=\"docs-bio\"\n                            placeholder={\"မိမိအကြောင်း ရေးပါ…\"}\n                          />\n                        </FormControl>\n                      </FormField>\n                    </FormSection>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">\n                        <Save className=\"size-4\" />{\"ပြင်ဆင်ချက် သိမ်းရန်\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  },
  "settingsCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormControl, FormLabel, FormDescription, FormActions } from \"@/components/ui/form\"\n\nexport function SettingsForm() {\n  return (\n<Form onSubmit={(event) => event.preventDefault()}>\n                    <FormField className=\"grid-cols-[auto_1fr] items-start gap-x-3\">\n                      <FormControl>\n                        <input\n                          id=\"docs-notifications\"\n                          type=\"checkbox\"\n                          className=\"mt-1 size-4\"\n                          defaultChecked\n                        />\n                      </FormControl>\n                      <div className=\"grid gap-1\">\n                        <FormLabel htmlFor=\"docs-notifications\">{\"Email notifications\"}</FormLabel>\n                        <FormDescription>{\"Receive updates about your account.\"}</FormDescription>\n                      </div>\n                    </FormField>\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-role\">{\"Role\"}</FormLabel>\n                      <FormControl>\n                        <select\n                          id=\"docs-role\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                        >\n                          <option>{\"Developer\"}</option>\n                          <option>{\"Designer\"}</option>\n                          <option>{\"Manager\"}</option>\n                        </select>\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">{\"Save settings\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormControl, FormLabel, FormDescription, FormActions } from \"@/components/ui/form\"\n\nexport function SettingsForm() {\n  return (\n<Form onSubmit={(event) => event.preventDefault()}>\n                    <FormField className=\"grid-cols-[auto_1fr] items-start gap-x-3\">\n                      <FormControl>\n                        <input\n                          id=\"docs-notifications\"\n                          type=\"checkbox\"\n                          className=\"mt-1 size-4\"\n                          defaultChecked\n                        />\n                      </FormControl>\n                      <div className=\"grid gap-1\">\n                        <FormLabel htmlFor=\"docs-notifications\">{\"အီးမေးလ် အသိပေးချက်များ\"}</FormLabel>\n                        <FormDescription>{\"မိမိအကောင့်ဆိုင်ရာ အသိပေးချက်များ လက်ခံရန်။\"}</FormDescription>\n                      </div>\n                    </FormField>\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-role\">{\"လုပ်ဆောင်ရသည့် အခန်းကဏ္ဍ\"}</FormLabel>\n                      <FormControl>\n                        <select\n                          id=\"docs-role\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                        >\n                          <option>{\"Developer\"}</option>\n                          <option>{\"Designer\"}</option>\n                          <option>{\"မန်နေဂျာ\"}</option>\n                        </select>\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\">{\"ဆက်တင် သိမ်းရန်\"}</Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  },
  "reactHookFormCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormDescription, FormActions } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Loader2 } from \"lucide-react\"\nimport { useForm } from \"react-hook-form\"\n\nexport function ReactHookFormExample() {\n\n  const {\n    register,\n    handleSubmit,\n    formState: {\n      errors,\n      isSubmitting,\n      isSubmitSuccessful,\n    },\n    reset,\n  } = useForm<{\n    name: string\n    email: string\n    message: string\n  }>({\n    defaultValues: {\n      name: \"\",\n      email: \"\",\n      message: \"\",\n    },\n  })\n  const onSubmit = async (values: {\n    name: string\n    email: string\n    message: string\n  }) => {\n    await new Promise((resolve) =>\n      window.setTimeout(resolve, 700)\n    )\n    console.log(values)\n    reset()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-name\">{\"Name\"}</FormLabel>\n        <FormControl>\n          <input\n            id=\"rhf-name\"\n            aria-invalid={Boolean(errors.name)}\n            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n            placeholder={\"Your name\"}\n            {...register(\"name\", {\n              required: \"Name is required.\",\n              minLength: {\n                value: 2,\n                message:\n                  \"Name must be at least 2 characters.\",\n              },\n            })}\n          />\n        </FormControl>\n        {errors.name && (\n          <FormMessage>\n            {errors.name.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-email\">{\"Email\"}</FormLabel>\n        <FormControl>\n          <input\n            id=\"rhf-email\"\n            type=\"email\"\n            aria-invalid={Boolean(errors.email)}\n            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n            placeholder=\"you@example.com\"\n            {...register(\"email\", {\n              required: \"Email is required.\",\n              pattern: {\n                value:\n                  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n                message:\n                  \"Enter a valid email address.\",\n              },\n            })}\n          />\n        </FormControl>\n        <FormDescription>{\"We will only use this email to reply.\"}</FormDescription>\n        {errors.email && (\n          <FormMessage>\n            {errors.email.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-message\">{\"Message\"}</FormLabel>\n        <FormControl>\n          <Textarea\n            id=\"rhf-message\"\n            aria-invalid={Boolean(errors.message)}\n            placeholder={\"How can we help?\"}\n            {...register(\"message\", {\n              required: \"Message is required.\",\n              minLength: {\n                value: 10,\n                message:\n                  \"Message must be at least 10 characters.\",\n              },\n            })}\n          />\n        </FormControl>\n        {errors.message && (\n          <FormMessage>\n            {errors.message.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      {isSubmitSuccessful && (\n        <p className=\"text-sm font-medium text-emerald-600 dark:text-emerald-400\">{\"Message submitted successfully.\"}</p>\n      )}\n      <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n        <Button\n          type=\"submit\"\n          disabled={isSubmitting}\n        >\n          {isSubmitting && (\n            <Loader2 className=\"size-4 animate-spin\" />\n          )}\n          {isSubmitting ? \"Submitting...\" : \"Submit message\"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormMessage, FormDescription, FormActions } from \"@/components/ui/form\"\nimport { Textarea } from \"@/components/ui/textarea\"\nimport { Loader2 } from \"lucide-react\"\nimport { useForm } from \"react-hook-form\"\n\nexport function ReactHookFormExample() {\n\n  const {\n    register,\n    handleSubmit,\n    formState: {\n      errors,\n      isSubmitting,\n      isSubmitSuccessful,\n    },\n    reset,\n  } = useForm<{\n    name: string\n    email: string\n    message: string\n  }>({\n    defaultValues: {\n      name: \"\",\n      email: \"\",\n      message: \"\",\n    },\n  })\n  const onSubmit = async (values: {\n    name: string\n    email: string\n    message: string\n  }) => {\n    await new Promise((resolve) =>\n      window.setTimeout(resolve, 700)\n    )\n    console.log(values)\n    reset()\n  }\n  return (\n    <Form noValidate onSubmit={handleSubmit(onSubmit)}>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-name\">{\"အမည်\"}</FormLabel>\n        <FormControl>\n          <input\n            id=\"rhf-name\"\n            aria-invalid={Boolean(errors.name)}\n            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n            placeholder={\"မိမိအမည်\"}\n            {...register(\"name\", {\n              required: \"အမည် ဖြည့်ရန် လိုအပ်ပါတယ်။\",\n              minLength: {\n                value: 2,\n                message:\n                  \"အမည်မှာ အနည်းဆုံး စာလုံး ၂ လုံး ပါရပါမယ်။\",\n              },\n            })}\n          />\n        </FormControl>\n        {errors.name && (\n          <FormMessage>\n            {errors.name.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-email\">{\"အီးမေးလ်\"}</FormLabel>\n        <FormControl>\n          <input\n            id=\"rhf-email\"\n            type=\"email\"\n            aria-invalid={Boolean(errors.email)}\n            className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive\"\n            placeholder=\"you@example.com\"\n            {...register(\"email\", {\n              required: \"အီးမေးလ် ဖြည့်ရန် လိုအပ်ပါတယ်။\",\n              pattern: {\n                value:\n                  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,\n                message:\n                  \"မှန်ကန်သော အီးမေးလ်လိပ်စာကို ဖြည့်ပါ။\",\n              },\n            })}\n          />\n        </FormControl>\n        <FormDescription>{\"ပြန်လည်ဆက်သွယ်ရန်အတွက်သာ ဒီအီးမေးလ်ကို အသုံးပြုပါမယ်။\"}</FormDescription>\n        {errors.email && (\n          <FormMessage>\n            {errors.email.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      <FormField>\n        <FormLabel htmlFor=\"rhf-message\">{\"စာတို\"}</FormLabel>\n        <FormControl>\n          <Textarea\n            id=\"rhf-message\"\n            aria-invalid={Boolean(errors.message)}\n            placeholder={\"ဘာအတွက် ကူညီပေးရမလဲ။\"}\n            {...register(\"message\", {\n              required: \"စာတို ဖြည့်ရန် လိုအပ်ပါတယ်။\",\n              minLength: {\n                value: 10,\n                message:\n                  \"စာတိုမှာ အနည်းဆုံး စာလုံး ၁၀ လုံး ပါရပါမယ်။\",\n              },\n            })}\n          />\n        </FormControl>\n        {errors.message && (\n          <FormMessage>\n            {errors.message.message ?? \"\"}\n          </FormMessage>\n        )}\n      </FormField>\n      {isSubmitSuccessful && (\n        <p className=\"text-sm font-medium text-emerald-600 dark:text-emerald-400\">{\"စာတိုကို ပေးပို့ပြီးပါပြီ။\"}</p>\n      )}\n      <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n        <Button\n          type=\"submit\"\n          disabled={isSubmitting}\n        >\n          {isSubmitting && (\n            <Loader2 className=\"size-4 animate-spin\" />\n          )}\n          {isSubmitting ? \"ပေးပို့နေသည်…\" : \"စာတို ပေးပို့ရန်\"}\n        </Button>\n      </FormActions>\n    </Form>\n  )\n}"
  },
  "loadingCode": {
    "en": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Loader2, CheckCircle2 } from \"lucide-react\"\n\nexport function LoadingForm() {\n  const [loading, setLoading] = React.useState(false)\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setLoading(true)\n                      window.setTimeout(() => setLoading(false), 1200)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-project-name\">{\"Project name\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-project-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder=\"Binhlaig UI\"\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\" disabled={loading}>\n                        {loading ? (\n                          <Loader2 className=\"size-4 animate-spin\" />\n                        ) : (\n                          <CheckCircle2 className=\"size-4\" />\n                        )}\n                        {loading ? \"Saving...\" : \"Save project\"}\n                      </Button>\n                    </FormActions>\n                  </Form>\n  )\n}",
    "my": "\"use client\"\nimport * as React from \"react\"\nimport { Button } from \"@/components/ui/button\"\nimport { Form, FormField, FormLabel, FormControl, FormActions } from \"@/components/ui/form\"\nimport { Loader2, CheckCircle2 } from \"lucide-react\"\n\nexport function LoadingForm() {\n  const [loading, setLoading] = React.useState(false)\n  return (\n<Form\n                    onSubmit={(event) => {\n                      event.preventDefault()\n                      setLoading(true)\n                      window.setTimeout(() => setLoading(false), 1200)\n                    }}\n                  >\n                    <FormField>\n                      <FormLabel htmlFor=\"docs-project-name\">{\"Project အမည်\"}</FormLabel>\n                      <FormControl>\n                        <input\n                          id=\"docs-project-name\"\n                          className=\"h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20\"\n                          placeholder=\"Binhlaig UI\"\n                        />\n                      </FormControl>\n                    </FormField>\n                    <FormActions className=\"flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7\">\n                      <Button type=\"submit\" disabled={loading}>\n                        {loading ? (\n                          <Loader2 className=\"size-4 animate-spin\" />\n                        ) : (\n                          <CheckCircle2 className=\"size-4\" />\n                        )}\n                        {loading ? \"သိမ်းဆည်းနေသည်…\" : \"Project သိမ်းရန်\"}\n                      </Button>\n                    </FormActions>\n                  </Form>\n  )\n}"
  }
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
    } catch { setCopyFailed(true) }
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
                  : "text-muted-foreground hover:text-foreground"
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
          aria-label={t(copied ? "Copied" : "Copy code")} title={t(copyFailed ? "Copy failed" : copied ? "Copied" : "Copy code")}
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
function ReactHookFormPreview() {
  const { t } = useFormText()
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
    },
    reset,
  } = useForm<{
    name: string
    email: string
    message: string
  }>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  const onSubmit = async (values: {
    name: string
    email: string
    message: string
  }) => {
    await new Promise((resolve) =>
      window.setTimeout(resolve, 700)
    )
    console.log(values)
    reset()
  }
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel htmlFor="rhf-name">{t("Name")}</FormLabel>
        <FormControl>
          <input
            id="rhf-name"
            aria-invalid={Boolean(errors.name)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder={t("Your name")}
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message:
                  "Name must be at least 2 characters.",
              },
            })}
          />
        </FormControl>
        {errors.name && (
          <FormMessage>
            {t(errors.name.message ?? "")}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor="rhf-email">{t("Email")}</FormLabel>
        <FormControl>
          <input
            id="rhf-email"
            type="email"
            aria-invalid={Boolean(errors.email)}
            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value:
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:
                  "Enter a valid email address.",
              },
            })}
          />
        </FormControl>
        <FormDescription>{t("We will only use this email to reply.")}</FormDescription>
        {errors.email && (
          <FormMessage>
            {t(errors.email.message ?? "")}
          </FormMessage>
        )}
      </FormField>
      <FormField>
        <FormLabel htmlFor="rhf-message">{t("Message")}</FormLabel>
        <FormControl>
          <Textarea
            id="rhf-message"
            aria-invalid={Boolean(errors.message)}
            placeholder={t("How can we help?")}
            {...register("message", {
              required: "Message is required.",
              minLength: {
                value: 10,
                message:
                  "Message must be at least 10 characters.",
              },
            })}
          />
        </FormControl>
        {errors.message && (
          <FormMessage>
            {t(errors.message.message ?? "")}
          </FormMessage>
        )}
      </FormField>
      {isSubmitSuccessful && (
        <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{t("Message submitted successfully.")}</p>
      )}
      <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && (
            <Loader2 className="size-4 animate-spin" />
          )}
          {t(isSubmitting ? "Submitting..." : "Submit message")}
        </Button>
      </FormActions>
    </Form>
  )
}
export default function FormDocumentationPage() {
  const { t, language } = useFormText()

  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  const emailInvalid =
    submitted && !email.includes("@")
  return (
    <div lang={language} data-language={language} className="form-docs grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <style>{formPageStyles}</style>
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/docs/components" className="hover:text-foreground">{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">Form</span>
          </div>
          <section className="relative mb-14 overflow-hidden rounded-3xl border border-border bg-muted/30 px-6 py-10 sm:px-10">
            <div className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-32 left-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
                <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Form
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{t("Accessible layout primitives for labels, controls, helper text, validation messages, sections and actions.")}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  onClick={() =>
                    document.querySelector("#usage")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >{t("View examples")}<ArrowRight className="size-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#api-reference")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Code2 className="size-4" />{t("API reference")}</Button>
              </div>
            </div>
          </section>
          <div className="space-y-16">
            <ComponentInstallation componentName="Form" componentSlug="form" />
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the Form layout primitives from your UI directory.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-muted/60 p-5">
                <pre className="font-mono text-sm text-foreground">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Build a basic form using field, label, control and action primitives.")}
              />
              <div className="mt-6">
                <CodePreview code={formExamples.basicCode[language]}>
                  <Form noValidate
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-name">{t("Name")}</FormLabel>
                      <FormControl>
                        <input
                          id="docs-name"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder={t("Enter your name")}
                        />
                      </FormControl>
                    </FormField>
                    <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                      <Button type="submit">{t("Submit")}</Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="validation"
                title={t("Validation")}
                description={t("Use FormDescription and FormMessage to communicate field state.")}
              />
              <div className="mt-6">
                <CodePreview code={formExamples.validationCode[language]}>
                  <Form
                    onSubmit={(event) => {
                      event.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-email">{t("Email")}</FormLabel>
                      <FormControl>
                        <input
                          id="docs-email"
                          type="email"
                          value={email}
                          aria-invalid={emailInvalid}
                          onChange={(event) =>
                            setEmail(event.target.value)
                          }
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20 aria-invalid:border-destructive"
                          placeholder="you@example.com"
                        />
                      </FormControl>
                      <FormDescription>{t("We will never share your email.")}</FormDescription>
                      {emailInvalid && (
                        <FormMessage>{t("Enter a valid email address.")}</FormMessage>
                      )}
                    </FormField>
                    <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                      <Button type="submit">
                        <Mail className="size-4" />{t("Continue")}</Button>
                    </FormActions>
                  </Form>
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
                  <Form onSubmit={(event) => event.preventDefault()}>
                    <FormSection>
                      <FormSectionHeader>
                        <FormSectionTitle>{t("Profile information")}</FormSectionTitle>
                        <FormSectionDescription>{t("Update your public profile details.")}</FormSectionDescription>
                      </FormSectionHeader>
                      <FormField>
                        <FormLabel htmlFor="docs-display-name">{t("Display name")}</FormLabel>
                        <FormControl>
                          <input
                            id="docs-display-name"
                            className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                            defaultValue="Binhlaig"
                          />
                        </FormControl>
                      </FormField>
                      <FormField>
                        <FormLabel htmlFor="docs-bio">{t("Bio")}</FormLabel>
                        <FormControl>
                          <Textarea
                            id="docs-bio"
                            placeholder={t("Tell us about yourself...")}
                          />
                        </FormControl>
                      </FormField>
                    </FormSection>
                    <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                      <Button type="submit">
                        <Save className="size-4" />{t("Save changes")}</Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="settings"
                title={t("Checkbox and Select")}
                description={t("Form primitives work with native controls and custom UI components.")}
              />
              <div className="mt-6">
                <CodePreview code={formExamples.settingsCode[language]}>
                  <Form onSubmit={(event) => event.preventDefault()}>
                    <FormField className="grid-cols-[auto_1fr] items-start gap-x-3">
                      <FormControl>
                        <input
                          id="docs-notifications"
                          type="checkbox"
                          className="mt-1 size-4"
                          defaultChecked
                        />
                      </FormControl>
                      <div className="grid gap-1">
                        <FormLabel htmlFor="docs-notifications">{t("Email notifications")}</FormLabel>
                        <FormDescription>{t("Receive updates about your account.")}</FormDescription>
                      </div>
                    </FormField>
                    <FormField>
                      <FormLabel htmlFor="docs-role">{t("Role")}</FormLabel>
                      <FormControl>
                        <select
                          id="docs-role"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                        >
                          <option>{t("Developer")}</option>
                          <option>{t("Designer")}</option>
                          <option>{t("Manager")}</option>
                        </select>
                      </FormControl>
                    </FormField>
                    <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                      <Button type="submit">{t("Save settings")}</Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="react-hook-form"
                title="React Hook Form"
                description={t("Connect Binhlaig Form layout primitives to React Hook Form for typed values, validation errors and submission state.")}
              />

              <div className="mt-6">
                <CodePreview code={formExamples.reactHookFormCode[language]}>
                  <ReactHookFormPreview />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="loading"
                title={t("Submit State")}
                description={t("Disable the submit action and show progress while saving.")}
              />
              <div className="mt-6">
                <CodePreview code={formExamples.loadingCode[language]}>
                  <Form
                    onSubmit={(event) => {
                      event.preventDefault()
                      setLoading(true)
                      window.setTimeout(() => setLoading(false), 1200)
                    }}
                  >
                    <FormField>
                      <FormLabel htmlFor="docs-project-name">{t("Project name")}</FormLabel>
                      <FormControl>
                        <input
                          id="docs-project-name"
                          className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring/20"
                          placeholder="Binhlaig UI"
                        />
                      </FormControl>
                    </FormField>
                    <FormActions className="flex-wrap gap-3 [&>button]:h-auto [&>button]:min-h-10 [&>button]:w-auto [&>button]:shrink-0 [&>button]:whitespace-nowrap [&>button]:px-4 [&>button]:py-2 [&>button]:leading-7">
                      <Button type="submit" disabled={loading}>
                        {loading ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <CheckCircle2 className="size-4" />
                        )}
                        {t(loading ? "Saving..." : "Save project")}
                      </Button>
                    </FormActions>
                  </Form>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Components included in the Binhlaig UI Form layout.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Component")}</th>
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
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
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
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">{t("All components")}<ArrowRight className="size-4" />
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
              ["Usage", "#usage"],
              ["Validation", "#validation"],
              ["Form Sections", "#sections"],
              ["Checkbox and Select", "#settings"],
              ["React Hook Form", "#react-hook-form"],
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
            href="https://github.com/Sanlinns/project_ui/blob/main/app/docs/components/form/page.tsx"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t border-border pt-5 text-xs text-muted-foreground hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}