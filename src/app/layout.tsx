import classNames from 'classnames';
import './globals.css';
import { Lato } from 'next/font/google';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import GoogleAnalytics from '@components/GoogleAnalytics/GoogleAnalytics';
import { canonicalUrl } from '@utils/seo';
import { Toaster } from 'react-hot-toast';
import ThemeHandler from './ThemeHandler';
import TafsirModal from '@components/Tafsir/Tafsir';
import InitChapterData from './quran/InitChapterData';
import TopBar from '@components/TopBar/TopBar';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: canonicalUrl,
  manifest: '/manifest.json',
  themeColor: '#f1f5f9',
};

const AudioPlayer = dynamic(
  () => import('@components/AudioPlayer/AudioPlayer'),
  {
    ssr: false,
  }
);

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={classNames(
          lato.className,
          'dark:bg-slate-800 bg-white min-h-screen selection:bg-emerald-500/30'
        )}
      >
        <Toaster
          toastOptions={{
            className:
              'border border-emerald-500 text-slate-900 font-semibold dark:bg-slate-700 dark:text-slate-100 text-sm',
          }}
        />
        <ThemeHandler />
        <InitChapterData />
        <TopBar />
        {children}
        <AudioPlayer />
        <TafsirModal />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
