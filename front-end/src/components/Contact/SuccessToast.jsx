import { motion, AnimatePresence } from "framer-motion";

export default function SuccessToast({ success }) {
    return (
        <AnimatePresence>
            {success && (
                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18
                    }}
                    className="
                        fixed top-24 right-6 z-50
                        px-5 py-4 rounded-2xl
                        bg-white dark:bg-slate-900
                        border border-green-500/20
                        shadow-2xl shadow-green-500/10
                        flex items-center gap-3
                        min-w-[320px]
                    "
                >
                    <div className="
                        w-10 h-10 rounded-full
                        bg-green-500/10
                        flex items-center justify-center
                        text-green-500 text-lg
                    ">
                        ✓
                    </div>

                    <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                            Message Sent
                        </p>

                        <p className="text-sm text-gray-500 dark:text-slate-400">
                            Your message was delivered successfully.
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}