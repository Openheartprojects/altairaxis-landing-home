'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-16 relative bg-off-white`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-carbon/10 pb-12">
        <div>
          <h4 className="font-serif font-bold text-[32px] text-carbon mb-2">Join the Lab</h4>
          <p className="font-sans text-[16px] text-slate max-w-md mb-6">
            We are looking for researchers, engineers, and builders to help us map the future of compute.
          </p>
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-carbon rounded-[32px] gap-[12px] hover:bg-opacity-90 transition-opacity">
            <span className="font-bold text-[16px] text-off-white">Careers</span>
          </button>
        </div>
        <div className="flex gap-16 flex-wrap">
          <div className="flex flex-col gap-4">
            <h5 className="font-serif font-bold text-[18px] text-carbon">Research</h5>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Index</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Papers</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Technical Reports</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-serif font-bold text-[18px] text-carbon">Product</h5>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">API</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Pricing</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Status</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-serif font-bold text-[18px] text-carbon">Company</h5>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Charter</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Blog</a>
            <a href="#" className="font-sans text-[14px] text-slate hover:text-carbon transition-colors">Contact</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/">
          <h2 className="font-bold text-[24px] text-carbon tracking-tighter cursor-pointer">
            Altair Axis
          </h2>
        </Link>
        <div className="flex flex-col md:items-end items-center">
          <p className="font-sans text-[14px] text-slate opacity-80">
            South Africa to the World
          </p>
          <p className="font-sans text-[12px] text-slate opacity-40">
            © 2025 Altair Axis Research Lab.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
