'use client';

import { motion } from 'framer-motion';

export default function Partners() {
  const sponsors = [
    { id: 1, name: "Boncabe", logo: "/assets/sponsors/boncabe.png" },
    { id: 2, name: "CBN Fiber", logo: "/assets/sponsors/cbnfiber.png" },
    { id: 3, name: "Enter Komputer", logo: "/assets/sponsors/enterkomputer.png" },
    { id: 4, name: "Interbat", logo: "/assets/sponsors/interbat.png" },
    { id: 5, name: "SteelSeries", logo: "/assets/sponsors/steelseries.png" },
    { id: 6, name: "Webull", logo: "/assets/sponsors/Webull_Logo.png" }
  ];

  // Partners that need slightly larger logos
  const largeLogoPartners = [3, 4]; // Enter Komputer, Interbat
  const extraLargeLogoPartners = [5]; // SteelSeries - slightly larger

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-heading text-foreground mb-4"><span className="text-primary">Mitra</span> Kami</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Didukung dengan bangga oleh para pemimpin industri dan brand terkemuka
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <div 
              key={sponsor.id} 
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className={`w-auto object-contain ${
                  extraLargeLogoPartners.includes(sponsor.id) ? 'max-h-10' : 
                  largeLogoPartners.includes(sponsor.id) ? 'max-h-9' : 'max-h-8'
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}