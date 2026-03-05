"use client";

import Link from "next/link";
import { useState } from "react";

export default function TeacherRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-start px-4 py-10">
        <div className="mb-6">
          <Link
            href="/login"
            className="text-xs text-slate-600 underline-offset-4 hover:text-sky-700 hover:underline"
          >
            ← Quay lại đăng nhập
          </Link>
        </div>

        <div className="space-y-6 rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100 md:p-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Đăng ký giáo viên
            </p>
            <h1 className="text-2xl font-semibold">
              Xây dựng hồ sơ & studio trực tuyến của bạn
            </h1>
            <p className="text-sm text-slate-600">
              Sau bước đăng ký, bạn sẽ thiết lập hồ sơ, chuyên môn và chứng chỉ.
              Trợ lý Marketing sẽ gợi ý cách tối ưu hồ sơ và nội dung.
            </p>
          </div>

          <form
            className="grid gap-4 md:grid-cols-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="name">
                Họ tên
              </label>
              <input
                id="name"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="Nguyễn Thị B"
              />
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="password">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 pr-16 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev: boolean) => !prev)}
                  className="absolute inset-y-0 right-3 my-auto flex h-5 w-5 items-center justify-center text-sky-700 hover:text-sky-500"
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-8-10-8a18.45 18.45 0 0 1 5.06-6.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M14.12 9.88A3 3 0 0 1 12 15a3 3 0 0 1-2.12-5.12" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12S4 4 12 4s11 8 11 8-3 8-11 8S1 12 1 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="specialty">
                Chuyên môn chính
              </label>
              <input
                id="specialty"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="Vinyasa, Yin, Restorative..."
              />
            </div>
          </form>

          <div className="flex flex-col gap-3 border-t border-sky-100 pt-4 text-xs text-slate-600 md:flex-row md:items-center md:justify-between">
            <p>
              Sau khi hoàn tất, bạn có thể kết nối tài khoản thanh toán và
              thiết lập lịch lớp.
            </p>
            <Link
              href="/dashboard/teacher"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400 sm:w-auto"
            >
              Thiết lập hồ sơ giáo viên →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

