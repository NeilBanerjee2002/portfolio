export default function ExperianceItem({ company,
    role,
    duration,
    desc,
    points }) {
    return (
        <div className="relative">

            {/* Dot */}
            <div className="absolute -left-[10px] top-2 w-4 h-4 rounded-full bg-cyan-500"></div>

            {/* Content */}
            <div className="bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-2xl p-6">

                {/* Company + Role */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h2 className="text-2xl font-semibold">
                        {role}
                    </h2>
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                        {duration}
                    </span>
                </div>

                {/* Role */}
                <p className="text-cyan-500 font-medium mb-3">
                    {company}
                </p>

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