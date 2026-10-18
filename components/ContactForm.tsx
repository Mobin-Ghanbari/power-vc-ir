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

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15 && /^[+]?[\d\s\-()]+$/.test(phone.trim());
}

export default function ContactForm({ lang }: { lang: Lang }) {
  const f = t.fields;
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [phoneError, setPhoneError] = useState('');

  const isSubmitting = state === 'sending';

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    // 1. Honeypot Anti-Spam Check
    const honeypot = formData.get('website_hp');
    if (honeypot) {
      form.reset();
      setState('ok');
      return;
    }

    // 2. Trim string values & prepare data
    const rawData = Object.fromEntries(formData.entries());
    delete rawData.website_hp;
    const trimmedData: Record<string, string> = {};
    for (const [key, val] of Object.entries(rawData)) {
      if (typeof val === 'string') {
        trimmedData[key] = val.trim();
      }
    }

    // 3. Client-side Phone Validation
    const phone = trimmedData.phone ?? '';
    if (!isValidPhone(phone)) {
      setPhoneError(
        lang === 'fa'
          ? 'لطفاً یک شماره تلفن معتبر وارد کنید (حداقل ۷ تا ۱۵ رقم).'
          : 'Please enter a valid phone number (7 to 15 digits).'
      );
      return;
    }
    setPhoneError('');

    const url = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    setState('sending');

    try {
      if (!url) throw new Error('NEXT_PUBLIC_FORM_ENDPOINT is not set');
      const data = { ...trimmedData, form: 'contact', lang };
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
      {/* Honeypot field for bot detection */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <label htmlFor="c-website-hp">Leave this field blank</label>
        <input
          id="c-website-hp"
          type="text"
          name="website_hp"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Label id="c-name" text={f.name[lang]} required />
      <input id="c-name" name="name" required placeholder={f.namePh[lang]} className={input} />

      <Label id="c-email" text={f.email[lang]} required />
      <input id="c-email" name="email" type="email" required dir="ltr" placeholder={f.emailPh[lang]} className={`${input} text-start`} />

      <Label id="c-phone" text={f.phone[lang]} required />
      <input
        id="c-phone"
        name="phone"
        type="tel"
        required
        dir="ltr"
        placeholder={f.phonePh[lang]}
        className={`${input} text-start ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
        onChange={() => {
          if (phoneError) setPhoneError('');
        }}
      />
      {phoneError && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {phoneError}
        </p>
      )}

      <Label id="c-subject" text={f.subject[lang]} />
      <select id="c-subject" name="subject" defaultValue="" className={input}>
        <option value="" disabled>{f.subjectPh[lang]}</option>
        {t.subjects.map((s) => (
          <option key={s.value} value={s.value}>{s[lang]}</option>
        ))}
      </select>

      <Label id="c-message" text={f.message[lang]} required />
      <textarea id="c-message" name="message" required rows={5} placeholder={f.messagePh[lang]} className={input} />

      <button
        type="submit"
        disabled={isSubmitting}
        className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-lg font-bold text-white shadow-sm transition hover:opacity-90 active:scale-98 ${
          isSubmitting ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>{t.sending[lang]}</span>
          </>
        ) : (
          <span>{t.send[lang]}</span>
        )}
      </button>

      {state === 'ok' && <p role="status" className="mt-4 rounded-lg bg-[#E6F6EC] p-3 text-sm text-[#14532D]">{t.ok[lang]}</p>}
      {state === 'err' && <p role="alert" className="mt-4 rounded-lg bg-[#FDECEC] p-3 text-sm text-[#7F1D1D]">{t.err[lang]}</p>}
    </form>
  );
}