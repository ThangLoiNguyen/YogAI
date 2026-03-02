import Link from "next/link";

type ClassDetailPageProps = {
  params: { id: string };
};

export default function ClassDetailPage({ params }: ClassDetailPageProps) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-sky-50 text-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <Link
          href="/classes"
          className="text-xs text-slate-600 underline-offset-4 hover:text-sky-700 hover:underline"
        >
          ← Quay lại danh sách lớp
        </Link>

        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Class detail
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Yin for Desk Workers · Level 1 (#{id})
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Lớp yin nhẹ nhàng tập trung vào lưng, vai và hông – lý tưởng cho
            người mới bắt đầu hoặc người ngồi nhiều trong văn phòng.
          </p>
        </header>

        <main className="grid gap-6 md:grid-cols-[2fr,1.4fr]">
          <section className="space-y-4 rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
            <h2 className="text-sm font-semibold text-slate-900">
              Nội dung buổi học
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• 10 phút breathing & grounding.</li>
              <li>• 35 phút yin focusing on hips & lower back.</li>
              <li>• 15 phút restorative & closing integration.</li>
            </ul>
            <h3 className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Ai nên tham gia
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Người mới, người đau lưng nhẹ, stress cao, ngủ không sâu giấc, cần
              một không gian an toàn để reset cơ thể và hệ thần kinh.
            </p>
          </section>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
              <h2 className="text-sm font-semibold text-slate-900">
                Thông tin đặt chỗ
              </h2>
              <p className="mt-3">
                Thứ 2 & 4 · 19:00–20:15 · Quận 1 · Studio nhỏ ấm cúng · Max 10
                người.
              </p>
              <p className="mt-2 text-slate-700">
                Giá:{" "}
                <span className="font-semibold text-sky-700">
                  280.000đ/buổi
                </span>{" "}
                hoặc{" "}
                <span className="font-semibold text-sky-700">
                  2.400.000đ/10 buổi
                </span>
                .
              </p>
              <button className="mt-3 w-full rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-400">
                Đặt chỗ ngay
              </button>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
              <h2 className="text-sm font-semibold text-slate-900">
                Giáo viên phụ trách
              </h2>
              <p className="mt-2 text-slate-700">
                Teacher A · 500h RYT · Chuyên về mobility và nervous system
                regulation.
              </p>
              <Link
                href="/teachers/1"
                className="mt-3 inline-flex text-xs text-sky-700 underline-offset-4 hover:underline"
              >
                Xem profile giáo viên →
              </Link>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

