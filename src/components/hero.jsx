export default function Hero({ t }) {
    return (
        <section className='px-8 md:px-16 py-24 grid md:grid-cols-2 gap-10 items-center'>
            <div>
                <p className='text-cyan-400 font-semibold mb-3'>Node.js Backend Developer</p>

                <h1 className='text-5xl md:text-7xl font-bold tracking-tight leading-tight'>{t.tag}</h1>
                <div className='mt-8 flex gap-4'>
                    <button className='px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 font-semibold'>{t.btn1}</button>
                    <button className='px-6 py-3 rounded-full border border-white/20'>{t.btn2}</button></div>
            </div>
            <div className='p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl'><p className='text-green-400 mb-3'>$ node portfolio.js</p>
                <p className='text-slate-300'>Launching recruiter-ready experience...</p><p className='text-cyan-300 mt-4'>Stack: Node.js • Express.js • MongoDB • REST APIs • React</p>
            </div>
        </section>
    )
}

