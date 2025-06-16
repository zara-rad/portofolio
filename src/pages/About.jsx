import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="min-h-screen bg-white py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                    {t('about.title')}
                </h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.description')}
                </p>
            </div>
        </section>
    );
};

export default About;



/* import React from 'react';

const About = () => {
    return (
        <section>
            <h1>About Me</h1>
            <p>Hello! I’m a passionate Persian woman with a diverse background in chemistry, interior design, and web development. After completing my studies in chemistry, I discovered my love for creativity and design, which led me to pursue interior design and later, a one-year web development course at DCI.
                I’m fluent in English (C1) and German (B2), and I thrive in collaborative team environments. My flexibility, responsibility, and punctuality make me a reliable team member who always delivers quality work on time.
                Creating is at the heart of everything I do. Whether I’m painting or designing a website, I channel my emotions and energy into crafting something new, beautiful, and meaningful. I’m eager to bring this passion and dedication to new projects and am available to start working immediately.
                Let’s create something amazing together!

            </p>
        </section>
    );
};

export default About; */
