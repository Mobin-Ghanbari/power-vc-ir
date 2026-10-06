import type { Lang } from '@/lib/i18n';

export default function PageBanner({
  lang, title, text, image,
}: { lang: Lang; title: string; text: string; image: string }) {
  const side = lang === 'fa' ? 'left' : 'right';
  return (
    <section
      className="flex min-h-[280px] items-center bg-navy bg-cover bg-center text-white md:min-h-[360px]"
      style={{
        backgroundImage: `linear-gradient(to ${side}, rgba(10,31,68,.94) 30%, rgba(10,31,68,.25)), url(${image})`,
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <h1 className="text-3xl font-extrabold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-lg text-base leading-8 text-[#D5E0F7] md:text-lg">{text}</p>
      </div>
    </section>
  );
}