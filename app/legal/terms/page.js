'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import { FileText, Server, AlertTriangle, Cpu, Terminal } from 'lucide-react';

const TermsPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            <section className="pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header with Illustration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <div className="mb-8 relative w-16 h-16 flex items-center justify-center">
                            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl animate-pulse-slow" />
                            <FileText className="w-10 h-10 text-emerald-600 relative z-10" />
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 border border-emerald-100">
                                <Terminal className="w-3 h-3 text-dm-black" />
                            </div>
                        </div>

                        <p className="font-mono text-sm text-emerald-600 mb-4 tracking-widest uppercase">Legal • Effective Dec 15, 2024</p>
                        <h1 className="font-serif text-5xl md:text-6xl text-dm-black mb-6 tracking-tight">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            The "Apolemia Grid" Agreement.
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-16"
                    >
                        {/* Node Providers */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Server className="w-5 h-5 text-gray-400" />
                                <h2 className="font-serif text-2xl text-dm-black">Apolemia Grid Agreement</h2>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-8">
                                <div>
                                    <h3 className="font-bold text-dm-black text-lg mb-2 flex items-center gap-2">
                                        <Cpu className="w-4 h-4 text-emerald-500" /> Node Providers
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">By downloading the Apolemia Worker, you agree to provide compute resources to the network. You are responsible for ensuring your hardware meets our safety standards.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dm-black text-lg mb-2 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4 text-amber-500" /> Resource Usage
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">Altair Axis is not liable for any wear and tear on your hardware resulting from high-intensity compute tasks.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-dm-black text-lg mb-2">Sandbox Security</h3>
                                    <p className="text-gray-600 leading-relaxed">You agree not to attempt to breach the worker sandbox or interfere with the Proof-of-Execution (PoE) protocol.</p>
                                </div>
                            </div>
                        </section>

                        {/* KnoLink Usage */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Terminal className="w-5 h-5 text-gray-400" />
                                <h2 className="font-serif text-2xl text-dm-black">KnoLink Usage</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 space-y-6">
                                <div className="pl-4 border-l-2 border-emerald-500/20">
                                    <h3 className="font-bold text-dm-black text-lg mb-2">Permitted Use</h3>
                                    <p>KnoLink is designed for research, productivity, and personal synthesis. You agree not to use KnoLink for illegal surveillance or to violate the privacy of third parties during recorded sessions.</p>
                                </div>
                                <div className="pl-4 border-l-2 border-emerald-500/20">
                                    <h3 className="font-bold text-dm-black text-lg mb-2">No Warranty</h3>
                                    <p>As we are currently in Beta, the services are provided "as-is." While we strive for 100% uptime, Altair Axis is not responsible for data loss or service interruptions.</p>
                                </div>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TermsPage;
