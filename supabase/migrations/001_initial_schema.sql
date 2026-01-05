-- Ketolier Database Schema
-- ユーザープロフィールとユーザー投稿のためのスキーマ

-- ============================================
-- profiles テーブル
-- auth.users と1:1で紐づくユーザープロフィール
-- ============================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  display_name text,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- profiles の RLS を有効化
alter table public.profiles enable row level security;

-- profiles のポリシー
create policy "プロフィールは誰でも閲覧可能"
  on public.profiles for select
  using (true);

create policy "ユーザーは自分のプロフィールを更新可能"
  on public.profiles for update
  using (auth.uid() = id);

create policy "ユーザーは自分のプロフィールを作成可能"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 新規ユーザー作成時に自動でprofileを作成するトリガー
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, split_part(new.email, '@', 1));
  return new;
end;
$$ language plpgsql security definer set search_path = '';

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================
-- user_posts テーブル
-- ユーザーが投稿する記事
-- ============================================
create table if not exists public.user_posts (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  slug text unique not null,
  content text not null,
  summary text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- user_posts の RLS を有効化
alter table public.user_posts enable row level security;

-- user_posts のポリシー
create policy "公開された投稿は誰でも閲覧可能"
  on public.user_posts for select
  using (published = true);

create policy "ユーザーは自分の投稿を閲覧可能"
  on public.user_posts for select
  using (auth.uid() = user_id);

create policy "ユーザーは自分の投稿を作成可能"
  on public.user_posts for insert
  with check (auth.uid() = user_id);

create policy "ユーザーは自分の投稿を更新可能"
  on public.user_posts for update
  using (auth.uid() = user_id);

create policy "ユーザーは自分の投稿を削除可能"
  on public.user_posts for delete
  using (auth.uid() = user_id);

-- インデックス
create index if not exists user_posts_user_id_idx on public.user_posts(user_id);
create index if not exists user_posts_slug_idx on public.user_posts(slug);
create index if not exists user_posts_published_idx on public.user_posts(published);
create index if not exists user_posts_created_at_idx on public.user_posts(created_at desc);

-- updated_at を自動更新するトリガー
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql set search_path = '';

create or replace trigger handle_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create or replace trigger handle_user_posts_updated_at
  before update on public.user_posts
  for each row execute procedure public.handle_updated_at();
