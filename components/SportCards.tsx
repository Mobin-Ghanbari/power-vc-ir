'use client';

import Link from 'next/link';
import { useState } from 'react';
import { otherSports, productsPage as p, sports } from '@/lib/products';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  handball: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /></>,
  tennis: <><circle cx="12" cy="12" r="9" /><path d="M5 5c5 4 5 10 0 14M19 5c-5 4-5 10 0 14" /></>,
  rugby: <><ellipse cx="12" cy="12" rx="10" ry="6" transform="rotate(-35 12 12)" /><path d="M9 15l6-6M10.5 10.5l3 3" /></>,
  athletics: <><rect x="3" y="7" width="18" height="10" rx="5" /><rect x="7" y="10" width="10" height="4" rx="2" /></>,
  more: <><circle cx="5" cy="12" r="1.3" /><circle cx="12" cy="12" r="1.3" /><circle cx="19" cy="12" r="1.3" /></>,
};
const otherIds = ['handball', 'tennis', 'rugby', 'athletics', 'more'];

export default function SportCards({ lang }: { lang: Lang }) {
  const [sel, setSel] = useState<string | null>(null);
  const cur = sports.find((s) => s.id === sel);
  const arrow = lang === 'fa' ? '←' : '→';

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {sports.map((s) => (
          <button
            key={s.id}
            onClick={() => setSel(s.id)}
            aria-pressed={sel === s.id}
            className={`flex h-full flex-col overflow-hidden rounded-xl border bg-white text-start shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
              sel === s.id ? 'border-brand ring-2 ring-brand' : 'border-[#D6E0F2]'
            }`}
          >
            <div
              className="aspect-[3/4] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(/images/sports/${s.id}.jpg), linear-gradient(160deg,#1b3a78,#0a1f44)`,
              }}
            />
            <div className="bg-brand py-2.5 text-center text-lg font-bold text-white">{s.name[lang]}</div>
            <div className="flex flex-1 flex-col p-4 text-sm leading-7 text-[#46557A]">
              <p>{s.short[lang]}</p>
              <span className="mt-auto flex items-center gap-1 pt-4 font-bold text-brand">
                {arrow} {p.more[lang]}
              </span>
            </div>
          </button>
        ))}
      </div>

      {cur && (
        <div className="mt-6 rounded-xl border-s-4 border-brand bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-navy">{cur.name[lang]}</h2>
          <p className="mt-3 max-w-2xl leading-8 text-[#46557A]">{cur.long[lang]}</p>
          <Link href={`/${lang}/quote/`} className="mt-5 inline-block rounded-lg bg-brand px-6 py-2.5 font-bold text-white hover:opacity-90">
            {p.quote[lang]}
          </Link>
        </div>
      )}

      <section className="mt-10 rounded-xl bg-[#EAF0FC] p-6 md:p-8">
        <h2 className="text-xl font-bold text-navy">{p.otherTitle[lang]}</h2>
        <ul className="mt-6 grid grid-cols-2 gap-6 text-center text-sm sm:grid-cols-5">
          {otherSports.map((o, i) => (
            <li key={o.en} className="flex flex-col items-center gap-2">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-sm">
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-brand" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
                  {icons[otherIds[i]]}
                </svg>
              </span>
              {o[lang]}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}