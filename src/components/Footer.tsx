import React from 'react';
import { Flag, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import StaggeredContainer from './StaggeredContainer';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-red-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.2}>
            {/* Brand Column */}
            <motion.div 
              className="space-y-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Flag className="h-8 w-8 text-yellow-300" />
                <span className="text-2xl font-bold">Merdeka17</span>
              </motion.div>
              <p className="text-red-100 leading-relaxed">
                Merayakan kemerdekaan Indonesia ke-80 dengan semangat persatuan dan keberagaman.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="space-y-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-yellow-300">Tautan Cepat</h3>
              <ul className="space-y-2">
                {[
                  { href: "#home", text: "Beranda" },
                  { href: "#categories", text: "Kategori Lomba" },
                  { href: "#timeline", text: "Timeline" },
                  { href: "#registration", text: "Pendaftaran" },
                  { href: "#gallery", text: "Galeri" }
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.href} className="text-red-100 hover:text-white transition-colors duration-200">
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="space-y-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-yellow-300">Kontak</h3>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "Halaman Depan Masjid Baitussalam", isAddress: true },
                  { icon: Phone, text: "+62 895-3869-98133" }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-${contact.isAddress ? 'start' : 'center'} space-x-3`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="h-5 w-5 text-red-300 mt-0.5" />
                    <span className="text-red-100">
                      {contact.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </StaggeredContainer>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection className="border-t border-red-700 py-8" delay={0.4}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-red-100">
                © 2024 Merdeka17. Semua hak dilindungi undang-undang.
              </p>
              <p className="text-red-200 text-sm">
                Dirgahayu Republik Indonesia ke-80
              </p>
            </motion.div>

          </div>
        </AnimatedSection>
      </div>

      {/* Animated Flag */}
      <motion.div 
        className="absolute bottom-4 right-4 opacity-20"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Flag className="h-16 w-16 text-yellow-300" />
      </motion.div>
    </footer>
  );
};

export default Footer;