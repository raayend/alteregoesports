'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PremiumPlayerCard from '../../components/PremiumPlayerCard';

// Multiple test players with different roles
const testPlayers = [
  {
    id: 1,
    nickname: "Nino",
    fullName: "Nino Prasetyo",
    role: "EXP Lane",
    status: "Active",
    description: "Pemain senior dengan pengalaman MPL yang luar biasa. Leader yang kuat dengan kemampuan split push yang hebat.",
    photo: "/assets/players/nino.png",
    skills: [
      {
        name: "Split Push",
        level: 5,
        description: "Kemampuan untuk mengontrol wave dan melakukan split push secara efektif"
      },
      {
        name: "Team Fighting",
        level: 4,
        description: "Kontribusi yang baik dalam team fight dengan damage output yang tinggi"
      },
      {
        name: "Map Awareness",
        level: 5,
        description: "Pemahaman peta yang luar biasa dan timing gank yang presisi"
      }
    ]
  },
  {
    id: 2,
    nickname: "Rinee",
    fullName: "Rinee",
    role: "Jungler",
    status: "Active",
    description: "Jungler handal dengan sense gank yang tajam. Spesialis dalam early game aggression dan vision control.",
    photo: "/assets/players/rinee.png",
    skills: [
      {
        name: "Ganking",
        level: 5,
        description: "Timing dan eksekusi gank yang sangat presisi"
      },
      {
        name: "Vision Control",
        level: 4,
        description: "Kontrol vision tim yang baik"
      },
      {
        name: "Objective Control",
        level: 5,
        description: "Kontrol objective seperti turtle dan lord yang luar biasa"
      }
    ]
  },
  {
    id: 3,
    nickname: "Hijumee",
    fullName: "Hijumee",
    role: "Mid Lane",
    status: "Active",
    description: "Mid laner kreatif dengan mechanical skill tinggi. Spesialis dalam hero mage dengan combo yang kompleks.",
    photo: "/assets/players/hijumee.png",
    skills: [
      {
        name: "Mechanical Skill",
        level: 5,
        description: "Eksekusi skill dan combo yang sangat presisi"
      },
      {
        name: "Map Control",
        level: 4,
        description: "Kontrol peta dan tekanan mid yang konsisten"
      },
      {
        name: "Roam Support",
        level: 4,
        description: "Dukungan roaming ke garis lain saat dibutuhkan"
      }
    ]
  }
];

export default function TestPlayerCard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-white mb-4">
              <span className="text-primary">Premium</span> Player Cards
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              3D animated player cards with flip animation and interactive elements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {testPlayers.map((player, index) => (
              <div key={player.id} className="flex flex-col items-center">
                <div className={`mb-4 ${index === 1 ? '' : ''}`}>
                  <PremiumPlayerCard player={player} />
                </div>
                <div className="text-center">
                  <h3 className="text-white font-bold">{player.nickname}</h3>
                  <p className="text-gray-400 text-sm">{player.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="minimal-card p-6">
                <div className="text-primary text-2xl mb-3">🔄</div>
                <h3 className="text-white font-bold mb-2">3D Flip Animation</h3>
                <p className="text-gray-400 text-sm">
                  Interactive cards that flip to reveal player details and stats when clicked
                </p>
              </div>
              <div className="minimal-card p-6">
                <div className="text-primary text-2xl mb-3">✨</div>
                <h3 className="text-white font-bold mb-2">Subtle Effects</h3>
                <p className="text-gray-400 text-sm">
                  Hover animations and glowing borders that enhance without overwhelming
                </p>
              </div>
              <div className="minimal-card p-6">
                <div className="text-primary text-2xl mb-3">📊</div>
                <h3 className="text-white font-bold mb-2">Player Stats</h3>
                <p className="text-gray-400 text-sm">
                  Visual representation of player skills and attributes with animated progress bars
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}