import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import translations from './data/translations'
import Projects from './pages/Projects'



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
        <div className="min-h-screen bg-white text-black dark:bg-slate-950 dark:text-white transition-colors duration-300">            <Navbar theme={theme} t={t} setLang={setLang} setTheme={setTheme} />

            <Routes>
                <Route path="/" element={<Home t={t} />} />
                <Route path="/projects" element={<Projects t={t} />} />
                {/* <Route path="/experience" element={<Experience />} /> */}
            </Routes>
        </div>
    );
}