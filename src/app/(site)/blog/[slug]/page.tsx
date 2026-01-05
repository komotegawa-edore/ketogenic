import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPostSlugs } from "@/lib/microcms";

export const dynamicParams = true;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const slugs = await getAllPostSlugs();
    return slugs.filter(Boolean).map((slug) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "記事が見つかりません" };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.eyecatch ? [post.eyecatch.url] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          ホーム
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-foreground">
          記事一覧
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        {post.category && (
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {post.category.name}
          </span>
        )}
        <h1 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
          {post.title}
        </h1>
        <p className="mb-4 text-base text-muted-foreground sm:text-lg">
          {post.summary}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.author && (
            <div className="flex items-center gap-2">
              {post.author.image && (
                <Image
                  src={post.author.image.url}
                  alt={post.author.name}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              )}
              <span>{post.author.name}</span>
            </div>
          )}
          {post.publishedAt && (
            <time>
              {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
            </time>
          )}
        </div>
      </header>

      {/* Eyecatch */}
      {post.eyecatch && (
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={post.eyecatch.url}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      {/* Body */}
      <div
        className="prose prose-neutral max-w-none prose-headings:text-foreground prose-p:text-foreground prose-a:text-primary prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <section className="mt-12 rounded-xl border border-border/60 bg-card p-6 sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-foreground">
            よくある質問
          </h2>
          <div className="space-y-6">
            {post.faq.map((item, index) => (
              <div key={index}>
                <h3 className="mb-2 font-semibold text-foreground">
                  Q. {item.question}
                </h3>
                <p className="text-muted-foreground">A. {item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Author */}
      {post.author && (
        <section className="mt-12 rounded-xl border border-border/60 bg-card p-6 sm:p-8">
          <div className="flex items-start gap-4">
            {post.author.image && (
              <Image
                src={post.author.image.url}
                alt={post.author.name}
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h3 className="font-semibold text-foreground">
                {post.author.name}
              </h3>
              {post.author.credentials && (
                <p className="text-sm text-muted-foreground">
                  {post.author.credentials}
                </p>
              )}
              {post.author.bio && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {post.author.bio}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mt-12 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 p-6 text-center sm:p-8">
        <h2 className="mb-3 text-lg font-bold text-foreground sm:text-xl">
          ケトジェニックをもっと学ぶ
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          他の記事やツールもチェックしてみてください
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            他の記事を読む
          </Link>
          <Link
            href="/tools"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            ツールを使う
          </Link>
        </div>
      </section>
    </article>
  );
}
