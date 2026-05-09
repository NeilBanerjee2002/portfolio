import { motion, AnimatePresence } from "framer-motion";

export default function Toast({
    show,
    type = "success",
    title,
    message
}) {

    const styles = {
        success: {
            border: "border-green-500/20",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-500",
            icon: "✓"
        },
        error: {
            border: "border-red-500/20",
            iconBg: "bg-red-500/10",
            iconColor: "text-red-500",
            icon: "✕"
        }
    };

    const current = styles[type];

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18
                    }}
                    className={`
                        fixed top-24 right-6 z-50
                        px-5 py-4 rounded-2xl
                        bg-white dark:bg-slate-900
                        border ${current.border}
                        shadow-2xl
                        flex items-center gap-3
                        min-w-[320px]
                    `}
                >
                    <div className={`
                        w-10 h-10 rounded-full
                        ${current.iconBg}
                        flex items-center justify-center
                        ${current.iconColor}
                        text-lg
                    `}>
                        {current.icon}
                    </div>

                    <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                            {title}
                        </p>

                        <p className="text-sm text-gray-500 dark:text-slate-400">
                            {message}
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}