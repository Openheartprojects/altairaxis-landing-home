'use client';

import { motion } from 'framer-motion';
import { Navbar, Footer } from '../../components';
import { Cpu, Zap, Download, Terminal, Activity, DollarSign } from 'lucide-react';

const InfrastructurePage = () => {
    return (
        <main className="min-h-screen bg-dm-black text-dm-white font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-[200px] pb-32 px-6 md:px-12 overflow-hidden">
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-mono text-dm-blue text-sm uppercase tracking-widest mb-6">
                            Global Computation Layer
                        </p>
                        <h1 className="text-6xl md:text-[8rem] leading-[0.9] font-medium tracking-tighter mb-12 text-white">
                            Sovereign <br /> Compute.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-16 mx-auto">
                            Monetize your idle hardware. Join the Axis network to power the next generation of decentralized intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Node Economy Grid */}
            <section className="py-24 px-6 md:px-12 bg-white/[0.02] border-t border-white/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16 md:flex md:justify-between md:items-end">
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 md:mb-0">
                            The Node Economy
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md text-right">
                            Algorithmic pricing based on real-time supply and demand.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: DollarSign,
                                title: "Micropayments",
                                desc: "Streaming payments per token generated. Zero withdrawal fees.",
                                stat: "$0.40 / 1M Tokens"
                            },
                            {
                                icon: Activity,
                                title: "Staking & Quality",
                                desc: "High-availability nodes earn 1.5x multipliers. Slashing ensures network integrity.",
                                stat: "99.9% Uptime Req"
                            },
                            {
                                icon: Zap,
                                title: "Dynamic Pricing",
                                desc: "Rates adjust automatically based on your hardware capabilities (VRAM, TFLOPS).",
                                stat: "H100 = Premium"
                            },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-[24px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 rounded-xl bg-dm-blue/10 text-dm-blue">
                                        <card.icon className="w-6 h-6" />
                                    </div>
                                    <span className="font-mono text-xs text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                                        PROTOCOL V2
                                    </span>
                                </div>
                                <h3 className="text-2xl font-medium mb-3">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed mb-8">{card.desc}</p>
                                <div className="pt-6 border-t border-white/10">
                                    <span className="text-dm-blue font-mono text-sm">{card.stat}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Install Section */}
            <section className="py-32 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto bg-gradient-to-b from-white/10 to-transparent p-[1px] rounded-[40px]">
                    <div className="bg-[#0A0A0A] rounded-[39px] p-12 md:p-24 text-center overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">System Requirements</h2>
                            <div className="flex justify-center gap-12 mb-12 text-left">
                                <div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">OS</div>
                                    <div className="text-white text-xl">Linux / Windows</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">VRAM</div>
                                    <div className="text-white text-xl">8GB Minimum</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-sm uppercase tracking-wider mb-2">Network</div>
                                    <div className="text-white text-xl">100 Mbps+</div>
                                </div>
                            </div>

                            <div className="max-w-2xl mx-auto bg-black border border-white/20 rounded-xl p-6 text-left flex items-center justify-between group cursor-pointer hover:border-dm-blue/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <Terminal className="w-5 h-5 text-gray-500" />
                                    <code className="text-green-400 font-mono text-sm md:text-base">curl -sL https://axis.run/install | bash</code>
                                </div>
                                <div className="text-gray-500 text-xs hidden md:block group-hover:text-white transition-colors">CLICK TO COPY</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default InfrastructurePage;
