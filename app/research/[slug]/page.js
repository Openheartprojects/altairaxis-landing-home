'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { getArticleBySlug } from '../../../data/research';
import { WaterfallDiagram, RadarScan, KnowledgeSidebar, ExpertsExplosion } from '../../../components/research/Illustrations';

const ArticlePage = ({ params }) => {
    const slug = params?.slug;
    const article = getArticleBySlug(slug);

    if (!article) {
        return (
            <main className="min-h-screen bg-dm-white flex flex-col items-center justify-center">
                <Navbar />
                <h1 className="text-4xl font-serif text-dm-black mb-4">Article Not Found</h1>
                <Link href="/research" className="text-dm-blue hover:underline">Back to Research</Link>
            </main>
        );
    }

    const renderIllustration = () => {
        switch (article.illustrationId) {
            case 'waterfall': return <WaterfallDiagram />;
            case 'radar': return <RadarScan />;
            case 'sidebar': return <KnowledgeSidebar />;
            case 'experts': return <ExpertsExplosion />;
            default: return null;
        }
    };

    return (
        <main className="min-h-screen bg-dm-white text-dm-text-primary font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            <article>
                {/* Hero / Header */}
                <div className="relative h-[60vh] min-h-[500px] w-full mt-[64px]">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dm-white via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 max-w-[1000px] mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="/research" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                                <ArrowLeft className="w-5 h-5" /> Back to Research
                            </Link>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full bg-dm-blue text-white text-xs font-bold uppercase tracking-wider">
                                    {article.category}
                                </span>
                                <span className="text-white/80 text-sm font-medium flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {article.date}
                                </span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] mb-6">
                                {article.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
                                {article.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="px-6 md:px-12 py-16 max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center py-8 border-y border-gray-100 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                    <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100" alt="Author" fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="font-medium text-dm-black">{article.author}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest">Principal Researcher</p>
                                </div>
                            </div>
                            <button className="p-3 rounded-full hover:bg-gray-100 text-gray-600 transition-colors">
                                <Share2 className="w-5 h-5" />
                            </button>
                        </div>

                        <div
                            className="prose prose-lg prose-gray max-w-none font-serif text-lg md:text-xl text-gray-800"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Visual Illustration Section embedded in article */}
                        {article.illustrationId && (
                            <div className="my-16 h-[500px] w-full">
                                {renderIllustration()}
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Table of Contents / More info - Placeholder for now, or just empty space for editorial feel */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-32">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">In this article</p>
                            <ul className="space-y-4 text-sm text-gray-600 border-l border-gray-200 pl-4">
                                <li className="hover:text-dm-blue cursor-pointer transition-colors">Summary</li>
                                <li className="hover:text-dm-blue cursor-pointer transition-colors">Deep Dive</li>
                                <li className="hover:text-dm-blue cursor-pointer transition-colors">Methodology</li>
                                <li className="hover:text-dm-blue cursor-pointer transition-colors">Results</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default ArticlePage;
