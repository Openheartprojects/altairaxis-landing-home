'use client';

import { motion } from 'framer-motion';
import { Bot, Building2, Zap, Microscope } from 'lucide-react';

const CaseCard = ({ title, description, badge, icon: Icon }) => (
    <div className="p-8 rounded-[24px] bg-white border border-gray-100 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
        <div className="absolute top-0 right-0 bg-dm-black/[0.03] w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 pointer-events-none group-hover:bg-dm-blue/[0.05] transition-colors" />

        <div className="mb-6 flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-dm-gray flex items-center justify-center text-dm-black group-hover:bg-dm-black group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            {badge && (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-gray-100 text-gray-500">
                    {badge}
                </span>
            )}
        </div>

        <h3 className="text-xl font-medium text-dm-black mb-3">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
            {description}
        </p>
    </div>
);

const UseCases = () => {
    return (
        <section className="py-20 md:py-28 px-6 bg-gray-50/50">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-medium text-dm-black mb-4">
                        Built for scale, verified for speed.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CaseCard
                        title="AI Product Teams"
                        description="Deploy inference globally without managing regional infrastructure. Scale on demand while maintaining predictable performance."
                        badge="Scale"
                        icon={Bot}
                    />

                    <CaseCard
                        title="Enterprises"
                        description="Maintain data sovereignty and operational control while running high‑performance AI workloads across regions."
                        badge="Control"
                        icon={Building2}
                    />

                    <CaseCard
                        title="Latency‑Sensitive Apps"
                        description="Power real‑time use cases such as conversational AI, computer vision, gaming, and AR/VR."
                        badge="Speed"
                        icon={Zap}
                    />

                    <CaseCard
                        title="Research Labs"
                        description="Access distributed GPU capacity without long procurement cycles or vendor lock‑in."
                        badge="Compute"
                        icon={Microscope}
                    />
                </div>
            </div>
        </section>
    );
};

export default UseCases;
