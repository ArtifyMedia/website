/*
  # Seed Portfolio Data

  1. Portfolio Items
    - Add Four Seasons Tunis project
    - Add other sample portfolio items for demonstration
  
  2. Data Structure
    - All items are published and ready for display
    - Proper categorization and tagging
    - Featured items for homepage display
*/

-- Insert Four Seasons project if it doesn't exist
INSERT INTO portfolio_items (
  title,
  client,
  category,
  description,
  video_url,
  thumbnail_url,
  duration,
  tags,
  services_used,
  ai_enhanced,
  featured,
  order_index,
  is_published
) VALUES (
  'Four Seasons Tunis - Luxury Hospitality Campaign',
  'Four Seasons Hotels & Resorts',
  'luxury',
  'Flying from Dubai to the heart of Africa, we partnered with Four Seasons Tunis to craft a cinematic showcase of their world-class hospitality. This 4-day production captured the essence of Mediterranean serenity — from ocean-view suites and spa indulgence to fine dining and private experiences that define the Four Seasons standard.

The $4,500 campaign was a testament to storytelling through detail — blending travel, culture, and luxury in one frame. Shot on Sony A7IV and A7C with Sigma Art & G-Master lenses, stabilized with professional gimbals, the film aimed to translate emotion through motion, elegance through light.

What began as a collaboration born from our UAE successes became a visual journey celebrating craftsmanship, culture, and cinematic hospitality.',
  'https://www.youtube.com/embed/NUY9Xh8a4DE?si=3w2nxkTGbAUonvTF',
  'https://img.youtube.com/vi/NUY9Xh8a4DE/maxresdefault.jpg',
  '4 days production',
  ARRAY[
    'luxury hospitality',
    'mediterranean',
    'travel content',
    'culture',
    'fine dining',
    'spa experience',
    'ocean view',
    'four seasons',
    'tunisia',
    'cinematic',
    'sony a7iv',
    'sigma art lenses'
  ],
  ARRAY[
    'Luxury Brand Films',
    'Cinematic Production',
    'Travel Content Creation',
    'Hospitality Marketing',
    'Brand Storytelling'
  ],
  false,
  true,
  1,
  true
) ON CONFLICT DO NOTHING;

-- Add more sample portfolio items
INSERT INTO portfolio_items (
  title,
  client,
  category,
  description,
  video_url,
  thumbnail_url,
  duration,
  tags,
  services_used,
  ai_enhanced,
  featured,
  order_index,
  is_published
) VALUES 
(
  'Mercedes-AMG GT Campaign',
  'Mercedes-Benz',
  'automotive',
  'A high-octane automotive campaign showcasing the raw power and precision engineering of the Mercedes-AMG GT. Shot across Dubai''s most iconic locations, this production combined dynamic driving sequences with cinematic storytelling to capture the essence of performance luxury.',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
  '3 days production',
  ARRAY['automotive', 'luxury cars', 'performance', 'dubai', 'cinematic', 'mercedes', 'amg'],
  ARRAY['Automotive Films', 'Cinematic Production', 'Brand Storytelling'],
  false,
  true,
  2,
  true
),
(
  'Dubai Marina Penthouse',
  'Emaar Properties',
  'real-estate',
  'An elegant showcase of Dubai Marina''s most exclusive penthouse, featuring breathtaking views and world-class amenities. This production highlighted the luxury lifestyle and architectural excellence that defines premium real estate in Dubai.',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  '2 days production',
  ARRAY['real estate', 'luxury living', 'dubai marina', 'penthouse', 'architecture'],
  ARRAY['Real Estate Films', 'Luxury Marketing', 'Architectural Showcase'],
  false,
  false,
  3,
  true
),
(
  'AI-Enhanced Brand Story',
  'Tech Startup',
  'brand',
  'A cutting-edge brand film enhanced with AI-powered visual effects and motion graphics. This project showcased how artificial intelligence can elevate storytelling, creating immersive experiences that resonate with modern audiences.',
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
  '5 days production',
  ARRAY['ai enhanced', 'brand story', 'technology', 'innovation', 'motion graphics'],
  ARRAY['AI-Enhanced Production', 'Brand Films', 'Motion Graphics'],
  true,
  false,
  4,
  true
) ON CONFLICT DO NOTHING;