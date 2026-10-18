import Link from 'next/link';
import { projects } from '@/lib/projects';
import type { Lang } from '@/lib/i18n';

export default function WorldMap({ lang }: { lang: Lang }) {
  return (
    <div
      className="relative mx-auto aspect-[2/1] w-full max-w-4xl bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/world-map.svg)' }}
      dir="ltr"
    >
      {projects.map((p) => (
        <Link
          key={p.id}
          href={`/${lang}/projects/${p.id.trim()}/`}
          aria-label={p.country[lang]}
          className="group absolute -translate-x-1/2 -translate-y-1/2 p-3 -m-3 hover:z-20 focus-visible:z-20 touch-manipulation"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          {/* Visual dot with ping effect */}
          <span className="relative flex h-2.5 w-2.5 items-center justify-center sm:h-3 sm:w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/50 opacity-0 group-hover:opacity-75 group-focus-visible:opacity-75" />
            <span className="relative block h-2 w-2 rounded-full border border-white bg-brand shadow-sm transition-transform group-hover:scale-125 group-focus-visible:scale-125 sm:h-2.5 sm:w-2.5" />
          </span>
          {/* Tooltip نام کشور */}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy px-2 py-0.5 text-[11px] font-bold text-white shadow-md opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {p.country[lang]}
          </span>
        </Link>
      ))}
    </div>
  );
}