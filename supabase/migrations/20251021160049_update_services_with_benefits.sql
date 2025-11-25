/*
  # Update Services Schema - Replace Pricing with Benefits

  1. Changes
    - Remove price_from column
    - Add detailed_description (longer description)
    - Add benefits (jsonb array of benefit points)
    - Add use_cases (jsonb array of use case examples)
    - Update existing services with detailed benefits instead of pricing

  2. Data Updates
    - Transform all services to focus on value proposition
    - Add compelling benefits that trigger "my business needs this"
    - Remove all pricing information
*/

-- Add new columns for detailed service information
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'services' AND column_name = 'detailed_description'
  ) THEN
    ALTER TABLE services ADD COLUMN detailed_description text DEFAULT '';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'services' AND column_name = 'benefits'
  ) THEN
    ALTER TABLE services ADD COLUMN benefits jsonb DEFAULT '[]'::jsonb;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'services' AND column_name = 'use_cases'
  ) THEN
    ALTER TABLE services ADD COLUMN use_cases jsonb DEFAULT '[]'::jsonb;
  END IF;
END $$;

-- Update services with detailed benefits instead of pricing
UPDATE services SET
  detailed_description = 'Transform your brand story into an emotional journey that captivates audiences and drives action. Professional cinematography meets strategic storytelling to create films that don''t just look beautiful — they convert.',
  benefits = '["Increase brand recall by up to 80%", "Boost engagement rates 3-5x over static content", "Professional production team with luxury brand experience", "Full creative control with collaborative process", "Multi-platform optimization included"]'::jsonb,
  use_cases = '["Product launches that create buzz", "Company culture videos that attract top talent", "Customer testimonials that build trust", "Brand manifestos that define your market position"]'::jsonb
WHERE name = 'Brand Film';

UPDATE services SET
  detailed_description = 'Dominate social feeds with high-performing vertical content designed for today''s short-form platforms. Each piece is crafted to stop the scroll, spark engagement, and turn viewers into customers.',
  benefits = '["10-15 ready-to-post videos optimized for each platform", "Trending audio and format integration", "Designed for maximum algorithmic reach", "Consistent brand presence across all channels", "Hook-first storytelling that captures attention in 3 seconds"]'::jsonb,
  use_cases = '["Daily posting without content creation stress", "Product demonstrations that drive sales", "Behind-the-scenes content that builds community", "Educational content that positions you as the expert"]'::jsonb
WHERE name = 'Social Content Suite';

UPDATE services SET
  detailed_description = 'Showcase your product with the luxury treatment it deserves. Studio-quality cinematography that highlights every detail, creating desire and justifying premium pricing.',
  benefits = '["Elevate perceived product value by 40%+", "Stunning visuals that work across all marketing channels", "Detail shots that highlight craftsmanship", "Lifestyle integration showing product in use", "Professional lighting and color grading"]'::jsonb,
  use_cases = '["E-commerce listings that outperform competitors", "Product launch campaigns", "Premium brand positioning", "Wholesale and B2B presentations"]'::jsonb
WHERE name = 'Product Showcase';

UPDATE services SET
  detailed_description = 'Sell the lifestyle, not just the property. Cinematic tours with drone footage that showcase properties in their best light and help listings sell faster at higher prices.',
  benefits = '["Properties sell 68% faster with video", "Attract serious buyers who are pre-qualified", "Professional drone cinematography included", "Virtual tour compatible", "Stand out in competitive markets"]'::jsonb,
  use_cases = '["Luxury home listings", "Commercial real estate showcases", "Property development marketing", "Vacation rental promotions"]'::jsonb
WHERE name = 'Real Estate Tour';

UPDATE services SET
  detailed_description = 'Capture the emotion of driving with dynamic cinematography that showcases performance, design, and the automotive experience. Content that sells cars and builds dealer brands.',
  benefits = '["Increase showroom visits by 45%", "Dynamic tracking shots that showcase performance", "Interior and exterior detail coverage", "Engine audio and sound design that excites", "Dealership branding integration"]'::jsonb,
  use_cases = '["New vehicle launches", "Dealership inventory promotion", "Special edition announcements", "Test drive campaigns"]'::jsonb
