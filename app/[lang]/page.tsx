import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyUs from '@/components/WhyUs';
import type { Lang } from '@/lib/i18n';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <Hero lang={lang} />
      <Features lang={lang} />
      <WhyUs lang={lang} />
    </>
  );
}