/*
  # Update Services with Conversion-Focused Copy

  1. Overview
    - Complete overhaul of all service offerings
    - Reorganized into 4 main categories: Creative & Media Suite, Marketing & Growth, AI & Automation Suite, Web & System Development
    - All copy rewritten to be conversion-friendly and business-attracting
    - Maintains detailed descriptions, benefits, and use cases structure

  2. Categories
    - CREATIVE: Brand Film, Social Content Suite, Product Showcase, Real Estate Tour + 3D Virtuals, Automotive Showcase, Creative Direction & Strategy, Media Consultation
    - MARKETING: Social Media Marketing, SEO & Content Strategy, Email Marketing & CRM Automation, Ad Campaign Management, Funnel Design & Optimization, Reputation & Review Automation, Marketing Analytics Dashboard
    - AI_AUTOMATION: AI Growth Engine, AI Chatbot, AI Receptionist, Lead Reactivation System, AI Content Generator, AI Customer Support, AI Business Audit, Custom AI Workflows
    - WEB_DEVELOPMENT: Website Design & Development, App Development, Custom Dashboard Systems, CRM & ERP Development, Landing Page Optimization, E-Commerce Development

  3. Changes
    - Deletes all existing services
    - Inserts new service structure with conversion-optimized copy
    - All services marked as active by default
*/

-- Clear existing services
DELETE FROM services;

