import { home } from '@/lib/home';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, string> = {
  flex: 'M4 7h16M4 12h10M4 17h16',
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18',
  multi: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  target: 'M12 3a9 9 0 100 18 9 9 0 000-18zM12 8a4 4 0 100 8 4 4 0 000-8zM12 11.5a.5.5 0 100 1',
};

export default function Features({ lang }: { lang: Lang }) {
  return (
    <section className="bg-[#081A3A] text-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
        {home.features.map((f) => (
          <li key={f.icon} className="flex flex-col items-center gap-3 text-center text-sm">
            <svg viewBox="0 0 24 24" className="h-9 w-9 fill-none stroke-[#7FA6FF]" strokeWidth="1.5" strokeLinecap="round" aria-hidden>
              <path d={icons[f.icon]} />
            </svg>
            {f[lang]}
          </li>
        ))}
      </ul>
    </section>
  );
}