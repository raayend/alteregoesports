'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import PremiumPlayerCard from '../../components/PremiumPlayerCard';

// Honor of Kings players data
const hokPlayers = [
  {
    id: 1,
    nickname: "ZenShao",
    fullName: "Cheng Wei Han",
    role: "Jungle",
    status: "Active",
    description: "ZenShao is a Malaysian player who is currently playing as a Jungler for Alter Ego Esports. He previously played for various teams including Nova Esports, Boon Lee Gaming, UndeRank, and A Dope Team before joining Alter Ego in August 2025.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Jungling", level: 4, description: "Efficient jungle farming and pathing" },
      { name: "Ganking", level: 4, description: "Good gank timing and execution" },
      { name: "Objective Control", level: 4, description: "Solid control of game objectives" }
    ]
  },
  {
    id: 2,
    nickname: "Clausen",
    fullName: "Data tidak tersedia",
    role: "Clash lane",
    status: "Active",
    description: "Clausen is an Indonesian player who is currently playing as a Clash lane for Alter Ego Esports.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Farming", level: 3, description: "Consistent farming in the clash lane" },
      { name: "Team Fighting", level: 3, description: "Good contribution in team fights" },
      { name: "Map Awareness", level: 3, description: "Awareness of map situations" }
    ]
  },
  {
    id: 3,
    nickname: "Icytail",
    fullName: "Data tidak tersedia",
    role: "Clash lane",
    status: "Active",
    description: "Icytail is an Indonesian player who is currently playing as a Clash lane for Alter Ego Esports.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Farming", level: 3, description: "Consistent farming in the clash lane" },
      { name: "Team Fighting", level: 3, description: "Good contribution in team fights" },
      { name: "Map Awareness", level: 3, description: "Awareness of map situations" }
    ]
  },
  {
    id: 4,
    nickname: "1Tut",
    fullName: "Data tidak tersedia",
    role: "Farm lane",
    status: "Active",
    description: "1Tut is an Indonesian player who is currently playing as a Farm lane for Alter Ego Esports.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Farming", level: 4, description: "Efficient farming in the farm lane" },
      { name: "Split Push", level: 3, description: "Good split push and wave management" },
      { name: "Late Game", level: 3, description: "Solid late game scaling" }
    ]
  },
  {
    id: 5,
    nickname: "Niubii",
    fullName: "Data tidak tersedia",
    role: "Mid lane",
    status: "Active",
    description: "Niubii is an Indonesian player who is currently playing as a Mid lane for Alter Ego Esports.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Mechanical Skill", level: 4, description: "Precise skill execution and combos" },
      { name: "Map Control", level: 3, description: "Consistent mid lane pressure" },
      { name: "Roam Support", level: 3, description: "Good roaming support to other lanes" }
    ]
  },
  {
    id: 6,
    nickname: "Han",
    fullName: "Data tidak tersedia",
    role: "Coach",
    status: "Active",
    description: "Han is a Chinese coach who is currently coaching for Alter Ego Esports Honor of Kings division.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Strategy", level: 5, description: "Excellent tactical planning and game analysis" },
      { name: "Coaching", level: 5, description: "Effective mentor and teacher" },
      { name: "Meta Knowledge", level: 5, description: "Deep understanding of current meta" }
    ]
  },
  {
    id: 7,
    nickname: "Decoy",
    fullName: "Data tidak tersedia",
    role: "Support",
    status: "Active",
    description: "Decoy is an Indonesian player who is currently playing as a Support for Alter Ego Esports.",
    photo: "/assets/players/hok/unknownplayer.png",
    skills: [
      { name: "Vision Control", level: 4, description: "Good team vision control" },
      { name: "Initiation", level: 3, description: "Good team fight initiation timing" },
      { name: "Support Play", level: 5, description: "Excellent support for teammates" }
    ]
  }
];

// Honor of Kings achievements
const hokAchievements = [
  {
    id: 1,
    title: "Indonesia Kings Laga Spring 2025",
    date: "2025-05-18",
    description: "7th - 8th Place",
    placement: "7th - 8th",
    prize: "$1,650",
    image: "/assets/images/ourdivisions/divisions/hok/achievments/ikl.png"
  },
  {
    id: 2,
    title: "Honor of Kings Invitational Season 3 - Indonesia Qualifier",
    date: "2024-12-15",
    description: "5th - 6th Place",
    placement: "5th - 6th",
    prize: "TBD",
    image: "/assets/images/ourdivisions/divisions/hok/achievments/HoK_Invitational_allmode.png"
  },
  {
    id: 3,
    title: "UPoint Esports Competitive Series Season 1",
    date: "2024-12-06",
    description: "5th - 8th Place",
    placement: "5th - 8th",
    prize: "$126.06",
    image: "/assets/images/ourdivisions/divisions/hok/achievments/UECS_allmode.png"
  }
];

