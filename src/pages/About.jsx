import { motion } from "framer-motion";
import { LightBulbIcon, ChartBarIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import SkillMarquee from "../components/SkillMarquee"; // Optional

const About = () => {
    const { t } = useTranslation();

    const letters = t("smarter").split("");

    return (
        <section className="mt-10 py-16 px-4 sm:px-6 lg:px-20 bg-black text-white">
            {/* Animated Header */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10 flex flex-wrap gap-3 items-center">
                <span className="text-gray-400">{t("code")}</span>
                <motion.span
                    className="inline-flex text-transparent stroke-white stroke-[1.5px] font-extrabold"
                    style={{ WebkitTextStroke: "1.5px white" }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {letters.map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>
            </h2>

            {/* Paragraph & Image */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-1">
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify max-w-5xl">
                        {t("about.description")}
                    </p>
                </div>
                <div className="w-full lg:w-auto lg:max-w-lg">
                    <img
                        src="/aboutTech.png"
                        alt="Developer profile"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
            </div>

            {/* Subheading */}
            <h1 className="mt-10 text-white text-4xl sm:text-8xl font-bold flex flex-wrap gap-2 items-center">
                {t("idea")}
                <motion.span
                    className="inline-flex text-transparent stroke-white stroke-[1.5px] font-extrabold"
                    style={{ WebkitTextStroke: "1.5px white" }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.3,
                            },
                        },
                    }}
                >
                    {t("flawlessly").split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>
                {t("executed")}
            </h1>

            {/* Icons & Cards */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {/* Design */}
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                        <LightBulbIcon className="h-10 w-10 text-teal-400" />
                        {t("design")}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        {t("designText")}
                    </p>
                </div>

                {/* Results */}
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                        <ChartBarIcon className="h-10 w-10 text-teal-400" />
                        {t("results")}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        {t("resultsText")}
                    </p>
                </div>

                {/* Collaboration */}
                <div className="bg-gray-800 p-4 rounded-2xl">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 flex items-center gap-4">
                        <UsersIcon className="h-10 w-10 text-teal-400" />
                        {t("collaboration")}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                        {t("collaborationText")}
                    </p>
                </div>
            </motion.div>

            {/* Optional: Skill Marquee */}
            <SkillMarquee />
        </section>
    );
};

export default About;














