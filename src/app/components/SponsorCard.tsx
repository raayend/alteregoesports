'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  category: string;
}

export default function SponsorCard({ sponsor, index }: { sponsor: Sponsor; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 120;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const displayDescription = expanded 
    ? sponsor.description 
    : sponsor.description.length > maxLength 
      ? sponsor.description.substring(0, maxLength) + "..." 
      : sponsor.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="premium-card bg-gradient-to-br from-card-bg to-secondary rounded-2xl border border-border-color overflow-hidden hover:border-primary transition-all duration-500 h-full flex flex-col shadow-xl"
    >
      <div className="p-8 flex flex-col flex-grow relative">
        {/* Premium badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
            <FiStar className="mr-1" />
            PREMIUM
          </div>
        </div>
        
        {/* Logo and category */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-20 h-20 flex items-center justify-center bg-white rounded-xl p-3 shadow-lg">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name} 
              className="max-h-12 object-contain"
            />
          </div>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white whitespace-nowrap">
            {sponsor.category}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-4">{sponsor.name}</h3>
        
        {/* Description with read more/show less */}
        <div className="text-gray-300 text-base mb-6 flex-grow leading-relaxed">
          {displayDescription}
          {sponsor.description.length > maxLength && (
            <button 
              onClick={toggleExpanded}
              className="text-primary hover:text-primary-dark font-medium ml-1 focus:outline-none"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}