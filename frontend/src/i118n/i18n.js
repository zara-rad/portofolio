import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    code: "Code",
                    smarter: "Smarter",
                    idea: "Idea",
                    flawlessly: "Flawlessly",
                    executed: "Executed",

                    design: "Design",
                    designText: "Design is more than aesthetics—it's about connection and function. It shapes how we experience the world, how we interact with technology, and how we relate to ideas. I believe good design is invisible, purposeful, and always user-centered.",

                    results: "Results",
                    resultsText: "I’m results-driven and thrive on delivering work that reflects both vision and quality. Whether through code, design, or collaboration, my goal is always the same—build outcomes that perform, inspire, and make a real impact.",

                    collaboration: "Collaboration",
                    collaborationText: "Throughout my journey, I’ve built strong relationships with professionals across design, development, and marketing. I believe in the power of collaboration to bring a project’s vision to life—no matter the tools or expertise required. Great things are built together.",

                    about: {
                        title: "About Me",
                        description: "Hello! I’m a passionate Persian woman with a diverse background in chemistry, interior design, and web development. After completing my studies in chemistry, I discovered my love for creativity and design, which led me to pursue interior design and later, a one-year web development course at DCI. I’m fluent in English (C1) and German (B2), and I thrive in collaborative team environments. My flexibility, responsibility, and punctuality make me a reliable team member who always delivers quality work on time. Creating is at the heart of everything I do. Whether I’m painting or designing a website, I channel my emotions and energy into crafting something new, beautiful, and meaningful. I’m eager to bring this passion and dedication to new projects and am available to start working immediately. Let’s create something amazing together!"
                    },

                    Home: 'Home',
                    About: 'About',
                    Skills: 'Skills',
                    Projects: 'Projects',
                    Contact: 'Contact',
                    Languages: 'Languages',

                    home: {
                        title: 'Welcome to My Portfolio',
                        description: 'I’m a passionate interior designer, web developer, and creative spirit who loves bringing ideas to life. Every project is an opportunity to combine my technical skills and artistic vision to create something unique and meaningful.'
                    },

                    projects: {
                        hotel: {
                            title: "Hotel Landing Page",
                            description: "A full-stack hotel booking platform with user authentication, search filters, and responsive design."
                        },
                        museum: {
                            title: "Multinational Museum",
                            description: "A React application developed with Vite, featuring a booking component."
                        },
                        movie: {
                            title: "Movie App",
                            description: "A React movie application developed with Vite and styled with Tailwind CSS."
                        },
                        ecommerce: {
                            title: "E-Commerce Website",
                            description: "A full-stack e-commerce solution with authentication, product search, and responsive design."
                        },
                        portofoilio: {
                            title: "Portfolio Website",
                            description: "A responsive portfolio built with React, Framer Motion, Tailwind CSS, and Nodemailer. It showcases my design, frontend, and communication skills through engaging animations and multi-language support."
                        }

                    },

                    contact: {
                        title: "Let's Chat",
                        subtitle: "No bites. No bugs. Just bytes.",
                        name: "Name",
                        email: "Email",
                        message: "Message",
                        submit: "Submit",
                        pleaseCompleteCaptcha: "Please complete the reCAPTCHA.",
                        error: "Error"
                    },


                }
            },
            de: {
                translation: {
                    code: "Code",
                    smarter: "Klüger",
                    idea: "Idee",
                    flawlessly: "Makellos",
                    executed: "Umgesetzt",

                    design: "Design",
                    designText: "Design ist mehr als nur Ästhetik – es geht um Verbindung und Funktion. Es prägt unsere Erfahrungen, unseren Umgang mit Technologie und unsere Beziehung zu Ideen. Gutes Design ist unsichtbar, zielgerichtet und immer benutzerzentriert.",

                    results: "Ergebnisse",
                    resultsText: "Ich bin ergebnisorientiert und liebe es, Arbeit zu liefern, die sowohl Vision als auch Qualität widerspiegelt. Ob durch Code, Design oder Zusammenarbeit – mein Ziel ist es immer, Ergebnisse zu schaffen, die funktionieren, inspirieren und echten Einfluss haben.",

                    collaboration: "Zusammenarbeit",
                    collaborationText: "Während meiner Reise habe ich starke Beziehungen zu Fachleuten in Design, Entwicklung und Marketing aufgebaut. Ich glaube an die Kraft der Zusammenarbeit, um die Vision eines Projekts zum Leben zu erwecken – unabhängig von Tools oder Fachkenntnissen. Großartige Dinge entstehen gemeinsam.",

                    about: {
                        title: "Über mich",
                        description: "Hallo! Ich bin eine leidenschaftliche Perserin mit einem vielfältigen Hintergrund in Chemie, Innenarchitektur und Webentwicklung. Nach meinem Chemiestudium entdeckte ich meine Liebe zur Kreativität und zum Design, was mich zur Innenarchitektur und später zu einem einjährigen Webentwicklungskurs bei DCI führte. Ich spreche fließend Englisch (C1) und Deutsch (B2) und blühe in kollaborativen Teamumgebungen auf. Meine Flexibilität, Verantwortungsbewusstsein und Pünktlichkeit machen mich zu einem zuverlässigen Teammitglied, das stets qualitativ hochwertige Arbeit rechtzeitig abliefert. Kreativität steht im Mittelpunkt meines Handelns. Ob beim Malen oder beim Entwerfen einer Website – ich stecke meine Emotionen und Energie in etwas Neues, Schönes und Sinnvolles. Ich freue mich darauf, diese Leidenschaft und Hingabe in neue Projekte einzubringen und bin sofort einsatzbereit. Lass uns gemeinsam etwas Großartiges schaffen!"
                    },

                    Home: 'Startseite',
                    About: 'Über mich',
                    Skills: 'Fähigkeiten',
                    Projects: 'Projekte',
                    Contact: 'Kontakt',
                    Languages: 'Sprachen',

                    home: {
                        title: 'Willkommen in meinem Portfolio',
                        description: 'Ich bin eine leidenschaftliche Innenarchitektin, Webentwicklerin und kreative Seele, die es liebt, Ideen zum Leben zu erwecken. Jedes Projekt ist eine Gelegenheit, meine technischen Fähigkeiten und meine künstlerische Vision zu kombinieren, um etwas Einzigartiges und Bedeutungsvolles zu schaffen.'
                    },

                    projects: {
                        hotel: {
                            title: "Hotel-Landingpage",
                            description: "Eine Full-Stack-Hotelbuchungsplattform mit Benutzer-Authentifizierung, Suchfiltern und responsivem Design."
                        },
                        museum: {
                            title: "Multinationales Museum",
                            description: "Eine React-Anwendung, entwickelt mit Vite, mit einer Buchungskomponente."
                        },
                        movie: {
                            title: "Movie-App",
                            description: "Eine React-Film-App, entwickelt mit Vite und gestylt mit Tailwind CSS."
                        },
                        ecommerce: {
                            title: "E-Commerce-Website",
                            description: "Eine Full-Stack-E-Commerce-Lösung mit Authentifizierung, Produktsuche und responsivem Design."
                        },
                        portofoilio: {
                            title: "Portfolio-Website",
                            description: "Ein responsives Portfolio, entwickelt mit React, Framer Motion, Tailwind CSS und Nodemailer. Es zeigt meine Fähigkeiten in Design, Frontend und Kommunikation durch ansprechende Animationen und Mehrsprachigkeit."
                        }

                    },

                    contact: {
                        title: "Lass uns plaudern",
                        subtitle: "Keine Bisse. Keine Bugs. Nur Bytes.",
                        name: "Name",
                        email: "E-Mail",
                        message: "Nachricht",
                        submit: "Absenden",
                        pleaseCompleteCaptcha: "Bitte vervollständigen Sie das reCAPTCHA.",
                        error: "Fehler"
                    }
                }
            }
        }
    });

export default i18n;
