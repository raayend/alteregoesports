'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1, y: 0 });
    
    // Try to play video if it exists
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [controls]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Local video file - now active */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/profilealterego.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              Professional Esports Organization
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-display mb-6 text-white"
          >
            ALTER EGO <span className="text-primary">ESPORTS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-subheading text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Dominating the competitive scene in Mobile Legends: Bang Bang and other mobile esports titles across Southeast Asia with precision and passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/divisions" className="btn btn-primary">
              Explore Our Divisions
            </Link>
            <Link href="/updates" className="btn btn-outline">
              Roadmap Website Alter Ego Esports
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <div className="w-8 h-8 border-l-2 border-b-2 border-primary animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}