"use client";

import Link from "next/link";

export default function TeacherRegisterPage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-4 py-10">
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

          <form className="grid gap-4 md:grid-cols-2">
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
              href="/onboarding/teacher"
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

