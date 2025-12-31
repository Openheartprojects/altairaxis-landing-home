'use client';

import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { motion } from 'framer-motion';
import { Network, ShieldCheck, Zap, Activity } from 'lucide-react';
import Architecture from '../../components/deepmind/Architecture'; // Reusing the component logic if available, or redefining here.

// Redefining Architecture section pieces for a full page layout
const Feature = ({ title, description, icon: Icon }) => (
    <div className="flex gap-4 items-start p-6 rounded-2xl bg-gray-50 border border-gray-100">
        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-dm-black" />
        </div>
        <div>
            <h3 className="text-lg font-bold text-dm-black mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
        </div>
    </div>
);

export default function ArchitecturePage() {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-mono uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Live Topology
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-dm-black">
                            The Logic of the Mesh.
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            Altair Axis is not a cloud. It is a protocol for coordinating decentralized compute. Here is how the network guarantees performance without centralization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Mechanics */}
            <section className="py-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="aspect-square md:aspect-[4/3] bg-dm-black rounded-[40px] relative overflow-hidden flex items-center justify-center"
                        >
                            {/* Abstract Network Animation */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black opacity-50" />
                            <div className="relative z-10 grid grid-cols-2 gap-12">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-pulse">
                                        <Network className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Router</span>
                                </div>
                                <div className="flex flex-col items-center gap-4 pt-12">
                                    <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                                        <ShieldCheck className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Verifier</span>
                                </div>
                            </div>

                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                                <line x1="30%" y1="40%" x2="70%" y2="60%" stroke="white" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="70%" y1="60%" x2="30%" y2="80%" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                                <circle cx="50%" cy="50%" r="200" fill="none" stroke="white" strokeWidth="1" className="opacity-10" />
                            </svg>
                        </motion.div>

                        {/* Text */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Peer-to-Peer Optimization</h2>
                            <div className="space-y-6">
                                <Feature
                                    title="Proximity Routing"
                                    description="Requests are automatically routed to the node geographically closest to the user, minimizing speed-of-light latency."
                                    icon={Network}
                                />
                                <Feature
                                    title="Cryptographic Verification"
                                    description="Every inference result is signed by the node. A random subset of outputs are cross-validated by verifier nodes to ensure integrity."
                                    icon={ShieldCheck}
                                />
                                <Feature
                                    title="Dynamic Load Balancing"
                                    description="If a node becomes congested, the protocol instantly reroutes traffic to the next best available peer. Zero downtime."
                                    icon={Activity}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specs */}
            <section className="py-20 px-6 bg-dm-gray">
                <div className="max-w-[1000px] mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Technical Specifications</h2>
                    <p className="text-gray-500">The standards that power the network.</p>
                </div>
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100">
                        <div className="font-mono text-xs text-blue-500 mb-2">TRANSPORT LAYER</div>
                        <h3 className="text-xl font-bold mb-4">gRPC / HTTP3</h3>
                        <p className="text-sm text-gray-500">High-performance, low-overhead communication between nodes and clients. Multiplexed streams for parallel inference.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100">
                        <div className="font-mono text-xs text-purple-500 mb-2">CONTAINERIZATION</div>
                        <h3 className="text-xl font-bold mb-4">WASM / OCI</h3>
                        <p className="text-sm text-gray-500">Secure, sandboxed execution environments ensuring that code runs consistently across any hardware provider.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100">
                        <div className="font-mono text-xs text-emerald-500 mb-2">CONSENSUS</div>
                        <h3 className="text-xl font-bold mb-4">Proof of Inference</h3>
                        <p className="text-sm text-gray-500">A novel consensus mechanism that validates computational work (inference) rather than arbitrary hashing.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
