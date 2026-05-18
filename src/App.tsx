import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './components/Toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ToastProvider>
          <ScrollToTop />
          <MainLayout />
        </ToastProvider>
      </CartProvider>
    </Router>
  );
}

