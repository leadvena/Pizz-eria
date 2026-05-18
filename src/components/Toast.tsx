import { CheckCircle2, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-charcoal text-cream px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-primary/20 backdrop-blur-md"
          >
            <div className="bg-primary/20 text-primary p-2 rounded-full">
              <CheckCircle2 size={20} />
            </div>
            <p className="font-bold tracking-tight text-sm">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/639123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageSquare size={28} />
        <span className="absolute right-full mr-4 bg-white text-charcoal px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Order via WhatsApp
        </span>
      </a>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
