import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import SEOMetadata from '../components/SEOMetadata';
import { Send, MapPin, Phone, Mail, Instagram, MessageSquare } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Contact() {
  const { showToast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      showToast(" Grazie! We've received your message. ✓");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary font-bold uppercase tracking-[0.3em] text-sm italic">Get in Touch</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">SAY <span className="text-primary italic">CIAO.</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold font-serif italic">Let's talk about pizza. Or anything else.</h2>
              <p className="text-charcoal/60 font-light leading-relaxed">
                Whether you're looking for a catering partner, wanting to host a private event, or just have a question about our dough — we're here for it.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary text-cream flex items-center justify-center rounded-xl">
                  <MapPin size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Our Kitchen</h4>
                <p className="text-sm text-charcoal/70">123 Pizza Street, Artisanal District,<br />Metro Manila, PH</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary text-cream flex items-center justify-center rounded-xl">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Phone</h4>
                <p className="text-sm text-charcoal/70">+63 912 345 6789</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary text-cream flex items-center justify-center rounded-xl">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Email</h4>
                <p className="text-sm text-charcoal/70">ciao@pizzeria.com</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-primary text-cream flex items-center justify-center rounded-xl">
                  <Instagram size={20} />
                </div>
                <h4 className="font-bold uppercase tracking-widest text-xs">Socials</h4>
                <p className="text-sm text-charcoal/70">@pizzeria_artisanal</p>
              </div>
            </div>

            {/* Quick Action Button for Mobile */}
            <a 
              href="https://wa.me/639123456789" 
              className="flex items-center justify-between p-6 bg-charcoal text-cream rounded-[2rem] shadow-2xl group transition-all hover:bg-primary"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-widest text-sm">Chat on WhatsApp</p>
                  <p className="text-[10px] opacity-40 uppercase tracking-tighter">Instant responses during kitchen hours</p>
                </div>
              </div>
              <Send size={20} className="opacity-40 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-charcoal/5 relative overflow-hidden"
          >
            <div className="absolute top-10 right-10 opacity-10 font-black italic text-8xl font-serif pointer-events-none select-none">PIZZA</div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
              <img src="https://i.imgflip.com/1v67q3.jpg" alt="Kermit Typing" className="w-full h-full object-contain" />
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 ml-1">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Giuseppe Verdi"
                  className="w-full bg-cream/50 border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="giuseppe@opera.it"
                    className="w-full bg-cream/50 border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+63 900 000 0000"
                    className="w-full bg-cream/50 border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  required 
                  placeholder="I'd love to talk about catering for my upcoming party..."
                  className="w-full bg-cream/50 border border-charcoal/5 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-cream py-5 rounded-3xl font-black uppercase tracking-[0.3em] shadow-xl hover:bg-primary-dark transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-24 w-full h-[500px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123531.0664988775!2d120.91681729019623!3d14.636254425257922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c89f5bc73295%3A0xe5a3c1032338bd7f!2sMetro%20Manila!5e0!3m2!1sen!2sph!4v1715891234567!5m2!1sen!2sph"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
