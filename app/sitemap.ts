import type { MetadataRoute } from 'next';
import { langs, nav } from '@/lib/i18n';
import { projects } from '@/lib/projects';
import { pathOf, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = [...nav.map((n) => n.slug), ...projects.map((p) => `projects/${p.id}`)];
  return slugs.flatMap((slug) =>
    langs.map((lang) => ({
      url: `${SITE_URL}${pathOf(lang, slug)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(langs.map((l) => [l, `${SITE_URL}${pathOf(l, slug)}`])),
      },
    })),
  );
}