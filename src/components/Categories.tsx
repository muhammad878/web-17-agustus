import React, { useState } from 'react';
import { Trophy, Users, Clock, Gift, Star, Award, Info, X, Baby, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Categories: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    {
      title: 'Anak-Anak Usia Rendah',
      description: 'Lomba seru untuk anak TK hingga SD kelas 2',
      icon: Baby,
      participants: '150 Anak',
      duration: '1.5 Jam',
      prize: 'Rp 2.000.000',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-pink-400 to-purple-400',
      difficulty: 'Mudah',
      details: 'Lomba khusus untuk anak-anak usia TK hingga SD kelas 2 dengan permainan yang aman dan menyenangkan.',
      requirements: ['Usia 4-7 tahun (TK-SD kelas 2)', 'Dibimbing orang tua', 'Kondisi sehat'],
      tips: ['Dampingi anak saat lomba', 'Berikan semangat', 'Fokus pada kesenangan']
    },
    {
      title: 'Anak-Anak Usia Tinggi',
      description: 'Lomba seru untuk anak SD kelas 3 ke atas',
      icon: Award,
      participants: '100 Anak',
      duration: '2 Jam',
      prize: 'Rp 3.000.000',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-500 to-indigo-500',
      difficulty: 'Sedang',
      details: 'Lomba khusus untuk anak-anak SD kelas 3 ke atas dengan permainan yang lebih menantang.',
      requirements: ['Usia 8-12 tahun (SD kelas 3-6)', 'Dibimbing orang tua', 'Kondisi sehat'],
      tips: ['Latihan ringan', 'Strategi permainan', 'Semangat persaingan sehat']
    },
    {
      title: 'Ibu-Ibu',
      description: 'Lomba seru khusus untuk para ibu',
      icon: Heart,
      participants: '150 Ibu',
      duration: '1.5 Jam',
      prize: 'Rp 4.000.000',
      image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-rose-500 to-pink-500',
      difficulty: 'Sedang',
      details: 'Lomba khusus untuk para ibu dengan permainan yang menghibur dan menguji ketangkasan.',
      requirements: ['Usia 25-60 tahun', 'Kondisi sehat', 'Membawa perlengkapan sendiri'],
      tips: ['Latihan ketangkasan', 'Kerjasama tim', 'Nikmati permainan']
    },
    {
      title: 'Bapak-Bapak',
      description: 'Lomba seru khusus untuk para bapak',
      icon: User,
      participants: '120 Bapak',
      duration: '1.5 Jam',
      prize: 'Rp 4.000.000',
      image: 'https://images.pexels.com/photos/8612988/pexels-photo-8612988.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-indigo-500 to-blue-500',
      difficulty: 'Sedang',
      details: 'Lomba khusus untuk para bapak dengan permainan yang menguji kekuatan dan ketangkasan.',
      requirements: ['Usia 25-60 tahun', 'Kondisi sehat', 'Membawa perlengkapan sendiri'],
      tips: ['Latihan kekuatan', 'Strategi tim', 'Semangat persaingan sehat']
    }
  ];

  // Filter categories based on active filter
  const filteredCategories = categories.filter(category => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'anak-rendah') return category.title === 'Anak-Anak Usia Rendah';
    if (activeFilter === 'anak-tinggi') return category.title === 'Anak-Anak Usia Tinggi';
    if (activeFilter === 'ibu') return category.title === 'Ibu-Ibu';
    if (activeFilter === 'bapak') return category.title === 'Bapak-Bapak';
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Mudah': return 'bg-green-100 text-green-800 border-green-200';
      case 'Sedang': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Sulit': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Detail lomba untuk setiap kategori
  const getCategoryDetails = (categoryTitle: string) => {
    switch (categoryTitle) {
      case 'Anak-Anak Usia Rendah':
        return {
          details: 'Lomba seru dan aman untuk anak-anak usia TK hingga SD kelas 2 dengan permainan yang sederhana dan menyenangkan.',
          requirements: ['Usia 4-7 tahun (TK-SD kelas 2)', 'Dibimbing orang tua/wali', 'Kondisi sehat dan tidak sedang sakit'],
          tips: ['Dampingi anak saat lomba', 'Berikan semangat dan dukungan', 'Fokus pada kesenangan bukan kemenangan', 'Pastikan anak sudah makan dan istirahat cukup'],
          subCategories: [
            'Goyang Kardus',
            'Makan Biskuit',
            'Tiup Gelas',
            'Tiup Bola',
            'Congklak dengan Bola',
            'Lompat Tali Mini'
          ]
        };
      case 'Anak-Anak Usia Tinggi':
        return {
          details: 'Lomba khusus untuk anak-anak SD kelas 3 ke atas dengan permainan yang lebih menantang dan membutuhkan koordinasi yang lebih baik.',
          requirements: ['Usia 8-12 tahun (SD kelas 3-6)', 'Dibimbing orang tua/wali', 'Kondisi sehat dan tidak sedang sakit', 'Membawa helm untuk lomba balap karung'],
          tips: ['Latihan ringan sebelum lomba', 'Strategi permainan yang baik', 'Semangat persaingan sehat', 'Fokus pada kesenangan'],
          subCategories: [
            'Balap Karung',
            'Goyang Kardus',
            'Trenggiling',
            'Corong',
            'Congklak dengan Bola',
            'Estafet Air Mini'
          ]
        };
      case 'Ibu-Ibu':
        return {
          details: 'Lomba seru khusus untuk para ibu dengan permainan yang menghibur dan menguji ketangkasan. Semua lomba dirancang untuk menyenangkan dan aman.',
          requirements: ['Usia 25-60 tahun', 'Kondisi sehat', 'Membawa perlengkapan sendiri', 'Pakaian nyaman untuk bergerak'],
          tips: ['Latihan ketangkasan ringan', 'Kerjasama tim yang baik', 'Nikmati permainan dengan santai', 'Jaga kesehatan dan stamina'],
          subCategories: [
            'Cantolan Cukrukuk (Individu)',
            'Bakiak (Kelompok)'
          ]
        };
      case 'Bapak-Bapak':
        return {
          details: 'Lomba seru khusus untuk para bapak dengan permainan yang menguji kekuatan dan ketangkasan. Semua lomba dirancang untuk kompetitif namun tetap menyenangkan.',
          requirements: ['Usia 25-60 tahun', 'Kondisi sehat', 'Membawa perlengkapan sendiri', 'Pakaian olahraga yang nyaman'],
          tips: ['Latihan kekuatan ringan', 'Strategi tim yang baik', 'Semangat persaingan sehat', 'Jaga stamina dan koordinasi'],
          subCategories: [
            'Nampan Bola (Individu)',
            'Bakiak (Kelompok)'
          ]
        };
      default:
        return {
          details: categories.find(cat => cat.title === categoryTitle)?.details || '',
          requirements: categories.find(cat => cat.title === categoryTitle)?.requirements || [],
          tips: categories.find(cat => cat.title === categoryTitle)?.tips || [],
          subCategories: [],
          ageGroups: []
        };
    }
  };

  return (
    <section id="categories" className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-red-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl mb-6 shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Trophy className="h-8 w-8 text-white" />
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Kategori <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">Lomba</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dalam berbagai kategori lomba yang seru dan menantang untuk memperingati kemerdekaan Indonesia ke-79
          </p>
                                <div className="mt-8 flex items-center justify-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                        <span className="text-gray-600 font-medium">4 Kategori Pilihan</span>
                        <Star className="h-5 w-5 text-yellow-500 fill-current" />
                      </div>
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div
                      className="flex flex-wrap justify-center gap-4 mb-12"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <motion.button
                        onClick={() => setActiveFilter('all')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                          activeFilter === 'all'
                            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-red-300 hover:text-red-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Semua Kategori
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setActiveFilter('anak-rendah')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                          activeFilter === 'anak-rendah'
                            ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Baby className="h-4 w-4" />
                        <span>Anak Usia Rendah</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setActiveFilter('anak-tinggi')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                          activeFilter === 'anak-tinggi'
                            ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-purple-300 hover:text-purple-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Award className="h-4 w-4" />
                        <span>Anak Usia Tinggi</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setActiveFilter('ibu')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                          activeFilter === 'ibu'
                            ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-rose-300 hover:text-rose-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Heart className="h-4 w-4" />
                        <span>Ibu-Ibu</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={() => setActiveFilter('bapak')}
                        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                          activeFilter === 'bapak'
                            ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                            : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <User className="h-4 w-4" />
                        <span>Bapak-Bapak</span>
                      </motion.button>
                    </motion.div>

                            {/* Categories Grid */}
                    <motion.div 
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                      key={activeFilter}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {filteredCategories.length > 0 ? (
                        filteredCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <motion.img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                
                {/* Floating Icon */}
                <motion.div 
                  className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </motion.div>

                {/* Difficulty Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold border ${getDifficultyColor(category.difficulty)} backdrop-blur-sm`}>
                  {category.difficulty}
                </div>

                {/* Prize Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {category.prize}
                </motion.div>

                {/* Info Button */}
                <motion.button
                  className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedCard(index)}
                >
                  <Info className="h-4 w-4 text-white" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center">
                      <Users className="h-4 w-4 mr-2 text-red-500" />
                      Peserta
                    </span>
                    <span className="font-semibold text-gray-900">{category.participants}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-red-500" />
                      Durasi
                    </span>
                    <span className="font-semibold text-gray-900">{category.duration}</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-red-500/25"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    Daftar Sekarang
                    <Trophy className="ml-2 h-5 w-5" />
                  </span>
                </motion.button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Trophy className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">Tidak ada kategori yang dipilih</h3>
              <p className="text-gray-400">Silakan pilih filter di atas untuk melihat kategori yang tersedia</p>
            </motion.div>
          )}
        </motion.div>

        {/* Card Details Modal */}
        <AnimatePresence>
          {selectedCard !== null && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold">{categories[selectedCard].title}</h3>
                  <motion.button
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedCard(null)}
                  >
                    <X className="h-4 w-4" />
                  </motion.button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-yellow-300">Detail Lomba</h4>
                    <p className="text-red-100 leading-relaxed">
                      {getCategoryDetails(categories[selectedCard].title).details}
                    </p>
                  </div>

                  {/* Sub Categories for special categories */}
                  {getCategoryDetails(categories[selectedCard].title).subCategories.length > 0 && (
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-yellow-300">Jenis Lomba</h4>
                      <ul className="text-red-100 space-y-2">
                        {getCategoryDetails(categories[selectedCard].title).subCategories.map((subCat, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                            {subCat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-yellow-300">Persyaratan</h4>
                    <ul className="text-red-100 space-y-2">
                      {getCategoryDetails(categories[selectedCard].title).requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-yellow-300">Tips & Trik</h4>
                    <ul className="text-red-100 space-y-2">
                      {getCategoryDetails(categories[selectedCard].title).tips.map((tip, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button 
                  className="w-full bg-white text-red-600 font-bold py-4 px-6 rounded-xl mt-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Daftar Sekarang
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Requirements Section */}
        <motion.div 
          className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Syarat & Ketentuan Umum</h3>
            <p className="text-gray-600">Pastikan Anda memenuhi persyaratan berikut sebelum mendaftar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="flex items-start space-x-3 p-4 bg-red-50 rounded-2xl border border-red-100"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Usia Minimal 17 Tahun</h4>
                <p className="text-sm text-gray-600">Peserta harus berusia minimal 17 tahun pada tanggal lomba</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-2xl border border-yellow-100"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">KTP Asli</h4>
                <p className="text-sm text-gray-600">Membawa KTP asli untuk verifikasi identitas</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start space-x-3 p-4 bg-green-50 rounded-2xl border border-green-100"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Pendaftaran Online</h4>
                <p className="text-sm text-gray-600">Mendaftar melalui website resmi sebelum batas waktu</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;