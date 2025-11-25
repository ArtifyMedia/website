/*
  # Add Four Seasons Tunis Portfolio Project

  1. New Portfolio Item
    - Four Seasons Tunis luxury hospitality campaign
    - Complete project details with client info, scope, and production details
    - YouTube video embed integration
    - Relevant tags and services used
    - Featured project status

  2. Project Details
    - Client: Four Seasons Hotels & Resorts
    - Location: Tunis, Tunisia
    - Budget: $4,500 campaign
    - Equipment: Sony A7IV, A7C, Sigma Art & G-Master lenses
    - Category: Luxury hospitality
*/

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
  'Four Seasons Tunis - Mediterranean Serenity',
  'Four Seasons Hotels & Resorts',
  'luxury',
  'Flying from Dubai to the heart of Africa, we partnered with Four Seasons Tunis to craft a cinematic showcase of their world-class hospitality. This 4-day production captured the essence of Mediterranean serenity — from ocean-view suites and spa indulgence to fine dining and private experiences that define the Four Seasons standard.

The $4,500 campaign was a testament to storytelling through detail — blending travel, culture, and luxury in one frame. Shot on Sony A7IV and A7C with Sigma Art & G-Master lenses, stabilized with professional gimbals, the film aimed to translate emotion through motion, elegance through light.

What began as a collaboration born from our UAE successes became a visual journey celebrating craftsmanship, culture, and cinematic hospitality.',
  'https://www.youtube.com/embed/NUY9Xh8a4DE?si=3w2nxkTGbAUonvTF',
  'https://img.youtube.com/vi/NUY9Xh8a4DE/maxresdefault.jpg',
  '4 days production',
  ARRAY['luxury hospitality', 'mediterranean', 'travel', 'culture', 'fine dining', 'spa', 'ocean view', 'four seasons', 'tunisia', 'africa', 'cinematic', 'storytelling'],
  ARRAY['Luxury Brand Films', 'Cinematic Production', 'Travel Content', 'Hospitality Marketing'],
  false,
  true,
  1,
  true
);