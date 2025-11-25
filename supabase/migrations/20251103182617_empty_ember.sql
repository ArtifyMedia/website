/*
  # Fix Portfolio Items RLS Policies

  1. Security Updates
    - Drop existing restrictive policies on portfolio_items table
    - Add policy for public read access to published portfolio items
    - Add policy for authenticated users to insert/update portfolio items
    
  2. Changes Made
    - Allow anonymous users to view published portfolio items
    - Allow authenticated users to manage portfolio items
    - Maintain security while enabling proper functionality
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Anyone can view published portfolio items" ON portfolio_items;
DROP POLICY IF EXISTS "Authenticated users can insert portfolio items" ON portfolio_items;
DROP POLICY IF EXISTS "Authenticated users can update portfolio items" ON portfolio_items;
DROP POLICY IF EXISTS "Authenticated users can delete portfolio items" ON portfolio_items;

-- Create new policies for proper access control
CREATE POLICY "Allow public read access to published portfolio items"
  ON portfolio_items
  FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Allow authenticated insert access"
  ON portfolio_items
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated update access"
  ON portfolio_items
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow authenticated delete access"
  ON portfolio_items
  FOR DELETE
  TO authenticated
  USING (true);