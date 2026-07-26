import { useState, useEffect } from 'react';
import logoImg from "@assets/y2kdepot-logo.png";
import { Link } from 'wouter';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'SHOP', href: '#' },
    { name: 'COLLECTIONS', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-40 border-b"
        style={{
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          borderColor: isScrolled ? 'rgba(60,60,60,0.8)' : 'transparent',
          transition: 'background-color 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 -ml-2 z-10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-[0.15em] text-[#999999] w-1/3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Logo — absolutely centered on mobile, flex-centered on desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex-1 md:w-1/3 flex justify-center">
            <Link href="/" className="flex items-center justify-center">
              <img src={logoImg} alt="Y2K DEPOT Logo" className="h-10 md:h-12 w-auto object-contain" style={{ filter: 'drop-shadow(0 0 6px rgba(192,192,192,0.4))' }} />
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-6 text-white md:w-1/3 ml-auto md:ml-0 z-10">
            <button className="hover:text-[#c0c0c0] transition-colors"><Search className="w-5 h-5" /></button>
            <button className="hidden md:block hover:text-[#c0c0c0] transition-colors"><User className="w-5 h-5" /></button>
            <button className="hover:text-[#c0c0c0] transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#222]">
              <img src={logoImg} alt="Y2K DEPOT" className="h-10 w-auto object-contain" style={{ filter: 'drop-shadow(0 0 6px rgba(192,192,192,0.4))' }} />
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-2xl font-serif tracking-wider hover:text-[#c0c0c0] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-8 border-t border-[#222]">
              <button className="flex items-center gap-4 text-lg font-medium tracking-widest text-[#999999] hover:text-white transition-colors">
                <User className="w-6 h-6" /> LOGIN / REGISTER
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
