import Link from 'next/link';
import { projectsPage as t, projects } from '@/lib/projects';
import type { Lang } from '@/lib/i18n';

export default function CountryCard({ lang, p }: { lang: Lang; p: (typeof projects)[number] }) {
  const arrow = lang === 'fa' ? '←' : '→';
  return (
    <Link
      href={`/${lang}/projects/${p.id}/`}
      className="block rounded-xl border border-[#D6E0F2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span
          className="h-9 w-9 shrink-0 rounded-full bg-[#D6E0F2] bg-cover bg-center"
          style={{ backgroundImage: `url(/images/flags/${p.code}.png)` }}
          aria-hidden
        />
        <h2 className="text-lg font-bold text-navy">{p.country[lang]}</h2>
      </div>
      <div
        className="relative mt-4 aspect-video rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(/images/projects/${p.id}.jpg), linear-gradient(160deg,#1b3a78,#0a1f44)` }}
      >
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-brand" aria-hidden><path d="M8 5v14l11-7z" /></svg>
          </span>
        </span>
      </div>
      <span className="mt-4 flex items-center gap-1 text-sm font-bold text-brand">
        {arrow} {t.view[lang]}
      </span>
    </Link>
  );
}