'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, FileText } from 'lucide-react';
import Image from 'next/image';

const articles = [
    {
        title: "Swarm-TP: Tensor Parallelism across High-Latency Links",
        category: "Infrastructure",
        date: "Dec 12, 2024",
        id: "swarm-tp",
        abstract: "Introducing a novel distributed training protocol that tolerates typical WAN latency, enabling global GPU clustering for large-scale model runs.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop"
    },
    {
        title: "Optimistic Verification in Untrusted Edge Networks",
        category: "Security",
        date: "Nov 30, 2024",
        id: "optimistic-verification",
        abstract: "A Proof-of-Execution mechanism that uses statistical sampling to verify compute integrity without repeating the entire workload.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "KnoLink: Cognitive Synthesis at the Edge",
        category: "Product",
        date: "Oct 24, 2024",
        id: "knolink-launch",
        abstract: "Architecting a local-first retrieval augmented generation system that operates with sub-200ms latency on consumer hardware.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
    },
    {
        title: "Latent-Aware Sharding for MoE Models",
        category: "Research",
        date: "Sep 15, 2024",
        id: "latent-sharding",
        abstract: "Dynamic routing of mixture-of-experts layers based on real-time network topology and node availability scores.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
    }
];

const ResearchFeed = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-dm-black text-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tighter mb-4">Latest Research</h2>
                        <p className="text-gray-400 text-lg max-w-xl">Deep dives into distributed systems, cryptography, and artificial intelligence.</p>
                    </motion.div>
                    <a href="/research" className="hidden md:flex items-center gap-2 text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors group">
                        [ View Archive ] <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* The Data Stream List */}
                <div className="flex flex-col gap-4">
                    {articles.map((article, index) => (
                        <motion.a
                            href={`/research/${article.id}`}
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative block"
                        >
                            {/* Glass Panel */}
                            <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">

                                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                                    {/* Date & Category */}
                                    <div className="w-full md:w-48 flex-shrink-0 flex md:flex-col justify-between md:justify-start gap-2">
                                        <span className="font-mono text-xs text-dm-blue uppercase tracking-widest">{article.category}</span>
                                        <span className="font-mono text-sm text-gray-500">{article.date}</span>
                                    </div>

                                    {/* Main Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-medium mb-3 group-hover:text-dm-blue transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto overflow-hidden transition-all duration-500 ease-in-out">
                                            {article.abstract}
                                        </p>
                                    </div>

                                    {/* Icon / Action */}
                                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Gradient Sweep */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchFeed;
