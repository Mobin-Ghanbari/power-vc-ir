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
          className="group absolute -translate-x-1/2 -translate-y-1/2 hover:z-20 focus-visible:z-20"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          {/* نقطه */}
          <span className="block h-2 w-2 rounded-full border  bg-brand shadow transition-transform group-hover:scale-150 group-focus-visible:scale-150 sm:h-2 sm:w-2" />
          {/* نام کشور */}
          <span className="pointer-events-none absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap rounded bg-navy px-2 py-0.5 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            {p.country[lang]}
          </span>
        </Link>
      ))}
    </div>
  );
}