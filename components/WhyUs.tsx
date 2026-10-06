import Link from 'next/link';
import { home } from '@/lib/home';
import type { Lang } from '@/lib/i18n';

export default function WhyUs({ lang }: { lang: Lang }) {
  const w = home.why;
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2">
      <div>
        <h2 className="text-2xl font-bold text-navy md:text-3xl">{w.title[lang]}</h2>
        <p className="mt-4 max-w-md text-[#46557A]">{w.text[lang]}</p>
        <Link href={`/${lang}/about/`} className="mt-6 inline-block rounded-lg border-2 border-brand px-6 py-2.5 font-bold text-brand hover:bg-brand hover:text-white">
          {w.cta[lang]}
        </Link>
      </div>
      <div
        className="min-h-64 rounded-2xl bg-[#E8EFFD] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/why.jpg)' }}
        role="img"
        aria-label=""
      />
    </section>
  );
}