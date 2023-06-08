import classNames from 'classnames';
import Wrapper from '../components/Wrapper';
import './globals.css';
import { Lato } from 'next/font/google';
import AudioPlayer from '../components/AudioPlayer/AudioPlayer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={classNames(
          lato.className,
          'dark:bg-slate-800 bg-white min-h-screen'
        )}
      >
        <Wrapper>{children}</Wrapper>
        <AudioPlayer />
      </body>
    </html>
  );
}
