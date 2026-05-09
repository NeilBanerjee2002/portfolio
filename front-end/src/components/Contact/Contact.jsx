import { useState } from "react";
import Toast from "./SuccessToast";
import ContactCard from './ContactCard'
import { contactItems } from './ContactData'
import ContactForm from './ContactForm'

const API_URL = import.meta.env.VITE_API_URL;

export default function ContactMain({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [toast, setToast] = useState({
        show: false,
        type: "success",
        title: "",
        message: ""
    }); const [loading, setLoading] = useState(false);

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

            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            if (data.success) {

                setToast({
                    show: true,
                    type: "success",
                    title: "Message Sent",
                    message: data.message
                });

                setTimeout(() => {
                    setToast(prev => ({
                        ...prev,
                        show: false
                    }));
                }, 3000);

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            }

        } catch (error) {

            console.log(error);

            setToast({
                show: true,
                type: "error",
                title: "",
                message: error.message
            });
            setTimeout(() => {
                setToast(prev => ({
                    ...prev,
                    show: false
                }));
            }, 3000);
        }

        setLoading(false);
    };
    return (
        <><Toast
            show={toast.show}
            type={toast.type}
            title={toast.title}
            message={toast.message}
        />
            <section className="px-8 md:px-16 py-24">


                {/* Heading */}
                <div className="max-w-2xl mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {t.contactTitle}
                    </h1>

                    <p className="text-gray-600 dark:text-slate-400 text-lg">
                        Passionate about building scalable web applications and always open to exploring new engineering challenges and collaborative opportunities.
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