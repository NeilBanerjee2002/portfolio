export default function ContactForm({
    formData,
    handleChange,
    handleSubmit,
    loading
}) {
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

            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                                w-full p-3 rounded-xl
                                bg-white dark:bg-slate-900/50
                                text-slate-800 dark:text-white

                                border border-gray-300
                                dark:border-white/10

                                outline-none transition

                                focus:border-cyan-500
                                focus:ring-2 focus:ring-cyan-500/20

                                invalid:border-red-500
                                invalid:text-red-500

                                placeholder:text-gray-400
                                dark:placeholder:text-slate-500
                            "
                />

                {/* Email */}
                <input
                    type="email"
                    required
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="
                            w-full p-3 rounded-xl
                            bg-white dark:bg-slate-900/50
                            text-slate-800 dark:text-white

                            border border-gray-300
                            dark:border-white/10

                            outline-none transition

                            focus:border-cyan-500
                            focus:ring-2 focus:ring-cyan-500/20

                            invalid:border-red-500
                            invalid:text-red-500

                            placeholder:text-gray-400
                            dark:placeholder:text-slate-500
                    "
                />

                {/* Message */}
                <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="
                        w-full p-3 rounded-xl
                        bg-white dark:bg-slate-900/50
                        border border-gray-300 dark:border-white/10
                        text-slate-800 dark:text-white
                        outline-none focus:border-cyan-500
                        transition resize-none invalid:border-red-500

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
                    {loading ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>
    );
}