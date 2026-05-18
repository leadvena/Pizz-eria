import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SEOMetadata from '../components/SEOMetadata';
import PizzaCard from '../components/PizzaCard';
import { MENU_DATA } from '../data/menu';
import { cn } from '../lib/utils';
import { Utensils, Pizza, Coffee, Cherry } from 'lucide-react';

type Category = 'Pizzas' | 'Pasta' | 'Drinks' | 'Desserts';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>('Pizzas');

  const categories = [
    { id: 'Pizzas', icon: <Pizza size={18} /> },
    { id: 'Pasta', icon: <Utensils size={18} /> },
    { id: 'Drinks', icon: <Coffee size={18} /> },
    { id: 'Desserts', icon: <Cherry size={18} /> },
  ];

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm italic">Selection of the Day</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">OUR <span className="text-primary italic">MENU.</span></h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={cn(
                "px-5 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                activeCategory === cat.id
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-white text-charcoal/40 border-charcoal/10 hover:border-charcoal/30 hover:text-charcoal"
              )}
            >
              {cat.id}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PizzaCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Diet Info */}
        <div className="mt-24 p-12 bg-charcoal rounded-[3rem] text-cream flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-lg space-y-4">
            <h3 className="text-3xl font-black italic tracking-tighter">Dietary Requirements?</h3>
            <p className="text-cream/60 font-light leading-relaxed">
              We offer gluten-free crusts and vegan cheese options for all our pizzas. Just select the option in your cart or leave a note during checkout. Our kitchen follows strict cross-contamination protocols.
            </p>
          </div>
          
          <div className="relative z-10 flex gap-6">
            <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <p className="text-gold font-black text-2xl font-mono tracking-tighter">GF</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Gluten Free</p>
            </div>
            <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <p className="text-gold font-black text-2xl font-mono tracking-tighter">VG</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Vegan</p>
            </div>
            <div className="text-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <p className="text-gold font-black text-2xl font-mono tracking-tighter">DF</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Dairy Free</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
