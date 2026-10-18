import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFoundView from '@/components/NotFoundView';

export default function RootNotFound() {
  return (
    <div dir="rtl" className="flex min-h-screen flex-col justify-between bg-[#f3f6fc] text-[#0f1b33]">
      <Header lang="fa" />
      <NotFoundView forcedLang="fa" />
      <Footer lang="fa" />
    </div>
  );
}
