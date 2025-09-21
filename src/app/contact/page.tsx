'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link 
              href="/" 
              className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Kembali ke Beranda
            </Link>
            <h1 className="text-display text-foreground mb-6">
              Hubungi <span className="text-primary">Kami</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Punya pertanyaan atau ingin menjalin kemitraan dengan Alter Ego Esports? Kami siap membantu Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card-bg rounded-xl border border-border-color p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMail className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-gray-400">partnership@alterego.gg</p>
              <p className="text-gray-400">info@alterego.gg</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-card-bg rounded-xl border border-border-color p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPhone className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Telepon</h3>
              <p className="text-gray-400">+62 21 1234 5678</p>
              <p className="text-gray-400">+62 812 3456 7890</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card-bg rounded-xl border border-border-color p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="text-primary text-xl" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Alamat</h3>
              <p className="text-gray-400">Jl. Esports No. 123</p>
              <p className="text-gray-400">Jakarta, Indonesia 12345</p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-card-bg rounded-xl border border-border-color p-8"
          >
            <h2 className="text-heading text-foreground mb-6 text-center">
              Kirim <span className="text-primary">Pesan</span>
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-secondary border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-secondary border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-secondary border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  placeholder="Subjek pesan"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-primary"
              >
                Kirim Pesan
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}