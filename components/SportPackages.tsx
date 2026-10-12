import type { SportPage } from '@/lib/sportPages';
import type { Lang } from '@/lib/i18n';

export default function SportPackages({
  title, packages, lang,
}: { title: NonNullable<SportPage['packagesTitle']>; packages: NonNullable<SportPage['packages']>; lang: Lang }) {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-navy">{title[lang]}</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {packages.map((p) => (
          <figure key={p.name} className="overflow-hidden rounded-2xl border border-[#D6E0F2] bg-white shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.diagram}
              alt={lang === 'fa' ? `چیدمان دوربین‌ها در پکیج ${p.name}` : `Camera layout of the ${p.name} package`}
              className="w-full"
              loading="lazy"
            />
            <figcaption className="bg-navy py-3 text-center font-bold text-white" dir="ltr">
              {p.name} ({p.cameras} {lang === 'fa' ? 'دوربین' : 'Cameras'})
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}