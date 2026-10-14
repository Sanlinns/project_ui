"use client";
import { ComponentInstallation } from "@/components/docs/component-installation";
import React, { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Clipboard,
  Code2,
  CreditCard,
  ExternalLink,
  Heart,
  MoreHorizontal,
  Package,
  ShoppingCart,
  Sparkles,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const cardMyanmar: Record<string, string> = {
  "Preview": "နမူနာ",
  "Code": "Code",
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "Cards group related content and actions into a clear, flexible container.": "Card သည် ဆက်စပ်အကြောင်းအရာနှင့် လုပ်ဆောင်ချက်များကို ရှင်းလင်းပြီး လိုသလိုပြင်နိုင်သော container တစ်ခုအတွင်း စုစည်းပေးပါသည်။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Add the latest Card component using either the Binhlaig Native installer or the Shadcn CLI installer.": "နောက်ဆုံး Card component ကို Binhlaig Native installer သို့မဟုတ် Shadcn CLI installer ဖြင့် ထည့်သွင်းပါ။",
  "Initialize Binhlaig UI first": "Binhlaig UI ကို အရင် ကနဦးပြင်ဆင်ပါ",
  "The init command prepares the shared Binhlaig theme, utilities, component directory and required dependencies.": "init command က Binhlaig theme၊ utilities၊ Component folder နှင့် လိုအပ်သော dependencies များကို ပြင်ဆင်ပေးပါသည်။",
  "Copy installation command": "Install command ကူးယူရန်",
  "Native Beta fetches the Card directly from the Binhlaig registry and writes it into your project.": "Native Beta က Card ကို Binhlaig registry မှ တိုက်ရိုက်ရယူပြီး မိမိ project ထဲသို့ ထည့်ပေးပါသည်။",
  "Shadcn Stable uses the Shadcn CLI engine, but still installs the same Binhlaig Card registry source.": "Shadcn Stable က Shadcn CLI ကို အသုံးပြုပြီး Binhlaig Card registry source ကိုပင် ထည့်သွင်းပေးပါသည်။",
  "Import": "Import လုပ်ခြင်း",
  "Import the Card components from your UI components directory.": "Card Components များကို မိမိ UI components folder မှ import လုပ်ပါ။",
  "Copy import code": "Import code ကူးယူရန်",
  "Usage": "အသုံးပြုပုံ",
  "Use Card components to group related content.": "ဆက်စပ်အကြောင်းအရာများကို စုစည်းပြသရန် Card Components ကို အသုံးပြုပါ။",
  "Reusable components for React and Next.js projects.": "React နှင့် Next.js project များအတွက် ပြန်သုံးနိုင်သော Components များ။",
  "Build clean and modern user interfaces quickly.": "ရှင်းလင်းပြီး ခေတ်မီသော UI များကို မြန်မြန်တည်ဆောက်ပါ။",
  "Card Footer": "Card အောက်ခြေအပိုင်း",
  "Use CardFooter to display related actions.": "ဆက်စပ်လုပ်ဆောင်ချက်များကို ပြသရန် CardFooter ကို အသုံးပြုပါ။",
  "Create project": "Project ဖန်တီးရန်",
  "Start a new project using Binhlaig UI.": "Binhlaig UI ဖြင့် project အသစ်တစ်ခု စတင်ပါ။",
  "Your project will include reusable components and Tailwind CSS styles.": "မိမိ project တွင် ပြန်သုံးနိုင်သော Components နှင့် Tailwind CSS styles များ ပါဝင်ပါမည်။",
  "Cancel": "မလုပ်တော့ပါ",
  "Card Action": "Card လုပ်ဆောင်ချက်",
  "Use CardAction for actions aligned with the card heading.": "Card ခေါင်းစဉ်နှင့် တစ်တန်းတည်းပြမည့် လုပ်ဆောင်ချက်များအတွက် CardAction ကို အသုံးပြုပါ။",
  "Team members": "အဖွဲ့ဝင်များ",
  "Manage people with access to this project.": "ဤ project ကို အသုံးပြုခွင့်ရှိသူများကို စီမံပါ။",
  "More options": "နောက်ထပ်ရွေးချယ်စရာများ",
  "12 team members": "အဖွဲ့ဝင် ၁၂ ဦး",
  "Workspace access enabled": "Workspace အသုံးပြုခွင့် ရရှိထားသည်",
  "Login Card": "အကောင့်ဝင်ရန် Card",
  "Cards can contain forms, inputs and actions.": "Card ထဲတွင် forms၊ inputs နှင့် လုပ်ဆောင်ချက်ခလုတ်များ ထည့်နိုင်ပါသည်။",
  "Welcome back": "ပြန်လည်ကြိုဆိုပါသည်",
  "Enter your account details to continue.": "ဆက်လက်အသုံးပြုရန် အကောင့်အချက်အလက်များ ထည့်ပါ။",
  "Email": "အီးမေးလ်",
  "Password": "စကားဝှက်",
  "Enter your password": "စကားဝှက် ထည့်ပါ",
  "Sign in": "အကောင့်ဝင်ရန်",
  "Product Card": "ကုန်ပစ္စည်း Card",
  "Combine images, content and actions in a product card.": "ကုန်ပစ္စည်း Card တွင် ပုံ၊ အကြောင်းအရာနှင့် လုပ်ဆောင်ချက်များကို ပေါင်းစပ်ပြပါ။",
  "Wireless Headphones": "ကြိုးမဲ့နားကြပ်",
  "High-quality sound with active noise cancellation.": "အသံအရည်အသွေးကောင်းပြီး ပြင်ပဆူညံသံ လျှော့ချပေးနိုင်ပါသည်။",
  "Add to favourites": "နှစ်သက်စာရင်း ထည့်ရန်",
  "Add to cart": "ဈေးဝယ်ခြင်းထဲ ထည့်ရန်",
  "Notification Card": "အသိပေးချက် Card",
  "Display alerts, notifications and status information.": "သတိပေးချက်၊ အသိပေးချက်နှင့် အခြေအနေအချက်အလက်များကို ပြသပါ။",
  "Notifications": "အသိပေးချက်များ",
  "You have three unread notifications.": "မဖတ်ရသေးသော အသိပေးချက် ၃ ခု ရှိပါသည်။",
  "View notifications": "အသိပေးချက်များ ကြည့်ရန်",
  "Deployment successful": "Deployment အောင်မြင်ပါသည်",
  "Your project was deployed successfully.": "မိမိ project ကို အောင်မြင်စွာ တင်ပြီးပါပြီ။",
  "Horizontal Card": "အလျားလိုက် Card",
  "Use a horizontal layout for compact content and actions.": "အကြောင်းအရာနှင့် လုပ်ဆောင်ချက်များကို ကျစ်လျစ်စွာပြရန် အလျားလိုက် layout အသုံးပြုပါ။",
  "Starter components": "စတင်အသုံးပြုရန် Components",
  "Install reusable buttons, cards, inputs and tabs in your Next.js project.": "မိမိ Next.js project တွင် ပြန်သုံးနိုင်သော buttons၊ cards၊ inputs နှင့် tabs များ ထည့်သွင်းပါ။",
  "View package": "Package ကြည့်ရန်",
  "Custom Style": "စိတ်ကြိုက်ပုံစံ",
  "Customize Card components using Tailwind CSS classes.": "Tailwind CSS classes ဖြင့် Card Components ကို စိတ်ကြိုက်ပြင်ဆင်ပါ။",
  "Custom card": "စိတ်ကြိုက် Card",
  "Use className to customize the card style.": "Card ပုံစံကို စိတ်ကြိုက်ပြင်ရန် className ကို အသုံးပြုပါ။",
  "Binhlaig UI components support Tailwind CSS utility classes.": "Binhlaig UI Components များတွင် Tailwind CSS utility classes ကို အသုံးပြုနိုင်ပါသည်။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Card source file with the latest registry version.": "Card source ဖိုင်အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "Existing Card code will be replaced": "လက်ရှိ Card code ကို အစားထိုးပါမည်",
  "Save your custom changes before running the overwrite command.": "Overwrite command မလုပ်မီ မိမိပြင်ထားသော code ကို သိမ်းထားပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Components available in the Binhlaig UI Card.": "Binhlaig UI Card တွင် ပါဝင်သော Components များ။",
  "Component": "Component",
  "Element": "HTML Element",
  "Description": "ရှင်းလင်းချက်",
  "The main card container.": "Card ၏ အဓိက container။",
  "Contains the card title, description and action.": "Card title၊ description နှင့် action တို့ကို စုစည်းပါသည်။",
  "Displays the primary card heading.": "Card ၏ အဓိကခေါင်းစဉ်ကို ပြသပါသည်။",
  "Displays supporting text below the title.": "Title အောက်တွင် ရှင်းလင်းချက်စာသားကို ပြသပါသည်။",
  "Displays an action aligned with the card heading.": "Card ခေါင်းစဉ်နှင့် တစ်တန်းတည်း လုပ်ဆောင်ချက်ကို ပြသပါသည်။",
  "Contains the main card content.": "Card ၏ အဓိကအကြောင်းအရာ ပါဝင်ပါသည်။",
  "Contains actions or supporting content at the bottom.": "အောက်ခြေတွင် လုပ်ဆောင်ချက်များ သို့မဟုတ် ဆက်စပ်အကြောင်းအရာ ပါဝင်ပါသည်။",
  "Previous component": "ယခင် Component",
  "Next component": "နောက် Component",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်"
};

function useCardText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (cardMyanmar[text] ?? text) : text;
}

