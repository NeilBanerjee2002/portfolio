export default function ContactCard({
    href,
    icon,
    title,
    subtitle
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                flex items-center justify-between
                p-5 rounded-2xl
                bg-gray-50 hover:bg-gray-100
                dark:bg-white/5 dark:hover:bg-white/10
                border border-gray-200 dark:border-white/10
                transition
            "
        >
            <div className="flex items-center gap-4">
                <div className="
                    w-12 h-12 rounded-xl
                    bg-cyan-500/10
                    flex items-center justify-center
                ">
                    {icon}
                </div>

                <div>
                    <p className="font-medium text-slate-800 dark:text-white">
                        {title}
                    </p>

                    <p className="text-sm text-gray-500 dark:text-slate-400">
                        {subtitle}
                    </p>
                </div>
            </div>

            <span className="text-cyan-500 text-sm">
                ↗
            </span>
        </a>
    );
}