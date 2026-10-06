import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { langs, type Lang } from '@/lib/i18n';
import { projects, projectsPage as t } from '@/lib/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => projects.map((p) => ({ lang, country: p.id })));
}


export async function generateMetadata({ params }: { params: Promise<{ lang: string; country: string }> }): Promise<Metadata> {
  const { lang, country } = await params;
  const p = projects.find((x) => x.id === country);
  if (!p) return {};
  return pageMeta(lang as Lang, `projects/${p.id}`, {
    title: { fa: `پروژه ${p.country.fa}`, en: `${p.country.en} project` },
    description: {
      fa: `ویدئوی پروژهٔ ویدئوچک ایران در ${p.country.fa}.`,
      en: `Video of the VideoCheck Iran project in ${p.country.en}.`,
    },
  });
}

export default async function Country({ params }: { params: Promise<{ lang: string; country: string }> }) {
  const { lang: l, country } = await params;
  const lang = l as Lang;
  const p = projects.find((x) => x.id === country);
  if (!p) notFound();
  const ready = p.aparat !== 'REPLACE_ME';

  return (
    <main className="mx-auto max-w-4xl px-5 py-10">
      <Link href={`/${lang}/projects/`} className="text-sm font-bold text-brand">
        {lang === 'fa' ? '→' : '←'} {t.back[lang]}
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold text-navy">{p.country[lang]}</h1>
      <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-navy">
        {ready ? (
          <iframe
            title={p.country[lang]}
            className="h-full w-full"
            allowFullScreen
            src={`https://www.aparat.com/video/video/embed/videohash/${p.aparat}/vt/frame`}
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center text-[#C9D6F2]">{t.noVideo[lang]}</div>
        )}
      </div>
    </main>
  );
}