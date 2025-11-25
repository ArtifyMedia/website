import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function useChat() {
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initSession = async () => {
      const storedSessionId = sessionStorage.getItem('artify_session_id');

      if (storedSessionId) {
        setSessionId(storedSessionId);
        await loadMessages(storedSessionId);
      } else {
        const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const urlParams = new URLSearchParams(window.location.search);
        const { error } = await supabase.from('sessions').insert({
          session_id: newSessionId,
          utm_source: urlParams.get('utm_source'),
          utm_medium: urlParams.get('utm_medium'),
          utm_campaign: urlParams.get('utm_campaign'),
        });

        if (!error) {
          setSessionId(newSessionId);
          sessionStorage.setItem('artify_session_id', newSessionId);
        }
      }
    };

    initSession();
  }, []);

  const loadMessages = async (sid: string) => {
    const { data: session } = await supabase
      .from('sessions')
      .select('id')
      .eq('session_id', sid)
      .maybeSingle();

    if (session) {
      const { data } = await supabase
        .from('messages')
        .select('role, content, created_at')
        .eq('session_id', session.id)
        .order('created_at', { ascending: true });

      if (data) {
        setMessages(
          data.map((m) => ({
            role: m.role as 'user' | 'assistant',
            content: m.content,
            timestamp: m.created_at,
          }))
        );
      }
    }
  };

  const sendMessage = useCallback(
    async (content: string) => {
      if (!sessionId || !content.trim()) return;

      setIsLoading(true);
      setError(null);

      const userMessage: Message = {
        role: 'user',
        content,
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);

      try {
        const { data: session } = await supabase
          .from('sessions')
          .select('id')
          .eq('session_id', sessionId)
          .maybeSingle();

        if (session) {
          await supabase.from('messages').insert({
            session_id: session.id,
            role: 'user',
            content,
          });

          await supabase
            .from('sessions')
            .update({ last_activity: new Date().toISOString() })
            .eq('id', session.id);
        }

        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            message: content,
            history: messages,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get response');
        }

        const data = await response.json();

        const assistantMessage: Message = {
          role: 'assistant',
          content: data.message,
          timestamp: data.timestamp,
        };

        setMessages((prev) => [...prev, assistantMessage]);

        if (session) {
          await supabase.from('messages').insert({
            session_id: session.id,
            role: 'assistant',
            content: data.message,
          });
        }
      } catch (err) {
        setError('Failed to send message. Please try again.');
        console.error('Chat error:', err);
      } finally {
        setIsLoading(false);
      }
    },
    [sessionId, messages]
  );

  return {
    messages,
    isLoading,
    error,
    sendMessage,
  };
}
