import Link from 'next/link';
import { home } from '@/lib/home';
import type { Lang } from '@/lib/i18n';

export default function Hero({ lang }: { lang: Lang }) {
  const side = lang === 'fa' ? 'left' : 'right';
  const h = home.hero;
  return (
    <section
      className="flex min-h-[480px] items-center bg-navy bg-cover bg-center text-white md:min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(to ${side}, rgba(10,31,68,.94) 30%, rgba(10,31,68,.2)), url(/images/hero.jpg)`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-snug md:text-6xl md:leading-tight">{h.title[lang]}</h1>
          <p className="mt-6 text-base leading-8 text-[#D5E0F7] md:text-lg">{h.text[lang]}</p>
          <Link href={`/${lang}/quote/`} className="mt-8 inline-block rounded-lg bg-brand px-8 py-3.5 text-lg font-bold hover:opacity-90">
            {h.cta[lang]}
          </Link>
        </div>
      </div>
    </section>
  );
}