/* import React from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; */
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import hotelImg from '../assets/hotel.png'; // Make sure this path is correct

const projects = [
    {
        title: "Hotel Landing Page",
        description: "A full-stack hotel booking platform with user authentication, search filters, and responsive design.",
        image: hotelImg,
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "Multinational Museum",
        description: "A React application developed with vite,featuring a booking component.",
        image: hotelImg,
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "Movie App",
        description: "A full-stack hotel booking platform with user authentication, search filters, and responsive design.",
        image: hotelImg,
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    {
        title: "E-Commerce website",
        description: "A full-stack hotel booking platform with user authentication, search filters, and responsive design.",
        image: hotelImg,
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        github: "#",
        live: "#"
    },
    // Add more projects as needed...
];

const Projects = () => {
    return (
        <section className="bg-black text-white py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center">
                    Code. Joy. <span className="text-teal-400">Repeat.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                </div>

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

