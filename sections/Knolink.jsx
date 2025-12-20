'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Knolink = () => {
    const [latency, setLatency] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(Math.floor(Math.random() * (15 - 10 + 1) + 10));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${styles.yPaddings} sm:px-16 px-6 bg-off-white relative overflow-hidden`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col gap-10 relative z-10`}
            >
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10">
                    <motion.p variants={textVariant(1.1)} className="font-mono text-altair-violet text-[14px] uppercase tracking-[0.2em] mb-4 font-bold">
                        Applied Latency Research
                    </motion.p>
                    <motion.h2 variants={textVariant(1.2)} className="font-serif font-bold text-[48px] md:text-[72px] text-carbon mb-6 tracking-tight">
                        Knolink: The Invisible Interface.
                    </motion.h2>
                    <motion.p variants={textVariant(1.3)} className="font-sans text-slate text-[20px] leading-[1.6] max-w-[800px]">
                        A real-time cognitive overlay that augments human conversation. Running on the Axis edge network, Knolink perceives audio and visual context to provide instant, sovereign intelligence.
                    </motion.p>
                </div>

                {/* The "Ghost Layer" Visual */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.5, 1)}
                    className="relative w-full h-[500px] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl border border-carbon/5 group"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}
                >
                    {/* Overlay Gradient simulating desktop wallpaper dimming */}
                    <div className="absolute inset-0 bg-deep-obsidian/20" />

                    {/* The Glass Layer */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] glass-panel rounded-xl flex flex-col p-8 gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl border border-white/40">
                        {/* Floating Suggestions */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-mono text-[10px] text-slate/60 uppercase tracking-wider">Live Transcription</span>
                            </div>
                            <p className="font-serif text-[24px] text-carbon leading-tight italic">
                                "The user is asking about scalability constraints. Suggest referencing <span className="text-altair-violet underline decoration-1 underline-offset-4">node distribution topology</span>."
                            </p>
                            <div className="mt-4 p-4 bg-white/50 rounded-lg border border-carbon/5">
                                <span className="font-mono text-[12px] text-slate block mb-2 font-bold">REBUTTAL GENERATED</span>
                                <p className="font-sans text-[14px] text-carbon">
                                    "Our protocol ensures zero-redundancy verification, effectively removing the bottleneck found in traditional centralized clusters."
                                </p>
                            </div>
                        </motion.div>

                        {/* Latency Indicator */}
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 bg-deep-obsidian/90 rounded-full border border-white/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-pulse" />
                            <span className="font-mono text-[10px] text-white/80">
                                Inference: {latency}ms | Node [ZA-JNB-04]
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Triptych */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    {[
                        {
                            title: 'Ambient Perception',
                            subtitle: '(Formerly: Hidden Overlay)',
                            desc: 'A non-intrusive, privacy-first layer that ingests multimodal inputs—voice audio and on-screen content (OCR)—simultaneously.',
                        },
                        {
                            title: 'Contextual Reasoning',
                            subtitle: '(Formerly: Real-time Prompts)',
                            desc: 'Knolink doesn\'t just transcribe; it anticipates. It projects suggestions, factual rebuttals, and talk tracks onto your screen the moment they are needed.',
                        },
                        {
                            title: 'Enterprise Recall',
                            subtitle: '(Formerly: CRM/Knowledge Base)',
                            desc: 'Connect your entire organizational memory. Knolink retrieves product specifications and historical context instantly.',
                        }
                    ].map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            variants={fadeIn('up', 'tween', 0.5 + (index * 0.2), 1)}
                            className="flex flex-col gap-4 p-6 hover:bg-white/50 rounded-lg transition-colors border border-transparent hover:border-carbon/5"
                        >
                            <span className="font-mono text-[12px] text-altair-violet uppercase tracking-wider font-bold">0{index + 1}</span>
                            <h3 className="font-serif font-bold text-[24px] text-carbon">{feature.title}</h3>
                            <p className="font-sans text-slate text-[16px] leading-[1.6]">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div variants={fadeIn('up', 'tween', 1, 1)} className="flex justify-center mt-8">
                    <Link href="/knolink" className="group relative px-8 py-4 bg-transparent border border-carbon text-carbon overflow-hidden rounded-full transition-all hover:bg-carbon hover:text-off-white inline-block">
                        <span className="relative z-10 font-mono text-[14px] font-bold uppercase tracking-wider flex items-center gap-2">
                            Explore the Platform <span>→</span>
                        </span>
                    </Link>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Knolink;
