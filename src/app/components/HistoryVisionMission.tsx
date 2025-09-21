'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HistoryVisionMission() {
  const [activeTab, setActiveTab] = useState('history');

  const historyContent = {
    title: "Our History",
    content: `
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg text-gray-300 leading-relaxed">Sejarah Alter Ego Esports dimulai pada akhir tahun 2017 ketika organisasi yang awalnya bernama The Watcher mengakuisisi tim pemain Dota 2. Didirikan oleh CEO Delwyn Sukamto, Alter Ego menjadi organisasi yang lebih profesional untuk mendukung pemain dan mempromosikan esports di Indonesia.</p>
          
          <div class="mt-8 space-y-6">
            <div class="border-l-4 border-primary pl-6 py-2">
              <h3 class="text-xl font-bold text-foreground mb-2">Awal Mula (2017)</h3>
              <p class="text-gray-400"><strong>Awalnya bernama The Watcher:</strong> Alter Ego terbentuk secara tidak sengaja dari tim yang beranggotakan Spaceman, Feuru, KelThuzard, Ars, dan Huppey, yang akhirnya diakuisisi oleh Alter Ego.</p>
            </div>
            
            <div class="border-l-4 border-primary pl-6 py-2">
              <p class="text-gray-400"><strong>Pendanaan dari Warnet:</strong> CEO Alter Ego, Delwyn Sukamto, awalnya memberikan fasilitas di warnetnya kepada tim tersebut, mendukung mereka bermain dan berlatih.</p>
            </div>
            
            <div class="border-l-4 border-primary pl-6 py-2">
              <p class="text-gray-400"><strong>Akuisisi dan Prestasi Awal:</strong> Tim tersebut berhasil memenangkan kompetisi dan menjadi bagian dari organisasi Alter Ego, dengan cepat meraih prestasi seperti peringkat ke-3 di Acer Predator League 2017.</p>
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="rounded-xl overflow-hidden shadow-2xl">
            <img src="/assets/images/sejarah/ceo.png" alt="Delwyn Sukamto, CEO Alter Ego Esports" class="w-full h-auto object-cover" />
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold text-foreground">Delwyn Sukamto</h3>
            <p class="text-primary">Founder & CEO</p>
          </div>
        </div>
      </div>
      
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border-color">Perkembangan & Profesionalisasi</h3>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="mt-1 mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-foreground mb-2">Fokus pada Profesionalisme</h4>
                <p class="text-gray-400">Alter Ego didirikan sebagai upaya untuk memprofesionalkan permainan kompetitif di Indonesia dengan struktur yang kuat untuk pengembangan pemain dan pembuatan konten.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="mt-1 mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-foreground mb-2">Divisi Game yang Beragam</h4>
                <p class="text-gray-400">Seiring waktu, Alter Ego memperluas organisasinya dengan divisi untuk game-game populer, termasuk Mobile Legends: Bang Bang (MLBB), Valorant, dan PUBG Mobile.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="mt-1 mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-foreground mb-2">Pencapaian dan Pengaruh</h4>
                <p class="text-gray-400">Alter Ego telah meraih berbagai prestasi di kancah nasional dan internasional, seperti menjuarai MPL Invitational Season 2 dan menjadi salah satu tim dengan basis penggemar yang kuat di Indonesia.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border-color">Arti Logo dan Filosofi</h3>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="mt-1 mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-foreground mb-2">Filosofi Tiga Muka</h4>
                <p class="text-gray-400">Logo Alter Ego yang bermuka tiga terinspirasi dari kepercayaan Jepang bahwa manusia memiliki tiga muka: untuk diri sendiri, keluarga, dan teman dekat.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="mt-1 mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-bold text-foreground mb-2">Tradisi Nama Samaran</h4>
                <p class="text-gray-400">Tradisi ini juga sejalan dengan praktik anggota tim menggunakan nama samaran saat bertanding, yang juga menjadi bagian dari filosofi alter ego itu sendiri.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  };

  const visionContent = {
    title: "Our Vision",
    content: `
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-xl text-gray-300 leading-relaxed">Menjadi organisasi esports terdepan di Asia Tenggara yang menginspirasi generasi muda untuk mengejar mimpi mereka dalam kompetisi elektronik profesional.</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-gradient-to-br from-card-bg to-card-bg/80 p-8 rounded-2xl border border-border-color/50 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-4">Leadership</h3>
          <p class="text-gray-400">Menjadi pemimpin dalam inovasi dan pengembangan talenta esports di kawasan Asia Tenggara.</p>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-gradient-to-br from-card-bg to-card-bg/80 p-8 rounded-2xl border border-border-color/50 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-4">Excellence</h3>
          <p class="text-gray-400">Mempertahankan standar tertinggi dalam kompetisi dan pengembangan pemain.</p>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-gradient-to-br from-card-bg to-card-bg/80 p-8 rounded-2xl border border-border-color/50 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-4">Innovation</h3>
          <p class="text-gray-400">Terus berinovasi dalam metode pelatihan dan strategi kompetitif.</p>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-gradient-to-br from-card-bg to-card-bg/80 p-8 rounded-2xl border border-border-color/50 shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
        >
          <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-foreground mb-4">Community</h3>
          <p class="text-gray-400">Membangun komunitas yang kuat dan suportif di sekitar esports.</p>
        </motion.div>
      </div>
    `
  };

  const missionContent = {
    title: "Our Mission",
    content: `
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-xl text-gray-300 leading-relaxed">Mengembangkan talenta esports terbaik Indonesia dan mewakili negara dengan bangga di kancah internasional.</p>
      </div>
      
      <div class="relative">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-border-color"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="px-4 bg-background text-lg font-bold text-primary">Our Core Missions</span>
        </div>
      </div>
      
      <div class="mt-16 space-y-12">
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">1</div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-foreground mb-4">Develop Talent</h3>
            <p class="text-gray-400 text-lg leading-relaxed">Mengidentifikasi dan mengembangkan pemain berbakat melalui program pelatihan profesional dengan pelatih berpengalaman dari seluruh dunia.</p>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">2</div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-foreground mb-4">Compete at the Highest Level</h3>
            <p class="text-gray-400 text-lg leading-relaxed">Berpartisipasi dan meraih prestasi di turnamen-turnamen esports tingkat nasional dan internasional, membawa nama baik Indonesia ke kancah global.</p>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">3</div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-foreground mb-4">Promote Esports</h3>
            <p class="text-gray-400 text-lg leading-relaxed">Meningkatkan kesadaran dan penerimaan esports sebagai bentuk olahraga yang sah dan profesional di mata masyarakat dan pemerintah.</p>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">4</div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-foreground mb-4">Build Community</h3>
            <p class="text-gray-400 text-lg leading-relaxed">Membangun komunitas penggemar yang kuat dan suportif untuk tim dan esports Indonesia melalui berbagai program engagement dan events.</p>
          </div>
        </div>
      </div>
    `
  };

  const getContent = () => {
    switch (activeTab) {
      case 'history': return historyContent;
      case 'vision': return visionContent;
      case 'mission': return missionContent;
      default: return historyContent;
    }
  };

  const currentContent = getContent();

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading text-foreground mb-4">History, Vision & <span className="text-primary">Mission</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn about our journey, aspirations, and commitment to excellence in esports
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'history', label: 'History' },
            { id: 'vision', label: 'Vision' },
            { id: 'mission', label: 'Mission' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-card-bg text-gray-400 hover:text-foreground hover:bg-card-bg/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-card-bg to-card-bg/50 p-8 md:p-12 rounded-3xl border border-border-color/50 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">{currentContent.title}</h2>
          <div 
            className="text-foreground prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: currentContent.content }}
          />
        </motion.div>
      </div>
    </section>
  );
}