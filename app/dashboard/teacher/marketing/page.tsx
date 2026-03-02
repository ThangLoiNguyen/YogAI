export default function TeacherMarketingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Marketing & tìm học viên
        </h1>
        <p className="text-sm text-slate-600">
          Checklist đơn giản để bạn tối ưu profile, nội dung và kênh tiếp cận
          học viên.
        </p>
      </div>

      <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
        <h2 className="text-sm font-semibold text-slate-900">Profile public</h2>
        <ul className="list-disc space-y-1.5 pl-4">
          <li>Ảnh profile rõ, thân thiện, ánh sáng tốt.</li>
          <li>Bio ngắn gọn, tập trung vào nhóm học viên bạn hiểu rõ nhất.</li>
          <li>Highlight 2–3 kết quả cụ thể học viên đã đạt được.</li>
        </ul>
      </section>

      <section className="space-y-3 rounded-2xl border border-sky-100 bg-white p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
        <h2 className="text-sm font-semibold text-slate-900">Ý tưởng nội dung</h2>
        <ul className="list-disc space-y-1.5 pl-4">
          <li>Mini-series 3 bài về “lưng dễ chịu hơn sau 8h ngồi làm việc”.</li>
          <li>Story/short clip 30s hướng dẫn 1 tư thế/y mẹo dễ áp dụng.</li>
          <li>Q&A hàng tuần về câu hỏi thường gặp của học viên mới.</li>
        </ul>
      </section>
    </div>
  );
}


