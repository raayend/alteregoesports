'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiAward } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  category: string;
}

// Data partner dengan tambahan informasi detail
const partners: Partner[] = [
  { 
    id: 1, 
    name: "Boncabe", 
    logo: "/assets/sponsors/boncabe.png",
    description: "Boncabe adalah merek camilan sehat yang mendukung gaya hidup aktif dan sehat para atlet esports. Dengan komitmen pada kualitas dan rasa, Boncabe menjadi camilan favorit para pemain profesional.",
    website: "https://boncabe.com",
    category: "Food & Beverage"
  },
  { 
    id: 2, 
    name: "CBN Fiber", 
    logo: "/assets/sponsors/cbnfiber.png",
    description: "CBN Fiber menyediakan solusi internet cepat dan stabil yang menjadi kebutuhan utama untuk latihan dan pertandingan esports profesional.",
    website: "https://cbn.id",
    category: "Technology"
  },
  { 
    id: 3, 
    name: "Enter Komputer", 
    logo: "/assets/sponsors/enterkomputer.png",
    description: "Enter Komputer adalah toko teknologi terpercaya yang menyediakan perangkat keras dan perlengkapan gaming berkualitas tinggi untuk para profesional.",
    website: "https://enterkomputer.com",
    category: "Technology"
  },
  { 
    id: 4, 
    name: "Interbat", 
    logo: "/assets/sponsors/interbat.png",
    description: "PT. Interbat adalah perusahaan farmasi terkemuka di Indonesia yang didirikan pada tahun 1948 oleh Bapak Djoko Sukamto. Berawal sebagai distributor obat-obatan Eropa, Interbat berkembang menjadi produsen farmasi independen sejak tahun 1959, kini memproduksi berbagai macam produk farmasi mulai dari obat resep, obat bebas (OTC), suplemen kesehatan, hingga produk diagnostik dalam berbagai bentuk sediaan.",
    website: "https://www.interbat.co.id/",
    category: "Healthcare"
  },
  { 
    id: 5, 
    name: "SteelSeries", 
    logo: "/assets/sponsors/steelseries.png",
    description: "SteelSeries adalah merek peralatan gaming premium yang menyediakan headset, mouse, keyboard, dan aksesoris gaming untuk para atlet profesional.",
    website: "https://steelseries.com",
    category: "Gaming Gear"
  },
  { 
    id: 6, 
    name: "Webull", 
    logo: "/assets/sponsors/Webull_Logo.png",
    description: "Webull adalah platform perdagangan saham dan kripto yang inovatif, mendukung komunitas esports dalam literasi finansial dan investasi.",
    website: "https://webull.com",
    category: "Financial Technology"
  }
];

const PartnerCard = ({ partner, index }: { partner: Partner; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayDescription = expanded 
    ? partner.description 
    : partner.description.length > maxLength 
      ? partner.description.substring(0, maxLength) + "..." 
      : partner.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="premium-card bg-gradient-to-br from-card-bg to-secondary rounded-2xl border border-border-color overflow-hidden hover:border-primary transition-all duration-500 h-full flex flex-col shadow-xl"
    >
      <div className="p-8 flex flex-col flex-grow relative">
        {/* Logo and category */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl p-3 shadow-lg">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-h-12 object-contain"
            />
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white whitespace-nowrap">
            {partner.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">{partner.name}</h3>
        
        {/* Description with read more/show less */}
        <div className="text-gray-300 text-base mb-6 flex-grow leading-relaxed">
          {displayDescription}
          {partner.description.length > maxLength && (
            <button 
              onClick={toggleExpanded}
              className="text-primary hover:text-primary-dark font-medium ml-1 focus:outline-none"
            >
              {expanded ? "Tampilkan Lebih Sedikit" : "Baca Selengkapnya"}
            </button>
          )}
        </div>
        
        {/* Visit Website Button */}
        <div className="mt-auto">
          <a 
            href={partner.website} 
            target="_blank" 
            rel="noopener noreferrer"
            title={`Kunjungi website ${partner.name}`}
            className="inline-flex items-center justify-center w-full py-3 px-6 bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            Kunjungi Website
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/30"></div>
          <div className="absolute inset-0 bg-[url('/assets/images/hero-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mb-8 shadow-xl"
              >
                <FiAward className="text-3xl text-white" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-display text-foreground mb-6"
              >
                Para <span className="text-primary">Mitra Kami</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mb-10"
              >
                Kami berterima kasih kepada para mitra yang telah mempercayai dan mendukung perjalanan Alter Ego Esports di kancah esports nasional dan internasional.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Link 
                  href="/" 
                  className="inline-flex items-center text-primary hover:text-primary-dark font-bold text-lg transition-colors group"
                >
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                  Kembali ke Beranda
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-heading text-foreground mb-6">
                Mitra <span className="text-primary">Strategis</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Setiap mitra kami membawa nilai unik yang mendukung kesuksesan tim kami di berbagai bidang. 
                Kami bangga menjalin kemitraan jangka panjang dengan para pemimpin industri ini.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {partners.map((partner, index) => (
                <PartnerCard key={partner.id} partner={partner} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}