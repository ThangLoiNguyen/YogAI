const UPCOMING = [
  { day: "Thứ 2", date: "06/04", title: "Yin for Desk Workers", time: "19:00–20:15" },
  { day: "Thứ 4", date: "08/04", title: "Gentle Vinyasa", time: "06:30–07:15" },
  { day: "Thứ 6", date: "10/04", title: "Restorative for Sleep", time: "21:00–21:45" },
];

export default function StudentSchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Lịch học</h1>
        <p className="text-sm text-slate-600">
          Các buổi tập sắp tới theo giờ Việt Nam. Sau này có thể chuyển sang dạng
          calendar đầy đủ.
        </p>
      </div>

      <div className="space-y-2 rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
        {UPCOMING.map((item) => (
          <div
            key={item.date + item.time}
            className="flex items-center justify-between rounded-xl bg-sky-50 px-3 py-2 text-xs ring-1 ring-sky-100"
          >
            <div>
              <p className="font-semibold text-slate-900">
                {item.day} · {item.date}
              </p>
              <p className="text-slate-700">{item.title}</p>
            </div>
            <p className="text-sky-700">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


