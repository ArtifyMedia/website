/*
  # Create Portfolio Media Management System

  1. New Tables
    - `portfolio_items`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `client` (text) - Client name
      - `category` (text) - Type: automotive, real-estate, luxury, brand, ai-marketing, all
      - `description` (text, nullable) - Project description
      - `video_url` (text, nullable) - URL to video file (Supabase Storage or external)
      - `thumbnail_url` (text, nullable) - URL to thumbnail image
      - `is_featured` (boolean) - Show in featured section
      - `display_order` (integer) - For custom sorting
      - `published` (boolean) - Control visibility
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `showreel`
      - `id` (uuid, primary key)
      - `title` (text) - Reel title
      - `video_url` (text) - Main showreel video URL
      - `thumbnail_url` (text, nullable)
      - `is_active` (boolean) - Only one active at a time
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `blog_posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique) - URL-friendly version
      - `category` (text) - Industry, Creativity, AI, Marketing
      - `excerpt` (text) - Short description
      - `content` (text) - Full blog content (markdown)
      - `thumbnail_url` (text, nullable)
      - `read_time` (text) - e.g., "5 min read"
      - `published` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Public read access for published content
    - Only authenticated users can manage content

  3. Indexes
    - Index on category for filtering
    - Index on published status
    - Index on display_order for sorting
*/

-- Create portfolio_items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  client text NOT NULL,
  category text NOT NULL CHECK (category IN ('automotive', 'real-estate', 'luxury', 'brand', 'ai-marketing', 'all')),
  description text,
  video_url text,
  thumbnail_url text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create showreel table
CREATE TABLE IF NOT EXISTS showreel (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  video_url text NOT NULL,
  thumbnail_url text,
  is_active boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL CHECK (category IN ('Industry', 'Creativity', 'AI', 'Marketing')),
  excerpt text NOT NULL,
  content text NOT NULL,
  thumbnail_url text,
  read_time text DEFAULT '5 min read',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE showreel ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Portfolio items policies (public read for published, authenticated write)
CREATE POLICY "Allow public read published portfolio items"
  ON portfolio_items FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Allow authenticated users full access to portfolio items"
  ON portfolio_items FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Showreel policies
CREATE POLICY "Allow public read active showreel"
  ON showreel FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Allow authenticated users full access to showreel"
  ON showreel FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Blog posts policies
CREATE POLICY "Allow public read published blog posts"
  ON blog_posts FOR SELECT
  TO anon
  USING (published = true);

CREATE POLICY "Allow authenticated users full access to blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_published ON portfolio_items(published);
CREATE INDEX IF NOT EXISTS idx_portfolio_display_order ON portfolio_items(display_order);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(is_featured);

CREATE INDEX IF NOT EXISTS idx_showreel_active ON showreel(is_active);

CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_posts(published);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_portfolio_items_updated_at
  BEFORE UPDATE ON portfolio_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_showreel_updated_at
  BEFORE UPDATE ON showreel
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample portfolio data
INSERT INTO portfolio_items (title, client, category, description, display_order, published) VALUES
  ('Luxury SUV Launch', 'Premium Automotive', 'automotive', 'Cinematic launch campaign for luxury SUV featuring dynamic shots and emotional storytelling', 1, true),
  ('Dubai Marina Penthouse', 'Elite Properties', 'real-estate', 'Ultra-luxury property showcase with aerial tours and interior walkthroughs', 2, true),
  ('Swiss Watch Campaign', 'Timepiece Luxury', 'luxury', 'High-end watch commercial focusing on craftsmanship and precision', 3, true),
  ('Fashion Brand Story', 'Haute Couture', 'brand', 'Brand storytelling campaign for luxury fashion house', 4, true),
  ('Supercar Experience', 'Exotic Motors', 'automotive', 'Adrenaline-packed supercar experience video', 5, true),
  ('AI Automation Success', 'Tech Startup', 'ai-marketing', 'Case study showcasing 300% ROI from AI automation implementation', 6, true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, category, excerpt, content, read_time, published) VALUES
  ('The Future of Luxury Brand Marketing in 2025', 'future-luxury-brand-marketing-2025', 'Industry', 'How AI and cinematic storytelling are reshaping the luxury market landscape.', 'Full blog content here...', '5 min read', true),
  ('Crafting Emotion Through Motion', 'crafting-emotion-through-motion', 'Creativity', 'Behind the scenes of our award-winning automotive campaign process.', 'Full blog content here...', '7 min read', true),
  ('Why Every Business Needs an AI Receptionist', 'why-every-business-needs-ai-receptionist', 'AI', 'The ROI of 24/7 intelligent customer service and lead capture.', 'Full blog content here...', '4 min read', true);
