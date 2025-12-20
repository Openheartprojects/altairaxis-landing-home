'use client';

import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { motion } from 'framer-motion';

const releases = [
    { date: "December 15, 2024", title: "Altair Axis raises $40M Series A led by Paradigm", source: "Business Wire" },
    { date: "November 28, 2024", title: "Introducing Apolemia: The World's First Cognitive Fabric", source: "Medium" },
    { date: "October 10, 2024", title: "Benchmarks: KnoLink outperforms GPT-4 on latency-critical tasks", source: "arXiv" },
];

export default function Press() {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-teal selection:text-white font-sans">
            <Navbar />

            <section className="pt-48 pb-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-sm uppercase tracking-wider text-dm-blue mb-6 block">Newsroom</span>
                        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-24 text-dm-black">
                            Latest Updates
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16">
                        {releases.map((item, idx) => (
                            <motion.a
                                href="#"
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group block border-t border-gray-200 pt-16 hover:border-dm-blue transition-colors duration-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                                    <span className="font-mono text-sm text-gray-500 w-[150px]">{item.date}</span>
                                    <div className="flex-1">
                                        <h3 className="text-3xl md:text-4xl font-light leading-tight group-hover:text-dm-blue transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <span className="inline-block mt-4 text-sm font-medium uppercase tracking-wider text-gray-400">
                                            {item.source}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
