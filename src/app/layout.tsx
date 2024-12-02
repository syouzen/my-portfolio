import type { Metadata, Viewport } from "next";
import "./globals.css";

import { sans, serif, serif_en } from "./font";
import { MoonIcon } from "@radix-ui/react-icons";

const contents = {
  title: "최승연 | 포트폴리오",
  description: "안녕하세요! 소통하는 개발자 최승연입니다.",
};

export const viewport: Viewport = {
  width: "device-width",
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
      "https://media.licdn.com/dms/image/v2/D4E12AQELCK4nxHu6Iw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1663334927305?e=2147483647&v=beta&t=KUNyf2Yks6mD9XV5DdbnsnS4XuEPlyyI7jz7QiPEqA8",
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
    <html lang="ko" className={`${sans.variable} ${serif.variable} ${serif_en.variable}`}>
      <body className="bg-gray-100">
        <header className="sticky top-0 bg-opacity-90 backdrop-blur-lg">
          <nav className="container max-w-4xl mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">최승연</h1>
              <p className="text-sm text-gray-500">프론트엔드 개발자</p>
            </div>

            <div className="flex items-center gap-x-6">
              <a href="#home" className="hover:text-blue-200 transition-colors">
                Home
              </a>
              <a href="#introduction" className="hover:text-blue-200 transition-colors">
                Introduction
              </a>
              <a href="#skills" className="hover:text-blue-200 transition-colors">
                Skills
              </a>
              <a href="#work-experience" className="hover:text-blue-200 transition-colors">
                Work Experience
              </a>
              <a href="#side-projects" className="hover:text-blue-200 transition-colors">
                Side Projects
              </a>
              <button className="p-2 w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center focus:outline-none focus:ring focus:ring-blue-500">
                <MoonIcon className="text-black" />
              </button>
            </div>
          </nav>
        </header>
        <main className="container max-w-4xl mx-auto px-6 py-12 bg-gray-100">{children}</main>
        <footer className="w-full h-20 bg-blue-500"></footer>
      </body>
    </html>
  );
}
