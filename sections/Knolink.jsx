'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Lock, Sparkles, Monitor } from 'lucide-react';
import Link from 'next/link';

// --- Visual Components ---

const SynthesisOrb = () => (
    <div className="relative w-full h-full flex items-center justify-center min-h-[220px]">
        <div className="absolute inset-0 flex items-center justify-center">
            {/* The Orb */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-dm-blue to-purple-500 blur-2xl opacity-40 animate-pulse-slow" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 border border-dashed border-dm-black/10 rounded-full"
            />
            <div className="bg-white rounded-full p-6 shadow-xl relative z-10 border border-gray-100">
                <Brain className="w-10 h-10 text-dm-black" />
            </div>
        </div>
        {/* Floating Inputs */}
        <div className="absolute top-8 left-1/4 px-3 py-1 bg-white/80 rounded-full text-[10px] text-gray-500 border border-gray-100 backdrop-blur shadow-sm">Audio Input</div>
        <div className="absolute bottom-12 right-1/4 px-3 py-1 bg-white/80 rounded-full text-[10px] text-gray-500 border border-gray-100 backdrop-blur shadow-sm">Visual Context</div>
    </div>
);

const HudPreview = () => (
    <div className="relative w-full h-full bg-[#111] rounded-2xl overflow-hidden border border-white/10 p-6 flex flex-col justify-between group">
        <div className="flex justify-between items-start">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
            </div>
            <div className="px-2 py-0.5 rounded bg-dm-blue/20 text-dm-blue text-[10px] font-mono uppercase">Live_Feed</div>
        </div>

        <div className="space-y-3 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-3/4 h-2 bg-white/20 rounded-full animate-pulse" />
            <div className="w-1/2 h-2 bg-white/20 rounded-full" />
            <div className="w-full h-16 bg-white/5 rounded-lg border border-white/5 mt-4" />
        </div>

        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-dm-blue/30 blur-2xl rounded-full" />
    </div>
);

const Knolink = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-dm-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-gray-100 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-dm-blue" />
                            <span className="font-mono text-sm text-dm-text-secondary uppercase tracking-widest">Applied Latency Research</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium text-dm-black tracking-tight leading-[0.95] mb-6">
                            The Invisible <br />
                            <span className="text-gray-300">Interface.</span>
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-xl">
                            Knolink is a real-time cognitive overlay. It runs on the edge, interpreting reality to provide sovereign intelligence when you need it most.
                        </p>
                    </motion.div>

                    <Link href="/knolink" className="group flex items-center gap-2 text-dm-black border-b border-dm-black/20 pb-1 hover:border-dm-black transition-colors">
                        <span className="font-mono text-sm uppercase tracking-wide">Explore Knolink</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* 1. Synthesis Engine - Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 bg-dm-gray rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 group"
                    >
                        <div className="flex-1 order-2 md:order-1">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                                <Brain className="w-6 h-6 text-dm-blue" />
                            </div>
                            <h3 className="text-2xl font-medium mb-3">Cognitive Synthesis</h3>
                            <p className="text-gray-500 leading-relaxed">
                                A live knowledge graph that scans audio and visual feeds to retrieve context instantly. It thinks alongside you.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <SynthesisOrb />
                        </div>
                    </motion.div>

                    {/* 2. Latency Stats - Dark Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-dm-black text-white rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-8 backdrop-blur">
                                <Zap className="w-6 h-6 text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-medium mb-2">Zero Latency</h3>
                            <p className="text-white/60 text-sm">Powered by the Apolemia grid for sub-20ms inference.</p>
                        </div>
                        <div className="mt-8 flex items-end gap-1 h-16 opacity-50">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <div key={i} className="flex-1 bg-dm-blue rounded-t-sm" style={{ height: `${h}%` }} />
                            ))}
                        </div>
                    </motion.div>

                    {/* 3. Undetectable Overlay - Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white border border-gray-100 rounded-[32px] p-8 flex flex-col justify-between shadow-sm"
                    >
                        <div>
                            <div className="w-12 h-12 rounded-full bg-dm-gray flex items-center justify-center mb-6">
                                <Lock className="w-6 h-6 text-dm-text-primary" />
                            </div>
                            <h3 className="text-2xl font-medium mb-2">Undetectable</h3>
                            <p className="text-gray-500 text-sm">Invisible to screen sharing. Your private intelligence layer.</p>
                        </div>
                        <div className="mt-6 aspect-video rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden">
                            <div className="text-[10px] text-gray-400 font-mono uppercase">Screen Share Safe</div>
                            <div className="absolute inset-0 bg-green-500/10 mix-blend-multiply" />
                        </div>
                    </motion.div>

                    {/* 4. HUD Preview - Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 bg-[#0A0A0A] rounded-[32px] p-2 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-dm-blue/20 to-transparent opacity-20 group-hover:opacity-30 transition-opacity" />
                        <div className="absolute top-8 left-8 z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="w-4 h-4 text-white" />
                                <span className="text-xs font-mono text-white/80 uppercase tracking-widest">Vision Engine</span>
                            </div>
                            <h3 className="text-2xl font-medium text-white">Multimodal HUD</h3>
                        </div>

                        <div className="w-full h-full pl-64 pt-8">
                            <HudPreview />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Knolink;
