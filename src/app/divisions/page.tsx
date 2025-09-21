'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

interface Division {
  id: number;
  name: string;
  game: string;
  description: string;
  image: string;
  link: string;
  development?: boolean;
}

export default function DivisionsPage() {
  const divisions: Division[] = [
    {
      id: 1,
      name: "Mobile Legends (MPL)",
      game: "MLBB MPL",
      description: "Our flagship competitive team competing in MPL Indonesia and other Southeast Asian tournaments.",
      image: "/assets/logos/logompl.png",
      link: "/divisions/mlbb"
    },
    {
      id: 8,
      name: "Mobile Legends (MDL)",
      game: "MLBB MDL",
      description: "Our Mobile Legends team competing in the Mobile Legends Development League.",
      image: "/assets/logos/logomdl.png",
      link: "/divisions/mdl"
    },
    {
      id: 2,
      name: "PUBG Mobile",
      game: "PUBG Mobile",
      description: "Competing in PUBG Mobile tournaments across Southeast Asia.",
      image: "/assets/logos/logopubg.jpeg",
      link: "/divisions/pubg"
    },
    {
      id: 7,
      name: "PUBG",
      game: "PUBG",
      description: "Our PC division competing in the original battle royale experience.",
      image: "/assets/logos/logopubg.jpeg",
      link: "/divisions/pubg-pc"
    },
    {
      id: 4,
      name: "Honor of Kings",
      game: "HOK",
      description: "Competing in one of the world's largest mobile MOBA games.",
      image: "/assets/logos/logohok.jpeg",
      link: "/divisions/hok"
    },
    {
      id: 6,
      name: "Counter Strike",
      game: "CS",
      description: "Our newest division competing in the premier FPS esports scene.",
      image: "/assets/logos/logocs.png",
      link: "/divisions/cs"
    },
    {
      id: 3,
      name: "Valorant",
      game: "VALORANT",
      description: "Representing Alter Ego in tactical shooter competitions.",
      image: "/assets/logos/logovalorant.jpg",
      link: "/divisions/valorant",
      development: true
    },
    {
      id: 5,
      name: "Dota 2",
      game: "DOTA2",
      description: "Our PC esports division competing in the classic MOBA.",
      image: "/assets/logos/logodota.jpg",
      link: "/divisions/dota2",
      development: true
    }
  ];

  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [hoveredDivision, setHoveredDivision] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Stats for the bottom section
  const stats = [
    { value: "6+", label: "Active Divisions" },
    { value: "50+", label: "Professional Players" },
    { value: "100+", label: "Tournaments Played" },
    { value: "25+", label: "Major Titles" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-dark-bg">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Animated background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-dark-bg"></div>
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'radial-gradient(circle at 25% 25%, #ff2a2a 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ff2a2a 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-500/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              {/* Elegant logo display */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 relative"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-full h-full bg-card-bg/80 rounded-full flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                  <img 
                    src="/assets/logos/alteregologo.png" 
                    alt="Alter Ego Logo" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Clean typography */}
              <motion.h1 
                className="text-3xl md:text-display mb-4 md:mb-6 text-foreground font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Our Competitive <span className="text-primary">Divisions</span>
              </motion.h1>
              
              {/* Refined description */}
              <motion.p 
                className="text-base md:text-subheading text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Professional esports teams competing at the highest level across multiple titles, 
                representing Indonesia on the global stage with pride and excellence.
              </motion.p>
              
              {/* Minimalist CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <Link 
                  href="#divisions" 
                  className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-primary/50"
                >
                  <span className="mr-2">Explore Our Teams</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* All Divisions Grid */}
        <section id="divisions" className="py-20 bg-background relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16 relative"
            >
              <h2 className="text-2xl md:text-heading text-foreground mb-4">
                Professional <span className="text-primary">Esports Teams</span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Each division represents the pinnacle of competitive excellence in their respective games
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {divisions.map((division, index) => (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredDivision(division.id)}
                  onMouseLeave={() => setHoveredDivision(null)}
                >
                  <Link href={division.link} className="block h-full">
                    {/* Elegant card design with red/black theme */}
                    <div className={`relative h-full rounded-2xl overflow-hidden border border-red-500/30 bg-gradient-to-br from-card-bg to-dark-bg backdrop-blur-sm transition-all duration-500 shadow-xl hover:shadow-2xl ${hoveredDivision === division.id ? 'ring-2 ring-red-500/50' : ''}`}>
                      {/* Red gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Game logo centered with elegant styling */}
                      <div className="flex flex-col items-center justify-center p-8">
                        <div className="relative w-40 h-40 flex items-center justify-center mb-6">
                          <motion.div 
                            className="absolute inset-0 rounded-2xl bg-red-500/10 group-hover:scale-110 transition-transform duration-500"
                            animate={hoveredDivision === division.id ? { 
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0]
                            } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          ></motion.div>
                          <div className="relative w-32 h-32 flex items-center justify-center bg-gradient-to-br from-card-bg to-dark-bg rounded-xl border border-border-color/50 p-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <img 
                              src={division.image} 
                              alt={division.name}
                              className="w-24 h-24 object-contain"
                            />
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-foreground mb-2 text-center">{division.name}</h3>
                        <div className="px-3 py-1 bg-red-500/10 rounded-full border border-red-500/30 mb-4">
                          <span className="text-red-400 font-medium text-sm">{division.game}</span>
                        </div>
                        <p className="text-gray-500 text-center text-sm">{division.description}</p>
                        
                        {/* Development status indicator */}
                        {division.development && (
                          <div className="mt-4 px-3 py-1 bg-yellow-500/10 rounded-full border border-yellow-500/30">
                            <span className="text-yellow-400 font-medium text-xs">In Development</span>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <div className="p-6 pt-0 flex justify-center">
                        <div 
                          className={`flex items-center justify-center px-4 py-3 w-full ${
                            division.development 
                              ? "bg-yellow-500/10 hover:bg-yellow-500/20 text-foreground border border-yellow-500/30 hover:border-yellow-500/50" 
                              : "bg-red-500/10 hover:bg-red-500/20 text-foreground border border-red-500/30 hover:border-red-500/50"
                          } font-medium text-sm rounded-lg transition-all duration-300`}
                        >
                          <span>{division.development ? "Coming Soon" : "View Team"}</span>
                          {!division.development && (
                            <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
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