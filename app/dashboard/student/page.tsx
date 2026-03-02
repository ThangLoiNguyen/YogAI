export default function StudentDashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          Chào mừng bạn quay lại
        </h1>
        <p className="text-sm text-slate-600">
          Đây là overview nơi bạn thấy lộ trình, buổi tập gần đây và đề xuất từ
          Matching Engine.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Buổi tập gần nhất</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            Yin for Desk Workers
          </p>
          <p className="mt-1 text-xs text-slate-600">2 ngày trước · 60 phút</p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Tần suất 4 tuần gần đây</p>
          <p className="mt-1 text-2xl font-semibold text-sky-600">3x/tuần</p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Trạng thái năng lượng</p>
          <p className="mt-1 text-sm text-slate-700">
            Ổn định, nên thêm 1 buổi restorative/tuần.
          </p>
        </div>
      </div>
    </div>
  );
}

