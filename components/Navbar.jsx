'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative z-50`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 items-center`}>
      <Link href="/">
        <h2 className="font-bold text-[24px] leading-[30px] text-carbon tracking-tighter cursor-pointer">
          Altair Axis
        </h2>
      </Link>
      <div className="flex gap-8 items-center max-md:hidden">
        {[
          { name: 'Research', link: '/research' },
          { name: 'Infrastructure', link: '/infrastructure' },
          { name: 'Company', link: '#company' },
        ].map((item) => (
          <Link key={item.name} href={item.link} className="text-slate hover:text-carbon transition-colors text-[14px] font-medium">
            {item.name}
          </Link>
        ))}
        <button type="button" className="bg-carbon text-off-white px-6 py-2 rounded-full text-[14px] font-medium hover:bg-opacity-90 transition-opacity">
          Access Compute
        </button>
      </div>
      <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain md:hidden cursor-pointer" />
    </div>
  </motion.nav>
);

export default Navbar;
