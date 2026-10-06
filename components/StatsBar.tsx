import { aboutPage as t } from '@/lib/about';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  multi: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="5" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="5" cy="12" r="2" /><circle cx="19" cy="12" r="2" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
};

export default function StatsBar({ lang }: { lang: Lang }) {
  return (
    <ul className="grid grid-cols-2 rounded-2xl border border-[#D6E0F2] bg-white shadow-sm md:grid-cols-4">
      {t.stats.map((s, i) => (
        <li
          key={s.icon}
          className={`flex flex-col items-center gap-2 px-4 py-6 text-center ${
            i > 0 ? 'md:border-s md:border-[#D6E0F2]' : ''
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-brand" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            {icons[s.icon]}
          </svg>
          <span dir="ltr" className="text-3xl font-extrabold text-navy">{s.value}</span>
          <span className="text-sm text-[#46557A]">{s.label[lang]}</span>
        </li>
      ))}
    </ul>
  );
}