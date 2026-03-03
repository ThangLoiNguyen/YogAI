"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type DashboardShellProps = {
  role: "student" | "teacher";
  children: React.ReactNode;
};

const studentNav = [
  { href: "/dashboard/student", label: "Tổng quan" },
  { href: "/dashboard/student/profile", label: "Hồ sơ" },
  { href: "/dashboard/student/health", label: "Sức khỏe" },
  { href: "/dashboard/student/recommendations", label: "Gợi ý" },
  { href: "/dashboard/student/schedule", label: "Lịch tập" },
  { href: "/dashboard/student/progress", label: "Tiến trình" },
];

const teacherNav = [
  { href: "/dashboard/teacher", label: "Tổng quan" },
  { href: "/dashboard/teacher/students", label: "Học viên" },
  { href: "/dashboard/teacher/classes", label: "Lớp học" },
  { href: "/dashboard/teacher/curriculum", label: "Giáo án" },
  { href: "/dashboard/teacher/ai-assistant", label: "Trợ lý AI" },
  { href: "/dashboard/teacher/analytics", label: "Phân tích" },
];

export function DashboardShell({ role, children }: DashboardShellProps) {
  const pathname = usePathname();
  const navItems = role === "student" ? studentNav : teacherNav;
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-sky-50 text-slate-900">
      <aside className="hidden w-60 flex-col border-r border-sky-100 bg-white/80 px-4 py-5 shadow-sm shadow-sky-100 md:flex">
        <nav className="space-y-1 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-xl px-3 py-2 ${
                  active
                    ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                    : "text-slate-600 hover:bg-sky-50"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Nút home trên desktop: nằm ngay trên nút đăng xuất */}
        <Link
          href="/"
          className="mt-auto mb-2 inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11L12 4L20 11V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 20V13H14V20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Trang chính</span>
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 rounded-full bg-sky-50 px-3 py-1.5 text-xs text-slate-600 ring-1 ring-sky-100 hover:bg-sky-100"
        >
          Đăng xuất
        </button>
      </aside>

      <main className="flex-1">
        <div className="relative z-20 border-b border-sky-100 bg-white/80 shadow-sm shadow-sky-100">
          <header className="flex items-center justify-between px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                {role === "student"
                  ? "Bảng điều khiển học viên"
                  : "Bảng điều khiển giáo viên"}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <span className="hidden sm:inline">Tài khoản demo</span>
              <span className="h-7 w-7 rounded-full bg-sky-100" />
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-white/80 text-slate-700 shadow-sm hover:bg-sky-50 md:hidden"
                aria-label="Mở menu điều hướng bảng điều khiển"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileNavOpen ? (
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
          </header>

          {/* Nav mobile trong dashboard - overlay, không đẩy body xuống */}
          {isMobileNavOpen && (
            <nav className="absolute inset-x-4 top-full mt-2 flex flex-col gap-2 rounded-2xl border border-sky-100 bg-white/95 p-3 text-sm text-slate-800 shadow-lg ring-1 ring-sky-100 md:hidden">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileNavOpen(false)}
                    className={`rounded-full px-3 py-2 text-sm ${
                      active
                        ? "bg-sky-500 text-white shadow-sm shadow-sky-200"
                        : "text-slate-700 hover:bg-sky-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/"
                onClick={() => setIsMobileNavOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-2 text-[14px] font-semibold text-sky-700 shadow-sm hover:bg-sky-50"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 11L12 4L20 11V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 20V13H14V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Trang chính</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  handleLogout();
                }}
                className="rounded-full bg-sky-50 px-3 py-2 text-xs text-slate-600 ring-1 ring-sky-100 hover:bg-sky-100"
              >
                Đăng xuất
              </button>
            </nav>
          )}
        </div>

        <div className="px-4 py-6 md:px-6 md:py-8">{children}</div>
      </main>
    </div>
  );
}

