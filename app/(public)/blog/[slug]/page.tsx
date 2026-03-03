import { PublicShell } from "../../../../components/layout/PublicShell";

type BlogPostPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return ["slug-1", "slug-2", "slug-3", "slug-4", "slug-5", "slug-6"].map(
    (slug) => ({ slug }),
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  return (
    <PublicShell>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            Blog · Hệ thần kinh
          </p>
          <h1 className="text-2xl font-semibold sm:text-3xl">
            Bài viết demo cho slug: <span className="text-sky-700">{slug}</span>
          </h1>
          <p className="text-xs text-slate-600">
            8 phút đọc · Viết cho người bận rộn.
          </p>
        </header>

        <div className="prose mt-6 max-w-none text-sm text-slate-700">
          <p>
            Đây là nội dung demo cho bài blog. Sau này bạn có thể thay thế bằng
            MDX, lấy dữ liệu từ CMS hoặc đọc từ database thông qua Prisma.
          </p>
          <p>
            Với đối tượng là dân văn phòng và người bận rộn, bài viết nên ngắn
            gọn, tập trung vào insight quan trọng và có hướng dẫn thực hành
            cụ thể, ví dụ: 5 phút hít thở “reset” trước khi ngủ, 3 tư thế yin
            nhẹ để giải phóng lưng sau khi ngồi lâu.
          </p>
        </div>
      </article>
    </PublicShell>
  );
}

