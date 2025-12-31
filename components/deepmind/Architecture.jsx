'use client';

import { motion } from 'framer-motion';
import { Network, ShieldCheck, Share2 } from 'lucide-react';

const FeatureList = ({ items }) => (
    <ul className="space-y-4">
        {items.map((item, i) => (
            <li key={i} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-dm-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-dm-blue" />
                </div>
                <span className="text-gray-600 leading-relaxed">{item}</span>
            </li>
        ))}
    </ul>
);

const Architecture = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-dm-white relative overflow-hidden text-dm-black">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="font-mono text-xs text-dm-blue uppercase tracking-widest mb-4 block">
                                How the Network Works
                            </span>
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.05] mb-6">
                                The optimization layer for <br /> global intelligence.
                            </h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                Altair Axis routes compute workloads through a peer‑to‑peer fabric that continuously optimizes for proximity, availability, and load. Instead of sending requests to a single region, the system selects the best node in real time.
                            </p>

                            <FeatureList items={[
                                "Lower latency without over-provisioning.",
                                "No single point of failure; automatic rerouting.",
                                "Geographic flexibility by design."
                            ]} />
                        </motion.div>
                    </div>

                    {/* Right: Abstract Visualization (Simplified Knolink-style) */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full aspect-square md:aspect-[4/3] bg-dm-gray rounded-[32px] border border-gray-100 p-8 flex items-center justify-center overflow-hidden">
                            {/* Simple Node Visualization */}
                            <div className="relative z-10 grid grid-cols-2 gap-8">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-3"
                                >
                                    <Network className="w-8 h-8 text-dm-blue" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Router</span>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center gap-3 mt-12"
                                >
                                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Verifier</span>
                                </motion.div>
                            </div>

                            {/* Connecting Lines (CSS/SVG) */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50%" cy="50%" r="150" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-blue-500 animate-spin-slow" />
                                <circle cx="50%" cy="50%" r="250" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-300" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Architecture;
