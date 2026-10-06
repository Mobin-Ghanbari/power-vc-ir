import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageBanner from '@/components/PageBanner';
import SportCards from '@/components/SportCards';
import { productsPage as p } from '@/lib/products';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'products');
}

export default async function Products({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <PageBanner lang={lang} title={p.title[lang]} text={p.text[lang]} image="/images/banner-products.jpg" />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <SportCards lang={lang} />
      </main>
    </>
  );
}