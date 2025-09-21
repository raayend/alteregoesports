'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AlterChampsReviews() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Budi Santoso",
      username: "@BudiGamer",
      comment: "Alter Ego mainnya keren banget! Dukungan mereka ke komunitas esports Indo bikin semangat. Gas terus tim!",
      avatar: "/assets/logos/avatarsatu.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Siti Rahmawati",
      username: "@SitiEsports",
      comment: "Sebagai fans dari awal, gue bangga banget liat perkembangan Alter Ego. Mereka bukan cuma juara turnamen, tapi juga bangun komunitas yang solid.",
      avatar: "/assets/logos/avatardua.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Ahmad Prasetyo",
      username: "@AhmadProPlayer",
      comment: "Performa Alter Ego di MPL Indo emang gila! Mereka layak jadi wakil Indo di level internasional, mantap!",
      avatar: "/assets/logos/avatarsatu.jpg",
      rating: 5
    },
    {
      id: 4,
      name: "Dewi Kartika",
      username: "@DewiChamps",
      comment: "Konten yang dibuat Alter Ego edukatif dan seru banget. Mereka sukses kenalin esports ke masyarakat luas dengan vibe positif.",
      avatar: "/assets/logos/avatardua.jpg",
      rating: 5
    },
    {
      id: 5,
      name: "Rudi Hartono",
      username: "@RudiGaming",
      comment: "Leadership dan strategi tim Alter Ego bikin gue kagum. Mereka buktiin kerja keras dan teamwork itu kunci sukses.",
      avatar: "/assets/logos/avatarsatu.jpg",
      rating: 5
    },
    {
      id: 6,
      name: "Linda Wijaya",
      username: "@LindaEsports",
      comment: "Gue appreciate banget dedikasi Alter Ego ngembangin talenta muda Indo. Program akademi mereka bantu banget buat pemain pemula.",
      avatar: "/assets/logos/avatardua.jpg",
      rating: 5
    }
  ]);

  // Render star ratings
  const renderRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading text-foreground mb-4">
            What Our <span className="text-primary">AlterChamps</span> Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our passionate fans have to say about Alter Ego Esports&apos; journey and achievements
          </p>
        </motion.div>

        {/* Auto-scrolling carousel with infinite loop */}
        <div className="relative overflow-hidden py-4">
          <div className="flex animate-loop-scroll">
            {/* First set of reviews */}
            {reviews.map((review) => (
              <div
                key={`first-${review.id}`}
                className="flex-shrink-0 w-80 mx-3 minimal-card"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{review.name}</h3>
                      <p className="text-sm text-gray-400">{review.username}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {renderRating(review.rating)}
                  </div>
                  
                  <p className="text-gray-300 italic">&quot;{review.comment}&quot;</p>
                </div>
              </div>
            ))}
            
            {/* Second set of reviews for seamless loop */}
            {reviews.map((review) => (
              <div
                key={`second-${review.id}`}
                className="flex-shrink-0 w-80 mx-3 minimal-card"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{review.name}</h3>
                      <p className="text-sm text-gray-400">{review.username}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {renderRating(review.rating)}
                  </div>
                  
                  <p className="text-gray-300 italic">&quot;{review.comment}&quot;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
      </div>
    </section>
  );
}