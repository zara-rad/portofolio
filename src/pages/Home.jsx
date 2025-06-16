import React from 'react';
import { useTranslation } from 'react-i18next';
import myImage from '../assets/Untitled design.png';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen flex items-center bg-gray-50 p-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

                {/* Left side - image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={myImage}
                        alt="My design"
                        className="rounded-lg shadow-lg border border-gray-300 max-w-full h-auto"
                    />
                </div>

                {/* Right side - text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold mb-6 text-gray-900 font-serif">
                        {t('home.title')}
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-lg">
                        {t('home.description')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;


/* import myImage from '../assets/Untitled design.png';

const Home = () => (
    <section className="min-h-screen flex items-center bg-gray-50 p-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">


            <div className="md:w-1/2 flex justify-center">
                <img
                    src={myImage}
                    alt="My design"
                    className="rounded-lg shadow-lg border border-gray-300 max-w-full h-auto"
                />
            </div>


            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl font-extrabold mb-6 text-gray-900 font-serif">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-lg">
                    I’m a passionate interior designer, web developer, and creative spirit who loves bringing ideas to life.
                    Every project is an opportunity to combine my technical skills and artistic vision to create something unique and meaningful.
                </p>
            </div>
        </div>
    </section>
);

export default Home; */
