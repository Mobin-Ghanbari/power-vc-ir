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

interface ActionLink {
  label: { fa: string; en: string };
  href: string;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionButton?: ActionLink;
  actionButtons?: ActionLink[];
  timestamp: string;
}

export default function ChatWidget({ lang }: { lang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);
  const streamIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const chips = getQuickChips();
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  const arrow = lang === 'fa' ? '←' : '→';

  const clearAllTimers = () => {
    if (typingTimerRef.current) {
      clearTimeout(typingTimerRef.current);
      typingTimerRef.current = null;
    }
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
  };

  // Initialize welcome message
  const initChat = () => {
    clearAllTimers();
    setIsTyping(false);
    setIsStreaming(false);

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
    return () => clearAllTimers();
  }, [lang]);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when chat window is opened
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

  // Simulated typing pause + typewriter streaming function
  const triggerBotResponse = (
    fullText: string,
    actionButton?: ActionLink,
    actionButtons?: ActionLink[]
  ) => {
    clearAllTimers();
    setIsTyping(true);
    setIsStreaming(true);

    // Realistic thinking pause (600ms–800ms)
    typingTimerRef.current = setTimeout(() => {
      setIsTyping(false);

      const botMessageId = `bot-${Date.now()}`;
      const now = new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      // Insert empty placeholder message to stream into
      const initialBotMsg: Message = {
        id: botMessageId,
        sender: 'bot',
        text: '',
        timestamp: now,
      };

      setMessages((prev) => [...prev, initialBotMsg]);

      let currentIndex = 0;
      const chunkSize = 3; // stream 3 characters per tick for a smooth, natural flow
      const totalLength = fullText.length;

      streamIntervalRef.current = setInterval(() => {
        currentIndex += chunkSize;
        if (currentIndex >= totalLength) {
          if (streamIntervalRef.current) {
            clearInterval(streamIntervalRef.current);
            streamIntervalRef.current = null;
          }
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId
                ? {
                    ...msg,
                    text: fullText,
                    actionButton,
                    actionButtons,
                  }
                : msg
            )
          );
          setIsStreaming(false);
          setTimeout(() => inputRef.current?.focus(), 100);
        } else {
          const currentSlice = fullText.slice(0, currentIndex);
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessageId ? { ...msg, text: currentSlice } : msg
            )
          );
        }
      }, 18);
    }, 650);
  };

  const handleChipClick = (faq: FAQItem) => {
    if (isTyping || isStreaming) return;

    const now = new Date().toLocaleTimeString(lang === 'fa' ? 'fa-IR' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: faq.chipLabel ? faq.chipLabel[lang] : faq.answer[lang],
      timestamp: now,
    };

    setMessages((prev) => [...prev, userMsg]);
    triggerBotResponse(faq.answer[lang], faq.actionButton);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    if (!query || isTyping || isStreaming) return;

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

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    const match = findFAQAnswer(query);

    if (match) {
      triggerBotResponse(match.answer[lang], match.actionButton);
    } else {
      // Smart Fallback providing both Quote and Contact buttons
      triggerBotResponse(
        t.fallbackMessage[lang],
        undefined,
        [
          { label: t.fallbackCtaQuote, href: '/quote/' },
          { label: t.fallbackCtaContact, href: '/contact/' },
        ]
      );
    }
  };

  const formatHref = (href: string) => {
    const cleaned = href.startsWith('/') ? href : `/${href}`;
    return `/${lang}${cleaned}`;
  };

  const isBusy = isTyping || isStreaming;

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
          } z-50 flex h-[560px] max-h-[calc(100vh-7.5rem)] w-[calc(100vw-2rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-[#D6E0F2] bg-white shadow-2xl transition-all duration-200 animate-in fade-in zoom-in-95`}
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
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-extrabold leading-tight">
                    {t.title[lang]}
                  </h3>
                  <span className="rounded-full bg-brand/30 px-1.5 py-0.2 text-[9px] font-medium text-[#CFDCF8]">
                    AI
                  </span>
                </div>
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
                      {/* Subtly animated streaming cursor if still streaming this message */}
                      {isStreaming && m.id.startsWith('bot-') && !m.actionButton && !m.actionButtons && (
                        <span className="inline-block ms-0.5 h-3.5 w-1 bg-brand animate-pulse align-middle" />
                      )}
                    </p>

                    {/* Single Action CTA Button */}
                    {m.actionButton && (
                      <div className="mt-2.5 pt-1.5 border-t border-[#EDF3FC] animate-in fade-in duration-300">
                        <Link
                          href={formatHref(m.actionButton.href)}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 rounded-md bg-brand px-3 py-1.5 text-[11px] font-bold text-white shadow-xs transition hover:opacity-90 active:scale-95"
                        >
                          <span>{m.actionButton.label[lang]}</span>
                          <span aria-hidden>{arrow}</span>
                        </Link>
                      </div>
                    )}

                    {/* Multiple Action CTA Buttons (Smart Fallback) */}
                    {m.actionButtons && m.actionButtons.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5 pt-1.5 border-t border-[#EDF3FC] animate-in fade-in duration-300">
                        {m.actionButtons.map((btn, idx) => (
                          <Link
                            key={btn.href}
                            href={formatHref(btn.href)}
                            onClick={() => setIsOpen(false)}
                            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1.2 text-[11px] font-bold transition active:scale-95 ${
                              idx === 0
                                ? 'bg-brand text-white hover:opacity-90 shadow-xs'
                                : 'border border-[#CBD9F2] bg-white text-navy hover:bg-[#EEF4FF] hover:border-brand'
                            }`}
                          >
                            <span>{btn.label[lang]}</span>
                            <span aria-hidden>{arrow}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="mt-1 px-1 text-[10px] text-[#8695B4]">
                    {m.timestamp}
                  </span>
                </div>
              );
            })}

            {/* Simulated Typing Indicator Bubble */}
            {isTyping && (
              <div className="flex flex-col items-start animate-in fade-in duration-200">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-xs border border-[#E0EAF6] bg-white px-4 py-3 shadow-xs">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.3s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand [animation-delay:-0.15s]" />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-brand" />
                </div>
                <span className="mt-1 px-1 text-[10px] text-[#8695B4]">
                  {t.typing[lang]}
                </span>
              </div>
            )}

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
                  disabled={isBusy}
                  onClick={() => handleChipClick(faq)}
                  className="shrink-0 rounded-full border border-[#CFDCF2] bg-white px-2.5 py-1 text-[11px] font-medium text-navy shadow-2xs transition-all hover:border-brand hover:bg-[#EEF4FF] hover:text-brand disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                >
                  {faq.chipLabel ? faq.chipLabel[lang] : ''}
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
              disabled={isBusy}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={isBusy ? t.typing[lang] : t.inputPlaceholder[lang]}
              className="flex-1 rounded-xl border border-[#D5E1F5] bg-[#F7F9FC] px-3 py-2 text-xs text-navy placeholder:text-[#9AA8C4] focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/25 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isBusy || !inputValue.trim()}
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