-- CREATIVE & MEDIA SUITE
INSERT INTO services (name, category, description, detailed_description, features, benefits, use_cases, is_active) VALUES
(
  'Brand Film',
  'creative',
  'Cinematic storytelling that turns emotion into measurable impact.',
  'Transform your story into cinematic storytelling that builds emotional connection and drives conversions. Professional cinematography meets strategic narrative to create films that don''t just look beautiful — they convert viewers into customers and elevate your brand positioning in the market.',
  '["Professional cinematography with luxury brand experience", "Strategic narrative development", "Multi-platform optimization", "Collaborative creative process", "Full production team"]'::jsonb,
  '["Increase brand recall by up to 80%", "Boost engagement rates 3-5x over static content", "Emotional storytelling that drives purchasing decisions", "Premium positioning that justifies higher pricing", "Multi-platform assets that maximize ROI"]'::jsonb,
  '["Product launches that create market buzz", "Company culture videos that attract top talent", "Customer testimonials that build trust at scale", "Brand manifestos that define your market position"]'::jsonb,
  true
),
(
  'Social Content Suite',
  'creative',
  'Short-form vertical videos crafted for Instagram, TikTok, and YouTube dominance.',
  'Dominate social feeds with high-performing vertical content designed for today''s short-form platforms. Each piece is crafted to stop the scroll, spark engagement, and turn casual viewers into paying customers through platform-optimized storytelling.',
  '["10-15 ready-to-post videos per package", "Platform-specific optimization", "Trending audio integration", "Hook-first storytelling", "Batch filming efficiency"]'::jsonb,
  '["Save 20+ hours per month on content creation", "Algorithmic boost from consistent posting", "Professional quality that builds authority", "Conversion-optimized hooks and CTAs", "Multi-platform reach from single shoot"]'::jsonb,
  '["Daily posting without content creation stress", "Product demonstrations that drive immediate sales", "Behind-the-scenes content that builds community", "Educational content positioning you as the expert"]'::jsonb,
  true
),
(
  'Product Showcase',
  'creative',
  'Studio-grade visuals that amplify perceived value and convert attention into sales.',
  'Showcase your product with the luxury treatment it deserves. Studio-quality cinematography that highlights every detail, creating desire and justifying premium pricing while working seamlessly across all your marketing channels.',
  '["Studio-grade lighting and equipment", "Detail macro photography", "Lifestyle integration shots", "Professional color grading", "Multi-angle coverage"]'::jsonb,
  '["Elevate perceived product value by 40%+", "Reduce returns with accurate representation", "Stand out in crowded marketplaces", "Justify premium pricing through quality", "Reusable assets across all channels"]'::jsonb,
  '["E-commerce listings that outperform competitors", "Product launch campaigns that generate buzz", "Premium brand positioning in market", "Wholesale and B2B presentations"]'::jsonb,
  true
),
(
  'Real Estate Tour + 3D Virtuals',
  'creative',
  'Cinematic property tours paired with lifelike 3D renderings that sell lifestyle.',
  'Sell the lifestyle, not just the property. Cinematic tours with drone footage and immersive 3D virtual walkthroughs that showcase properties in their best light, helping listings sell faster at higher prices while attracting serious buyers.',
  '["Cinematic 4K property tours", "Professional drone cinematography", "3D virtual walkthrough integration", "Twilight and golden hour shoots", "Lifestyle-focused storytelling"]'::jsonb,
  '["Properties sell 68% faster with video", "Command 9% higher selling prices", "Attract pre-qualified serious buyers", "Reduce unnecessary in-person showings", "Stand out in competitive luxury markets"]'::jsonb,
  '["Luxury home listings that demand attention", "Commercial real estate showcases", "Property development pre-sales marketing", "Vacation rental promotions that drive bookings"]'::jsonb,
  true
),
(
  'Automotive Showcase',
  'creative',
  'Capture motion, luxury, and performance through emotion-driven visuals.',
  'Capture the emotion of driving with dynamic cinematography that showcases performance, design, and the automotive experience. Content that sells cars, builds dealer brands, and creates desire through motion and sound.',
  '["Dynamic tracking and motion shots", "Interior and exterior detail coverage", "Engine audio and sound design", "Performance demonstration footage", "Dealership branding integration"]'::jsonb,
  '["Increase showroom visits by 45%", "Higher engagement than static photos", "Premium positioning for inventory", "Excitement-driven emotional selling", "Shareable content that expands reach"]'::jsonb,
  '["New vehicle launches that create buzz", "Dealership inventory promotion", "Special edition announcements", "Test drive campaigns that convert"]'::jsonb,
  true
),
(
  'Creative Direction & Strategy',
  'creative',
  'Moodboarding, storyboarding, and shot design that align brand tone and performance.',
  'Strategic creative planning before the cameras roll. Comprehensive moodboarding, storyboarding, and shot design that ensures every frame serves your brand strategy and conversion goals, eliminating expensive reshoots and maximizing ROI.',
  '["Brand tone analysis and alignment", "Comprehensive moodboard development", "Detailed shot lists and storyboards", "Visual reference gathering", "Pre-production strategy sessions"]'::jsonb,
  '["Eliminate costly reshoots and revisions", "Ensure brand consistency across all content", "Maximize shoot day efficiency", "Strategic alignment with business goals", "Clear creative vision for entire team"]'::jsonb,
  '["Major campaign planning and launches", "Rebrands requiring cohesive visual identity", "Multi-video content series planning", "High-budget productions requiring precision"]'::jsonb,
  true
),
(
  'Media Consultation',
  'creative',
  'Expert direction for rebrands, identity evolution, and high-end content positioning.',
  'Strategic consulting for brands ready to elevate their visual presence. Expert guidance on rebranding, identity evolution, and premium content strategy that positions you above competitors and justifies premium pricing.',
  '["Brand positioning analysis", "Competitive visual landscape audit", "Content strategy roadmap", "Identity evolution planning", "Premium positioning consultation"]'::jsonb,
  '["Clear direction for brand evolution", "Competitive differentiation strategy", "Avoid expensive positioning mistakes", "Premium market positioning", "Long-term content strategy alignment"]'::jsonb,
  '["Companies preparing for rebrand", "Startups defining initial brand identity", "Established brands pursuing premium repositioning", "Agencies seeking strategic creative partnership"]'::jsonb,
  true
);

