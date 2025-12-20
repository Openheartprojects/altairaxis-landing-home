
export const researchArticles = [
    {
        id: 'swarm-tp',
        slug: 'swarm-tp',
        title: "Swarm-TP: Tensor Parallelism across High-Latency Links",
        subtitle: "Making the Apolemia Grid viable for even the largest frontier models.",
        abstract: "We are introducing Swarm-TP, a new approach to model parallelism that allows large-scale tensors to be split across geographically distributed nodes. While traditional Tensor Parallelism (TP) requires NVLink-grade speeds, Swarm-TP uses a predictive 'buffer-ahead' architecture to hide network latency.",
        author: "Protocol Team",
        date: "Dec 12, 2024",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop",
        illustrationId: "waterfall",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Summary</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">We are introducing Swarm-TP, a new approach to model parallelism that allows large-scale tensors to be split across geographically distributed nodes. While traditional Tensor Parallelism (TP) requires NVLink-grade speeds, Swarm-TP uses a predictive "buffer-ahead" architecture to hide network latency, making the Apolemia Grid viable for even the largest frontier models.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Deep Dive</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Current distributed training methods like Pipeline Parallelism suffer from "bubbles" of idle time. Swarm-TP eliminates this by implementing a Asynchronous Gradient Stitching protocol.</p>
            
            <h4 class="text-2xl font-serif text-dm-black mt-8 mb-4">Key Innovation</h4>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Instead of waiting for a full synchronous all-reduce, Swarm-TP uses a "weighted-consensus" where nodes contribute to the gradient update based on their verified latency profile.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Results</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We’ve observed a $3.4\\times$ increase in throughput on nodes separated by over 100ms of latency compared to standard Horovod implementations.</p>
        `
    },
    {
        id: 'optimistic-verification',
        slug: 'optimistic-verification',
        title: "Optimistic Verification in Untrusted Edge Networks",
        subtitle: "How do you trust a result from a computer you don't own?",
        abstract: "At Apolemia Labs, we’ve moved away from slow, heavy cryptographic proofs to Optimistic Verification. This system assumes honesty but uses 'Strategic Challenges' to catch and slash malicious actors instantly, ensuring the Grid remains 100% reliable.",
        author: "Security Research",
        date: "Nov 30, 2024",
        category: "Security",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
        illustrationId: "radar",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Summary</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">How do you trust a result from a computer you don't own? At Apolemia Labs, we’ve moved away from slow, heavy cryptographic proofs to Optimistic Verification. This system assumes honesty but uses "Strategic Challenges" to catch and slash malicious actors instantly, ensuring the Grid remains 100% reliable.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Deep Dive</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Borrowing from Layer 2 blockchain scaling, our Optimistic Verification protocol uses Fraud Sampling.</p>

            <h4 class="text-2xl font-serif text-dm-black mt-8 mb-4">Mechanism</h4>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">The Apolemia Console randomly assigns "Shadow Tasks"—hidden, pre-solved problems—to nodes. If a node returns an incorrect result for a Shadow Task, its entire session is invalidated and its reputation score is reset.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Efficiency</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">This reduces the compute overhead of security from 20% down to less than 1.5%, freeing up more power for KnoLink’s synthesis engine.</p>
        `
    },
    {
        id: 'knolink',
        slug: 'knolink',
        title: "KnoLink: Cognitive Synthesis at the Edge",
        subtitle: "Search is a solved problem; synthesis is the new frontier.",
        abstract: "We’ve officially moved KnoLink out of private alpha. By utilizing the Apolemia Grid, KnoLink can now perform 'Global Cross-Pollination'—finding links between your private research papers and real-time market data in milliseconds.",
        author: "Product Team",
        date: "Oct 24, 2024",
        category: "Product",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
        illustrationId: "sidebar",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Summary</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">Search is a solved problem; synthesis is the new frontier. We’ve officially moved KnoLink out of private alpha. By utilizing the Apolemia Grid, KnoLink can now perform "Global Cross-Pollination"—finding links between your private research papers and real-time market data in milliseconds.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Deep Dive</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">KnoLink’s core is the Neural Linker, a model that treats your data as a vector graph rather than a flat list.</p>

            <h4 class="text-2xl font-serif text-dm-black mt-8 mb-4">Multimodal Context</h4>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">KnoLink now processes screen pixels, system audio, and text simultaneously to give you a "Live HUD" during meetings.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Grid-Powered</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">Because it runs on the Apolemia cluster, it can maintain a 1-million-token context window without slowing down your local machine.</p>
        `
    },
    {
        id: 'latent-aware-sharding',
        slug: 'latent-aware-sharding',
        title: "Latent-Aware Sharding for MoE Models",
        subtitle: "Mixture-of-Experts (MoE) models are powerful but memory-heavy.",
        abstract: "We developed Latent-Aware Sharding (LAS) to intelligently distribute 'experts' across the Apolemia Grid based on real-time demand. This allows a 1-Trillion parameter model to run across a network of consumer-grade GPUs with zero perceived lag.",
        author: "AI Research",
        date: "Sep 15, 2024",
        category: "Research",
        image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2940&auto=format&fit=crop",
        illustrationId: "experts",
        content: `
            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Summary</h3>
            <p class="mb-6 text-xl leading-relaxed text-dm-text-secondary">Mixture-of-Experts (MoE) models are powerful but memory-heavy. We developed Latent-Aware Sharding (LAS) to intelligently distribute "experts" across the Apolemia Grid based on real-time demand. This allows a 1-Trillion parameter model to run across a network of consumer-grade GPUs with zero perceived lag.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">The Deep Dive</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">LAS uses a Predictive Router that anticipates which "Expert" layers will be called based on the first few tokens of a prompt.</p>
            
            <h4 class="text-2xl font-serif text-dm-black mt-8 mb-4">Pre-fetching</h4>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">While the first layer is processing, the system "pre-warms" the relevant shards on the next set of grid nodes.</p>

            <h3 class="text-3xl font-serif text-dm-black mt-12 mb-6">Formula</h3>
            <p class="mb-6 text-lg leading-relaxed text-gray-600">We optimize for the Latency-Throughput Product ($L \\times T$), ensuring that the cost of moving data never exceeds the benefit of parallel execution.</p>
        `
    }
];

export const getArticleBySlug = (slug) => {
    return researchArticles.find(article => article.slug === slug);
};
