'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://x.com/Apolemia_labs' },
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@Altairaxis' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/108613073' },
];

const footerLinks = [
    {
        title: "Research",
        links: [
            { name: "Overview", href: "/research" },
            { name: "Apolemia Network", href: "/apolemia" },
            { name: "KnoLink Engine", href: "/knolink" },
            { name: "Publications", href: "/research" },
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Contact", href: "#" },
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/legal/privacy" },
            { name: "Terms of Service", href: "/legal/terms" },
            { name: "Code of Conduct", href: "/legal/conduct" },
        ]
    },
];

const Footer = () => {
    return (
        <footer className="relative bg-[#050505] text-white pt-16 pb-8 overflow-hidden selection:bg-dm-teal selection:text-white font-sans">
            {/* Ambient Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] bg-dm-blue/10 rounded-full blur-[120px] opacity-40 animate-pulse-glow" />
                <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-dm-teal/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

                    {/* Branding Section */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-[15vw] lg:text-[8rem] font-medium leading-[0.8] tracking-tighter mb-8"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-gray-500">
                                    Altair.
                                </span>
                                <br />
                                <span className="text-gray-800">Axis</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-xl text-gray-400 max-w-md leading-relaxed"
                            >
                                Building the cognitive infrastructure for the decentralized web.
                                Intelligence, unbound.
                            </motion.p>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
                        {footerLinks.map((section, idx) => (
                            <div key={section.title}>
                                <motion.h4
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + (idx * 0.1) }}
                                    className="font-medium text-lg mb-8 text-white"
                                >
                                    {section.title}
                                </motion.h4>
                                <ul className="space-y-6">
                                    {section.links.map((link, linkIdx) => (
                                        <motion.li
                                            key={link.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + (idx * 0.1) + (linkIdx * 0.05) }}
                                        >
                                            <Link href={link.href} className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300">
                                                <span className="text-lg">{link.name}</span>
                                                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-dm-teal" />
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-gray-900"
                >
                    <div className="flex gap-6 mb-6 md:mb-0">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-600 mb-2">
                            &copy; {new Date().getFullYear()} Altair Axis Research Lab.
                        </p>
                        <p className="text-xs text-gray-700 uppercase tracking-widest">
                            South Africa to the World
                        </p>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
