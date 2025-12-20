'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import { Shield, Lock, Eye, Server, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
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
                            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow" />
                            <Shield className="w-10 h-10 text-dm-blue relative z-10" />
                            <Lock className="w-4 h-4 text-dm-black absolute -bottom-1 -right-1 bg-white rounded-full p-0.5" />
                        </div>

                        <p className="font-mono text-sm text-dm-blue mb-4 tracking-widest uppercase">Legal • Last Updated Dec 15, 2025</p>
                        <h1 className="font-serif text-5xl md:text-6xl text-dm-black mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light">
                            At Altair Axis, we believe privacy is a fundamental right, not a luxury. Our architecture is designed to minimize data collection and maximize local processing.
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="space-y-16"
                    >
                        {/* Data We Collect */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-5 h-5 text-gray-400" />
                                <h2 className="font-serif text-2xl text-dm-black">Data We Collect</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 space-y-6">
                                <div className="pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                                    <h3 className="font-bold text-dm-black text-lg mb-2">KnoLink Data</h3>
                                    <p>To provide real-time synthesis, KnoLink processes audio and visual context from your device. By default, this data is processed in a local sandbox or an ephemeral encrypted session on the Apolemia Grid. We do not store "raw" audio or screen recordings on our central servers.</p>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                                    <h3 className="font-bold text-dm-black text-lg mb-2">Apolemia Node Data</h3>
                                    <p>If you run a Worker, we collect technical telemetry (GPU type, uptime, latency) to manage the network. We do not access the private files on your host machine.</p>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                                    <h3 className="font-bold text-dm-black text-lg mb-2">Account Information</h3>
                                    <p>Basic details like email and billing info (if applicable) for the Apolemia Console.</p>
                                </div>
                            </div>
                        </section>

                        {/* How We Use Data */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <Server className="w-5 h-5 text-gray-400" />
                                <h2 className="font-serif text-2xl text-dm-black">How We Use Data</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600 space-y-4">
                                <ul className="list-none space-y-4 p-0">
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-dm-blue mt-2.5 flex-shrink-0" />
                                        <span><strong>Operational Integrity:</strong> To ensure the Grid is balanced and nodes are performing accurately.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-dm-blue mt-2.5 flex-shrink-0" />
                                        <span><strong>Synthesis Performance:</strong> To provide the "Knowledge HUD" in KnoLink.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-dm-blue mt-2.5 flex-shrink-0" />
                                        <span><strong>Zero-Training Policy:</strong> We do not use your private KnoLink data or proprietary code to train our base models without your explicit, opt-in consent.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Your Rights */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <UserCheck className="w-5 h-5 text-gray-400" />
                                <h2 className="font-serif text-2xl text-dm-black">Your Rights</h2>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <p className="text-gray-600 text-lg">
                                    You have the right to access, export, or delete your account data at any time via the Apolemia Console.
                                </p>
                            </div>
                        </section>

                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PrivacyPage;
