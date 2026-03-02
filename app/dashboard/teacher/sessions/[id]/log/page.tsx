type SessionLogPageProps = {
  params: { id: string };
};

export default function SessionLogPage({ params }: SessionLogPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Ghi chép buổi tập #{params.id}
        </h1>
        <p className="text-sm text-slate-600">
          Phiên bản đơn giản của SessionLogger: bạn có thể note lại vài tư thế
          và cảm nhận chính.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[2fr,1.4fr]">
        <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <h2 className="text-sm font-semibold text-slate-900">
            Poses & cấu trúc buổi tập
          </h2>
          <ul className="list-disc space-y-1.5 pl-4">
            <li>Cat-cow · mobilize cột sống · 2 phút.</li>
            <li>Sphinx pose · mild backbend · 3–5 phút.</li>
            <li>Supported child&apos;s pose · restorative · 5–7 phút.</li>
          </ul>
        </section>

        <aside className="space-y-3 rounded-2xl border border-sky-100 bg-sky-50 p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <h3 className="text-sm font-semibold text-slate-900">
            Cảm nhận học viên (demo)
          </h3>
          <p>
            “Lưng dưới cảm giác nhẹ hơn, nhưng vai vẫn hơi căng. Phần cuối buổi
            rất dễ chịu, giúp mình bớt suy nghĩ trước khi ngủ.”
          </p>
        </aside>
      </div>
    </div>
  );
}

