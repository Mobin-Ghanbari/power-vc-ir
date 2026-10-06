import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageBanner from '@/components/PageBanner';
import QuoteForm from '@/components/QuoteForm';
import QuoteInfo from '@/components/QuoteInfo';
import { quotePage as t } from '@/lib/quote';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'quote');
}

export default async function Quote({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <PageBanner lang={lang} title={t.title[lang]} text={t.text[lang]} image="/images/banner-quote.jpg" />
      {/* ترتیب ثابت در هر دو زبان: فرم سمت چپ، اطلاعات سمت راست */}
      <main dir="ltr" className="mx-auto grid max-w-5xl items-start gap-6 px-5 py-12 md:grid-cols-[1.1fr_.9fr]">
        <div dir={lang === 'fa' ? 'rtl' : 'ltr'}><QuoteForm lang={lang} /></div>
        <div dir={lang === 'fa' ? 'rtl' : 'ltr'}><QuoteInfo lang={lang} /></div>
      </main>
    </>
  );
}