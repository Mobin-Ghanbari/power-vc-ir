import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageBanner from '@/components/PageBanner';
import StatsBar from '@/components/StatsBar';
import { aboutPage as t } from '@/lib/about';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'about');
}


export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <PageBanner lang={lang} title={t.title[lang]} text={t.text[lang]} image="/images/banner-about.jpg" />

      <main className="mx-auto max-w-6xl px-5 py-12">
        <section className="grid items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div
            className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-sm"
            style={{ backgroundImage: 'url(/images/about.jpg), linear-gradient(160deg,#1b3a78,#0a1f44)' }}
            role="img"
            aria-label=""
          />
          <div>
            <h2 className="text-2xl font-extrabold text-navy md:text-3xl">{t.storyTitle[lang]}</h2>
            <div className="mt-4 space-y-4 leading-8 text-[#46557A]">
              {t.story.map((p) => (
                <p key={p.en}>{p[lang]}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10">
          <StatsBar lang={lang} />
        </div>
      </main>

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-8">
          <p className="text-lg font-bold md:text-xl">{t.cta.text[lang]}</p>
          <Link href={`/${lang}/contact/`} className="rounded-lg bg-brand px-7 py-3 font-bold hover:opacity-90">
            {t.cta.button[lang]}
          </Link>
        </div>
      </section>
    </>
  );
}