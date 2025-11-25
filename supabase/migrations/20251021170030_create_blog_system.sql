/*
  # Create Blog System

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text) - SEO-optimized blog title
      - `slug` (text, unique) - URL-friendly slug for SEO
      - `excerpt` (text) - Short summary for previews and meta descriptions
      - `content` (text) - Full blog post content in markdown
      - `featured_image` (text) - URL to featured image
      - `category` (text) - Blog category
      - `tags` (text[]) - Array of tags for SEO
      - `meta_title` (text) - SEO meta title
      - `meta_description` (text) - SEO meta description
      - `keywords` (text[]) - SEO keywords
      - `author` (text) - Author name
      - `read_time` (integer) - Estimated read time in minutes
      - `published` (boolean) - Publication status
      - `views` (integer) - View count
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      - `published_at` (timestamptz)

  2. Security
    - Enable RLS on `blog_posts` table
    - Public read access for published posts
    - Authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  meta_title text,
  meta_description text,
  keywords text[] DEFAULT '{}',
  author text NOT NULL DEFAULT 'Artify Media Team',
  read_time integer DEFAULT 5,
  published boolean DEFAULT true,
  views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published_at ON blog_posts(published_at DESC);
