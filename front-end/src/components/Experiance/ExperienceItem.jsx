export default function ExperianceItem({
    company,
    role,
    duration,
    location,
    desc,
    points
}) {
    return (
        <div className="relative">

            {/* Dot */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-cyan-500"></div>

            {/* Content */}
            <div className="
    bg-white dark:bg-white/5
    border border-gray-200 dark:border-white/10
    rounded-2xl p-6
    shadow-md shadow-gray-200/60
    dark:shadow-cyan-500/5
    hover:shadow-xl hover:-translate-y-0.5
    transition
">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 gap-2">

                    {/* Left */}
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {role}
                        </h2>

                        <p className="text-cyan-500 font-medium">
                            {company}
                        </p>
                    </div>

                    {/* Right */}
                    <div className="text-sm text-gray-500 dark:text-slate-400 text-left md:text-right">
                        <p>{duration}</p>
                        <p>{location}</p>
                    </div>

                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                    {desc}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-gray-700 dark:text-slate-300 text-sm">
                    {points.map((point, i) => {
                        return <li key={i}>• {point}</li>
                    })}
                </ul>

            </div>
        </div>
    )
}