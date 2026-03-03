"use client";

import { Input } from "../../../../components/ui/Input";

export default function StudentProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">Hồ sơ học viên</h1>
        <p className="text-sm text-slate-600">
          Thông tin cơ bản, thành phố và vài sở thích giúp hệ thống đề xuất
          giáo viên/phong cách phù hợp.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[2fr,1.4fr]">
        <form className="space-y-4 rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="name">
                Họ tên
              </label>
              <Input id="name" placeholder="Tên hiển thị với giáo viên" />
            </div>
            <div className="space-y-1.5 text-sm">
              <label className="block text-slate-700" htmlFor="city">
                Thành phố
              </label>
              <Input id="city" placeholder="TP. HCM, Hà Nội..." />
            </div>
          </div>
          <div className="space-y-1.5 text-sm">
            <label className="block text-slate-700" htmlFor="styles">
              Phong cách yoga bạn thích
            </label>
            <Input
              id="styles"
              placeholder="Ví dụ: Yin buổi tối, Vinyasa nhẹ buổi sáng..."
            />
          </div>
          <div className="space-y-1.5 text-sm">
            <label className="block text-slate-700" htmlFor="goals">
              Mục tiêu chính khi tập
            </label>
            <textarea
              id="goals"
              rows={3}
              className="w-full rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-slate-900 outline-none ring-sky-200 placeholder:text-slate-400 focus:bg-white focus:ring"
              placeholder="Ví dụ: giảm đau lưng, ngủ sâu hơn, bớt căng thẳng..."
            />
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400 sm:w-auto"
          >
            Lưu thay đổi
          </button>
        </form>

        <aside className="space-y-3 rounded-2xl border border-sky-100 bg-sky-50 p-4 text-xs text-slate-700 shadow-sm shadow-sky-50">
          <p className="font-semibold text-sky-800">Gợi ý điền dữ liệu:</p>
          <ul className="space-y-1.5">
            <li>• Càng cụ thể về nhịp sống & công việc, đề xuất càng chính xác.</li>
            <li>• Bạn có thể thay đổi mục tiêu mỗi vài tháng để cập nhật lộ trình.</li>
            <li>• Thành phố giúp ưu tiên giáo viên/lớp gần bạn (nếu muốn học offline).</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}


