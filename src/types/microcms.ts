import type { MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

/** カテゴリ */
export type Category = {
  id: string;
  name: string;
  slug: string;
} & MicroCMSDate;

/** 著者 */
export type Author = {
  id: string;
  name: string;
  bio?: string;
  credentials?: string;
  disclaimer?: string;
  image?: MicroCMSImage;
} & MicroCMSDate;

/** FAQ項目 */
export type FAQItem = {
  fieldId: "faq";
  question: string;
  answer: string;
};

/** 記事 */
export type Post = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  body: string;
  category?: Category;
  tags?: string[];
  eyecatch?: MicroCMSImage;
  faq?: FAQItem[];
  author?: Author;
  publishedAt?: string;
} & MicroCMSDate;

/** 記事一覧のレスポンス */
export type PostListResponse = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
};
