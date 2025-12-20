'use client';

import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const positions = [
    { title: "Research Scientist, Distributed Systems", location: "London / Remote", type: "Full-time" },
    { title: "Senior Rust Engineer", location: "San Francisco", type: "Full-time" },
    { title: "Founding Designer", location: "New York", type: "Full-time" },
    { title: "Protocol Specialist", location: "Tokyo / Remote", type: "Contract" },
];

export default function Careers() {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-teal selection:text-white font-sans">
            <Navbar />

            <section className="pt-32 md:pt-48 pb-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tighter mb-8 md:mb-12">
                            Join the <br />
                            <span className="text-dm-blue">Frontier.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-24">
                            We are building the nervous system of the decentralized web. It requires a rare combination of theoretical rigor and engineering fearlessness.
                        </p>
                    </motion.div>

                    <div className="border-t border-gray-200">
                        {positions.map((pos, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors px-4 -mx-4 rounded-xl"
                            >
                                <div>
                                    <h3 className="text-2xl font-medium mb-2 group-hover:text-dm-blue transition-colors">{pos.title}</h3>
                                    <span className="text-gray-500">{pos.location} • {pos.type}</span>
                                </div>
                                <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    <ArrowUpRight className="w-8 h-8 text-dm-blue" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-24 p-8 md:p-12 bg-dm-black text-white rounded-[32px] overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-dm-blue/20 to-dm-teal/20" />
                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <h3 className="text-3xl font-serif">Don't see your role?</h3>
                            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                                Email us anyway
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
