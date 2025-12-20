'use client';

import Navbar from '../../components/deepmind/Navbar';
import Footer from '../../components/deepmind/Footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Users, PenTool, Globe, Play, UserCheck, MessageSquare, Briefcase } from 'lucide-react';

const positions = [
    {
        title: "Engineering & Research (The Architects)",
        mission: "Optimizing the Apolemia Grid and refining KnoLink’s synthesis models.",
        do: "Write CUDA kernels, optimize sharding protocols, and help solve the L_dist latency problem.",
        req: "Proficiency in Python, Rust, or C++. A deep curiosity for distributed systems or LLM architecture.",
        icon: Cpu,
        orbitColor: "border-blue-500/30",
        iconColor: "text-blue-500"
    },
    {
        title: "Business & Strategy (The Navigators)",
        mission: "Growing the Apolemia node network and establishing institutional partnerships.",
        do: "Identify strategic GPU partners, manage outreach to research universities, and architect our \"Proof-of-Compute\" incentive models.",
        req: "Strong analytical skills and an understanding of the AI infrastructure market.",
        icon: Briefcase,
        orbitColor: "border-emerald-500/30",
        iconColor: "text-emerald-500"
    },
    {
        title: "Communications & Social (The Storytellers)",
        mission: "Defining the visual and verbal identity of Altair Axis for a global audience.",
        do: "Manage our technical Twitter/X presence, translate complex research into digestible blog posts, and grow our developer community.",
        req: "A portfolio of clean, minimalist design or high-quality technical writing. You must be able to speak the language of \"OpenAI/DeepMind\" fluently.",
        icon: PenTool,
        orbitColor: "border-violet-500/30",
        iconColor: "text-violet-500"
    },
];

const recruitmentSteps = [
    { title: "The Proof of Interest", desc: "Submit your portfolio or GitHub along with a brief \"Vision Statement\" on why decentralized compute matters to South Africa and the world.", icon: Users },
    { title: "The Technical/Strategic Challenge", desc: "A 48-hour take-home task (e.g., optimizing a sharding script or drafting a partnership proposal).", icon: Cpu },
    { title: "The Lab Sync", desc: "A 1-on-1 session with the founders to discuss alignment on the \"Altair Axis Manifesto.\"", icon: MessageSquare },
    { title: "Onboarding", desc: "Successful fellows are integrated into our private Slack/GitHub and given immediate ownership over a core project.", icon: UserCheck },
];

