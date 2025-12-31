'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { pressReleases } from '../../data/press';

// Slide Data - Altair Axis (Calibrated for Early Stage)
const slides = [
    {
        id: 1,
        tag: "Core Platform",
        title: "Run AI Where \nIt Matters.",
        description: "Altair Axis is a decentralized compute platform building a global edge network. Low latency. Zero bottlenecks.",
        src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop",
        icon: Cpu,
        color: "#2563EB" // Blue
    },
    {
        id: 2,
        tag: "Genesis Phase",
        title: "A New Model \nfor Compute.",
        description: "We are replacing centralized dependency with a distributed node fabric. Join the network early.",
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop",
        icon: Zap,
        color: "#8B5CF6" // Violet
    },
    {
        id: 3,
        tag: "System Architecture",
        title: "Distributed \nby Design.",
        description: "Workloads route dynamically to optimal nodes. Designed for resilience and geographic flexibility.",
        src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop",
        icon: Sparkles,
        color: "#10B981" // Emerald
    },
    {
        id: 4,
        tag: "Use Cases",
        title: "Real-Time \nInference.",
        description: "Built for latency-sensitive applications that demand performance closer to the user.",
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

            {/* Notification Bar - Adjusted position for mobile */}
            <div className="absolute top-24 md:top-36 left-0 right-0 z-40 flex justify-center pointer-events-none px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={notificationIndex}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-auto max-w-full"
                    >
                        <Link href={`/press/${pressReleases[notificationIndex].slug}`}>
                            <div className={`
                                flex items-center gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md transition-all duration-300
                                ${notificationIndex === 0
                                    ? 'bg-white/80 border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]'
                                    : 'bg-white/50 border border-black/5 hover:bg-white/80'
                                }
                            `}>
                                {notificationIndex === 0 && (
                                    <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 flex-shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-500"></span>
                                    </span>
                                )}
                                <span className={`text-[10px] md:text-xs font-medium whitespace-nowrap ${notificationIndex === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                                    {notificationIndex === 0 ? 'Latest Update' : 'Archive'}
                                </span>
                                <span className="w-[1px] h-3 bg-black/10 mx-1 hidden sm:block" />
                                <span className="text-xs md:text-sm text-dm-black font-medium max-w-[150px] sm:max-w-xs truncate">
                                    {pressReleases[notificationIndex].title}
                                </span>
                                <ArrowRight className={`w-3 h-3 flex-shrink-0 ${notificationIndex === 0 ? 'text-blue-500' : 'text-gray-400'}`} />
                            </div>
                        </Link>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* 1. Volumetric Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-dm-blue/5 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-200/40 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-multiply" />
            </div>

            {/* 2. Grid Floor */}
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-10 opacity-80" />

            <div className="relative w-full max-w-[1200px] px-6 h-full flex flex-col items-center justify-center z-20 text-center pt-24 md:pt-0">

                {/* Main Content Area */}
                <div className="relative w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

                    {/* Left Side: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl z-30"
                    >
                        {/* Tag */}
                        <div className="mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-dm-black/5 border border-dm-black/10 backdrop-blur-md inline-flex items-center justify-center">
                            <span className="font-mono text-[10px] md:text-sm tracking-[0.2em] uppercase text-dm-black/60">
                                {slides[activeIndex].tag}
                            </span>
                        </div>

                        {/* Title - Responsive & Wrapping */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1] mb-4 md:mb-8 text-dm-black whitespace-pre-wrap">
                            {slides[activeIndex].title}
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-xl text-dm-black/60 max-w-2xl leading-relaxed mb-8 md:mb-10 px-4 md:px-0">
                            {slides[activeIndex].description}
                        </p>

                        {/* Call to Action */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
                            <Link href="/get-started" className="w-full sm:w-auto group relative px-6 py-3 md:px-8 md:py-4 bg-dm-black text-white rounded-full font-bold overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                                    Get Started <ArrowRight className="w-4 h-4" />
                                </span>
                                <div className="absolute inset-0 bg-dm-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            </Link>

                            <Link href="/architecture" className="w-full sm:w-auto group px-6 py-3 md:px-8 md:py-4 bg-transparent border border-dm-black/10 text-dm-black rounded-full font-medium hover:bg-dm-black/5 transition-colors">
                                <span className="flex items-center justify-center gap-2 text-sm">
                                    View Architecture
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side: 3D Carousel - Scaled for Mobile */}
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="hidden md:flex relative w-[300px] h-[450px] md:w-[350px] md:h-[500px] lg:w-[400px] lg:h-[550px] perspective-[1200px] items-center justify-center z-30"
                    >
                        {/* Desktop/Tablet Carousel Logic remains same */}
                        <AnimatePresence initial={false} custom={direction}>
                            {slides.map((slide, index) => {
                                const style = getSlideStyle(index);
                                return (
                                    <motion.div
                                        key={slide.id}
                                        className="absolute w-full h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                                        initial={{
                                            opacity: 0,
                                            scale: 0.5,
                                            z: -1000,
                                            filter: 'blur(10px)',
                                            rotateY: 0
                                        }}
                                        animate={{
                                            ...style,
                                            transition: {
                                                duration: 0.8,
                                                ease: [0.16, 1, 0.3, 1],
                                                opacity: { duration: 0.5 }
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            scale: 0.5,
                                            z: -1000,
                                            filter: 'blur(10px)',
                                            rotateY: direction === 1 ? -45 : 45,
                                            transition: {
                                                duration: 0.5,
                                                ease: [0.6, -0.05, 0.01, 0.99]
                                            }
                                        }}
                                        onClick={() => {
                                            if (index !== activeIndex) {
                                                setDirection(index > activeIndex ? 1 : -1);
                                                setActiveIndex(index);
                                            }
                                        }}
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.title}
                                            fill
                                            className="object-cover"
                                            priority={index === activeIndex}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 p-6 text-white">
                                            <div className="flex items-center gap-2 mb-2">
                                                {(() => {
                                                    const SlideIcon = slide.icon;
                                                    return SlideIcon ? <SlideIcon className="w-5 h-5" style={{ color: slide.color }} /> : null;
                                                })()}
                                                <span className="text-sm font-semibold" style={{ color: slide.color }}>
                                                    {slide.tag}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold leading-tight whitespace-pre-line">
                                                {slide.title}
                                            </h3>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>

                    {/* Mobile Only Static Image (No 3D Carousel on small screens to save space) */}
                    <div className="md:hidden w-full max-w-[320px] aspect-[3/4] rounded-3xl overflow-hidden relative shadow-lg mt-8">
                        <Image
                            src={slides[activeIndex].src}
                            alt={slides[activeIndex].title}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                {(() => {
                                    const Icon = slides[activeIndex].icon;
                                    return Icon ? <Icon className="w-4 h-4" style={{ color: slides[activeIndex].color }} /> : null;
                                })()}
                                <span className="text-xs font-semibold" style={{ color: slides[activeIndex].color }}>
                                    {slides[activeIndex].tag}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold leading-tight whitespace-pre-line">
                                {slides[activeIndex].title}
                            </h3>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default IncredibleHero;
