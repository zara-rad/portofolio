import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    };

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    {/* Left side - logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">


                        {/* Nav links */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link
                                    to="/"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {t('Home')}
                                </Link>
                                <Link
                                    to="/about"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {t('About')}
                                </Link>
                                <Link
                                    to="/skills"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {t('Skills')}
                                </Link>
                                <Link
                                    to="/projects"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {t('Projects')}
                                </Link>
                                <Link
                                    to="/contact"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                >
                                    {t('Contact')}
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right side - language toggle */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button
                            onClick={toggleLanguage}
                            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                        >
                            {t('Languages')}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;











/* import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
    };

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/about">{t('nav.about')}</Link></li>
                <li><Link to="/skills">{t('nav.skills')}</Link></li>
                <li><Link to="/projects">{t('nav.projects')}</Link></li>
                <li><Link to="/contact">{t('nav.contact')}</Link></li>
            </ul>
            <button onClick={toggleLanguage}>{t('nav.language')}</button>
        </nav>
    );
};

export default Navbar;
 */