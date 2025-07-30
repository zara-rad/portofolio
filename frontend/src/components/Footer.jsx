import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-black text-white py-6 px-4">
                <div className="container mx-auto px-4 py-12 flex justify-center">
                    <div>
                        <ul className="space-y-2 text-center">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/projects"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-300 hover:text-[#8E7037] transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}
