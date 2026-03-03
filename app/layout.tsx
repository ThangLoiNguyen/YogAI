import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YogAI - Nền tảng yoga cho giáo viên & học viên",
  description:
    "Nền tảng all-in-one giúp giáo viên và học viên yoga quản lý hành trình tập luyện, giáo án và kết nối thông minh.",
    icons: {
      icon: "/YogAI-logo.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
