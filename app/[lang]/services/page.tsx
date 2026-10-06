import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageBanner from '@/components/PageBanner';
import ServiceCards from '@/components/ServiceCards';
import { servicesPage as t } from '@/lib/services';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'services');
}

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <PageBanner lang={lang} title={t.title[lang]} text={t.text[lang]} image="/images/banner-services.jpg" />
      <main className="px-5 py-12">
        <ServiceCards lang={lang} />
      </main>
    </>
  );
}