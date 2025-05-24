export default function Footer() {
    return (
        <>
            <footer className="bg-[#232323] text-white">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <ul className="space-y-2">
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
                </div>
            </footer>
        </>
    );
}









