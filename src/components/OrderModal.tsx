import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderNumber: string;
}

export default function OrderModal({ isOpen, onClose, orderNumber }: OrderModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-md z-[200]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-cream p-8 rounded-[3rem] z-[201] shadow-2xl text-center border-4 border-white"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-charcoal/20 hover:text-charcoal transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-20 h-20 bg-primary text-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/20">
              <CheckCircle2 size={40} />
            </div>

            <h3 className="text-3xl font-black italic tracking-tighter mb-2">MAMMA MIA!</h3>
            <p className="text-charcoal/60 text-sm mb-8 italic">Your artisanal pizza is being fired up.</p>

            <div className="bg-white p-6 rounded-2xl border border-charcoal/5 space-y-4 mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-charcoal/40 mb-1">Order Ref</p>
                <p className="font-mono font-bold text-lg text-primary">{orderNumber}</p>
              </div>
              <div className="pt-4 border-t border-charcoal/5">
                <p className="text-xs font-bold uppercase tracking-widest mb-1">Delivery Time</p>
                <p className="text-xl font-black">30 - 45 MINS</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-charcoal text-cream py-4 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-lg hover:bg-primary transition-all active:scale-95"
            >
              Infornata!
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
