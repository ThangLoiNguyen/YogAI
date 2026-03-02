const STATS = [
  { label: "Buổi tập 30 ngày qua", value: "14", hint: "+4 so với trước" },
  { label: "Năng lượng trung bình sau buổi tập", value: "7.8/10", hint: "ổn định" },
  { label: "Cảm nhận về giấc ngủ", value: "tốt hơn", hint: "theo self-report" },
];

export default function StudentProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Tiến trình</h1>
        <p className="text-sm text-slate-600">
          Ảnh hưởng của việc tập đều đặn lên cơ thể, năng lượng và giấc ngủ của bạn.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50"
          >
            <p className="text-xs text-slate-500">{s.label}</p>
            <p className="mt-1 text-lg font-semibold text-sky-600">{s.value}</p>
            <p className="mt-1 text-xs text-slate-500">{s.hint}</p>
          </div>
        ))}
      </div>

      <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
        <h2 className="text-sm font-semibold text-slate-900">Xu hướng gần đây</h2>
        <p className="text-xs">
          Tần suất tập luyện đang tăng dần nhưng vẫn nằm trong vùng an toàn. Nên
          giữ ít nhất 1 buổi restorative/tuần để cơ thể có thời gian hồi phục.
        </p>
      </section>
    </div>
  );
}


