export interface NavItem {
    label: string;
    href: string;
}

export const navbarConfig = {
    logo: {
        src: 'https://github.com/shadcn.png',
        alt: 'logo',
        width: 60,
        height: 60,
    },
    navItems: [
        {
            label: 'Work',
            href: '/work-experience',
        },
        // {
        //     label: 'Blogs',
        //     href: '#blogs',
        // },
        {
            label: 'Projects',
            href: '/projects',
        },
    ] as NavItem[],
};
