type CurriculumDetailPageProps = {
  params: { id: string };
};

export default function CurriculumDetailPage({
  params,
}: CurriculumDetailPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Giáo án #{params.id}
        </h1>
        <p className="text-sm text-slate-600">
          Bản demo cho Curriculum Builder: chia rõ block warm-up, main và
          cool-down.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Warm-up
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 5 phút breathing & grounding.</li>
            <li>• 5 phút mobilize cổ, vai, cột sống.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Main
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 25–30 phút yin tập trung vào hông & lưng dưới.</li>
            <li>• Thời lượng giữ đủ lâu để fascia kịp “thả lỏng”.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Cool-down
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 10–15 phút restorative & closing integration.</li>
            <li>• Kết hợp body scan & breath để reset nervous system.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

