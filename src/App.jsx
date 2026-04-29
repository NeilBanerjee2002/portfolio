import { useState } from 'react';
import Navbar from './components/Navbar'
import translations from './data/translations';
import Hero from './components/hero';

export default function Portfolio() {
    const [lang, setLang] = useState('en');
    const t = translations[lang];
    return (

        <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
            <Navbar t={t} setLang={setLang} />

            <Hero t={t} />
            <section className='px-8 md:px-16 pb-20 grid md:grid-cols-3 gap-6'><a href='/projects' className='p-6 rounded-3xl bg-white/5 border border-white/10 block hover:-translate-y-1 transition'>
                <h3 className='text-xl font-semibold mb-3'>Projects Route</h3>
                <p className='text-slate-300'>API-backed projects page using GET /api/projects with MongoDB-ready structure.</p></a>
                <a href='/experience' className='p-6 rounded-3xl bg-white/5 border border-white/10 block hover:-translate-y-1 transition'><h3 className='text-xl font-semibold mb-3'>Experience Route</h3><p className='text-slate-300'>API-backed experience page using GET /api/experience for dynamic work history.</p></a><a href='/qualifications' className='p-6 rounded-3xl bg-white/5 border border-white/10 block hover:-translate-y-1 transition'><h3 className='text-xl font-semibold mb-3'>Qualifications Route</h3><p className='text-slate-300'>API-backed qualifications page using GET /api/qualifications for education and skills.</p></a></section>
            <section className='px-8 md:px-16 pb-24'><div className='p-6 rounded-3xl bg-white/5 border border-white/10'><h3 className='text-xl font-semibold mb-3'>Node.js Backend Structure</h3><p className='text-slate-300'>Real full-stack structure: Express API routes GET /api/projects, GET /api/experience, GET /api/qualifications. React frontend consumes APIs with fetch/axios and renders dynamic pages via React Router.</p></div></section></div>)
}
