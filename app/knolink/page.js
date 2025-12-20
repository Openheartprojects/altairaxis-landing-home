'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { Sparkles, Brain, Lock, Network, Zap, Mic, FileText, Monitor, ArrowRight } from 'lucide-react';

// --- Visual Components (Adapted for Bento) ---

const SynthesisOrb = () => (
    <div className="relative w-full h-full flex items-center justify-center min-h-[200px]">
        <div className="absolute inset-0 flex items-center justify-center">
            {/* The Orb */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-dm-blue to-purple-500 blur-2xl opacity-40 animate-pulse-slow" />
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 border border-dashed border-gray-400/30 rounded-full"
            />
            <div className="bg-white rounded-full p-4 shadow-xl relative z-10 border border-gray-100">
                <Brain className="w-8 h-8 text-dm-black" />
            </div>
        </div>
        {/* Floating Inputs */}
        <div className="absolute top-4 left-1/4 px-2 py-1 bg-white/80 rounded-full text-[10px] text-gray-500 border border-gray-100 backdrop-blur">Audio</div>
        <div className="absolute bottom-12 right-1/4 px-2 py-1 bg-white/80 rounded-full text-[10px] text-gray-500 border border-gray-100 backdrop-blur">Screen</div>
    </div>
);

const GridPowerMini = () => (
    <div className="relative h-full flex flex-col justify-end p-2">
        <div className="flex gap-2 items-end h-[60px] mb-2">
            <div className="w-1/2 bg-gray-700/30 rounded-t h-[30%]" />
            <div className="w-1/2 bg-white rounded-t h-[100%] animate-pulse" />
        </div>
        <div className="flex justify-between text-[10px] text-white/60 font-mono">
            <span>Cloud</span>
            <span>Grid</span>
        </div>
    </div>
);

const HudPreview = () => (
    <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden border border-white/10 p-4">
        <div className="absolute top-2 right-2 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
        </div>
        <div className="mt-4 space-y-2">
            <div className="w-3/4 h-2 bg-white/10 rounded animate-pulse" />
            <div className="w-1/2 h-2 bg-white/10 rounded" />
        </div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-dm-blue/20 blur-xl rounded-full" />
    </div>
);

const HudFullGraphic = () => (
    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Abstract Screen Context */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-[#050505]" />

        {/* The HUD UI */}
        <div className="relative z-10 w-[90%] md:w-[60%] aspect-video bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl p-6 flex gap-6">
            {/* Main Content Area (Blurred) */}
            <div className="flex-1 space-y-4 opacity-30">
                <div className="w-full h-32 bg-gray-500/20 rounded-lg" />
                <div className="w-full h-4 bg-gray-500/20 rounded" />
                <div className="w-2/3 h-4 bg-gray-500/20 rounded" />
            </div>

            {/* The KnoLink Sidebar */}
            <div className="w-1/3 border-l border-white/10 pl-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-dm-blue mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span className="text-xs font-mono uppercase tracking-widest">Live</span>
                </div>
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="text-[10px] text-red-400 uppercase mb-1">Objection</div>
                    <div className="text-xs text-white/90">"Pricing too high"</div>
                </div>
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="text-[10px] text-green-400 uppercase mb-1">Rebuttal</div>
                    <div className="text-xs text-white/90">Ref: Q3 ROI Study (+40%)</div>
                </div>
            </div>
        </div>
    </div>
);

const KnolinkPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-blue selection:text-white font-sans">
            <Navbar />

            {/* Hero Section (Original Layout, New Copy) */}
            <section className="relative pt-32 md:pt-[180px] pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-dm-black/10 bg-dm-gray mb-8">
                        <Sparkles className="w-4 h-4 text-dm-blue" />
                        <span className="text-xs font-medium tracking-wide uppercase text-dm-text-secondary">Project Two</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-[7rem] leading-[0.95] font-medium tracking-tighter mb-8 md:mb-12 text-dm-black">
                        The Sovereign <br />
                        <span className="text-gray-400">Intelligence Interface.</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-8">
                            <p className="text-2xl md:text-3xl text-dm-black leading-tight font-light">
                                KnoLink is a real-time cognitive overlay. Powered by the Apolemia distributed network, it provides instantaneous context and guidance during high-stakes moments.
                            </p>
                        </div>
                        <div className="md:col-span-4 flex flex-col items-start justify-end">
                            <button className="group relative px-8 py-4 bg-dm-black text-white rounded-lg font-medium text-lg overflow-hidden transition-all hover:bg-dm-blue">
                                <span className="relative z-10 flex items-center gap-2">
                                    Download KnoLink <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Grid (Original Bento Layout, New Visuals & Content) */}
            <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* 1. Deep Context / Synthesis Orb */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 lg:col-span-2 bg-dm-gray rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-8 group"
                    >
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/50 mb-6 backdrop-blur-sm">
                                <Brain className="w-6 h-6 text-dm-blue" />
                            </div>
                            <h3 className="text-3xl font-medium mb-3 tracking-tight">Live Contextual Synthesis</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                KnoLink scans audio and active windows to build a "Live Knowledge Graph," instantly pulling market data or project history.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 aspect-square">
                            <SynthesisOrb />
                        </div>
                    </motion.div>

                    {/* 2. Grid Power */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-1 lg:col-span-1 bg-dm-black text-white rounded-[24px] p-8 flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mb-8 backdrop-blur-sm">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">The Grid Advantage</h3>
                            <p className="text-white/60 text-sm mb-4">Sub-second response times via Apolemia sharding.</p>
                            <div className="h-24 bg-white/5 rounded-lg border border-white/10">
                                <GridPowerMini />
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Privacy */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-1 lg:col-span-1 border border-gray-200 rounded-[24px] p-8 flex flex-col justify-between"
                    >
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-dm-gray mb-8 backdrop-blur-sm">
                            <Lock className="w-6 h-6 text-dm-teal" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-2">Privacy by Design</h3>
                            <p className="text-gray-500 text-sm">Data processed in isolated sandboxes. Never enters a corporate training set.</p>
                        </div>
                    </motion.div>

                    {/* 4. Undetectable / Knowledge Sync */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="md:col-span-2 lg:col-span-2 bg-dm-blue text-white rounded-[24px] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
                    >
                        {/* Background texture matching old design vibe */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="flex-1 relative z-10">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 mb-6 backdrop-blur-sm">
                                <Monitor className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-medium mb-3 tracking-tight">Undetectable Overlay</h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Invisible to screen-sharing software. A "Head-Up Display" for your brain that only you can see.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 aspect-video bg-black/20 rounded-lg border border-white/10 backdrop-blur-sm p-4 relative z-10">
                            <div className="flex justify-between items-center mb-2 border-b border-white/10 pb-2">
                                <span className="text-[10px] font-mono uppercase">Zoom Meeting</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/10 border-l border-white/10" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom Section (Replaces 'Visualization Engine' with HUD Hero) */}
            <section className="pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="w-full h-[80vh] rounded-[32px] overflow-hidden relative shadow-2xl group">
                    <HudFullGraphic />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur rounded-full border border-white/20 mb-4">
                            <Sparkles className="w-3 h-3 text-dm-blue" />
                            <span className="text-[10px] font-mono uppercase tracking-widest">System Preview</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium mb-2">The HUD.</h2>
                        <p className="text-white/60 text-lg">Your secret weapon for high-stakes meetings.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default KnolinkPage;
