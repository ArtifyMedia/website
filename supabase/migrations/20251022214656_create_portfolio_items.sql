/*
  # Create Portfolio System

  1. New Tables
    - `portfolio_items`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `client` (text) - Client name
      - `category` (text) - Type of work (automotive, real-estate, fashion, etc.)
      - `description` (text) - Project description
      - `video_url` (text) - Vimeo/YouTube URL
      - `thumbnail_url` (text, optional) - Custom thumbnail
      - `duration` (text, optional) - Video duration
      - `tags` (text array) - Project tags
      - `services_used` (text array) - Services used in project
      - `ai_enhanced` (boolean) - Whether AI was used
      - `featured` (boolean) - Featured on homepage
      - `order_index` (integer) - Display order
      - `is_published` (boolean) - Published status
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `portfolio_items` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  video_url text NOT NULL,
  thumbnail_url text,
  duration text,
  tags text[] DEFAULT '{}',
  services_used text[] DEFAULT '{}',
  ai_enhanced boolean DEFAULT false,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published portfolio items"
  ON portfolio_items
  FOR SELECT
  USING (is_published = true);

CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(featured, order_index);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_items(category);
