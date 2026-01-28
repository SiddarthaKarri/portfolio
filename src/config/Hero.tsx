import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb } from "react-icons/si";

export const heroConfig = {
    name: 'Siddartha',
    title: 'Full Stack Developer.',
    avatar: 'https://github.com/shadcn.png',

    skills: [
        {
            name: 'TypeScript',
            href: 'https://www.typescriptlang.org/',
            component: SiTypescript,
        },
        {
            name: 'React',
            href: 'https://react.dev/',
            component: SiReact,
        },
        {
            name: 'Next.js',
            href: 'https://nextjs.org/',
            component: SiNextdotjs,
        },
        {
            name: 'PostgreSQL',
            href: 'https://www.postgresql.org/',
            component: SiPostgresql,
        },
    ],

    description: {
        template:
            "I build interactive web apps using {skills:0}, {skills:1}, {skills:2} and {skills:3}. With a focus on <b>UI</b> design. Enthusiastic about <b>Competitive Programming</b>, driven by a keen eye for details.",
    },

    buttons: [
        {
            variant: 'outline',
            text: 'Resume / CV',
            href: '/resume.pdf',
            icon: 'CV',
        },
        {
            variant: 'default',
            text: 'Get in touch',
            href: 'mailto:siddarthak03@gmail.com',
            icon: 'Chat',
        },
    ],
};

export const socialLinks = [
    {
        name: 'Github',
        href: 'https://github.com/siddarthakarri',
        icon: <FaGithub />,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/siddarthakarri',
        icon: <FaLinkedin />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/IamSiddarthaK',
        icon: <FaTwitter />,
    },
    {
        name: 'Email',
        href: 'mailto:siddarthak03@gmail.com',
        icon: <FaEnvelope />,
    },
];
