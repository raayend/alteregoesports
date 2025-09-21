'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PremiumPlayerCard from '../../components/PremiumPlayerCard';

// Player data with skills for premium cards
const players = [
  {
    id: 1,
    nickname: "Nino",
    fullName: "Nino",
    role: "EXP Lane",
    status: "Active",
    description: "Pemain senior dengan pengalaman MPL yang luar biasa. Leader yang kuat dengan kemampuan split push yang hebat.",
    photo: "/assets/players/nino.png",
    skills: [
      {
        name: "Split Push",
        level: 5,
        description: "Kemampuan untuk mengontrol wave dan melakukan split push secara efektif"
      },
      {
        name: "Team Fighting",
        level: 4,
        description: "Kontribusi yang baik dalam team fight dengan damage output yang tinggi"
      },
      {
        name: "Map Awareness",
        level: 5,
        description: "Pemahaman peta yang luar biasa dan timing gank yang presisi"
      }
    ]
  },
  {
    id: 2,
    nickname: "Rinee",
    fullName: "Rinee",
    role: "Jungler",
    status: "Active",
    description: "Jungler handal dengan sense gank yang tajam. Spesialis dalam early game aggression dan vision control.",
    photo: "/assets/players/rinee.png",
    skills: [
      {
        name: "Ganking",
        level: 5,
        description: "Timing dan eksekusi gank yang sangat presisi"
      },
      {
        name: "Vision Control",
        level: 4,
        description: "Kontrol vision tim yang baik"
      },
      {
        name: "Objective Control",
        level: 5,
        description: "Kontrol objective seperti turtle dan lord yang luar biasa"
      }
    ]
  },
  {
    id: 3,
    nickname: "Hijumee",
    fullName: "Hijumee",
    role: "Mid Lane",
    status: "Active",
    description: "Mid laner kreatif dengan mechanical skill tinggi. Spesialis dalam hero mage dengan combo yang kompleks.",
    photo: "/assets/players/hijumee.png",
    skills: [
      {
        name: "Mechanical Skill",
        level: 5,
        description: "Eksekusi skill dan combo yang sangat presisi"
      },
      {
        name: "Map Control",
        level: 4,
        description: "Kontrol peta dan tekanan mid yang konsisten"
      },
      {
        name: "Roam Support",
        level: 4,
        description: "Dukungan roaming ke garis lain saat dibutuhkan"
      }
    ]
  },
  {
    id: 4,
    nickname: "Arfy",
    fullName: "Arfy",
    role: "Gold Lane",
    status: "Active",
    description: "Gold laner kuat dengan farming yang efisien. Specialist dalam carry late game dengan scaling yang tinggi.",
    photo: "/assets/players/arfy.png",
    skills: [
      {
        name: "Farming",
        level: 5,
        description: "Efisiensi farming yang luar biasa"
      },
      {
        name: "Late Game Carry",
        level: 5,
        description: "Kemampuan carry di late game yang tinggi"
      },
      {
        name: "Team Fighting",
        level: 4,
        description: "Kontribusi dalam team fight yang konsisten"
      }
    ]
  },
  {
    id: 5,
    nickname: "Alekk",
    fullName: "Alekk",
    role: "Roamer",
    status: "Active",
    description: "Roamer baru dengan potensi besar. Specialist dalam vision control dan initiation team fight.",
    photo: "/assets/players/alekk.png",
    skills: [
      {
        name: "Vision Control",
        level: 4,
        description: "Kontrol vision tim yang baik"
      },
      {
        name: "Initiation",
        level: 4,
        description: "Kemampuan memulai team fight dengan timing yang tepat"
      },
      {
        name: "Support Play",
        level: 5,
        description: "Dukungan kepada rekan satu tim dengan sangat baik"
      }
    ]
  }
];

export default function MLBBPlayers() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10"></div>
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-black"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <img 
                  src="/assets/players/logompl.png" 
                  alt="MLBB Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                Mobile Legends: <span className="text-primary">Bang Bang</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Meet the talented players representing Alter Ego Esports in Mobile Legends Professional League
              </p>
            </motion.div>
          </div>
        </section>

        {/* Premium Player Cards */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Player <span className="text-primary">Roster</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Click on any card to view player details and statistics
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center">
              {players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <PremiumPlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}