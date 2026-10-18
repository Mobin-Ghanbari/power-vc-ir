'use client';

import { useState } from 'react';
import Link from 'next/link';
import { otherSports, productsPage as p, sports } from '@/lib/products';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  handball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M6 8c4 2 8 2 12 0M6 16c4-2 8-2 12 0M8 6c2 4 2 8 0 12M16 6c-2 4-2 8 0 12" />
    </>
  ),
  tennis: (
    <>
      <circle cx="15.5" cy="8.5" r="4.5" />
      <path d="M12.3 11.7L4 20M3 21l2-2M13 6l5 5M17 7l-5 5" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <path d="M5 5c1 .5 1 2 0 3" />
    </>
  ),
  snooker: (
    <>
      {/* Snooker / Billiards Cue Stick */}
      <path d="M3 21l10-10M14 10l-1 1" />
      {/* Snooker Balls / Triangle cluster */}
      <circle cx="17.5" cy="6.5" r="2.2" />
      <circle cx="14" cy="13" r="1.8" />
      <circle cx="18.5" cy="12" r="1.8" />
      <circle cx="16.5" cy="16" r="1.8" />
    </>
  ),
  athletics: (
    <>
      {/* Stopwatch / Timing */}
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 2M12 5V2M10 2h4M17.5 6.5l1.5-1.5" />
    </>
  ),
  taekwondo: (
    <>
      {/* Martial Arts Dobok & Belt Knot */}
      <path d="M4 5l8 6 8-6M5 7v10M19 7v10" />
      <path d="M7 13h10v3.5H7zM9 16.5l-1.5 4M15 16.5l1.5 4" />
    </>
  ),
  equestrian: (
    <>
      {/* Equestrian Horseshoe */}
      <path d="M7 4v7a5 5 0 0 0 10 0V4" />
      <path d="M5 4h4M15 4h4" />
      <circle cx="7.5" cy="8" r="0.8" fill="currentColor" />
      <circle cx="16.5" cy="8" r="0.8" fill="currentColor" />
      <circle cx="8.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="15.5" cy="12" r="0.8" fill="currentColor" />
      <circle cx="10.5" cy="15" r="0.8" fill="currentColor" />
      <circle cx="13.5" cy="15" r="0.8" fill="currentColor" />
    </>
  ),
  more: (
    <>
      {/* Grid of Dots */}
      <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      <circle cx="12" cy="6" r="1.5" fill="currentColor" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
      <circle cx="6" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="18" cy="12" r="1.5" fill="currentColor" />
      <circle cx="6" cy="18" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      <circle cx="18" cy="18" r="1.5" fill="currentColor" />
    </>
  ),
};

function SportCardImage({ id, alt }: { id: string; alt: string }) {
  const [src, setSrc] = useState(`/images/sports/${id}.webp`);
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-[#1b3a78] to-[#0a1f44]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => {
          if (src !== '/images/sports/other.webp') {
            setSrc('/images/sports/other.webp');
          }
        }}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default function SportCards({ lang }: { lang: Lang }) {
  const arrow = lang === 'fa' ? '←' : '→';

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {sports.map((s) => (
          <Link
            key={s.id}
            href={`/${lang}/products/${s.id}/`}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#D6E0F2] bg-white text-start shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <SportCardImage id={s.id} alt={s.name[lang]} />
            <div className="bg-brand py-2.5 text-center text-lg font-bold text-white">{s.name[lang]}</div>
            <div className="flex flex-1 flex-col p-4 text-sm leading-7 text-[#46557A]">
              <p>{s.short[lang]}</p>
              <span className="mt-auto flex items-center gap-1 pt-4 font-bold text-brand">
                {arrow} {p.more[lang]}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-10 rounded-xl bg-[#EAF0FC] p-6 md:p-8">
        <h2 className="text-xl font-bold text-navy">{p.otherTitle[lang]}</h2>
        <ul className="mt-6 grid grid-cols-2 gap-6 text-center text-sm sm:grid-cols-4 md:grid-cols-7">
          {otherSports.map((o) => (
            <li key={o.id} className="flex flex-col items-center gap-2">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm transition hover:shadow-md hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-brand" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[o.id]}
                </svg>
              </span>
              <span className="font-medium text-[#2B3A5C]">{o[lang]}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}