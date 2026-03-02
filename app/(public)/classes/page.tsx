import Link from "next/link";
import { PublicShell } from "../../../components/layout/PublicShell";

export default function ClassesPage() {
  return (
    <PublicShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Classes
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Tìm lớp yoga theo lịch và mục tiêu
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Kết hợp filter truyền thống và AI suggestion để tìm lớp phù hợp với
            level, sức khoẻ và thời gian biểu của bạn.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href={`/classes/${index + 1}`}
              className="group rounded-2xl border border-sky-100 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">
                    Yin for Desk Workers · Level 1
                  </p>
                  <p className="text-xs text-slate-600">
                    Thứ 2 & 4 · 19:00–20:15 · Quận 1
                  </p>
                </div>
                <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] text-sky-700 ring-1 ring-sky-200">
                  Max 10 người
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-600">
                Tập trung vào việc giải phóng căng thẳng ở lưng, hông và vai,
                phù hợp cho người mới bắt đầu.
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-700">
                <span>Teacher A · 500h RYT</span>
                <span className="text-sky-700">Còn 3 chỗ</span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </PublicShell>
  );
}
