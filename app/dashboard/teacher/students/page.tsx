const STUDENTS = [
  { id: "S001", name: "Hà", status: "Active", focus: "Đau lưng dưới" },
  { id: "S002", name: "Minh", status: "Active", focus: "Stress & mất ngủ" },
  { id: "S003", name: "Trang", status: "Tạm nghỉ", focus: "Hồi phục chấn thương gối" },
];

export default function TeacherStudentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Danh sách học viên</h1>
        <p className="text-sm text-slate-600">
          StudentCRM đơn giản: xem nhanh trạng thái, focus chính của từng học viên
          để chuẩn bị giáo án phù hợp.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm shadow-sky-50">
        <table className="min-w-full border-collapse text-sm">
          <thead className="bg-sky-50 text-xs text-slate-600">
            <tr>
              <th className="px-4 py-2 text-left font-medium">Mã</th>
              <th className="px-4 py-2 text-left font-medium">Tên</th>
              <th className="px-4 py-2 text-left font-medium">Trạng thái</th>
              <th className="px-4 py-2 text-left font-medium">Focus hiện tại</th>
            </tr>
          </thead>
          <tbody>
            {STUDENTS.map((s, idx) => (
              <tr
                key={s.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-sky-50/40"}
              >
                <td className="px-4 py-2 text-xs text-slate-700">{s.id}</td>
                <td className="px-4 py-2 text-xs font-medium text-slate-900">
                  {s.name}
                </td>
                <td className="px-4 py-2 text-xs text-slate-700">{s.status}</td>
                <td className="px-4 py-2 text-xs text-slate-700">{s.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


