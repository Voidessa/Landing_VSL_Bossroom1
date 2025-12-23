import type { Metadata } from "next";
import { Inter, Oswald, Anton } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "slv-amir-saliev-total-red-flag",
  description: "Закрытое сообщество для развития мужского мышления, дисциплины и характера.",
  icons: {
    icon: "/icon.jpg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.jpg",
  },
};

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";
import { Analytics } from "@vercel/analytics/react";

import { ClientLayout } from "./ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;800&family=Oswald:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          <Suspense fallback={null}>
            <AnalyticsProvider />
          </Suspense>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
