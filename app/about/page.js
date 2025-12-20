'use client';

import { motion } from 'framer-motion';
import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto relative z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-sm uppercase tracking-widest text-dm-blue mb-8"
                    >
                        About Altair Axis
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-medium tracking-tight leading-[1] mb-12"
                    >
                        The Architecture <br />
                        <span className="text-gray-400">of Intelligence.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-3xl font-light text-gray-600 leading-relaxed max-w-4xl"
                    >
                        Altair Axis is a research lab focused on the two most critical vectors of the AI era: how we power intelligence, and how we use it.
                    </motion.p>
                </div>
            </section>

            {/* Core Narrative */}
            <section className="py-24 px-6 border-t border-gray-100">
                <div className="max-w-[800px] mx-auto">
                    <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-12">
                        We believe that the current trajectory of artificial intelligence is constrained by a fundamental irony: while the software is becoming more fluid and accessible, the hardware and the knowledge it produces are becoming more centralized and opaque.
                    </p>
                    <p className="text-xl md:text-2xl leading-relaxed text-dm-black font-medium">
                        Our mission is to decouple intelligence from the data center and return it to the network.
                    </p>
                </div>
            </section>

            {/* The Dual Mandate */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-[1200px] mx-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-12 block border-b border-gray-200 pb-4">The Lab’s Dual Mandate</span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-serif mb-6">Infrastructure</h3>
                            <div className="text-sm font-mono text-dm-blue mb-4">APOLEMIA LABS</div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Building the distributed compute protocol that allows the world’s GPU capacity to act as a single, unified machine. We create a closed-loop system where infrastructure is no longer a bottleneck but a fluid resource.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-serif mb-6">Application</h3>
                            <div className="text-sm font-mono text-dm-teal mb-4">KNOLINK</div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Developing the cognitive interface that synthesizes that raw power into actionable, interconnected knowledge. We don't just retrieve data; we find the hidden relationships between ideas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-24 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-16 block border-b border-gray-200 pb-4">Our Principles</span>

                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3 text-6xl font-serif text-gray-100">01</div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-medium mb-4">Decentralization as a Performance Metric</h3>
                                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                    We don’t advocate for decentralization for ideological reasons alone. We do it because the largest problems in AI—scale, cost, and resilience—cannot be solved by a single building or a single company. The future of compute is a fabric, not a fortress.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3 text-6xl font-serif text-gray-100">02</div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-medium mb-4">Synthesis over Retrieval</h3>
                                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                    The goal of AI shouldn't be to give us more "results." It should be to give us more "understanding." We build systems that focus on the relationship between ideas, helping humanity navigate an increasingly complex information landscape.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3 text-6xl font-serif text-gray-100">03</div>
                            <div className="md:col-span-9">
                                <h3 className="text-2xl font-medium mb-4">Intellectual Honesty</h3>
                                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                    We are a research lab first. We prioritize rigorous benchmarking, transparent protocols, and peer-reviewed progress. We do not ship hype; we ship architecture.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Origin Story */}
            <section className="py-24 px-6 bg-dm-black text-white">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-4xl font-serif mb-8">The Origin of the Axis</h2>
                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Altair Axis was founded by a collective of engineers and researchers who saw a gap in the market: the "compute-poor" were being priced out of the frontier, and the "data-rich" were drowning in unorganized information.
                    </p>
                    <p className="text-lg text-gray-400 mb-12 leading-relaxed">
                        We built the Axis to be the center point where these two problems meet. By using the Apolemia network to power KnoLink, we’ve created a model for a self-sustaining intelligence ecosystem—one that is faster, cheaper, and more insightful than centralized alternatives.
                    </p>

                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 inline-block">
                        <p className="font-serif text-2xl italic text-white mb-4">
                            "The history of progress is the history of better tools for thinking. At Altair Axis, we are building the most powerful toolset yet."
                        </p>
                        <span className="font-mono text-xs uppercase tracking-widest text-dm-teal">— The Altair Axis Collective</span>
                    </div>
                </div>
            </section>

            {/* Timeline / Roadmap Placeholder */}
            <section className="py-32 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <span className="font-mono text-xs uppercase tracking-widest text-dm-blue mb-12 block">Research Roadmap</span>
                    <h2 className="text-5xl font-medium tracking-tight mb-16">The Path to 2026</h2>

                    <div className="relative border-l border-gray-200 ml-4 space-y-16 pl-12 pb-12">
                        <div className="relative">
                            <div className="absolute -left-[54px] w-3 h-3 bg-dm-black rounded-full ring-4 ring-white" />
                            <div className="font-mono text-sm text-gray-400 mb-2">Q4 2025</div>
                            <h3 className="text-xl font-medium mb-2">The Genesis Block</h3>
                            <p className="text-gray-600">Apolemia Network mainnet launch with 10k+ verified nodes.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[54px] w-3 h-3 bg-dm-blue rounded-full ring-4 ring-white animate-pulse" />
                            <div className="font-mono text-sm text-dm-blue mb-2">CURRENT</div>
                            <h3 className="text-xl font-medium mb-2">KnoLink Beta</h3>
                            <p className="text-gray-600">Cognitive synthesis engine deployed to select enterprise partners.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[54px] w-3 h-3 bg-gray-200 rounded-full ring-4 ring-white" />
                            <div className="font-mono text-sm text-gray-400 mb-2">Q2 2026</div>
                            <h3 className="text-xl font-medium mb-2">The Axis Protocol</h3>
                            <p className="text-gray-600">Full integration of inference and retrieval layers. The closed loop.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
