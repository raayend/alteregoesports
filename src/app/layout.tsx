import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Alter Ego Esports | Professional Mobile Esports Team",
  description: "Professional esports organization based in Indonesia, competing at the highest level in Mobile Legends: Bang Bang and other mobile esports titles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.variable} antialiased bg-black text-white font-sans pt-16`}
      >
        {children}
      </body>
    </html>
  );
}