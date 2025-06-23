import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            title: t("projects.hotel.title"),
            description: t("projects.hotel.description"),
            image: "/hotel.png",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
            github: "https://github.com/zara-rad/Mern-Stack-Hotel-Booking",
            live: "https://hotel-booking-mern-stack-1.onrender.com/#/"
        },
        {
            title: t("projects.museum.title"),
            description: t("projects.museum.description"),
            image: "/museum.png",
            tech: ["React", "Framer Motion", "Sanity CMS", "Tailwind CSS"],
            github: "#",
            live: "https://museumsphere.netlify.app/"
        },
        {
            title: t("projects.movie.title"),
            description: t("projects.movie.description"),
            image: "/movie-app.png",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
            github: "https://github.com/zara-rad/Full-Stack-Movie-App",
            live: "#"
        },
        {
            title: t("projects.ecommerce.title"),
            description: t("projects.ecommerce.description"),
            image: "/ecomerce.png",
            tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
            github: "https://github.com/zara-rad/E-Commerce-App",
            live: "https://e-commerce-app-terv.onrender.com"
        },
        {
            title: t("projects.portofoilio.title"),
            description: t("projects.portofoilio.description"),
            image: "/portofoilio.png",
            tech: ["React", "Framer Motion", "nodemailer", "Tailwind CSS"],
            github: "https://github.com/zara-rad/Portofoilio",
            live: "#"
        }
    ];

    return (
        <section className="bg-black text-white py-12 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center">
                    Code. Joy. <span className="text-teal-400">Repeat.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                            <div className="p-10 flex flex-col flex-grow">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-emerald-600 text-white px-2 py-1 text-xs rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} className="hover:text-teal-400" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={18} />
                                    </a>
                                    <a href={project.live} className="hover:text-teal-400" target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
