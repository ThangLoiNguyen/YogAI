"use client";

import Link from "next/link";

export default function TeacherOnboardingPage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-8">
        <header className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xs text-slate-600 underline-offset-4 hover:text-sky-700 hover:underline"
          >
            Trang chủ
          </Link>
            <p className="text-xs text-slate-500">
              Thiết lập hồ sơ giáo viên · 1 bước
            </p>
        </header>

        <div className="space-y-6 rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100 md:p-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Hướng dẫn ban đầu cho giáo viên
            </p>
            <h1 className="text-2xl font-semibold">
              Hoàn thiện hồ sơ để học viên hiểu rõ phong cách của bạn
            </h1>
            <p className="text-sm text-slate-600">
              Thông tin này được dùng cho hồ sơ công khai, bộ máy ghép đôi AI và
              Trợ lý Marketing để gợi ý nội dung, từ khoá và nhóm học viên phù
              hợp.
            </p>
          </div>

          <form className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm md:col-span-2">
              <label className="block text-slate-700" htmlFor="bio">
                Giới thiệu ngắn gọn về bạn
              </label>
              <textarea
                id="bio"
                rows={3}
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="Ví dụ: 500h RYT, 6 năm dạy Vinyasa & Yin, tập trung vào việc hỗ trợ dân văn phòng giảm đau lưng và quản lý stress..."
              />
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="styles">
                Phong cách yoga chính
              </label>
              <input
                id="styles"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="Vinyasa, Yin, Restorative..."
              />
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="certs">
                Chứng chỉ / đào tạo
              </label>
              <input
                id="certs"
                className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                placeholder="200h/300h/500h RYT, khoá chuyên sâu..."
              />
            </div>
          </form>

          <div className="flex flex-col items-stretch gap-3 border-t border-sky-100 pt-4 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/dashboard/teacher"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400 sm:w-auto"
            >
              Lưu và vào bảng điều khiển giáo viên
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

