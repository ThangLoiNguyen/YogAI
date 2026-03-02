import { PublicShell } from "../../../components/layout/PublicShell";

export default function PricingPage() {
  return (
    <PublicShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Pricing
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Gói dành cho giáo viên độc lập & studio nhỏ
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Bắt đầu miễn phí, chỉ nâng cấp khi bạn sẵn sàng dùng AI engine để
            tối ưu lộ trình học viên và marketing.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
            <p className="text-xs font-semibold text-slate-700">Starter</p>
            <p className="mt-2 text-2xl font-semibold text-sky-600">
              Miễn phí
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Portfolio cơ bản & quản lý lớp đơn giản.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl border border-sky-400 bg-white p-5 shadow-lg shadow-sky-100">
            <p className="text-xs font-semibold text-sky-700">Pro</p>
            <p className="mt-2 text-2xl font-semibold text-sky-600">
              19$/tháng
            </p>
            <p className="mt-2 text-xs text-slate-600">
              StudentCRM, SessionLogger, CurriculumBuilder cơ bản.
            </p>
          </div>

          <div className="flex flex-col rounded-2xl border border-sky-100 bg-white p-5 shadow-sm shadow-sky-50">
            <p className="text-xs font-semibold text-slate-700">AI Studio</p>
            <p className="mt-2 text-2xl font-semibold text-sky-600">
              39$/tháng
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Full AI engine: Matching, Curriculum, Student Insight, Marketing
              Assistant.
            </p>
          </div>
        </section>
      </div>
    </PublicShell>
  );
}
