'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { Cpu, Globe, Shield, Terminal, ArrowRight, LayoutDashboard } from 'lucide-react';

// --- Terminal Component ---
const TerminalWindow = () => {
    const lines = [
        "> INITIALIZING_SANDBOX...",
        "> VERIFYING_HARDWARE [H100 DETECTED]",
        "> ESTABLISHING_P2P_HANDSHAKE...",
        "> CONNECTED_TO_AXIS_GRID",
        "> STATUS: ONLINE | AWAITING_JOBS"
    ];

    return (
        <div className="w-full h-full rounded-xl bg-[#0A0A0A] border border-gray-800 font-mono text-xs p-4 flex flex-col shadow-inner">
            <div className="flex gap-1.5 mb-4 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-green-500/90 space-y-1">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.5 }}
                    >
                        <span className="opacity-50 mr-2">$</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-1.5 h-3 bg-green-500 mt-1"
                />
            </div>
        </div>
    );
};

// --- Console Mockup Component ---
const ConsoleMockup = () => {
    return (
        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col font-sans text-xs md:text-sm">
            {/* Header */}
            <div className="h-10 border-b border-gray-100 flex items-center justify-between px-4 bg-gray-50/50">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-dm-black">Console</span>
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[10px] font-mono">LIVE</span>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 bg-gray-50/30 flex gap-4">
                {/* Sidebar */}
                <div className="w-1/4 hidden md:block space-y-1">
                    <div className="px-2 py-1.5 bg-white shadow-sm rounded border border-gray-100 font-medium text-dm-black">Overview</div>
                    <div className="px-2 py-1.5 text-gray-400">Deployments</div>
                    <div className="px-2 py-1.5 text-gray-400">Settings</div>
                </div>

                {/* Main */}
                <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded border border-gray-100">
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Active Jobs</div>
                            <div className="text-xl font-mono">12</div>
                        </div>
                        <div className="p-3 bg-white rounded border border-gray-100">
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Throughput</div>
                            <div className="text-xl font-mono">842 t/s</div>
                        </div>
                    </div>
                    <div className="p-3 bg-white rounded border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Llama-3-70b-Instruct</span>
                            <span className="text-blue-500 text-[10px] bg-blue-50 px-1.5 py-0.5 rounded">Running</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-1">
                            <div className="bg-blue-500 h-full w-[75%]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ApolemiaPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-blue selection:text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-[180px] pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-dm-black/10 bg-dm-gray mb-8">
                        <Cpu className="w-4 h-4 text-dm-blue" />
                        <span className="text-xs font-medium tracking-wide uppercase text-dm-text-secondary">Project One</span>
                    </div>

                    <h1 className="text-7xl md:text-[8rem] leading-[0.95] font-medium tracking-tighter mb-12 text-dm-black">
                        The Distributed <br />
                        <span className="text-gray-400">Compute Fabric.</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-7">
                            <p className="text-2xl md:text-3xl text-dm-black leading-tight font-light">
                                Apolemia is the engine of Altair Axis. A decentralized orchestration layer that aggregates global GPU capacity into a unified, high-performance grid.
                            </p>
                        </div>
                        <div className="md:col-span-5 flex flex-col items-start justify-end">
                            <button className="group relative px-8 py-4 bg-dm-black text-white rounded-lg font-medium text-lg overflow-hidden transition-all hover:bg-dm-blue">
                                <span className="relative z-10 flex items-center gap-2">
                                    Deploy Node <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features (Bento Grid with Integrated Visuals) */}
            <section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">

                    {/* The Worker (Large with Terminal) */}
                    <div className="md:col-span-2 md:row-span-2 p-8 rounded-[32px] bg-dm-gray flex flex-col justify-between group overflow-hidden relative">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white mb-8 shadow-sm">
                                <Terminal className="w-6 h-6 text-dm-black" />
                            </div>
                            <h3 className="text-3xl font-medium mb-3 tracking-tight">The Worker</h3>
                            <p className="text-lg text-gray-600 mb-8 max-w-sm">
                                Turn your hardware into an active node. Our encapsulated sandbox ensures security while you contribute to the grid.
                            </p>
                        </div>
                        <div className="absolute right-[-40px] bottom-[-40px] w-[80%] h-[70%] transform rotate-[-5deg] transition-transform group-hover:rotate-[0deg] shadow-2xl rounded-tl-xl overflow-hidden">
                            <TerminalWindow />
                        </div>
                    </div>

                    {/* Global Grid (Statistic) */}
                    <div className="md:col-span-1 md:row-span-1 p-8 rounded-[32px] bg-dm-black text-white flex flex-col justify-between">
                        <Globe className="w-8 h-8 text-dm-blue" />
                        <div>
                            <div className="text-5xl font-mono mb-2 tracking-tighter">14,205</div>
                            <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Active Nodes</p>
                        </div>
                    </div>

                    {/* Proof of Execution (Icon) */}
                    <div className="md:col-span-1 md:row-span-1 p-8 rounded-[32px] border border-gray-200 flex flex-col justify-between hover:bg-gray-50 transition-colors">
                        <Shield className="w-8 h-8 text-dm-teal" />
                        <div>
                            <h3 className="text-xl font-medium mb-2">Proof of Execution</h3>
                            <p className="text-sm text-gray-500">Trustless verification via latent-aware sampling.</p>
                        </div>
                    </div>

                    {/* The Console (Medium with Mockup Preview) */}
                    <div className="md:col-span-2 md:row-span-1 p-8 rounded-[32px] bg-dm-blue text-white overflow-hidden relative group">
                        <div className="relative z-10 w-1/2">
                            <LayoutDashboard className="w-8 h-8 text-white mb-6" />
                            <h3 className="text-2xl font-medium mb-2">The Console</h3>
                            <p className="text-white/80">Manage deployments from a single glass pane.</p>
                        </div>
                        {/* Abstract Shape/Glow */}
                        <div className="absolute -right-12 -bottom-24 w-64 h-64 bg-white/20 rounded-full blur-[80px] group-hover:scale-110 transition-transform" />
                    </div>

                </div>
            </section>

            {/* Bottom Section: Full Console Preview (Usefull) */}
            <section className="pb-24 px-6 md:px-12 max-w-[1600px] mx-auto">
                <div className="uppercase tracking-widest text-xs font-medium text-gray-400 mb-8 ml-4">System Interface v2.0</div>
                <div className="w-full bg-dm-gray rounded-[32px] overflow-hidden p-8 md:p-16 relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none" />

                    <div className="max-w-5xl mx-auto transform transition-transform duration-700 group-hover:scale-[1.01] shadow-2xl rounded-xl overflow-hidden">
                        <ConsoleMockup />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ApolemiaPage;
