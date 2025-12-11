import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "BOSSROOM | Сообщество сильных мужчин",
  description: "Закрытое сообщество для развития мужского мышления, дисциплины и характера.",
};

import { AnalyticsProvider } from "@/components/analytics/AnalyticsProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <AnalyticsProvider />
      </body>
    </html>
  );
}
