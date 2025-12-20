'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        tag: "Core Infrastructure",
        title: "The Intelligence \nLattice.",
        description: "A self-healing, distributed compute fabric that spans continents. We turn latency into liquidity.",
        src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop",
        color: "bg-dm-black"
    },
    {
        id: 2,
        tag: "Apolemia Labs",
        title: "Hive Mind \nSynthesis.",
        description: "Zero-knowledge coordination for million-node clusters. The first truly decentralized supercomputer.",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
        color: "bg-[#0F172A]"
    },
    {
        id: 3,
        tag: "KnoLink Engine",
        title: "Semantic \nResonance.",
        description: "Don't just search. Resonate. Our engine finds the hidden harmonics in your data lake.",
        src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop",
        color: "bg-[#1E293B]"
    },
    {
        id: 4,
        tag: "New Frontiers",
        title: "Optimistic \nVerification.",
        description: "Breaking the trilemma of Speed, Security, and Scale. Trustless compute at the speed of light.",
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        color: "bg-black"
    }
];

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    // Calculate Z-index and scale for the stack effect
    const getCardStyle = (index) => {
        // Effective index relative to active (wrapping handling could be complex, simplifying for stack feel)
        // We only show 3 cards: Active, Next, Next+1
        const diff = (index - activeIndex + slides.length) % slides.length;

        if (diff === 0) return { zIndex: 30, scale: 1, y: 0, opacity: 1 };
        if (diff === 1) return { zIndex: 20, scale: 0.92, y: 40, opacity: 0.6 }; // Behind 1
        if (diff === 2) return { zIndex: 10, scale: 0.84, y: 80, opacity: 0.3 }; // Behind 2
        return { zIndex: 0, scale: 0.8, y: 100, opacity: 0, display: 'none' };
    };

    return (
        <section className="relative w-full h-[850px] md:h-[750px] flex items-center justify-center overflow-hidden bg-dm-white font-sans pt-20">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)]" />

            <div className="w-full max-w-[1200px] px-6 relative h-[500px] flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Left: Static Context / Controls */}
                <div className="md:w-1/3 flex flex-col items-start z-40 order-2 md:order-1">
                    <div className="mb-12">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-2 h-2 rounded-full bg-dm-blue animate-pulse" />
                                    <span className="font-mono text-xs font-bold tracking-widest text-dm-blue uppercase">
                                        {slides[activeIndex].tag}
                                    </span>
                                </div>
                                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                    {slides[activeIndex].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex items-center gap-4">
                            <button
                                onClick={nextSlide}
                                className="group flex items-center gap-3 px-6 py-3 bg-dm-black text-white rounded-full font-medium hover:bg-dm-blue transition-colors"
                            >
                                Next Signal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <span className="font-mono text-xs text-gray-400">
                                {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right: The 3D Stack */}
                <div className="md:w-2/3 w-full relative h-[500px] perspective-1000 order-1 md:order-2 flex items-center justify-center md:items-start md:justify-start">
                    {slides.map((slide, index) => {
                        const style = getCardStyle(index);
                        const isActive = index === activeIndex;

                        return (
                            <motion.div
                                key={slide.id}
                                initial={false}
                                animate={{
                                    scale: style.scale,
                                    y: style.y,
                                    opacity: style.opacity,
                                    zIndex: style.zIndex,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }} // Snappy physics
                                className="absolute top-0 w-full max-w-[600px] aspect-[4/5] md:aspect-[16/10] rounded-[32px] overflow-hidden shadow-2xl origin-bottom"
                                style={{
                                    display: style.display
                                }}
                            >
                                <div className="relative w-full h-full cursor-pointer" onClick={nextSlide}>
                                    <Image
                                        src={slide.src}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    <div className="absolute bottom-0 left-0 p-8 md:p-12">
                                        <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1] whitespace-pre-line">
                                            {slide.title}
                                        </h2>
                                    </div>

                                    {/* Glass sheen effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HeroCarousel;