const cardExamples = {
  "usage": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardContent } from \"@/components/ui/card\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Binhlaig UI</CardTitle>\n                      <CardDescription>\n                        Reusable components for React and Next.js\n                        projects.\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        Build clean and modern user interfaces\n                        quickly.\n                      </p>\n                    </CardContent>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardContent } from \"@/components/ui/card\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Binhlaig UI</CardTitle>\n                      <CardDescription>\n                        React နှင့် Next.js project များအတွက် ပြန်သုံးနိုင်သော Components များ။\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        ရှင်းလင်းပြီး ခေတ်မီသော UI များကို မြန်မြန်တည်ဆောက်ပါ။\n                      </p>\n                    </CardContent>\n                  </Card>);\n}\n"
  },
  "footer": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Create project</CardTitle>\n                      <CardDescription>\n                        Start a new project using Binhlaig UI.\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        Your project will include reusable\n                        components and Tailwind CSS styles.\n                      </p>\n                    </CardContent>\n                    <CardFooter className=\"gap-3\">\n                      <Button variant=\"outline\">\n                        Cancel\n                      </Button>\n                      <Button>Create project</Button>\n                    </CardFooter>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Project ဖန်တီးရန်</CardTitle>\n                      <CardDescription>\n                        Binhlaig UI ဖြင့် project အသစ်တစ်ခု စတင်ပါ။\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        မိမိ project တွင် ပြန်သုံးနိုင်သော Components နှင့် Tailwind CSS styles များ ပါဝင်ပါမည်။\n                      </p>\n                    </CardContent>\n                    <CardFooter className=\"gap-3\">\n                      <Button variant=\"outline\">\n                        မလုပ်တော့ပါ\n                      </Button>\n                      <Button>Project ဖန်တီးရန်</Button>\n                    </CardFooter>\n                  </Card>);\n}\n"
  },
  "action": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { MoreHorizontal, User } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Team members</CardTitle>\n                      <CardDescription>\n                        Manage people with access to this project.\n                      </CardDescription>\n                      <CardAction>\n                        <Button size=\"icon\" variant=\"ghost\" aria-label=\"More options\">\n                          <MoreHorizontal />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-center gap-3\">\n                        <div className=\"flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                          <User className=\"size-5\"/>\n                        </div>\n                        <div>\n                          <p className=\"text-sm font-medium\">\n                            12 team members\n                          </p>\n                          <p className=\"text-sm text-slate-500\">\n                            Workspace access enabled\n                          </p>\n                        </div>\n                      </div>\n                    </CardContent>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { MoreHorizontal, User } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>အဖွဲ့ဝင်များ</CardTitle>\n                      <CardDescription>\n                        ဤ project ကို အသုံးပြုခွင့်ရှိသူများကို စီမံပါ။\n                      </CardDescription>\n                      <CardAction>\n                        <Button size=\"icon\" variant=\"ghost\" aria-label=\"နောက်ထပ်ရွေးချယ်စရာများ\">\n                          <MoreHorizontal />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-center gap-3\">\n                        <div className=\"flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                          <User className=\"size-5\"/>\n                        </div>\n                        <div>\n                          <p className=\"text-sm font-medium\">\n                            အဖွဲ့ဝင် ၁၂ ဦး\n                          </p>\n                          <p className=\"text-sm text-slate-500\">\n                            Workspace အသုံးပြုခွင့် ရရှိထားသည်\n                          </p>\n                        </div>\n                      </div>\n                    </CardContent>\n                  </Card>);\n}\n"
  },
  "login-card": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>Welcome back</CardTitle>\n                      <CardDescription>\n                        Enter your account details to continue.\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent className=\"space-y-4\">\n                      <div className=\"space-y-2\">\n                        <label htmlFor=\"demo-email\" className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                          Email\n                        </label>\n                        <input id=\"demo-email\" type=\"email\" placeholder=\"you@example.com\" className=\"flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white\"/>\n                      </div>\n                      <div className=\"space-y-2\">\n                        <label htmlFor=\"demo-password\" className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                          Password\n                        </label>\n                        <input id=\"demo-password\" type=\"password\" placeholder=\"Enter your password\" className=\"flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white\"/>\n                      </div>\n                    </CardContent>\n                    <CardFooter>\n                      <Button fullWidth>Sign in</Button>\n                    </CardFooter>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <CardTitle>ပြန်လည်ကြိုဆိုပါသည်</CardTitle>\n                      <CardDescription>\n                        ဆက်လက်အသုံးပြုရန် အကောင့်အချက်အလက်များ ထည့်ပါ။\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent className=\"space-y-4\">\n                      <div className=\"space-y-2\">\n                        <label htmlFor=\"demo-email\" className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                          အီးမေးလ်\n                        </label>\n                        <input id=\"demo-email\" type=\"email\" placeholder=\"you@example.com\" className=\"flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white\"/>\n                      </div>\n                      <div className=\"space-y-2\">\n                        <label htmlFor=\"demo-password\" className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                          စကားဝှက်\n                        </label>\n                        <input id=\"demo-password\" type=\"password\" placeholder=\"စကားဝှက် ထည့်ပါ\" className=\"flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white\"/>\n                      </div>\n                    </CardContent>\n                    <CardFooter>\n                      <Button fullWidth>အကောင့်ဝင်ရန်</Button>\n                    </CardFooter>\n                  </Card>);\n}\n"
  },
  "product-card": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { CreditCard, Heart, Star, ShoppingCart } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-sm overflow-hidden pt-0\">\n                    <div className=\"flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-50 to-violet-100 dark:from-blue-500/10 dark:to-violet-500/10\">\n                      <CreditCard className=\"size-20 text-blue-500/60\"/>\n                    </div>\n                    <CardHeader>\n                      <CardTitle>\n                        Wireless Headphones\n                      </CardTitle>\n                      <CardDescription>\n                        High-quality sound with active noise\n                        cancellation.\n                      </CardDescription>\n                      <CardAction>\n                        <Button variant=\"ghost\" size=\"icon\" aria-label=\"Add to favourites\">\n                          <Heart />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-center justify-between\">\n                        <span className=\"text-2xl font-bold text-slate-950 dark:text-white\">\n                          $129\n                        </span>\n                        <div className=\"flex items-center gap-1 text-sm font-medium\">\n                          <Star className=\"size-4 fill-amber-400 text-amber-400\"/>\n                          4.8\n                        </div>\n                      </div>\n                    </CardContent>\n                    <CardFooter>\n                      <Button fullWidth leftIcon={<ShoppingCart />}>\n                        Add to cart\n                      </Button>\n                    </CardFooter>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { CreditCard, Heart, Star, ShoppingCart } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-sm overflow-hidden pt-0\">\n                    <div className=\"flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-50 to-violet-100 dark:from-blue-500/10 dark:to-violet-500/10\">\n                      <CreditCard className=\"size-20 text-blue-500/60\"/>\n                    </div>\n                    <CardHeader>\n                      <CardTitle>\n                        ကြိုးမဲ့နားကြပ်\n                      </CardTitle>\n                      <CardDescription>\n                        အသံအရည်အသွေးကောင်းပြီး ပြင်ပဆူညံသံ လျှော့ချပေးနိုင်ပါသည်။\n                      </CardDescription>\n                      <CardAction>\n                        <Button variant=\"ghost\" size=\"icon\" aria-label=\"နှစ်သက်စာရင်း ထည့်ရန်\">\n                          <Heart />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-center justify-between\">\n                        <span className=\"text-2xl font-bold text-slate-950 dark:text-white\">\n                          $129\n                        </span>\n                        <div className=\"flex items-center gap-1 text-sm font-medium\">\n                          <Star className=\"size-4 fill-amber-400 text-amber-400\"/>\n                          4.8\n                        </div>\n                      </div>\n                    </CardContent>\n                    <CardFooter>\n                      <Button fullWidth leftIcon={<ShoppingCart />}>\n                        ဈေးဝယ်ခြင်းထဲ ထည့်ရန်\n                      </Button>\n                    </CardFooter>\n                  </Card>);\n}\n"
  },
  "notification-card": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { Bell, ChevronRight, CheckCircle } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <div className=\"mb-2 flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                        <Bell className=\"size-5\"/>\n                      </div>\n                      <CardTitle>Notifications</CardTitle>\n                      <CardDescription>\n                        You have three unread notifications.\n                      </CardDescription>\n                      <CardAction>\n                        <Button variant=\"ghost\" size=\"icon\" aria-label=\"View notifications\">\n                          <ChevronRight />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900\">\n                        <CheckCircle2 className=\"mt-0.5 size-5 shrink-0 text-emerald-500\"/>\n                        <div>\n                          <p className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                            Deployment successful\n                          </p>\n                          <p className=\"mt-1 text-sm leading-6 text-slate-500\">\n                            Your project was deployed\n                            successfully.\n                          </p>\n                        </div>\n                      </div>\n                    </CardContent>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { Bell, ChevronRight, CheckCircle } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md\">\n                    <CardHeader>\n                      <div className=\"mb-2 flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                        <Bell className=\"size-5\"/>\n                      </div>\n                      <CardTitle>အသိပေးချက်များ</CardTitle>\n                      <CardDescription>\n                        မဖတ်ရသေးသော အသိပေးချက် ၃ ခု ရှိပါသည်။\n                      </CardDescription>\n                      <CardAction>\n                        <Button variant=\"ghost\" size=\"icon\" aria-label=\"အသိပေးချက်များ ကြည့်ရန်\">\n                          <ChevronRight />\n                        </Button>\n                      </CardAction>\n                    </CardHeader>\n                    <CardContent>\n                      <div className=\"flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900\">\n                        <CheckCircle2 className=\"mt-0.5 size-5 shrink-0 text-emerald-500\"/>\n                        <div>\n                          <p className=\"text-sm font-medium text-slate-900 dark:text-slate-100\">\n                            Deployment အောင်မြင်ပါသည်\n                          </p>\n                          <p className=\"mt-1 text-sm leading-6 text-slate-500\">\n                            မိမိ project ကို အောင်မြင်စွာ တင်ပြီးပါပြီ။\n                          </p>\n                        </div>\n                      </div>\n                    </CardContent>\n                  </Card>);\n}\n"
  },
  "horizontal-card": {
    "en": "import { Card, CardContent, CardTitle, CardDescription } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { Package } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-2xl\">\n                    <CardContent className=\"flex flex-col gap-5 p-6 sm:flex-row sm:items-center\">\n                      <div className=\"flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                        <Package className=\"size-7\"/>\n                      </div>\n                      <div className=\"min-w-0 flex-1\">\n                        <CardTitle>\n                          Starter components\n                        </CardTitle>\n                        <CardDescription className=\"mt-2\">\n                          Install reusable buttons, cards, inputs\n                          and tabs in your Next.js project.\n                        </CardDescription>\n                      </div>\n                      <Button className=\"shrink-0\">\n                        View package\n                      </Button>\n                    </CardContent>\n                  </Card>);\n}\n",
    "my": "import { Card, CardContent, CardTitle, CardDescription } from \"@/components/ui/card\";\nimport { Button } from \"@/components/ui/button\";\nimport { Package } from \"lucide-react\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-2xl\">\n                    <CardContent className=\"flex flex-col gap-5 p-6 sm:flex-row sm:items-center\">\n                      <div className=\"flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400\">\n                        <Package className=\"size-7\"/>\n                      </div>\n                      <div className=\"min-w-0 flex-1\">\n                        <CardTitle>\n                          စတင်အသုံးပြုရန် Components\n                        </CardTitle>\n                        <CardDescription className=\"mt-2\">\n                          မိမိ Next.js project တွင် ပြန်သုံးနိုင်သော buttons၊ cards၊ inputs နှင့် tabs များ ထည့်သွင်းပါ။\n                        </CardDescription>\n                      </div>\n                      <Button className=\"shrink-0\">\n                        Package ကြည့်ရန်\n                      </Button>\n                    </CardContent>\n                  </Card>);\n}\n"
  },
  "custom-style": {
    "en": "import { Card, CardHeader, CardTitle, CardDescription, CardContent } from \"@/components/ui/card\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-500/10 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-slate-950\">\n                    <CardHeader>\n                      <CardTitle className=\"text-blue-700 dark:text-blue-300\">\n                        Custom card\n                      </CardTitle>\n                      <CardDescription>\n                        Use className to customize the card style.\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        Binhlaig UI components support Tailwind CSS\n                        utility classes.\n                      </p>\n                    </CardContent>\n                  </Card>);\n}\n",
    "my": "import { Card, CardHeader, CardTitle, CardDescription, CardContent } from \"@/components/ui/card\";\nexport function CardExample() {\n    return (<Card className=\"w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-500/10 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-slate-950\">\n                    <CardHeader>\n                      <CardTitle className=\"text-blue-700 dark:text-blue-300\">\n                        စိတ်ကြိုက် Card\n                      </CardTitle>\n                      <CardDescription>\n                        Card ပုံစံကို စိတ်ကြိုက်ပြင်ရန် className ကို အသုံးပြုပါ။\n                      </CardDescription>\n                    </CardHeader>\n                    <CardContent>\n                      <p className=\"text-sm leading-6 text-slate-600 dark:text-slate-400\">\n                        Binhlaig UI Components များတွင် Tailwind CSS utility classes ကို အသုံးပြုနိုင်ပါသည်။\n                      </p>\n                    </CardContent>\n                  </Card>);\n}\n"
  }
};