export default function Careers() {
    return (
        <main className="min-h-screen bg-dm-white text-dm-black selection:bg-dm-teal selection:text-white font-sans overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6">
                <div className="max-w-[1200px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-mono text-sm text-dm-blue mb-6 tracking-widest uppercase">Based in South Africa. Reaching the Global Grid.</p>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif tracking-tighter mb-8 md:mb-12 text-dm-black">
                            Careers: <br />
                            <span className="text-gray-400">Building at the Edge.</span>
                        </h1>
                        <div className="max-w-3xl space-y-6 text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                            <p>
                                Altair Axis is a research collective. We aren't just looking for "workers"—we are looking for pioneers who want to help us architect the next era of compute from the southern tip of Africa.
                            </p>
                            <p>
                                We are currently in a high-growth, pre-capital phase. We are inviting a select group of Strategic Volunteers to join our core team. This is a rigorous, high-commitment environment designed for those who want to be there when the first blocks of the decentralized future are laid.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Visual 1: The Collaboration Orbit / Fellowships */}
            <section className="py-24 bg-gray-50 border-y border-gray-100 relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-serif mb-16 text-center">Open Volunteer Fellowships</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {positions.map((pos, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300"
                            >
                                {/* Orbit Visual */}
                                <div className={`absolute -right-12 -top-12 w-48 h-48 rounded-full border-[1px] ${pos.orbitColor} opacity-20 group-hover:opacity-40 transition-opacity`} />
                                <div className={`absolute -right-8 -top-8 w-40 h-40 rounded-full border-[1px] ${pos.orbitColor} opacity-20 group-hover:opacity-40 transition-opacity delay-75`} />

                                <pos.icon className={`w-10 h-10 ${pos.iconColor} mb-6 relative z-10`} />

                                <h3 className="text-xl font-bold mb-2 pr-8">{pos.title}</h3>
                                <p className="text-sm font-mono text-gray-400 mb-6 uppercase tracking-wider">The Mission</p>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {pos.mission}
                                </p>

                                <div className="space-y-4 text-sm text-gray-500">
                                    <div>
                                        <strong className="text-dm-black block mb-1">What you'll do:</strong>
                                        {pos.do}
                                    </div>
                                    <div>
                                        <strong className="text-dm-black block mb-1">Requirement:</strong>
                                        {pos.req}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12 text-gray-400 font-mono text-sm">
                        * These are not entry-level internships; they are high-responsibility roles.
                    </div>
                </div>
            </section>

            {/* Visual 2: The Recruitment Process Flowchart */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif mb-4 text-center">Our Recruitment Process</h2>
                    <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">Rigorous by design. We value your time, and we expect excellence.</p>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 transform md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {recruitmentSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Node */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-dm-black rounded-full transform -translate-x-1/2 z-10" />

                                    {/* Content Card */}
                                    <div className={`ml-20 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-dm-blue/30 transition-colors">
                                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>

                                    {/* Empty spacer for opposite side */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual 3: South Africa to Global / Why Volunteer */}
            <section className="py-24 bg-dm-black text-white relative overflow-hidden">
                {/* Map Abstract Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-dm-blue/40 to-transparent rounded-t-full filter blur-3xl animate-pulse-slow" />
                </div>

                <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif mb-8">Why Volunteer at <br />Altair Axis?</h2>
                            <ul className="space-y-8">
                                <li className="flex gap-4">
                                    <Globe className="w-6 h-6 text-dm-blue flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Global Exposure</h3>
                                        <p className="text-gray-400">Work on projects that will be used by researchers worldwide.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Cpu className="w-6 h-6 text-dm-teal flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Intellectual Equity</h3>
                                        <p className="text-gray-400">Gain deep, hands-on experience with technologies (Distributed Compute, MoE Sharding) that are currently only found in a handful of labs globally.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Network</h3>
                                        <p className="text-gray-400">Build direct connections with the engineers and investors currently shaping the AI landscape in South Africa and abroad.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <ArrowUpRight className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">The Future</h3>
                                        <p className="text-gray-400">Volunteers are the first in line for founding-team roles as we scale toward our Series A.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Visual Representation */}
                        <div className="relative h-[400px] flex items-center justify-center">
                            {/* Stylized Map Points */}
                            <div className="relative w-full h-full max-w-[400px]">
                                {/* SA Point */}
                                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="w-4 h-4 bg-white rounded-full animate-ping mx-auto mb-2" />
                                    <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
                                    <span className="text-xs font-mono uppercase tracking-widest mt-2 block opacity-80">South Africa</span>
                                </div>

                                {/* Arcs */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-current text-gray-700 opacity-50">
                                    <path d="M200,350 Q100,150 50,50" fill="none" strokeWidth="2" strokeDasharray="4 4" className="animate-dash" />
                                    <path d="M200,350 Q200,150 200,50" fill="none" strokeWidth="2" strokeDasharray="4 4" className="animate-dash delay-100" />
                                    <path d="M200,350 Q300,150 350,50" fill="none" strokeWidth="2" strokeDasharray="4 4" className="animate-dash delay-200" />
                                </svg>

                                {/* Global Nodes */}
                                <div className="absolute top-10 left-10 w-2 h-2 bg-gray-500 rounded-full" />
                                <div className="absolute top-10 right-10 w-2 h-2 bg-gray-500 rounded-full" />
                                <div className="absolute top-5 left-1/2 w-2 h-2 bg-gray-500 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter">
                    Are you ready to<br />join the lab?
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button className="px-10 py-4 bg-dm-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform">
                        Apply for a Fellowship
                    </button>
                    <button className="px-10 py-4 bg-gray-100 text-dm-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                        View our Research <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
