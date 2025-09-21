'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ValorantDivision() {
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
                  src="/assets/logos/logovalorant.jpg" 
                  alt="Valorant Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-display mb-4 text-white">
                Valorant <span className="text-primary">Division</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Currently in development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Development Status Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-yellow-500/10 rounded-full flex items-center justify-center border border-yellow-500/30">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Division Under <span className="text-primary">Development</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Our Valorant division is currently in development. We&#39;re working hard to bring you 
                the best competitive experience in this tactical shooter. Please check back later 
                for updates on our roster and achievements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/divisions" 
                  className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-primary/50"
                >
                  Back to Divisions
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}