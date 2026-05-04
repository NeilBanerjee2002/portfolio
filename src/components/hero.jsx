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
                    Node.js Backend Engineer
                </p>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                    {t.tag}
                </h1>

                <p className="text-slate-400 text-lg mb-8">
                    {t.heroDesc}
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="#projects"
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
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg"
            >
                <motion.pre
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                ><pre className="text-sm text-green-400 overflow-x-auto">
                        {`GET /campgrounds
→ List all camps

POST /campgrounds
→ Create new campground
(auth + images upload)

GET /campgrounds/:id
→ View campground details
`}
                    </pre></motion.pre>

                <motion.pre
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                ><pre className="text-sm text-cyan-400 mt-4 overflow-x-auto">
                        {`PUT /campgrounds/:id
→ Update campground
(auth + author only)

DELETE /campgrounds/:id
→ Delete campground
(auth + author only)

GET /campgrounds/:id/edit
→ Edit form (protected)
`}
                    </pre></motion.pre>

            </motion.div>

        </section>
    )
}

