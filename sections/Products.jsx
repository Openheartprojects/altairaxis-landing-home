'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Products = () => (
    <section className={`${styles.yPaddings} sm:px-16 px-6 bg-off-white relative overflow-hidden`}>
        <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] gradient-constellation opacity-40 mix-blend-multiply" />

        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col gap-32 relative z-10`}
        >
            {/* Product A */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-1 flex flex-col gap-6">
                    <div className="relative">
                        <h3 className="font-serif font-bold text-[60px] text-carbon leading-[0.9]">Axis <br /> Protocol</h3>
                        <div className="w-16 h-16 rounded-full border border-carbon/20 absolute -top-8 -left-8 -z-10" />
                    </div>

                    <p className="font-mono text-altair-violet text-[14px] uppercase tracking-wider font-bold">For Model Builders</p>
                    <p className="font-sans text-slate text-[20px] leading-[1.6] opacity-80">
                        Train larger models for a fraction of the cost. The Axis Protocol abstracts the complexity of distributed computing, giving you a single interface to a planetary supercomputer.
                    </p>

                    <a href="#" className="text-carbon font-mono text-[14px] border-b border-carbon pb-1 w-fit hover:border-altair-violet hover:text-altair-violet transition-colors">Explore Documentation</a>
                </motion.div>
                <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-1 w-full h-[400px] glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                    <div className="font-mono text-[12px] text-slate/40">[ Interface Simulation ]</div>
                    {/* Abstract UI Elements */}
                    <div className="absolute top-10 left-10 right-10 h-[1px] bg-carbon/10" />
                    <div className="absolute top-20 left-10 w-[40%] h-[1px] bg-carbon/10" />

                    <div className="w-[80%] h-[200px] border border-carbon/5 rounded-lg absolute bottom-[-20px] group-hover:translate-y-[-20px] transition-transform duration-700 bg-white/50 backdrop-blur-sm" />
                </motion.div>
            </div>

            {/* Product B */}
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="flex-1 flex flex-col gap-6 items-end text-right">
                    <div className="relative">
                        <h3 className="font-serif font-bold text-[60px] text-carbon leading-[0.9]">Cortex <br /> Inference</h3>
                        <div className="w-24 h-24 rounded-full border border-electric-blue/20 absolute -bottom-8 -right-8 -z-10" />
                    </div>
                    <p className="font-mono text-electric-blue text-[14px] uppercase tracking-wider font-bold">For Application Developers</p>
                    <p className="font-sans text-slate text-[20px] leading-[1.6] opacity-80">
                        Deploy AI agents that run anywhere. Our decentralized inference engine ensures your applications remain uncensorable, scalable, and always online.
                    </p>
                    <a href="#" className="text-carbon font-mono text-[14px] border-b border-carbon pb-1 w-fit hover:border-electric-blue hover:text-electric-blue transition-colors">Start Building</a>
                </motion.div>
                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-1 w-full h-[400px] dark-glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent" />
                    {/* Abstract Node Network */}
                    <div className="absolute inset-0 grid-lines opacity-10" />
                    <div className="w-3 h-3 bg-electric-blue rounded-full shadow-[0_0_20px_rgba(76,161,175,0.8)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            </div>

        </motion.div>
    </section>
);

export default Products;