WHERE name = 'Automotive Showcase';

UPDATE services SET
  detailed_description = 'Turn cold traffic into qualified leads automatically with AI-powered funnels that work 24/7. Capture, qualify, and nurture prospects without lifting a finger.',
  benefits = '["Qualify leads while you sleep", "Reduce cost per lead by up to 60%", "Automated follow-up sequences", "CRM integration for seamless handoff", "Data-driven optimization for continuous improvement"]'::jsonb,
  use_cases = '["Service businesses needing consistent lead flow", "High-ticket products requiring nurture sequences", "B2B companies with complex sales cycles", "Agencies scaling client acquisition"]'::jsonb
WHERE name = 'Lead Generation System';

UPDATE services SET
  detailed_description = 'One piece of content, distributed everywhere. Automated posting to Instagram, TikTok, YouTube, Facebook, LinkedIn and more — optimized for each platform''s algorithm.',
  benefits = '["Save 15+ hours per week on content posting", "Never miss optimal posting times", "Platform-specific optimization automatically", "Centralized analytics dashboard", "Consistent brand presence everywhere"]'::jsonb,
  use_cases = '["Personal brands building authority", "Agencies managing multiple clients", "E-commerce brands with daily promotions", "Content creators maximizing reach"]'::jsonb
WHERE name = 'Content Distribution';

UPDATE services SET
  detailed_description = 'Stop wasting ad budget on underperforming campaigns. Data-driven management across Meta, Google, and YouTube that focuses on ROI, not vanity metrics.',
  benefits = '["Average 3-5x return on ad spend", "Continuous A/B testing and optimization", "Detailed attribution and tracking", "Creative testing that finds winners", "Weekly performance reports and strategy calls"]'::jsonb,
  use_cases = '["E-commerce scaling revenue", "Service businesses increasing bookings", "B2B companies generating leads", "Product launches requiring immediate traction"]'::jsonb
WHERE name = 'Ad Campaign Management';

UPDATE services SET
  detailed_description = 'An AI assistant that represents your brand 24/7, answering questions, qualifying leads, and booking meetings while you focus on closing deals.',
  benefits = '["Respond to inquiries instantly, any time of day", "Qualify leads before they reach your calendar", "Book meetings automatically", "Multi-language support for global reach", "Reduces support workload by 70%"]'::jsonb,
  use_cases = '["High-volume lead generation", "Customer support automation", "Appointment booking for services", "FAQ handling and product education"]'::jsonb
WHERE name = 'AI Chatbot';

UPDATE services SET
  detailed_description = 'Eliminate repetitive tasks that drain your team''s time. Custom automation that connects your tools, streamlines workflows, and multiplies productivity.',
  benefits = '["Reclaim 20+ hours per week per team member", "Reduce human error in repetitive tasks", "Scale operations without hiring", "Seamless integration with existing tools", "ROI typically within 60 days"]'::jsonb,
  use_cases = '["Data entry and transfer between systems", "Report generation and distribution", "Client onboarding automation", "Invoice and payment processing"]'::jsonb
WHERE name = 'Workflow Automation';

UPDATE services SET
  detailed_description = 'Generate weeks of on-brand content in minutes. AI trained on your brand voice creates social posts, blogs, emails, and more — with human oversight and approval.',
  benefits = '["Create 30 days of content in under an hour", "Maintain consistent brand voice across all channels", "Built-in approval workflow", "Multi-format content (posts, captions, blogs, emails)", "Never face blank page syndrome again"]'::jsonb,
  use_cases = '["Social media management at scale", "Email marketing campaigns", "Blog content production", "Ad copywriting and testing"]'::jsonb
WHERE name = 'AI Content Generator';
