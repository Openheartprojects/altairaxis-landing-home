'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Open Heart Projects" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Open Heart</span>Projects pushes the boundaries of innovation.
        We invite you to join us on this journey of redefining industries through the fusion of Machine Learning and Blockchain.{' '}
        <span className="font-extrabold text-white">
        Together, we are creating a future where technology not only adapts to our needs but also anticipates them. Become a part of our transformative mission
        </span>{' '}
        today.{' '}
        <span className="font-extrabold text-white"></span> 🌟 Innovate with OpenHeart Projects: Shaping Tomorrow, Today 🌟{' '}
        <span className="font-extrabold text-white">explore</span> Our projects down below.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
