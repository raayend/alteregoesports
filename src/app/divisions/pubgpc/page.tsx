'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Player, Achievement, pubgpcPlayers, pubgpcAchievements } from '../../utils';
import PremiumPlayerCard from '../../components/PremiumPlayerCard';

export default function PUBGPCDivision() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load local data
    const loadLocalData = async () => {
      try {
        setLoading(true);
        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        setPlayers(pubgpcPlayers);
        setAchievements(pubgpcAchievements);
        setLoading(false);
      } catch (err) {
        console.error('Error loading local data:', err);
        setLoading(false);
      }
    };

    loadLocalData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-foreground">Loading team data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Video Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/assets/videos/divisions/PUBG/PUBGPC/trailerpubgpc.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/70 z-10"></div>

          <div className="container mx-auto px-6 relative z-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <img
                  src="/assets/logos/logopubgpc.png"
                  alt="PUBG PC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                PUBG <span className="text-primary">PC</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Competing in PUBG PC tournaments across the globe
              </p>
            </motion.div>
          </div>
        </section>

        {/* About PUBG PC Division - NEW SECTION */}
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
                <h3 className="text-xl font-bold text-foreground mb-3">About PUBG PC</h3>
                <p className="text-gray-400">
                  PUBG PC is a battle royale game where 100 players compete to be the last person or team standing. Our team excels in strategic gameplay, precise shooting, and tactical teamwork.
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
                <h3 className="text-xl font-bold text-foreground mb-3">Our Philosophy</h3>
                <p className="text-gray-400">
                  We focus on precision gameplay, strategic positioning, and coordinated team movements. Our players train extensively to master both mechanical skills and tactical decision-making.
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
                <h3 className="text-xl font-bold text-foreground mb-3">Development Approach</h3>
                <p className="text-gray-400">
                  Our approach combines rigorous practice schedules, detailed gameplay analysis, and continuous improvement of strategies. We analyze every match to identify strengths and areas for improvement.
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
                PUBG <span className="text-primary">Team</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our talented players competing in PUBG PC tournaments
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-auto max-w-7xl">
              {players.map((player, index) => (
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
                Team <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Celebrating our journey in PUBG PC competitions
              </p>
            </motion.div>

            {/* Achievement Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {achievements.map((achievement, index) => {
                const isGold = achievement.placement === '1st';
                const isSilver = achievement.placement === '2nd';
                const isBronze = achievement.placement?.includes('3') || achievement.placement?.includes('5');

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