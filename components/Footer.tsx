import Link from 'next/link';
import Image from 'next/image';
import { nav, tagline, type Lang } from '@/lib/i18n';
import { contactPage as c } from '@/lib/contact';
import { footerData as f } from '@/lib/footer';

export default function Footer({ lang }: { lang: Lang }) {
  const isFa = lang === 'fa';
  const otherLang = isFa ? 'en' : 'fa';
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-[#1b3a78]/60 bg-[#071630] text-white"
      dir={isFa ? 'rtl' : 'ltr'}
    >
      {/* Subtle top glow accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent"
        aria-hidden="true"
      />

      {/* Main 4-Column Grid */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Authority */}
          <div className="space-y-4">
            <Link
              href={`/${lang}/`}
              className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <Image
                src="/images/logo.webp"
                alt="Video Challenge Iran"
                width={38}
                height={38}
                className="h-9 w-9 object-contain"
              />
              <span className="leading-tight">
                <span className="block text-lg font-extrabold text-white">
                  Video Challenge Iran
                </span>
                <span className="block text-[11px] text-[#9DB0D0]">
                  {tagline[lang]}
                </span>
              </span>
            </Link>

            <p className="text-xs leading-6 text-[#A3B8DE]">
              {f.mission[lang]}
            </p>

            {/* Compliance & Standards Badges */}
            <ul className="mt-4 space-y-2 text-[11px] text-[#CBD9F2]">
              {f.complianceBadges.map((badge) => (
                <li key={badge.en} className="flex items-center gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-2.5 w-2.5 fill-none stroke-current stroke-3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span>{badge[lang]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Navigation */}
          <nav aria-label={f.columns.navigation[lang]} className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              {f.columns.navigation[lang]}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#9EB3D9]">
              {nav.map((item) => {
                const href = `/${lang}/${item.slug ? item.slug + '/' : ''}`;
                return (
                  <li key={item.slug}>
                    <Link
                      href={href}
                      className="inline-block transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                    >
                      {item[lang]}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Column 3: Supported Sports Systems */}
          <nav aria-label={f.columns.sports[lang]} className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              {f.columns.sports[lang]}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#9EB3D9]">
              {f.sportsLinks.map((sport) => (
                <li key={sport.id}>
                  <Link
                    href={`/${lang}/products/${sport.id}/`}
                    className="inline-block transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                  >
                    {sport[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4: Contact & Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white">
              {f.columns.contact[lang]}
            </h3>

            <address className="space-y-3 not-italic text-xs text-[#A3B8DE]">
              <div className="flex items-start gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span>{c.address[lang]}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-brand fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />
                </svg>
                <a
                  href={`tel:${c.phone.replace(/\s/g, '')}`}
                  dir="ltr"
                  className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {c.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-brand fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a
                  href={`mailto:${c.email}`}
                  dir="ltr"
                  className="transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {c.email}
                </a>
              </div>
            </address>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-1" dir="ltr">
              <a
                href={c.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-8 w-8 place-items-center rounded-lg border border-[#23457D] bg-[#0E254F] text-[#CBD9F2] transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
                </svg>
              </a>
              <a
                href={c.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-8 w-8 place-items-center rounded-lg border border-[#23457D] bg-[#0E254F] text-[#CBD9F2] transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5v.01" />
                </svg>
              </a>
              <a
                href={c.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-8 w-8 place-items-center rounded-lg border border-[#23457D] bg-[#0E254F] text-[#CBD9F2] transition-colors hover:border-brand hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-current stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2.5" y="5" width="19" height="14" rx="4" />
                  <path d="M10 9.5v5l4.5-2.5z" />
                </svg>
              </a>
            </div>

            {/* Quote Action CTA */}
            <div className="pt-2">
              <Link
                href={`/${lang}/quote/`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-center text-xs font-bold text-white shadow-sm transition-all hover:bg-brand/90 hover:shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>{f.cta.quote[lang]}</span>
                <span aria-hidden="true">{isFa ? '←' : '→'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Language Switcher */}
      <div className="border-t border-white/10 bg-[#051024]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row text-[11px] text-[#8095BC]">
          <p>© {currentYear} Video Challenge Iran. {f.bottom.rights[lang]}</p>

          <div className="flex items-center gap-4">
            <Link
              href={`/${otherLang}/`}
              className="inline-flex items-center gap-1.5 rounded-md border border-[#23457D] px-2.5 py-1 text-[11px] text-[#CBD9F2] transition hover:border-brand hover:bg-brand/20 hover:text-white focus-visible:outline-none"
            >
              <span aria-hidden="true">🌐</span>
              <span>{f.bottom.switchLang[lang]}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
