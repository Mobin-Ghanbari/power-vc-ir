'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projectsPage as t, projects } from '@/lib/projects';
import type { Lang } from '@/lib/i18n';

export default function CountryCard({ lang, p }: { lang: Lang; p: (typeof projects)[number] }) {
  const [imgSrc, setImgSrc] = useState(`/images/projects/${p.id}.webp`);
  const arrow = lang === 'fa' ? '←' : '→';

  return (
    <Link
      href={`/${lang}/projects/${p.id}/`}
      className="group block rounded-xl border border-[#D6E0F2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span
          className="h-9 w-9 shrink-0 rounded-full bg-[#D6E0F2] bg-cover bg-center"
          style={{ backgroundImage: `url(/images/flags/${p.code}.webp)` }}
          aria-hidden
        />
        <h2 className="text-lg font-bold text-navy">{p.country[lang]}</h2>
      </div>
      <div className="relative mt-4 aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[#1b3a78] to-[#0a1f44]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt={p.country[lang]}
          loading="lazy"
          onError={() => {
            if (imgSrc !== '/images/projects/default.webp') {
              setImgSrc('/images/projects/default.webp');
            }
          }}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 grid place-items-center pointer-events-none">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow transition-transform duration-300 group-hover:scale-110">
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