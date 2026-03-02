import Link from "next/link";

type TeacherProfilePageProps = {
  params: { id: string };
};

export default function TeacherProfilePage({ params }: TeacherProfilePageProps) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <Link
          href="/teachers"
          className="text-xs text-slate-600 underline-offset-4 hover:text-sky-700 hover:underline"
        >
          ← Quay lại danh sách giáo viên
        </Link>

        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Teacher profile
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Teacher {id} · Vinyasa & Yin
            </h1>
            <p className="max-w-xl text-sm text-slate-600">
              Chuyên về mobility, stress recovery và nervous system regulation
              cho người làm việc văn phòng.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                500h RYT Certified
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                Trauma-informed
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                Breathwork
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
            <p>
              Matching score cho bạn:{" "}
              <span className="font-semibold text-sky-700">92%</span>
            </p>
            <p>
              Lịch lớp: Tối thứ 2,4,6 ·{" "}
              <span className="text-sky-700">19:00–20:15</span>
            </p>
            <p>Khu vực: Quận 1, TP. HCM · Online via Zoom</p>
            <button className="mt-2 w-full rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400">
              Đặt lớp thử (trial)
            </button>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-[2fr,1.4fr]">
          <section className="space-y-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
            <h2 className="text-sm font-semibold text-slate-900">
              Về phong cách dạy
            </h2>
            <p className="text-sm text-slate-700">
              Tập trung vào việc build awareness về cơ thể, kết hợp giữa
              breath-led Vinyasa và Yin giữ lâu để giải phóng fascia. Mỗi buổi
              đều có 5–10 phút closing cho nervous system regulation.
            </p>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Chuyên môn chính
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
              <li>Giảm đau lưng, vai gáy cho dân văn phòng.</li>
              <li>Quản lý stress & anxiety qua breathwork nhẹ nhàng.</li>
              <li>Tăng mobility và range of motion an toàn.</li>
            </ul>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
              <h2 className="text-sm font-semibold text-slate-900">
                Lịch lớp sắp tới
              </h2>
              <ul className="mt-3 space-y-2 text-xs text-slate-700">
                <li className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 ring-1 ring-sky-100">
                  <span>Thứ 2 · 19:00</span>
                  <span className="text-sky-700">4 chỗ trống</span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 ring-1 ring-sky-100">
                  <span>Thứ 4 · 19:00</span>
                  <span className="text-sky-700">3 chỗ trống</span>
                </li>
                <li className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 ring-1 ring-sky-100">
                  <span>Thứ 6 · 19:00</span>
                  <span className="text-sky-700">Online</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
              <h2 className="text-sm font-semibold text-slate-900">
                Đánh giá gần đây
              </h2>
              <div className="mt-3 space-y-3 text-xs text-slate-700">
                <p className="rounded-xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  “Sau 6 buổi lưng mình đỡ đau hẳn, bài mở hông rất dễ chịu dù
                  mình còn khá cứng.”
                </p>
                <p className="rounded-xl bg-sky-50 p-3 ring-1 ring-sky-100">
                  “Giọng nói rất calming, giải thích kỹ nên mình luôn cảm thấy
                  an toàn khi thử tư thế mới.”
                </p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

