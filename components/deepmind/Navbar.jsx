'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X, Code2, Sparkles, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
    { name: 'Research', href: '/research' },
    { name: 'Apolemia', href: '/apolemia' },
    { name: 'KnoLink', href: '/knolink' },
    { name: 'About', href: '/about' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            const previous = scrollY.getPrevious();
            if (latest > previous && latest > 150) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        });
    }, [scrollY]);

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: -100 },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-[100] h-[64px] bg-white/95 backdrop-blur-sm border-b border-gray-100 flex items-center"
            >
                <div className="w-full px-6 flex justify-between items-center">
                    {/* Left Section: Menu & Logo */}
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Menu"
                        >
                            <Menu className="w-5 h-5 text-dm-black" />
                        </button>

                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="text-[22px] font-medium tracking-tight text-dm-black">
                                Altair Axis
                            </span>
                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-dm-blue transition-colors" />
                        </Link>
                    </div>

                    {/* Right Section: CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link href="/apolemia" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-dm-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
                            Join the Network
                        </Link>
                    </div>
                    {/* Mobile Only CTA Icon - Hidden */}
                    <div className="md:hidden">
                        {/* Icon removed */}
                    </div>
                </div>
            </motion.nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-dm-white z-[90] flex flex-col pt-[80px] px-6 md:px-20"
                    >
                        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 h-full pb-12">
                            <div className="flex flex-col space-y-6">
                                {/* Menu Header inside overlay */}
                                <div className="absolute top-4 left-6">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl md:text-5xl font-medium text-dm-black hover:text-dm-blue transition-colors block py-2"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="hidden md:block">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-10 bg-dm-gray rounded-[32px] h-full flex items-end relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 p-8">
                                        <Sparkles className="w-12 h-12 text-dm-blue opacity-50" />
                                    </div>
                                    <div className="relative z-10">
                                        <h3 className="text-3xl font-medium mb-4">KnoLink</h3>
                                        <p className="text-lg text-gray-600 mb-8 max-w-sm">
                                            The cognitive interface for the new web. Connect knowledge, don't just search for it.
                                        </p>
                                        <Link href="/knolink" className="inline-block px-6 py-3 bg-dm-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
                                            Meet KnoLink
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
