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
  if (!langs.includes(lang as Lang)) return {};
  const p = projects.find((x) => x.id === country);
  if (!p) return {};
  return pageMeta(lang as Lang, `projects/${p.id}`, {
    title: { fa: `پروژه ${p.country.fa}`, en: `${p.country.en} project` },
    description: {
      fa: `ویدئوی پروژهٔ ویدئوچک ایران در ${p.country.fa}.`,
      en: `Video of the Video Challenge Iran project in ${p.country.en}.`,
    },
  });
}

export default async function Country({ params }: Props) {
  const { lang: l, country } = await params;
  const lang = l as Lang;
  if (!langs.includes(lang)) notFound();
  const p = projects.find((x) => x.id === country);
  if (!p) notFound();
  const ready = Boolean(p.aparat && p.aparat.trim() && p.aparat !== 'REPLACE_ME');

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
            className="relative flex aspect-video w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#1b3a78] bg-gradient-to-b from-[#0a1f44] to-[#06142c] p-8 text-center text-white shadow-xl"
            style={{
              backgroundImage: `linear-gradient(rgba(7, 22, 48, 0.85), rgba(6, 20, 44, 0.95)), url(/images/projects/${p.id}.webp), linear-gradient(160deg,#1b3a78,#0a1f44)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Verified Deployment Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>{t.badgeShowcase?.[lang] ?? (lang === 'fa' ? 'پروژه بین‌المللی تأییدشده' : 'Certified International Deployment')}</span>
            </div>

            <h3 className="mt-4 max-w-lg text-lg font-extrabold text-white sm:text-xl">
              {lang === 'fa' ? `سامانه ویدئوچک مسابقات رسمی ${p.country.fa}` : `${p.country.en} Official Match Video Challenge System`}
            </h3>

            <p className="mt-3 max-w-md text-xs leading-6 text-[#A3B8DE] sm:text-sm">
              {t.noVideo[lang]}
            </p>

            <div className="mt-6">
              <Link
                href={`/${lang}/contact/`}
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-brand/90 hover:shadow-lg active:scale-95"
              >
                <span>{lang === 'fa' ? 'درخواست مستندات و اطلاعات فنی' : 'Request Tournament Documentation'}</span>
                <span aria-hidden="true">{lang === 'fa' ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}