export default function StudentHealthPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Lịch sử sức khoẻ</h1>
        <p className="text-sm text-slate-600">
          Tổng quan bệnh lý, chấn thương và các lưu ý để giáo viên và AI tôn trọng
          giới hạn cơ thể của bạn.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Trạng thái lưng dưới</p>
          <p className="mt-1 font-semibold text-slate-900">Ổn định</p>
          <p className="mt-1 text-xs">
            Đau nhẹ sau ngày ngồi lâu, cải thiện rõ sau 4 tuần tập đều.
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Mức stress</p>
          <p className="mt-1 font-semibold text-slate-900">Giảm dần</p>
          <p className="mt-1 text-xs">
            Ghi nhận tự đánh giá giảm ~30% sau khi thêm 2 buổi yin/tuần.
          </p>
        </div>
        <div className="rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
          <p className="text-xs text-slate-500">Ngủ & hồi phục</p>
          <p className="mt-1 font-semibold text-slate-900">Đang cải thiện</p>
          <p className="mt-1 text-xs">
            Thời gian ngủ sâu tăng ~25 phút, vẫn cần theo dõi thêm.
          </p>
        </div>
      </div>

      <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-sm text-slate-700 shadow-sm shadow-sky-50">
        <h2 className="font-semibold text-slate-900">Lưu ý y tế hiện tại</h2>
        <ul className="list-disc space-y-1.5 pl-4 text-xs">
          <li>Tránh các tư thế backbend cực sâu trong những ngày lưng mỏi.</li>
          <li>
            Hạn chế đứng quá lâu ở các tư thế chịu lực mạnh lên khớp gối bên trái.
          </li>
          <li>
            Tập trung vào hơi thở nhẹ nhàng và các tư thế phục hồi vào cuối ngày
            nhiều stress.
          </li>
        </ul>
      </section>
    </div>
  );
}


