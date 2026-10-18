'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Lang } from '@/lib/i18n';
import { notFoundData as d } from '@/lib/errorPages';

export default function NotFoundView({ forcedLang }: { forcedLang?: Lang }) {
  const pathname = usePathname() || '';
  const lang: Lang = forcedLang ?? (pathname.startsWith('/en') ? 'en' : 'fa');
  const isFa = lang === 'fa';
  const arrow = isFa ? '←' : '→';

  return (
    <main
      className="flex min-h-[calc(100vh-14rem)] flex-col items-center justify-center px-5 py-16 text-center"
      dir={isFa ? 'rtl' : 'ltr'}
    >
      <div className="mx-auto w-full max-w-2xl">
        {/* VAR Video Review HUD Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#1b3a78] bg-gradient-to-b from-[#0a1f44] to-[#06142c] p-8 shadow-2xl md:p-12">
          {/* Viewfinder Corner Crosshairs */}
          <div className="pointer-events-none absolute left-4 top-4 h-6 w-6 border-l-2 border-t-2 border-brand/70" />
          <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r-2 border-t-2 border-brand/70" />
          <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b-2 border-l-2 border-brand/70" />
          <div className="pointer-events-none absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-brand/70" />

          {/* VAR Status Header Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold text-red-400">
            <span className="h-2 w-2 animate-ping rounded-full bg-red-400" />
            <span>{d.badge[lang]}</span>
            <span className="text-red-500/50">|</span>
            <span className="font-mono tracking-wider">CAM-04 [REVIEW]</span>
          </div>

          {/* Graphical Court Line & Ball "OUT" Graphic */}
          <div className="my-6 flex justify-center">
            <svg
              viewBox="0 0 280 120"
              className="h-28 w-auto max-w-full drop-shadow-[0_0_15px_rgba(31,95,255,0.35)]"
              aria-hidden="true"
            >
              {/* Pitch/Court Surface Grid */}
              <defs>
                <pattern
                  id="court-grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="280" height="120" rx="8" fill="url(#court-grid)" />

              {/* Court Boundary Line (Thick White Solid Line) */}
              <line
                x1="40"
                y1="85"
                x2="240"
                y2="85"
                stroke="#E2ECF8"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <text
                x="50"
                y="105"
                fill="#6B85B5"
                fontSize="9"
                fontWeight="bold"
                fontFamily="monospace"
              >
                BOUNDARY LINE
              </text>

              {/* Ball Landing OUT of the Line */}
              {/* Ball Shadow */}
              <ellipse
                cx="195"
                y="52"
                rx="18"
                ry="7"
                fill="rgba(0,0,0,0.4)"
              />
              {/* Ball */}
              <circle
                cx="195"
                y="45"
                r="18"
                fill="#1f5fff"
                stroke="#ffffff"
                strokeWidth="2.5"
              />
              <path
                d="M 183 45 Q 195 33 207 45 M 183 45 Q 195 57 207 45"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
              />

              {/* Challenge Decision Crossmark & Callout */}
              <circle
                cx="195"
                y="45"
                r="6"
                fill="#EF4444"
              />
              <path
                d="M 192 42 L 198 48 M 198 42 L 192 48"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Decision Stamp */}
              <rect
                x="90"
                y="20"
                width="70"
                height="22"
                rx="4"
                fill="#EF4444"
              />
              <text
                x="125"
                y="35"
                fill="#ffffff"
                fontSize="11"
                fontWeight="900"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                OUT (خارج)
              </text>
            </svg>
          </div>

          {/* 404 & Decision Banner */}
          <div className="space-y-2">
            <div className="font-mono text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              <span className="text-brand">4</span>
              <span className="text-[#6492FF]">0</span>
              <span className="text-brand">4</span>
            </div>
            <h1 className="text-xl font-extrabold text-white md:text-2xl">
              {d.decision[lang]}
            </h1>
            <p className="text-sm font-medium text-[#A3B8DE]">
              {d.title[lang]}
            </p>
          </div>

          <p className="mx-auto mt-4 max-w-md text-xs leading-6 text-[#8EA6D1]">
            {d.description[lang]}
          </p>

          {/* Navigation Recovery Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${lang}/`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-3 text-xs font-bold text-white shadow-md transition-all hover:bg-brand/90 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span>{d.actions.home[lang]}</span>
              <span aria-hidden="true">{arrow}</span>
            </Link>

            <Link
              href={`/${lang}/products/`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#23457D] bg-[#0E254F] px-4 py-3 text-xs font-bold text-[#CBD9F2] transition hover:border-brand hover:bg-brand/20 hover:text-white active:scale-95 focus-visible:outline-none"
            >
              <span>{d.actions.products[lang]}</span>
            </Link>

            <Link
              href={`/${lang}/contact/`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-transparent px-4 py-3 text-xs font-bold text-[#8EA6D1] hover:text-white active:scale-95 focus-visible:outline-none"
            >
              <span>{d.actions.contact[lang]}</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
