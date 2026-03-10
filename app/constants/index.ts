import type { TimelineItem } from "types";
import { bitbucket, chat, css, docker, express, git, github, gps, html, inventory, laravel, map, mongodb, mysql, php, postgres, react, redux, sass, tailwindcss, vue, typescript, javascript, nodejs, reactnative } from "~/assets/icons";
import { altest, max4, nutrimind, snoopy, flutter } from "~/assets/images";

export const experiences: TimelineItem[] = [
    {
        company: "SnoopyLabs",
        position: "Full Stack Developer",
        icon: snoopy,
        iconBg: "#cdb4db",
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
        iconBg: "#FFFEEE",
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
        iconUrl: map,
        theme: "btn-back-red",
        name: "GanTrack",
        description: "Full Stack system that register data received from GPS devices and renders the position and other information given on a map",
        link: "",
    },
    {
        iconUrl: inventory,
        theme: "btn-back-blue",
        name: "Inventory Management System",
        description: "Developed web and mobile applications to manage items in inventories with the printing of RadioFrequency Tags that allows radio-localization of tagged items via specialized hardware",
        link: "",
    },
    {
        iconUrl: gps,
        theme: 'btn-back-black',
        name: 'Real-time Alerting System',
        description: 'Built a web application to manage radiofrequency devices with security purposes that also allows the authorized users to see real-time alerts when assets of interest are detected',
        link: "",
    },
    {
        iconUrl: chat,
        theme: 'btn-back-green',
        name: 'Massive SMS Sending System',
        description: 'Developed a full-stack solution for sending, monitoring and managing of massive SMS campaigns',
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