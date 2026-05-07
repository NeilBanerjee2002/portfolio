import ProjectItems from "./ProjectItems";

export default function ProjectMain({ t }) {
    return (
        <section className="px-8 md:px-16 py-24">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t.projectTitle}
            </h1>

            <p className="text-slate-400 mb-12 max-w-2xl">
                {t.projectHeading}
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                {/* Project 1 */}
                <ProjectItems
                    projectTitle={t.project1Title}
                    projectDesc={t.project1Desc}
                    projectPoints={t.project1Points}
                />

                {/* Project 2 */}
                <ProjectItems
                    projectTitle={t.project2Title}
                    projectDesc={t.project2Desc}
                    projectPoints={t.project2Points}
                />

            </div>
        </section>
    )
}