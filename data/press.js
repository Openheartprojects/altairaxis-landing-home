
export const pressReleases = [
    {
        id: 'gemma-7b',
        slug: 'gemma-7b',
        title: "Milestone: Gemma-7B Distributed Inference",
        subtitle: "Verified token generation with 100% output parity compared to a single-node H100 instance.",
        description: "We have successfully deployed and run a Gemma-7B (Google’s open-weights model) across a decentralized cluster of 5 heterogeneous nodes.",
        date: "Dec 18, 2024",
        category: "Technical Milestone",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        illustrationId: "live-sharding",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Achievement</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">We have successfully deployed and run a Gemma-7B (Google’s open-weights model) across a decentralized cluster of 5 heterogeneous nodes.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Challenge</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Running large models on consumer-grade hardware often fails due to VRAM limitations.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Solution</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">By sharding the model layers across the grid, we allowed each node to handle only a fraction of the weight parameters, enabling 7B-class performance on machines that traditionally could only handle 2B models.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Result</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Verified token generation with 100% output parity compared to a single-node H100 instance.</p>
        `
    },
    {
        id: 'swarm-parallelism',
        slug: 'swarm-parallelism',
        title: "Milestone: Swarm Parallelism (Alpha)",
        subtitle: "Implementation of our first Parallelism Fabric on the Apolemia network.",
        description: "Unlike traditional data parallelism which requires high-speed local interconnects, we successfully executed Pipeline Parallelism over standard residential internet links.",
        date: "Nov 30, 2024",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
        illustrationId: "latency-graph",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Achievement</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">Implementation of our first Parallelism Fabric on the Apolemia network.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Breakthrough</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Unlike traditional data parallelism which requires high-speed local interconnects (NVLink), we successfully executed Pipeline Parallelism over standard residential internet links (latencies up to 120ms).</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Technical Detail</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We utilized a "Staggered Forward-Pass" logic that allows Node B to start processing its layer while Node A is still finalizing the previous batch's activations, effectively eliminating the "idle bubble" typical of distributed systems.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Stability</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">The network maintained a 99.8% sync rate over a 24-hour continuous inference stress test.</p>
        `
    },
    {
        id: 'sandbox-latency',
        slug: 'sandbox-latency',
        title: "Milestone: Sandbox Latency Optimization",
        subtitle: "The Apolemia Worker (v0.4) now achieves sub-10ms overhead for its secure containerization layer.",
        description: "Our latest update optimizes the bridge between the Docker-based sandbox and the host's NVIDIA drivers, ensuring negligible performance loss.",
        date: "Nov 15, 2024",
        category: "Optimization",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
        illustrationId: "generic-chip", // Fallback/Simple visual
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Achievement</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">The Apolemia Worker (v0.4) now achieves sub-10ms overhead for its secure containerization layer.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Importance</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Securely sandboxing a host machine usually slows down the GPU’s communication with the software. Our latest update optimizes the bridge between the Docker-based sandbox and the host's NVIDIA drivers.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Impact</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Node providers now see nearly 1:1 performance efficiency when their machine is "on the grid" versus running locally.</p>
        `
    }
];

export const updatesFeed = [
    { date: "Oct 15", content: "Successfully integrated TensorRT-LLM into the Apolemia Worker for 2x faster inference." },
    { date: "Oct 02", content: "First successful 'Multi-Hops' query on KnoLink—connecting data across three disparate PDF sources in under 400ms." },
    { date: "Sept 20", content: "Automated node discovery protocol live; nodes now join the grid in < 5 seconds." },
    { date: "Sept 05", content: "Verified 1,000+ concurrent API requests on the Apolemia Console without a single dropped packet." }
];

export const getPressReleaseBySlug = (slug) => {
    return pressReleases.find(item => item.slug === slug);
};
