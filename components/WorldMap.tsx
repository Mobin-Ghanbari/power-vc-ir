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
          href={`/${lang}/projects/${p.id}/`}
          aria-label={p.country[lang]}
          title={p.country[lang]}
          className="absolute -translate-x-1/2 -translate-y-full"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <svg viewBox="0 0 24 32" className="h-6 w-5 fill-brand drop-shadow hover:scale-125 sm:h-8 sm:w-6">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0zm0 17a5 5 0 110-10 5 5 0 010 10z" />
          </svg>
        </Link>
      ))}
    </div>
  );
}