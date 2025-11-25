import { supabase } from '../lib/supabase';

export async function addFourSeasonsProject() {
  try {
    const { data, error } = await supabase
      .from('portfolio_items')
      .insert({
        title: 'Four Seasons Tunis - Luxury Hospitality Campaign',
        client: 'Four Seasons Hotels & Resorts',
        category: 'luxury',
        description: `Flying from Dubai to the heart of Africa, we partnered with Four Seasons Tunis to craft a cinematic showcase of their world-class hospitality. This 4-day production captured the essence of Mediterranean serenity — from ocean-view suites and spa indulgence to fine dining and private experiences that define the Four Seasons standard.

The $4,500 campaign was a testament to storytelling through detail — blending travel, culture, and luxury in one frame. Shot on Sony A7IV and A7C with Sigma Art & G-Master lenses, stabilized with professional gimbals, the film aimed to translate emotion through motion, elegance through light.

What began as a collaboration born from our UAE successes became a visual journey celebrating craftsmanship, culture, and cinematic hospitality.`,
        video_url: 'https://www.youtube.com/embed/NUY9Xh8a4DE?si=3w2nxkTGbAUonvTF',
        thumbnail_url: 'https://img.youtube.com/vi/NUY9Xh8a4DE/maxresdefault.jpg',
        duration: '4 days production',
        tags: [
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
        services_used: [
          'Luxury Brand Films',
          'Cinematic Production',
          'Travel Content Creation',
          'Hospitality Marketing',
          'Brand Storytelling'
        ],
        ai_enhanced: false,
        featured: true,
        order_index: 1,
        is_published: true
      })
      .select()
      .single();

    if (error) {
      console.error('Error inserting portfolio item:', error);
      return { success: false, error };
    }

    console.log('Successfully added Four Seasons project:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Exception adding portfolio item:', error);
    return { success: false, error };
  }
}