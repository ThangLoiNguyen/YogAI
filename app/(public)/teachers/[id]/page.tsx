import Link from "next/link";

type TeacherProfilePageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return Array.from({ length: 6 }, (_, index) => ({
    id: String(index + 1),
  }));
}

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
              Hồ sơ giáo viên
            </p>
            <h1 className="text-2xl font-semibold sm:text-3xl">
              Giáo viên {id} · Vinyasa & Yin
            </h1>
            <p className="max-w-xl text-sm text-slate-600">
              Chuyên về tăng độ linh hoạt, phục hồi sau stress và điều hoà hệ
              thần kinh cho người làm việc văn phòng.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-700">
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                500h RYT chứng nhận
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                Hiểu biết về sang chấn
              </span>
              <span className="rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-100">
                Breathwork
              </span>
            </div>
          </div>
          <div className="space-y-2 rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
            <p>
              Mức độ phù hợp với bạn:{" "}
              <span className="font-semibold text-sky-700">92%</span>
            </p>
            <p>
              Lịch lớp: Tối thứ 2,4,6 ·{" "}
              <span className="text-sky-700">19:00–20:15</span>
            </p>
            <p>Khu vực: Quận 1, TP. HCM · Trực tuyến qua Zoom</p>
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
              Tập trung vào việc nuôi dưỡng nhận biết cơ thể, kết hợp giữa
              Vinyasa dẫn bằng hơi thở và các tư thế Yin giữ lâu để làm mềm mô
              cân cơ. Mỗi buổi đều có 5–10 phút kết thúc dành riêng cho việc
              điều hoà hệ thần kinh.
            </p>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Chuyên môn chính
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-700">
              <li>Giảm đau lưng, vai gáy cho dân văn phòng.</li>
              <li>Quản lý căng thẳng và lo âu qua các bài thở nhẹ nhàng.</li>
              <li>Tăng độ linh hoạt và biên độ vận động một cách an toàn.</li>
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

