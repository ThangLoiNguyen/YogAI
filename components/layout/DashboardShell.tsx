"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

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

  const handleLogout = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-screen bg-sky-50 text-slate-900">
      <aside className="hidden w-60 flex-col border-r border-sky-100 bg-white/80 px-4 py-5 shadow-sm shadow-sky-100 md:flex">
        <Link href="/" className="mb-6 flex items-center gap-2">
          <span className="flex items-center gap-2">
            <Image
              src="/YogAI-logo.png"
              alt="YogAI logo"
              width={26}
              height={26}
              className="rounded-full"
            />
            <span className="text-[11px] font-semibold tracking-wide text-sky-700">
              YOGAI
            </span>
          </span>
          <span className="text-xs text-slate-600">
            {role === "student"
              ? "Bảng điều khiển học viên"
              : "Bảng điều khiển giáo viên"}
          </span>
        </Link>

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

        <button
          type="button"
          onClick={handleLogout}
          className="mt-auto rounded-full bg-sky-50 px-3 py-1.5 text-xs text-slate-600 ring-1 ring-sky-100 hover:bg-sky-100"
        >
          Đăng xuất
        </button>
      </aside>

      <main className="flex-1">
        <header className="flex items-center justify-between border-b border-sky-100 bg-white/80 px-4 py-3 shadow-sm shadow-sky-100 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            {role === "student"
              ? "Bảng điều khiển học viên"
              : "Bảng điều khiển giáo viên"}
          </p>
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span>Tài khoản demo</span>
            <span className="h-7 w-7 rounded-full bg-sky-100" />
          </div>
        </header>

        <div className="px-4 py-6 md:px-6 md:py-8">{children}</div>
      </main>
    </div>
  );
}

