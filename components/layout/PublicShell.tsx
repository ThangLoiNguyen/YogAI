import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PublicShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50 text-slate-900">
      <header className="border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">
              YOGAI
            </span>
            <span className="text-sm text-slate-500">
              Yoga platform for teachers & students
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-500">
            <Link href="/teachers" className="hover:text-sky-600">
              Teachers
            </Link>
            <Link href="/classes" className="hover:text-sky-600">
              Classes
            </Link>
            <Link href="/blog" className="hover:text-sky-600">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-sky-600">
              Pricing
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
          <p>© {new Date().getFullYear()} YogAI Platform.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-sky-600">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-sky-600">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

