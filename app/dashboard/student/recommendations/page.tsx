"use client";

import { useEffect, useState } from "react";

type MatchItem = {
  teacher: {
    id: string;
    name: string;
    city?: string | null;
    specialties?: string[] | null;
  };
  score: number;
  reasons: string[];
};

export default function StudentRecommendationsPage() {
  const [data, setData] = useState<MatchItem[]>([]);
  const [loading, setLoading] = useState(true);
  const backend = process.env.NEXT_PUBLIC_FIREBASE_BACKEND_URL;

  useEffect(() => {
    async function load() {
      try {
        if (!backend) {
          setData([]);
          return;
        }

        const res = await fetch(`${backend}/ai/recommend`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });
        const json = await res.json();
        setData(json.results ?? []);
      } catch {
        setData([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Đề xuất giáo viên & lớp học
        </h1>
        <p className="text-sm text-slate-600">
          Bộ máy ghép đôi AI phân tích hồ sơ sức khoẻ, mục tiêu và lịch rảnh để
          gợi ý giáo viên/lớp phù hợp nhất cho bạn.
        </p>
      </div>

      {loading ? (
        <p className="text-sm text-slate-500">Đang tính toán đề xuất...</p>
      ) : data.length === 0 ? (
        <p className="text-sm text-slate-500">
          Chưa có dữ liệu đề xuất. Bạn có thể hoàn thành phiếu thông tin trước.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.teacher.id}
              className="rounded-2xl border border-sky-100 bg-white p-4 shadow-sm shadow-sky-50"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.teacher.name}
                  </p>
                  <p className="text-xs text-slate-600">
                    {item.teacher.city ?? "Khu vực linh hoạt"}
                  </p>
                </div>
                <div className="text-right text-xs">
                  <p className="font-semibold text-sky-700">
                    {(item.score * 100).toFixed(0)}% phù hợp
                  </p>
                  <p className="text-[11px] text-slate-500">ước tính</p>
                </div>
              </div>
              {item.teacher.specialties && item.teacher.specialties.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-700">
                  {item.teacher.specialties.map((sp) => (
                    <span
                      key={sp}
                      className="rounded-full bg-sky-50 px-2 py-1 ring-1 ring-sky-100"
                    >
                      {sp}
                    </span>
                  ))}
                </div>
              )}
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {item.reasons.map((reason, idx) => (
                  <li key={idx}>• {reason}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


