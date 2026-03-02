export default function TeacherDashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          Tổng quan studio của bạn
        </h1>
        <p className="text-sm text-slate-600">
          Snapshot nhanh về học viên đang active, doanh thu gần đây và gợi ý từ
          AI về giáo án / marketing.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Học viên active</p>
          <p className="mt-1 text-2xl font-semibold text-sky-600">18</p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Doanh thu 30 ngày gần nhất</p>
          <p className="mt-1 text-lg font-semibold text-slate-900">42.000.000₫</p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Gợi ý từ AI</p>
          <p className="mt-1 text-xs text-slate-700">
            Nên tạo gói “Restorative for Burnout” 6 buổi cho nhóm học viên văn
            phòng high-stress.
          </p>
        </div>
      </div>
    </div>
  );
}

