import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic, Tajawal } from "next/font/google";
import type { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

import "@/styles/globals.css";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic", "latin"],
  variable: "--font-kufi",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "ar_SA",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={siteConfig.locale} dir={siteConfig.dir} className={cn(notoKufi.variable, tajawal.variable)}>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-ink-inverse"
          >
            تخطَّ إلى المحتوى الرئيسي
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
