'use client';

import HeroCarousel from '../components/deepmind/HeroCarousel';
import Navbar from '../components/deepmind/Navbar';
import Footer from '../components/deepmind/Footer';
import About from '../components/deepmind/About'; // Now "Mission"
import ResearchFeed from '../components/deepmind/ResearchFeed';
import Knolink from '../sections/Knolink'; // Importing the feature section

export default function Home() {
  return (
    <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-blue selection:text-white">
      <Navbar />
      <HeroCarousel />
      <About />
      <Knolink />
      <ResearchFeed />
      <Footer />
    </main>
  );
}
