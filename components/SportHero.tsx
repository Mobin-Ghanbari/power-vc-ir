export default function SportHero({
  title, text, image,
}: { title: string; text: string; image: string }) {
  return (
    <section className="bg-gradient-to-l from-[#12306B] to-navy text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:gap-12 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl md:leading-tight">{title}</h1>
          <p className="mt-4 max-w-md text-base leading-8 text-[#D5E0F7] md:text-lg">{text}</p>
        </div>
        <div
          role="img"
          aria-label={title}
          className="aspect-[512/324] w-full max-w-[512px] rounded-2xl bg-cover bg-center shadow-2xl  md:justify-self-center"
          style={{ backgroundImage: `url(${image}), linear-gradient(160deg,#1b3a78,#0a1f44)` }}
        />
      </div>
    </section>
  );
}