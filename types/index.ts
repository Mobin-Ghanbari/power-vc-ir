export type Province = {
  slug: string; // انگلیسی، برای آدرس
  name: string; // نام فارسی
};

export type Video = {
  id: string;
  title: string;
  description: string;
  provinceSlug: string; // باید با slug یکی از استان‌ها یکی باشد
  aparatId: string; // شناسه ویدئو در آپارات
};

export type Product = {
  id: string;
  name: string;
  description: string;
};