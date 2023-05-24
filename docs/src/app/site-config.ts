export const siteConfig = {
  name: "Web components",
  description:
    "Typescript React components library. Batteries included powered by PNPM Workspaces, Turborepo, tsup & Changesets.",
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/introduction",
    },
  ],
  sidebarNav: [
    {
      title: "Monorepo Setup",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Release",
          href: "/docs/release",
          items: [],
        },
      ],
    },
    {
      title: "Prisma Generator",
      items: [
        {
          title: "Generator",
          href: "/docs/generator",
          items: [],
        },
        {
          title: "Eslint Plugin",
          href: "/docs/eslint",
          items: [],
        },
      ],
    },
  ],
  links: {
    github: "https://github.com/leojuriolli7/web-components",
    docs: "/docs",
  },
};

export type SiteConfig = typeof siteConfig;
