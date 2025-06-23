import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        // Initialize from localStorage or system preference
        if (typeof window !== 'undefined') {
            return localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-700"
        >
            {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
