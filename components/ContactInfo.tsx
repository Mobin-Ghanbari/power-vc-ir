import { contactPage as t } from '@/lib/contact';
import type { Lang } from '@/lib/i18n';

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as const;

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center text-brand">
        <svg viewBox="0 0 24 24" className="h-7 w-7" {...stroke} aria-hidden>{icon}</svg>
      </span>
      <div>
        <div className="font-bold text-navy">{label}</div>
        <div className="text-[#46557A]">{children}</div>
      </div>
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
       className="grid h-10 w-10 place-items-center rounded-lg bg-navy text-white hover:bg-brand">
      <svg viewBox="0 0 24 24" className="h-5 w-5" {...stroke} aria-hidden>{children}</svg>
    </a>
  );
}

export default function ContactInfo({ lang }: { lang: Lang }) {
  const l = t.labels;
  return (
    <aside className="space-y-6 rounded-2xl border border-[#D6E0F2] bg-[#EAF1FF] p-6">
      <h2 className="text-xl font-extrabold text-navy">{t.infoTitle[lang]}</h2>
      <Row label={l.address[lang]} icon={<><path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>}>
        {t.address[lang]}
      </Row>
      <Row label={l.phone[lang]} icon={<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />}>
        <a href={`tel:${t.phone.replace(/\s/g, '')}`} dir="ltr" className="inline-block">{t.phone}</a>
      </Row>
      <Row label={l.email[lang]} icon={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>}>
        <a href={`mailto:${t.email}`} dir="ltr" className="inline-block">{t.email}</a>
      </Row>
      <div>
        <div className="mb-3 font-bold text-navy">{l.follow[lang]}</div>
        <div className="flex gap-3" dir="ltr">
          <Social href={t.social.linkedin} label="LinkedIn">
            <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
          </Social>
          <Social href={t.social.instagram} label="Instagram">
            <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" />
          </Social>
          <Social href={t.social.youtube} label="YouTube">
            <rect x="2.5" y="5" width="19" height="14" rx="4" /><path d="M10 9.5v5l4.5-2.5z" />
          </Social>
        </div>
      </div>
    </aside>
  );
}