export default function HOKDivision() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/videos/divisions/HOK/hoktrailer.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
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
                  src="/assets/logos/logohok.jpeg" 
                  alt="Honor of Kings Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                Honor of <span className="text-primary">Kings</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Competing in one of the world&apos;s largest mobile MOBA games
              </p>
            </motion.div>
          </div>
        </section>

        {/* About HOK Division - NEW SECTION */}
        <section className="py-16 bg-gradient-to-b from-background to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: About the Game */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="minimal-card p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Tentang Honor of Kings</h3>
                <p className="text-gray-400">
                  Honor of Kings adalah permainan MOBA mobile yang menguji keterampilan strategi, kerja tim, dan eksekusi. 
                  Dua tim bersaing untuk menghancurkan Crystal Nexus lawan sambil melindungi milik mereka sendiri.
                </p>
              </motion.div>

              {/* Card 2: Team Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="minimal-card p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Filosofi Tim Kami</h3>
                <p className="text-gray-400">
                  Kami percaya pada kerja tim yang solid, komunikasi yang jelas, dan adaptasi cepat terhadap meta game. 
                  Setiap anggota tim memiliki peran spesifik untuk mencapai kesuksesan kolektif.
                </p>
              </motion.div>

              {/* Card 3: Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="minimal-card p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Pendekatan Kami</h3>
                <p className="text-gray-400">
                  Pelatihan intensif, analisis gameplay lawan, dan pengembangan strategi inovatif menjadi fondasi utama kami. 
                  Kami terus berinovasi untuk tetap kompetitif di kancah internasional.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Player Roster */}
        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Honor of Kings <span className="text-primary">Roster</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our talented players competing in Honor of Kings tournaments
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl">
              {hokPlayers.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex justify-center"
                >
                  <PremiumPlayerCard player={player} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-b from-background via-gray-900/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary),0.05)_0%,transparent_70%)]"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Division <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Celebrating our victories in the world&#39;s premier Honor of Kings tournaments
              </p>
            </motion.div>

            {/* Achievement Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {hokAchievements.map((achievement, index) => {
                const isGold = achievement.placement === '1st';
                const isSilver = achievement.placement === '2nd';
                const isBronze = achievement.placement?.includes('3') || achievement.placement?.includes('5') || achievement.placement?.includes('7');

                const placementColor = isGold
                  ? 'from-yellow-400 to-yellow-600'
                  : isSilver
                  ? 'from-gray-300 to-gray-500'
                  : isBronze
                  ? 'from-orange-400 to-orange-600'
                  : 'from-primary to-primary/80';

                const placementBg = isGold
                  ? 'bg-gradient-to-br from-yellow-900/40 to-yellow-800/20'
                  : isSilver
                  ? 'bg-gradient-to-br from-gray-700/40 to-gray-600/20'
                  : isBronze
                  ? 'bg-gradient-to-br from-orange-900/40 to-orange-800/20'
                  : 'bg-gradient-to-br from-primary/40 to-primary/20';

                const placementBorder = isGold
                  ? 'border-yellow-500/30'
                  : isSilver
                  ? 'border-gray-500/30'
                  : isBronze
                  ? 'border-orange-500/30'
                  : 'border-primary/30';

                const placementText = isGold
                  ? 'text-yellow-300'
                  : isSilver
                  ? 'text-gray-300'
                  : isBronze
                  ? 'text-orange-300'
                  : 'text-primary';

                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className={`relative h-full rounded-2xl overflow-hidden border ${placementBorder} transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/20 backdrop-blur-sm ${placementBg}`}>
                      {/* Tournament Image */}
                      {achievement.image && (
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6 flex flex-col justify-between text-white">
                        {/* Top Section */}
                        <div className="flex justify-between items-start mb-4">
                          {/* Placement Badge */}
                          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold ${placementText} backdrop-blur-sm bg-black/40 border ${placementBorder}`}>
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${placementColor} mr-2`}></div>
                            {achievement.placement} Place
                          </div>

                          {/* Year */}
                          <div className="text-xs font-medium text-gray-400 bg-black/40 px-2 py-1 rounded border border-border-color/30">
                            {achievement.date}
                          </div>
                        </div>

                        {/* Middle Section */}
                        <div className="mb-4 flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>

                        {/* Bottom Section */}
                        <div className="flex justify-between items-center pt-4 border-t border-border-color/30">
                          {achievement.prize && (
                            <div className="text-sm font-semibold text-green-400 flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                              </svg>
                              {achievement.prize}
                            </div>
                          )}

                          {/* Trophy Icon */}
                          <div className={`p-2 rounded-full bg-gradient-to-r ${placementColor} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 2L13.09 8.26L20 9L15 14L16.18 21L10 17.77L3.82 21L5 14L0 9L6.91 8.26L10 2Z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}