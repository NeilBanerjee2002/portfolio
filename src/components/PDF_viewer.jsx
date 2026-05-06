import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const getEmbedUrl = (url) => {
    const match = url.match(/\/d\/(.*?)\//);
    if (!match) return url;
    return `https://drive.google.com/file/d/${match[1]}/preview`;
};

export default function PdfViewer({ url, onClose }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [url]);


    if (!url) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-[90%] h-[90%] bg-white dark:bg-slate-900 rounded-xl overflow-hidden relative"
            >

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-black dark:text-white text-xl z-10"
                >
                    ✕
                </button>
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-50">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce"></div>
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                )}

                {/* PDF */}
                <iframe
                    onLoad={() => setLoading(false)}
                    src={getEmbedUrl(url)}
                    className="w-full h-full"
                />

            </motion.div>

        </div>
    );
}