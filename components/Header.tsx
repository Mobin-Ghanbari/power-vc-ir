'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { langs, nav, tagline, type Lang } from '@/lib/i18n';

const langNames: Record<Lang, string> = { fa: 'فارسی', en: 'English' };

export default function Header({ lang }: { lang: Lang }) {
  const [menu, setMenu] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const raw = usePathname() ?? `/${lang}/`;
  const path = raw.endsWith('/') ? raw : raw + '/';
  const rest = path.replace(/^\/(fa|en)/, '') || '/';
  const dir = lang === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setLangOpen(false);
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white" dir="ltr">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        {/* لوگو: همیشه سمت چپ */}
        <Link href={`/${lang}/`} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold">VideoCheck Iran</span>
            <span className="block text-[11px] text-[#9DB0D0]" dir={dir}>
              {tagline[lang]}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* منوی دسکتاپ: جهت داخلی بر اساس زبان */}
          <nav dir={dir} className="hidden items-center gap-1 text-sm md:flex">
            {nav.map((n) => {
              const href = `/${lang}/${n.slug ? n.slug + '/' : ''}`;
              const active = path === href;
              return (
                <Link
                  key={n.slug}
                  href={href}
                  className={`border-b-2 px-3 py-1.5 ${
                    active
                      ? 'border-brand text-white'
                      : 'border-transparent text-[#C9D6F2] hover:text-white'
                  }`}
                >
                  {n[lang]}
                </Link>
              );
            })}
          </nav>

          {/* انتخاب زبان */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="flex items-center gap-2 rounded-md border border-[#5C7BC4] px-3 py-1.5 text-sm"
            >
              <span aria-hidden>🌐</span>
              {langNames[lang]}
              <span aria-hidden className="text-xs">▾</span>
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 min-w-36 overflow-hidden rounded-lg bg-white text-navy shadow-lg"
              >
                {langs.map((l) => (
                  <li key={l} role="option" aria-selected={l === lang}>
                    <Link
                      href={`/${l}${rest}`}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-[#E8EFFD] ${
                        l === lang ? 'font-bold text-brand' : ''
                      }`}
                    >
                      {langNames[l]}
                      {l === lang && <span aria-hidden>✔</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            className="rounded-md border border-[#5C7BC4] px-2.5 py-1 md:hidden"
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-label="menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menu && (
        <nav dir={dir} className="flex flex-col border-t border-white/10 px-5 py-2 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.slug}
              href={`/${lang}/${n.slug ? n.slug + '/' : ''}`}
              onClick={() => setMenu(false)}
              className="py-2 text-[#C9D6F2]"
            >
              {n[lang]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}