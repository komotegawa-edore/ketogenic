import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Post, PostListResponse, Category, Author } from "@/types/microcms";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

/** 記事一覧を取得 */
export async function getPostList(
  queries?: MicroCMSQueries
): Promise<PostListResponse> {
  return client.get<PostListResponse>({
    endpoint: "blogs",
    queries: {
      limit: 10,
      ...queries,
    },
  });
}

/** 記事詳細を取得（slugで検索） */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const response = await client.get<PostListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  return response.contents[0] || null;
}

/** 記事詳細を取得（IDで検索） */
export async function getPostById(
  id: string,
  queries?: MicroCMSQueries
): Promise<Post> {
  return client.get<Post>({
    endpoint: "blogs",
    contentId: id,
    queries,
  });
}

/** カテゴリ一覧を取得 */
export async function getCategoryList(
  queries?: MicroCMSQueries
): Promise<{ contents: Category[]; totalCount: number }> {
  return client.get({
    endpoint: "categories",
    queries: {
      limit: 100,
      ...queries,
    },
  });
}

/** 著者一覧を取得 */
export async function getAuthorList(
  queries?: MicroCMSQueries
): Promise<{ contents: Author[]; totalCount: number }> {
  return client.get({
    endpoint: "authors",
    queries: {
      limit: 100,
      ...queries,
    },
  });
}

/** 全記事のslugを取得（静的生成用） */
export async function getAllPostSlugs(): Promise<string[]> {
  const response = await client.get<PostListResponse>({
    endpoint: "blogs",
    queries: {
      fields: "slug",
      limit: 100,
    },
  });

  return response.contents.map((post) => post.slug);
}
