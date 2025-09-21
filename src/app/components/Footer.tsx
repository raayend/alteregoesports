'use client';

import Link from 'next/link';

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Divisions', path: '/divisions' },
    { name: 'News', path: '/news' },
    { name: 'Merchandise', path: '/merchandise' },
    { name: 'Partners', path: '/partners' },
    { name: 'Roadmap', path: '/updates' },
  ];

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/alteregoesports/', icon: 'Instagram' },
    { name: 'Twitter', url: 'https://x.com/AlterEgo_IDN', icon: 'Twitter' },
    { name: 'Facebook', url: 'https://www.facebook.com/alteregoesportsid', icon: 'Facebook' },
    { name: 'YouTube', url: 'https://youtube.com/AlterEgoEsports', icon: 'YouTube' },
  ];

  return (
    <footer className="bg-dark-bg border-t border-border-color">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-3">
                <img 
                  src="/assets/logos/alteregologo.png" 
                  alt="Alter Ego Esports" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground">ALTER EGO</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional esports organization based in Indonesia, competing across multiple titles.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case 'Instagram':
                      return (
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      );
                    case 'Twitter':
                      return (
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      );
                    case 'Facebook':
                      return (
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      );
                    case 'YouTube':
                      return (
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      );
                    default:
                      return (
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.872c-1.183.188-2.415.237-3.667.237-1.252 0-2.484-.049-3.667-.237-1.272-.202-2.017-.737-2.017-1.487v-4.586c0-.75.745-1.285 2.017-1.487 1.183-.188 2.415-.237 3.667-.237s2.484.049 3.667.237c1.272.202 2.017.737 2.017 1.487v4.586c0 .75-.745 1.285-2.017 1.487zM12 9.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
                        </svg>
                      );
                  }
                };

                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-6 h-6">
                      {getIcon(social.name)}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-foreground mb-4">Content</h3>
            <div className="grid grid-cols-3 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Jl. Meruya Ilir Raya, RT.1/RW.5, Srengseng, Kec. Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11620</li>
              <li>Indonesia</li>
              <li>
                <a
                  href="https://www.google.com/maps/place/GH+ALTER+EGO/data=!4m2!3m1!1s0x0:0x6e615a273948de16?sa=X&ved=1t:2428&ictx=111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-color mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Alter Ego Esports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}