import { motion } from "framer-motion";

export default function Hero({ t }) {
    return (


        <section className="px-8 md:px-16 py-24 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <motion.div
                className="max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-cyan-400 font-semibold mb-3">
                    {t.role}
                </p>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                    {t.tag}
                </h1>

                <p className="text-slate-400 text-lg mb-8">
                    {t.heroDesc}
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="/projects"
                        className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
                    >
                        {t.btn1}
                    </a>

                    <a
                        href="/resume.pdf"
                        className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                    >
                        {t.btn2}
                    </a>
                </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg shadow-lg shadow-cyan-500/10"
            >

                <div className="
  rounded-2xl overflow-hidden
  bg-white border border-gray-200 text-slate-800
  dark:bg-slate-900 dark:border-slate-700 dark:text-green-400
  font-mono text-sm
  ">

                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800">
                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span className="ml-4 text-slate-400 text-xs">api-terminal</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-4 space-y-2">

                        <p><span className="text-cyan-400">$</span> GET /campgrounds</p>
                        <p className="text-slate-400">→ List all camps</p>

                        <p><span className="text-cyan-400">$</span> POST /campgrounds</p>
                        <p className="text-slate-400">→ Create new (auth + images)</p>

                        <p><span className="text-cyan-400">$</span> GET /campgrounds/:id</p>
                        <p className="text-slate-400">→ View details</p>

                        <p><span className="text-cyan-400">$</span> PUT /campgrounds/:id</p>
                        <p className="text-slate-400">→ Update (author only)</p>

                        <p><span className="text-cyan-400">$</span> DELETE /campgrounds/:id</p>
                        <p className="text-slate-400">→ Delete (protected)</p>

                    </div>
                </div>

            </motion.div>

        </section>
    )
}