type PreviewTab = "preview" | "code";

type CodePreviewProps = {
  children: React.ReactNode;
  code: string;
  className?: string;
};

const importCode = `import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";`;

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}
function CodePreview({
  children,
  code,
  className,
}: CodePreviewProps) {
  const t = useCardText();
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
            "flex min-h-[300px] items-center justify-center p-6 sm:p-10",
            "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_65%)]",
            className,
          )}
        >
          {children}
        </div>
      ) : (
        <div className="relative overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{code}</code>
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
    <div
      id={id}
      className="scroll-mt-28"
    >
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
export default function CardDocumentationPage() {
  const t = useCardText()
  const { language } = useLanguage()

  const [importCopied, setImportCopied] = useState(false);

  const copyImportCode = async () => {
    try {
      await navigator.clipboard.writeText(importCode);
      setImportCopied(true);
      window.setTimeout(() => {
        setImportCopied(false);
      }, 1500);
    } catch (error) {
      console.error("Unable to copy import code:", error);
    }
  };
  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
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
              Card
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
                Card
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">{t("Cards group related content and actions into a clear, flexible container.")}</p>
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
            <ComponentInstallation componentName="Card" componentSlug="card" />
            {/* Import */}
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the Card components from your UI components directory.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2">
                  <span className="text-xs text-slate-500">
                    TypeScript
                  </span>
                  <button
                    type="button"
                    onClick={copyImportCode}
                    className="inline-flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-900 hover:text-white"
                    aria-label={t("Copy import code")}
                  >
                    {importCopied ? (
                      <Check className="size-4 text-emerald-400" />
                    ) : (
                      <Clipboard className="size-4" />
                    )}
                  </button>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            {/* Usage */}
            <section>
              <SectionTitle
                id="usage"
                title={t("Usage")}
                description={t("Use Card components to group related content.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["usage"][language]}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>Binhlaig UI</CardTitle>
                      <CardDescription>{t("Reusable components for React and Next.js projects.")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Build clean and modern user interfaces quickly.")}</p>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Footer */}
            <section>
              <SectionTitle
                id="footer"
                title={t("Card Footer")}
                description={t("Use CardFooter to display related actions.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["footer"][language]}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>{t("Create project")}</CardTitle>
                      <CardDescription>{t("Start a new project using Binhlaig UI.")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Your project will include reusable components and Tailwind CSS styles.")}</p>
                    </CardContent>
                    <CardFooter className="gap-3">
                      <Button variant="outline">{t("Cancel")}</Button>
                      <Button>{t("Create project")}</Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Action */}
            <section>
              <SectionTitle
                id="action"
                title={t("Card Action")}
                description={t("Use CardAction for actions aligned with the card heading.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["action"][language]}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>{t("Team members")}</CardTitle>
                      <CardDescription>{t("Manage people with access to this project.")}</CardDescription>
                      <CardAction>
                        <Button
                          size="icon"
                          variant="ghost"
                          aria-label={t("More options")}
                        >
                          <MoreHorizontal />
                        </Button>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                          <User className="size-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{t("12 team members")}</p>
                          <p className="text-sm text-slate-500">{t("Workspace access enabled")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Login Card */}
            <section>
              <SectionTitle
                id="login-card"
                title={t("Login Card")}
                description={t("Cards can contain forms, inputs and actions.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["login-card"][language]}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <CardTitle>{t("Welcome back")}</CardTitle>
                      <CardDescription>{t("Enter your account details to continue.")}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="demo-email"
                          className="text-sm font-medium text-slate-900 dark:text-slate-100"
                        >{t("Email")}</label>
                        <input
                          id="demo-email"
                          type="email"
                          placeholder="you@example.com"
                          className="flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="demo-password"
                          className="text-sm font-medium text-slate-900 dark:text-slate-100"
                        >{t("Password")}</label>
                        <input
                          id="demo-password"
                          type="password"
                          placeholder={t("Enter your password")}
                          className="flex h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button fullWidth>{t("Sign in")}</Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Product Card */}
            <section>
              <SectionTitle
                id="product-card"
                title={t("Product Card")}
                description={t("Combine images, content and actions in a product card.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["product-card"][language]}>
                  <Card className="w-full max-w-sm overflow-hidden pt-0">
                    <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-blue-50 to-violet-100 dark:from-blue-500/10 dark:to-violet-500/10">
                      <CreditCard className="size-20 text-blue-500/60" />
                    </div>
                    <CardHeader>
                      <CardTitle>{t("Wireless Headphones")}</CardTitle>
                      <CardDescription>{t("High-quality sound with active noise cancellation.")}</CardDescription>
                      <CardAction>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={t("Add to favourites")}
                        >
                          <Heart />
                        </Button>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-slate-950 dark:text-white">
                          $129
                        </span>
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <Star className="size-4 fill-amber-400 text-amber-400" />
                          4.8
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        fullWidth
                        leftIcon={<ShoppingCart />}
                      >{t("Add to cart")}</Button>
                    </CardFooter>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Notification */}
            <section>
              <SectionTitle
                id="notification-card"
                title={t("Notification Card")}
                description={t("Display alerts, notifications and status information.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["notification-card"][language]}>
                  <Card className="w-full max-w-md">
                    <CardHeader>
                      <div className="mb-2 flex size-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Bell className="size-5" />
                      </div>
                      <CardTitle>{t("Notifications")}</CardTitle>
                      <CardDescription>{t("You have three unread notifications.")}</CardDescription>
                      <CardAction>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={t("View notifications")}
                        >
                          <ChevronRight />
                        </Button>
                      </CardAction>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{t("Deployment successful")}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-500">{t("Your project was deployed successfully.")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Horizontal */}
            <section>
              <SectionTitle
                id="horizontal-card"
                title={t("Horizontal Card")}
                description={t("Use a horizontal layout for compact content and actions.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["horizontal-card"][language]}>
                  <Card className="w-full max-w-2xl">
                    <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
                      <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        <Package className="size-7" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <CardTitle>{t("Starter components")}</CardTitle>
                        <CardDescription className="mt-2">{t("Install reusable buttons, cards, inputs and tabs in your Next.js project.")}</CardDescription>
                      </div>
                      <Button className="shrink-0">{t("View package")}</Button>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Custom */}
            <section>
              <SectionTitle
                id="custom-style"
                title={t("Custom Style")}
                description={t("Customize Card components using Tailwind CSS classes.")}
              />
              <div className="mt-6">
                <CodePreview code={cardExamples["custom-style"][language]}>
                  <Card className="w-full max-w-md border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-500/10 dark:border-blue-500/20 dark:from-blue-500/10 dark:to-slate-950">
                    <CardHeader>
                      <CardTitle className="text-blue-700 dark:text-blue-300">{t("Custom card")}</CardTitle>
                      <CardDescription>{t("Use className to customize the card style.")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">{t("Binhlaig UI components support Tailwind CSS utility classes.")}</p>
                    </CardContent>
                  </Card>
                </CodePreview>
              </div>
            </section>
            {/* Overwrite */}

            {/* API Reference */}
            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Components available in the Binhlaig UI Card.")}
              />
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-900/70 dark:text-slate-400">
                      <tr>
                        <th className="px-5 py-4 font-medium">{t("Component")}</th>
                        <th className="px-5 py-4 font-medium">{t("Element")}</th>
                        <th className="px-5 py-4 font-medium">{t("Description")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      <ApiRow
                        name="Card"
                        element="div"
                        description={t("The main card container.")}
                      />
                      <ApiRow
                        name="CardHeader"
                        element="div"
                        description={t("Contains the card title, description and action.")}
                      />
                      <ApiRow
                        name="CardTitle"
                        element="div"
                        description={t("Displays the primary card heading.")}
                      />
                      <ApiRow
                        name="CardDescription"
                        element="div"
                        description={t("Displays supporting text below the title.")}
                      />
                      <ApiRow
                        name="CardAction"
                        element="div"
                        description={t("Displays an action aligned with the card heading.")}
                      />
                      <ApiRow
                        name="CardContent"
                        element="div"
                        description={t("Contains the main card content.")}
                      />
                      <ApiRow
                        name="CardFooter"
                        element="div"
                        description={t("Contains actions or supporting content at the bottom.")}
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            {/* Bottom Navigation */}
            <div className="grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2 dark:border-slate-800">
              <Link
                href="/docs/components/button"
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Button
                </div>
              </Link>
              <Link
                href="/docs/components/input"
                className="group rounded-2xl border border-slate-200 p-5 text-right transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-slate-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
              >
                <div className="text-xs text-slate-500">{t("Next component")}</div>
                <div className="mt-2 flex items-center justify-end gap-2 font-semibold">
                  Input
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
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Usage", "#usage"],
              ["Card Footer", "#footer"],
              ["Card Action", "#action"],
              ["Login Card", "#login-card"],
              ["Product Card", "#product-card"],
              ["Notification Card", "#notification-card"],
              ["Horizontal Card", "#horizontal-card"],
              ["Custom Style", "#custom-style"],
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
function ApiRow({
  name,
  element,
  description,
}: {
  name: string;
  element: string;
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
          {element}
        </code>
      </td>
      <td className="px-5 py-4 leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </td>
    </tr>
  );
}