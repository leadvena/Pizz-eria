import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand */}
        <div className="space-y-6">
          <NavLink to="/" className="text-3xl font-black italic tracking-tighter flex items-center gap-2">
            <span className="text-primary text-4xl">P</span>
            IZZERIA
          </NavLink>
          <p className="text-cream/60 leading-relaxed font-light">
            Bringing the authentic taste of wood-fired Neapolitan pizza to your doorstep. Handmade with heart, fired by tradition.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-gold hover:text-charcoal transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm underline underline-offset-8 decoration-primary">Explore</h4>
          <ul className="space-y-4 text-cream/80">
            <li><NavLink to="/" className="hover:text-gold transition-colors">Home</NavLink></li>
            <li><NavLink to="/menu" className="hover:text-gold transition-colors">Our Menu</NavLink></li>
            <li><NavLink to="/about" className="hover:text-gold transition-colors">Our Story</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-gold transition-colors">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div className="space-y-6">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm underline underline-offset-8 decoration-primary">Kitchen Hours</h4>
          <ul className="space-y-4 text-cream/80">
            <li className="flex justify-between">
              <span>Mon - Thu</span>
              <span className="font-mono text-xs">11:00 - 22:00</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sat</span>
              <span className="font-mono text-xs">11:00 - 23:30</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span className="font-mono text-xs">12:00 - 21:00</span>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm underline underline-offset-8 decoration-primary">Get in Touch</h4>
          <ul className="space-y-4 text-cream/80">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0" />
              <span>123 Pizza Street, Artisanal District,<br />Metro Manila, PH</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-primary shrink-0" />
              <span>+63 912 345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-primary shrink-0" />
              <span>ciao@pizzeria.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-cream/40 text-xs uppercase tracking-widest">
          © {currentYear} PIZZERIA RESTAURANTE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-[10px] text-cream/40 uppercase tracking-tighter">
          <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-cream transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
