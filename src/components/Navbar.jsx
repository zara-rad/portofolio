import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const langMenuRef = useRef(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Left side - logo and nav links */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
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

                    {/* Right side - language dropdown only */}
                    <div className="flex items-center space-x-4 pr-2 sm:pr-0">
                        <div className="relative" ref={langMenuRef}>
                            <button
                                onClick={() => setLangMenuOpen(!langMenuOpen)}
                                className="inline-flex items-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
                                aria-haspopup="true"
                                aria-expanded={langMenuOpen}
                            >
                                {t('Languages')}
                                <svg
                                    className="ml-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {langMenuOpen && (
                                <div className="absolute right-0 mt-2 w-32 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20">
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={`block w-full px-4 py-2 text-left text-sm ${i18n.language === 'en' ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('de')}
                                        className={`block w-full px-4 py-2 text-left text-sm ${i18n.language === 'de' ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        Deutsch
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
