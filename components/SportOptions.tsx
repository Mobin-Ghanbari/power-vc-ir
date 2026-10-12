import type { Lang } from '@/lib/i18n';

type Bi = { fa: string; en: string };

export default function SportOptions({ title, options, lang }: { title: Bi; options: Bi[]; lang: Lang }) {
  return (
    <section className="rounded-2xl bg-[#EAF1FF] p-6">
      <h2 className="text-xl font-extrabold text-navy">{title[lang]}</h2>
      <ul className="mt-4 flex flex-wrap gap-3">
        {options.map((o) => (
          <li key={o.en} className="rounded-full bg-brand px-4 py-1.5 text-sm font-bold text-white">
            {o[lang]}
          </li>
        ))}
      </ul>
    </section>
  );
}