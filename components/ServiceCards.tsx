import Link from 'next/link';
import { services, servicesPage as t } from '@/lib/services';
import type { Lang } from '@/lib/i18n';

const icons: Record<string, React.ReactNode> = {
  rent: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M8 14h2M12 14h2M8 17.5h2" />
    </>
  ),
  buy: (
    <>
      <path d="M2 3h3l2.5 12h11L21 7H6" />
      <circle cx="9" cy="19.5" r="1.3" />
      <circle cx="17" cy="19.5" r="1.3" />
    </>
  ),
};

export default function ServiceCards({ lang }: { lang: Lang }) {
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  return (
    // ترتیب کارت‌ها در هر دو زبان ثابت است (اجاره سمت چپ)
    <div dir="ltr" className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
      {services.map((s) => (
        <article
          key={s.id}
          dir={dir}
          className="flex flex-col rounded-2xl border border-[#D6E0F2] bg-gradient-to-b from-[#EAF1FF] to-white p-7 shadow-sm"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-brand">
            <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              {icons[s.id]}
            </svg>
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-navy">{s.title[lang]}</h2>

          <ul className="mt-6 space-y-4">
            {s.items.map((it) => (
              <li key={it.en} className="flex items-start gap-3 text-[#2B3A5C]">
                <svg viewBox="0 0 24 24" className="mt-1.5 h-5 w-5 shrink-0 fill-none stroke-brand" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {it[lang]}
              </li>
            ))}
          </ul>

          <Link
            href={`/${lang}/quote/?type=${s.id}`}
            className="mt-8 rounded-xl bg-brand py-3.5 text-center text-lg font-bold text-white hover:opacity-90"
          >
            {t.more[lang]}
          </Link>
        </article>
      ))}
    </div>
  );
}