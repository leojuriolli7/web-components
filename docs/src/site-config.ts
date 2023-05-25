export const siteConfig = {
  name: 'Web components',
  description:
    'Typescript React components library. Batteries included powered by PNPM Workspaces, Turborepo, tsup & Changesets.',
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs/introduction'
    }
  ],
  sidebarNav: [
    {
      title: 'Guides',
      items: [
        {
          title: 'Introduction',
          href: '/docs/introduction',
          items: []
        },
        {
          title: 'Project structure',
          href: '/docs/project-structure',
          items: []
        },
        {
          title: 'Running the project',
          href: '/docs/running-the-project',
          items: []
        },
        {
          title: 'Building & releasing',
          href: '/docs/release',
          items: []
        }
      ]
    }
  ],
  links: {
    github: 'https://github.com/leojuriolli7/web-components',
    docs: '/docs'
  }
}

export type SiteConfig = typeof siteConfig
