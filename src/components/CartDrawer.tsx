import { X, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { LiquidButton } from './ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartDrawer({ isOpen, onClose, onCheckout }: CartDrawerProps) {
  const { cartItems, removeFromCart, updateCartItemNotes, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white border-l border-[#ccff00]/20 z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-6 h-6 text-[#ccff00]" />
            <h2 className="text-2xl font-bold text-gray-900">Your Wishlist</h2>
            {cartCount > 0 && (
              <span className="bg-[#ccff00] text-black text-sm font-bold px-2 py-1 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">Nothing here yet!</p>
              <p className="text-gray-600 text-sm mt-2">Add some services and let's make magic happen</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 hover:border-[#ccff00]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-gray-900 font-semibold mb-1">
                        {item.service.name}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {item.service.category.replace('_', ' ').toUpperCase()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <textarea
                    value={item.notes}
                    onChange={(e) => updateCartItemNotes(item.id, e.target.value)}
                    placeholder="Tell us what you're dreaming up for this service..."
                    className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#ccff00]/50 focus:ring-1 focus:ring-[#ccff00]/20 transition-all resize-none"
                    rows={3}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="mb-4 text-center">
              <p className="text-gray-600 text-sm">
                {cartCount} {cartCount === 1 ? 'awesome service' : 'awesome services'} ready to rock
              </p>
            </div>
            <LiquidButton
              variant="primary"
              onClick={onCheckout}
              className="w-full"
            >
              Let's Talk Business! <ArrowRight className="w-5 h-5 ml-2" />
            </LiquidButton>
            <p className="text-xs text-gray-600 text-center mt-3">
              We'll cook up custom pricing just for you
            </p>
          </div>
        )}
      </div>
    </>
  );
}
