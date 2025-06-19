export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white">
                <div className="container mx-auto px-4 py-12 flex justify-center">
                    <div>
                        <ul className="space-y-2 text-center">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/skills"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
