'use client';

import { motion } from 'framer-motion';
import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, Printer } from 'lucide-react';
import { getPressReleaseBySlug } from '../../../data/press';
import { LiveSharding, LatencyGraph, GenericChip } from '../../../components/press/PressIllustrations';

const PressDetailPage = ({ params }) => {
    const slug = params?.slug;
    const release = getPressReleaseBySlug(slug);

    if (!release) {
        return (
            <main className="min-h-screen bg-dm-white flex flex-col items-center justify-center">
                <Navbar />
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-dm-black mb-4">Report Not Found</h1>
                    <Link href="/press" className="text-dm-blue hover:underline">Return to Milestones</Link>
                </div>
            </main>
        );
    }

    const renderIllustration = () => {
        switch (release.illustrationId) {
            case 'live-sharding': return <LiveSharding />;
            case 'latency-graph': return <LatencyGraph />;
            default: return <GenericChip />;
        }
    };

    return (
        <main className="min-h-screen bg-dm-white text-dm-text-primary font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            <article className="pt-[140px] pb-24">
                <div className="max-w-[800px] mx-auto px-6">
                    <Link href="/press" className="inline-flex items-center gap-2 text-gray-400 hover:text-dm-blue mb-12 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" /> Back to Milestones
                    </Link>

                    <header className="mb-12">
                        <div className="flex items-center gap-3 text-sm font-bold text-dm-blue uppercase tracking-widest mb-4">
                            <span>{release.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            <span className="text-gray-500">{release.date}</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl text-dm-black leading-tight mb-8">
                            {release.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
                            {release.subtitle}
                        </p>
                    </header>

                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 shadow-2xl bg-gray-50 border border-gray-100">
                        {/* If it's a static image fallback:
                         <Image src={release.image} alt={release.title} width={1200} height={675} className="object-cover w-full h-full" />
                         But we want the animation: */}
                        <div className="w-full h-full">
                            {renderIllustration()}
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-12 text-sm text-gray-500">
                        <div className="flex gap-2">
                            Author: <span className="text-dm-black font-medium">Apolemia Engineering</span>
                        </div>
                        <div className="flex gap-4">
                            <button className="hover:text-dm-blue transition-colors"><Share2 className="w-5 h-5" /></button>
                            <button className="hover:text-dm-blue transition-colors"><Printer className="w-5 h-5" /></button>
                        </div>
                    </div>

                    <div
                        className="prose prose-lg prose-gray max-w-none font-serif text-lg md:text-xl text-gray-800 tracking-wide"
                        dangerouslySetInnerHTML={{ __html: release.content }}
                    />
                </div>
            </article>

            <Footer />
        </main>
    );
};

export default PressDetailPage;
