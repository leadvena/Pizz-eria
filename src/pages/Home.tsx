import { ArrowRight, Utensils, Smartphone, Truck, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
import SEOMetadata from '../components/SEOMetadata';
import PizzaCard from '../components/PizzaCard';
import { MENU_DATA } from '../data/menu';

export default function Home() {
  const featuredPizzas = MENU_DATA.filter((item) => 
    ['margherita', 'pepperoni', 'truffle-mushroom'].includes(item.id)
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <SEOMetadata 
        title="Home" 
        description="Pizzeria - Handcrafted Wood-fired Pizza. Order online for the best Neapolitan pizza in town. Delivered hot and fresh. Owned and operated by Chef Kermit."
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-charcoal overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1920"
            alt="Wood-fired Pizza"
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        </div>

        {/* Decorative Circle from Design HTML */}
        <div className="absolute -right-20 top-0 opacity-10 pointer-events-none hidden lg:block">
          <div className="w-[600px] h-[600px] border-[60px] border-dashed border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-cream">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl space-y-6"
          >
            <span className="text-gold font-serif italic text-2xl mb-2 block">Authentically Neapolitan</span>
            <h1 className="text-7xl md:text-9xl font-serif font-black uppercase leading-[0.85] tracking-tight">
              HANDCRAFTED.<br />
              WOOD-FIRED.<br />
              <span className="text-primary italic">UNFORGETTABLE.</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 font-black uppercase text-sm tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center gap-3 group cursor-pointer"
              >
                Order Online
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-transparent hover:bg-white hover:text-charcoal border border-white/30 text-white px-10 py-4 font-black uppercase text-sm tracking-[0.2em] transition-all flex items-center justify-center cursor-pointer"
              >
                View Menu
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Chef's Recommendations</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                POPULAR <span className="text-primary italic">PIZZAS.</span>
              </h2>
            </div>
            <button 
              onClick={() => scrollToSection('menu')}
              className="group flex items-center gap-3 text-charcoal font-bold uppercase tracking-widest text-sm border-b-2 border-primary pb-2 cursor-pointer"
            >
              View Full Menu
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} item={pizza} />
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-charcoal text-cream relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <p className="text-gold font-bold uppercase tracking-widest text-sm italic">Fresh to your door</p>
            <h2 className="text-5xl md:text-6xl font-black">HOW IT <span className="italic text-primary">WORKS?</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Smartphone />, title: "Choose Your Fuel", desc: "Select from our range of handcrafted artisanal pizzas and pastas." },
              { icon: <Utensils />, title: "We Fire the Oven", desc: "Our chefs prepare your order with fresh ingredients and fire it to perfection." },
              { icon: <Truck />, title: "Express Delivery", desc: "We rush to your location within 30-45 minutes while the crust is still crispy." }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center space-y-6 group"
              >
                <div className="w-20 h-20 bg-primary flex items-center justify-center rounded-2xl mx-auto rotate-3 group-hover:rotate-12 transition-transform border border-gold/30">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{step.title}</h3>
                <p className="text-cream/60 leading-relaxed max-w-xs mx-auto font-light">{step.desc}</p>
                <div className="text-gold font-mono text-4xl opacity-10 font-black">0{idx + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-primary font-bold uppercase tracking-widest text-sm">Customer Stories</p>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter">WHAT THEY <span className="text-primary italic">SAY.</span></h2>
              <p className="text-lg text-charcoal/70 leading-relaxed italic">
                "The smoke from the wood-fire oven is evident in every bite. This isn't just pizza; it's an experience. The crust has that perfect airy crunch that you only find in Napoli."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-charcoal rounded-full overflow-hidden">
                  <img src="https://i.pravatar.cc/100?u=1" alt="Avatar" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">Marco Rossi</p>
                  <p className="text-xs text-charcoal/40 italic">Food Critic, Manila Times</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-charcoal/5">
                  <Star className="text-gold mb-4" fill="currentColor" size={16} />
                  <p className="text-sm italic mb-4">"Hands down the best Truffle Pizza in Metro Manila. Fast delivery too!"</p>
                  <p className="text-xs font-bold uppercase">Elena Q.</p>
                </div>
                <div className="bg-charcoal text-cream p-6 rounded-3xl shadow-2xl">
                  <Star className="text-gold mb-4" fill="currentColor" size={16} />
                  <p className="text-sm italic mb-4">"The dough is spectacular. Light, fresh, and perfectly charred."</p>
                  <p className="text-xs font-bold uppercase">Juan D.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-primary text-cream p-6 rounded-3xl shadow-xl">
                  <Star className="text-white mb-4" fill="currentColor" size={16} />
                  <p className="text-sm italic mb-4">"Finally, a place that knows how to make a proper Margherita."</p>
                  <p className="text-xs font-bold uppercase">Sofia L.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-charcoal/5">
                  <Star className="text-gold mb-4" fill="currentColor" size={16} />
                  <p className="text-sm italic mb-4">"The delivery arrived in 25 mins and it was still steaming hot!"</p>
                  <p className="text-xs font-bold uppercase">Paolo M.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Area Callout */}
      <section className="bg-charcoal py-12 border-y border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-cream/20 text-3xl font-black italic tracking-tighter uppercase uppercase italic">FREE DELIVERY WITHIN METRO MANILA</span>
              <Star className="text-primary fill-primary" size={24} />
              <span className="text-cream/20 text-3xl font-black italic tracking-tighter uppercase uppercase italic">30-45 MINS OR IT'S ON THE CHEF</span>
              <Star className="text-primary fill-primary" size={24} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
