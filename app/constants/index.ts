import type { TimelineItem } from "types";
import { bitbucket, chat, css, docker, express, git, github, gps, html, inventory, laravel, map, mongodb, mysql, php, postgres, react, redux, sass, tailwindcss, vue, typescript, javascript, nodejs, reactnative, appseguimiento, mms } from "~/assets/icons";
import { altest, max4, nutrimind, snoopy, flutter } from "~/assets/images";

export const experiences: TimelineItem[] = [
    {
        company: "SnoopyLabs",
        position: "Full Stack Developer",
        icon: snoopy,
        iconBg: "#ac1dff",
        date: "Jun 2019 - Jun 2020",
        points: [
            "Developing real-time web applications using Node.js and vanilla Javascript",
            "Collaborating with cross-functional multi-disciplinary teams including electronic engineers, telecommunications experts, product owners, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility implementing Server Side Rendering",
        ],
    },
    {
        company: "ALTEST",
        position: "Front End Developer",
        icon: altest,
        iconBg: "#39312F",
        date: "Jun 2019 - Jun 2020",
        points: [
            "Developing and maintaining web applications using React.js, Vue.js and mobile apps using Flutter.",
            "Collaborating with cross-functional teams including back end developers, product owners, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        company: "Max4Technologies",
        position: "Full Stack Developer",
        icon: max4,
        iconBg: "#004365",
        date: "Jan 2023 - Jun 2025",
        points: [
            "Developing and maintaining applications using Laravel, Vue.js, vanilla Javascript and Flutter for mobile apps.",
            "Collaborating with cross-functional teams including product owners, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Implementing code reviews and providing tests pre-deployment to avoid risks in applications with high volumes of data",
        ],
    },
    {
        company: "Nutrimind",
        position: "Full Stack Developer",
        icon: nutrimind,
        iconBg: "#a3f500",
        date: "Jun 2025 - Nov 2025",
        points: [
            "Developing and maintaining web applications using Laravel, CodeIgniter, PHP, HTML, Javascript and mobile apps using React Native with Expo.",
            "Collaborating with cross-functional teams including designers, product owners, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const projects = [
    {
        iconUrl: appseguimiento,
        theme: 'btn-back-black',
        name: 'Nutrimind App de Seguimiento',
        description: 'Built a react-native application for iOS and Android to manage the appointments and follow-ups of a nutrition consulting company, with features like notifications, calendar integration and a custom CMS for content management',
        link: "https://play.google.com/store/apps/details?id=nutrimind.net.paginapaciente&hl=es_MX",
    },
    {
        iconUrl: nutrimind,
        theme: 'btn-back-black',
        name: 'Nutrimind landing and payment web page',
        description: 'Built web pages for the landing and payment of a nutrition consulting company, using Laravel and React, with a custom CMS for content management',
        link: "https://www.nutrimind.net/",
    },
    {
        iconUrl: mms,
        theme: 'btn-back-white',
        name: 'Massive SMS Sending System',
        description: "Built full stack solutions to update and optimize the process of sending massive campaings over SMS for a telecommunications company, using Laravel and VUE, with a custom CMS for content management and scheduling of messages",
        link: "https://masmensajes.mx/",
    },
    {
        iconUrl: gps,
        theme: 'btn-back-red',
        name: 'Real-time Alerting System (SIMOPO)',
        description: 'Built a web application to manage specialized radiofrequency devices which allows the authorized users to see real-time alerts when assets of interest are detected',
        link: "",
    },
    {
        iconUrl: inventory,
        theme: "btn-back-blue",
        name: "Inventory Management System (SICAF)",
        description: "Web and mobile applications for inventory management, allowing users to track and manage their inventory efficiently through specialized hardware for the Autonomous University of Zacatecas",
        link: "",
    },
    {
        iconUrl: map,
        theme: "btn-back-green",
        name: "ColTrack",
        description: "Full Stack system that register data received from GPS devices and renders the position and useful information on a map",
        github: "https://github.com/ContrerasHDaniel/coltrack",
        link: "",
    },
];

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Server Virtualization",
    },
    {
        imageUrl: reactnative,
        name: "React Native",
        type: "Mobile Development",
    },
    {
        imageUrl: vue,
        name: "VueJs",
        type: "Frontend"
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
];

export const alsoworked = [
    {
        imageUrl: flutter,
        name: "Flutter",
        type: "Mobile",
    },
    {
        imageUrl: postgres,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: bitbucket,
        name: "Bitbucket",
        type: "Version Control",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];