import { quotePage as t } from '@/lib/quote';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  tools: <><path d="M14 6a4 4 0 005 5l-9 9a2 2 0 01-3-3l9-9z" /><path d="M5 5l4 4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
};

export default function QuoteInfo({ lang }: { lang: Lang }) {
  return (
    <aside className="space-y-8 rounded-2xl bg-[#EAF1FF] p-7">
      {t.info.map((i) => (
        <div key={i.icon} className="flex items-start gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white">
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-none stroke-brand" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {icons[i.icon]}
            </svg>
          </span>
          <div>
            <h2 className="text-lg font-bold text-navy">{i.title[lang]}</h2>
            <p className="mt-1 text-[#46557A]">{i.text[lang]}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}