import React from 'react';
import { Clock, MapPin, Users, Calendar, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Timeline: React.FC = () => {
  const events = [
    {
      time: '11 - 17 Agustus',
      title: 'Pendaftaran',
      description: 'Pendaftaran peserta lomba kemerdekaan Indonesia ke-80',
      location: 'Online & Offline',
      participants: 'Semua Peserta',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      time: '16 - 17 Agustus',
      title: 'Acara Lomba',
      description: 'Pelaksanaan berbagai lomba kemerdekaan untuk semua kategori',
      location: 'Lapangan Utama',
      participants: 'Semua Peserta',
      icon: Users,
      color: 'bg-red-500'
    },
    {
      time: '23 Agustus',
      title: 'Senam Sehat',
      description: 'Kegiatan senam sehat bersama untuk memeriahkan kemerdekaan',
      location: 'Lapangan Utama',
      participants: 'Semua Peserta',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      time: '23 Agustus',
      title: 'Penyerahan Hadiah Lomba',
      description: 'Pengumuman pemenang dan penyerahan hadiah lomba',
      location: 'Panggung Utama',
      participants: 'Pemenang Lomba',
      icon: Clock,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Timeline <span className="text-red-600">Acara</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jadwal lengkap acara peringatan kemerdekaan Indonesia ke-80
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-red-500 to-red-600 h-full rounded-full"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          ></motion.div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              >
                {/* Timeline Point */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-red-500 rounded-full flex items-center justify-center z-10 shadow-lg"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  <event.icon className="h-4 w-4 text-red-500" />
                </motion.div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8 md:text-left'
                } md:w-1/2`}>
                  <motion.div 
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-red-500"
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {/* Time Badge */}
                    <motion.div 
                      className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4"
                      whileHover={{ scale: 1.05 }}
                      animate={{ 
                        scale: [1, 1.02, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.time}
                    </motion.div>

                    {/* Event Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>

                    {/* Event Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm">
                      <motion.div 
                        className="flex items-center text-gray-500"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin className="h-4 w-4 mr-2 text-red-500" />
                        <span>{event.location}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-gray-500"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="h-4 w-4 mr-2 text-red-500" />
                        <span>{event.participants}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Informasi Penting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white/10 rounded-xl p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Calendar className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Periode Acara</h4>
              <p>16 - 23 Agustus 2025</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 rounded-xl p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <MapPin className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Lokasi</h4>
              <p>Halaman Depan Masjid Baitussalam</p>
            </motion.div>
            <motion.div 
              className="bg-white/10 rounded-xl p-4"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Clock className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
              <h4 className="font-bold mb-2">Waktu</h4>
              <p>18:00 - Selesai WIB</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Registration Section */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">Daftar Sekarang!</h3>
                      <p className="text-xl mb-6">Bergabunglah dalam perayaan kemerdekaan Indonesia ke-80</p>
          
          <motion.button
            onClick={() => {
              const message = `Pendaftaran Lomba Kemerdekaan Indonesia ke-80\n\nNama : \nUsia : \nKategori yang diminati : `;
              window.open(`https://wa.me/62895386998133?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Daftar Sekarang
          </motion.button>
          
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Atau hubungi kami di:</p>
            <motion.div 
              className="inline-flex items-center bg-white/20 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="font-bold">+62 895-3869-98133</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;