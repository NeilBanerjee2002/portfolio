import { useEffect, useState } from "react";
import PdfViewer from "../components/PDF_viewer";
import { Eye } from "lucide-react";



export default function Qualifications({ t }) {

    const [activePdf, setActivePdf] = useState(null);


    return (
        <section className="px-8 md:px-16 py-24">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
                Qualifications
            </h1>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Skills Card */}
                <div className="
          rounded-2xl p-6
          bg-white/80 backdrop-blur-md 
          border border-gray-200 shadow-sm
          hover:shadow-xl hover:-translate-y-1 transition
          dark:bg-white/5 dark:border-white/10
        ">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                        {t.skillsTitle}
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {t.skills.split(",").map((skill, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full 
                bg-cyan-500/10 text-cyan-700
                dark:bg-cyan-500/20 dark:text-cyan-300"
                            >
                                {skill.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Education Card */}
                <div className="
          rounded-2xl p-6
          bg-white/80 backdrop-blur-md 
          border border-gray-200 shadow-sm
          hover:shadow-xl hover:-translate-y-1 transition
          dark:bg-white/5 dark:border-white/10
        ">
                    <h2 className="text-2xl font-semibold mb-4 text-slate-800 dark:text-white">
                        {t.educationTitle}
                    </h2>

                    <div className="space-y-4 text-gray-700 dark:text-slate-300">
                        <p>
                            🎓 <strong>Bachelor’s Degree</strong>
                            <br />
                            Computer Science / Related Field
                        </p>

                        <p>
                            📍 India
                            <br />
                            <span className="text-sm text-gray-500 dark:text-slate-400">
                                2020 – 2024
                            </span>
                        </p>
                    </div>
                </div>
                {/* Certifications Section */}

            </div>
            <div className="mt-12">

                <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
                    {t.certTitle}
                </h2>

                <div className="space-y-4">
                    {t.certifications.map((cert, i) => (
                        <div
                            key={i}
                            className="
          w-full flex items-center justify-between
          p-5 rounded-xl
          bg-white/80 backdrop-blur-md
          border border-gray-200 shadow-sm
          hover:shadow-md hover:-translate-y-[1px] transition
          dark:bg-white/5 dark:border-white/10
          "
                        >

                            <div className="flex-1">
                                <h3 className="font-medium text-slate-800 dark:text-white">
                                    {cert.name}
                                </h3>

                                <p className="text-sm text-gray-500 dark:text-slate-400">
                                    {cert.issuer}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    console.log(cert.link);
                                    setActivePdf(cert.link);
                                }}
                                className="
            ml-4 p-2 rounded-lg
            bg-cyan-600 text-white
            hover:bg-cyan-500
            transition flex items-center justify-center
            "
                            >
                                <Eye size={18} />
                            </button>

                        </div>
                    ))}
                </div>

            </div>
            <PdfViewer
                url={activePdf}
                onClose={() => setActivePdf(null)}
            />
        </section>
    );
}