import type { SportPage } from '@/lib/sportPages';
import type { Lang } from '@/lib/i18n';

export default function SportSpecs({
  specs, note, lang,
}: { specs?: SportPage['specs']; note?: SportPage['note']; lang: Lang }) {
  if (!specs?.length && !note) return null;
  return (
    <section>
      {specs && specs.length > 0 && (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((s) => (
            <li key={s.label.en} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className="text-2xl font-extrabold text-navy">{s.value[lang]}</div>
              <div className="mt-1 text-sm text-[#46557A]">{s.label[lang]}</div>
            </li>
          ))}
        </ul>
      )}
      {note && (
        <p className="mt-5 rounded-2xl bg-navy px-6 py-4 text-center font-bold text-white">{note[lang]}</p>
      )}
    </section>
  );
}