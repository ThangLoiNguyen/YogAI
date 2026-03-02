type TeacherStudentDetailPageProps = {
  params: { id: string };
};

export default function TeacherStudentDetailPage({
  params,
}: TeacherStudentDetailPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Hồ sơ học viên #{params.id}
        </h1>
        <p className="text-sm text-slate-600">
          Tổng quan lịch sử sức khỏe, thói quen tập và ghi chú riêng để bạn theo
          dõi tiến trình của học viên.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1.4fr]">
        <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
          <h2 className="font-semibold text-slate-900">Thông tin chính</h2>
          <ul className="space-y-1.5 text-xs">
            <li>• Mục tiêu: Giảm đau lưng dưới và cải thiện giấc ngủ.</li>
            <li>• Mức năng lượng: Trung bình thấp vào cuối tuần.</li>
            <li>• Thời điểm tập phù hợp: Tối thứ 2,4,6.</li>
          </ul>
        </section>

        <aside className="space-y-3 rounded-2xl border border-sky-100 bg-sky-50 p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <h3 className="font-semibold text-sky-800">Gợi ý từ góc nhìn AI</h3>
          <p>
            Nên ưu tiên các buổi yin/phục hồi xen kẽ với vinyasa nhẹ, tránh
            xếp 2 buổi nặng liên tiếp.
          </p>
        </aside>
      </div>
    </div>
  );
}

