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
                    about: {
                        title: "About Me",
                        description: "Hello! I’m a passionate Persian woman with a diverse background in chemistry, interior design, and web development. After completing my studies in chemistry, I discovered my love for creativity and design, which led me to pursue interior design and later, a one-year web development course at DCI. I’m fluent in English (C1) and German (B2), and I thrive in collaborative team environments. My flexibility, responsibility, and punctuality make me a reliable team member who always delivers quality work on time. Creating is at the heart of everything I do. Whether I’m painting or designing a website, I channel my emotions and energy into crafting something new, beautiful, and meaningful. I’m eager to bring this passion and dedication to new projects and am available to start working immediately. Let’s create something amazing together!"
                    }
                }
            },
            de: {
                translation: {
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
                    about: {
                        title: "Über mich",
                        description: "Hallo! Ich bin eine leidenschaftliche Perserin mit einem vielfältigen Hintergrund in Chemie, Innenarchitektur und Webentwicklung. Nach meinem Chemiestudium entdeckte ich meine Liebe zur Kreativität und zum Design, was mich zur Innenarchitektur und später zu einem einjährigen Webentwicklungskurs bei DCI führte. Ich spreche fließend Englisch (C1) und Deutsch (B2) und blühe in kollaborativen Teamumgebungen auf. Meine Flexibilität, Verantwortungsbewusstsein und Pünktlichkeit machen mich zu einem zuverlässigen Teammitglied, das stets qualitativ hochwertige Arbeit rechtzeitig abliefert. Kreativität steht im Mittelpunkt meines Handelns. Ob beim Malen oder beim Entwerfen einer Website – ich stecke meine Emotionen und Energie in etwas Neues, Schönes und Sinnvolles. Ich freue mich darauf, diese Leidenschaft und Hingabe in neue Projekte einzubringen und bin sofort einsatzbereit. Lass uns gemeinsam etwas Großartiges schaffen!"
                    }

                },
            },
        },
    });

export default i18n;
