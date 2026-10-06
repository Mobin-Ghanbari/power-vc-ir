import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import PageBanner from '@/components/PageBanner';
import { contactPage as t } from '@/lib/contact';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'contact');
}

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  return (
    <>
      <PageBanner lang={lang} title={t.title[lang]} text={t.text[lang]} image="/images/banner-contact.jpg" />
      {/* ترتیب ثابت: اطلاعات سمت چپ، فرم سمت راست */}
      <main dir="ltr" className="mx-auto grid max-w-5xl items-start gap-6 px-5 py-12 md:grid-cols-[.8fr_1.2fr]">
        <div dir={dir}><ContactInfo lang={lang} /></div>
        <div dir={dir}><ContactForm lang={lang} /></div>
      </main>
    </>
  );
}