'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const Mission = () => (
    <section className={`${styles.yPaddings} sm:px-16 px-6 bg-off-white relative overflow-hidden`}>
        {/* Subtle Background Mark */}
        <div className="absolute top-10 left-10 text-[200px] font-serif text-carbon opacity-[0.02] pointer-events-none select-none leading-none">
            &
        </div>

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col items-center text-center relative z-10`}
        >
            <motion.div variants={textVariant(1.0)} className="mb-4">
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-carbon/20 to-carbon mx-auto" />
            </motion.div>

            <motion.h2 variants={textVariant(1.1)} className="font-serif font-bold text-[48px] md:text-[72px] text-carbon mb-10 tracking-tight max-w-[900px]">
                Scaling Intelligence, <span className="italic text-slate">Distributed.</span>
            </motion.h2>

            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className="max-w-[800px] font-sans text-carbon text-[22px] leading-[1.6] opacity-80">
                <p className="mb-10 text-pretty">
                    As AI models approach the threshold of general reasoning, the demand for compute is outpacing the physical limits of centralized data centers. <span className="font-semibold text-carbon">We believe the future of intelligence is not siloed, but sovereign.</span>
                </p>
                <div className="flex justify-center gap-16 border-t border-carbon/10 pt-10">
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[32px] font-bold text-carbon">143<span className="text-altair-violet text-[20px]">+</span></span>
                        <span className="font-sans text-[12px] text-slate uppercase tracking-wider">Countries</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[32px] font-bold text-carbon">12<span className="text-altair-violet text-[20px]">EFlops</span></span>
                        <span className="font-sans text-[12px] text-slate uppercase tracking-wider">Compute Power</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-[32px] font-bold text-carbon">0<span className="text-altair-violet text-[20px]">.04s</span></span>
                        <span className="font-sans text-[12px] text-slate uppercase tracking-wider">Avg Latency</span>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    </section>
);

export default Mission;
