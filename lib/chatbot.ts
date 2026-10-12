import type { Lang } from './i18n';

export interface FAQItem {
  id: string;
  keywords: string[];
  chipLabel: { fa: string; en: string };
  answer: { fa: string; en: string };
  actionButton?: {
    label: { fa: string; en: string };
    href: string;
  };
}

export const FAQ_DATABASE: FAQItem[] = [
  {
    id: 'volleyball-cameras',
    keywords: [
      'والیبال',
      'دوربین والیبال',
      'تعداد دوربین',
      'fivb',
      'سوپر پرو',
      'پکیج والیبال',
      'volleyball',
      'cameras',
      'camera count',
      'volleyball cameras',
    ],
    chipLabel: {
      fa: 'تعداد دوربین‌های والیبال (FIVB)',
      en: 'Volleyball camera count (FIVB)',
    },
    answer: {
      fa: 'سامانه ویدئوچک والیبال ما کاملاً منطبق با استانداردهای فدراسیون جهانی والیبال (FIVB) پیاده‌سازی شده و بسته به سطح مسابقات بین ۱۳ تا ۲۳ دوربین پرسرعت همگام‌سازی شده ارائه می‌دهد. پکیج‌های استاندارد شامل Super Pro (۲۳ دوربین)، Pro (۱۷ دوربین) و Economics (۱۳ دوربین) هستند که تمام زوایای زمین، تور، آنتن و خطوط را پوشش می‌دهند.',
      en: 'Our volleyball video challenge system complies with FIVB standards, offering between 13 and 23 synchronized high-speed cameras depending on the tournament tier. Standard packages include Super Pro (23 cameras), Pro (17 cameras), and Economics (13 cameras), covering all boundary lines, net contact, and antenna angles.',
    },
    actionButton: {
      label: { fa: 'مشاهده مشخصات والیبال', en: 'View Volleyball Specs' },
      href: '/products/volleyball/',
    },
  },
  {
    id: 'football-var',
    keywords: [
      'فوتبال',
      'var',
      'وی ای آر',
      'ویدئوچک فوتبال',
      'داوری فوتبال',
      'آفساید',
      'football',
      'soccer',
      'var setup',
      'football var',
    ],
    chipLabel: {
      fa: 'سیستم VAR و ویدئوچک فوتبال',
      en: 'Football VAR setup',
    },
    answer: {
      fa: 'سامانه بازبینی ویدیویی فوتبال از دوربین‌های حرفه‌ای با خروجی 3G-SDI با تأخیر ناچیز استفاده می‌کند. این سیستم با پوشش چندزاویه‌ای خط دروازه، محوطه جریمه و زوایای آفساید، تصاویر همگام باکیفیتی را برای تصمیم‌گیری سریع و قاطع تیم داوری فراهم می‌آورد.',
      en: 'Our football video support and VAR system employs professional low-latency 3G-SDI cameras. Offering multi-angle coverage of the goal line, penalty boxes, and offside perspectives, it delivers synchronized high-speed feeds for rapid referee reviews.',
    },
    actionButton: {
      label: { fa: 'مشاهده سامانه فوتبال', en: 'View Football System' },
      href: '/products/football/',
    },
  },
  {
    id: 'camera-fps',
    keywords: [
      'fps',
      'فریم',
      'نرخ فریم',
      'اسلوموشن',
      'اسلو موشن',
      'سرعت دوربین',
      'کیفیت دوربین',
      'frame rate',
      'slow motion',
      'slow-motion',
      '120',
      '200',
      '240',
      'سرعت ضبط',
    ],
    chipLabel: {
      fa: 'نرخ فریم دوربین‌ها (FPS)',
      en: 'Camera FPS / Frame rates',
    },
    answer: {
      fa: 'دوربین‌های تخصصی سامانه از نرخ تصویربرداری پرسرعت ۱۲۰ تا ۲۴۰ فریم بر ثانیه (FPS) بهره می‌برند. این نرخ فریم بالا بازپخش فوق اسلوموشن (Super Slow-Motion) روان و شفافی را ممکن می‌سازد تا حساس‌ترین صحنه‌ها مانند لمس تور، برخورد میلی‌متری توپ با خط و خطاهای لحظه‌ای با حداکثر دقت بازبینی شوند.',
      en: 'Our specialized cameras capture at 120 to 240+ frames per second (FPS). This high frame rate enables smooth, high-clarity super slow-motion replay, allowing referees to inspect minute net touches, millimetric line calls, and rapid action with precision.',
    },
    actionButton: {
      label: { fa: 'بررسی مشخصات فنی', en: 'Review Technical Specs' },
      href: '/products/volleyball/',
    },
  },
  {
    id: 'pricing-quote',
    keywords: [
      'قیمت',
      'خرید',
      'اجاره',
      'استعلام',
      'هزینه',
      'تعرفه',
      'پیش فاکتور',
      'پیش‌فاکتور',
      'فروش',
      'price',
      'pricing',
      'quote',
      'cost',
      'rent',
      'buy',
      'quotation',
    ],
    chipLabel: {
      fa: 'استعلام قیمت و شرایط خرید/اجاره',
      en: 'Pricing & Quote inquiry',
    },
    answer: {
      fa: 'ما سامانه‌های ویدئوچک را متناسب با نیاز شما در دو حالت «خرید سیستم کامل با گارانتی و آموزش» و «اجاره تجهیزات به همراه تیم فنی برای تورنمنت‌ها و مسابقات» ارائه می‌دهیم. جهت دریافت پیش‌فاکتور رسمی و مشاوره متناسب با باشگاه یا سالن خود، فرم استعلام قیمت را تکمیل فرمایید.',
      en: 'We provide video challenge systems through both full purchase (with comprehensive warranty and staff training) and flexible rental (with on-site technical support for events). Please fill out our quote request form to receive a tailored commercial offer.',
    },
    actionButton: {
      label: { fa: 'درخواست استعلام قیمت', en: 'Request a Quote' },
      href: '/quote/',
    },
  },
];

