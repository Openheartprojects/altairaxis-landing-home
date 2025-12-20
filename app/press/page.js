'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Shield } from 'lucide-react';
import { pressReleases, updatesFeed } from '../../data/press';

const PressPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-text-primary font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-[160px] pb-16 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="font-medium text-dm-blue text-sm uppercase tracking-widest mb-6">
                        Technical Progress & Milestones
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl text-dm-black mb-6 tracking-tight max-w-4xl">
                        Building the Universal Grid.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        Verified benchmarks and engineering updates from the Apolemia core team.
                    </p>
                </motion.div>
            </section>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-24">

                {/* Main Content: Milestones */}
                <div className="space-y-16">
                    {pressReleases.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={`/press/${item.slug}`} className="block">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{item.date} — {item.category}</span>
                                <h2 className="font-serif text-3xl md:text-4xl text-dm-black mb-4 group-hover:text-dm-blue transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 text-dm-blue font-medium group-hover:underline underline-offset-4">
                                    Read Full Report <ArrowRight className="w-4 h-4" />
                                </div>
                            </Link>
                            <div className="h-[1px] bg-gray-100 mt-12 w-full" />
                        </motion.div>
                    ))}
                </div>

                {/* Sidebar: Mini-Updates */}
                <aside className="relative">
                    <div className="sticky top-32">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <h3 className="font-medium text-dm-black uppercase tracking-widest text-xs">Live Engineering Updates</h3>
                            </div>

                            <div className="relative border-l border-gray-200 pl-6 space-y-10">
                                {updatesFeed.map((update, i) => (
                                    <div key={i} className="relative">
                                        <div className="absolute -left-[29px] top-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 ring-4 ring-gray-50" />
                                        <div className="text-xs font-bold text-dm-black mb-2">{update.date}</div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {update.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </main>
    );
};

export default PressPage;
