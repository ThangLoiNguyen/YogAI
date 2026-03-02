import Link from "next/link";
import { PublicShell } from "../../../components/layout/PublicShell";

export default function BlogPage() {
  return (
    <PublicShell>
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Blog
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Kiến thức về yoga, sức khỏe tinh thần & hệ thần kinh
          </h1>
          <p className="max-w-2xl text-sm text-slate-600">
            Nội dung viết cho người bận rộn: ngắn gọn, thực tế, dễ áp dụng vào
            đời sống hàng ngày.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link
              key={index}
              href={`/blog/slug-${index + 1}`}
              className="group rounded-2xl border border-sky-100 bg-white p-4 transition hover:border-sky-300 hover:bg-sky-50"
            >
              <p className="text-xs text-sky-700">
                Hệ thần kinh · 8 phút đọc
              </p>
              <h2 className="mt-2 text-sm font-semibold">
                3 dấu hiệu cơ thể đang quá tải mà dân văn phòng hay bỏ qua
              </h2>
              <p className="mt-2 text-xs text-slate-600">
                Một số pattern mệt mỏi, mất tập trung và đau mỏi mãn tính thực
                ra là tín hiệu của hệ thần kinh đang gồng mình...
              </p>
              <p className="mt-3 text-xs text-sky-600">Đọc tiếp →</p>
            </Link>
          ))}
        </section>
      </div>
    </PublicShell>
  );
}
