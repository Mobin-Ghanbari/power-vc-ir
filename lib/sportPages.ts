import { otherSports } from './products';
type Bi = { fa: string; en: string };

export type SportPage = {
  id: string;
  title: Bi;
  subtitle: Bi;
  image: string;
  specs?: { value: Bi; label: Bi }[];
  topList?: { title: Bi; items: Bi[] };
  note?: Bi;
  optionsTitle?: Bi;
  options?: Bi[];
  packagesTitle?: Bi;
  packages?: { name: string; cameras: number; diagram: string }[];
  gallery?: { src: string; alt: Bi }[];
};

const num = (fa: string, en = fa): Bi => ({ fa, en });

const commonSpecs = (cameras: Bi, fps: Bi): SportPage['specs'] => [
  { value: cameras, label: { fa: 'دوربین باکیفیت', en: 'High-quality cameras' } },
  { value: fps, label: { fa: 'ضبط پرسرعت (فریم بر ثانیه)', en: 'High-speed capture (FPS)' } },
  { value: { fa: 'چندزاویه', en: 'Multi-angle' }, label: { fa: 'پوشش هماهنگ و همزمان', en: 'Synchronized coverage' } },
  { value: { fa: 'نصب', en: 'Installation' }, label: { fa: 'ساده و سریع', en: 'Easy and fast setup' } },
];

export const sportPages: SportPage[] = [
  {
    id: 'volleyball',
    title: { fa: 'ویدئوچک والیبال', en: 'Volleyball Video Challenge' },
    subtitle: {
      fa: 'سامانهٔ کامل بازبینی ویدئویی برای مسابقات والیبال.',
      en: 'A complete video review system for volleyball matches.',
    },
    image: '/images/sports/volleyball.webp',
    specs: [
      { value: {fa:'۱۷ تا ۲۳', en:'17 to 23'}, label: { fa: 'دوربین باکیفیت', en: 'High-quality cameras' } },
      { value: num('۲۰۰', '200'), label: { fa: 'ضبط پرسرعت (فریم بر ثانیه)', en: 'High-speed capture (FPS)' } },
      { value: { fa: 'چندزاویه', en: 'Multi-angle' }, label: { fa: 'پوشش هماهنگ و همزمان', en: 'Synchronized coverage' } },
      { value: { fa: 'نصب', en: 'Installation' }, label: { fa: 'ساده و سریع', en: 'Easy and fast setup' } },
    ],
    optionsTitle: { fa: 'امکانات کامل', en: 'Full options' },
    options: [
      { fa: 'برخورد توپ با زمین (داخل/خارج)', en: 'Ball IN/OUT' },
      { fa: 'خطای تور', en: 'Net Fault' },
      { fa: 'لمس زمین', en: 'Floor Touch' },
      { fa: 'لمس آنتن', en: 'Antenna Touch' },
      { fa: 'لمس بلوک', en: 'Block Touch' },
      { fa: 'عبور از تور', en: 'Beyond the Net' },
      { fa: 'خطای پا', en: 'Foot Fault' },
      { fa: 'آخرین لمس', en: 'Last touch' },
    ],
    packagesTitle: { fa: 'پکیج‌ها', en: 'Packages' },
    packages: [
      { name: 'Super Pro', cameras: 23, diagram: '/images/sports/volleyball-1.webp' },
      { name: 'Pro', cameras: 17, diagram: '/images/sports/volleyball-1.webp' },
      { name: 'Economics', cameras: 13, diagram: '/images/sports/volleyball-1.webp' },
    ]
  },
  {
    id: 'futsal',
    title: { fa: 'سامانهٔ پشتیبان ویدئویی فوتسال', en: 'Futsal Video Support System' },
    subtitle: {
      fa: 'پوشش همهٔ زاویه‌ها، از جمله خط دروازه.',
      en: 'All angles covered, including the goal line.',
    },
    image: '/images/sports/futsal.webp',
    specs: commonSpecs({ fa: '۸ تا ۱۶', en: '8 to 16' }, { fa: '۶۰ تا ۲۰۰', en: '60 to 200' }),
    note: {
      fa: 'از دوربین‌های حرفه‌ای 3G-SDI استفاده می‌کنیم. همهٔ زاویه‌ها + خط دروازه.',
      en: 'We use professional 3G-SDI cameras. All angles + goal line.',
    },
  },
  {
    id: 'basketball',
    title: { fa: 'سامانهٔ بازبینی فوری بسکتبال', en: 'Basketball Instant Review System' },
    subtitle: {
      fa: 'بازبینی فوری برای شوت‌ها، خط و زمان بازی.',
      en: 'Instant review for shots, lines and game clock.',
    },
    image: '/images/sports/basketball.webp',
    specs: commonSpecs({ fa: '۸ تا ۱۶', en: '8 to 16' }, { fa: '۶۰ تا ۲۰۰', en: '60 to 200' }),
    note: {
      fa: 'از دوربین‌های حرفه‌ای 3G-SDI استفاده می‌کنیم.',
      en: 'We use professional 3G-SDI cameras.',
    },
  },
  {
    id: 'football',
    title: { fa: 'سامانهٔ کمک‌داور ویدئویی فوتبال (VAR)', en: 'Football Video Assistant Referee (VAR)' },
    subtitle: {
      fa: 'سیستم استاندارد بازبینی صحنه‌های حساس، خط دروازه و خطوط آفساید سه‌بعدی.',
      en: 'FIFA-standard review system for critical match incidents, goal line, and 3D offside lines.',
    },
    image: '/images/sports/football.webp',
    specs: [
      {
        value: { fa: '۸ تا ۱۶', en: '8 to 16' },
        label: { fa: 'دوربین‌های سرعت‌بالا و زاویه‌بسته', en: 'High-speed & tight-angle broadcast cameras' },
      },
      {
        value: { fa: '۱۲۰ تا ۲۴۰', en: '120 to 240' },
        label: { fa: 'نرخ فریم اسلوموشن (FPS)', en: 'Super slow-motion frame rate (FPS)' },
      },
      {
        value: { fa: 'سه‌بعدی میلی‌متری', en: 'Sub-millimeter 3D' },
        label: { fa: 'کالیبراسیون خط آفساید مجازی', en: 'Virtual offside line calibration' },
      },
      {
        value: { fa: 'UHD / 4K SDI', en: 'UHD / 4K SDI' },
        label: { fa: 'خروجی پخش همزمان و همگام‌ساز', en: 'Multi-angle synchronized broadcast feed' },
      },
    ],
    note: {
      fa: 'پشتیبانی کامل از اتاق VOR، مانیتور بازبینی داور کنار زمین (RRA) و ارتباط صوتی بلادرنگ.',
      en: 'Full compliance with Video Operation Room (VOR), Referee Review Area (RRA), and real-time intercom.',
    },
  },
{
  id: 'other',
  title: { fa: 'سایر ورزش‌ها', en: 'Other sports' },
  subtitle: {
    fa: 'ورزش شما در فهرست نیست؟ دوربین‌ها و نرم‌افزار را با نیاز رشتهٔ شما تطبیق می‌دهیم.',
    en: 'Your sport is not listed? We adapt cameras and software to its needs.',
  },
  image: '/images/sports/other.webp',
  topList: {
    title: { fa: 'رشته‌هایی که پوشش می‌دهیم', en: 'Sports we cover' },
    items: otherSports.filter((o) => o.en !== 'and more'),
  },
},
];

export const sportPageIds = sportPages.map((s) => s.id);