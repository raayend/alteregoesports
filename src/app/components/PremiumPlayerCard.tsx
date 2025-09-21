'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Player {
  id: number;
  nickname: string;
  fullName: string;
  role: string;
  status: string;
  description: string;
  photo: string;
  skills?: {
    name: string;
    level: number; // 1-5
    description: string;
  }[];
}

interface PremiumPlayerCardProps {
  player: Player;
  className?: string;
}

export default function PremiumPlayerCard({ 
  player,
  className = ''
}: PremiumPlayerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Render skill level with dots instead of stars
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full ${i < level ? 'bg-primary' : 'bg-gray-700'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div 
      ref={cardRef}
      className={`relative w-64 h-80 cursor-pointer perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full preserve-3d transition-all duration-700 ease-[cubic-bezier(0.4, 0, 0.2, 1)]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of Card - Premium Black Design */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          {/* Premium border highlight */}
          <motion.div 
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: isHovered 
                ? '0 0 20px rgba(255, 42, 42, 0.3)' 
                : '0 0 0px rgba(255, 42, 42, 0)'
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Card Content */}
          <div className="relative z-10 h-full flex flex-col p-5 text-white">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-xl tracking-tight truncate">{player.nickname}</h3>
                <p className="text-sm text-gray-400 mt-1">{player.fullName}</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-gray-800 px-2 py-1 rounded text-xs font-mono">
                  #{player.id.toString().padStart(3, '0')}
                </span>
              </div>
            </div>
            
            {/* Player Image */}
            <div className="flex-1 flex items-center justify-center my-3">
              <motion.div 
                className="relative w-40 h-40 rounded-lg overflow-hidden border border-gray-800"
                animate={{ 
                  y: isHovered ? -3 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={player.photo} 
                  alt={player.nickname}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to CS logo if player photo fails to load
                    const target = e.target as HTMLImageElement;
                    if (target.src !== window.location.origin + "/assets/logos/logocs.png") {
                      target.src = "/assets/logos/logocs.png";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            </div>
            
            {/* Role */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium text-gray-300">{player.role}</span>
            </div>
          </div>
        </div>
        
        {/* Back of Card - Premium Black Design */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 to-black shadow-2xl"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          {/* Back Content - Scrollable */}
          <div className="relative z-10 h-full flex flex-col p-5 text-white overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-xl tracking-tight">{player.nickname}</h3>
                <p className="text-sm text-gray-400">{player.role}</p>
              </div>
              <div className="flex items-center bg-gray-800 px-2 py-1 rounded">
                <span className="text-xs font-mono">#{player.id.toString().padStart(3, '0')}</span>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-4 flex-1">
              <p className="text-sm text-gray-300 leading-relaxed">{player.description}</p>
            </div>
            
            {/* Skills */}
            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2 text-gray-300">Skills</h4>
              <div className="space-y-3">
                {player.skills && player.skills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        {renderSkillLevel(skill.level)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{skill.description}</p>
                    </div>
                  </div>
                ))}
                {!player.skills || player.skills.length === 0 && (
                  <p className="text-xs text-gray-500">Skills data not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Subtle flip indicator */}
      <motion.div 
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span>Click to flip</span>
      </motion.div>
    </div>
  );
}