import { useState } from "react";

export default function ContactForm({
    formData,
    handleChange,
    handleSubmit,
    loading
}) {

    const [validated, setValidated] = useState(false);

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const onSubmit = (e) => {

        e.preventDefault();

        setValidated(true);

        const valid =
            formData.name.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim();

        if (!valid) return;

        handleSubmit(e);

        setValidated(false);
    };

    return (
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

            <form className="space-y-4">

                {/* Name */}
                <div>
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`
                            form-control
                            w-full p-3 rounded-xl
                            bg-white dark:bg-slate-900/50
                            text-slate-800 dark:text-white
                            outline-none transition-all

                            ${validated && !formData.name.trim()
                                ? "border-red-500 ring-2 ring-red-500/20"
                                : "border-gray-300 dark:border-white/10"
                            }

                            focus:ring-2 focus:ring-cyan-500/20
                            focus:border-cyan-500
                        `}
                    />

                    {validated && !formData.name.trim() && (
                        <div className="text-red-500 text-sm mt-1">
                            Name is required
                        </div>
                    )}
                </div>

                {/* Email */}
                <div>
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`
                            form-control
                            w-full p-3 rounded-xl
                            bg-white dark:bg-slate-900/50
                            text-slate-800 dark:text-white
                            outline-none transition-all

                            ${validated && !isValidEmail(formData.email)
                                ? "border-red-500 ring-2 ring-red-500/20"
                                : "border-gray-300 dark:border-white/10"
                            }

                            focus:ring-2 focus:ring-cyan-500/20
                            focus:border-cyan-500
                        `}
                    />

                    {validated && !isValidEmail(formData.email) && (
                        <div className="text-red-500 text-sm mt-1">
                            Valid email is required
                        </div>
                    )}
                </div>

                {/* Message */}
                <div>
                    <textarea
                        rows="5"
                        required
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`
                            form-control
                            w-full p-3 rounded-xl
                            bg-white dark:bg-slate-900/50
                            text-slate-800 dark:text-white
                            outline-none resize-none transition-all

                            ${validated && !formData.message.trim()
                                ? "border-red-500 ring-2 ring-red-500/20"
                                : "border-gray-300 dark:border-white/10"
                            }

                            focus:ring-2 focus:ring-cyan-500/20
                            focus:border-cyan-500
                        `}
                    />

                    {validated && !formData.message.trim() && (
                        <div className="text-red-500 text-sm mt-1">
                            Message is required
                        </div>
                    )}
                </div>

                {/* Button */}
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="
                        px-6 py-3 rounded-xl
                        bg-cyan-600 hover:bg-cyan-500
                        text-white font-medium
                        transition
                        shadow-lg shadow-cyan-500/20
                    "
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>
    );
}