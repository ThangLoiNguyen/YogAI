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
          Bản demo cho trình xây giáo án: chia rõ block khởi động, phần chính và
          thả lỏng cuối buổi.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Khởi động
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 5 phút hít thở sâu và cảm nhận cơ thể.</li>
            <li>• 5 phút làm mềm, xoay chuyển cổ, vai, cột sống.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Phần chính
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 25–30 phút yin tập trung vào hông & lưng dưới.</li>
            <li>• Thời lượng giữ đủ lâu để các mô cân cơ kịp “thả lỏng”.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
            Thả lỏng cuối
          </p>
          <ul className="mt-2 space-y-1.5">
            <li>• 10–15 phút phục hồi và kết nối lại toàn bộ cơ thể.</li>
            <li>• Kết hợp quét cơ thể và hít thở để làm dịu hệ thần kinh.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

