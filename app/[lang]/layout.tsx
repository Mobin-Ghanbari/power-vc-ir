import '../globals.css';
import 'vazirmatn/Vazirmatn-Variable-font-face.css';
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import Header from '@/components/Header';
import { langs, type Lang } from '@/lib/i18n';


export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    applicationName: SITE_NAME,
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <body>
        <JsonLd />
        <Header lang={lang as Lang} />
        {children}
    </body>
    </html>
  );
}