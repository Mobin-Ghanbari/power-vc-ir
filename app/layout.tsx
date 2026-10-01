import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
const vazir = localFont({
    src: [
    { path: "../public/fonts/Vazirmatn-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Vazirmatn-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Vazirmatn-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ویدئو چک ایران",
  description: "گزارش‌های ویدئویی از استان‌های ایران",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>

      <body>  <Navbar />
  <div className="mx-auto max-w-5xl px-4 pt-8">{children}</div>
    <Footer />
      </body>
    </html>
  );
}