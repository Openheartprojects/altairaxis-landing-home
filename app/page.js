'use client';

import IncredibleHero from '../components/deepmind/IncredibleHero';
import Navbar from '../components/deepmind/Navbar';
import Footer from '../components/deepmind/Footer';
import About from '../components/deepmind/About'; // Now "Mission"
import ConsoleSection from '../components/deepmind/ConsoleSection';
import ResearchFeed from '../components/deepmind/ResearchFeed';
import Knolink from '../sections/Knolink'; // Importing the feature section

export default function Home() {
  return (
    <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-blue selection:text-white">
      <Navbar />
      <IncredibleHero />
      <About />
      <ConsoleSection />
      <Knolink />
      <ResearchFeed />
      <Footer />
    </main>
  );
}
