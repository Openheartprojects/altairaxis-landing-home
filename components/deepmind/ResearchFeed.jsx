'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ResearchFeed = () => {
    const articles = [
        {
            title: "Swarm-TP: Tensor Parallelism across High-Latency Links",
            category: "Infrastructure",
            date: "Dec 12, 2024",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop"
        },
        {
            title: "Optimistic Verification in Untrusted Edge Networks",
            category: "Security",
            date: "Nov 30, 2024",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "KnoLink: Cognitive Synthesis at the Edge",
            category: "Product",
            date: "Oct 24, 2024",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-32 px-6 bg-dm-white border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-dm-black mb-4">Latest Research</h2>
                        <p className="text-gray-500 text-lg">Pushing the boundaries of decentralized intelligence.</p>
                    </motion.div>
                    <a href="/research" className="hidden md:flex items-center gap-2 text-dm-blue font-medium hover:gap-4 transition-all">
                        View all publications <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.a
                            href={`/research/optimistic-verification`} // Dynamic link
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group block"
                        >
                            <div className="aspect-[4/3] relative rounded-[2px] overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-mono px-3 py-1 uppercase tracking-wider">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-3 font-mono border-l-2 border-transparent group-hover:border-dm-blue pl-0 group-hover:pl-3 transition-all duration-300">
                                <span>{article.date}</span>
                            </div>
                            <h3 className="text-2xl font-medium text-dm-black leading-tight group-hover:text-dm-blue transition-colors max-w-sm">
                                {article.title}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchFeed;
