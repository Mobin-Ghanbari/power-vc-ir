import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyUs from '@/components/WhyUs';
import { notFound } from 'next/navigation';
import { langs, type Lang } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  if (!langs.includes(rawLang as Lang)) {
    notFound();
  }
  const lang = rawLang as Lang;

  return (
    <>
      <Hero lang={lang} />
      <Features lang={lang} />
      <WhyUs lang={lang} />
    </>
  );
}