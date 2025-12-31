'use client';

import { motion } from 'framer-motion';
import { Terminal, Globe, Cpu, Activity, Shield, Layers, ArrowRight, Command, Cloud } from 'lucide-react';
import Link from 'next/link';

// --- Visual Sub-Components ---

const OrchestratorGraphic = () => (
    <div className="w-full h-full bg-[#0F1115] rounded-xl overflow-hidden flex flex-col font-mono text-xs relative border border-white/10 shadow-2xl">
        {/* Header */}
        <div className="h-8 border-b border-white/5 flex items-center justify-between px-3 bg-[#1A1D24]">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="text-gray-500">apolemia_console // deploy</div>
        </div>

        {/* Body */}
        <div className="p-6 relative z-10">
            {/* Progress Card */}
            <div className="bg-[#0A0C10] border border-cyan-500/30 rounded p-4 mb-4 shadow-[0_0_20px_-5px_rgba(6,182,212,0.1)]">
                <div className="flex justify-between items-center mb-2 text-cyan-400">
                    <span>DEPLOYING: LLAMA-3-70B-INSTRUCT</span>
                    <span className="animate-pulse">RUNNING</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mb-2">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "78%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                    />
                </div>
                <div className="flex justify-between text-gray-400">
                    <span>Mapping weights...</span>
                    <span>78%</span>
                </div>
            </div>

            {/* Simluated Node Map Text */}
            <div className="space-y-2 opacity-50">
                <div className="flex gap-2 text-gray-600">
                    <span>[SYS]</span>
                    <span>Verifying H100 cluster availability...</span>
                    <span className="text-green-500">OK</span>
                </div>
                <div className="flex gap-2 text-gray-600">
                    <span>[NET]</span>
                    <span>Establishing p2p mesh (14 nodes)...</span>
                    <span className="text-green-500">CONNECTED</span>
                </div>
                <div className="flex gap-2 text-gray-600">
                    <span>[SEC]</span>
                    <span>Injecting sandbox runtime...</span>
                    <span className="text-green-500">SECURE</span>
                </div>
            </div>
        </div>

        {/* Background "Map" Effect */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/40 via-[#0F1115] to-[#0F1115]" />
        <div className="absolute bottom-4 right-4 text-[10px] text-gray-600">v2.4.0-stable</div>
    </div>
);

const NodeHealthHud = () => (
    <div className="bg-[#050505] p-5 rounded-xl border border-white/10 font-mono text-[10px] md:text-xs text-gray-400 space-y-3 shadow-inner">
        <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span>FLEET_STATUS</span>
            <span className="text-green-500">OPTIMAL</span>
        </div>

        <div className="flex items-center justify-between">
            <span className="text-white">AP-771 (FRA)</span>
            <span className="px-1.5 py-0.5 bg-green-900/30 text-green-400 rounded border border-green-900/50">ACTIVE</span>
            <span>H100 x8</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-white">AP-402 (NRT)</span>
            <span className="px-1.5 py-0.5 bg-yellow-900/30 text-yellow-400 rounded border border-yellow-900/50">IDLE</span>
            <span>A100 x4</span>
        </div>
        <div className="flex items-center justify-between">
            <span className="text-white">AP-105 (NYC)</span>
            <span className="px-1.5 py-0.5 bg-green-900/30 text-green-400 rounded border border-green-900/50">ACTIVE</span>
            <span>H100 x8</span>
        </div>

        <div className="pt-2 border-t border-white/5 flex justify-between text-gray-500">
            <span>Global Sync</span>
            <span className="text-dm-blue">12ms</span>
        </div>
    </div>
);

const PrismGraphic = () => (
    <div className="relative w-full h-full min-h-[160px] flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden">
        <div className="flex gap-4 opacity-30 grayscale absolute left-4">
            {/* Simple representations of "Cloud" icons */}
            <Cloud className="w-8 h-8" />
            <Server className="w-8 h-8" />
            <Globe className="w-8 h-8" />
        </div>

        {/* The Prism */}
        <div className="relative z-10 w-16 h-16 transform rotate-45 border-2 border-dm-black bg-white/50 backdrop-blur-sm shadow-xl flex items-center justify-center">
            <div className="w-8 h-8 bg-dm-black transform -rotate-45" />
        </div>

        {/* The Ray */}
        <div className="absolute right-0 top-1/2 w-1/3 h-1 bg-gradient-to-r from-dm-black to-transparent" />
        <div className="absolute top-[30%] right-[10%] w-2 h-2 bg-dm-blue rounded-full" />
        <div className="absolute bottom-[30%] right-[15%] w-2 h-2 bg-dm-blue rounded-full" />
    </div>
);

const ConsoleSection = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-dm-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="mb-20 max-w-4xl">
                    <span className="font-mono text-sm text-dm-blue uppercase tracking-widest mb-4 block">The Apolemia Console</span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-medium text-dm-black tracking-tight leading-[0.95] mb-8">
                        Command the Grid.
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        Deploy, scale, and manage decentralized AI infrastructure with the precision of a global supercomputer. The definitive interface for the modern AI engineer.
                    </p>
                </div>

                {/* Bento Grid - Optimized for Tablet (2 cols) and Desktop (4 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* 1. Hero: The Orchestrator (Large) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#050505] rounded-[32px] p-8 md:p-12 relative overflow-hidden group border border-gray-800"
                    >
                        <div className="relative z-20 flex flex-col h-full justify-between">
                            <div className="mb-8">
                                <h3 className="text-3xl font-medium text-white mb-2">Universal Deployment</h3>
                                <p className="text-gray-400">Frontier models to the grid in one command. Auto-provisioning, API wrapping, and sharding control included.</p>
                            </div>
                            <div className="w-full h-[240px] md:h-[300px] transform group-hover:scale-[1.02] transition-transform duration-500 origin-top">
                                <OrchestratorGraphic />
                            </div>
                        </div>
                        {/* Glow Effect */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dm-blue/10 rounded-full blur-[120px] pointer-events-none" />
                    </motion.div>

                    {/* 2. Node Fleet Management */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 lg:col-span-2 bg-dm-gray rounded-[32px] p-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <Activity className="w-5 h-5 text-dm-black" />
                            </div>
                            <h3 className="text-xl font-medium">Node Fleet Management</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                View the heartbeat of your ecosystem. Real-time telemetry, TFLOPS monitoring, and elastic scaling rules.
                            </p>
                            <NodeHealthHud />
                        </div>
                    </motion.div>

                    {/* 3. Developer Toolkit */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm"
                    >
                        <div className="w-10 h-10 rounded-full bg-dm-gray flex items-center justify-center mb-6">
                            <Shield className="w-5 h-5 text-dm-black" />
                        </div>
                        <h3 className="text-xl font-medium mb-3">Developer Toolkit</h3>
                        <ul className="text-sm text-gray-500 space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-dm-blue" /> Secure Key Vault
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-dm-blue" /> Usage Analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-dm-blue" /> Proof-of-Execution
                            </li>
                        </ul>
                    </motion.div>

                    {/* 4. The Frontier (Beta) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-1 bg-gradient-to-br from-dm-blue to-blue-600 text-white rounded-[32px] p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-4 right-4 px-2 py-0.5 bg-white/20 text-[10px] font-mono uppercase tracking-wider rounded backdrop-blur">Beta</div>

                        <Layers className="w-10 h-10 text-white/80 mb-6" />
                        <h3 className="text-xl font-medium mb-2">The Frontier</h3>
                        <p className="text-white/80 text-sm">Distributed Fine-Tuning & Raw Compute Jobs.</p>
                    </motion.div>
                </div>

                {/* Onboarding Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-6 p-8 md:p-12 rounded-[32px] bg-[#111] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10"
                >
                    <div>
                        <h3 className="text-3xl font-medium mb-2">The grid is waiting.</h3>
                        <p className="text-gray-400">Join the specialized network for AI.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <Link href="https://apolemia-console.onrender.com/login" className="px-8 py-4 bg-white text-black rounded-lg font-medium text-center hover:bg-gray-200 transition-colors">
                            Launch Console
                        </Link>
                        <Link href="/docs/deploy" className="px-8 py-4 bg-transparent border border-white/20 rounded-lg font-medium text-center hover:bg-white/10 transition-colors group flex items-center justify-center gap-2">
                            Deployment Docs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ConsoleSection;
