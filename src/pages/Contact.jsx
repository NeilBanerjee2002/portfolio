import {
    Mail,
    MapPin,
    BriefcaseBusiness,
    FolderGit2
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);

            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (err) {
            console.log(err);
            alert("Failed to send message");
        }

        setLoading(false);

    };
    return (
        <><AnimatePresence>
            {success && (
                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18
                    }}
                    className="
                fixed top-24 right-6 z-50
                px-5 py-4 rounded-2xl
                bg-white dark:bg-slate-900
                border border-green-500/20
                shadow-2xl shadow-green-500/10
                flex items-center gap-3
                min-w-[320px]
            "
                >

                    {/* Icon */}
                    <div className="
                w-10 h-10 rounded-full
                bg-green-500/10
                flex items-center justify-center
                text-green-500
                text-lg
            ">
                        ✓
                    </div>

                    {/* Text */}
                    <div>
                        <p className="font-semibold text-slate-800 dark:text-white">
                            Message Sent
                        </p>

                        <p className="text-sm text-gray-500 dark:text-slate-400">
                            Your message was delivered successfully.
                        </p>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>   <section className="px-8 md:px-16 py-24">


                {/* Heading */}
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.contactTitle}
                    </h1>

                    <p className="text-gray-600 dark:text-slate-400 text-lg">
                        Open to backend engineering opportunities, freelance work,
                        and collaboration on scalable web applications.
                    </p>
                </div>

                {/* Contact Card */}
                <div
                    className="
        rounded-3xl p-8
        bg-white/80 backdrop-blur-md
        border border-gray-200
        shadow-lg shadow-gray-200/50
        dark:bg-white/5 dark:border-white/10
        dark:shadow-cyan-500/5
    "
                ><div className="grid lg:grid-cols-2 gap-8 items-start">

                        <div className="space-y-6">

                            {/* Email */}
                            <a
                                href="mailto:yourmail@example.com"
                                className="
                            flex items-center justify-between
                            p-5 rounded-2xl
                            bg-gray-50 hover:bg-gray-100
                            dark:bg-white/5 dark:hover:bg-white/10
                            border border-gray-200 dark:border-white/10
                            transition
                        "
                            >
                                <div className="flex items-center gap-4">
                                    <div className="
                                w-12 h-12 rounded-xl
                                bg-cyan-500/10
                                flex items-center justify-center
                            ">
                                        <Mail className="text-cyan-500" size={22} />
                                    </div>

                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">
                                            {t.email}
                                        </p>

                                        <p className="text-sm text-gray-500 dark:text-slate-400">
                                            yourmail@example.com
                                        </p>
                                    </div>
                                </div>

                                <span className="text-cyan-500 text-sm">
                                    ↗
                                </span>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                            flex items-center justify-between
                            p-5 rounded-2xl
                            bg-gray-50 hover:bg-gray-100
                            dark:bg-white/5 dark:hover:bg-white/10
                            border border-gray-200 dark:border-white/10
                            transition
                        "
                            >
                                <div className="flex items-center gap-4">
                                    <div className="
                                w-12 h-12 rounded-xl
                                bg-cyan-500/10
                                flex items-center justify-center
                            ">
                                        <FolderGit2 className="text-cyan-500" size={22} />
                                    </div>

                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">
                                            {t.github}
                                        </p>

                                        <p className="text-sm text-gray-500 dark:text-slate-400">
                                            github.com/yourusername
                                        </p>
                                    </div>
                                </div>

                                <span className="text-cyan-500 text-sm">
                                    ↗
                                </span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                            flex items-center justify-between
                            p-5 rounded-2xl
                            bg-gray-50 hover:bg-gray-100
                            dark:bg-white/5 dark:hover:bg-white/10
                            border border-gray-200 dark:border-white/10
                            transition
                        "
                            >
                                <div className="flex items-center gap-4">
                                    <div className="
                                w-12 h-12 rounded-xl
                                bg-cyan-500/10
                                flex items-center justify-center
                            ">
                                        <BriefcaseBusiness className="text-cyan-500" size={22} />
                                    </div>

                                    <div>
                                        <p className="font-medium text-slate-800 dark:text-white">
                                            {t.linkedin}
                                        </p>

                                        <p className="text-sm text-gray-500 dark:text-slate-400">
                                            linkedin.com/in/yourprofile
                                        </p>
                                    </div>
                                </div>

                                <span className="text-cyan-500 text-sm">
                                    ↗
                                </span>
                            </a>

                            {/* Location */}
                            <div
                                className="
                            flex items-center gap-4
                            p-5 rounded-2xl
                            bg-gray-50
                            dark:bg-white/5
                            border border-gray-200 dark:border-white/10
                        "
                            >
                                <div className="
                            w-12 h-12 rounded-xl
                            bg-cyan-500/10
                            flex items-center justify-center
                        ">
                                    <MapPin className="text-cyan-500" size={22} />
                                </div>

                                <div>
                                    <p className="font-medium text-slate-800 dark:text-white">
                                        Location
                                    </p>

                                    <p className="text-sm text-gray-500 dark:text-slate-400">
                                        India
                                    </p>
                                </div>
                            </div></div>

                        {/* Send Message */}
                        <div
                            className="
        p-6 rounded-2xl
        bg-gray-50
        dark:bg-white/5
        border border-gray-200 dark:border-white/10
    "
                        >

                            <h2 className="text-xl font-semibold mb-5 text-slate-800 dark:text-white">
                                Send a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Name */}
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"

                                    value={formData.name}
                                    onChange={handleChange}
                                    className="
                w-full p-3 rounded-xl
                bg-white dark:bg-slate-900/50
                border border-gray-300 dark:border-white/10
                text-slate-800 dark:text-white
                outline-none focus:border-cyan-500
                transition
            "
                                />

                                {/* Email */}
                                <input
                                    type="email"
                                    placeholder="Your Email"

                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="
                w-full p-3 rounded-xl
                bg-white dark:bg-slate-900/50
                border border-gray-300 dark:border-white/10
                text-slate-800 dark:text-white
                outline-none focus:border-cyan-500
                transition
            "
                                />

                                {/* Message */}
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="
                w-full p-3 rounded-xl
                bg-white dark:bg-slate-900/50
                border border-gray-300 dark:border-white/10
                text-slate-800 dark:text-white
                outline-none focus:border-cyan-500
                transition resize-none
            "
                                />

                                {/* Button */}
                                <button
                                    type="submit"
                                    className="
                px-6 py-3 rounded-xl
                bg-cyan-600 hover:bg-cyan-500
                text-white font-medium
                transition
                shadow-lg shadow-cyan-500/20
            "
                                >
                                    {loading ? "Sending..." : "Send Message"}                            </button>


                            </form>
                        </div>

                    </div>
                </div>
            </section></>

    );
}