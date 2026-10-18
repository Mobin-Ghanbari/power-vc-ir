import type { Metadata } from 'next';
import { langs, type Lang } from './i18n';

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://videocheckiran.com').replace(/\/$/, '');
export const SITE_NAME = 'Video Challenge Iran';

export const pathOf = (lang: Lang, slug = '') => `/${lang}/${slug ? slug + '/' : ''}`;

type Bi = { fa: string; en: string };
type Meta = { title: Bi; description: Bi };

// عنوان‌ها کوتاه‌اند؛ «| Video Challenge Iran» خودکار به انتها اضافه می‌شود
export const pages: Record<string, Meta> = {
  '': {
    title: { fa: 'ویدئوچک ایران | سامانه ویدئو چک والیبال', en: 'Video Challenge Iran | Volleyball Video Challenge & VAR' },
    description: {
      fa: 'سامانهٔ ویدئوچک ایران برای والیبال، فوتبال، فوتسال، بسکتبال و سایر ورزش‌ها؛ اجاره یا خرید با پشتیبانی فنی.',
      en: 'Video Challenge Iran provides video challenge systems for volleyball, football, futsal, basketball and more. Rent or buy with technical support.',
    },
  },
  products: {
    title: { fa: 'محصولات', en: 'Products' },
    description: {
      fa: 'راهکارهای ویدئوچک برای والیبال، فوتبال، فوتسال، بسکتبال و سایر رشته‌های ورزشی.',
      en: 'Video check solutions for volleyball, football, futsal, basketball and other sports.',
    },
  },
  projects: {
    title: { fa: 'پروژه‌ها', en: 'Projects' },
    description: {
      fa: 'پروژه‌های اجراشدهٔ ما در کشورهای مختلف؛ ویدئوی هر پروژه را ببینید.',
      en: 'Our delivered projects across several countries. Watch the video of each project.',
    },
  },
  services: {
    title: { fa: 'خدمات', en: 'Services' },
    description: {
      fa: 'اجارهٔ تجهیزات ویدئوچک برای رویدادها یا خرید سیستم کامل با گارانتی و پشتیبانی.',
      en: 'Rent video check equipment for events or buy a complete system with warranty and support.',
    },
  },
  quote: {
    title: { fa: 'استعلام قیمت', en: 'Request a quote' },
    description: {
      fa: 'فرم استعلام قیمت سامانهٔ ویدئوچک؛ فرم را پر کنید تا با شما تماس بگیریم.',
      en: 'Request a quote for our video check system. Fill in the form and we will contact you.',
    },
  },
  about: {
    title: { fa: 'درباره ما', en: 'About us' },
    description: {
      fa: 'با تیم و داستان ویدئوچک ایران آشنا شوید؛ پیشگام در تحلیل ویدئویی ورزش.',
      en: 'Meet the Video Challenge Iran team and story, a pioneer in sports video analysis.',
    },
  },
  contact: {
    title: { fa: 'تماس با ما', en: 'Contact us' },
    description: {
      fa: 'با ویدئوچک ایران تماس بگیرید؛ آدرس، تلفن، ایمیل و فرم ارتباط.',
      en: 'Contact Video Challenge Iran: address, phone, email and contact form.',
    },
  },
};

export function pageMeta(lang: Lang, slug: string, override?: Meta): Metadata {
  const m = override ?? pages[slug];
  const title = m.title[lang];
  const description = m.description[lang];
  const languages: Record<string, string> = Object.fromEntries(langs.map((l) => [l, pathOf(l, slug)]));
  languages['x-default'] = pathOf('fa', slug);
  const ogImageUrl = `${SITE_URL}/images/og.webp`;

  return {
    title: slug === '' ? { absolute: title } : title,
    description,
    alternates: { canonical: pathOf(lang, slug), languages },
    openGraph: {
      title,
      description,
      url: pathOf(lang, slug),
      siteName: SITE_NAME,
      type: 'website',
      locale: lang === 'fa' ? 'fa_IR' : 'en_US',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  };
}