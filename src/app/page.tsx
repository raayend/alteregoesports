'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TransparentHeader from './components/TransparentHeader';
import Hero from './components/Hero';
import HistoryVisionMission from './components/HistoryVisionMission';
import AlterChampsReviews from './components/AlterChampsReviews';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if user has already visited the site
    const hasVisited = localStorage.getItem('hasVisitedAlterEgo');
    
    if (hasVisited) {
      // Skip loading screen for returning users
      setIsLoading(false);
      return;
    }
    
    // Show loading screen for first-time visitors
    localStorage.setItem('hasVisitedAlterEgo', 'true');
    
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    // Set loading to false after 5 seconds
    const timer = setTimeout(() => {
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 5000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-32 h-32 mx-auto mb-8">
            <img 
              src="/assets/logos/alteregologo.png" 
              alt="Alter Ego Esports" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-64 h-2 bg-card-bg rounded-full mx-auto overflow-hidden mb-4">
            <motion.div 
              className="h-full bg-primary rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div 
            className="text-foreground text-xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {loadingProgress}%
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Transparent header with scroll behavior */}
      <TransparentHeader />
      
      <main className="flex-grow">
        <Hero />
        <HistoryVisionMission />
        <AlterChampsReviews />
        <Partners />
      </main>
      
      <Footer />
    </div>
  );
}