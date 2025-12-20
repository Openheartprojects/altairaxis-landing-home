'use client';

import { motion } from 'framer-motion';

export const WaterfallDiagram = () => {
    return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-gray-800 p-8 flex flex-col justify-center items-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,100,255,0.1),transparent)]" />

            {/* Legend/Labels */}
            <div className="absolute top-4 left-6 text-xs font-mono text-gray-500 uppercase tracking-widest z-10">
                Network Latency Flow
            </div>

            <div className="flex gap-4 items-center w-full max-w-lg z-10 relative">
                {/* Traditional - Stalled */}
                <div className="flex-1 flex flex-col gap-2 relative">
                    <span className="text-xs text-red-500/80 font-mono text-center">Traditional TP</span>
                    <div className="h-40 w-full border border-red-900/30 bg-red-900/5 rounded-lg relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                            animate={{ top: ["0%", "40%", "40%", "40%", "100%"] }}
                            transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.7, 0.9, 1] }}
                        />
                        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-red-800/50 w-full flex items-center justify-center">
                            <span className="text-[10px] text-red-500 bg-black/50 px-2 uppercase">Stall</span>
                        </div>
                    </div>
                </div>

                {/* Swarm-TP - Flowing */}
                <div className="flex-1 flex flex-col gap-2">
                    <span className="text-xs text-emerald-500/80 font-mono text-center">Swarm-TP</span>
                    <div className="h-40 w-full border border-emerald-900/30 bg-emerald-900/5 rounded-lg relative overflow-hidden flex gap-1 px-1">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex-1 h-full relative overflow-hidden">
                                <motion.div
                                    className="absolute h-[30%] w-full bg-emerald-500/20 rounded-sm"
                                    initial={{ top: "-30%" }}
                                    animate={{ top: "130%" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2
                                    }}
                                />
                                <motion.div
                                    className="absolute h-[2px] w-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                                    initial={{ top: "-30%" }}
                                    animate={{ top: "130%" }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: i * 0.2
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-6 font-mono max-w-xs">
                Swarm-TP "streams" data around high-latency events.
            </p>
        </div>
    );
};

export const RadarScan = () => {
    return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-gray-800 flex justify-center items-center relative overflow-hidden">
            <div className="absolute top-4 left-6 text-xs font-mono text-gray-500 uppercase tracking-widest z-10">
                Optimistic Verification
            </div>

            {/* Grid */}
            <div className="absolute inset-0"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radar Circle */}
            <div className="w-64 h-64 rounded-full border border-gray-800 relative flex items-center justify-center">
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-50" />
                <div className="absolute inset-0 border border-gray-800 rounded-full scale-[0.75]" />

                {/* Scanning line */}
                <motion.div
                    className="absolute w-[50%] h-[50%] bg-gradient-to-l from-dm-blue/20 to-transparent top-0 right-0 origin-bottom-left border-b border-dm-blue/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {/* Nodes */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                        style={{
                            top: `${30 + Math.random() * 40}%`,
                            left: `${30 + Math.random() * 40}%`,
                        }}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                    />
                ))}

                {/* Malicious Node */}
                <motion.div
                    className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,1)]"
                    style={{ top: '25%', left: '65%' }}
                    initial={{ scale: 0 }}
                    animate={{
                        scale: [0, 1.5, 1],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        times: [0, 0.1, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                />
                {/* Connection Line turning red */}
                <motion.div
                    className="absolute top-1/2 left-1/2 h-[1px] origin-left bg-red-500/50"
                    style={{
                        width: '0px',
                        transform: 'rotate(-45deg)' // Pointing approx to the red dot
                    }}
                    animate={{ width: ['0px', '45px', '45px', '0px'] }}
                    transition={{
                        duration: 4,
                        times: [0, 0.1, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                />
            </div>
            <div className="absolute bottom-6 right-6 flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-blue-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500" /> Verified
                </div>
                <div className="flex items-center gap-2 text-red-400">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Flagged
                </div>
            </div>
        </div>
    );
};

export const KnowledgeSidebar = () => {
    return (
        <div className="w-full h-full bg-[#f0f0f0] rounded-xl border border-gray-200 relative overflow-hidden flex flex-row">
            {/* Main Content Area (Abstract) */}
            <div className="flex-grow p-8 bg-white">
                <div className="space-y-4 opacity-30">
                    <div className="h-6 w-3/4 bg-black rounded-sm" />
                    <div className="h-4 w-full bg-gray-400 rounded-sm" />
                    <div className="h-4 w-full bg-gray-400 rounded-sm" />
                    <div className="h-4 w-2/3 bg-gray-400 rounded-sm" />
                </div>

                {/* Active Typing Line */}
                <div className="mt-8 flex gap-2 items-center">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="h-4 bg-dm-blue/20 rounded-sm"
                    />
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-[2px] h-5 bg-dm-blue"
                    />
                </div>
            </div>

            {/* Sidebar */}
            <motion.div
                className="w-1/3 bg-white border-l border-gray-200 p-4 flex flex-col gap-4 shadow-xl z-10"
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-[10px] font-bold text-dm-blue uppercase tracking-wider mb-2">Connected Ideas</div>

                {[1, 2, 3].map(i => (
                    <motion.div
                        key={i}
                        className="p-3 rounded-lg border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.2 }}
                    >
                        <div className="h-2 w-1/2 bg-gray-800 rounded-full mb-2 group-hover:bg-dm-blue transition-colors" />
                        <div className="h-1.5 w-full bg-gray-300 rounded-full mb-1" />
                        <div className="h-1.5 w-3/4 bg-gray-300 rounded-full" />
                    </motion.div>
                ))}
            </motion.div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-black/5" />
        </div>
    );
};

export const ExpertsExplosion = () => {
    return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-gray-800 relative overflow-hidden flex items-center justify-center perspective-1000">
            <div className="absolute top-4 left-6 text-xs font-mono text-gray-500 uppercase tracking-widest z-10">
                MoE Sharding Distribution
            </div>

            <div className="relative w-40 h-40 preserve-3d">
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {/* Central Core */}
                    <div className="absolute inset-0 bg-dm-blue/10 rounded-full blur-xl" />
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />

                    {/* Experts */}
                    {[...Array(8)].map((_, i) => {
                        const angle = (i / 8) * Math.PI * 2;
                        const x = Math.cos(angle) * 80;
                        const y = Math.sin(angle) * 80;

                        return (
                            <motion.div
                                key={i}
                                className="absolute w-12 h-12 border border-gray-600/50 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center rounded-lg shadow-lg"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    marginTop: -24,
                                    marginLeft: -24,
                                }}
                                animate={{
                                    transform: `translate3d(${x}px, ${y}px, ${Math.sin(i) * 40}px) rotate(${i * 45}deg)`,
                                }}
                                transition={{ duration: 2 }} // Initial spread could be animated
                            >
                                <span className="text-[8px] font-mono text-gray-400">E-{i + 1}</span>
                                <div className="absolute inset-0 border border-transparent hover:border-dm-blue transition-colors rounded-lg" />

                                {/* Connection Beam */}
                                <div className="absolute top-1/2 left-1/2 w-[80px] h-[1px] bg-gradient-to-l from-dm-blue/50 to-transparent origin-left -z-10"
                                    style={{ transform: `rotate(${angle + Math.PI}rad) translate(24px, 0)` }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};
