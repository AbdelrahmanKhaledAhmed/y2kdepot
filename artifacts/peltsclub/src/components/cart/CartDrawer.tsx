import { useLocation } from 'wouter';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/lib/cart';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, total } = useCart();
  const [, navigate] = useLocation();

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] z-50 bg-[#0a0a0a] border-l border-[#222] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#222]">
              <h2 className="text-2xl font-serif text-white tracking-wide">YOUR BAG</h2>
              <button onClick={closeCart} className="text-white p-1 hover:text-[#c0c0c0] transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-[#666]">
                  <ShoppingBag className="w-12 h-12 mb-4 opacity-40" />
                  <p className="tracking-widest text-sm">YOUR BAG IS EMPTY</p>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-20 h-24 bg-[#111] border border-[#222] overflow-hidden flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-bold tracking-wider text-white mb-1">{item.name}</h3>
                          <p className="text-[#999999] text-sm tracking-widest">{item.price} EGP</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#333]">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="p-1.5 text-white hover:bg-[#222] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-sm text-white">{item.qty}</span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              className="p-1.5 text-white hover:bg-[#222] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-[#666] hover:text-white tracking-widest transition-colors"
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-[#222]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm tracking-widest text-[#999999]">SUBTOTAL</span>
                  <span className="text-lg font-bold text-white">{total} EGP</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-white text-black py-4 font-bold tracking-[0.2em] text-sm hover:bg-[#c0c0c0] transition-colors"
                >
                  CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
