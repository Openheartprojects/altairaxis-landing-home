'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import { Users, ShieldCheck, HeartHandshake, Bug, MessageSquare } from 'lucide-react';

const ConductPage = () => {
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
                            <div className="absolute inset-0 bg-violet-500/10 rounded-full blur-xl animate-pulse-slow" />
                            <Users className="w-10 h-10 text-violet-600 relative z-10" />
                            <HeartHandshake className="w-4 h-4 text-dm-black absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
                        </div>

                        <p className="font-mono text-sm text-violet-600 mb-4 tracking-widest uppercase">Community Standard</p>
                        <h1 className="font-serif text-5xl md:text-6xl text-dm-black mb-6 tracking-tight">
                            Code of Conduct
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            We are building a decentralized future. This requires a high degree of trust between node providers, researchers, and users.
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {/* Integrity */}
                        <div className="md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-5 h-5 text-violet-500" />
                                <h3 className="font-bold text-dm-black text-lg">Integrity of Compute</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Node providers must not attempt to "spoof" results. Providing false inference data undermines the entire Grid and will result in an immediate and permanent ban from the network.
                            </p>
                        </div>

                        {/* Ethical Synthesis */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Users className="w-5 h-5 text-blue-500" />
                                <h3 className="font-bold text-dm-black text-lg">Ethical Synthesis</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Users of KnoLink should be transparent when using AI-augmented insights in collaborative environments.
                            </p>
                        </div>

                        {/* Security First */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Bug className="w-5 h-5 text-amber-500" />
                                <h3 className="font-bold text-dm-black text-lg">Security First</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                If you discover a vulnerability in the Apolemia Worker or the Console, you are encouraged to report it via our Bug Bounty Program rather than exploiting it.
                            </p>
                        </div>

                        {/* No Harassment */}
                        <div className="md:col-span-2 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <MessageSquare className="w-5 h-5 text-rose-500" />
                                <h3 className="font-bold text-dm-black text-lg">No Harassment</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                Our community (Discord, GitHub, and Forums) is a space for technical excellence. We maintain a zero-tolerance policy for discrimination or harassment of any kind.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ConductPage;
