export default function Navbar({ theme, t, setLang, setTheme }) {
    return (
        <nav className='sticky top-0 z-50 backdrop-blur-xl
bg-white/70 backdrop-blur-md 
border-b border-gray-200 shadow-sm
dark:bg-white/5 dark:border-white/10
px-8 py-4 flex items-center justify-between'>
            <div className='font-bold text-xl'>{t.title}</div>
            <div className='hidden md:flex gap-6 text-slate-300'><a href='/'>{t.home}</a><a href='/projects'>{t.projects}</a><a href='/experience'>{t.exp}</a><a href='/qualifications'>Qualifications</a><a href='/contact'>{t.contact}</a></div>
            {/* <button
                onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
                className="text-xl hover:scale-110 transition"
            >
                {theme === "dark" ? "🌙" : "☀️"}
            </button> */}
            <div className='flex gap-2 text-xl'>
                <button onClick={() => setLang("en")} className='hover:scale-110'>🇬🇧</button><button onClick={() => setLang("de")} className='hover:scale-110'>🇩🇪</button></div>
        </nav>
    )
}