'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Infrastructure = () => (
    <section className={`${styles.yPaddings} sm:px-16 px-6 bg-deep-obsidian text-off-white relative overflow-hidden`}>
        {/* Grid Background */}
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-deep-obsidian to-transparent z-10" />

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col relative z-20`}
        >
            <div className="mb-20">
                <motion.h2 variants={textVariant(1.1)} className="font-serif font-bold text-[48px] md:text-[80px] text-off-white mb-6 leading-none">
                    The Global <br /> <span className="text-slate opacity-50">Compute Layer.</span>
                </motion.h2>
                <motion.p variants={textVariant(1.3)} className="font-mono text-altair-violet text-[16px] tracking-wider uppercase border-l-2 border-altair-violet pl-4">
                    A permissionless protocol for high-performance GPU orchestration.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: '01. Infinite Elasticity',
                        desc: 'Access a global pool of GPUs on demand. From H100 clusters to consumer-grade edge devices, our protocol routes workloads dynamically for maximum efficiency.',
                    },
                    {
                        title: '02. Verifiable Training',
                        desc: 'Trustless verification of computational work. Our consensus mechanism ensures that every FLOP contributes directly to model advancement.',
                    },
                    {
                        title: '03. Latency-Aware Routing',
                        desc: 'Intelligence at the edge. Our topology maps the physical distance of nodes, ensuring inference happens where the data lives.',
                    },
                ].map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        variants={fadeIn('up', 'spring', index * 0.5, 1)}
                        className="group relative flex flex-col gap-6 p-8 border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute -top-[100px] -right-[100px] w-[200px] h-[200px] bg-altair-violet/20 blur-[80px] group-hover:bg-electric-blue/30 transition-colors duration-500 opacity-0 group-hover:opacity-100" />

                        <h3 className="font-mono font-bold text-[24px] text-off-white mb-2 relative z-10 group-hover:translate-x-2 transition-transform">{feature.title}</h3>
                        <p className="font-sans text-slate text-[16px] leading-[1.6] relative z-10 group-hover:text-off-white transition-colors">
                            {feature.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
);

export default Infrastructure;
