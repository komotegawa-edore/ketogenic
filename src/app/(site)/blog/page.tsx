import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostList } from "@/lib/microcms";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "記事一覧",
  description:
    "ケトジェニックダイエットに関する記事一覧。基礎知識から実践的な食事例まで。",
};

export default async function BlogPage() {
  const { contents: posts, totalCount } = await getPostList();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
      <header className="mb-8 sm:mb-12">
        <h1 className="mb-3 text-2xl font-bold text-foreground sm:mb-4 sm:text-3xl md:text-4xl">
          記事一覧
        </h1>
        <p className="text-base text-muted-foreground sm:text-lg">
          ケトジェニックダイエットの基礎から実践まで（{totalCount}件）
        </p>
      </header>

      {posts.length === 0 ? (
        <div className="rounded-xl border border-border/60 bg-card p-6 text-center sm:p-8">
          <p className="text-sm text-muted-foreground sm:text-base">
            まだ記事がありません
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`}>
                {post.eyecatch ? (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.eyecatch.url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/9] items-center justify-center bg-muted">
                    <span className="text-4xl text-muted-foreground/50">K</span>
                  </div>
                )}
                <div className="p-4">
                  {post.category && (
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {post.category.name}
                    </span>
                  )}
                  <h2 className="mb-2 line-clamp-2 text-base font-semibold text-foreground group-hover:text-primary sm:text-lg">
                    {post.title}
                  </h2>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {post.summary}
                  </p>
                  {post.publishedAt && (
                    <time className="mt-3 block text-xs text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                    </time>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
