'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiPackage, FiUsers, FiCalendar, FiStar, FiGlobe } from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UpdatesPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const upcomingFeatures = [
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Player All Seasons",
      description: "Tampilkan semua pemain yang pernah berkontribusi untuk Alter Ego Esports, bukan hanya pemain aktif saja. Lihat riwayat perjalanan mereka bersama tim."
    },
    {
      icon: <FiCalendar className="text-2xl" />,
      title: "Jadwal Pertandingan Semua Divisi",
      description: "Lihat jadwal pertandingan dari semua divisi Alter Ego Esports, baik yang akan datang maupun yang sudah lewat lengkap dengan hasil pertandingan."
    },
    {
      icon: <FiStar className="text-2xl" />,
      title: "Tampilan dan Fungsionalitas yang Lebih Baik",
      description: "Perubahan desain dan peningkatan fungsionalitas website untuk pengalaman yang lebih baik dan sempurna bagi pengguna."
    },
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Website Komunitas Alter Champs",
      description: "Website khusus untuk komunitas Alter Champs (penggemar Alter Ego Esports) untuk bersosialisasi, saling mengenal, berdiskusi, dan menikmati fitur-fitur seru lainnya."
    }
  ];

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
                <FiPackage className="text-3xl text-white" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-display text-foreground mb-6"
              >
                Pembaruan <span className="text-primary">Besar-Besaran</span> Sedang Dalam Pengerjaan!
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mb-10"
              >
                Kami sedang mengerjakan pembaruan besar untuk website Alter Ego Esports yang akan hadir dengan fitur-fitur menarik dan pengalaman pengguna yang lebih baik.
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

        {/* Features Section */}
        <section className="py-24 bg-gradient-to-b from-background to-dark-bg">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-heading text-foreground mb-6">
                Fitur <span className="text-primary">Baru</span> yang Akan Hadir
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full"></div>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Kami berkomitmen untuk memberikan pengalaman terbaik bagi fans dan komunitas Alter Ego Esports melalui peningkatan website yang signifikan.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {upcomingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-card-bg to-secondary rounded-2xl border border-border-color overflow-hidden hover:border-primary transition-all duration-500 h-full p-8 shadow-xl"
                >
                  <div className="flex items-start mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/cta-pattern.png')] bg-repeat opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-display text-foreground mb-6">
                  <span className="text-primary">Segera</span> Hadir!
                </h2>
                <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
                  Tunggu kejutan besar kami dalam versi website berikutnya. Kami berharap pembaruan ini akan memberikan pengalaman yang lebih baik bagi seluruh keluarga besar Alter Ego Esports.
                </p>
                <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white font-bold text-lg py-5 px-10 rounded-full transition-all duration-300 shadow-xl">
                  Pantau Terus Perkembangannya!
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}