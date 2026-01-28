import { Project } from "@/types/project";
import { SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss, SiMongodb } from "react-icons/si";

export const projects: Project[] = [
    {
        title: 'AlgoGeeks',
        description:
            'A full-stack MERN coding platform for GVPCE College featuring a custom judge, live rankings, and Docker-sandboxed C++ code execution.',
        image: '/project/algogeeks.png',
        link: 'https://algogeeks.vercel.app/',
        technologies: [
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
        github: 'https://github.com/siddarthakarri',
        live: 'https://algogeeks.vercel.app/',
        details: true,
        projectDetailsPageSlug: '/projects/algogeeks',
        isWorking: true,
    },
    {
        title: 'JobMate AI',
        description:
            'An AI-powered job application helper that parses resumes and tailors cover letters.',
        image: '/project/jobmateai.png', // Placeholder
        link: 'https://job-mateai.vercel.app/',
        technologies: [
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Gemini', icon: <SiReact /> }, // Placeholder
        ],
        github: 'https://github.com/siddarthakarri',
        live: 'https://job-mateai.vercel.app/',
        details: true,
        projectDetailsPageSlug: '/projects/jobmate-ai',
        isWorking: true,
    },
    {
        title: 'LeetForces',
        description:
            'A competitive programming dashboard integrating LeetCode and Codeforces stats.',
        image: '/project/leetforces.png',
        link: 'https://siddarthakarri.github.io/LeetForces/',
        technologies: [
            { name: 'React', icon: <SiReact /> },
            { name: 'API', icon: <SiTypescript /> },
        ],
        github: 'https://github.com/siddarthakarri',
        live: 'https://siddarthakarri.github.io/LeetForces/',
        details: true,
        projectDetailsPageSlug: '/projects/leetforces',
        isWorking: true,
    },
];
