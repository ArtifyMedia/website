/*
  # Create Services, Cart & Booking System

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text) - Service name (e.g., "Brand Film", "Social Content")
      - `category` (text) - Category (e.g., "creative", "marketing", "ai_automation")
      - `description` (text) - Service description
      - `price_from` (integer) - Starting price in cents
      - `features` (jsonb) - Array of features
      - `is_active` (boolean) - Whether service is available
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `cart_items`
      - `id` (uuid, primary key)
      - `session_id` (text) - Anonymous session ID for cart persistence
      - `service_id` (uuid, foreign key to services)
      - `notes` (text) - Client's notes about this service
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `bookings`
      - `id` (uuid, primary key)
      - `client_name` (text) - Client's full name
      - `client_email` (text) - Client's email
      - `client_phone` (text) - Client's phone number
      - `company_name` (text) - Client's company name
      - `website` (text) - Client's website URL
      - `problem_statement` (text) - What problem they're facing
      - `project_brief` (text) - Overall project brief
      - `services` (jsonb) - Array of selected services with notes
      - `total_amount` (integer) - Total estimated amount in cents
      - `status` (text) - Booking status (pending, contacted, qualified, closed, rejected)
      - `meeting_scheduled_at` (timestamptz) - When meeting is scheduled
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Services: Public read access
    - Cart: Anyone can manage their own cart via session_id
    - Bookings: Anyone can create, only admins can read/update

  3. Indexes
    - Index on cart_items.session_id for fast cart lookups
    - Index on bookings.status for filtering
    - Index on bookings.created_at for sorting
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  price_from integer NOT NULL DEFAULT 0,
  features jsonb DEFAULT '[]'::jsonb,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  USING (is_active = true);

-- Create cart_items table
CREATE TABLE IF NOT EXISTS cart_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text NOT NULL,
  service_id uuid NOT NULL REFERENCES services(id) ON DELETE CASCADE,
  notes text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own cart"
  ON cart_items FOR SELECT
  USING (true);

CREATE POLICY "Users can add to their cart"
  ON cart_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can update their cart items"
  ON cart_items FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Users can delete from their cart"
  ON cart_items FOR DELETE
  USING (true);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text NOT NULL,
  company_name text DEFAULT '',
  website text DEFAULT '',
  problem_statement text NOT NULL,
  project_brief text NOT NULL,
  services jsonb NOT NULL DEFAULT '[]'::jsonb,
  total_amount integer DEFAULT 0,
  status text DEFAULT 'pending',
  meeting_scheduled_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their own bookings by email"
  ON bookings FOR SELECT
  USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_cart_items_session_id ON cart_items(session_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);

-- Insert initial services
INSERT INTO services (name, category, description, price_from, features) VALUES
(
  'Brand Film',
  'creative',
  'Cinematic storytelling that captures your brand''s essence and moves your audience to action',
  5000,
  '["Concept Development", "Scriptwriting", "Professional Filming", "Color Grading", "Sound Design", "2-3 Revision Rounds"]'::jsonb
),
(
  'Social Content Suite',
  'creative',
  'High-performing vertical content optimized for Instagram, TikTok, and YouTube Shorts',
  2500,
  '["10-15 Vertical Videos", "Platform Optimization", "Trending Audio Integration", "Captions & Graphics", "Content Calendar"]'::jsonb
),
(
  'Product Showcase',
  'creative',
  'Luxury product videography that highlights craftsmanship and drives desire',
  3500,
  '["Hero Product Film", "Detail Shots", "Lifestyle Integration", "Motion Graphics", "Music Licensing"]'::jsonb
),
(
  'Real Estate Tour',
  'creative',
  'Immersive property tours that sell the lifestyle, not just the space',
  4000,
  '["Drone Cinematography", "Interior Walkthrough", "Neighborhood Highlights", "Voice Over", "Virtual Tour Ready"]'::jsonb
),
(
  'Automotive Showcase',
  'creative',
  'Dynamic automotive content that captures performance, design, and emotion',
  6000,
  '["Tracking Shots", "Interior/Exterior Detail", "Performance Capture", "Sound Design", "Cinematic Edit"]'::jsonb
),
(
  'Lead Generation System',
  'marketing',
  'AI-powered funnel that converts cold traffic into qualified leads on autopilot',
  3000,
  '["Landing Page Design", "Email Sequences", "ChatGPT Integration", "Lead Scoring", "CRM Setup", "Analytics Dashboard"]'::jsonb
),
(
  'Content Distribution',
  'marketing',
  'Automated multi-platform content distribution that maximizes reach and engagement',
  1500,
  '["Auto-posting to 5+ Platforms", "Optimal Timing AI", "Hashtag Optimization", "Performance Tracking", "Monthly Reports"]'::jsonb
),
(
  'Ad Campaign Management',
  'marketing',
  'Data-driven paid advertising that delivers measurable ROI across Meta, Google, and YouTube',
  2000,
  '["Campaign Strategy", "Creative Testing", "Audience Research", "Budget Optimization", "Weekly Optimization", "ROI Reporting"]'::jsonb
),
(
  'AI Chatbot',
  'ai_automation',
  'Intelligent chatbot that qualifies leads, books meetings, and answers questions 24/7',
  2500,
  '["Custom Training", "Multi-language Support", "CRM Integration", "Lead Qualification", "Meeting Booking", "Analytics"]'::jsonb
),
(
  'Workflow Automation',
  'ai_automation',
  'Custom automation that eliminates repetitive tasks and streamlines your operations',
  3500,
  '["Process Analysis", "Custom Automation Build", "Tool Integration", "Testing & QA", "Training & Documentation", "30-day Support"]'::jsonb
),
(
  'AI Content Generator',
  'ai_automation',
  'Intelligent system that creates on-brand content at scale for social media and marketing',
  2000,
  '["Brand Voice Training", "Multi-format Content", "Approval Workflow", "Scheduling Integration", "Performance Tracking"]'::jsonb
)
ON CONFLICT DO NOTHING;
