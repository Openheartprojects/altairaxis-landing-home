'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const FinalCTA = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-dm-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-dm-black rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-dm-blue/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1] mb-6"
                        >
                            Build on a Network Designed for the Next Era of AI.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/60 mb-10 leading-relaxed"
                        >
                            Whether you’re deploying real‑time inference, scaling global AI products, or rethinking infrastructure control, Altair Axis provides the foundation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/start" className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                                Start Building
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                                Talk to the Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
