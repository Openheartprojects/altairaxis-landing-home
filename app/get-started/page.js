'use client';

import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Network, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function GetStarted() {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Genesis Phase
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 md:mb-8 text-dm-black">
                            Start Building on Axis.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12">
                            Two ways to join the network. Deploy latency-sensitive models to our distributed fleet, or provision capacity to earn.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* 1. For Developers */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-[32px] bg-white border border-gray-200 hover:border-dm-black/20 text-left transition-colors group shadow-sm hover:shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-[100px] opacity-50" />

                            <div className="w-12 h-12 rounded-full bg-dm-black text-white flex items-center justify-center mb-6">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Deploy Models</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed h-20">
                                Access our distributed GPU grid via the Apolemia Console. Deploy Llama, Mistral, and custom models in seconds.
                            </p>
                            <Link href="https://apolemia-console.onrender.com/login" className="flex items-center gap-2 text-dm-black font-semibold group-hover:text-blue-600 transition-colors">
                                Launch Console <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* 2. For Node Providers */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-[32px] bg-white border border-gray-200 hover:border-dm-black/20 text-left transition-colors group shadow-sm hover:shadow-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-[100px] opacity-50" />

                            <div className="w-12 h-12 rounded-full bg-gray-100 text-dm-black flex items-center justify-center mb-6">
                                <Network className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Run a Node</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed h-20">
                                Contribute compute to the network. Currently in private alpha for high-availability partners.
                            </p>
                            <a href="mailto:partners@altairaxis.com" className="flex items-center gap-2 text-dm-black font-semibold group-hover:text-purple-600 transition-colors">
                                Request Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Integration Code Block */}
            <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-2 text-xs font-mono text-gray-400">sdk_quickstart.py</span>
                    </div>
                    <div className="bg-[#1e1e1e] p-6 rounded-xl shadow-2xl overflow-hidden font-mono text-sm leading-relaxed text-gray-300">
                        <p><span className="text-blue-400">import</span> altair <span className="text-blue-400">as</span> ax</p>
                        <p className="mt-4"><span className="text-green-400"># Connect to the grid</span></p>
                        <p>client = ax.Client(api_key=<span className="text-orange-400">"ax_..."</span>)</p>
                        <p className="mt-4"><span className="text-green-400"># Deploy a model closer to users</span></p>
                        <p>deployment = client.deploy(</p>
                        <p className="pl-4">model=<span className="text-orange-400">"llama-3-70b"</span>,</p>
                        <p className="pl-4">strategy=<span className="text-orange-400">"latency_optimized"</span>,</p>
                        <p className="pl-4">regions=[<span className="text-orange-400">"global"</span>]</p>
                        <p>)</p>
                        <p className="mt-4">print(<span className="text-orange-400">f"Deployed at: &#123;deployment.url&#125;"</span>)</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
