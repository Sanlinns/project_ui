import { cookies } from "next/headers";
import { LanguageProvider } from "@/components/providers/language-provider";
import { LANGUAGE_COOKIE, parseLanguage } from "@/lib/language";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Myanmar } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";
import {
  ToastProvider,
  Toaster,
} from "@/components/ui/toast"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myanmarFont = Noto_Sans_Myanmar({
  variable: "--font-myanmar",
  subsets: ["myanmar", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Binhlaig UI — Build beautiful interfaces, faster",
  description:
    "Accessible, responsive components and production-ready templates for modern web products.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/logo/ui_icon.png",
    shortcut: "/logo/ui_icon.png",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = parseLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value ?? cookieStore.get("binhlaig-language")?.value);
  return (
    <html lang={language} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${myanmarFont.variable} antialiased`}

      >
        <LanguageProvider initialLanguage={language}>
        <ToastProvider>
          <ThemeProvider>
            {children}
            <Toaster position="top-center" />
          </ThemeProvider>
        </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
