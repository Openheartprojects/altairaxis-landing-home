'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Decryption Effect Component
const DecryptText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState('');
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join('')
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 2; // Speed of decryption
        }, 30);

        return () => clearInterval(interval);
    }, [isInView, text]);

    return <span ref={ref} className={className}>{displayText}</span>;
};

// Telemetry Card Component
const TelemetryCard = ({ label, value, subtext }) => (
    <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
        className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between h-full group transition-colors"
    >
        <div className="flex justify-between items-start mb-4">
            <span className="font-mono text-xs text-dm-teal uppercase tracking-widest leading-none">{label}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-dm-teal animate-pulse" />
        </div>
        <div>
            <div className="text-3xl md:text-5xl font-mono text-white tracking-tighter mb-2 group-hover:text-dm-teal transition-colors">
                {value}
            </div>
            <div className="text-xs text-gray-500 font-mono">{subtext}</div>
        </div>
    </motion.div>
);

const About = () => {
    const [nodes, setNodes] = useState(14205);

    // Simulate live node count
    useEffect(() => {
        const interval = setInterval(() => {
            setNodes(prev => prev + Math.floor(Math.random() * 5) - 2);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-32 px-6 bg-dm-black text-white overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(180px,auto)]">

                    {/* Main Mission Block (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 lg:row-span-2 p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-center"
                    >
                        <span className="font-mono text-xs text-dm-blue uppercase tracking-widest mb-6 block">// Mission Protocol</span>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1] mb-8">
                            <span className="text-gray-500">Decoupling intelligence from the data center.</span> <br />
                            <span className="text-white">Returning it to the network.</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                            We believe that the current trajectory of AI is constrained by a fundamental irony: software is becoming fluid, while hardware becomes opaque. Altair Axis is the "backbone" that unifies the world's compute into a single, sovereign fabric.
                        </p>
                    </motion.div>

                    {/* Telemetry: Active Nodes */}
                    <div className="lg:col-span-4 lg:row-span-1">
                        <TelemetryCard
                            label="Active Nodes"
                            value={nodes.toLocaleString()}
                            subtext="Global distributed workers online"
                        />
                    </div>

                    {/* Telemetry: Latency */}
                    <div className="lg:col-span-4 lg:row-span-1">
                        <TelemetryCard
                            label="Network Latency"
                            value="14ms"
                            subtext="Average global p2p response time"
                        />
                    </div>

                    {/* "Join The Grid" CTA */}
                    <motion.a
                        href="/apolemia"
                        whileHover={{ scale: 0.98 }}
                        className="lg:col-span-4 lg:row-span-1 p-8 rounded-2xl bg-dm-blue text-white flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="font-mono text-xs uppercase tracking-widest">Connect</span>
                        <div className="text-2xl font-medium flex items-center gap-2">
                            Deploy Node
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                    </motion.a>

                    {/* "Read Manifesto" Block */}
                    <motion.a
                        href="/about"
                        whileHover={{ scale: 0.98 }}
                        className="lg:col-span-8 lg:row-span-1 p-8 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-between group"
                    >
                        <div>
                            <span className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-2 block">Altair Axis Research</span>
                            <h3 className="text-2xl font-medium text-white group-hover:text-dm-teal transition-colors">Read the full Architecture of Intelligence.</h3>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </motion.a>

                </div>
            </div>
        </section>
    );
};

export default About;
