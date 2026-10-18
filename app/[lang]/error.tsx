'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import type { Lang } from '@/lib/i18n';
import { errorData as e } from '@/lib/errorPages';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  const pathname = usePathname() || '';
  const lang: Lang = pathname.startsWith('/en') ? 'en' : 'fa';
  const isFa = lang === 'fa';

  useEffect(() => {
    // Log unexpected errors safely on client
    console.error('Video Challenge System Error Caught:', error);
  }, [error]);

  return (
    <main
      className="flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center px-5 py-16 text-center"
      dir={isFa ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto w-full max-w-xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#1b3a78] bg-gradient-to-b from-[#0a1f44] to-[#06142c] p-8 shadow-2xl md:p-12">
          {/* Viewfinder Corner Accents */}
          <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-amber-500/70" />
          <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-amber-500/70" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-amber-500/70" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-amber-500/70" />

          {/* Camera Glitch/Warning Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 fill-none stroke-current stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>

          {/* Technical Status Badge */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            <span>{e.badge[lang]}</span>
          </div>

          <h1 className="mt-4 text-xl font-extrabold text-white md:text-2xl">
            {e.title[lang]}
          </h1>

          <p className="mx-auto mt-3 max-w-md text-xs leading-6 text-[#A3B8DE]">
            {e.description[lang]}
          </p>

          {/* Error Digest (Safe Reference Code for Enterprise Support) */}
          {error.digest && (
            <p className="mt-3 font-mono text-[11px] text-[#7A93BD]" dir="ltr">
              {e.digest[lang]} <span className="text-[#CBD9F2]">{error.digest}</span>
            </p>
          )}

          {/* Action Recovery Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-brand/90 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5" />
                <path d="M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" />
              </svg>
              <span>{e.retry[lang]}</span>
            </button>

            <Link
              href={`/${lang}/`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#23457D] bg-[#0E254F] px-5 py-3 text-xs font-bold text-[#CBD9F2] transition hover:border-brand hover:bg-brand/20 hover:text-white active:scale-95 focus-visible:outline-none"
            >
              <span>{e.home[lang]}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
