import React, { useState, useEffect } from 'react';
import { Menu, X, Flag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      const mobileMenu = document.querySelector('[data-mobile-menu]');
      const mobileButton = document.querySelector('[data-mobile-button]');
      
      if (isMenuOpen && 
          mobileMenu && 
          !mobileMenu.contains(target) && 
          mobileButton && 
          !mobileButton.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Kategori', href: '#categories' },
    { name: 'Timeline', href: '#timeline' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      // Add offset for fixed header
      const headerHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={`text-xl font-bold ${isScrolled ? 'text-red-600' : 'text-white'}`}>
              Merdeka17
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 hover:text-red-600 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Daftar Sekarang Button */}
            <motion.button
              onClick={() => {
                const message = `Pendaftaran Lomba Kemerdekaan Indonesia ke-80\n\nNama : \nUsia : \nKategori yang diminati : `;
                window.open(`https://wa.me/62895386998133?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-red-600 text-white hover:bg-red-700' 
                  : 'bg-white text-red-600 hover:bg-gray-100'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Daftar Sekarang
            </motion.button>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            data-mobile-button
            className="md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full bg-white/80 shadow-lg transition-all duration-300 hover:bg-white z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`block w-7 h-1 bg-red-600 rounded transition-all duration-300 transform origin-center ${
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`block w-7 h-1 bg-red-600 rounded transition-all duration-300 my-1 transform origin-center ${
                isMenuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-7 h-1 bg-red-600 rounded transition-all duration-300 transform origin-center ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div 
              data-mobile-menu
              className="absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-xl z-50"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-800 hover:text-red-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Daftar Sekarang Button for Mobile */}
                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    const message = `Pendaftaran Lomba Kemerdekaan Indonesia ke-80\n\nNama : \nUsia : \nKategori yang diminati : `;
                    window.open(`https://wa.me/62895386998133?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full mt-6 px-6 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Daftar Sekarang
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;