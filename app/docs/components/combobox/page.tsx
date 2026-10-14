"use client"
import { ComponentInstallation } from "@/components/docs/component-installation";
import * as React from "react"
import { useLanguage } from "@/components/providers/language-provider"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  Code2,
  ExternalLink,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/components/ui/combobox"
const comboboxMyanmar: Record<string,string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Copy install command": "Install command ကူးယူရန်",
  "Framework": "Framework",
  "Select framework...": "Framework ရွေးချယ်ရန်…",
  "Clear selection": "ရွေးချယ်မှု ရှင်းရန်",
  "Open options": "ရွေးချယ်စရာများ ဖွင့်ရန်",
  "No frameworks found.": "Framework မတွေ့ပါ။",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A searchable input combined with a predefined list of selectable options.": "ရှာဖွေရိုက်ထည့်နိုင်သော input နှင့် သတ်မှတ်ထားသော ရွေးချယ်စရာစာရင်းကို ပေါင်းစပ်ထားသော Component။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install ComboBox using the saved installer.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် ComboBox ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import the ComboBox primitives you need.": "လိုအပ်သော ComboBox အခြေခံ Components များကို import လုပ်ပါ။",
  "Basic": "အခြေခံအသုံးပြုပုံ",
  "Filter and select from a predefined list.": "သတ်မှတ်ထားသောစာရင်းမှ ရှာဖွေစစ်ထုတ်ပြီး ရွေးချယ်ပါ။",
  "Controlled Value": "ရွေးချယ်မှုကို ကိုယ်တိုင်ထိန်းခြင်း",
  "Manage the selected option from React state.": "React state ဖြင့် ရွေးထားသော option ကို ထိန်းချုပ်ပါ။",
  "Selected:": "ရွေးထားသည် —",
  "None": "မရွေးထားပါ",
  "Grouped Options": "အုပ်စုခွဲထားသော ရွေးချယ်စရာများ",
  "Organize large option lists into readable groups.": "ရှည်လျားသောစာရင်းကို ဖတ်ရလွယ်သည့် အုပ်စုများအဖြစ် ခွဲပါ။",
  "Choose a framework...": "Framework ရွေးချယ်ပါ…",
  "No results.": "ရလဒ် မတွေ့ပါ။",
  "Disabled": "အသုံးမပြုနိုင်သော အခြေအနေ",
  "Disable the complete control when selection is unavailable.": "ရွေးချယ်မှု မရရှိနိုင်သေးသည့်အခါ control တစ်ခုလုံးကို ပိတ်ထားပါ။",
  "Unavailable": "အသုံးမပြုနိုင်ပါ",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older ComboBox source with the latest registry version.": "ComboBox source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Main primitives available in Binhlaig UI ComboBox.": "Binhlaig UI ComboBox တွင် ရရှိနိုင်သော အဓိက Components များ။",
  "Component": "Component",
  "Purpose": "ရည်ရွယ်ချက်",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "Controls items, value and open state.": "Items၊ ရွေးထားသောတန်ဖိုးနှင့် အဖွင့်အပိတ်ကို ထိန်းချုပ်ပါသည်။",
  "Filters available options.": "ရွေးချယ်စရာများကို ရှာဖွေစစ်ထုတ်ပါသည်။",
  "Opens or closes the popup.": "Popup ကို ဖွင့် သို့မဟုတ် ပိတ်ပါသည်။",
  "Clears the selected option.": "ရွေးထားသော option ကို ရှင်းပါသည်။",
  "Floating option container.": "ရွေးချယ်စရာများကို ပြသသော floating container။",
  "Renders available items.": "ရရှိနိုင်သော items များကို ပြသပါသည်။",
  "A selectable option.": "ရွေးချယ်နိုင်သော option တစ်ခု။",
  "Marks the selected option.": "ရွေးထားသော option ကို အမှတ်အသားပြပါသည်။",
  "Shown when filtering has no results.": "ရှာဖွေစစ်ထုတ်ရာတွင် ရလဒ်မရှိပါက ပြသပါသည်။",
  "Groups related options.": "ဆက်စပ်သော options များကို အုပ်စုဖွဲ့ပါသည်။",
  "preview": "နမူနာ",
  "code": "Code"
};
function useComboboxText() {
 const {language}=useLanguage();
 return (text:string)=>language==="my"?(comboboxMyanmar[text]??text):text;
}
const comboboxExamples = {
  "usage": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nfunction FrameworkCombobox({ value, onValueChange, }: {\n    value?: Option | null;\n    onValueChange?: (value: Option | null) => void;\n}) {\n    return (<Combobox items={frameworks} value={value} onValueChange={onValueChange}>\n      <ComboboxInputGroup>\n        <ComboboxInput aria-label=\"Framework\" placeholder=\"Select framework...\"/>\n        <ComboboxClear aria-label=\"Clear selection\"/>\n        <ComboboxTrigger aria-label=\"Open options\"/>\n      </ComboboxInputGroup>\n      <ComboboxPortal>\n        <ComboboxPositioner>\n          <ComboboxPopup>\n            <ComboboxEmpty>\n              No frameworks found.\n            </ComboboxEmpty>\n            <ComboboxList>\n              {(item: Option) => (<ComboboxItem key={item.value} value={t(item)}>\n                  {item.label}\n                  <ComboboxItemIndicator />\n                </ComboboxItem>)}\n            </ComboboxList>\n          </ComboboxPopup>\n        </ComboboxPositioner>\n      </ComboboxPortal>\n    </Combobox>);\n}\nexport function ComboboxExample() {\n    return (<FrameworkCombobox />);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nfunction FrameworkCombobox({ value, onValueChange, }: {\n    value?: Option | null;\n    onValueChange?: (value: Option | null) => void;\n}) {\n    return (<Combobox items={frameworks} value={value} onValueChange={onValueChange}>\n      <ComboboxInputGroup>\n        <ComboboxInput aria-label=\"Framework\" placeholder=\"Framework ရွေးချယ်ရန်…\"/>\n        <ComboboxClear aria-label=\"ရွေးချယ်မှု ရှင်းရန်\"/>\n        <ComboboxTrigger aria-label=\"ရွေးချယ်စရာများ ဖွင့်ရန်\"/>\n      </ComboboxInputGroup>\n      <ComboboxPortal>\n        <ComboboxPositioner>\n          <ComboboxPopup>\n            <ComboboxEmpty>\n              Framework မတွေ့ပါ။\n            </ComboboxEmpty>\n            <ComboboxList>\n              {(item: Option) => (<ComboboxItem key={item.value} value={item}>\n                  {item.label}\n                  <ComboboxItemIndicator />\n                </ComboboxItem>)}\n            </ComboboxList>\n          </ComboboxPopup>\n        </ComboboxPositioner>\n      </ComboboxPortal>\n    </Combobox>);\n}\nexport function ComboboxExample() {\n    return (<FrameworkCombobox />);\n}\n"
  },
  "controlled": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nfunction FrameworkCombobox({ value, onValueChange, }: {\n    value?: Option | null;\n    onValueChange?: (value: Option | null) => void;\n}) {\n    return (<Combobox items={frameworks} value={value} onValueChange={onValueChange}>\n      <ComboboxInputGroup>\n        <ComboboxInput aria-label=\"Framework\" placeholder=\"Select framework...\"/>\n        <ComboboxClear aria-label=\"Clear selection\"/>\n        <ComboboxTrigger aria-label=\"Open options\"/>\n      </ComboboxInputGroup>\n      <ComboboxPortal>\n        <ComboboxPositioner>\n          <ComboboxPopup>\n            <ComboboxEmpty>\n              No frameworks found.\n            </ComboboxEmpty>\n            <ComboboxList>\n              {(item: Option) => (<ComboboxItem key={item.value} value={item}>\n                  {item.label}\n                  <ComboboxItemIndicator />\n                </ComboboxItem>)}\n            </ComboboxList>\n          </ComboboxPopup>\n        </ComboboxPositioner>\n      </ComboboxPortal>\n    </Combobox>);\n}\nexport function ComboboxExample() {\n    const [selected, setSelected] = React.useState<Option | null>(frameworks[0]);\n    return (<div className=\"grid gap-3\">\n                    <FrameworkCombobox value={selected} onValueChange={setSelected}/>\n                    <p className=\"text-sm text-muted-foreground\">\n                      Selected: {selected?.label ?? \"None\"}\n                    </p>\n                  </div>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nfunction FrameworkCombobox({ value, onValueChange, }: {\n    value?: Option | null;\n    onValueChange?: (value: Option | null) => void;\n}) {\n    return (<Combobox items={frameworks} value={value} onValueChange={onValueChange}>\n      <ComboboxInputGroup>\n        <ComboboxInput aria-label=\"Framework\" placeholder=\"Framework ရွေးချယ်ရန်…\"/>\n        <ComboboxClear aria-label=\"ရွေးချယ်မှု ရှင်းရန်\"/>\n        <ComboboxTrigger aria-label=\"ရွေးချယ်စရာများ ဖွင့်ရန်\"/>\n      </ComboboxInputGroup>\n      <ComboboxPortal>\n        <ComboboxPositioner>\n          <ComboboxPopup>\n            <ComboboxEmpty>\n              Framework မတွေ့ပါ။\n            </ComboboxEmpty>\n            <ComboboxList>\n              {(item: Option) => (<ComboboxItem key={item.value} value={item}>\n                  {item.label}\n                  <ComboboxItemIndicator />\n                </ComboboxItem>)}\n            </ComboboxList>\n          </ComboboxPopup>\n        </ComboboxPositioner>\n      </ComboboxPortal>\n    </Combobox>);\n}\nexport function ComboboxExample() {\n    const [selected, setSelected] = React.useState<Option | null>(frameworks[0]);\n    return (<div className=\"grid gap-3\">\n                    <FrameworkCombobox value={selected} onValueChange={setSelected}/>\n                    <p className=\"text-sm text-muted-foreground\">\n                      ရွေးထားသည် — {selected?.label ?? \"မရွေးထားပါ\"}\n                    </p>\n                  </div>);\n}\n"
  },
  "grouped": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nexport function ComboboxExample() {\n    const reactItems = groupedOptions.filter(item => item.group === \"React\");\n    const vueItems = groupedOptions.filter(item => item.group === \"Vue\");\n    return (<Combobox>\n                    <ComboboxInputGroup>\n                      <ComboboxInput aria-label=\"Framework\" placeholder=\"Choose a framework...\"/>\n                      <ComboboxTrigger aria-label=\"Open options\"/>\n                    </ComboboxInputGroup>\n                    <ComboboxPortal>\n                      <ComboboxPositioner>\n                        <ComboboxPopup>\n                          <ComboboxEmpty>\n                            No results.\n                          </ComboboxEmpty>\n                          <ComboboxList>\n                            <ComboboxGroup>\n                              <ComboboxGroupLabel>\n                                React\n                              </ComboboxGroupLabel>\n                              {reactItems.map((item) => (<ComboboxItem key={item.value} value={item}>\n                                  {item.label}\n                                  <ComboboxItemIndicator />\n                                </ComboboxItem>))}\n                            </ComboboxGroup>\n                            <ComboboxSeparator />\n                            <ComboboxGroup>\n                              <ComboboxGroupLabel>\n                                Vue\n                              </ComboboxGroupLabel>\n                              {vueItems.map((item) => (<ComboboxItem key={item.value} value={item}>\n                                  {item.label}\n                                  <ComboboxItemIndicator />\n                                </ComboboxItem>))}\n                            </ComboboxGroup>\n                          </ComboboxList>\n                        </ComboboxPopup>\n                      </ComboboxPositioner>\n                    </ComboboxPortal>\n                  </Combobox>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nexport function ComboboxExample() {\n    const reactItems = groupedOptions.filter(item => item.group === \"React\");\n    const vueItems = groupedOptions.filter(item => item.group === \"Vue\");\n    return (<Combobox>\n                    <ComboboxInputGroup>\n                      <ComboboxInput aria-label=\"Framework\" placeholder=\"Framework ရွေးချယ်ပါ…\"/>\n                      <ComboboxTrigger aria-label=\"ရွေးချယ်စရာများ ဖွင့်ရန်\"/>\n                    </ComboboxInputGroup>\n                    <ComboboxPortal>\n                      <ComboboxPositioner>\n                        <ComboboxPopup>\n                          <ComboboxEmpty>\n                            ရလဒ် မတွေ့ပါ။\n                          </ComboboxEmpty>\n                          <ComboboxList>\n                            <ComboboxGroup>\n                              <ComboboxGroupLabel>\n                                React\n                              </ComboboxGroupLabel>\n                              {reactItems.map((item) => (<ComboboxItem key={item.value} value={item}>\n                                  {item.label}\n                                  <ComboboxItemIndicator />\n                                </ComboboxItem>))}\n                            </ComboboxGroup>\n                            <ComboboxSeparator />\n                            <ComboboxGroup>\n                              <ComboboxGroupLabel>\n                                Vue\n                              </ComboboxGroupLabel>\n                              {vueItems.map((item) => (<ComboboxItem key={item.value} value={item}>\n                                  {item.label}\n                                  <ComboboxItemIndicator />\n                                </ComboboxItem>))}\n                            </ComboboxGroup>\n                          </ComboboxList>\n                        </ComboboxPopup>\n                      </ComboboxPositioner>\n                    </ComboboxPortal>\n                  </Combobox>);\n}\n"
  },
  "disabled": {
    "en": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nexport function ComboboxExample() {\n    return (<Combobox items={frameworks} disabled>\n                    <ComboboxInputGroup>\n                      <ComboboxInput aria-label=\"Framework\" placeholder=\"Unavailable\"/>\n                      <ComboboxTrigger aria-label=\"Open options\"/>\n                    </ComboboxInputGroup>\n                  </Combobox>);\n}\n",
    "my": "\"use client\";\nimport * as React from \"react\";\nimport { Combobox, ComboboxClear, ComboboxEmpty, ComboboxGroup, ComboboxGroupLabel, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, ComboboxSeparator, ComboboxTrigger, } from \"@/components/ui/combobox\";\ntype Option = {\n    value: string;\n    label: string;\n    group?: string;\n};\nconst frameworks: Option[] = [\n    { value: \"next\", label: \"Next.js\" },\n    { value: \"react\", label: \"React\" },\n    { value: \"vue\", label: \"Vue\" },\n    { value: \"svelte\", label: \"Svelte\" },\n    { value: \"angular\", label: \"Angular\" },\n];\nconst groupedOptions: Option[] = [\n    { value: \"next\", label: \"Next.js\", group: \"React\" },\n    { value: \"remix\", label: \"Remix\", group: \"React\" },\n    { value: \"nuxt\", label: \"Nuxt\", group: \"Vue\" },\n    { value: \"vite-vue\", label: \"Vue + Vite\", group: \"Vue\" },\n];\nexport function ComboboxExample() {\n    return (<Combobox items={frameworks} disabled>\n                    <ComboboxInputGroup>\n                      <ComboboxInput aria-label=\"Framework\" placeholder=\"အသုံးမပြုနိုင်ပါ\"/>\n                      <ComboboxTrigger aria-label=\"ရွေးချယ်စရာများ ဖွင့်ရန်\"/>\n                    </ComboboxInputGroup>\n                  </Combobox>);\n}\n"
  }
};
type PreviewTab = "preview" | "code"
type Option = {
  value: string
  label: string
  group?: string
}
const frameworks: Option[] = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
]
const groupedOptions: Option[] = [
  { value: "next", label: "Next.js", group: "React" },
  { value: "remix", label: "Remix", group: "React" },
  { value: "nuxt", label: "Nuxt", group: "Vue" },
  { value: "vite-vue", label: "Vue + Vite", group: "Vue" },
]

const importCode = `import {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
} from "@/components/ui/combobox"`

function cn(
  ...classes: Array<string | false | null | undefined>
) {
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
  return (
    <div id={id} className="scroll-mt-28">
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-[15px] leading-7 text-muted-foreground">
          {description}
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
  const t = useComboboxText()
  const [tab, setTab] =
    React.useState<PreviewTab>("preview")
  const [copied, setCopied] =
    React.useState(false)
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="overflow-hidden rounded-2xl border bg-background">
      <div className="flex items-center justify-between border-b px-3">
        <div className="flex">
          {(["preview", "code"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className={cn(
                "relative px-3 py-3 text-sm font-medium capitalize",
                tab === item
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item}
              {tab === item && (
                <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
          aria-label={copied ? t("Copied") : t("Copy code")}
        >
          {copied ? (
            <Check className="size-4 text-emerald-500" />
          ) : (
            <Clipboard className="size-4" />
          )}
        </button>
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-[280px] items-center justify-center bg-muted/20 p-8">
          <div className="w-full max-w-sm">
            {children}
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto bg-slate-950 p-5">
          <pre className="min-w-max font-mono text-[13px] leading-6 text-slate-300">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
function FrameworkCombobox({
  value,
  onValueChange,
}: {
  value?: Option | null
  onValueChange?: (value: Option | null) => void
}) {
  const t = useComboboxText()
  return (
    <Combobox
      items={frameworks}
      value={value}
      onValueChange={onValueChange}
    >
      <ComboboxInputGroup>
        <ComboboxInput
          aria-label={t("Framework")}
          placeholder={t("Select framework...")}
        />
        <ComboboxClear aria-label={t("Clear selection")} />
        <ComboboxTrigger aria-label={t("Open options")} />
      </ComboboxInputGroup>
      <ComboboxPortal>
        <ComboboxPositioner>
          <ComboboxPopup>
            <ComboboxEmpty>{t("No frameworks found.")}</ComboboxEmpty>
            <ComboboxList>
              {(item: Option) => (
                <ComboboxItem
                  key={item.value}
                  value={item}
                >
                  {item.label}
                  <ComboboxItemIndicator />
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  )
}
export default function ComboboxDocumentationPage() {
  const t = useComboboxText()
  const { language } = useLanguage()

  const [selected, setSelected] =
    React.useState<Option | null>(frameworks[0])

  const reactItems = groupedOptions.filter(
    (item) => item.group === "React"
  )
  const vueItems = groupedOptions.filter(
    (item) => item.group === "Vue"
  )
  return (
    <div className="grid w-full gap-12 xl:grid-cols-[minmax(0,1fr)_220px]">
      <main className="min-w-0">
        <article className="mx-auto max-w-4xl">
          <div className="mb-7 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              href="/docs/components"
              className="hover:text-foreground"
            >{t("Components")}</Link>
            <span>/</span>
            <span className="text-foreground">
              ComboBox
            </span>
          </div>
          <section className="border-b pb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
            <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              ComboBox
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{t("A searchable input combined with a predefined list of selectable options.")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={() =>
                  document
                    .querySelector("#usage")
                    ?.scrollIntoView({
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
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                <Code2 className="size-4" />{t("API reference")}</Button>
            </div>
          </section>
          <div className="mt-12 space-y-16">
            <ComponentInstallation componentName="Combobox" componentSlug="combobox" />
            <section>
              <SectionTitle
                id="import"
                title={t("Import")}
                description={t("Import the ComboBox primitives you need.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-300">
                  <code>{importCode}</code>
                </pre>
              </div>
            </section>
            <section>
              <SectionTitle
                id="usage"
                title={t("Basic")}
                description={t("Filter and select from a predefined list.")}
              />
              <div className="mt-6">
                <CodePreview code={comboboxExamples["usage"][language]}>
                  <FrameworkCombobox />
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="controlled"
                title={t("Controlled Value")}
                description={t("Manage the selected option from React state.")}
              />
              <div className="mt-6">
                <CodePreview code={comboboxExamples["controlled"][language]}>
                  <div className="grid gap-3">
                    <FrameworkCombobox
                      value={selected}
                      onValueChange={setSelected}
                    />
                    <p className="text-sm text-muted-foreground">{t("Selected:")}{selected?.label ?? t("None")}
                    </p>
                  </div>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="grouped"
                title={t("Grouped Options")}
                description={t("Organize large option lists into readable groups.")}
              />
              <div className="mt-6">
                <CodePreview code={comboboxExamples["grouped"][language]}>
                  <Combobox>
                    <ComboboxInputGroup>
                      <ComboboxInput
                        aria-label={t("Framework")}
                        placeholder={t("Choose a framework...")}
                      />
                      <ComboboxTrigger aria-label={t("Open options")} />
                    </ComboboxInputGroup>
                    <ComboboxPortal>
                      <ComboboxPositioner>
                        <ComboboxPopup>
                          <ComboboxEmpty>{t("No results.")}</ComboboxEmpty>
                          <ComboboxList>
                            <ComboboxGroup>
                              <ComboboxGroupLabel>
                                React
                              </ComboboxGroupLabel>
                              {reactItems.map((item) => (
                                <ComboboxItem
                                  key={item.value}
                                  value={item}
                                >
                                  {item.label}
                                  <ComboboxItemIndicator />
                                </ComboboxItem>
                              ))}
                            </ComboboxGroup>
                            <ComboboxSeparator />
                            <ComboboxGroup>
                              <ComboboxGroupLabel>
                                Vue
                              </ComboboxGroupLabel>
                              {vueItems.map((item) => (
                                <ComboboxItem
                                  key={item.value}
                                  value={item}
                                >
                                  {item.label}
                                  <ComboboxItemIndicator />
                                </ComboboxItem>
                              ))}
                            </ComboboxGroup>
                          </ComboboxList>
                        </ComboboxPopup>
                      </ComboboxPositioner>
                    </ComboboxPortal>
                  </Combobox>
                </CodePreview>
              </div>
            </section>
            <section>
              <SectionTitle
                id="disabled"
                title={t("Disabled")}
                description={t("Disable the complete control when selection is unavailable.")}
              />
              <div className="mt-6">
                <CodePreview code={comboboxExamples["disabled"][language]}>
                  <Combobox items={frameworks} disabled>
                    <ComboboxInputGroup>
                      <ComboboxInput
                        aria-label={t("Framework")}
                        placeholder={t("Unavailable")}
                      />
                      <ComboboxTrigger aria-label={t("Open options")} />
                    </ComboboxInputGroup>
                  </Combobox>
                </CodePreview>
              </div>
            </section>

            <section>
              <SectionTitle
                id="api-reference"
                title={t("API Reference")}
                description={t("Main primitives available in Binhlaig UI ComboBox.")}
              />
              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      <th className="px-5 py-4 font-medium">{t("Component")}</th>
                      <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ["Combobox", "Controls items, value and open state."],
                      ["ComboboxInput", "Filters available options."],
                      ["ComboboxTrigger", "Opens or closes the popup."],
                      ["ComboboxClear", "Clears the selected option."],
                      ["ComboboxPopup", "Floating option container."],
                      ["ComboboxList", "Renders available items."],
                      ["ComboboxItem", "A selectable option."],
                      ["ComboboxItemIndicator", "Marks the selected option."],
                      ["ComboboxEmpty", "Shown when filtering has no results."],
                      ["ComboboxGroup", "Groups related options."],
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
            <div className="grid gap-4 border-t pt-8 sm:grid-cols-2">
              <Link
                href="/docs/components/calendar"
                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
              >
                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                <div className="mt-2 flex items-center gap-2 font-semibold">
                  <ArrowLeft className="size-4" />
                  Calendar
                </div>
              </Link>
              <Link
                href="/docs/components"
                className="rounded-2xl border p-5 text-right hover:border-primary/40 hover:bg-muted/40"
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
        <div className="sticky top-24 border-l pl-5">
          <p className="mb-4 text-sm font-semibold">{t("On this page")}</p>
          <nav className="space-y-1">
            {[
              ["Installation", "#installation"],
              ["Import", "#import"],
              ["Basic", "#usage"],
              ["Controlled Value", "#controlled"],
              ["Grouped Options", "#grouped"],
              ["Disabled", "#disabled"],
              ["API Reference", "#api-reference"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block py-1.5 text-[13px] text-muted-foreground hover:text-primary"
              >
                {t(label)}
              </a>
            ))}
          </nav>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="mt-7 flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground hover:text-foreground"
          >{t("Edit this page")}<ExternalLink className="size-3.5" />
          </a>
        </div>
      </aside>
    </div>
  )
}