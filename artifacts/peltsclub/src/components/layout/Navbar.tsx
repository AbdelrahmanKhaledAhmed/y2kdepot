import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import logoImg from "@assets/ChatGPT_Image_26_يوليو_2026،_03_54_47_ص_1785029551980.png";
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
      <div className="w-full bg-[#c0c0c0] text-black text-xs md:text-sm font-bold tracking-[0.2em] text-center py-2 z-50 relative">
        ✦ FREE SHIPPING ON ALL ORDERS OVER 699 EGP
      </div>
      <header
        className={`fixed top-[32px] md:top-[36px] left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#333]' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between relative">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 -ml-2"
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

          {/* Logo */}
          <div className="flex-1 md:w-1/3 flex justify-center">
            <Link href="/" className="flex items-center justify-center">
              <img src={logoImg} alt="PELTSCLUB Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center justify-end gap-4 md:gap-6 text-white w-1/3">
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
              <img src={logoImg} alt="PELTSCLUB" className="h-10 brightness-0 invert" />
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
