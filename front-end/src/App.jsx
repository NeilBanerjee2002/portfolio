import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import translations from './data/translations'
import Projects from './pages/Projects'
import Experience from "./pages/Experience";
import Qualifications from './pages/Qualifications'
import ScrollToTop from "./utils/ScrollToTop";
import Contact from './pages/Contact'


export default function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const [lang, setLang] = useState(() => {
        return localStorage.getItem("lang") || "en";
    });
    const t = translations[lang];

    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);


    return (
        <><ScrollToTop />
            <div className="  overflow-hidden
h-fit relative
bg-gradient-to-br from-slate-50 via-white to-slate-100
dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
text-slate-800 dark:text-white
transition-colors duration-300
">

                <div className="absolute inset-0 -z-10 blur-3xl opacity-20 
  bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"></div>
                <Navbar t={t} theme={theme} setLang={setLang} setTheme={setTheme} />
                <Routes>
                    <Route path="/" element={<Home t={t} />} />
                    <Route path="/projects" element={<Projects t={t} />} />
                    <Route path="/experience" element={<Experience t={t} />} />
                    <Route path="/Qualifications" element={<Qualifications t={t} />} />
                    <Route path="/Contact" element={<Contact t={t} />} />
                </Routes>
            </div ></>

    );
}