import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const langMenuRef = useRef(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
        setMobileMenuOpen(false);
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
        <nav className="bg-black sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex-shrink-0 text-white font-bold text-xl">
                        Zahra Rafieirad
                    </div>

                    <div className="hidden md:flex md:space-x-6">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t(item)}
                            </Link>
                        ))}
                    </div>

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
                                    className={`block w-full px-4 py-2 text-left text-sm ${i18n.language === 'en' ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => changeLanguage('de')}
                                    className={`block w-full px-4 py-2 text-left text-sm ${i18n.language === 'de' ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}
                                >
                                    Deutsch
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-800">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t(item)}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;








