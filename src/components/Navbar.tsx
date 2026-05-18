import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 bg-charcoal text-white border-b border-gold',
        isScrolled ? 'py-3 shadow-2xl' : 'py-4'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-2xl font-black italic tracking-tighter flex items-center gap-2"
        >
          <span className="text-primary text-3xl">P</span>
          IZZERIA
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-semibold uppercase tracking-widest hover:text-gold transition-colors text-white"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-gold transition-colors"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-cream text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2"
          >
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-cream text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal overflow-hidden"
          >
            <div className="flex flex-col items-center py-12 gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xl font-bold uppercase tracking-[0.2em] hover:text-gold transition-colors text-white"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
