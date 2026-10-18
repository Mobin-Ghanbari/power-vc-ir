'use client';

import { useState } from 'react';

export default function SportHero({
  title,
  text,
  image,
}: {
  title: string;
  text: string;
  image: string;
}) {
  const [imgSrc, setImgSrc] = useState(image || '/images/sports/other.webp');

  return (
    <section className="bg-gradient-to-l from-[#12306B] to-navy text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-10 md:grid-cols-2 md:gap-12 md:py-14">
        <div>
          <h1 className="text-3xl font-extrabold leading-snug md:text-5xl md:leading-tight">{title}</h1>
          <p className="mt-4 max-w-md text-base leading-8 text-[#D5E0F7] md:text-lg">{text}</p>
        </div>
        <div className="relative aspect-[512/324] w-full max-w-[512px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1b3a78] to-[#0a1f44] shadow-2xl md:justify-self-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={title}
            onError={() => {
              if (imgSrc !== '/images/sports/other.webp') {
                setImgSrc('/images/sports/other.webp');
              } else {
                setImgSrc('/images/banner-products.webp');
              }
            }}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}