import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { useState } from 'react';
import OrderModal from './OrderModal';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const deliveryFee = 50;
  const total = cartTotal + (cart.length > 0 ? deliveryFee : 0);

  const handlePlaceOrder = () => {
    setIsOrdering(true);
    // Simulate order processing
    setTimeout(() => {
      const num = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(num);
      setIsOrdering(false);
      setIsModalOpen(true);
      setIsCartOpen(false);
      clearCart();
    }, 2000);
  };

  return (
    <>
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        orderNumber={orderNumber} 
      />
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-cream text-charcoal z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 bg-charcoal text-cream flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-gold" />
                  <h2 className="text-xl font-bold uppercase tracking-wider">Your Order</h2>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:rotate-90 transition-transform">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 cart-drawer-scrollbar">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center text-charcoal/40">
                    <ShoppingBag size={64} strokeWidth={1} className="mb-4" />
                    <p className="text-lg italic font-serif">Your cart is as empty as a<br />pizza box after a party.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.size}`} className="flex gap-4 group">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border border-charcoal/5">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-base">{item.name}</h4>
                              <p className="text-xs text-charcoal/60 uppercase tracking-widest">{item.size}</p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="text-charcoal/30 hover:text-primary p-1 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center gap-3 bg-white px-2 py-1 rounded-lg border border-charcoal/5">
                              <button
                                onClick={() => updateQuantity(item.id, item.size, -1)}
                                className="text-charcoal/50 hover:text-charcoal p-1"
                              >
                                <Minus size={14} />
                              </button>
                              <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.size, 1)}
                                className="text-charcoal/50 hover:text-charcoal p-1"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                            <p className="font-bold text-primary">₱{(item.price * item.quantity).toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 bg-charcoal text-white space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Total Amount</p>
                    <p className="text-3xl font-serif font-black">₱{total.toLocaleString()}</p>
                  </div>

                  <button
                    onClick={handlePlaceOrder}
                    disabled={isOrdering}
                    className={cn(
                      "w-full bg-primary py-4 font-black uppercase text-sm tracking-[0.2em] shadow-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3",
                      isOrdering && "opacity-80 pointer-events-none"
                    )}
                  >
                    {isOrdering ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Place My Order"
                    )}
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

