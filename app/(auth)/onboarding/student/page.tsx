"use client";

import Link from "next/link";
import { useState } from "react";

const STEPS = ["Sức khoẻ", "Kinh nghiệm", "Mục tiêu", "Lịch rảnh", "Sở thích"];

export default function StudentOnboardingPage() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(STEPS.length - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

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
            Bước {step + 1}/5 · Phiếu thông tin học viên
          </p>
        </header>

        <div className="space-y-6 rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100 md:p-8">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Hướng dẫn ban đầu cho học viên
            </p>
            <h1 className="text-2xl font-semibold">
              Cho chúng tôi biết về cơ thể & nhịp sống của bạn
            </h1>
            <p className="text-sm text-slate-600">
              Thông tin này giúp bộ máy ghép đôi AI và trình xây giáo án tôn
              trọng giới hạn cơ thể, tránh chống chỉ định và thiết kế lộ trình
              an toàn hơn.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px]">
            {STEPS.map((stepLabel, idx) => (
              <span
                key={stepLabel}
                className={`rounded-full px-3 py-1 ${
                  idx === step
                    ? "bg-sky-500 text-white"
                    : "bg-sky-50 text-slate-600 ring-1 ring-sky-100"
                }`}
              >
                {idx + 1}. {stepLabel}
              </span>
            ))}
          </div>

          {step === 0 && (
            <form className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5 text-sm md:col-span-2">
                <label className="block text-slate-700" htmlFor="conditions">
                  Bạn đang có bệnh lý / chấn thương nào cần lưu ý?
                </label>
                <textarea
                  id="conditions"
                  rows={3}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="Ví dụ: đau lưng dưới, thoát vị đĩa đệm nhẹ, tiền sử chấn thương đầu gối..."
                />
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="energy">
                  Mức năng lượng trung bình trong ngày
                </label>
                <select
                  id="energy"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 focus:bg-white focus:ring"
                >
                  <option>Rất thấp</option>
                  <option>Thấp</option>
                  <option>Trung bình</option>
                  <option>Cao</option>
                </select>
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="sleep">
                  Chất lượng giấc ngủ
                </label>
                <select
                  id="sleep"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 focus:bg-white focus:ring"
                >
                  <option>Khó ngủ / hay thức giấc</option>
                  <option>Trung bình</option>
                  <option>Ngủ sâu, ổn định</option>
                </select>
              </div>
            </form>
          )}

          {step === 1 && (
            <form className="grid gap-4 md:grid-cols-2">
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="experience">
                  Bạn đã từng tập yoga bao lâu?
                </label>
                <select
                  id="experience"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 focus:bg-white focus:ring"
                >
                  <option>Hoàn toàn mới</option>
                  <option>{"< 6 tháng"}</option>
                  <option>6–24 tháng</option>
                  <option>{"> 2 năm"}</option>
                </select>
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="recent_freq">
                  4 tuần gần đây, bạn tập bao nhiêu buổi/tuần?
                </label>
                <select
                  id="recent_freq"
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 focus:bg-white focus:ring"
                >
                  <option>{"0–1 buổi"}</option>
                  <option>{"2–3 buổi"}</option>
                  <option>{"4–5 buổi"}</option>
                  <option>{"> 5 buổi"}</option>
                </select>
              </div>
            </form>
          )}

          {step === 2 && (
            <form className="space-y-4">
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="main_goal">
                  Mục tiêu chính khi tập yoga
                </label>
                <textarea
                  id="main_goal"
                  rows={3}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="Ví dụ: giảm đau lưng, ngủ sâu hơn, bớt lo âu..."
                />
              </div>
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="secondary_goal">
                  Mục tiêu phụ (nếu có)
                </label>
                <textarea
                  id="secondary_goal"
                  rows={2}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="Ví dụ: tăng sức bền, cải thiện tư thế, bớt đau vai gáy..."
                />
              </div>
            </form>
          )}

          {step === 3 && (
            <form className="space-y-4">
              <div className="space-y-1.5 text-sm">
                <p className="text-slate-700">
                  Thời điểm trong ngày bạn thấy hợp lý để tập?
                </p>
                <div className="space-y-1 text-xs text-slate-700">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-3.5 w-3.5" /> Sáng sớm
                    (trước 8h)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-3.5 w-3.5" /> Tối (sau
                    18h)
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="h-3.5 w-3.5" /> Cuối tuần
                  </label>
                </div>
              </div>
            </form>
          )}

          {step === 4 && (
            <form className="space-y-4">
              <div className="space-y-1.5 text-sm">
                <label className="block text-slate-700" htmlFor="style_pref">
                  Phong cách & vibe buổi tập bạn thích
                </label>
                <textarea
                  id="style_pref"
                  rows={3}
                  className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
                  placeholder="Ví dụ: nhịp độ chậm, giọng nói nhẹ nhàng, nhiều thời gian thả lỏng cuối buổi..."
                />
              </div>
            </form>
          )}

          <div className="flex items-center justify-between border-t border-sky-100 pt-4 text-xs text-slate-600">
            <button
              type="button"
              onClick={prev}
              disabled={step === 0}
              className={`rounded-full px-3 py-1.5 text-xs ${
                step === 0
                  ? "cursor-not-allowed bg-sky-50 text-slate-400"
                  : "bg-sky-50 text-slate-600 ring-1 ring-sky-100 hover:bg-sky-100"
              }`}
            >
              ← Quay lại
            </button>

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400"
              >
                Tiếp tục →
              </button>
            ) : (
              <Link
                href="/dashboard/student"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400"
              >
                Lưu và vào bảng điều khiển →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


