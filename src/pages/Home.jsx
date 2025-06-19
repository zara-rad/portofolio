import React from 'react';
import { useTranslation } from 'react-i18next';
import myImage from '../assets/myimg.jpg';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24 min-h-[calc(100vh-100px)] flex items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
                {/* Left side - rounded image */}
                <div className="flex justify-center">
                    <img
                        src={myImage}
                        alt="My design"
                        className="w-56 h-65 object-cover rounded-full border-4 border-teal-400 shadow-lg"
                    />
                </div>

                {/* Right side - text */}
                <div>
                    <h1 className="text-5xl font-bold mb-6">{t('home.title')}</h1>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {t('home.description')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
