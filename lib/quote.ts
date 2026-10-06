export const quotePage = {
  title: { fa: 'درخواست استعلام قیمت', en: 'Request a quote' },
  text: {
    fa: 'برای دریافت جزئیات بیشتر و مشاوره، فرم زیر را تکمیل کنید تا با شما تماس بگیریم.',
    en: 'To get more details and advice, fill in the form below and we will contact you.',
  },
  fields: {
    name: { fa: 'نام و نام خانوادگی', en: 'Full name' },
    namePh: { fa: 'نام خود را وارد کنید', en: 'Enter your name' },
    email: { fa: 'ایمیل', en: 'Email' },
    emailPh: { fa: 'ایمیل خود را وارد کنید', en: 'Enter your email' },
    phone: { fa: 'شماره تلفن', en: 'Phone number' },
    phonePh: { fa: 'شماره تلفن خود را وارد کنید', en: 'Enter your phone number' },
    country: { fa: 'کشور', en: 'Country' },
    countryPh: { fa: 'انتخاب کشور', en: 'Select country' },
    message: { fa: 'پیام شما', en: 'Your message' },
    messagePh: { fa: 'پیام خود را وارد کنید', en: 'Enter your message' },
  },
  send: { fa: 'ارسال درخواست', en: 'Send request' },
  sending: { fa: 'در حال ارسال...', en: 'Sending...' },
  ok: { fa: 'درخواست شما ثبت شد. به‌زودی با شما تماس می‌گیریم.', en: 'Your request has been received. We will contact you soon.' },
  err: { fa: 'ارسال انجام نشد. لطفاً دوباره تلاش کنید.', en: 'Could not send. Please try again.' },
  info: [
    { icon: 'clock', title: { fa: 'پاسخ سریع', en: 'Fast reply' }, text: { fa: 'در کوتاه‌ترین زمان ممکن با شما تماس می‌گیریم.', en: 'We will contact you as soon as possible.' } },
    { icon: 'tools', title: { fa: 'راهکارهای اختصاصی', en: 'Tailored solutions' }, text: { fa: 'متناسب با نیازهای شما.', en: 'Matched to your needs.' } },
    { icon: 'globe', title: { fa: 'اعتماد در سطح جهانی', en: 'Global trust' }, text: { fa: 'تجربهٔ همکاری با تیم‌ها و فدراسیون‌های معتبر.', en: 'Experience working with respected teams and federations.' } },
  ],
};

export const countries: { fa: string; en: string }[] = [
  { fa: 'ایران', en: 'Iran' }, { fa: 'ترکیه', en: 'Turkey' }, { fa: 'عراق', en: 'Iraq' },
  { fa: 'افغانستان', en: 'Afghanistan' }, { fa: 'ارمنستان', en: 'Armenia' }, { fa: 'آذربایجان', en: 'Azerbaijan' },
  { fa: 'قطر', en: 'Qatar' }, { fa: 'امارات', en: 'UAE' }, { fa: 'قزاقستان', en: 'Kazakhstan' },
  { fa: 'ازبکستان', en: 'Uzbekistan' }, { fa: 'ایتالیا', en: 'Italy' }, { fa: 'آلمان', en: 'Germany' },
  { fa: 'فرانسه', en: 'France' }, { fa: 'سایر کشورها', en: 'Other' },
];