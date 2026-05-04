import { useState } from 'react';
import Navbar from './components/Navbar'
import translations from './data/translations';
import Hero from './components/hero';
import Details_Home from './components/Details_Home';
import Bottom_Container from './components/Bottom_container'

export default function Portfolio() {
    const [lang, setLang] = useState('en');
    const t = translations[lang];
    return (

        <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white'>
            <Navbar t={t} setLang={setLang} />

            <Hero t={t} />
            <Details_Home />
            <Bottom_Container />
        </div>)
}
