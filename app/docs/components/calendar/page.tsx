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
import type { Formatters, Labels, DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { Calendar as BaseCalendar } from "@/components/ui/calendar"
import { DayButton } from "react-day-picker"
const calendarMyanmar: Record<string, string> = {
  "Copy code": "Code ကူးယူရန်",
  "Copy install command": "Install command ကူးယူရန်",
  "Copied": "ကူးယူပြီးပါပြီ",
  "Components": "UI Components များ",
  "Binhlaig UI Component": "Binhlaig UI Component",
  "A flexible date picker for single dates, ranges, multiple selections and custom rules.": "ရက်တစ်ရက်၊ ရက်အပိုင်းအခြား၊ ရက်များစွာနှင့် စိတ်ကြိုက်စည်းမျဉ်းများအလိုက် ရွေးချယ်နိုင်သော date picker။",
  "View examples": "နမူနာများ ကြည့်ရန်",
  "API reference": "API အသုံးပြုနည်း",
  "Installation": "ထည့်သွင်းနည်း",
  "Initialize Binhlaig UI once, then install Calendar with the saved installer.": "Binhlaig UI ကို တစ်ကြိမ် ကနဦးပြင်ဆင်ပြီး သိမ်းထားသော installer ဖြင့် Calendar ကို ထည့်သွင်းပါ။",
  "Initialize first": "ကနဦးပြင်ဆင်မှုကို အရင်လုပ်ပါ",
  "Import": "Import လုပ်ခြင်း",
  "Import Calendar from your UI directory.": "Calendar ကို မိမိ UI folder မှ import လုပ်ပါ။",
  "Single Date": "ရက်တစ်ရက် ရွေးချယ်ခြင်း",
  "Select one date with controlled React state.": "React state ဖြင့် ထိန်းချုပ်ပြီး ရက်တစ်ရက် ရွေးချယ်ပါ။",
  "Date Range": "ရက်အပိုင်းအခြား",
  "Select a start and end date across one or more months.": "လတစ်လ သို့မဟုတ် လများစွာအတွင်း စတင်ရက်နှင့် ပြီးဆုံးရက်ကို ရွေးချယ်ပါ။",
  "Multiple Dates": "ရက်များစွာ ရွေးချယ်ခြင်း",
  "Allow users to select several independent dates.": "အသုံးပြုသူကို သီးခြားရက်များစွာ ရွေးချယ်ခွင့်ပေးပါ။",
  "Month and Year Dropdown": "လနှင့်နှစ် ရွေးချယ်မီနူး",
  "Use dropdown captions for quickly navigating across years.": "နှစ်များအကြား မြန်မြန်ပြောင်းနိုင်ရန် dropdown မီနူးကို အသုံးပြုပါ။",
  "Disabled Dates": "ရွေးချယ်မရသော ရက်များ",
  "Disable dates using matchers such as ranges and weekdays.": "ရက်အပိုင်းအခြားနှင့် ရက်သတ္တပတ်ရက်များကဲ့သို့ matcher များဖြင့် ရက်ရွေးချယ်မှုကို ပိတ်ထားပါ။",
  "Update or Overwrite": "Update သို့မဟုတ် အစားထိုးခြင်း",
  "Replace an older Calendar source with the latest registry version.": "Calendar source အဟောင်းကို registry ၏ နောက်ဆုံး version ဖြင့် အစားထိုးပါ။",
  "API Reference": "API အသုံးပြုနည်း",
  "Calendar accepts React DayPicker props.": "Calendar တွင် React DayPicker props များကို အသုံးပြုနိုင်ပါသည်။",
  "Prop": "Prop",
  "Purpose": "ရည်ရွယ်ချက်",
  "Previous component": "ယခင် Component",
  "Next": "နောက်စာမျက်နှာ",
  "All components": "Components အားလုံး",
  "On this page": "ဤစာမျက်နှာတွင်",
  "Edit this page": "ဤစာမျက်နှာကို ပြင်ဆင်ရန်",
  "single, multiple or range selection.": "ရက်တစ်ရက်၊ ရက်များစွာ သို့မဟုတ် ရက်အပိုင်းအခြား ရွေးချယ်ပုံ။",
  "Current selected date value.": "လက်ရှိရွေးထားသော ရက်တန်ဖိုး။",
  "Selection change callback.": "ရက်ရွေးချယ်မှု ပြောင်းလဲသည့်အခါ ခေါ်သော callback။",
  "Dates that cannot be selected.": "ရွေးချယ်၍ မရသော ရက်များ။",
  "Number of visible months.": "ပြသမည့် လအရေအတွက်။",
  "Label or dropdown navigation.": "လအမည် သို့မဟုတ် dropdown ဖြင့် ရွေးချယ်ပုံ။",
  "Show dates outside the current month.": "လက်ရှိလ၏ အပြင်ဘက်ရက်များကို ပြသရန်။",
  "Month & Year": "လနှင့်နှစ်",
  "preview": "နမူနာ",
  "code": "Code"
};

function useCalendarText() {
 const { language } = useLanguage();
 return (text: string) => language === "my" ? (calendarMyanmar[text] ?? text) : text;
}

const myanmarMonths = [
  "ဇန်နဝါရီ", "ဖေဖော်ဝါရီ", "မတ်", "ဧပြီ", "မေ", "ဇွန်",
  "ဇူလိုင်", "ဩဂုတ်", "စက်တင်ဘာ", "အောက်တိုဘာ", "နိုဝင်ဘာ", "ဒီဇင်ဘာ",
]
const myanmarWeekdays = ["တနင်္ဂနွေ", "တနင်္လာ", "အင်္ဂါ", "ဗုဒ္ဓဟူး", "ကြာသပတေး", "သောကြာ", "စနေ"]
const myanmarShortWeekdays = ["နွေ", "လာ", "ဂါ", "ဟူး", "ကြာ", "သော", "နေ"]
function myanmarNumber(value: number) {
  return String(value).replace(/[0-9]/g, digit => "၀၁၂၃၄၅၆၇၈၉"[Number(digit)])
}
function formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {
  const month = myanmarMonths[date.getMonth()]
  const year = myanmarNumber(date.getFullYear())
  if (options.dateStyle) return year + " " + month + " " + myanmarNumber(date.getDate()) + "၊ " + myanmarWeekdays[date.getDay()]
  if (options.weekday) return options.weekday === "short" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]
  if (options.month && options.year) return year + " " + month
  if (options.month) return month
  return year
}
const myanmarFormatters: Partial<Formatters> = {
  formatCaption: date => formatMyanmarDate(date, { month: "long", year: "numeric" }),
  formatMonthDropdown: date => formatMyanmarDate(date, { month: "long" }),
  formatYearDropdown: date => myanmarNumber(date.getFullYear()),
  formatWeekdayName: date => formatMyanmarDate(date, { weekday: "short" }),
  formatDay: date => myanmarNumber(date.getDate()),
}
const myanmarLabels: Partial<Labels> = {
  labelNav: () => "ပြက္ခဒိန် လမ်းညွှန်မီနူး",
  labelPrevious: () => "ယခင်လသို့",
  labelNext: () => "နောက်လသို့",
  labelMonthDropdown: () => "လ ရွေးချယ်ရန်",
  labelYearDropdown: () => "နှစ် ရွေးချယ်ရန်",
  labelGrid: date => formatMyanmarDate(date, { month: "long", year: "numeric" }),
  labelWeekday: date => formatMyanmarDate(date, { weekday: "long" }),
  labelDayButton: (date, modifiers) => [
    modifiers.today ? "ယနေ့" : "",
    formatMyanmarDate(date, { dateStyle: "full" }),
    modifiers.selected ? "ရွေးထားသည်" : "",
  ].filter(Boolean).join("၊ "),
}
const myanmarCalendarOptions = {
  lang: "my",
  numerals: "mymr" as const,
  formatters: myanmarFormatters,
  labels: myanmarLabels,
}

