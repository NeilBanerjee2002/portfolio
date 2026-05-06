import { Link } from "react-router-dom";

export default function Details_Home({ t }) {
    return (
        <section className="px-8 md:px-16 pb-20 grid md:grid-cols-3 gap-6">

            {/* Projects */}
            <Link
                to="/projects"
                className="rounded-2xl p-6
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm
        hover:shadow-lg hover:-translate-y-1 transition
        dark:bg-white/5 dark:border-white/10"
            >
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    {t.detailsProjectsTitle}
                </h3>
                <p className="text-gray-600 dark:text-slate-300">
                    {t.detailsProjectsDesc}
                </p>
            </Link>

            {/* Experience */}
            <Link
                to="/experience"
                className="rounded-2xl p-6
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm
        hover:shadow-lg hover:-translate-y-1 transition
        dark:bg-white/5 dark:border-white/10"
            >
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    {t.detailsExpTitle}
                </h3>
                <p className="text-gray-600 dark:text-slate-300">
                    {t.detailsExpDesc}
                </p>
            </Link>

            {/* Qualifications */}
            <Link
                to="/qualifications"
                className="rounded-2xl p-6
        bg-white/70 backdrop-blur-md border border-gray-200 shadow-sm
        hover:shadow-lg hover:-translate-y-1 transition
        dark:bg-white/5 dark:border-white/10"
            >
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">
                    {t.detailsQualTitle}
                </h3>
                <p className="text-gray-600 dark:text-slate-300">
                    {t.detailsQualDesc}
                </p>
            </Link>

        </section>
    );
}