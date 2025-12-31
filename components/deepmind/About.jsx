'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Server, ArrowRight, Activity, Cpu } from 'lucide-react';
import Link from 'next/link';

// Telemetry Card Component - Refined for "White Theme"
const TelemetryCard = ({ label, value, subtext, icon: Icon }) => (
    <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="p-8 rounded-[32px] bg-white border border-gray-100 shadow-sm flex flex-col justify-between h-full group"
    >
        <div className="flex justify-between items-start mb-6">
            <span className="font-mono text-xs text-dm-text-secondary uppercase tracking-widest">{label}</span>
            <div className="w-8 h-8 rounded-full bg-dm-gray flex items-center justify-center">
                <Icon className="w-4 h-4 text-dm-black" />
            </div>
        </div>
        <div>
            <div className="text-3xl md:text-4xl font-medium text-dm-black tracking-tighter mb-2 group-hover:text-dm-blue transition-colors">
                {value}
            </div>
            <div className="text-sm text-gray-400 font-sans">{subtext}</div>
        </div>
    </motion.div>
);

const About = () => {
    // Honest Metrics for Early Stage
    return (
        <section className="relative py-20 md:py-32 px-6 bg-dm-white overflow-hidden">
            {/* Background Decoration (Matching Knolink) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-gray-50 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(200px,auto)]">

                    {/* Main Mission Block (Large) - White Theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-12 lg:col-span-8 lg:row-span-2 p-6 md:p-10 lg:p-14 rounded-[40px] bg-dm-gray flex flex-col justify-center relative overflow-hidden"
                    >
                        {/* Abstract Shape */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/20 backdrop-blur-sm mb-8 w-fit">
                                <span className="w-2 h-2 rounded-full bg-dm-blue animate-pulse" />
                                <span className="font-mono text-xs text-dm-black/70 uppercase tracking-widest">Vision</span>
                            </span>

                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium text-dm-black tracking-tighter leading-[0.95] mb-8">
                                <span className="text-gray-400">Decentralized compute</span> <br />
                                for the intelligent web.
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                                We are building the fabric for tomorrow's AI. Altair Axis replaces centralized reliance with a distributed, sovereign network — starting today.
                            </p>
                        </div>
                    </motion.div>

                    {/* Telemetry: Active Nodes */}
                    <div className="md:col-span-6 lg:col-span-4 lg:row-span-1">
                        <TelemetryCard
                            label="Network Status"
                            value="Genesis"
                            subtext="Founding nodes online"
                            icon={Server}
                        />
                    </div>

                    {/* Telemetry: Latency */}
                    <div className="md:col-span-6 lg:col-span-4 lg:row-span-1">
                        <TelemetryCard
                            label="Topology"
                            value="P2P Mesh"
                            subtext="Direct node routing"
                            icon={Activity}
                        />
                    </div>

                    {/* "Join The Grid" CTA - Dark Blue Accent */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-6 lg:col-span-4 lg:row-span-1"
                    >
                        <Link href="/apolemia" className="block h-full p-8 rounded-[32px] bg-dm-black text-white flex flex-col justify-between group overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-dm-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <Cpu className="w-8 h-8 text-white mb-4" />
                                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">Early Access</span>
                            </div>

                            <div className="relative z-10 flex items-center justify-between">
                                <span className="text-2xl font-medium">Join Network</span>
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* "Read Manifesto" Block - Light */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-6 lg:col-span-8 lg:row-span-1"
                    >
                        <Link href="/about" className="block h-full p-10 rounded-[32px] bg-white border border-gray-100 flex md:flex-row flex-col items-center justify-between gap-6 group shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <span className="font-mono text-xs text-dm-blue uppercase tracking-widest mb-3 block">Research Manifesto</span>
                                <h3 className="text-2xl md:text-3xl font-medium text-dm-black group-hover:text-dm-blue transition-colors">The Architecture of Intelligence.</h3>
                            </div>
                            <div className="flex-shrink-0 px-6 py-3 rounded-full border border-gray-200 text-dm-black font-medium group-hover:bg-dm-black group-hover:text-white transition-colors">
                                Read Paper
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
