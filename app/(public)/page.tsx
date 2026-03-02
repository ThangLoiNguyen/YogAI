import Link from "next/link";
import { PublicShell } from "../../components/layout/PublicShell";

export default function PublicLandingPage() {
  return (
    <PublicShell>
      <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12">
        <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-200">
              Portfolio cá nhân + SaaS quản lý yoga
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Xây hệ sinh thái yoga thông minh cho{" "}
              <span className="text-sky-600">giáo viên</span> &{" "}
              <span className="text-sky-600">học viên</span>.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Nền tảng kết hợp portfolio công khai, dashboard SaaS, và AI engine
              để gợi ý giáo viên, thiết kế giáo án, và phân tích lộ trình tập
              luyện – tất cả trong một.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/register/teacher"
                className="rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-sky-200 hover:bg-sky-400"
              >
                Tôi là giáo viên
              </Link>
              <Link
                href="/register/student"
                className="rounded-full border border-sky-200 px-5 py-2 text-sm font-semibold text-sky-700 hover:bg-sky-50"
              >
                Tôi là học viên
              </Link>
            </div>
            <div className="grid gap-4 text-xs text-slate-600 sm:grid-cols-3 sm:text-sm">
              <div>
                <p className="font-semibold text-sky-700">
                  AI Matching Engine
                </p>
                <p>Tự động gợi ý giáo viên & lớp phù hợp từng học viên.</p>
              </div>
              <div>
                <p className="font-semibold text-sky-700">
                  Curriculum Builder
                </p>
                <p>Thiết kế giáo án dựa trên mục tiêu & health profile.</p>
              </div>
              <div>
                <p className="font-semibold text-sky-700">
                  Student Journey
                </p>
                <p>Theo dõi tiến trình, health history và feedback.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-sky-100 bg-white p-5 shadow-xl shadow-sky-100">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
              Live preview dashboard
            </p>
            <div className="space-y-4 rounded-2xl bg-sky-50 p-4">
              <div className="flex justify-between text-xs text-slate-600">
                <span>Student Journey</span>
                <span className="text-sky-600">+18% tuần này</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-white p-3 ring-1 ring-sky-100">
                  <p className="text-slate-500">Sessions</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-600">
                    32
                  </p>
                  <p className="mt-1 text-sky-600">+8 tuần trước</p>
                </div>
                <div className="rounded-xl bg-white p-3 ring-1 ring-sky-100">
                  <p className="text-slate-500">Avg. energy</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-600">
                    7.9
                  </p>
                  <p className="mt-1 text-sky-600">on 10</p>
                </div>
                <div className="rounded-xl bg-white p-3 ring-1 ring-sky-100">
                  <p className="text-slate-500">Retention</p>
                  <p className="mt-1 text-2xl font-semibold text-sky-600">
                    92%
                  </p>
                  <p className="mt-1 text-sky-600">AI-assisted</p>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-sky-300 bg-sky-50 p-3 text-xs text-slate-700">
                AIAssistant: “Dựa trên 6 buổi gần nhất, nên thêm block restorative
                10 phút cuối buổi cho nhóm năng lượng thấp & stress cao.”
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-2xl">
              Một nền tảng, hai dashboard chuyên sâu
            </h2>
            <p className="max-w-xl text-xs text-slate-600 sm:text-sm">
              Tách biệt rõ experience của học viên và giáo viên, nhưng cùng
              chia sẻ chung một AI engine và data platform.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
              <p className="mb-2 text-xs font-semibold text-sky-700">
                Student Dashboard
              </p>
              <p className="mb-4 text-sm text-slate-700">
                Lộ trình cá nhân hoá, health history, recommendation class & GV
                theo thời gian thực.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• JourneyTimeline & ProgressDashboard</li>
                <li>• HealthHistory & session feedback</li>
                <li>• AI RecommendationEngine cho GV & lớp</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
              <p className="mb-2 text-xs font-semibold text-sky-700">
                Teacher Dashboard
              </p>
              <p className="mb-4 text-sm text-slate-700">
                CRM học viên, SessionLogger, CurriculumBuilder và Marketing
                Assistant cho GV mới.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• StudentCRM với filter và ghi chú</li>
                <li>• AI CurriculumBuilder kéo thả block giáo án</li>
                <li>• MarketingHub & AIAssistant tối ưu profile</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </PublicShell>
  );
}
