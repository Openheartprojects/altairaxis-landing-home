'use client';

import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden">
            {/* Abstract Background Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-100 to-purple-100 rounded-full blur-[100px] opacity-60 -z-10 animate-float" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-pink-100 to-transparent rounded-full blur-[80px] opacity-50 -z-10 animate-float-delayed" />

            <div className="max-w-[1400px] mx-auto px-6 w-full">
                <motion.h1
                    className="text-6xl md:text-[5.5rem] leading-[1.1] font-medium tracking-tight mb-8 max-w-4xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Solving the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-dm-blue to-purple-600">
                        grandest challenges.
                    </span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    We are a team of scientists, engineers, and ethicists working to build the next generation of AI systems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#latest" className="inline-flex items-center px-8 py-4 bg-dm-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                        Explore our work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
