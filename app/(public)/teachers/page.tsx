import Link from "next/link";
import { PublicShell } from "../../../components/layout/PublicShell";

const TEACHER_FILTERS = [
  { label: "All", value: "all" },
  { label: "Hatha", value: "hatha" },
  { label: "Vinyasa", value: "vinyasa" },
  { label: "Yin", value: "yin" },
  { label: "Restorative", value: "restorative" },
];

export default function TeachersPage() {
  return (
    <PublicShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Teachers
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Khám phá giáo viên yoga phù hợp với bạn
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Lọc theo phong cách, level và lịch rảnh. Matching engine sẽ giúp đề
            xuất top giáo viên tương thích nhất dựa trên health profile và mục
            tiêu của bạn.
          </p>
        </header>

        <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {TEACHER_FILTERS.map((filter) => (
              <button
                key={filter.value}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700 hover:bg-sky-100"
              >
                {filter.label}
              </button>
            ))}
          </div>
          <Link
            href="/login"
            className="text-xs text-sky-700 underline-offset-4 hover:underline"
          >
            Đăng nhập để nhận đề xuất cá nhân hoá
          </Link>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href={`/teachers/${index + 1}`}
              className="group rounded-2xl border border-sky-100 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    Teacher {index + 1} · Vinyasa & Yin
                  </p>
                  <p className="text-xs text-slate-600">
                    5+ năm kinh nghiệm · TP. HCM
                  </p>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
                  92% match
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                “Tập trung vào việc build lại mobility và nervous system
                regulation cho học viên văn phòng, stress cao.”
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
                <span className="rounded-full bg-sky-50 px-2 py-1 ring-1 ring-sky-100">
                  Yin for beginners
                </span>
                <span className="rounded-full bg-sky-50 px-2 py-1 ring-1 ring-sky-100">
                  Stress & anxiety
                </span>
                <span className="rounded-full bg-sky-50 px-2 py-1 ring-1 ring-sky-100">
                  Evening classes
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </PublicShell>
  );
}
