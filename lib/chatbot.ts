import type { Lang } from './i18n';

export interface FAQItem {
  id: string;
  keywords: string[];
  chipLabel?: { fa: string; en: string };
  answer: { fa: string; en: string };
  actionButton?: {
    label: { fa: string; en: string };
    href: string;
  };
  isQuickChip?: boolean;
}

export const FAQ_DATABASE: FAQItem[] = [
  // --- Conversational & Small Talk Intents ---
  {
    id: 'greeting',
    keywords: [
      'سلام',
      'درود',
      'صبح بخیر',
      'عصر بخیر',
      'وقت بخیر',
      'سلام علیکم',
      'سلامتی',
      'خسته نباشید',
      'سلام روز بخیر',
      'hi',
      'hello',
      'hey',
      'good morning',
      'good afternoon',
      'good evening',
      'greetings',
      'howdy',
      'hola',
    ],
    answer: {
      fa: 'سلام و درود! خوش آمدید. من دستیار هوشمند سامانه ویدئوچک ایران هستم. در زمینه استانداردهای داوری ویدیویی، چیدمان دوربین‌ها (FIVB/VAR)، نرخ فریم (FPS) و شرایط خرید یا اجاره تجهیزات می‌توانم راهنماییتان کنم. مایلید درباره کدام موضوع صحبت کنیم؟',
      en: 'Hello and welcome! I am the Video Challenge Iran virtual assistant. I can help answer your questions regarding video challenge & VAR standards, camera layouts (FIVB), high-speed frame rates, and equipment purchase or rental options. How may I assist you today?',
    },
  },
  {
    id: 'identity',
    keywords: [
      'کی هستی',
      'تو کی هستی',
      'شما کی هستید',
      'خودتو معرفی کن',
      'اسمت چیه',
      'شما چی هستید',
      'رباتی',
      'هوش مصنوعی',
      'who are you',
      'what are you',
      'who are u',
      'introduce yourself',
      'what is your name',
      'tell me about yourself',
      'are you a bot',
      'are you an ai',
    ],
    answer: {
      fa: 'من دستیار هوشمند و راهنمای تخصصی «ویدئوچک ایران» هستم. هدف من ارائه مشاوره سریع و پاسخ به پرسش‌های شما درباره فناوری‌های بازبینی ویدئویی ورزش، سامانه‌های VAR فوتبال، ویدئوچک والیبال و فوتسال، و راهنمایی جهت استعلام قیمت و دریافت پیش‌فاکتور است.',
      en: 'I am the intelligent virtual assistant for Video Challenge Iran. My mission is to provide rapid technical guidance on our sports video review technologies, football VAR solutions, volleyball and futsal video check systems, and help you request customized quotes.',
    },
    actionButton: {
      label: { fa: 'درباره ویدئوچک ایران', en: 'About Video Challenge Iran' },
      href: '/about/',
    },
  },
  {
    id: 'gratitude',
    keywords: [
      'ممنون',
      'مرسی',
      'دستت درد نکنه',
      'تشکر',
      'سپاس',
      'دمت گرم',
      'ممنونم',
      'خیلی ممنون',
      'متشکرم',
      'لطف کردی',
      'عالی بود',
      'thanks',
      'thank you',
      'thx',
      'thank u',
      'appreciate it',
      'much appreciated',
      'great thanks',
      'awesome',
    ],
    answer: {
      fa: 'خواهش می‌کنم! بسیار خوشحالم که توانستم کمکتان کنم. اگر هر سوال دیگری در رابطه با مشخصات فنی، تورنمنت‌ها یا استعلام پیش‌فاکتور دارید، همواره در کنارتان هستم.',
      en: "You're very welcome! Glad I could assist you. If you have any further questions regarding technical specifications, tournament deployments, or commercial quotes, feel free to ask anytime.",
    },
  },
  {
    id: 'farewell',
    keywords: [
      'خداحافظ',
      'خدافظ',
      'فعلا',
      'روز خوش',
      'شب خوش',
      'به امید دیدار',
      'بای',
      'قربانت',
      'bye',
      'goodbye',
      'see you',
      'cya',
      'have a nice day',
      'farewell',
      'take care',
    ],
    answer: {
      fa: 'خداحافظ و روز بسیار خوبی داشته باشید! هر زمان به پشتیبانی فنی یا راهنمایی درباره سیستم‌های داوری ویدیویی نیاز داشتید، در کنارتان هستیم. به امید ارتقای ورزش و قضاوت‌های عادلانه!',
      en: 'Goodbye and have a wonderful day! Whenever you need technical assistance or sports video solutions, we are right here. Wishing you success!',
    },
  },
  {
    id: 'contact-inquiry',
    keywords: [
      'تماس',
      'شماره تماس',
      'تلفن',
      'آدرس',
      'ایمیل',
      'ارتباط',
      'پشتیبانی',
      'دفتر',
      'contact',
      'phone',
      'email',
      'address',
      'call',
      'support',
      'office',
    ],
    answer: {
      fa: 'برای برقراری ارتباط مستقیم با کارشناسان فنی و تیم بازرگانی ویدئوچک ایران، می‌توانید با شماره تلفن مندرج در صفحه تماس ارتباط بگیرید یا پیام خود را ارسال فرمایید تا در کوتاه‌ترین زمان با شما تماس بگیریم.',
      en: 'To get in touch directly with our technical and commercial teams, you can reach out via our Contact page or submit a message so our specialists can respond promptly.',
    },
    actionButton: {
      label: { fa: 'مشاهده اطلاعات تماس', en: 'View Contact Details' },
      href: '/contact/',
    },
  },

  // --- Core Sports & System Knowledge ---
  {
    id: 'volleyball-cameras',
    isQuickChip: true,
    keywords: [
      'والیبال',
      'دوربین والیبال',
      'تعداد دوربین',
      'fivb',
      'سوپر پرو',
      'پکیج والیبال',
      'چند دوربین',
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
      fa: 'سامانه ویدئوچک والیبال ما کاملاً منطبق با استانداردهای فدراسیون جهانی والیبال (FIVB) پیاده‌سازی شده و بسته به سطح مسابقات بین ۱۳ تا ۲۳ دوربین پرسرعت همگام‌سازی شده ارائه می‌دهد:\n\n• پکیج Super Pro: ۲۳ دوربین (کامل‌ترین پوشش خطوط، تور و آنتن)\n• پکیج Pro: ۱۷ دوربین (استاندارد لیگ برتر و مسابقات بین‌المللی)\n• پکیج Economics: ۱۳ دوربین (پوشش اقتصادی برای سالن‌ها و تمرینات)',
      en: 'Our volleyball video challenge system complies with FIVB standards, offering between 13 and 23 synchronized high-speed cameras depending on the tournament tier:\n\n• Super Pro: 23 cameras (full court, antenna & net coverage)\n• Pro: 17 cameras (ideal for national leagues & championships)\n• Economics: 13 cameras (cost-effective setup for club facilities)',
    },
    actionButton: {
      label: { fa: 'مشاهده مشخصات پکیج‌ها', en: 'View Volleyball Specs' },
      href: '/products/volleyball/',
    },
  },
  {
    id: 'football-var',
    isQuickChip: true,
    keywords: [
      'فوتبال',
      'var',
      'وی ای آر',
      'ویدئوچک فوتبال',
      'داوری فوتبال',
      'آفساید',
      'خط دروازه',
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
      fa: 'سامانه بازبینی ویدیویی فوتبال از دوربین‌های حرفه‌ای صنعتی با استاندارد 3G-SDI با تأخیر نزدیک به صفر بهره می‌برد. این سامانه با پوشش چندزاویه‌ای خط دروازه، محوطه جریمه و خطوط آفساید، فیدهای همزمان با کیفیتی را در اختیار داور و اتاق بازبینی قرار می‌دهد تا تصمیمات حساس داوری با نهایت دقت اتخاذ شوند.',
      en: 'Our football video support and VAR system employs professional low-latency 3G-SDI broadcast cameras. Providing multi-angle synchronized feeds for the goal line, penalty area, and offside lines, it empowers referee teams to make confident, precise calls without game delays.',
    },
    actionButton: {
      label: { fa: 'مشاهده سامانه فوتبال', en: 'View Football System' },
      href: '/products/football/',
    },
  },
  {
    id: 'camera-fps',
    isQuickChip: true,
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
      fa: 'دوربین‌های تخصصی سامانه دارای نرخ تصویربرداری ۱۲۰ تا ۲۴۰ فریم بر ثانیه (FPS) هستند. این سرعت بالا بازپخش فوق اسلوموشن (Super Slow-Motion) کاملاً روان و بدون تاری حرکتی را فراهم می‌سازد تا تماس‌های میلی‌متری توپ با خطوط، لمس تور و خطاهای سریع در چند ثانیه به وضوح بررسی شوند.',
      en: 'Our specialized cameras capture at high-speed rates ranging from 120 up to 240+ frames per second (FPS). This delivers crisp super slow-motion replay without motion blur, enabling referees to detect millimeter-level line touches, net contacts, and rapid plays in real time.',
    },
    actionButton: {
      label: { fa: 'بررسی مشخصات فنی', en: 'Review Technical Specs' },
      href: '/products/volleyball/',
    },
  },
  {
    id: 'pricing-quote',
    isQuickChip: true,
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
      'چنده',
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
      fa: 'ما خدمات ویدئوچک را به دو صورت منعطف ارائه می‌دهیم:\n\n۱. خرید کامل سیستم: همراه با نصب، گارانتی معتبر و آموزش کامل اپراتورهای داوری\n۲. اجاره تجهیزات: به همراه تیم فنی متخصص برای رویدادها، مسابقات و تورنمنت‌های فصلی\n\nبرای دریافت پیش‌فاکتور رسمی متناسب با سالن یا باشگاه خود، کافی است فرم استعلام قیمت را پر کنید.',
      en: 'We offer flexible commercial arrangements for all organizations:\n\n1. Full System Purchase: Includes equipment, comprehensive warranty, installation, and operator training.\n2. Event Rental: Turnkey rental with on-site technical engineers for tournaments and cups.\n\nTo receive a detailed financial proposal tailored to your venue, please submit a quote inquiry.',
    },
    actionButton: {
      label: { fa: 'درخواست استعلام قیمت', en: 'Request a Quote' },
      href: '/quote/',
    },
  },
];

