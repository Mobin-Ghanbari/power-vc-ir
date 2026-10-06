import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import CountryCard from '@/components/CountryCard';
import PageBanner from '@/components/PageBanner';
import WorldMap from '@/components/WorldMap';
import { projects, projectsPage as t } from '@/lib/projects';
import type { Lang } from '@/lib/i18n';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return pageMeta((await params).lang as Lang, 'projects');
}

export default async function Projects({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  return (
    <>
      <PageBanner lang={lang} title={t.title[lang]} text={t.text[lang]} image="/images/banner-projects.jpg" />
      <main className="mx-auto max-w-6xl px-5 py-10">
        <WorldMap lang={lang} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <CountryCard key={p.id} lang={lang} p={p} />
          ))}
        </div>
      </main>
    </>
  );
}