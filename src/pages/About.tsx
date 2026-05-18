import { motion } from 'motion/react';
import SEOMetadata from '../components/SEOMetadata';
import { Heart, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-cream py-24">
      {/* Hero / Story */}
      <section className="pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl"></div>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://www.shutterstock.com/image-photo/kermit-frog-staring-out-rainy-260nw-2652037967.jpg" 
                alt="Our Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-3xl -rotate-12 flex items-center justify-center p-8 text-cream shadow-2xl z-20">
              <p className="text-3xl font-black italic tracking-tighter leading-none">THE SECRET IS IN THE SMOKE.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Since 2012</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">OUR <span className="text-primary italic">STORY.</span></h1>
            <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed font-light">
              <p>
                It started in a small backyard in Metro Manila with a handmade clay oven and a single mission: to create the perfect Neapolitan crust. Our founder, Chef Kermit, spent years perfecting the 48-hour fermentation process that gives our dough its signature lightness and "leopard spot" char.
              </p>
              <p>
                Today, Pizzeria has grown into a beloved local destination for those who appreciate the finer details of pizza-making. We don't cut corners. We don't use electric ovens. Every pizza that leaves our kitchen has been kissed by the flames of sustainable oak wood.
              </p>
              <p className="font-serif italic font-bold text-charcoal">
                "We aren't just making dinner. We're continuing a tradition that survived centuries."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 text-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <p className="text-gold font-bold uppercase tracking-widest text-sm">What drives us</p>
            <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter">OUR <span className="text-primary">CORE VALUES.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart fill="currentColor" />,
                title: "Passion for Freshness",
                desc: "We source our tomatoes from San Marzano and our flour from the finest mills in Italy. Local, organic produce whenever possible."
              },
              {
                icon: <ShieldCheck fill="currentColor" />,
                title: "Authentic Tradition",
                desc: "No conveyor belts. No rolling pins. Every dough is hand-stretched and fired in 900-degree stone ovens."
              },
              {
                icon: <Zap fill="currentColor" />,
                title: "Lightning Fast",
                desc: "Baked in 90 seconds, delivered in 45 minutes. We believe that distance shouldn't compromise the perfect crunch."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-primary w-12 h-12 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight">{value.title}</h3>
                <p className="text-cream/60 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <p className="text-primary font-bold uppercase tracking-widest text-sm">Meet the Squad</p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">LOCO FOR <span className="text-primary italic">LOCAL.</span></h2>
          </div>
          <p className="text-charcoal/60 max-w-xs font-light italic">
            Our team is a diverse family of pizzaiolos, delivery legends, and hospitality experts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { role: "Strategist", img: "https://i.imgflip.com/307v6f.jpg" },
            { role: "Order Flow", img: "https://i.imgflip.com/1v67q3.jpg" },
            { role: "Head Chef", img: "https://i.imgflip.com/1otk96.jpg" },
            { role: "Delivery Hero", img: "https://i.imgflip.com/3vdyk3.jpg" }
          ].map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98, rotate: i % 2 === 0 ? 1 : -1 }}
              className="group aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white relative bg-white"
            >
              <img src={member.img} alt={member.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <p className="text-white font-black uppercase text-[10px] tracking-widest text-center">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
