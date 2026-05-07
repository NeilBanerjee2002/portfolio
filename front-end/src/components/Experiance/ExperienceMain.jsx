import ExperianceItem from "./ExperienceItem"

export default function ExperienceMain({ t }) {
    return (
        <section className="px-8 md:px-16 py-24">

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-12">
                {t.expTitle}
            </h1>

            {/* Timeline */}
            <div className="relative border-l border-gray-300 dark:border-white/10 pl-6 space-y-12">

                <ExperianceItem
                    location="Gurugram"
                    company={t.company}
                    role={t.role}
                    duration="May 2024 – Present"
                    desc={t.exp1Desc}
                    points={t.exp1Points}
                />

                <ExperianceItem
                    location="Gurugram"
                    company={t.company}
                    role="Engineering Intern"
                    duration="Jan 2024 – May 2024"
                    desc={t.exp2Desc}
                    points={t.exp2Points}
                />


            </div>
        </section>
    )
}