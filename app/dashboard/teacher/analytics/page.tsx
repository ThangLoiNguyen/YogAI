const METRICS = [
  { label: "Retention 3 tháng", value: "88%", hint: "+5% so với trước" },
  { label: "Số buổi trung bình / HV / tháng", value: "6.2", hint: "ổn định" },
  { label: "Tỉ lệ slot lấp đầy", value: "78%", hint: "còn room tăng nhẹ" },
];

export default function TeacherAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Thống kê</h1>
        <p className="text-sm text-slate-600">
          Nhìn nhanh vào mức độ gắn bó của học viên, tần suất đến lớp và hiệu quả
          sử dụng thời gian/lịch dạy.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50"
          >
            <p className="text-xs text-slate-500">{m.label}</p>
            <p className="mt-1 text-lg font-semibold text-sky-600">{m.value}</p>
            <p className="mt-1 text-xs text-slate-500">{m.hint}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


