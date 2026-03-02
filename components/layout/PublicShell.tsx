"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PublicShell({ children }: Props) {
  const pathname = usePathname();

  const linkClasses = (active: boolean) =>
    active
      ? "text-sky-600 font-semibold"
      : "text-slate-500 hover:text-sky-600";

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      <header className="border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
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
            <span className="text-base text-slate-500">
              Nền tảng yoga cho giáo viên & học viên
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-base">
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
      </header>

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
  );
}