export const chatbotTranslations = {
  title: { fa: 'راهنمای هوشمند VideoCheck', en: 'VideoCheck Assistant' },
  subtitle: { fa: 'پاسخ فوری به سوالات متداول', en: 'Instant FAQ & System Guidance' },
  welcomeMessage: {
    fa: 'سلام! به راهنمای هوشمند ویدئوچک ایران خوش آمدید. برای دریافت پاسخ سریع می‌توانید سوال خود را در کادر زیر بنویسید یا یکی از موضوعات آماده را انتخاب کنید:',
    en: 'Hello! Welcome to the VideoCheck Iran assistant. You can type your question below or click any of the frequent topics to get instant answers:',
  },
  inputPlaceholder: {
    fa: 'سوال خود را بنویسید (مثلاً: تعداد دوربین‌ها، قیمت، FPS...)',
    en: 'Type your question (e.g. camera count, pricing, FPS...)',
  },
  send: { fa: 'ارسال', en: 'Send' },
  quickTopics: { fa: 'موضوعات پرطرفدار:', en: 'Quick questions:' },
  fallbackMessage: {
    fa: 'متأسفانه پاسخ مستقیمی برای این پرسش نیافتم. برای دریافت مشاوره اختصاصی و برآورد فنی متناسب با رشته ورزشی و سالن خود، می‌توانید از طریق صفحه استعلام قیمت یا تماس با ما اقدام فرمایید.',
    en: "I couldn't find a direct answer for your query. For personalized technical advice and system estimates, feel free to submit a quote request or contact our team directly.",
  },
  fallbackCta: {
    fa: 'استعلام قیمت و مشاوره',
    en: 'Request a Quote',
  },
  openTooltip: { fa: 'پشتیبانی و سوالات متداول', en: 'FAQ & Quick Assistant' },
  closeTooltip: { fa: 'بستن پنجره', en: 'Close window' },
  resetChat: { fa: 'پاکسازی گفتگو', en: 'Reset chat' },
  botBadge: { fa: 'پشتیبان خودکار', en: 'Automated Bot' },
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u200c\u200b]/g, ' ')
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[؟?!\.,،:؛\-_/\\()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Returns all active quick-reply FAQ items directly from the database.
 */
export function getQuickChips(): FAQItem[] {
  return FAQ_DATABASE;
}

/**
 * Search the declarative FAQ database against a user-provided string.
 * Uses weighted keyword matching and returns the top matching item, or null.
 */
export function findFAQAnswer(query: string): FAQItem | null {
  const cleaned = normalizeText(query);
  if (!cleaned) return null;

  let bestMatch: FAQItem | null = null;
  let highestScore = 0;

  for (const item of FAQ_DATABASE) {
    let score = 0;
    for (const kw of item.keywords) {
      const cleanedKw = normalizeText(kw);
      if (!cleanedKw) continue;

      if (cleaned === cleanedKw) {
        score += 15;
      } else if (cleaned.includes(cleanedKw)) {
        score += cleanedKw.length * 2;
      } else if (cleanedKw.includes(cleaned)) {
        score += cleaned.length;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Minimum threshold to prevent spurious single-letter partial matches
  return highestScore >= 3 ? bestMatch : null;
}
