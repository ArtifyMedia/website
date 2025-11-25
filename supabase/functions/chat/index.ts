import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  sessionId: string;
  message: string;
  history?: ChatMessage[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { sessionId, message, history = [] }: ChatRequest = await req.json();

    if (!sessionId || !message) {
      return new Response(
        JSON.stringify({ error: "sessionId and message are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // System prompt for Artify AI
    const systemPrompt = `You are Artify AI, an intelligent assistant for Artify Media - a creative and automation agency that blends cinematic storytelling with AI-powered business solutions.

Your role:
1. Engage warmly and professionally
2. Ask diagnostic questions to understand their needs
3. Identify if they need: Creative (video/photo), Marketing (ads/SEO), AI (automation/agents), or Multiple services
4. Recommend specific solutions from our offerings
5. Guide them to book a free audit or connect on WhatsApp

Our Services:
- CREATIVE: Automotive films, real estate visuals, luxury brand ads, cinematography
- MARKETING: Paid ads (Google/Meta/TikTok), SEO, web design, landing pages, email marketing, CRM setup
- AI SUITE: AI Receptionist, Outbound AI Agent, Lead Reactivation, AI Audit, Custom Automations

Keep responses concise (2-3 sentences), friendly, and action-oriented. Always end with a question or clear next step.`;

    // Build conversation history
    const messages = [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: message },
    ];

    // Call OpenAI API (or use a simple rule-based response for now)
    // For production, you'd integrate with OpenAI here
    const aiResponse = generateResponse(message, history);

    const response = {
      message: aiResponse,
      sessionId,
      timestamp: new Date().toISOString(),
    };

    return new Response(JSON.stringify(response), {
      headers: {
        ...corsHeaders,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat message" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

// Simple rule-based response generator
function generateResponse(message: string, history: ChatMessage[]): string {
  const lowerMessage = message.toLowerCase();
  
  // First message - welcome
  if (history.length === 0) {
    if (lowerMessage.includes("lead") || lowerMessage.includes("conversion") || lowerMessage.includes("booking")) {
      return "That's a common challenge - getting leads but low conversions often means there's a speed or follow-up gap. Our AI Outbound Agent can call and text leads instantly, 24/7. Would you like to see how it works, or should we schedule a free audit to diagnose your specific situation?";
    }
    if (lowerMessage.includes("video") || lowerMessage.includes("film") || lowerMessage.includes("creative")) {
      return "Excellent! We specialize in cinematic storytelling for luxury brands, automotive, and real estate. What type of project are you looking to create? Is it for a product launch, brand awareness, or a specific campaign?";
    }
    if (lowerMessage.includes("marketing") || lowerMessage.includes("ads") || lowerMessage.includes("seo")) {
      return "Great! We offer full-spectrum digital marketing from paid ads to SEO and CRM automation. What's your biggest challenge right now - getting more traffic, improving conversions, or managing leads better?";
    }
    if (lowerMessage.includes("ai") || lowerMessage.includes("automat") || lowerMessage.includes("agent")) {
      return "Perfect timing! Our AI Suite includes Outbound Agents, AI Receptionists, Lead Reactivation systems, and custom automations. What specific process would you like to automate or improve?";
    }
    return "Thanks for reaching out! To help you best, could you tell me what challenge you're trying to solve? For example: getting more leads, improving conversions, creating better content, or automating repetitive tasks?";
  }
  
  // Follow-up responses
  if (lowerMessage.includes("audit") || lowerMessage.includes("free") || lowerMessage.includes("yes")) {
    return "Perfect! I'd love to set up your free audit. The best way forward is to either:\n\n📱 WhatsApp us directly at [your number] for instant response\n📅 Or book a 15-min call at [your booking link]\n\nWhich works better for you?";
  }
  
  if (lowerMessage.includes("how") || lowerMessage.includes("work") || lowerMessage.includes("demo")) {
    return "Great question! We typically start with a free 15-minute audit where we analyze your current setup, identify gaps, and show you exactly what we'd implement. No pressure, just clarity. Want to schedule that now?";
  }
  
  if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("investment")) {
    return "Our pricing is customized based on your specific needs and scale. Most clients see ROI within 30-60 days. The best way to get an accurate quote is through our free audit call where we can understand your goals and recommend the right package. Should we schedule that?";
  }
  
  // Default response
  return "I'd love to help you with that! The quickest way to get specific answers and a custom solution is to connect with our team directly. Would you prefer to WhatsApp us or book a quick 15-minute call?";
}
