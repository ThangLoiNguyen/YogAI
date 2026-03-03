"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};

export function PublicShell({ children }: Props) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (active: boolean) =>
    active
      ? "text-sky-600 font-semibold"
      : "text-slate-500 hover:text-sky-600";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <Image
                  src="/YogAI-logo.png"
                  alt="YogAI logo"
                  width={100}
                  height={48}
                  className="rounded-full"
                />
              </span>
              <span className="hidden text-base text-slate-500 sm:inline">
                Nền tảng yoga cho giáo viên & học viên
              </span>
            </Link>

            {/* Nút menu trên mobile */}
            <div className="flex items-center gap-3 md:hidden">
              <Link
                href="/login"
                className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-sky-400"
              >
                Đăng nhập
              </Link>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-200 bg-white/80 text-slate-700 shadow-sm hover:bg-sky-50"
                aria-label="Mở menu điều hướng"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 7H20M4 12H20M4 17H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Nav trên desktop */}
            <nav className="hidden items-center gap-4 text-base md:flex">
              <Link
                href="/"
                className={linkClasses(pathname === "/")}
              >
                Trang chủ
              </Link>
              <Link
                href="/teachers"
                className={linkClasses(pathname.startsWith("/teachers"))}
              >
                Giáo viên
              </Link>
              <Link
                href="/classes"
                className={linkClasses(pathname.startsWith("/classes"))}
              >
                Lớp học
              </Link>
              <Link
                href="/blog"
                className={linkClasses(pathname.startsWith("/blog"))}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className={linkClasses(pathname.startsWith("/pricing"))}
              >
                Bảng giá
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400"
              >
                Đăng nhập
              </Link>
            </nav>
          </div>

          {/* Menu dropdown trên mobile - overlay, không đẩy body xuống */}
          {isMenuOpen && (
            <nav className="absolute inset-x-3 top-full mt-3 flex flex-col gap-2 rounded-2xl border border-sky-100 bg-white/95 p-3 text-base text-slate-800 shadow-xl ring-1 ring-sky-100 md:hidden">
              <Link
                href="/"
                className={linkClasses(pathname === "/")}
                onClick={() => setIsMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                href="/teachers"
                className={linkClasses(pathname.startsWith("/teachers"))}
                onClick={() => setIsMenuOpen(false)}
              >
                Giáo viên
              </Link>
              <Link
                href="/classes"
                className={linkClasses(pathname.startsWith("/classes"))}
                onClick={() => setIsMenuOpen(false)}
              >
                Lớp học
              </Link>
              <Link
                href="/blog"
                className={linkClasses(pathname.startsWith("/blog"))}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/pricing"
                className={linkClasses(pathname.startsWith("/pricing"))}
                onClick={() => setIsMenuOpen(false)}
              >
                Bảng giá
              </Link>
            </nav>
          )}
        </div>
      </header>

      <div className="pt-20">
        {children}

        <footer className="border-t border-sky-100 bg-white/80">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Nền tảng YogAI.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-sky-600">
                Chính sách bảo mật
              </Link>
              <Link href="/terms" className="hover:text-sky-600">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