-- MARKETING & GROWTH
INSERT INTO services (name, category, description, detailed_description, features, benefits, use_cases, is_active) VALUES
(
  'Social Media Marketing',
  'marketing',
  'Content calendars, creative execution, and analytics across all major platforms.',
  'Complete social media management that builds consistent brand presence, drives engagement, and converts followers into customers. Strategic content planning, creation, posting, and optimization across all platforms that matter to your business.',
  '["Content calendar planning and strategy", "Creative content production", "Daily posting and engagement", "Analytics and performance reporting", "Community management and response"]'::jsonb,
  '["Consistent brand presence without team overhead", "Algorithm-optimized posting times", "Professional content that builds authority", "Data-driven strategy adjustments", "Free up 30+ hours monthly"]'::jsonb,
  '["Brands building authority in their niche", "E-commerce driving sales through social", "Service businesses attracting local clients", "B2B companies establishing thought leadership"]'::jsonb,
  true
),
(
  'SEO & Content Strategy',
  'marketing',
  'Ranking-focused copy, blogs, and backlink systems for discoverability.',
  'Dominate search results with strategic content that ranks. Comprehensive SEO strategy combining keyword research, conversion-focused copywriting, and authoritative backlink building that drives qualified organic traffic that converts.',
  '["Comprehensive keyword research", "SEO-optimized blog content", "Technical SEO optimization", "Strategic backlink acquisition", "Competitor analysis and positioning"]'::jsonb,
  '["Reduce customer acquisition costs by 60%", "Compound growth from evergreen content", "Higher intent traffic that converts better", "Authority building in your industry", "Sustainable long-term traffic growth"]'::jsonb,
  '["Service businesses capturing local search", "E-commerce competing in product categories", "B2B companies targeting decision-maker searches", "Content brands building authority"]'::jsonb,
  true
),
(
  'Email Marketing & CRM Automation',
  'marketing',
  'AI-personalized nurture flows that turn interest into loyalty.',
  'Transform email from batch-and-blast to revenue engine. AI-powered personalization and automated nurture sequences that guide prospects through your funnel, recover abandoned carts, and turn one-time buyers into loyal customers.',
  '["AI-powered personalization", "Automated nurture sequences", "Abandoned cart recovery", "Segmentation and targeting", "A/B testing and optimization"]'::jsonb,
  '["Average 42x ROI on email marketing", "Recover 15-30% of abandoned carts", "Automated relationship building", "Increase customer lifetime value", "Scale personalization without manual work"]'::jsonb,
  '["E-commerce maximizing customer value", "Service businesses nurturing long sales cycles", "SaaS onboarding and retention", "Agencies staying top-of-mind with clients"]'::jsonb,
  true
),
(
  'Ad Campaign Management',
  'marketing',
  'Paid ads optimized for conversions, not just clicks — across Meta, Google, and YouTube.',
  'Stop wasting ad budget on underperforming campaigns. Data-driven management across Meta, Google, and YouTube that focuses on ROI, not vanity metrics. Continuous testing, optimization, and scaling that turns ad spend into predictable profit.',
  '["Multi-platform campaign management", "Continuous A/B testing", "Advanced conversion tracking", "Creative testing and iteration", "Weekly strategy and reporting calls"]'::jsonb,
  '["Average 3-5x return on ad spend", "Predictable lead flow and revenue", "Data-driven decision making", "Scale what works, kill what doesn''t", "Professional creative that outperforms DIY"]'::jsonb,
  '["E-commerce scaling revenue profitably", "Service businesses filling calendars", "B2B companies generating qualified leads", "Product launches requiring immediate traction"]'::jsonb,
  true
),
(
  'Funnel Design & Optimization',
  'marketing',
  'Landing pages and funnels engineered to convert cold visitors into clients.',
  'Turn traffic into revenue with conversion-optimized funnels. Strategic page design combining psychology, copywriting, and testing to eliminate leaks and maximize conversions at every step of your customer journey.',
  '["Conversion-focused page design", "Psychology-driven copywriting", "A/B testing and optimization", "Analytics and heatmap tracking", "Multi-step funnel architecture"]'::jsonb,
  '["Double or triple conversion rates", "Lower customer acquisition costs", "Clear data on what works", "Scalable growth infrastructure", "Eliminate guesswork with testing"]'::jsonb,
  '["High-ticket service businesses", "Product launches and pre-sales", "Lead generation for B2B", "Webinar and event registration funnels"]'::jsonb,
  true
),
(
  'Reputation & Review Automation',
  'marketing',
  'Automated 5-star review collection with instant social proof visibility.',
  'Transform happy customers into powerful social proof automatically. Systematic review collection across Google, Facebook, and industry platforms that builds trust, improves local SEO, and drives new customer decisions.',
  '["Automated review request sequences", "Multi-platform review management", "Negative review alerting and resolution", "Review widget integration", "Response management assistance"]'::jsonb,
  '["Increase conversion rates by 18%", "Improve local search rankings", "Build trust with new prospects", "Identify and resolve issues quickly", "Automate reputation management"]'::jsonb,
  '["Local service businesses", "Multi-location franchises", "E-commerce brands building trust", "Healthcare and professional services"]'::jsonb,
  true
),
(
  'Marketing Analytics Dashboard',
  'marketing',
  'Centralized reporting with live KPI and ROI visibility.',
  'Make data-driven decisions confidently with all your marketing metrics in one beautiful dashboard. Real-time visibility into what''s working, what''s not, and exactly where to focus resources for maximum ROI.',
  '["Unified cross-platform analytics", "Real-time performance tracking", "Custom KPI monitoring", "Automated reporting", "Visual data presentation"]'::jsonb,
  '["Make faster, better decisions", "Identify winning channels instantly", "Eliminate reporting busywork", "Prove marketing ROI clearly", "Spot issues before they cost money"]'::jsonb,
  '["Agencies reporting to clients", "Marketing teams tracking performance", "Business owners wanting clarity", "Multi-channel marketing campaigns"]'::jsonb,
  true
);

