import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import Logo from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
              <Logo />
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="beneficios" smooth={true} duration={500} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Benefícios</Link>
            <Link to="como-funciona" smooth={true} duration={500} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Como Funciona</Link>
            <Link to="developers" smooth={true} duration={500}  className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Developers</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <a href="#beneficios" className="text-lg text-zinc-300" onClick={() => setIsOpen(false)}>Benefícios</a>
              <a href="#como-funciona" className="text-lg text-zinc-300" onClick={() => setIsOpen(false)}>Como Funciona</a>
              <a href="#developers" className="text-lg text-zinc-300" onClick={() => setIsOpen(false)}>Developers</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;