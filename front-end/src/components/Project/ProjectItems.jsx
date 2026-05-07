export default function ProjectItems({ projectTitle, projectDesc, projectPoints }) {
    return (
        <div className="
rounded-2xl p-6
bg-white/70 backdrop-blur-md 
border border-gray-200 shadow-sm
hover:shadow-lg hover:-translate-y-1 transition
dark:bg-white/5 dark:border-white/10
">
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
                    {projectTitle}
                </h2>

                <p className="text-slate-400 mb-4">
                    {projectDesc}
                </p>

                <ul className="text-sm text-slate-300 space-y-2 mb-4">
                    {projectPoints.map((point, i) => (
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
    )
}