'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// News data parsed from detail_news.md
const newsData = [
  {
    id: 1,
    title: "Tantangan Berat Menuju Grand Final PMSL SEA Fall 2025",
    excerpt: "Analisis performa Alter Ego Ares di PMSL SEA Fall 2025. Temukan mengapa performa mereka menurun di Super Weekend dan bagaimana hal itu mengancam peluang mereka untuk lolos ke Grand Final. Ikuti terus update terbaru seputar perjuangan tim Indonesia di PMSL.",
    content: `Perjalanan Alter Ego Ares di PMSL SEA Fall 2025 kini memasuki fase krusial yang penuh tekanan. Setelah tampil dominan di babak grup dan memuncaki klasemen, performa mereka justru menurun drastis saat memasuki babak Super Weekend. Situasi ini memicu kekhawatiran besar di kalangan penggemar dan menempatkan mereka dalam posisi yang tidak aman.

Meskipun lolos ke Super Weekend dengan poin tinggi, hasil yang mereka peroleh di sana jauh dari kata memuaskan. Alter Ego Ares terlihat kesulitan beradaptasi dengan ritme permainan yang lebih cepat dan strategi lawan yang lebih agresif. Alhasil, mereka tidak mampu mengumpulkan poin yang cukup untuk memastikan posisi aman di klasemen.

Ancaman Gagal Lolos ke Grand Final
Performa yang kurang baik di Super Weekend ini menempatkan Alter Ego Ares dalam risiko nyata. Jika mereka kembali tampil buruk di babak Super Weekend minggu kedua nanti, impian mereka untuk melaju ke Grand Final dan bersaing memperebutkan gelar juara bisa pupus. Poin yang mereka kumpulkan di Super Weekend sangat vital untuk menentukan peringkat akhir dan tiket ke babak penentuan.

Ini menjadi ujian sesungguhnya bagi mentalitas dan kemampuan adaptasi tim. Mereka harus segera mengevaluasi kesalahan yang terjadi, memperbaiki strategi, dan menemukan kembali konsistensi yang mereka tunjukkan di babak grup. Mampukah Alter Ego Ares bangkit, menemukan kembali performa terbaiknya, dan mengamankan tempat di Grand Final? Atau akankah perjalanan mereka terhenti lebih cepat dari yang diharapkan? Mari kita saksikan perjuangan mereka di sisa pertandingan PMSL SEA Fall 2025!`,
    date: "2025-09-15",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritasatu.png",
    readTime: "4 min read"
  },
  {
    id: 2,
    title: "Alter Ego Enma Pertegas Tren Positif, Revemoin Masih Terpuruk Tanpa Kemenangan",
    excerpt: "Pertarungan antara Alter Ego Enma dan Revemoin Esports di Week 4 Day 3 cross-group IKL Fall 2025 kembali menunjukkan perbedaan kelas yang mencolok di antara tim-tim kompetisi. Pertandingan ini menegaskan tren positif yang tengah dijalani Alter Ego, yang berhasil menutup laga dengan skor telak 2-0.",
    content: `Di sisi lain, Revemoin masih belum bisa keluar dari tren buruk mereka yang kini mengoleksi rekor tanpa kemenangan. Perjuangan mereka di panggung nasional terbilang berat, dengan win rate 0% yang belum menunjukkan tanda-tanda perbaikan.

Game 1: Strategi Revemoin Berbalik Menghukum
Di game pertama, Revemoin mencoba membuka permainan dengan strategi yang berfokus pada Sasakii yang menggunakan hero Musashi, berusaha menciptakan celah di farm lane Alter Ego. Namun, strategi tersebut justru menjadi bumerang. 1Tut dengan hero Arli tampil sangat agresif, sementara ZenShao menunjukkan kecerdasan taktis dengan membalikkan keadaan.

Dia langsung mengincar Imagination, damage dealer utama Revemoin, dan membuat lawan kesulitan. Pertarungan terus memanas hingga munculnya Tempest Dragon. Sayangnya, Revemoin kesulitan untuk melakukan contest di area krusial ini. Alter Ego dengan rapi mengamankan objektif penting tersebut dan menutup game pertama dengan skor 0-1, menunjukkan dominasi mereka.

Game 2: Momen Nuwa yang Mengunci Kemenangan
Memasuki game kedua, Revemoin sebenarnya sempat menjaga keseimbangan gold di pertengahan pertandingan. Namun, momentum krusial datang ketika niubii dengan hero Nuwa berhasil mencuri Overlord tanpa ada perlawanan.

Aksi ini langsung mengembalikan keunggulan gold yang sempat setara. Alter Ego seakan mendapatkan bonus besar, dan mereka langsung mengambil keuntungan lebih dengan mengamankan Tyrant setelahnya, membuat niubii merasa seperti mendapatkan "beli satu gratis satu".

Di menit ke-11, Alter Ego mulai meningkatkan tekanan ke lini depan Revemoin, memaksa mereka untuk bertahan tanpa banyak opsi serangan balik. Dengan momentum yang semakin condong, Alter Ego akhirnya menyapu bersih game kedua dan mengunci kemenangan 2-0 yang meyakinkan.

Analisis Alter Ego: Revemoin Masih Gelap
Selepas pertandingan, Decoy dan Clausen dari Alter Ego Enma mengaku enggan berspekulasi siapa tim yang berpotensi dikalahkan oleh Revemoin. Mereka tetap berhati-hati dalam memberikan prediksi, meskipun mengakui rekor tanpa kemenangan yang dimiliki lawan. "Sejauh ini, mereka masih tanpa kemenangan.

Tapi mungkin saja ada titik terang saat menghadapi tim di Group Tyrant," ujar Clausen. Nama-nama seperti Mahadewa dan ONIC disebut sebagai peluang bagi Revemoin untuk mencuri poin pertama mereka musim ini. Meskipun demikian, Clausen menambahkan bahwa hal ini bisa terjadi hanya jika performa Revemoin meningkat secara drastis, mengingat Mahadewa dan ONIC juga memiliki ambisi besar untuk naik ke papan atas.

Pertandingan ini sekali lagi menunjukkan bahwa Alter Ego memiliki strategi yang solid dan siap menghadapi tantangan di IKL Fall 2025.`,
    date: "2025-09-14",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritadua.png",
    readTime: "5 min read"
  },
  {
    id: 3,
    title: "Alter Ego Jadi Tim Pertama Pemecah Win Rate ONIC",
    excerpt: "Dalam pertandingan MPL Indonesia Season 16, Alter Ego berhasil menjadi tim pertama yang memecahkan rekor kemenangan ONIC Esports. Pertandingan berlangsung sengit dengan Alter Ego yang menolak kalah telak dan berhasil memenangkan game kedua melalui permainan one-sided. Tim menunjukkan performa strategis yang tepat dalam menghadapi juara bertahan.",
    content: "Dalam pertandingan MPL Indonesia Season 16, Alter Ego berhasil menjadi tim pertama yang memecahkan rekor kemenangan ONIC Esports. Pertandingan berlangsung sengit dengan Alter Ego yang menolak kalah telak dan berhasil memenangkan game kedua melalui permainan one-sided. Tim menunjukkan performa strategis yang tepat dalam menghadapi juara bertahan.",
    date: "2025-09-07",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritatiga.png",
    readTime: "2 min read"
  },
  {
    id: 4,
    title: "Alter Ego Esports Gandeng Interbat Dorong Gaya Hidup Sehat",
    excerpt: "Alter Ego Esports resmi menggandeng perusahaan kesehatan Interbat untuk musim kompetisi 2025–2026. Kolaborasi ini menandai langkah strategis lintas industri pertama di Indonesia yang menghubungkan dunia esports dengan kesehatan. CEO Delwyn Sukamto menyebut partnership ini penting untuk menjaga performa fisik dan mental para pemain. Interbat akan menyediakan produk kesehatan khusus untuk kebutuhan gamers seperti suplemen dan perawatan tubuh.",
    content: "Alter Ego Esports resmi menggandeng perusahaan kesehatan Interbat untuk musim kompetisi 2025–2026. Kolaborasi ini menandai langkah strategis lintas industri pertama di Indonesia yang menghubungkan dunia esports dengan kesehatan. CEO Delwyn Sukamto menyebut partnership ini penting untuk menjaga performa fisik dan mental para pemain. Interbat akan menyediakan produk kesehatan khusus untuk kebutuhan gamers seperti suplemen dan perawatan tubuh.",
    date: "2025-08-13",
    author: "Business Development",
    category: "Kemitraan",
    image: "/assets/news/beritaempat.png",
    readTime: "2 min read"
  },
  {
    id: 5,
    title: "Alter Ego Ares Kedatangan Pemain Baru Snape",
    excerpt: "Alter Ego Ares mengumumkan kedatangan pemain baru untuk menyambut musim 2025 Fall yaitu Snape. Pemain ini bergabung untuk memperkuat lineup tim dalam menghadapi kompetisi yang semakin ketat. Pengumuman ini disambut antusias oleh fans yang berharap Snape dapat membawa perubahan positif bagi performa tim.",
    content: "Alter Ego Ares mengumumkan kedatangan pemain baru untuk menyambut musim 2025 Fall yaitu Snape. Pemain ini bergabung untuk memperkuat lineup tim dalam menghadapi kompetisi yang semakin ketat. Pengumuman ini disambut antusias oleh fans yang berharap Snape dapat membawa perubahan positif bagi performa tim.",
    date: "2025-08-28",
    author: "Recruitment Team",
    category: "Roster",
    image: "/assets/news/beritalima.jpg",
    readTime: "2 min read"
  },
  {
    id: 6,
    title: "Pengumuman Roster MPL Indonesia Season 16",
    excerpt: "Alter Ego Esports mengumumkan roster resmi untuk MPL Season 16 dengan tiga pemain baru: Yazukee (Mider), Yazukee (Jungler), dan Alekk (Roamer) yang bergabung pada 5 Agustus 2025. Roster lengkap terdiri dari: Nino (EXP Laner), Arfy (Gold Laner), Hijumee/Cyruz (Mid laner), Rinee/Yazukee (Jungler), dan Alekk (Roamer). Tim dipimpin oleh Xepher sebagai Head Coach dan Styx sebagai Assistant Coach.",
    content: "Alter Ego Esports mengumumkan roster resmi untuk MPL Season 16 dengan tiga pemain baru: Yazukee (Mider), Yazukee (Jungler), dan Alekk (Roamer) yang bergabung pada 5 Agustus 2025. Roster lengkap terdiri dari: Nino (EXP Laner), Arfy (Gold Laner), Hijumee/Cyruz (Mid laner), Rinee/Yazukee (Jungler), dan Alekk (Roamer). Tim dipimpin oleh Xepher sebagai Head Coach dan Styx sebagai Assistant Coach.",
    date: "2025-08-08",
    author: "Recruitment Team",
    category: "Roster",
    image: "/assets/news/beritatiga.png",
    readTime: "2 min read"
  },
  {
    id: 7,
    title: "Juara Asia Pacific Predator League 2025 VALORANT",
    excerpt: "Tim VALORANT Alter Ego berhasil meraih gelar juara Asia Pacific Predator League 2025 setelah mengalahkan ZOL Esports dari Filipina. Dalam pertandingan final yang dramatis, ZOL sempat bangkit dengan 6 kemenangan beruntun untuk menyamakan kedudukan 11:11 dari 5:11, namun Alter Ego berhasil mempertahankan momentum dan mengamankan kemenangan. Tim membawa pulang hadiah USD 65.000 dan Predator Shield.",
    content: "Tim VALORANT Alter Ego berhasil meraih gelar juara Asia Pacific Predator League 2025 setelah mengalahkan ZOL Esports dari Filipina. Dalam pertandingan final yang dramatis, ZOL sempat bangkit dengan 6 kemenangan beruntun untuk menyamakan kedudukan 11:11 dari 5:11, namun Alter Ego berhasil mempertahankan momentum dan mengamankan kemenangan. Tim membawa pulang hadiah USD 65.000 dan Predator Shield.",
    date: "2025-01-11",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritaenam.jpg",
    readTime: "2 min read"
  },
  {
    id: 8,
    title: "Runner-up PMSL SEA Summer 2025",
    excerpt: "Alter Ego Ares berhasil meraih posisi kedua di PMSL SEA Summer 2025 dengan total 154 poin, hanya selisih 19 poin dari juara eArena (173 poin). Rosemary dinobatkan sebagai Finals MVP dan Gunslinger dengan performa luar biasa. Tim berhasil meraih WWCD di match ke-13 dan mengamankan tiket ke PUBG Mobile World Cup 2025 di Arab Saudi. Prestasi ini membuktikan konsistensi Alter Ego Ares di kancah regional.",
    content: "Alter Ego Ares berhasil meraih posisi kedua di PMSL SEA Summer 2025 dengan total 154 poin, hanya selisih 19 poin dari juara eArena (173 poin). Rosemary dinobatkan sebagai Finals MVP dan Gunslinger dengan performa luar biasa. Tim berhasil meraih WWCD di match ke-13 dan mengamankan tiket ke PUBG Mobile World Cup 2025 di Arab Saudi. Prestasi ini membuktikan konsistensi Alter Ego Ares di kancah regional.",
    date: "2025-06-22",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritatujuh.jpg",
    readTime: "2 min read"
  },
  {
    id: 9,
    title: "Alter Ego Ares Finis 8 Besar PMWC 2025",
    excerpt: "Perjalanan Alter Ego Ares di PUBG Mobile World Cup 2025 berakhir di posisi ke-8 setelah tampil gemilang sebagai juara Group Stage. Meski gagal mempertahankan momentum di Grand Finals, tim tetap menjadi kebanggaan nasional dengan raihan hadiah Rp2,4 miliar. Sebelumnya, tim berhasil menjuarai Group Stage dengan 121 poin dan Rosemary meraih gelar MVP Group Stage.",
    content: "Perjalanan Alter Ego Ares di PUBG Mobile World Cup 2025 berakhir di posisi ke-8 setelah tampil gemilang sebagai juara Group Stage. Meski gagal mempertahankan momentum di Grand Finals, tim tetap menjadi kebanggaan nasional dengan raihan hadiah Rp2,4 miliar. Sebelumnya, tim berhasil menjuarai Group Stage dengan 121 poin dan Rosemary meraih gelar MVP Group Stage.",
    date: "2025-08-04",
    author: "Esports Desk",
    category: "Tournament",
    image: "/assets/news/beritadelapan.png",
    readTime: "2 min read"
  }
];

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(newsData.map(item => item.category))];

  // Filter news by category
  const filteredNews = selectedCategory === 'All' 
    ? newsData 
    : newsData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
          {/* Animated background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-dark-bg"></div>
            <div className="absolute inset-0 opacity-5" style={{ 
              backgroundImage: 'radial-gradient(circle at 25% 25%, #ff2a2a 2px, transparent 2px), radial-gradient(circle at 75% 75%, #ff2a2a 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-red-500/20"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-4xl mx-auto"
            >
              {/* Elegant logo display */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 md:mb-8 relative"
              >
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                <div className="relative w-full h-full bg-card-bg/80 rounded-full flex items-center justify-center border border-primary/30 backdrop-blur-sm">
                  <img 
                    src="/assets/logos/alteregologo.png" 
                    alt="Alter Ego Logo" 
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                  />
                </div>
              </motion.div>
              
              {/* Clean typography */}
              <motion.h1 
                className="text-3xl md:text-display mb-4 md:mb-6 text-foreground font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Latest <span className="text-primary">News</span>
              </motion.h1>
              
              {/* Refined description */}
              <motion.p 
                className="text-base md:text-subheading text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                Stay updated with the latest announcements, tournament results, and team news from Alter Ego Esports
              </motion.p>
              
              {/* Minimalist CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <div className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 border border-primary/50 cursor-default">
                  <span className="mr-2">Future Roadmap</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background border-b border-border-color">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-card-bg text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="minimal-card overflow-hidden h-full flex flex-col"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <span>{new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <span>{news.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 flex-grow line-clamp-2">{news.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    <div className="mt-auto">
                      <Link 
                        href={`/news/${news.id}`} 
                        className="text-primary text-sm font-medium flex items-center hover:opacity-80 transition-opacity"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}