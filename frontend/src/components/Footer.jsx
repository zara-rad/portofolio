export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-6 px-4">
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
                                    href="/about"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    About
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
                            <li>
                                <a
                                    href="/contact"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Contact
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
