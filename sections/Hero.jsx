'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:px-16 px-6 bg-off-white min-h-[90vh] flex items-center relative overflow-hidden`}>

    {/* Background Atmosphere */}
    <div className="absolute top-0 right-0 w-[50%] h-[50%] gradient-constellation opacity-60 z-0 pointer-events-none" />

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-row max-lg:flex-col gap-10 items-center relative z-10`}
    >
      <div className="flex-1 flex flex-col items-start z-10 w-full">
        <motion.div variants={textVariant(1.0)} className="mb-2">
          <span className="font-mono text-altair-violet text-[14px] tracking-[0.2em] uppercase font-bold">Research Laboratory</span>
        </motion.div>

        <motion.h1 variants={textVariant(1.1)} className="font-serif font-bold text-[80px] md:text-[100px] leading-[0.95] text-carbon mb-8 tracking-tighter mix-blend-multiply">
          Compute for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-carbon to-slate">Intelligence.</span>
        </motion.h1>

        <motion.p variants={textVariant(1.2)} className="font-sans text-slate text-[20px] leading-[1.6] max-w-[500px] mb-10 font-light border-l border-slate/30 pl-6">
          Altair Axis is building the decentralized substrate that powers the next generation of artificial intelligence.
        </motion.p>

        <motion.div variants={textVariant(1.3)} className="flex gap-6 items-center">
          <button className="group relative px-8 py-3 bg-carbon text-off-white overflow-hidden rounded-full transition-all hover:scale-105">
            <span className="relative z-10 font-mono text-[14px] font-bold uppercase tracking-wider">Read the Research</span>
          </button>
          <button className="group font-mono text-[14px] font-bold uppercase tracking-wider text-carbon flex items-center gap-2 hover:gap-4 transition-all">
            View Documentation <span className="text-[18px]">→</span>
          </button>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1.2)}
        className="flex-1 relative w-full h-[600px] flex justify-center items-center"
      >
        {/* Abstract Constellation / Chip Metaphor */}
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Orbital Rings */}
          <div className="absolute w-[400px] h-[400px] border border-carbon/5 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
          <div className="absolute w-[300px] h-[300px] border border-altair-violet/20 rounded-full animate-float-delayed" />
          <div className="absolute w-[200px] h-[200px] border border-electric-blue/30 rounded-full animate-float" />

          {/* Central Core */}
          <div className="absolute w-[20px] h-[20px] bg-carbon rounded-sm rotate-45 animate-pulse-glow" />

          {/* Glass Cards Floating */}
          <div className="absolute top-[20%] right-[10%] w-[120px] h-[80px] glass-panel rounded-lg animate-float flex items-center justify-center">
            <span className="font-mono text-[10px] text-slate">H100 Cluster</span>
          </div>
          <div className="absolute bottom-[20%] left-[10%] w-[140px] h-[60px] glass-panel rounded-lg animate-float-delayed flex items-center justify-center">
            <span className="font-mono text-[10px] text-slate">Latency: 4ms</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
