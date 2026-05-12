export default function RecruiterSection({ t }) {
    return (
        <section className="mx-8 md:mx-16 mb-20">


            {/* Row 1 — Availability */}
            <div className="bg-slate-900 border border-cyan-500/20 rounded-xl px-5 py-4 mb-3">
                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">

                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block shadow-[0_0_6px_#22c55e88]"></span>
                        {/* <span className="text-sm font-semibold text-white">
                            {t?.available || "Ab sofort verfügbar"}
                        </span> */}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                        {t?.location || "Deutschland / Remote"}
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block"></div>

                    <div className="flex items-center gap-2 text-sm text-slate-400">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        </svg>
                        {t?.workType || "Vollzeit · Freelance"}
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-slate-400">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        {t?.startDate || "Startdatum: sofort / nach Vereinbarung"}
                    </div> */}

                </div>
            </div>

            {/* Row 2 — Languages & Work Auth */}
            <div className="bg-slate-900 border border-cyan-500/20 rounded-xl px-5 py-4 mb-5">
                <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">

                    <div className="flex items-center gap-2 text-sm">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="M22 22l-5-10-5 10" /><path d="M14 18h6" />
                        </svg>
                        <span className="text-white font-medium">{t.languages}</span>
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block"></div>

                    <div className="flex items-center gap-2 text-sm">
                        <span>🇮🇳</span>
                        <span className="text-white">Hindi</span>
                        <span className="text-slate-500">Native</span>
                    </div>
                    <div className="w-px h-4 bg-white/10 hidden sm:block"></div>


                    <div className="flex items-center gap-2 text-sm">
                        <span>🇬🇧</span>
                        <span className="text-white">English</span>
                        <span className="text-slate-500">— Fluent</span>
                    </div>

                    <div className="w-px h-4 bg-white/10 hidden sm:block"></div>

                    <div className="flex items-center gap-2 text-sm">
                        <span>🇩🇪</span>
                        <span className="text-white">Deutsch</span>
                        <span className="text-slate-500">{t.germanLevel}</span>
                    </div>
                </div>
            </div>

        </section>
    );
}
