'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

// Define type for news item
interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

// Define props type
interface NewsDetailProps {
  params: Promise<{ id: string }>
}

// Sample news data - in a real app this would come from an API or CMS
const newsData: NewsItem[] = [
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

export default function NewsDetail({ params }: NewsDetailProps) {
  const { id } = use(params);
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    // Find the news item by ID
    const item = newsData.find(news => news.id === parseInt(id));
    setNewsItem(item || null);
  }, [id]);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">News article not found</h1>
            <Link href="/news" className="text-primary hover:opacity-80 transition-opacity">
              ← Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Article Header */}
        <section className="relative pt-24 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black z-0"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link href="/news" className="inline-flex items-center text-primary hover:opacity-80 transition-opacity mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to News
              </Link>
              
              <div className="flex flex-wrap items-center text-gray-300 text-sm mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full mr-4">
                  {newsItem.category}
                </span>
                <span>{new Date(newsItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="mx-2">•</span>
                <span>By {newsItem.author}</span>
                <span className="mx-2">•</span>
                <span>{newsItem.readTime}</span>
              </div>
              
              <h1 className="text-display text-white mb-6">{newsItem.title}</h1>
              <p className="text-xl text-gray-300 max-w-3xl">{newsItem.excerpt}</p>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                {newsItem.content.split('\n\n').map((paragraph: string, index: number) => (
                  paragraph.startsWith('- ') ? (
                    <ul key={index} className="list-disc pl-6 mb-6 text-gray-300">
                      {paragraph.split('\n').map((item: string, i: number) => (
                        <li key={i} className="mb-2">{item.substring(2)}</li>
                      ))}
                    </ul>
                  ) : (
                    <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-border-color">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold">AE</span>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Alter Ego Esports</p>
                      <p className="text-gray-400 text-sm">Official News Source</p>
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}