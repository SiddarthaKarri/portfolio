import { SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiNodedotjs, SiTailwindcss } from "react-icons/si";

export interface Technology {
    name: string;
    href: string;
    icon: any; // Using simplified type for react-icons
}

export interface Experience {
    company: string;
    position: string;
    location: string;
    image: string;
    description: string[];
    startDate: string;
    endDate: string;
    website: string;
    technologies: Technology[];
    isCurrent: boolean;
    isBlur?: boolean;
    github?: string;
    linkedin?: string;
    x?: string;
}

export const experiences: Experience[] = [
    {
        isCurrent: true,
        isBlur: false,
        company: 'IIT Ropar - Winter Internship',
        position: 'Full Stack Web Developer Intern',
        location: 'Remote',
        image: 'https://www.iitrpr.ac.in/static/media/logo.a92a57bab4085ce17521.png', // Placeholder
        description: [
            'Developed a full-stack web application using REACT and NODE.',
        ],
        startDate: 'Jan 2026',
        endDate: 'March 2026',
        website: 'https://www.iitrpr.ac.in/',
        technologies: [
            { name: 'React', href: 'https://reactjs.org', icon: <SiReact /> },
            { name: 'Node.js', href: 'https://nodejs.org', icon: <SiNodedotjs /> },
        ],
    },
    {
        isCurrent: false,
        isBlur: false,
        company: 'Kalam Dream Labs',
        position: 'Web Developer Intern',
        location: 'Onsite',
        image: 'https://test.kalamlabs.com/images/site-images/logo-kdl_tpumzra0r.png', // Placeholder
        description: [
            'Built reusable CMS modules for blog and admin panels.',
            'Optimized backend queries, improving API response time by ~35%.',
        ],
        startDate: 'May 2025',
        endDate: 'June 2025',
        website: 'https://kalamdreamlabs.com',
        technologies: [
            { name: 'Next.js', href: 'https://nextjs.org', icon: <SiNextdotjs /> },
            { name: 'Node.js', href: 'https://nodejs.org', icon: <SiNodedotjs /> },
        ],
    },
    // {
    //     isCurrent: false,
    //     company: 'Gayatri Vidya Parishad',
    //     position: 'B.Tech in CSE',
    //     location: 'Visakhapatnam',
    //     image: '',
    //     description: [
    //         'CGPA: 9.62/10. Completed all core subjects with distinction.',
    //         'Specialized in Data Structures, Algorithms, and Web Technologies.',
    //     ],
    //     startDate: '2023',
    //     endDate: '2027',
    //     website: 'https://gvpce.ac.in',
    //     technologies: [
    //         { name: 'C++', href: '', icon: <SiTypescript /> }, // Placeholder icon
    //     ],
    // },
];
