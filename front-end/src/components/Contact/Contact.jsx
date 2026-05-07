import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionToast from './SuccessToast'
import ContactCard from './ContactCard'
import { contactItems } from './ContactData'
import ContactForm from './ContactForm'

export default function ContactMain({ t }) {
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
        <><SectionToast success={success} />
            <section className="px-8 md:px-16 py-24">


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
                            {contactItems.map((item) => (
                                <ContactCard
                                    key={item.title}
                                    {...item}
                                />
                            ))}
                        </div>
                        {/* Send Message */}
                        <ContactForm
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            loading={loading}
                        />
                    </div>
                </div>
            </section></>

    );
}