export const chatbotTranslations = {
  title: { fa: 'راهنمای هوشمند Video Challenge', en: 'Video Challenge Assistant' },
  subtitle: { fa: 'پاسخ فوری به سوالات متداول', en: 'Instant FAQ & System Guidance' },
  welcomeMessage: {
    fa: 'سلام! به راهنمای هوشمند ویدئوچک ایران خوش آمدید. 👋\nچگونه می‌توانم کمکتان کنم؟ می‌توانید سوال خود را در کادر زیر بنویسید یا یکی از موضوعات متداول را انتخاب نمایید:',
    en: 'Hello! Welcome to the Video Challenge Iran assistant. 👋\nHow may I help you today? Feel free to ask a question below or pick one of our quick topics:',
  },
  inputPlaceholder: {
    fa: 'سوال خود را بنویسید (مثلاً: تعداد دوربین‌ها، قیمت، FPS...)',
    en: 'Type your question (e.g. camera count, pricing, FPS...)',
  },
  send: { fa: 'ارسال', en: 'Send' },
  quickTopics: { fa: 'موضوعات پرطرفدار:', en: 'Quick topics:' },
  fallbackMessage: {
    fa: 'سپاس از سوال شما! متأسفانه هنوز پاسخ دقیقی برای این موضوع در حافظه راهنما ثبت نشده است. از آنجا که شرایط هر سالن و رشته ورزشی خاص است، پیشنهاد می‌کنم برای دریافت مشاوره مستقیم یا برآورد قیمت، از طریق صفحات زیر با کارشناسان ما در تماس باشید:',
    en: "Thank you for asking! I don't have a specific answer for this topic in my knowledge base yet. Since technical requirements vary by venue and sport, we invite you to reach out directly to our specialists via our Quote or Contact pages:",
  },
  fallbackCtaQuote: {
    fa: 'استعلام قیمت و مشاوره',
    en: 'Request a Quote',
  },
  fallbackCtaContact: {
    fa: 'تماس با کارشناسان',
    en: 'Contact Us',
  },
  openTooltip: { fa: 'پشتیبانی و سوالات متداول', en: 'FAQ & Quick Assistant' },
  closeTooltip: { fa: 'بستن پنجره', en: 'Close window' },
  resetChat: { fa: 'پاکسازی گفتگو', en: 'Reset chat' },
  botBadge: { fa: 'پشتیبان هوشمند', en: 'Smart Assistant' },
  typing: { fa: 'در حال نوشتن...', en: 'Assistant is typing...' },
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\u200c\u200b]/g, ' ')
    .replace(/[ي]/g, 'ی')
    .replace(/[ك]/g, 'ک')
    .replace(/[؟?!\.,،:؛\-_/\\()«»"']/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Returns all active quick-reply FAQ suggestion chips directly from the database.
 */
export function getQuickChips(): FAQItem[] {
  return FAQ_DATABASE.filter((item) => item.isQuickChip && item.chipLabel);
}

/**
 * Search the declarative FAQ & conversational database against a user-provided string.
 * Uses weighted keyword matching, exact matches, and word containment.
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
        score += 30; // Exact match bonus
      } else if (cleaned.startsWith(cleanedKw) || cleaned.endsWith(cleanedKw)) {
        score += cleanedKw.length * 2.5;
      } else if (cleaned.includes(cleanedKw)) {
        score += cleanedKw.length * 2;
      } else if (cleanedKw.includes(cleaned) && cleaned.length >= 3) {
        score += cleaned.length;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  // Minimum threshold to prevent spurious single-letter partial matches
  return highestScore >= 4 ? bestMatch : null;
}
