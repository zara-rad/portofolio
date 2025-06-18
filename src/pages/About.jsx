import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-[#121212] text-white py-20 px-6 sm:px-12 lg:px-24 min-h-[calc(100vh-100px)] flex items-center">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h1 className="text-5xl font-bold mb-8">{t('about.title')}</h1>
                <p className="text-lg text-gray-300 leading-relaxed">{t('about.description')}</p>
            </div>
        </section>
    );
};

export default About;
