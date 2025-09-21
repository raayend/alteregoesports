'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Merchandise() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/merchandise/sampul_merchandise.png"
              alt="Merchandise Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
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
                Official <span className="text-primary">Merchandise</span>
              </h1>
              <p className="text-subheading text-gray-300 max-w-2xl mx-auto">
                Show your support for Alter Ego Esports with our official merchandise
              </p>
            </motion.div>
          </div>
        </section>

        {/* Shopping Options */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-heading text-foreground mb-4">Shop <span className="text-primary">Online</span></h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose your preferred platform to purchase our official merchandise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="minimal-card p-12 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                  <img 
                    src="/assets/images/merchandise/tokopedia.png" 
                    alt="Tokopedia Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Tokopedia</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Shop our official merchandise on Tokopedia with secure payment and fast delivery.
                </p>
                <a 
                  href="https://www.tokopedia.com/alterego" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center text-lg px-8 py-4"
                >
                  Shop on Tokopedia
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="minimal-card p-12 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                  <img 
                    src="/assets/images/merchandise/shopee.png" 
                    alt="Shopee Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Shopee</h3>
                <p className="text-gray-400 mb-8 text-lg">
                  Find our official collection on Shopee with exclusive deals and promotions.
                </p>
                <a 
                  href="https://shopee.co.id/alterego" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center text-lg px-8 py-4"
                >
                  Shop on Shopee
                  <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}