'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Card = ({ title, category, date, image, href = "#", size = 'normal' }) => {
    return (
        <motion.a
            href={href}
            className={`group relative block bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100 ${size === 'large' ? 'col-span-1 md:col-span-2 row-span-2' : ''
                }`}
            whileHover={{ y: -5 }}
        >
            <div className={`relative ${size === 'large' ? 'h-[400px]' : 'h-[240px]'} w-full overflow-hidden`}>
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out-flex"
                    />
                )}
                {!image && (
                    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200" />
                )}
            </div>

            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-medium text-dm-blue uppercase tracking-wider">{category}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-dm-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className={`font-medium mb-2 group-hover:text-dm-blue transition-colors ${size === 'large' ? 'text-3xl' : 'text-xl'}`}>
                    {title}
                </h3>
                <p className="text-gray-500 text-sm">{date}</p>
            </div>
        </motion.a>
    );
};

export default Card;
