import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Clock, Gift, Star, Award, Info, X, Baby, Heart, User, Package, Cookie, Wind, Circle, Gamepad2, LineChart, Cone, Droplets, Anchor, Footprints, Square, LucideIcon, Play } from 'lucide-react';

// Import gambar
import goyangKardus from '../assets/goyang kardus.jpeg';
import makanBiskuit from '../assets/makan biskuit.jpeg';
import tiupGelas from '../assets/tiup gelas.jpeg';
import tiupBola from '../assets/tiup bola.jpeg';
import balapKarung from '../assets/balap karung helem.jpeg';
import trenggiling from '../assets/teringgiling kardus.jpeg';
import corong from '../assets/corong.jpeg';
import cantolanGalon from '../assets/cantolan galon.jpeg';
import bakiak from '../assets/bakiak.jpeg';
import nampanBola from '../assets/nampan bola.png';

interface CompetitionCategoriesProps {
  onCategorySelect?: (category: string, competition: string) => void;
}

interface Competition {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  participants: string;
  videoUrl?: string;
  image: string;
}

const CompetitionCategories: React.FC<CompetitionCategoriesProps> = ({ onCategorySelect }) => {
  const [activeFilter, setActiveFilter] = useState<string>('anak-rendah');

  // Data lomba untuk setiap kategori - SETIAP LOMBA TERPISAH
  const anakRendahCompetitions: Competition[] = [
    {
      id: 'anak-rendah-1',
      name: 'Goyang Kardus',
      icon: Package,
      description: 'Lomba mengocok kardus untuk mengeluarkan bola',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@fitra_hayuningtias21/video/7404128482332036358?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: goyangKardus
    },
    {
      id: 'anak-rendah-2',
      name: 'Makan Biskuit',
      icon: Cookie,
      description: 'Lomba makan biskuit tanpa menggunakan tangan',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@p3.2024._/video/7401911135051681029?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: makanBiskuit
    },
    {
      id: 'anak-rendah-3',
      name: 'Tiup Gelas',
      icon: Wind,
      description: 'Lomba meniup gelas plastik hingga jatuh',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@ipbabaseh/video/7405183678864690438?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: tiupGelas
    },
    {
      id: 'anak-rendah-4',
      name: 'Tiup Bola',
      icon: Circle,
      description: 'Lomba meniup bola pingpong ke garis finish',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@karnarasa4/video/7401692845482052870?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: tiupBola
    },
    
  ];

  const anakTinggiCompetitions: Competition[] = [
    {
      id: 'anak-tinggi-1',
      name: 'Balap Karung',
      icon: Package,
      description: 'Lomba lari menggunakan karung goni',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@kakapratamaa16/video/7401766910976691461?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: balapKarung
    },
    {
      id: 'anak-tinggi-2',
      name: 'Goyang Kardus',
      icon: Package,
      description: 'Lomba mengocok kardus untuk mengeluarkan bola',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@fitra_hayuningtias21/video/7404128482332036358?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: goyangKardus
    },
    {
      id: 'anak-tinggi-3',
      name: 'Trenggiling',
      icon: Award,
      description: 'Lomba berguling seperti trenggiling',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@osissmanthreemm/video/7403349676897864965?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: trenggiling
    },
    {
      id: 'anak-tinggi-4',
      name: 'Corong',
      icon: Cone,
      description: 'Lomba memasukkan bola ke corong',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@sylviada30/video/7401747044068625669?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: corong
    },
   
  ];

  const ibuCompetitions: Competition[] = [
    {
      id: 'ibu-1',
      name: 'Cantolan Cukrukuk (Individu)',
      icon: Anchor,
      description: 'Lomba memasukkan paku ke dalam botol',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@safitri_sn/video/7402942751714675974?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: cantolanGalon
    },
    {
      id: 'ibu-2',
      name: 'Bakiak (Kelompok)',
      icon: Footprints,
      description: 'Lomba berjalan menggunakan bakiak bersama',
      participants: 'Kelompok (3 orang)',
      videoUrl: 'https://www.tiktok.com/@dewitasari/video/7534027804011154693?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: bakiak
    }
  ];

  const bapakCompetitions: Competition[] = [
    {
      id: 'bapak-1',
      name: 'Nampan Bola (Individu)',
      icon: Square,
      description: 'Lomba membawa bola di atas nampan',
      participants: 'Individu',
      videoUrl: 'https://www.tiktok.com/@marcedung/video/7133144165319331098?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: nampanBola
    },
    {
      id: 'bapak-2',
      name: 'Bakiak (Kelompok)',
      icon: Footprints,
      description: 'Lomba berjalan menggunakan bakiak bersama',
      participants: 'Kelompok (3 orang)',
      videoUrl: 'https://www.tiktok.com/@es_telercreamyncess/video/7403311058661690629?is_from_webapp=1&sender_device=pc&web_id=7529131082454189586',
      image: bakiak
    }
  ];

  // Get competitions based on filter
  const getCompetitionsToShow = (): Competition[] => {
    switch (activeFilter) {
      case 'anak-rendah':
        return anakRendahCompetitions;
      case 'anak-tinggi':
        return anakTinggiCompetitions;
      case 'ibu':
        return ibuCompetitions;
      case 'bapak':
        return bapakCompetitions;
      default:
        return anakRendahCompetitions;
    }
  };

  const competitionsToShow = getCompetitionsToShow();

  console.log('Active Filter:', activeFilter);
  console.log('Competitions to show:', competitionsToShow.length);
  console.log('Competition names:', competitionsToShow.map(c => c.name));

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="h-10 w-10 text-red-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          <span className="text-gray-800">Kategori</span> <span className="text-red-600">Lomba</span>
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Bergabunglah dalam berbagai kategori lomba yang seru dan menantang untuk memperingati kemerdekaan Indonesia ke-80
        </p>
        <div className="flex items-center justify-center mt-4">
          <Star className="h-5 w-5 text-yellow-400 mr-2" />
          <span className="text-gray-700 font-medium">4 Kategori Pilihan</span>
          <Star className="h-5 w-5 text-yellow-400 ml-2" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          onClick={() => setActiveFilter('anak-rendah')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === 'anak-rendah'
              ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300'
          }`}
        >
          <Baby className="h-4 w-4" />
          <div className="text-left">
            <div>Anak Usia Rendah</div>
            <div className="text-xs opacity-75">TK - Kelas 3 SD</div>
          </div>
        </button>
        <button
          onClick={() => setActiveFilter('anak-tinggi')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === 'anak-tinggi'
              ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
          }`}
        >
          <User className="h-4 w-4" />
          <div className="text-left">
            <div>Anak Usia Tinggi</div>
            <div className="text-xs opacity-75">Kelas 3 SD - 9 SMP</div>
          </div>
        </button>
        <button
          onClick={() => setActiveFilter('ibu')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === 'ibu'
              ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-pink-300'
          }`}
        >
          <Heart className="h-4 w-4" />
          Ibu-Ibu
        </button>
        <button
          onClick={() => setActiveFilter('bapak')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            activeFilter === 'bapak'
              ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
          }`}
        >
          <User className="h-4 w-4" />
          Bapak-Bapak
        </button>
      </div>

      {/* Debug Info */}
      <div className="text-center mb-4 text-sm text-gray-500">
        Menampilkan {competitionsToShow.length} lomba untuk kategori: {
          activeFilter === 'anak-rendah' ? 'Anak Usia Rendah (TK - Kelas 3 SD)' :
          activeFilter === 'anak-tinggi' ? 'Anak Usia Tinggi (Kelas 3 SD - 9 SMP)' :
          activeFilter === 'ibu' ? 'Ibu-Ibu' :
          activeFilter === 'bapak' ? 'Bapak-Bapak' : 'Tidak Diketahui'
        }
      </div>
      
      {/* Competition Cards - SETIAP LOMBA DAPAT CARD SENDIRI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitionsToShow.map((competition: Competition, index: number) => {
          const IconComponent = competition.icon;
          console.log(`Rendering card ${index + 1}: ${competition.name}`);
          return (
          <motion.div
              key={competition.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-red-100 to-red-200">
                <img 
                  src={competition.image} 
                  alt={competition.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Category Icon */}
                <div className="absolute bottom-3 left-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <IconComponent className="h-4 w-4 text-red-600" />
                </div>
                
                {/* Info Icon */}
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center">
                  <Info className="h-4 w-4 text-gray-600" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h4 className="font-bold text-gray-900 text-xl mb-2">{competition.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{competition.description}</p>
                
                {/* Age Range Info for Children Categories */}
                {(activeFilter === 'anak-rendah' || activeFilter === 'anak-tinggi') && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center text-sm text-blue-800">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="font-medium">
                        {activeFilter === 'anak-rendah' ? 'TK - Kelas 3 SD' : 'Kelas 3 SD - 9 SMP'}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-red-500" />
                    <span className="font-medium">Peserta:</span>
                    <span className="ml-1 font-bold text-gray-800">{competition.participants}</span>
            </div>
                  {competition.videoUrl && (
                    <div className="flex items-center text-sm text-gray-600">
                      <button
                        onClick={() => window.open(competition.videoUrl, '_blank')}
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Lihat Video Tutorial
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Register Button */}
                <button 
                  onClick={() => {
                    const category = activeFilter === 'anak-rendah' ? 'Usia Rendah' : 
                                   activeFilter === 'anak-tinggi' ? 'Usia Tinggi' : 
                                   activeFilter === 'ibu' ? 'Ibu-Ibu' : 'Bapak-Bapak';
                    const message = `${competition.name} ${category}\n\nNama : \nUsia : `;
                    window.open(`https://wa.me/62895386998133?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:from-red-600 hover:to-red-700 transition-all duration-300"
                >
                  <Trophy className="h-5 w-5" />
                  Daftar Sekarang
                </button>
              </div>
          </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CompetitionCategories;
