'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { pressReleases } from '../../data/press';

// Slide Data
const slides = [
    {
        id: 1,
        tag: "Core Infrastructure",
        title: "The Intelligence \nLattice.",
        description: "A self-healing, distributed compute fabric that spans continents. We turn latency into liquidity.",
        src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop",
        icon: Cpu,
        color: "#2563EB" // Blue
    },
    {
        id: 2,
        tag: "Apolemia Labs",
        title: "Hive Mind \nSynthesis.",
        description: "Zero-knowledge coordination for million-node clusters. The first truly decentralized supercomputer.",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
        icon: Zap,
        color: "#8B5CF6" // Violet
    },
    {
        id: 3,
        tag: "KnoLink Engine",
        title: "Semantic \nResonance.",
        description: "Don't just search. Resonate. Our engine finds the hidden harmonics in your data lake.",
        src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop",
        icon: Sparkles,
        color: "#10B981" // Emerald
    },
    {
        id: 4,
        tag: "New Frontiers",
        title: "Optimistic \nVerification.",
        description: "Breaking the trilemma of Speed, Security, and Scale. Trustless compute at the speed of light.",
        src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        icon: Globe,
        color: "#F43F5E" // Rose
    }
];

const IncredibleHero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
    const [notificationIndex, setNotificationIndex] = useState(0);

    // Mouse Parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse spring
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Transform specifically for the cards
    // Range maps from screen center (-0.5 to 0.5) to rotation degrees
    const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position from -0.5 to 0.5
            mouseX.set((e.clientX / window.innerWidth) - 0.5);
            mouseY.set((e.clientY / window.innerHeight) - 0.5);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Auto-play for slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Auto-play for notification cycling
    useEffect(() => {
        const interval = setInterval(() => {
            setNotificationIndex((prev) => (prev + 1) % pressReleases.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Calculate styles for "Void Deck" depth effect
    const getSlideStyle = (index) => {
        let relativeIndex = (index - activeIndex);
        if (relativeIndex < 0) relativeIndex += slides.length;

        let distance = (index - activeIndex + slides.length) % slides.length;

        // Z-Depth configurations
        if (distance === 0) {
            return {
                zIndex: 30,
                z: 0,
                scale: 1,
                opacity: 1,
                x: 0,
                rotateY: 0,
                filter: 'blur(0px) brightness(1)'
            };
        }
        else if (distance === 1) {
            return {
                zIndex: 20,
                z: -300,
                scale: 0.85,
                opacity: 0.6,
                x: 80,
                rotateY: -15,
                filter: 'blur(1px) brightness(0.9)' // Less dim for white theme
            };
        }
        else if (distance === 2) {
            return {
                zIndex: 10,
                z: -600,
                scale: 0.7,
                opacity: 0.3,
                x: 160,
                rotateY: -30,
                filter: 'blur(3px) brightness(0.8)'
            };
        }

        return {
            zIndex: 0,
            z: -1200,
            scale: 0,
            opacity: 0,
            x: 0,
            rotateY: 0,
            filter: 'blur(10px)'
        };
    };

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-dm-white text-black">

            {/* Notification Bar */}
            <div className="absolute top-24 md:top-28 left-0 right-0 z-40 flex justify-center pointer-events-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={notificationIndex}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto"
                    >
                        <Link href={`/press/${pressReleases[notificationIndex].slug}`}>
                            <div className={`
                                flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300
                                ${notificationIndex === 0
                                    ? 'bg-white/80 border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]'
                                    : 'bg-white/50 border border-black/5 hover:bg-white/80'
                                }
                            `}>
                                {notificationIndex === 0 && (
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                )}
                                <span className={`text-xs font-medium ${notificationIndex === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {notificationIndex === 0 ? 'Latest Update' : 'From the Archive'}
                                </span>
                                <span className="w-[1px] h-3 bg-black/10 mx-1" />
                                <span className="text-sm text-dm-black font-medium max-w-[200px] sm:max-w-xs truncate">
                                    {pressReleases[notificationIndex].title}
                                </span>
                                <ArrowRight className={`w-3 h-3 ${notificationIndex === 0 ? 'text-blue-500' : 'text-gray-400'}`} />
                            </div>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 1. Volumetric Background Atmosphere - White Theme Adjusted */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-dm-blue/5 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-multiply" />
            </div>

            {/* 2. Grid Floor (Subtle) */}
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-10 opacity-80" />

            <div className="relative w-full max-w-[1200px] px-6 h-full flex flex-col md:flex-row items-center justify-center z-20 gap-8 md:gap-12">

                {/* Left: Text Content */}
                <div className="w-full md:w-5/12 z-30 flex flex-col justify-center items-start pt-28 md:pt-0 pl-0 md:pl-0">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col items-start"
                        >
                            {/* Tag */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-dm-black/5 border border-dm-black/10 text-dm-black/80">
                                    {/* Dynamic Icon */}
                                    {(() => {
                                        const Icon = slides[activeIndex].icon;
                                        return <Icon className="w-4 h-4" color={slides[activeIndex].color} />;
                                    })()}
                                </span>
                                <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-dm-black/60">
                                    {slides[activeIndex].tag}
                                </span>
                            </div>

                            {/* Title - Dark Text for White Theme */}
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] md:leading-[0.9] mb-4 md:mb-6 text-dm-black">
                                {slides[activeIndex].title}
                            </h1>

                            {/* Description - Dark Gray */}
                            <p className="text-base md:text-lg text-dm-black/60 max-w-md leading-relaxed mb-8 border-l-2 border-dm-black/10 pl-6">
                                {slides[activeIndex].description}
                            </p>

                            {/* Controls */}
                            <div className="flex items-center gap-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={nextSlide}
                                    className="group relative px-6 py-3 bg-dm-black text-white rounded-full font-bold overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <span className="relative z-10 flex items-center gap-2 text-sm">
                                        Explore System <ArrowRight className="w-4 h-4" />
                                    </span>
                                    <div className="absolute inset-0 bg-dm-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                </motion.button>

                                <div className="flex gap-2">
                                    {slides.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-12 bg-dm-black' : 'w-2 bg-dm-black/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: The 3D Void Deck */}
                <div className="w-full md:w-7/12 h-[50vh] md:h-full relative flex items-center justify-center perspective-[1200px]">

                    {/* Perspective Container */}
                    {/* Perspective Container */}
                    <motion.div
                        className="relative w-full h-[350px] flex items-center justify-center preserve-3d"
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d"
                        }}
                    >
                        {slides.map((slide, index) => {
                            const style = getSlideStyle(index);
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={slide.id}
                                    initial={false}
                                    animate={{
                                        zIndex: style.zIndex,
                                        z: style.z,
                                        scale: style.scale,
                                        opacity: style.opacity,
                                        x: style.x,
                                        rotateY: style.rotateY,
                                        filter: style.filter
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1], // Custom "Out Expo" curve
                                        opacity: { duration: 0.6 }
                                    }}
                                    className="absolute w-[260px] sm:w-[320px] md:w-[450px] aspect-[4/3] rounded-[24px] md:rounded-[32px] overflow-hidden border border-dm-black/5 bg-white shadow-2xl"
                                    style={{
                                        // Colored gentle shadow for white theme
                                        boxShadow: isActive ? `0 30px 60px -15px ${slide.color}25` : '0 20px 40px -10px rgba(0,0,0,0.1)',
                                    }}
                                    onClick={() => {
                                        if (!isActive) nextSlide();
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={slide.src}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority={index < 2}
                                        />

                                        {/* Overlays - Lightened for White Theme */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />

                                        {/* Sheen */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-100" />

                                        {/* Internal Label */}
                                        <motion.div
                                            className="absolute bottom-6 left-6"
                                            animate={{ opacity: isActive ? 1 : 0 }}
                                        >
                                            <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full w-fit mb-2">
                                                <span className="text-[10px] font-mono text-white/95 uppercase tracking-widest">{slide.tag}</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default IncredibleHero;

