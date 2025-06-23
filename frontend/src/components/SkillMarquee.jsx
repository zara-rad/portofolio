import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", logo: "/html.png" },
    { name: "CSS", logo: "/css.png" },
    { name: "JavaScript", logo: "/js.png" },
    { name: "React", logo: "/react.png" },
    { name: "Node.js", logo: "/node.png" },
    { name: "Tailwind", logo: "/tailwind.png" },
];

const SkillMarquee = () => {
    return (
        <section className="bg-black py-16 px-4">
            <h2 className="text-4xl sm:text-6xl text-white font-bold mb-10 text-center">
                My Tech Stack
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6 sm:gap-10"
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-28 h-28 sm:w-36 sm:h-36 bg-[#111] rounded-3xl flex flex-col items-center justify-center border border-gray-700 shadow-lg"
                    >
                        <img
                            src={skill.logo}
                            alt={skill.name}
                            className="h-10 w-10 sm:h-14 sm:w-14 mb-2"
                        />
                        <p className="text-white text-xs sm:text-sm text-center">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default SkillMarquee;
