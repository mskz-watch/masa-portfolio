import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/layout/Cursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "服部 優一 | UI/UX Designer",
  description: "ユーザーと誠実に向き合うUI/UXデザイナー、服部 優一のポートフォリオサイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Noto+Serif+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Cursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
