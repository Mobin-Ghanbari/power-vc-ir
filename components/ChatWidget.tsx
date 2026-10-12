'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { Lang } from '@/lib/i18n';
import {
  chatbotTranslations as t,
  findFAQAnswer,
  getQuickChips,
  type FAQItem,
} from '@/lib/chatbot';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionButton?: {
    label: { fa: string; en: string };
    href: string;
  };
  timestamp: string;
}

export default function ChatWidget({ lang }: { lang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chips = getQuickChips();
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  const arrow = lang === 'fa' ? '←' : '→';

  // Initialize welcome message
  const initChat = () => {
    const welcome: Message = {
      id: 'welcome',
      sender: 'bot',
      text: t.welcomeMessage[lang],
      timestamp: new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setMessages([welcome]);
  };

  useEffect(() => {
    initChat();
  }, [lang]);

  // Scroll to bottom on new message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleChipClick = (faq: FAQItem) => {
    const now = new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: faq.chipLabel[lang],
      timestamp: now,
    };

    const botMsg: Message = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: faq.answer[lang],
      actionButton: faq.actionButton,
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query) return;

    const now = new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: now,
    };

    const match = findFAQAnswer(query);

    let botMsg: Message;
    if (match) {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: match.answer[lang],
        actionButton: match.actionButton,
        timestamp: now,
      };
    } else {
      botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: t.fallbackMessage[lang],
        actionButton: {
          label: t.fallbackCta,
          href: '/quote/',
        },
        timestamp: now,
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue('');
  };

  const formatHref = (href: string) => {
    const cleaned = href.startsWith('/') ? href : `/${href}`;
    return `/${lang}${cleaned}`;
  };

  return (
    <aside aria-label={t.title[lang]} dir={dir}>
      {/* Floating Circular Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? t.closeTooltip[lang] : t.openTooltip[lang]}
        className={`fixed bottom-6 ${
          lang === 'fa' ? 'left-6' : 'right-6'
        } z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand/40 active:scale-95`}
      >
        {isOpen ? (
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-white stroke-2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-none stroke-white stroke-2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            <span className="absolute -top-1 -end-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className={`fixed bottom-24 ${
            lang === 'fa' ? 'left-4 sm:left-6' : 'right-4 sm:right-6'
          } z-50 flex h-[540px] max-h-[calc(100vh-7.5rem)] w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-[#D6E0F2] bg-white shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95`}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-navy px-4 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white shadow-inner">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-none stroke-white stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M3 12h3M18 12h3M12 3v3M12 18v3" />
                </svg>
                <span className="absolute bottom-0 end-0 h-2.5 w-2.5 rounded-full border-2 border-navy bg-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold leading-tight">
                  {t.title[lang]}
                </h3>
                <p className="text-[11px] text-[#A8BEE4]">
                  {t.subtitle[lang]}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={initChat}
                title={t.resetChat[lang]}
                aria-label={t.resetChat[lang]}
                className="rounded-lg p-1.5 text-[#C9D6F2] hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-none stroke-currentColor stroke-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5" />
                  <path d="M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title={t.closeTooltip[lang]}
                aria-label={t.closeTooltip[lang]}
                className="rounded-lg p-1.5 text-[#C9D6F2] hover:bg-white/10 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 stroke-currentColor stroke-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-[#F4F7FC] p-4 text-xs leading-relaxed">
            {messages.map((m) => {
              const isBot = m.sender === 'bot';
              return (
                <div
                  key={m.id}
                  className={`flex flex-col ${
                    isBot ? 'items-start' : 'items-end'
                  }`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3 shadow-xs ${
                      isBot
                        ? 'rounded-tl-xs border border-[#E0EAF6] bg-white text-navy'
                        : 'rounded-tr-xs bg-brand text-white'
                    }`}
                  >
                    <p className="whitespace-pre-line text-xs font-normal">
                      {m.text}
                    </p>

                    {m.actionButton && (
                      <div className="mt-2.5 pt-1.5 border-t border-[#EDF3FC]">
                        <Link
                          href={formatHref(m.actionButton.href)}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 rounded-md bg-brand px-3 py-1.5 text-[11px] font-bold text-white shadow-xs transition hover:opacity-90"
                        >
                          <span>{m.actionButton.label[lang]}</span>
                          <span aria-hidden>{arrow}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                  <span className="mt-1 px-1 text-[10px] text-[#8695B4]">
                    {m.timestamp}
                  </span>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Reply Suggestion Chips */}
          <div className="border-t border-[#E8EFFC] bg-[#FAFCFF] p-2.5">
            <div className="mb-1.5 flex items-center gap-1 px-1 text-[11px] font-bold text-[#5A6D94]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 fill-none stroke-brand stroke-2"
                aria-hidden
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>{t.quickTopics[lang]}</span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
              {chips.map((faq) => (
                <button
                  key={faq.id}
                  type="button"
                  onClick={() => handleChipClick(faq)}
                  className="shrink-0 rounded-full border border-[#CFDCF2] bg-white px-2.5 py-1 text-[11px] font-medium text-navy shadow-2xs transition-all hover:border-brand hover:bg-[#EEF4FF] hover:text-brand active:scale-95"
                >
                  {faq.chipLabel[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* User Input Bar */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-[#E2ECF8] bg-white p-2.5"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t.inputPlaceholder[lang]}
              className="flex-1 rounded-xl border border-[#D5E1F5] bg-[#F7F9FC] px-3 py-2 text-xs text-navy placeholder:text-[#9AA8C4] focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/25"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              aria-label={t.send[lang]}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-xs transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg
                viewBox="0 0 24 24"
                className={`h-4 w-4 fill-none stroke-white stroke-2 ${
                  lang === 'fa' ? 'rotate-180' : ''
                }`}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}
