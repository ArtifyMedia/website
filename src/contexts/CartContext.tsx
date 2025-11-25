import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabase';

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  detailed_description: string;
  features: string[];
  benefits: string[];
  use_cases: string[];
  is_active: boolean;
}

interface CartItem {
  id: string;
  service: Service;
  notes: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (service: Service, notes?: string) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  updateCartItemNotes: (itemId: string, notes: string) => Promise<void>;
  clearCart: () => Promise<void>;
  cartCount: number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getSessionId() {
  let sessionId = localStorage.getItem('cart_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('cart_session_id', sessionId);
  }
  return sessionId;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const updateTimeoutRef = useRef<Record<string, NodeJS.Timeout>>({});

  const sessionId = getSessionId();

  const loadCart = async () => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          id,
          notes,
          service:services(*)
        `)
        .eq('session_id', sessionId);

      if (error) throw error;

      const formattedItems = data?.map(item => ({
        id: item.id,
        service: item.service as unknown as Service,
        notes: item.notes || ''
      })) || [];

      setCartItems(formattedItems);
    } catch (error) {
      console.error('Error loading cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (service: Service, notes: string = '') => {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .insert({
          session_id: sessionId,
          service_id: service.id,
          notes
        })
        .select(`
          id,
          notes,
          service:services(*)
        `)
        .single();

      if (error) throw error;

      const newItem: CartItem = {
        id: data.id,
        service: data.service as unknown as Service,
        notes: data.notes || ''
      };

      setCartItems(prev => [...prev, newItem]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

      setCartItems(prev => prev.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartItemNotes = async (itemId: string, notes: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, notes } : item
      )
    );

    if (updateTimeoutRef.current[itemId]) {
      clearTimeout(updateTimeoutRef.current[itemId]);
    }

    updateTimeoutRef.current[itemId] = setTimeout(async () => {
      try {
        const { error } = await supabase
          .from('cart_items')
          .update({ notes, updated_at: new Date().toISOString() })
          .eq('id', itemId);

        if (error) throw error;
      } catch (error) {
        console.error('Error updating cart item:', error);
      }
    }, 500);
  };

  const clearCart = async () => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('session_id', sessionId);

      if (error) throw error;

      setCartItems([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemNotes,
        clearCart,
        cartCount,
        isLoading
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
