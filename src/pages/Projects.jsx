export default function Projects({ t }) {
    return (
        <section className="px-8 md:px-16 py-24">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t.projectTitle}
            </h1>

            <p className="text-slate-400 mb-12 max-w-2xl">
                {/* You don’t have this in translations, so keep static OR add later */}
                Real-world backend-focused applications demonstrating API design,
                authentication, and scalable architecture.
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Project 1 */}
                <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400 transition">

                    <div className="relative">
                        <img
                            src="/images/yelpcamp.png"
                            alt="YelpCamp"
                            className="w-full h-48 object-cover"
                        />

                        <div className="absolute top-3 right-3">
                            <a
                                href="https://yelp-camp-neil.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs bg-black/60 backdrop-blur px-3 py-1 rounded-lg text-white hover:bg-black/80 transition"
                            >
                                View ↗
                            </a>
                        </div>
                    </div>

                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            {t.project1Title}
                        </h2>

                        <p className="text-slate-400 mb-4">
                            {t.project1Desc}
                        </p>

                        <ul className="text-sm text-slate-300 space-y-2 mb-4">
                            {t.project1Points.map((point, i) => (
                                <li key={i}>• {point}</li>
                            ))}
                        </ul>

                        <div className="flex gap-3 text-sm">
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Node.js</span>
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Express</span>
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">MongoDB</span>
                        </div>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-400 transition">

                    <img
                        src="/images/notes.png"
                        alt="Notes"
                        className="w-full h-48 object-cover"
                    />

                    <div className="p-6">
                        <h2 className="text-2xl font-semibold mb-2">
                            {t.project2Title}
                        </h2>

                        <p className="text-slate-400 mb-4">
                            {t.project2Desc}
                        </p>

                        <ul className="text-sm text-slate-300 space-y-2 mb-4">
                            {t.project2Points.map((point, i) => (
                                <li key={i}>• {point}</li>
                            ))}
                        </ul>

                        <div className="flex gap-3 text-sm">
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">JavaScript</span>
                            <span className="px-3 py-1 bg-cyan-500/20 rounded-full">Node.js</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}