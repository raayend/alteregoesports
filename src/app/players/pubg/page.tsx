'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// PUBG Mobile players data
const players = [
  {
    id: 1,
    nickname: "badru",
    fullName: "Fikri Imanudin Badru",
    role: "Player",
    status: "Active",
    image: "/assets/players/pubg/pubgm/badru.png",
    skills: [
      { name: "Aiming", level: 5, description: "Precise aim and accuracy" },
      { name: "Game Sense", level: 4, description: "Good understanding of game situations" },
      { name: "Positioning", level: 4, description: "Strategic positioning in combat" }
    ]
  },
  {
    id: 2,
    nickname: "rosemary",
    fullName: "Juventino Ryan Jeremy Rolos",
    role: "Player",
    status: "Active",
    image: "/assets/players/pubg/pubgm/rosemary.jpg",
    skills: [
      { name: "Aiming", level: 4, description: "Accurate shooting and target acquisition" },
      { name: "Teamwork", level: 5, description: "Excellent coordination with teammates" },
      { name: "Map Awareness", level: 4, description: "Good understanding of map layouts" }
    ]
  },
  {
    id: 3,
    nickname: "alva",
    fullName: "Juvanda Fahrezy",
    role: "Player",
    status: "Active",
    image: "/assets/players/pubg/pubgm/alva.jpeg",
    skills: [
      { name: "Leadership", level: 5, description: "Excellent tactical leadership" },
      { name: "Strategy", level: 5, description: "Strong strategic planning" },
      { name: "Communication", level: 5, description: "Clear and effective team communication" }
    ]
  },
  {
    id: 4,
    nickname: "krypton",
    fullName: "Zhafir Krypton Eria",
    role: "Player",
    status: "Active",
    image: "/assets/players/pubg/pubgm/krypton.jpg",
    skills: [
      { name: "Aiming", level: 4, description: "Precise shooting skills" },
      { name: "Survivability", level: 4, description: "Good at staying alive in combat" },
      { name: "Looting", level: 5, description: "Efficient item collection" }
    ]
  },
  {
    id: 5,
    nickname: "moana",
    fullName: "Moana",
    role: "Player",
    status: "Active",
    image: "/assets/players/pubg/pubgm/moana.jpg",
    skills: [
      { name: "Support", level: 4, description: "Good at supporting teammates" },
      { name: "Healing", level: 5, description: "Efficient use of medical items" },
      { name: "Reviving", level: 4, description: "Quick and safe revives" }
    ]
  },
  {
    id: 6,
    nickname: "mxmoree",
    fullName: "Verdyansyah Trialdi Putra",
    role: "Analyst",
    status: "Active",
    image: "/assets/players/pubg/pubgm/MxMoree.png",
    skills: [
      { name: "Analysis", level: 5, description: "Detailed game analysis" },
      { name: "Strategy", level: 5, description: "Tactical planning and development" },
      { name: "Communication", level: 4, description: "Clear communication of strategies" }
    ]
  },
  {
    id: 7,
    nickname: "aces",
    fullName: "Muhammad Haris",
    role: "Manager",
    status: "Active",
    image: "/assets/players/pubg/pubgm/aces.jpg",
    skills: [
      { name: "Management", level: 5, description: "Effective team management" },
      { name: "Organization", level: 5, description: "Well-organized team operations" },
      { name: "Logistics", level: 4, description: "Smooth tournament logistics" }
    ]
  }
];

export default function PUBGPlayers() {
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
                  src="/assets/logos/logopubg.jpeg" 
                  alt="PUBG Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                PUBG <span className="text-primary">Mobile</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Meet the talented players representing Alter Ego Esports in PUBG Mobile tournaments
              </p>
            </motion.div>
          </div>
        </section>

        {/* Players Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {players.map((player, index) => (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="minimal-card overflow-hidden"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <div className="relative w-32 h-32">
                      <img 
                        src={player.image} 
                        alt={player.nickname}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{player.nickname}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {player.role}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{player.fullName}</p>
                    {player.status && (
                      <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        {player.status}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}