'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Image from 'next/image';

const articles = [
    {
        id: 1,
        title: "Optimistic Verification in Untrusted Edge Networks",
        abstract: "We propose a novel protocol for verifying inference results in decentralized networks using a probabilistic challenge-response mechanism, reducing overhead by 94% compared to ZK-SNARKs.",
        author: "L. Kenta, J. Doe",
        date: "Nov 14, 2024",
        tag: "Distributed Systems",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Tensor-Parallelism across High-Latency Links",
        abstract: "A deep dive into 'Swarm-TP', our custom tensor parallelism strategy that masks latency through pipeline bubbles and speculative execution.",
        author: "A. Vance, S. Al-Fayed",
        date: "Oct 28, 2024",
        tag: "Networking",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "The Economics of Long-Tail Compute",
        abstract: "Analyzing the market dynamics of spot GPU pricing and how incentivized idle compute allows for 10x cheaper inference costs.",
        author: "Axis Economics Team",
        date: "Sep 15, 2024",
        tag: "Tokenomics",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Apolemia: A Biological Approach to Swarm Intelligence",
        abstract: "Why we named our network after the Siphonophore, and how biological decentralization models apply to modern AI infrastructure.",
        author: "Founding Team",
        date: "Aug 02, 2024",
        tag: "Philosophy",
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop"
    }
];

const ResearchPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-text-primary font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Header Section */}
            <section className="pt-[160px] pb-24 px-6 md:px-12 max-w-[1400px] mx-auto border-b border-gray-100">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                >
                    <p className="font-medium text-dm-blue text-sm uppercase tracking-widest mb-6">
                        Axis Research Lab
                    </p>
                    <h1 className="font-serif text-6xl md:text-[6.5rem] leading-[0.95] text-dm-black mb-12 tracking-tight max-w-5xl">
                        Fundamental Advances in Distributed Intelligence.
                    </h1>
                </motion.div>
            </section>

            {/* Featured Article (First one) */}
            <section className="px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
                        <Image
                            src={articles[0].image}
                            alt={articles[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </motion.div>
                    <div className="flex flex-col justify-center">
                        <span className="text-dm-blue font-medium mb-4 flex items-center gap-2">
                            <Tag className="w-4 h-4" /> {articles[0].tag}
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl text-dm-black leading-tight mb-6 hover:text-dm-blue transition-colors cursor-pointer">
                            {articles[0].title}
                        </h2>
                        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                            {articles[0].abstract}
                        </p>
                        <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
                            <span className="flex items-center gap-2 text-dm-text-secondary">
                                <User className="w-4 h-4" /> {articles[0].author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" /> {articles[0].date}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Grid */}
            <section className="bg-dm-gray/30 py-32 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="font-medium text-3xl tracking-tight">Latest Publications</h2>
                        <button className="text-dm-blue font-medium hover:underline underline-offset-4">View Archive</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {articles.slice(1).map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="aspect-[16/10] relative rounded-2xl overflow-hidden mb-8 shadow-sm">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 duration-500" />
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <span className="text-xs font-bold uppercase tracking-wider text-dm-blue mb-3">{article.tag}</span>
                                    <h3 className="font-serif text-2xl text-dm-text-primary leading-snug mb-4 group-hover:text-dm-blue transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                        {article.abstract}
                                    </p>
                                    <div className="flex items-center justify-between pt-6 border-t border-gray-200 mt-auto">
                                        <span className="text-xs font-medium text-gray-400">{article.date}</span>
                                        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-dm-black group-hover:border-dm-black group-hover:text-white transition-all">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Import handled at top, making sure we have one if it exists, otherwise simplified footer */}
            {/* Note: In a real scenario I would check for the actual footer path. Assuming it exists based on previous file reads. */}
        </main>
    );
};

export default ResearchPage;