-- AI & AUTOMATION SUITE
INSERT INTO services (name, category, description, detailed_description, features, benefits, use_cases, is_active) VALUES
(
  'AI Growth Engine',
  'ai_automation',
  'All-in-one system that captures leads, calls instantly, follows up, and books meetings automatically.',
  'The complete AI-powered growth system that never sleeps. Captures leads from any source, responds instantly, qualifies through intelligent conversation, follows up persistently, and books meetings directly to your calendar — all without human intervention.',
  '["Instant lead capture and response", "AI-powered qualification", "Automated follow-up sequences", "Calendar booking integration", "CRM sync and data management"]'::jsonb,
  '["Respond to leads in under 60 seconds", "Convert 30-40% more leads", "Never miss a follow-up again", "Qualify before they hit your calendar", "Scale lead handling without hiring"]'::jsonb,
  '["High-volume lead generation businesses", "Service businesses with complex scheduling", "Sales teams drowning in manual follow-up", "Agencies scaling client acquisition"]'::jsonb,
  true
),
(
  'AI Chatbot',
  'ai_automation',
  'Conversational assistant that books appointments, qualifies leads, and handles FAQs on website or social.',
  'An AI assistant that represents your brand 24/7, answering questions, qualifying leads, and booking meetings while you focus on closing deals. Intelligent, conversational, and trained specifically on your business.',
  '["24/7 instant response capability", "Intelligent lead qualification", "Automatic appointment booking", "Multi-language support", "Custom training on your business"]'::jsonb,
  '["Never lose a lead to slow response", "Qualify prospects automatically", "Reduce support workload by 70%", "Book meetings while you sleep", "Scale customer interaction infinitely"]'::jsonb,
  '["High-traffic websites needing instant response", "Service businesses booking appointments", "E-commerce handling product questions", "Global businesses serving multiple timezones"]'::jsonb,
  true
),
(
  'AI Receptionist',
  'ai_automation',
  'Voice agent that handles inbound calls, qualifies prospects, and routes them intelligently.',
  'Never miss a call again with an AI voice agent that sounds human, understands context, qualifies callers, and routes them intelligently to the right team member or books appointments directly — all while you focus on revenue-generating activities.',
  '["Natural voice conversation", "Intelligent call routing", "Appointment booking capability", "Call qualification and scoring", "After-hours coverage"]'::jsonb,
  '["Answer 100% of inbound calls", "Qualify before taking your time", "Professional 24/7 presence", "Reduce admin workload drastically", "Never lose business to voicemail"]'::jsonb,
  '["Service businesses with high call volume", "Medical and professional practices", "Real estate agents always on the go", "Small businesses without full-time reception"]'::jsonb,
  true
),
(
  'Lead Reactivation System',
  'ai_automation',
  'Revives old leads through human-like voice and text campaigns for revenue recovery.',
  'Turn dead leads into revenue. Automated AI-powered voice and text outreach that revives cold prospects with human-like conversation, identifies renewed interest, and books appointments with leads you''ve already paid to acquire.',
  '["AI voice calling campaigns", "SMS follow-up sequences", "Human-like conversation flow", "Interest detection and scoring", "Automated booking for interested leads"]'::jsonb,
  '["Recover 10-15% of dead leads", "Maximize ROI on past ad spend", "Generate revenue from existing assets", "No additional acquisition cost", "Automated persistent follow-up"]'::jsonb,
  '["High-ticket sales with long decision cycles", "Service businesses with aging lead lists", "Real estate with old prospect databases", "B2B with complex nurture needs"]'::jsonb,
  true
),
(
  'AI Content Generator',
  'ai_automation',
  'On-brand copy, blogs, and captions built by AI trained on your tone.',
  'Generate weeks of on-brand content in minutes. AI trained specifically on your brand voice creates social posts, blogs, emails, and ad copy — with human oversight and approval. Never face blank page syndrome again.',
  '["Brand voice training and learning", "Multi-format content generation", "Built-in approval workflow", "SEO optimization integration", "Content calendar integration"]'::jsonb,
  '["Create 30 days of content in under an hour", "Maintain consistent brand voice", "Never miss posting deadlines", "Professional quality at scale", "Free up creative time for strategy"]'::jsonb,
  '["Social media managers juggling clients", "Brands maintaining consistent presence", "Marketing teams with limited resources", "Agencies scaling content production"]'::jsonb,
  true
),
(
  'AI Customer Support',
  'ai_automation',
  '24/7 AI trained on your FAQs to handle 70%+ of customer inquiries instantly.',
  'Deliver instant, accurate support at any hour without expanding your team. AI trained on your knowledge base handles common inquiries, escalates complex issues intelligently, and keeps customers happy while reducing support costs dramatically.',
  '["24/7 instant response", "Knowledge base training", "Intelligent escalation", "Multi-channel support (email, chat, social)", "Continuous learning from interactions"]'::jsonb,
  '["Reduce support costs by 60%", "Handle 70%+ of inquiries automatically", "Instant resolution improves satisfaction", "Scale support without hiring", "Team focuses on complex issues only"]'::jsonb,
  '["SaaS with repetitive support questions", "E-commerce handling order inquiries", "Service businesses answering FAQs", "Apps with growing user bases"]'::jsonb,
  true
),
(
  'AI Business Audit',
  'ai_automation',
  'A deep dive into your workflows to identify where AI can replace repetitive tasks.',
  'Comprehensive analysis of your operations to uncover automation opportunities you didn''t know existed. We map your workflows, identify bottlenecks, and deliver a prioritized roadmap showing exactly where AI can save time and money.',
  '["Complete workflow mapping", "Automation opportunity identification", "ROI projection for each opportunity", "Prioritized implementation roadmap", "Tool and platform recommendations"]'::jsonb,
  '["Clear picture of automation potential", "Prioritized by ROI and ease", "Avoid expensive automation mistakes", "Roadmap for systematic improvement", "Typically identifies 20-40 hours/week savings"]'::jsonb,
  '["Growing businesses hitting operational limits", "Teams drowning in manual processes", "Companies considering AI but unsure where to start", "Operations leaders seeking efficiency gains"]'::jsonb,
  true
),
(
  'Custom AI Workflows',
  'ai_automation',
  'Tailored automations integrating CRMs, analytics, and operations into seamless flows.',
  'Eliminate repetitive tasks that drain your team''s productivity. Custom AI automation that connects your tools, streamlines workflows, and multiplies output without adding headcount. Tailored specifically to your business operations.',
  '["Custom workflow design", "Multi-tool integration", "Intelligent decision logic", "Error handling and notifications", "Ongoing optimization and refinement"]'::jsonb,
  '["Reclaim 20+ hours per week per team member", "Reduce human error to near zero", "Scale operations without hiring", "ROI typically within 60 days", "Seamless integration with existing tools"]'::jsonb,
  '["Data entry and system syncing", "Report generation and distribution", "Client onboarding automation", "Invoice and payment processing"]'::jsonb,
  true
);

