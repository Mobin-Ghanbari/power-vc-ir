import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import VideoPlayer from '@/components/VideoPlayer';
import { langs, type Lang } from '@/lib/i18n';
import { projects, projectsPage as t } from '@/lib/projects';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return langs.flatMap((lang) => projects.map((p) => ({ lang, country: p.id })));
}

type Props = { params: Promise<{ lang: string; country: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function Country({ params }: Props) {
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

      <div className="mt-6">
        {ready ? (
       <VideoPlayer hash={p.aparat} title={p.country[lang]} />
        ) : (
          <div
            className="grid aspect-video place-items-center rounded-xl bg-cover bg-center p-6 text-center text-white"
            style={{
              backgroundImage: `url(/images/projects/${p.id}.jpg), url(/images/projects/default.jpg), linear-gradient(160deg,#1b3a78,#0a1f44)`,
            }}
          >
            <span className="rounded-lg bg-navy/80 px-4 py-2">{t.noVideo[lang]}</span>
          </div>
        )}
      </div>
    </main>
  );
}