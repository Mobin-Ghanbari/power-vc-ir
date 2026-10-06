'use client';

import { useState } from 'react';
import { contactPage as t } from '@/lib/contact';
import type { Lang } from '@/lib/i18n';

const input =
  'w-full rounded-lg border border-[#D6E0F2] bg-white px-3 py-2.5 text-sm placeholder:text-[#9AA8C4] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';

function Label({ id, text, required }: { id: string; text: string; required?: boolean }) {
  return (
    <label htmlFor={id} className="mb-1.5 mt-4 block text-sm font-bold text-navy first:mt-0">
      {required && <span className="text-red-500">* </span>}{text}
    </label>
  );
}

export default function ContactForm({ lang }: { lang: Lang }) {
  const f = t.fields;
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const url = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    setState('sending');
    try {
      if (!url) throw new Error('NEXT_PUBLIC_FORM_ENDPOINT is not set');
      const data = { ...Object.fromEntries(new FormData(form)), form: 'contact', lang };
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setState('ok');
    } catch (err) {
      console.error(err);
      setState('err');
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-[#D6E0F2] bg-white p-6 shadow-sm">
      <Label id="c-name" text={f.name[lang]} required />
      <input id="c-name" name="name" required placeholder={f.namePh[lang]} className={input} />

      <Label id="c-email" text={f.email[lang]} required />
      <input id="c-email" name="email" type="email" required dir="ltr" placeholder={f.emailPh[lang]} className={`${input} text-start`} />
    
      <Label id="c-phone" text={f.phone[lang]} required />
      <input id="c-phone" name="phone" type="tel" required dir="ltr" placeholder={f.emailPh[lang]} className={`${input} text-start`} />

      <Label id="c-subject" text={f.subject[lang]} />
      <select id="c-subject" name="subject" defaultValue="" className={input}>
        <option value="" disabled>{f.subjectPh[lang]}</option>
        {t.subjects.map((s) => (
          <option key={s.value} value={s.value}>{s[lang]}</option>
        ))}
      </select>

      <Label id="c-message" text={f.message[lang]} required />
      <textarea id="c-message" name="message" required rows={5} placeholder={f.messagePh[lang]} className={input} />

      <button type="submit" disabled={state === 'sending'}
        className="mt-6 w-full rounded-xl bg-brand py-3.5 text-lg font-bold text-white hover:opacity-90 disabled:opacity-60">
        {state === 'sending' ? t.sending[lang] : t.send[lang]}
      </button>

      {state === 'ok' && <p role="status" className="mt-4 rounded-lg bg-[#E6F6EC] p-3 text-sm text-[#14532D]">{t.ok[lang]}</p>}
      {state === 'err' && <p role="alert" className="mt-4 rounded-lg bg-[#FDECEC] p-3 text-sm text-[#7F1D1D]">{t.err[lang]}</p>}
    </form>
  );
}