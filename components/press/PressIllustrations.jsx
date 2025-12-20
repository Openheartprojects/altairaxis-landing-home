'use client';

import { motion } from 'framer-motion';

export const LiveSharding = () => {
    return (
        <div className="w-full h-full bg-[#0a0a0a] rounded-xl border border-gray-800 relative overflow-hidden flex flex-col items-center justify-center p-8">
            <div className="absolute top-4 left-6 text-xs font-mono text-gray-500 uppercase tracking-widest z-10">
                Live Model Sharding
            </div>

            <div className="w-full max-w-lg relative h-64">
                {/* Map Points */}
                {[
                    { top: '20%', left: '20%' },
                    { top: '60%', left: '30%' },
                    { top: '30%', left: '70%' },
                    { top: '70%', left: '80%' },
                    { top: '50%', left: '50%' }, // Central
                ].map((pos, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-gray-700 rounded-full"
                        style={{ ...pos }}
                    >
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-mono whitespace-nowrap">Node_{String.fromCharCode(65 + i)}</div>
                    </motion.div>
                ))}

                {/* Central Block Splitting */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0">
                    {[0, 1, 2, 3, 4].map((i) => {
                        const destinations = [
                            { x: '-150px', y: '-80px' }, // Node A (approx)
                            { x: '-100px', y: '30px' },  // Node B
                            { x: '100px', y: '-50px' },  // Node C
                            { x: '150px', y: '60px' },   // Node D
                            { x: '0px', y: '0px' },      // Node E (stays center)
                        ];

                        return (
                            <motion.div
                                key={i}
                                className="absolute w-12 h-12 bg-dm-blue/20 border border-dm-blue rounded flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                initial={{ x: '0px', y: '0px', opacity: 0, scale: 0.5 }}
                                animate={{
                                    x: ['0px', '0px', destinations[i].x],
                                    y: ['0px', '0px', destinations[i].y],
                                    opacity: [0, 1, 1],
                                    scale: [0.5, 1, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    times: [0, 0.2, 1],
                                    repeat: Infinity,
                                    repeatDelay: 2
                                }}
                                style={{
                                    marginTop: '-24px',
                                    marginLeft: '-24px'
                                }}
                            >
                                <span className="text-[10px] text-dm-blue font-mono font-bold">L-{i * 8}</span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <div className="mt-8">
                <TerminalSnippet />
            </div>
        </div>
    );
};

export const LatencyGraph = () => {
    return (
        <div className="w-full h-full bg-[#fcfcfc] rounded-xl border border-gray-200 relative overflow-hidden flex flex-col p-8">
            <div className="mb-8 flex justify-between items-center">
                <div className="text-sm font-bold text-dm-black">Inference Stability</div>
                <div className="flex gap-4 text-xs font-mono">
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Apolemia</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-400" /> P2P Standard</div>
                </div>
            </div>

            <div className="flex-grow relative border-l border-b border-gray-200">
                {/* Grid Lines */}
                {[0.2, 0.4, 0.6, 0.8].map(y => (
                    <div key={y} className="absolute w-full h-[1px] bg-gray-100" style={{ top: `${y * 100}%` }} />
                ))}

                {/* Red Line (Jagged) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M0,80 Q20,70 40,90 T80,40 T120,95 T160,50 T200,80 T240,30 T280,85 T320,40 T360,90 T400,60 T440,85 T480,50 T520,80 T560,40 T600,85 T640,50 T680,80 T720,40"
                        fill="none"
                        stroke="#f87171"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    />
                </svg>

                {/* Green Line (Flat/Stable) */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M0,50 L720,50"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                    {/* Pulse effect on green line */}
                    <motion.circle
                        cx="0" cy="50" r="4" fill="#10b981"
                        animate={{ cx: [0, 720] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>
            <div className="mt-4 text-xs text-gray-400 text-center font-mono uppercase tracking-widest">Time (ms) &rarr; 24h Window</div>
        </div>
    );
};

export const TerminalSnippet = () => {
    return (
        <div className="w-full font-mono text-xs bg-black rounded-lg p-4 text-gray-300 border border-gray-800 shadow-2xl relative overflow-hidden">
            <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="space-y-1">
                <p className="flex gap-2">
                    <span className="text-emerald-500">$</span>
                    <span>apolemia-cli run gemma-7b --nodes 5</span>
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-gray-500">{">"} Sharding layers 1-12 to Node_Alpha...</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <p className="text-gray-500">{">"} Sharding layers 13-24 to Node_Beta...</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9 }}
                >
                    <p className="text-blue-400">{">"} Grid parity verified. Starting inference...</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                >
                    <p className="text-emerald-400 mt-2">
                        {">"} "The capital of France is Paris." (32 tokens/sec)
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 H-4 bg-emerald-400 ml-1"
                        >_</motion.span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export const GenericChip = () => {
    return (
        <div className="w-full h-full bg-[#111] rounded-xl border border-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="w-32 h-32 bg-gray-900 border border-gray-700 rounded-lg relative flex items-center justify-center">
                <div className="text-gray-600 font-mono text-xs text-center p-2">SECURE ENCLAVE</div>

                {/* Shield animation */}
                <motion.div
                    className="absolute inset-0 border-2 border-emerald-500/50 rounded-lg box-content -m-1"
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </div>
    )
}
