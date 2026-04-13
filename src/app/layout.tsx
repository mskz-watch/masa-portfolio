import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://masakazuhattori.com"),
  title: "服部 優一 | UI/UX Designer",
  description: "生活者の解像度でサービスを設計する、UI/UXデザイナー服部優一のポートフォリオです。",
  openGraph: {
    title: "服部 優一 | UI/UX Designer",
    description: "生活者の解像度でサービスを設計する、UI/UXデザイナー服部優一のポートフォリオです。",
    url: "https://masakazuhattori.com",
    siteName: "Masakazu Hattori",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "服部優一 | UI/UX Designer",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "服部 優一 | UI/UX Designer",
    description: "生活者の解像度でサービスを設計する、UI/UXデザイナー服部優一のポートフォリオです。",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
