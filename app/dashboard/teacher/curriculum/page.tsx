const CURRICULA = [
  {
    id: "C001",
    title: "Yin cho người ngồi bàn giấy · Cấp 1",
    duration: 60,
    type: "Mẫu",
  },
  {
    id: "C002",
    title: "Dòng chảy nhẹ cho lưng",
    duration: 45,
    type: "Tự tạo",
  },
  {
    id: "C003",
    title: "Restorative cho kiệt sức",
    duration: 75,
    type: "Bản nháp AI",
  },
];

export default function TeacherCurriculumPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">Thư viện giáo án</h1>
          <p className="text-sm text-slate-600">
            Quản lý giáo án cá nhân, template và các bản draft sinh bởi AI.
          </p>
        </div>
        <button className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400">
          Tạo giáo án mới
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm shadow-sky-50">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-sky-50 text-xs text-slate-600">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Mã</th>
              <th className="px-4 py-2 text-left font-medium">Tiêu đề</th>
              <th className="px-4 py-2 text-left font-medium">Thời lượng</th>
              <th className="px-4 py-2 text-left font-medium">Loại</th>
            </tr>
          </thead>
          <tbody>
            {CURRICULA.map((c, idx) => (
              <tr
                key={c.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-sky-50/40"}
              >
                <td className="px-4 py-2 text-xs text-slate-700">{c.id}</td>
                <td className="px-4 py-2 text-xs font-medium text-slate-900">
                  {c.title}
                </td>
                <td className="px-4 py-2 text-xs text-slate-700">
                  {c.duration} phút
                </td>
                <td className="px-4 py-2 text-xs text-slate-700">{c.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


