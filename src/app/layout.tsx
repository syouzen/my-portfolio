import type { Metadata, Viewport } from 'next';
import './globals.css';

import { sans, serif, serif_en } from './font';
import Header from './_components/header';
import ThemeProviders from './_providers/theme';
import Footer from './_components/footer';

const contents = {
  title: '최승연 | 포트폴리오',
  description: '안녕하세요! 소통하는 개발자 최승연입니다.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: contents.title,
  description: contents.description,
  openGraph: {
    title: contents.title,
    description: contents.description,
    images: [
      'https://media.licdn.com/dms/image/v2/D4E12AQELCK4nxHu6Iw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1663334927305?e=2147483647&v=beta&t=KUNyf2Yks6mD9XV5DdbnsnS4XuEPlyyI7jz7QiPEqA8',
    ],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${sans.variable} ${serif.variable} ${serif_en.variable}`}
    >
      <body>
        <ThemeProviders>
          <Header />
          <main className="container max-w-4xl mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </ThemeProviders>
      </body>
    </html>
  );
}
