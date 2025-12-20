'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { researchArticles } from '../../data/research';

const ResearchPage = () => {
    const featuredArticle = researchArticles[1]; // Using Optimistic Verification as featured
    const remainingArticles = researchArticles.filter(a => a.id !== featuredArticle.id);

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

            {/* Featured Article */}
            <section className="px-6 md:px-12 py-24 max-w-[1400px] mx-auto">
                <Link href={`/research/${featuredArticle.slug}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center group cursor-pointer">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3]"
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10" />
                            <Image
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <div className="flex flex-col justify-center">
                            <span className="text-dm-blue font-medium mb-4 flex items-center gap-2">
                                <Tag className="w-4 h-4" /> {featuredArticle.category}
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-dm-black leading-tight mb-6 group-hover:text-dm-blue transition-colors">
                                {featuredArticle.title}
                            </h2>
                            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                                {featuredArticle.abstract}
                            </p>
                            <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
                                <span className="flex items-center gap-2 text-dm-text-secondary">
                                    <User className="w-4 h-4" /> {featuredArticle.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {featuredArticle.date}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* Article Grid */}
            <section className="bg-dm-gray/30 py-32 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <h2 className="font-medium text-3xl tracking-tight">Latest Publications</h2>
                        <button className="text-dm-blue font-medium hover:underline underline-offset-4">View Archive</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {remainingArticles.map((article, index) => (
                            <Link href={`/research/${article.slug}`} key={article.id}>
                                <motion.div
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
                                        <span className="text-xs font-bold uppercase tracking-wider text-dm-blue mb-3">{article.category}</span>
                                        <h3 className="font-serif text-2xl text-dm-text-primary leading-snug mb-4 group-hover:text-dm-blue transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
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
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ResearchPage;
