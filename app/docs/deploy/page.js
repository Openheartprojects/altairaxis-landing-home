'use client';

import Navbar from '../../../components/deepmind/Navbar';
import Footer from '../../../components/deepmind/Footer';
import { motion } from 'framer-motion';
import { Terminal, Shield, Download, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Step = ({ number, title, children }) => (
    <div className="flex gap-6 relative pb-12 last:pb-0">
        <div className="flex-shrink-0 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-dm-black text-white flex items-center justify-center font-mono font-bold text-sm z-10 relative">
                {number}
            </div>
            <div className="w-[1px] h-full bg-gray-200 absolute top-10" />
        </div>
        <div className="pt-2 w-full">
            <h3 className="text-xl font-bold text-dm-black mb-4">{title}</h3>
            <div className="text-gray-600 leading-relaxed">
                {children}
            </div>
        </div>
    </div>
);

const CodeBlock = ({ code }) => (
    <div className="bg-[#111] rounded-xl p-4 font-mono text-sm text-gray-300 overflow-x-auto border border-white/10 shadow-lg my-4">
        <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <pre>{code}</pre>
    </div>
);

export default function DeployDocs() {
    const [os, setOs] = useState('linux'); // 'linux' | 'mac' | 'windows'

    return (
        <main className="min-h-screen bg-dm-white text-dm-black font-sans selection:bg-dm-blue selection:text-white">
            <Navbar />

            {/* Header */}
            <section className="pt-32 pb-16 px-6 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-mono uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            Worker Node Setup
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-dm-black">
                            Connect Your Compute.
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            To join the network, you must run the authenticated Altair Worker binary. It establishes a secure mTLS tunnel to the nearest coordinator region.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto">

                    {/* Security Notice */}
                    <div className="mb-16 p-6 bg-blue-50 border border-blue-100 rounded-2xl flex gap-4 items-start">
                        <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-blue-900 mb-2">Secure Isolation</h4>
                            <p className="text-blue-800/80 text-sm leading-relaxed">
                                The worker runs all inference jobs in ephemeral OCI containers (WASM/gVisor). No external code touches your host OS file system.
                            </p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-4">
                        <Step number="01" title="Download the Worker">
                            <p className="mb-4">Select your operating system to download the latest stable release of the Altair CLI and Worker daemon.</p>

                            {/* OS Switcher */}
                            <div className="flex gap-2 mb-6">
                                {['linux', 'mac', 'windows'].map((system) => (
                                    <button
                                        key={system}
                                        onClick={() => setOs(system)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${os === system
                                                ? 'bg-dm-black text-white shadow-md'
                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                            } capitalize`}
                                    >
                                        {system}
                                    </button>
                                ))}
                            </div>

                            {os === 'linux' && (
                                <CodeBlock code={`curl -sL https://altair.network/install.sh | bash`} />
                            )}
                            {os === 'mac' && (
                                <CodeBlock code={`brew install altair-network/tap/worker`} />
                            )}
                            {os === 'windows' && (
                                <CodeBlock code={`iwr https://altair.network/install.ps1 -useb | iex`} />
                            )}
                        </Step>

                        <Step number="02" title="Authenticate">
                            <p className="mb-4">Generate a Node Key from your console dashboard and link it to your worker instance.</p>
                            <Link href="https://apolemia-console.onrender.com/settings/keys" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline mb-4">
                                Get Node Key <ChevronRight className="w-4 h-4" />
                            </Link>
                            <CodeBlock code={`altair login --key "nk_live_..."`} />
                        </Step>

                        <Step number="03" title="Start the Daemon">
                            <p className="mb-4">Launch the worker. It will automatically benchmark your hardware and register with the network topology.</p>
                            <CodeBlock code={`altair worker start --region auto`} />

                            <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-100 text-sm text-gray-600 flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>You should see "Connected to Mesh" in your terminal.</span>
                            </div>
                        </Step>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
