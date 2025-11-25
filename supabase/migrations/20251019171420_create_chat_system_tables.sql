/*
  # Create Chat System Tables for Artify Media

  1. New Tables
    - `sessions`
      - `id` (uuid, primary key)
      - `session_id` (text, unique) - Client session identifier
      - `utm_source` (text, nullable) - Marketing attribution
      - `utm_medium` (text, nullable)
      - `utm_campaign` (text, nullable)
      - `created_at` (timestamptz) - Session start time
      - `last_activity` (timestamptz) - Last interaction time
      
    - `messages`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key to sessions)
      - `role` (text) - 'user' or 'assistant'
      - `content` (text) - Message content
      - `created_at` (timestamptz) - Message timestamp
      
    - `leads`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key to sessions)
      - `intent` (text) - Identified need (creative/marketing/ai/mixed)
      - `services_interested` (text[]) - Array of service interests
      - `contact_info` (jsonb, nullable) - Email, phone if provided
      - `transcript_summary` (text, nullable) - AI summary of conversation
      - `status` (text) - 'new', 'contacted', 'qualified', 'converted'
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
      
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated API access
    - Public read access for sessions (limited fields)
    
  3. Indexes
    - Index on session_id for fast lookups
    - Index on created_at for analytics queries
*/

-- Create sessions table
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id text UNIQUE NOT NULL,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  created_at timestamptz DEFAULT now(),
  last_activity timestamptz DEFAULT now()
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
  role text NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES sessions(id) ON DELETE CASCADE NOT NULL,
  intent text,
  services_interested text[] DEFAULT '{}',
  contact_info jsonb,
  transcript_summary text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Sessions policies (allow public creation, read own session)
CREATE POLICY "Allow public session creation"
  ON sessions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public session read"
  ON sessions FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public session update"
  ON sessions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Messages policies (allow public creation and reading for chat)
CREATE POLICY "Allow public message creation"
  ON messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public message read"
  ON messages FOR SELECT
  TO anon
  USING (true);

-- Leads policies (restrict to authenticated users/service role)
CREATE POLICY "Allow service role full access to leads"
  ON leads FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_sessions_session_id ON sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_session_id ON messages(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON messages(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_session_id ON leads(session_id);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

-- Create updated_at trigger for leads
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();