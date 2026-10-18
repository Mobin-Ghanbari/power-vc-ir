import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SportHero from '@/components/SportHero';
import SportOptions from '@/components/SportOptions';
import SportPackages from '@/components/SportPackages';
import SportSpecs from '@/components/SportSpecs';
import { langs, type Lang } from '@/lib/i18n';
import { pageMeta } from '@/lib/seo';
import { sportPages } from '@/lib/sportPages';

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => sportPages.map((s) => ({ lang, sport: s.id })));
}

type Props = { params: Promise<{ lang: string; sport: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, sport } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const s = sportPages.find((x) => x.id === sport);
  if (!s) return {};
  return pageMeta(lang as Lang, `products/${s.id}`, {
    title: s.title,
    description: s.subtitle,
  });
}

export default async function SportPageView({ params }: Props) {
  const { lang: l, sport } = await params;
  const lang = l as Lang;
  if (!langs.includes(lang)) notFound();
  const s = sportPages.find((x) => x.id === sport);
  if (!s) notFound();

  return (
    <>
      <SportHero title={s.title[lang]} text={s.subtitle[lang]} image={s.image || `/images/sports/${s.id}.webp`} />
      <main className="mx-auto max-w-5xl space-y-10 px-5 py-12">
        <Link href={`/${lang}/products/`} className="text-sm font-bold text-brand">
          {lang === 'fa' ? '→' : '←'} {lang === 'fa' ? 'بازگشت به محصولات' : 'Back to products'}
        </Link>
        
        {s.topList && <SportOptions title={s.topList.title} options={s.topList.items} lang={lang} />}       
        <SportSpecs specs={s.specs} note={s.note} lang={lang} />
        {s.options && s.optionsTitle && <SportOptions title={s.optionsTitle} options={s.options} lang={lang} />}
        {s.packages && s.packagesTitle && <SportPackages title={s.packagesTitle} packages={s.packages} lang={lang} />}

        {s.gallery && (
          <section className="grid gap-4 sm:grid-cols-2">
            {s.gallery.map((g) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={g.src} src={g.src} alt={g.alt[lang]} loading="lazy" className="w-full rounded-2xl object-cover" />
            ))}
          </section>
        )}

        <div className="rounded-2xl bg-navy p-6 text-center text-white">
          <Link href={`/${lang}/quote/`} className="inline-block rounded-lg bg-brand px-8 py-3 font-bold hover:opacity-90">
            {lang === 'fa' ? 'درخواست استعلام قیمت' : 'Request a quote'}
          </Link>
        </div>
      </main>
    </>
  );
}