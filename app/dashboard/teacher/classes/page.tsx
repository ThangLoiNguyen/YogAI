const CLASSES = [
  {
    title: "Yin cho người ngồi bàn giấy",
    schedule: "T2 & T4 · 19:00–20:15",
    enrolled: 8,
  },
  {
    title: "Dòng chảy buổi sáng nhẹ nhàng",
    schedule: "T3 & T5 · 06:30–07:15",
    enrolled: 6,
  },
  {
    title: "Restorative hỗ trợ giấc ngủ",
    schedule: "T7 · 21:00–22:00",
    enrolled: 10,
  },
];

export default function TeacherClassesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Quản lý lớp học</h1>
        <p className="text-sm text-slate-600">
          Danh sách các lớp bạn đang dạy, gồm lịch, số học viên và trạng thái
          để dễ quản lý.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {CLASSES.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50"
          >
            <p className="text-sm font-semibold text-slate-900">{c.title}</p>
            <p className="mt-1 text-slate-600">{c.schedule}</p>
            <p className="mt-2 text-sky-700">{c.enrolled} học viên</p>
          </div>
        ))}
      </div>
    </div>
  );
}


