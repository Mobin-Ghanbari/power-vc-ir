import { contactPage as c } from '@/lib/contact';
import { SITE_NAME, SITE_URL } from '@/lib/seo';

export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    email: c.email,
    telephone: c.phone,
    address: { '@type': 'PostalAddress', addressLocality: 'Tehran', addressCountry: 'IR' },
    sameAs: Object.values(c.social).filter((url) => Boolean(url && url.length > 20)),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}