-- WEB & SYSTEM DEVELOPMENT
INSERT INTO services (name, category, description, detailed_description, features, benefits, use_cases, is_active) VALUES
(
  'Website Design & Development',
  'web_development',
  'Fast, responsive, conversion-driven websites that elevate brand experience.',
  'More than just a website — a conversion engine. Beautiful, fast, mobile-optimized sites built with user psychology and business goals in mind. Every element designed to guide visitors toward action while building trust and showcasing your brand.',
  '["Conversion-focused design", "Mobile-first responsive build", "Lightning-fast page speeds", "SEO technical optimization", "Content management system"]'::jsonb,
  '["Convert 2-3x more visitors", "Rank higher in search results", "Professional credibility instantly", "Own your digital presence", "Update content without developers"]'::jsonb,
  '["Service businesses establishing online presence", "E-commerce stores launching or redesigning", "B2B companies generating leads", "Agencies building client sites"]'::jsonb,
  true
),
(
  'App Development',
  'web_development',
  'Scalable mobile app design for iOS and Android with seamless UX.',
  'Native mobile experiences that users love. Beautiful, intuitive apps for iOS and Android built with scalability, performance, and user retention in mind. From concept to App Store, we handle the entire journey.',
  '["Native iOS and Android development", "Intuitive UX design", "Backend infrastructure", "App Store optimization", "Push notification integration"]'::jsonb,
  '["Own direct customer relationship", "Higher engagement than web", "Revenue through app monetization", "Push notification marketing power", "Premium brand positioning"]'::jsonb,
  '["Startups building their MVP", "Established brands going mobile", "Service businesses improving customer experience", "E-commerce enhancing mobile shopping"]'::jsonb,
  true
),
(
  'Custom Dashboard Systems',
  'web_development',
  'Visual dashboards for live marketing, sales, and performance insights.',
  'Make sense of your data with beautiful custom dashboards that turn complex metrics into clear insights. Real-time visibility into what matters most to your business, accessible from anywhere, designed specifically for your needs.',
  '["Real-time data visualization", "Custom metric tracking", "Role-based access control", "Automated data integration", "Mobile-responsive interface"]'::jsonb,
  '["Make faster, better decisions", "Spot trends and issues instantly", "Eliminate manual reporting", "Team alignment on key metrics", "Professional client reporting"]'::jsonb,
  '["Agencies reporting to clients", "Operations teams tracking performance", "Sales managers monitoring pipelines", "Executive teams wanting clarity"]'::jsonb,
  true
),
(
  'CRM & ERP Development',
  'web_development',
  'End-to-end system design to automate operations and client management.',
  'Custom-built systems that fit your exact business process, not force-fit solutions that create workarounds. Complete CRM and ERP development that automates operations, manages clients seamlessly, and scales with your growth.',
  '["Custom workflow automation", "Client lifecycle management", "Team collaboration features", "Reporting and analytics", "Third-party integrations"]'::jsonb,
  '["Perfect fit for your process", "Eliminate software subscription costs", "Competitive advantage through proprietary systems", "Scale infinitely without per-user fees", "Own your operational data"]'::jsonb,
  '["Growing companies outgrowing off-shelf tools", "Unique business models needing custom solutions", "Agencies managing complex client workflows", "Operations teams seeking efficiency"]'::jsonb,
  true
),
(
  'Landing Page Optimization',
  'web_development',
  'CRO-optimized pages with A/B testing and analytics integration.',
  'Turn traffic into customers with landing pages engineered for conversion. Data-driven design combining psychology, copywriting, and continuous testing to maximize ROI from every visitor. Every element optimized for action.',
  '["Conversion-focused design", "A/B testing framework", "Heatmap and behavior tracking", "Fast-loading performance", "Mobile optimization"]'::jsonb,
  '["Double or triple conversion rates", "Lower cost per acquisition", "Data proves what works", "Fast iteration and improvement", "Maximize ROI on traffic sources"]'::jsonb,
  '["Paid ad campaigns needing better ROI", "Product launches and pre-sales", "Lead generation for services", "Webinar and event signups"]'::jsonb,
  true
),
(
  'E-Commerce Development',
  'web_development',
  'Storefronts that blend aesthetics, conversion science, and automation.',
  'Complete e-commerce solutions that sell. Beautiful storefronts built on proven platforms, optimized for conversion, and automated for efficiency. From product pages to checkout, every touchpoint engineered to maximize revenue and customer lifetime value.',
  '["Platform selection and setup", "Conversion-optimized product pages", "Abandoned cart recovery", "Payment and shipping integration", "Inventory management automation"]'::jsonb,
  '["Sell 24/7 without manual work", "Lower cart abandonment rates", "Professional brand positioning", "Automated backend operations", "Scale revenue without proportional work"]'::jsonb,
  '["Product brands launching online", "Retail businesses expanding online", "Dropshippers building stores", "Wholesalers adding D2C channel"]'::jsonb,
  true
);
