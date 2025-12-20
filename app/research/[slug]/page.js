'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

// Mock Data Database (in a real app, this would be a fetch)
const articlesDB = {
    "optimistic-verification": {
        title: "Optimistic Verification in Untrusted Edge Networks",
        subtitle: "A probabilistic approach to trustless compute.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        author: "L. Kenta, J. Doe",
        date: "Nov 14, 2024",
        tag: "Distributed Systems",
        content: `
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">The core challenge of decentralized inference is verifying that a node performed the computation correctly without re-running the entire computation. Traditional Zero-Knowledge Proofs (ZKPs) are often too computationally expensive for real-time inference. We propose "Optimistic Verification," a protocol inspired by optimistic rollups in Layer 2 blockchains.</p>
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Challenge-Response Mechanism</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">In our protocol, nodes submit results immediately. A lightweight "verifier" swarm randomly samples tokens from the output and checks them against a lower-fidelity model or a consensus of other nodes. If a discrepancy is found, a dispute resolution process is triggered, potentially slashing the stake of the malicious node.</p>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">This reduces the verification overhead by 94% while maintaining a security guarantee of 99.99% against rational adversaries.</p>
             <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Implications for Latency</h3>
             <p class="mb-6 text-lg leading-relaxed text-gray-600">By removing the need for immediate proofs, we can achieve inference speeds comparable to centralized clusters. This is the "Holy Grail" of decentralized AI: trustless execution at centralized speeds.</p>
        `
    },
    // Fallback for other slugs
    "default": {
        title: "Research Article Not Found",
        subtitle: "The requested article could not be located in our archives.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
        author: "System",
        date: "Today",
        tag: "System",
        content: "<p>We are constantly publishing new research. Please check back later.</p>"
    }
};

const ArticlePage = ({ params }) => {
    const slug = params?.slug; // Handle undefined params gracefully

    // Simple look up, in prod use getStaticPaths/Props or server component
    // For this demo, we'll map the first article and show a generic one for others to demonstrate layout
    const article = slug === 'optimistic-verification' ? articlesDB['optimistic-verification'] :
        slug === 'tensor-parallelism' ? { ...articlesDB['default'], title: "Tensor-Parallelism across High-Latency Links", content: "<p>Deep dive into Swarm-TP...</p>" } :
            articlesDB['default'];

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
                                    {article.tag}
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
                <div className="px-6 md:px-12 py-16 max-w-[800px] mx-auto">
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
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default ArticlePage;
