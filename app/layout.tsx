import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ویدئو چک ایران",
  description: "گزارش‌های ویدئویی از استان‌های ایران",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}