"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState<"student" | "teacher">("student");

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-10">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">
              YOGAI
            </span>
            <span className="text-sm text-slate-600">
              Nền tảng yoga cho giáo viên & học viên
            </span>
          </Link>
        </div>

        <div className="grid w-full max-w-3xl gap-8 rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100 md:grid-cols-[3fr,2fr] md:p-10">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                Đăng nhập
              </p>
              <h1 className="mt-2 text-2xl font-semibold">
                Quản lý hành trình yoga của bạn
              </h1>
                <p className="mt-2 text-sm text-slate-600">
                  Một tài khoản cho cả học viên và giáo viên. Chọn vai trò chính
                  để tối ưu trải nghiệm bảng điều khiển.
                </p>
            </div>

            <div className="inline-flex gap-2 rounded-full bg-sky-50 p-1 text-xs">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`flex-1 rounded-full px-3 py-1.5 font-medium ${
                  role === "student"
                    ? "bg-white text-sky-700 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Tôi là học viên
              </button>
              <button
                type="button"
                onClick={() => setRole("teacher")}
                className={`flex-1 rounded-full px-3 py-1.5 font-medium ${
                  role === "teacher"
                    ? "bg-white text-sky-700 shadow-sm"
                    : "text-slate-500"
                }`}
              >
                Tôi là giáo viên
              </button>
            </div>

            <form className="space-y-4">
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="ban@vidu.com"
                />
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="password">
                  Mật khẩu
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400"
              >
                Đăng nhập
              </button>
            </form>

            <p className="text-xs text-slate-600">
              Chưa có tài khoản?{" "}
              <Link
                href="/register/student"
                className="font-semibold text-sky-700 underline-offset-4 hover:underline"
              >
                Đăng ký làm học viên
              </Link>{" "}
              hoặc{" "}
              <Link
                href="/register/teacher"
                className="font-semibold text-sky-700 underline-offset-4 hover:underline"
              >
                đăng ký làm giáo viên
              </Link>
              .
            </p>
          </div>

          <aside className="space-y-4 rounded-2xl bg-sky-50 p-4 text-xs text-slate-700 ring-1 ring-sky-100">
            <p className="font-semibold text-sky-800">
              Bạn sẽ thấy gì trong bảng điều khiển?
            </p>
            <ul className="space-y-1.5">
              <li>
                • Học viên: lộ trình cá nhân hoá, lịch sử sức khoẻ, gợi ý giáo
                viên & lớp học.
              </li>
              <li>
                • Giáo viên: CRM học viên, nhật ký buổi học, trình xây giáo án
                và thống kê thu nhập.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
}

