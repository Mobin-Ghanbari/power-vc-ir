export const langs = ['fa', 'en'] as const;
export type Lang = (typeof langs)[number];

export const nav: { slug: string; fa: string; en: string }[] = [
  { slug: '', fa: 'خانه', en: 'Home' },
  { slug: 'products', fa: 'محصولات', en: 'Products' },
  { slug: 'projects', fa: 'پروژه‌ها', en: 'Projects' },
  { slug: 'services', fa: 'خدمات', en: 'Services' },
  { slug: 'quote', fa: 'استعلام قیمت', en: 'Quote' },
  { slug: 'about', fa: 'درباره ما', en: 'About us' },
  { slug: 'contact', fa: 'تماس با ما', en: 'Contact us' },
];

export const tagline = {
  fa: 'تحلیل ویدئویی، عملکرد بهتر',
  en: 'Video analysis, better performance',
};