// Keep time-dependent DayPicker output out of the first hydration pass.
const subscribeToMount = () => () => {}
const getMountedSnapshot = () => true
const getServerMountedSnapshot = () => false
function CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {
  return (
    <DayButton
      {...props}
      modifiers={modifiers}
      style={{
        ...style,
        ...(modifiers.selected ? { backgroundColor: "var(--foreground)", color: "var(--background)" } : {}),
      }}
    />
  )
}

function Calendar(props: React.ComponentProps<typeof BaseCalendar>) {
  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)
  if (!mounted) return <div className="min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30" aria-hidden="true" />
  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />
}

type PreviewTab = "preview" | "code"

const importCode =
    `import { Calendar } from "@/components/ui/calendar"`
const basicCode = "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDemo() {\n  const [date, setDate] =\n    React.useState<Date | undefined>(\n      new Date()\n    )\n  return (\n    <Calendar\n      mode=\"single\"\n      selected={date}\n      onSelect={setDate}\n    />\n  )\n}";
const rangeCode = "\"use client\"\nimport * as React from \"react\"\nimport type { DateRange } from \"react-day-picker\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarRange() {\n  const [range, setRange] =\n    React.useState<DateRange | undefined>()\n  return (\n    <Calendar\n      mode=\"range\"\n      selected={range}\n      onSelect={setRange}\n      numberOfMonths={2}\n    />\n  )\n}";
const multipleCode = "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function MultipleCalendar() {\n  const [dates, setDates] =\n    React.useState<Date[] | undefined>([])\n  return (\n    <Calendar\n      mode=\"multiple\"\n      selected={dates}\n      onSelect={setDates}\n    />\n  )\n}";
const dropdownCode = "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDropdown() {\n  return (\n    <Calendar\n      mode=\"single\"\n      captionLayout=\"dropdown\"\n      startMonth={new Date(2020, 0)}\n      endMonth={new Date(2030, 11)}\n    />\n  )\n}";
const disabledCode = "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function DisabledDates() {\n  return (\n    <Calendar\n      mode=\"single\"\n      disabled={[\n        { before: new Date() },\n        { dayOfWeek: [0, 6] },\n      ]}\n    />\n  )\n}";
const myanmarExampleCode: Record<string, string> = {
  "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDemo() {\n  const [date, setDate] =\n    React.useState<Date | undefined>(\n      new Date()\n    )\n  return (\n    <Calendar\n      mode=\"single\"\n      selected={date}\n      onSelect={setDate}\n    />\n  )\n}": "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\nimport type { Formatters, Labels } from \"react-day-picker\"\n\nconst myanmarMonths = [\n  \"ဇန်နဝါရီ\", \"ဖေဖော်ဝါရီ\", \"မတ်\", \"ဧပြီ\", \"မေ\", \"ဇွန်\",\n  \"ဇူလိုင်\", \"ဩဂုတ်\", \"စက်တင်ဘာ\", \"အောက်တိုဘာ\", \"နိုဝင်ဘာ\", \"ဒီဇင်ဘာ\",\n]\nconst myanmarWeekdays = [\"တနင်္ဂနွေ\", \"တနင်္လာ\", \"အင်္ဂါ\", \"ဗုဒ္ဓဟူး\", \"ကြာသပတေး\", \"သောကြာ\", \"စနေ\"]\nconst myanmarShortWeekdays = [\"နွေ\", \"လာ\", \"ဂါ\", \"ဟူး\", \"ကြာ\", \"သော\", \"နေ\"]\nfunction myanmarNumber(value: number) {\n  return String(value).replace(/[0-9]/g, digit => \"၀၁၂၃၄၅၆၇၈၉\"[Number(digit)])\n}\nfunction formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {\n  const month = myanmarMonths[date.getMonth()]\n  const year = myanmarNumber(date.getFullYear())\n  if (options.dateStyle) return year + \" \" + month + \" \" + myanmarNumber(date.getDate()) + \"၊ \" + myanmarWeekdays[date.getDay()]\n  if (options.weekday) return options.weekday === \"short\" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]\n  if (options.month && options.year) return year + \" \" + month\n  if (options.month) return month\n  return year\n}\nconst myanmarFormatters: Partial<Formatters> = {\n  formatCaption: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  formatMonthDropdown: date => formatMyanmarDate(date, { month: \"long\" }),\n  formatYearDropdown: date => myanmarNumber(date.getFullYear()),\n  formatWeekdayName: date => formatMyanmarDate(date, { weekday: \"short\" }),\n  formatDay: date => myanmarNumber(date.getDate()),\n}\nconst myanmarLabels: Partial<Labels> = {\n  labelNav: () => \"ပြက္ခဒိန် လမ်းညွှန်မီနူး\",\n  labelPrevious: () => \"ယခင်လသို့\",\n  labelNext: () => \"နောက်လသို့\",\n  labelMonthDropdown: () => \"လ ရွေးချယ်ရန်\",\n  labelYearDropdown: () => \"နှစ် ရွေးချယ်ရန်\",\n  labelGrid: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  labelWeekday: date => formatMyanmarDate(date, { weekday: \"long\" }),\n  labelDayButton: (date, modifiers) => [\n    modifiers.today ? \"ယနေ့\" : \"\",\n    formatMyanmarDate(date, { dateStyle: \"full\" }),\n    modifiers.selected ? \"ရွေးထားသည်\" : \"\",\n  ].filter(Boolean).join(\"၊ \"),\n}\nconst myanmarCalendarOptions = {\n  lang: \"my\",\n  numerals: \"mymr\" as const,\n  formatters: myanmarFormatters,\n  labels: myanmarLabels,\n}\n\n\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDemo() {\n  const [date, setDate] =\n    React.useState<Date | undefined>(\n      new Date()\n    )\n  return (\n    <Calendar\n      {...myanmarCalendarOptions}\n      mode=\"single\"\n      selected={date}\n      onSelect={setDate}\n    />\n  )\n}",
  "\"use client\"\nimport * as React from \"react\"\nimport type { DateRange } from \"react-day-picker\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarRange() {\n  const [range, setRange] =\n    React.useState<DateRange | undefined>()\n  return (\n    <Calendar\n      mode=\"range\"\n      selected={range}\n      onSelect={setRange}\n      numberOfMonths={2}\n    />\n  )\n}": "\"use client\"\nimport * as React from \"react\"\nimport type { DateRange } from \"react-day-picker\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\nimport type { Formatters, Labels } from \"react-day-picker\"\n\nconst myanmarMonths = [\n  \"ဇန်နဝါရီ\", \"ဖေဖော်ဝါရီ\", \"မတ်\", \"ဧပြီ\", \"မေ\", \"ဇွန်\",\n  \"ဇူလိုင်\", \"ဩဂုတ်\", \"စက်တင်ဘာ\", \"အောက်တိုဘာ\", \"နိုဝင်ဘာ\", \"ဒီဇင်ဘာ\",\n]\nconst myanmarWeekdays = [\"တနင်္ဂနွေ\", \"တနင်္လာ\", \"အင်္ဂါ\", \"ဗုဒ္ဓဟူး\", \"ကြာသပတေး\", \"သောကြာ\", \"စနေ\"]\nconst myanmarShortWeekdays = [\"နွေ\", \"လာ\", \"ဂါ\", \"ဟူး\", \"ကြာ\", \"သော\", \"နေ\"]\nfunction myanmarNumber(value: number) {\n  return String(value).replace(/[0-9]/g, digit => \"၀၁၂၃၄၅၆၇၈၉\"[Number(digit)])\n}\nfunction formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {\n  const month = myanmarMonths[date.getMonth()]\n  const year = myanmarNumber(date.getFullYear())\n  if (options.dateStyle) return year + \" \" + month + \" \" + myanmarNumber(date.getDate()) + \"၊ \" + myanmarWeekdays[date.getDay()]\n  if (options.weekday) return options.weekday === \"short\" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]\n  if (options.month && options.year) return year + \" \" + month\n  if (options.month) return month\n  return year\n}\nconst myanmarFormatters: Partial<Formatters> = {\n  formatCaption: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  formatMonthDropdown: date => formatMyanmarDate(date, { month: \"long\" }),\n  formatYearDropdown: date => myanmarNumber(date.getFullYear()),\n  formatWeekdayName: date => formatMyanmarDate(date, { weekday: \"short\" }),\n  formatDay: date => myanmarNumber(date.getDate()),\n}\nconst myanmarLabels: Partial<Labels> = {\n  labelNav: () => \"ပြက္ခဒိန် လမ်းညွှန်မီနူး\",\n  labelPrevious: () => \"ယခင်လသို့\",\n  labelNext: () => \"နောက်လသို့\",\n  labelMonthDropdown: () => \"လ ရွေးချယ်ရန်\",\n  labelYearDropdown: () => \"နှစ် ရွေးချယ်ရန်\",\n  labelGrid: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  labelWeekday: date => formatMyanmarDate(date, { weekday: \"long\" }),\n  labelDayButton: (date, modifiers) => [\n    modifiers.today ? \"ယနေ့\" : \"\",\n    formatMyanmarDate(date, { dateStyle: \"full\" }),\n    modifiers.selected ? \"ရွေးထားသည်\" : \"\",\n  ].filter(Boolean).join(\"၊ \"),\n}\nconst myanmarCalendarOptions = {\n  lang: \"my\",\n  numerals: \"mymr\" as const,\n  formatters: myanmarFormatters,\n  labels: myanmarLabels,\n}\n\n\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarRange() {\n  const [range, setRange] =\n    React.useState<DateRange | undefined>()\n  return (\n    <Calendar\n      {...myanmarCalendarOptions}\n      mode=\"range\"\n      selected={range}\n      onSelect={setRange}\n      numberOfMonths={2}\n    />\n  )\n}",
  "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function MultipleCalendar() {\n  const [dates, setDates] =\n    React.useState<Date[] | undefined>([])\n  return (\n    <Calendar\n      mode=\"multiple\"\n      selected={dates}\n      onSelect={setDates}\n    />\n  )\n}": "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\nimport type { Formatters, Labels } from \"react-day-picker\"\n\nconst myanmarMonths = [\n  \"ဇန်နဝါရီ\", \"ဖေဖော်ဝါရီ\", \"မတ်\", \"ဧပြီ\", \"မေ\", \"ဇွန်\",\n  \"ဇူလိုင်\", \"ဩဂုတ်\", \"စက်တင်ဘာ\", \"အောက်တိုဘာ\", \"နိုဝင်ဘာ\", \"ဒီဇင်ဘာ\",\n]\nconst myanmarWeekdays = [\"တနင်္ဂနွေ\", \"တနင်္လာ\", \"အင်္ဂါ\", \"ဗုဒ္ဓဟူး\", \"ကြာသပတေး\", \"သောကြာ\", \"စနေ\"]\nconst myanmarShortWeekdays = [\"နွေ\", \"လာ\", \"ဂါ\", \"ဟူး\", \"ကြာ\", \"သော\", \"နေ\"]\nfunction myanmarNumber(value: number) {\n  return String(value).replace(/[0-9]/g, digit => \"၀၁၂၃၄၅၆၇၈၉\"[Number(digit)])\n}\nfunction formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {\n  const month = myanmarMonths[date.getMonth()]\n  const year = myanmarNumber(date.getFullYear())\n  if (options.dateStyle) return year + \" \" + month + \" \" + myanmarNumber(date.getDate()) + \"၊ \" + myanmarWeekdays[date.getDay()]\n  if (options.weekday) return options.weekday === \"short\" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]\n  if (options.month && options.year) return year + \" \" + month\n  if (options.month) return month\n  return year\n}\nconst myanmarFormatters: Partial<Formatters> = {\n  formatCaption: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  formatMonthDropdown: date => formatMyanmarDate(date, { month: \"long\" }),\n  formatYearDropdown: date => myanmarNumber(date.getFullYear()),\n  formatWeekdayName: date => formatMyanmarDate(date, { weekday: \"short\" }),\n  formatDay: date => myanmarNumber(date.getDate()),\n}\nconst myanmarLabels: Partial<Labels> = {\n  labelNav: () => \"ပြက္ခဒိန် လမ်းညွှန်မီနူး\",\n  labelPrevious: () => \"ယခင်လသို့\",\n  labelNext: () => \"နောက်လသို့\",\n  labelMonthDropdown: () => \"လ ရွေးချယ်ရန်\",\n  labelYearDropdown: () => \"နှစ် ရွေးချယ်ရန်\",\n  labelGrid: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  labelWeekday: date => formatMyanmarDate(date, { weekday: \"long\" }),\n  labelDayButton: (date, modifiers) => [\n    modifiers.today ? \"ယနေ့\" : \"\",\n    formatMyanmarDate(date, { dateStyle: \"full\" }),\n    modifiers.selected ? \"ရွေးထားသည်\" : \"\",\n  ].filter(Boolean).join(\"၊ \"),\n}\nconst myanmarCalendarOptions = {\n  lang: \"my\",\n  numerals: \"mymr\" as const,\n  formatters: myanmarFormatters,\n  labels: myanmarLabels,\n}\n\n\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function MultipleCalendar() {\n  const [dates, setDates] =\n    React.useState<Date[] | undefined>([])\n  return (\n    <Calendar\n      {...myanmarCalendarOptions}\n      mode=\"multiple\"\n      selected={dates}\n      onSelect={setDates}\n    />\n  )\n}",
  "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDropdown() {\n  return (\n    <Calendar\n      mode=\"single\"\n      captionLayout=\"dropdown\"\n      startMonth={new Date(2020, 0)}\n      endMonth={new Date(2030, 11)}\n    />\n  )\n}": "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\nimport type { Formatters, Labels } from \"react-day-picker\"\n\nconst myanmarMonths = [\n  \"ဇန်နဝါရီ\", \"ဖေဖော်ဝါရီ\", \"မတ်\", \"ဧပြီ\", \"မေ\", \"ဇွန်\",\n  \"ဇူလိုင်\", \"ဩဂုတ်\", \"စက်တင်ဘာ\", \"အောက်တိုဘာ\", \"နိုဝင်ဘာ\", \"ဒီဇင်ဘာ\",\n]\nconst myanmarWeekdays = [\"တနင်္ဂနွေ\", \"တနင်္လာ\", \"အင်္ဂါ\", \"ဗုဒ္ဓဟူး\", \"ကြာသပတေး\", \"သောကြာ\", \"စနေ\"]\nconst myanmarShortWeekdays = [\"နွေ\", \"လာ\", \"ဂါ\", \"ဟူး\", \"ကြာ\", \"သော\", \"နေ\"]\nfunction myanmarNumber(value: number) {\n  return String(value).replace(/[0-9]/g, digit => \"၀၁၂၃၄၅၆၇၈၉\"[Number(digit)])\n}\nfunction formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {\n  const month = myanmarMonths[date.getMonth()]\n  const year = myanmarNumber(date.getFullYear())\n  if (options.dateStyle) return year + \" \" + month + \" \" + myanmarNumber(date.getDate()) + \"၊ \" + myanmarWeekdays[date.getDay()]\n  if (options.weekday) return options.weekday === \"short\" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]\n  if (options.month && options.year) return year + \" \" + month\n  if (options.month) return month\n  return year\n}\nconst myanmarFormatters: Partial<Formatters> = {\n  formatCaption: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  formatMonthDropdown: date => formatMyanmarDate(date, { month: \"long\" }),\n  formatYearDropdown: date => myanmarNumber(date.getFullYear()),\n  formatWeekdayName: date => formatMyanmarDate(date, { weekday: \"short\" }),\n  formatDay: date => myanmarNumber(date.getDate()),\n}\nconst myanmarLabels: Partial<Labels> = {\n  labelNav: () => \"ပြက္ခဒိန် လမ်းညွှန်မီနူး\",\n  labelPrevious: () => \"ယခင်လသို့\",\n  labelNext: () => \"နောက်လသို့\",\n  labelMonthDropdown: () => \"လ ရွေးချယ်ရန်\",\n  labelYearDropdown: () => \"နှစ် ရွေးချယ်ရန်\",\n  labelGrid: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  labelWeekday: date => formatMyanmarDate(date, { weekday: \"long\" }),\n  labelDayButton: (date, modifiers) => [\n    modifiers.today ? \"ယနေ့\" : \"\",\n    formatMyanmarDate(date, { dateStyle: \"full\" }),\n    modifiers.selected ? \"ရွေးထားသည်\" : \"\",\n  ].filter(Boolean).join(\"၊ \"),\n}\nconst myanmarCalendarOptions = {\n  lang: \"my\",\n  numerals: \"mymr\" as const,\n  formatters: myanmarFormatters,\n  labels: myanmarLabels,\n}\n\n\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function CalendarDropdown() {\n  return (\n    <Calendar\n      {...myanmarCalendarOptions}\n      mode=\"single\"\n      captionLayout=\"dropdown\"\n      startMonth={new Date(2020, 0)}\n      endMonth={new Date(2030, 11)}\n    />\n  )\n}",
  "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function DisabledDates() {\n  return (\n    <Calendar\n      mode=\"single\"\n      disabled={[\n        { before: new Date() },\n        { dayOfWeek: [0, 6] },\n      ]}\n    />\n  )\n}": "\"use client\"\nimport * as React from \"react\"\nimport { Calendar as BaseCalendar } from \"@/components/ui/calendar\"\nimport { DayButton } from \"react-day-picker\"\nimport type { Formatters, Labels } from \"react-day-picker\"\n\nconst myanmarMonths = [\n  \"ဇန်နဝါရီ\", \"ဖေဖော်ဝါရီ\", \"မတ်\", \"ဧပြီ\", \"မေ\", \"ဇွန်\",\n  \"ဇူလိုင်\", \"ဩဂုတ်\", \"စက်တင်ဘာ\", \"အောက်တိုဘာ\", \"နိုဝင်ဘာ\", \"ဒီဇင်ဘာ\",\n]\nconst myanmarWeekdays = [\"တနင်္ဂနွေ\", \"တနင်္လာ\", \"အင်္ဂါ\", \"ဗုဒ္ဓဟူး\", \"ကြာသပတေး\", \"သောကြာ\", \"စနေ\"]\nconst myanmarShortWeekdays = [\"နွေ\", \"လာ\", \"ဂါ\", \"ဟူး\", \"ကြာ\", \"သော\", \"နေ\"]\nfunction myanmarNumber(value: number) {\n  return String(value).replace(/[0-9]/g, digit => \"၀၁၂၃၄၅၆၇၈၉\"[Number(digit)])\n}\nfunction formatMyanmarDate(date: Date, options: Intl.DateTimeFormatOptions) {\n  const month = myanmarMonths[date.getMonth()]\n  const year = myanmarNumber(date.getFullYear())\n  if (options.dateStyle) return year + \" \" + month + \" \" + myanmarNumber(date.getDate()) + \"၊ \" + myanmarWeekdays[date.getDay()]\n  if (options.weekday) return options.weekday === \"short\" ? myanmarShortWeekdays[date.getDay()] : myanmarWeekdays[date.getDay()]\n  if (options.month && options.year) return year + \" \" + month\n  if (options.month) return month\n  return year\n}\nconst myanmarFormatters: Partial<Formatters> = {\n  formatCaption: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  formatMonthDropdown: date => formatMyanmarDate(date, { month: \"long\" }),\n  formatYearDropdown: date => myanmarNumber(date.getFullYear()),\n  formatWeekdayName: date => formatMyanmarDate(date, { weekday: \"short\" }),\n  formatDay: date => myanmarNumber(date.getDate()),\n}\nconst myanmarLabels: Partial<Labels> = {\n  labelNav: () => \"ပြက္ခဒိန် လမ်းညွှန်မီနူး\",\n  labelPrevious: () => \"ယခင်လသို့\",\n  labelNext: () => \"နောက်လသို့\",\n  labelMonthDropdown: () => \"လ ရွေးချယ်ရန်\",\n  labelYearDropdown: () => \"နှစ် ရွေးချယ်ရန်\",\n  labelGrid: date => formatMyanmarDate(date, { month: \"long\", year: \"numeric\" }),\n  labelWeekday: date => formatMyanmarDate(date, { weekday: \"long\" }),\n  labelDayButton: (date, modifiers) => [\n    modifiers.today ? \"ယနေ့\" : \"\",\n    formatMyanmarDate(date, { dateStyle: \"full\" }),\n    modifiers.selected ? \"ရွေးထားသည်\" : \"\",\n  ].filter(Boolean).join(\"၊ \"),\n}\nconst myanmarCalendarOptions = {\n  lang: \"my\",\n  numerals: \"mymr\" as const,\n  formatters: myanmarFormatters,\n  labels: myanmarLabels,\n}\n\n\n// Keep time-dependent DayPicker output out of the first hydration pass.\nconst subscribeToMount = () => () => {}\nconst getMountedSnapshot = () => true\nconst getServerMountedSnapshot = () => false\nfunction CalendarDayButton({ modifiers, style, ...props }: React.ComponentProps<typeof DayButton>) {\n  return (\n    <DayButton\n      {...props}\n      modifiers={modifiers}\n      style={{\n        ...style,\n        ...(modifiers.selected ? { backgroundColor: \"var(--foreground)\", color: \"var(--background)\" } : {}),\n      }}\n    />\n  )\n}\n\nfunction Calendar(props: React.ComponentProps<typeof BaseCalendar>) {\n  const mounted = React.useSyncExternalStore(subscribeToMount, getMountedSnapshot, getServerMountedSnapshot)\n  if (!mounted) return <div className=\"min-h-[300px] w-[280px] max-w-full animate-pulse rounded-2xl border bg-muted/30\" aria-hidden=\"true\" />\n  return <BaseCalendar {...props} components={{ ...props.components, DayButton: CalendarDayButton }} />\n}\n\nexport function DisabledDates() {\n  return (\n    <Calendar\n      {...myanmarCalendarOptions}\n      mode=\"single\"\n      disabled={[\n        { before: new Date() },\n        { dayOfWeek: [0, 6] },\n      ]}\n    />\n  )\n}"
};

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
    const t = useCalendarText()
    const { language } = useLanguage()
    const exampleCode = language === "my" ? (myanmarExampleCode[code] ?? code) : code
    const [tab, setTab] =
        React.useState<PreviewTab>("preview")
    const [copied, setCopied] = React.useState(false)
    const copyCode = async () => {
        await navigator.clipboard.writeText(exampleCode)
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
                            {t(item)}
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
                <div className="flex min-h-[360px] items-center justify-center bg-muted/20 p-6">
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
    )
}
export default function CalendarDocumentationPage() {
    const t = useCalendarText()
    const { language } = useLanguage()
    const [date, setDate] =
        React.useState<Date | undefined>(new Date())
    const [range, setRange] =
        React.useState<DateRange | undefined>()
    const [dates, setDates] =
        React.useState<Date[] | undefined>([])

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
                            Calendar
                        </span>
                    </div>
                    <section className="border-b pb-10">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-primary">
                            <Sparkles className="size-3.5" />{t("Binhlaig UI Component")}</div>
                        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                            Calendar
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">{t("A flexible date picker for single dates, ranges, multiple selections and custom rules.")}</p>
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
                        <ComponentInstallation componentName="Calendar" componentSlug="calendar" />
                        <section>
                            <SectionTitle
                                id="import"
                                title={t("Import")}
                                description={t("Import Calendar from your UI directory.")}
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
                                title={t("Single Date")}
                                description={t("Select one date with controlled React state.")}
                            />
                            <div className="mt-6">
                                <CodePreview code={basicCode}>
                                    <Calendar {...(language === "my" ? myanmarCalendarOptions : {})}
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                    />
                                </CodePreview>
                            </div>
                        </section>
                        <section>
                            <SectionTitle
                                id="range"
                                title={t("Date Range")}
                                description={t("Select a start and end date across one or more months.")}
                            />
                            <div className="mt-6">
                                <CodePreview code={rangeCode}>
                                    <Calendar {...(language === "my" ? myanmarCalendarOptions : {})}
                                        mode="range"
                                        selected={range}
                                        onSelect={setRange}
                                        numberOfMonths={2}
                                    />
                                </CodePreview>
                            </div>
                        </section>
                        <section>
                            <SectionTitle
                                id="multiple"
                                title={t("Multiple Dates")}
                                description={t("Allow users to select several independent dates.")}
                            />
                            <div className="mt-6">
                                <CodePreview code={multipleCode}>
                                    <Calendar {...(language === "my" ? myanmarCalendarOptions : {})}
                                        mode="multiple"
                                        selected={dates}
                                        onSelect={setDates}
                                    />
                                </CodePreview>
                            </div>
                        </section>
                        <section>
                            <SectionTitle
                                id="dropdown"
                                title={t("Month and Year Dropdown")}
                                description={t("Use dropdown captions for quickly navigating across years.")}
                            />
                            <div className="mt-6">
                                <CodePreview code={dropdownCode}>
                                    <Calendar {...(language === "my" ? myanmarCalendarOptions : {})}
                                        mode="single"
                                        captionLayout="dropdown"
                                        startMonth={new Date(2020, 0)}
                                        endMonth={new Date(2030, 11)}
                                    />
                                </CodePreview>
                            </div>
                        </section>
                        <section>
                            <SectionTitle
                                id="disabled"
                                title={t("Disabled Dates")}
                                description={t("Disable dates using matchers such as ranges and weekdays.")}
                            />
                            <div className="mt-6">
                                <CodePreview code={disabledCode}>
                                    <Calendar {...(language === "my" ? myanmarCalendarOptions : {})}
                                        mode="single"
                                        disabled={[
                                            { before: new Date() },
                                            { dayOfWeek: [0, 6] },
                                        ]}
                                    />
                                </CodePreview>
                            </div>
                        </section>

                        <section>
                            <SectionTitle
                                id="api-reference"
                                title={t("API Reference")}
                                description={t("Calendar accepts React DayPicker props.")}
                            />
                            <div className="mt-6 overflow-x-auto rounded-2xl border">
                                <table className="w-full min-w-[760px] text-left text-sm">
                                    <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                                        <tr>
                                            <th className="px-5 py-4 font-medium">{t("Prop")}</th>
                                            <th className="px-5 py-4 font-medium">{t("Purpose")}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {[
                                            ["mode", "single, multiple or range selection."],
                                            ["selected", "Current selected date value."],
                                            ["onSelect", "Selection change callback."],
                                            ["disabled", "Dates that cannot be selected."],
                                            ["numberOfMonths", "Number of visible months."],
                                            ["captionLayout", "Label or dropdown navigation."],
                                            ["showOutsideDays", "Show dates outside the current month."],
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
                                href="/docs/components/breadcrumb"
                                className="rounded-2xl border p-5 hover:border-primary/40 hover:bg-muted/40"
                            >
                                <div className="text-xs text-muted-foreground">{t("Previous component")}</div>
                                <div className="mt-2 flex items-center gap-2 font-semibold">
                                    <ArrowLeft className="size-4" />
                                    Breadcrumb
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
                            ["Single Date", "#usage"],
                            ["Date Range", "#range"],
                            ["Multiple Dates", "#multiple"],
                            ["Month & Year", "#dropdown"],
                            ["Disabled Dates", "#disabled"],
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