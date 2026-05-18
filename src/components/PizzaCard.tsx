import { ShoppingCart, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useCart, PizzaSize } from '../context/CartContext';
import { MenuItem, SIZE_MULTIPLIERS } from '../data/menu';
import { useToast } from './Toast';
import { cn } from '../lib/utils';
import { useState } from 'react';

interface PizzaCardProps {
  item: MenuItem;
}

export default function PizzaCard({ item }: PizzaCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('Medium');

  const currentPrice = Math.round(item.basePrice * SIZE_MULTIPLIERS[selectedSize]);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: currentPrice,
      size: selectedSize,
      image: item.image,
    });
    showToast(`Added ${item.name} (${selectedSize}) to cart ✓`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-5 border-l-4 border-primary shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
    >
      <div className="w-full h-32 bg-cream mb-6 overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 right-2 text-[10px] bg-gold text-charcoal px-2 py-0.5 font-bold uppercase tracking-widest shadow-sm">
          {item.id === 'truffle-mushroom' ? 'Premium' : 'Classic'}
        </div>
      </div>

      <div className="space-y-4 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold font-serif italic">{item.name}</h3>
        </div>

        <p className="text-gray-500 text-xs leading-relaxed flex-1">
          {item.description}
        </p>

        {item.category === 'Pizzas' && (
          <div className="flex bg-cream p-1 rounded-sm gap-1">
            {(['Small', 'Medium', 'Large'] as PizzaSize[]).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={cn(
                  'flex-1 py-1 text-[10px] font-bold uppercase tracking-wider transition-all',
                  selectedSize === size
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/40 hover:text-charcoal hover:bg-white'
                )}
              >
                {size[0]}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-charcoal/5">
          <span className="font-bold text-charcoal font-mono">
            ₱{currentPrice.toLocaleString()}
          </span>
          <button
            onClick={handleAdd}
            className="text-[10px] font-bold uppercase bg-charcoal text-white px-4 py-2 hover:bg-primary transition-all active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
