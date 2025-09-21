'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Players() {
  const divisions = [
    {
      id: 1,
      name: "Mobile Legends: Bang Bang",
      game: "MLBB",
      description: "Our flagship competitive team competing in MPL Indonesia and other Southeast Asian tournaments.",
      image: "/assets/players/logompl.png",
      link: "/players/mlbb"
    },
    {
      id: 2,
      name: "PUBG Mobile",
      game: "PUBG",
      description: "Competing in PUBG Mobile tournaments across Southeast Asia.",
      image: "/assets/players/logopubg.jpeg",
      link: "/players/pubg"
    },
    {
      id: 3,
      name: "Valorant",
      game: "VALORANT",
      description: "Representing Alter Ego in tactical shooter competitions.",
      image: "/assets/players/logovalorant.jpg",
      link: "/players/valorant"
    },
    {
      id: 4,
      name: "Honor of Kings",
      game: "HOK",
      description: "Competing in one of the world's largest mobile MOBA games.",
      image: "/assets/players/logohok.jpeg",
      link: "/players/hok"
    },
    {
      id: 5,
      name: "Dota 2",
      game: "DOTA2",
      description: "Our PC esports division competing in the classic MOBA.",
      image: "/assets/players/logodota.jpg",
      link: "/players/dota2"
    }
  ];

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
                  src="/assets/logos/alteregologo.png" 
                  alt="Alter Ego Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                Our <span className="text-primary">Players</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Meet the talented players representing Alter Ego Esports across multiple divisions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Divisions Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {divisions.map((division, index) => (
                <motion.div
                  key={division.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="minimal-card overflow-hidden group"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-all duration-300"></div>
                    <div className="relative w-24 h-24">
                      <img 
                        src={division.image} 
                        alt={division.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                        <span className="text-primary font-bold text-xs">{division.game}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{division.name}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{division.description}</p>
                    <Link href={division.link} className="text-primary text-sm font-medium flex items-center hover:opacity-80 transition-opacity">
                      View players
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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