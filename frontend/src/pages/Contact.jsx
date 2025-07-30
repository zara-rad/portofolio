import React, { useState } from "react";
/* import ReCAPTCHA from "react-google-recaptcha"; */
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    /*     const [captchaValue, setCaptchaValue] = useState(null);
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        /*  if (!captchaValue) {
             alert(t("contact.pleaseCompleteCaptcha"));
             return;
         } */

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            /* http://localhost:5002 */
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message/* , token: captchaValue  */ }),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            alert(data.message);
            /*  setCaptchaValue(null); */
            e.target.reset();
        } catch (error) {
            alert(`${t("contact.error")}: ${error.message}`);
        }
    };

    return (
        <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24 ">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-5xl font-bold mb-4">{t("contact.title")}</h2>
                    <p className="text-gray-400 mb-8">{t("contact.subtitle")}</p>
                    <div className="flex items-center gap-4 mb-4">
                        <FaEnvelope className="text-xl text-teal-400" />
                        <a href="mailto:zahra.rafieirad1980@gmail.com" className="hover:underline">
                            zahra.rafieirad1980@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <FaPhone className="text-xl text-teal-400" />
                        <a href="tel:+17636385183" className="hover:underline">
                            (+49) 17636385183
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaMapMarkerAlt className="text-xl text-teal-400" />
                        <p>
                            Reinickendorf
                            <br />
                            Berlin, Germany
                        </p>
                    </div>
                    <div className="flex items-center gap-6 mt-6">
                        <a
                            href="https://github.com/zara-rad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 text-2xl"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/zahra-rafieirad/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 text-2xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        name="name"
                        type="text"
                        placeholder={t("Name")}
                        className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder={t("Email")}
                        className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t("Message")}
                        rows={4}
                        className="w-full bg-transparent border-b border-gray-600 py-2 outline-none placeholder:text-gray-400"
                        required
                    />
                    {/*  <ReCAPTCHA
                        sitekey="6LdkFEorAAAAAPbSgRp4rKXD3S9mPVh48e-DRCgF"
                        onChange={setCaptchaValue}
                        onExpired={() => setCaptchaValue(null)}
                        className="mt-6"
                    /> */}
                    <button
                        type="submit"
                        className="mt-4 px-6 py-2 border border-gray-400 rounded-full hover:bg-teal-600 hover:border-teal-600 transition"
                    >
                        {t("Submit")}
                    </button>
                </form>
            </div>
        </section>
    );
}







