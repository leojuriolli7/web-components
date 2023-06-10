# Web Components library

TypeScript React components library monorepo.

- 🏎 [Turborepo](https://turbo.build/repo) — High-performance build system for Monorepos.
- 🚀 [React](https://reactjs.org/) — JavaScript library for user interfaces.
- 🛠 [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild.
- 🛠 [pnpm](https://github.com/pnpm/pnpm) — Fast, disk space efficient package manager.
- 🛠 [pnpm workspaces](https://pnpm.io/workspaces) — Built-in support for monorepos. A single workspace to unite multiple projects inside a single repo.

As well as a few others tools preconfigured:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) & [manypkg](https://github.com/Thinkmill/manypkg) for code linting.
- [Prettier](https://prettier.io) for code formatting.
- [Changesets](https://github.com/changesets/changesets) for managing versioning and changelogs.
- [GitHub Actions](https://github.com/changesets/action) for fully automated package publishing.

By using pnpm and turbo, we have access to **powerful and efficient caching on the cloud for our builds on Github Actions.**

## Highlights
- **Performant: By porting an 80k lines React components library from Rollup, babel and webpack to this setup, build time went from 18 minutes to only 20 seconds.**
- Changesets configured for version control and alpha releases.
- Github actions for publishing new versions, with caching for increased performance.
- tsup fully configured for a React components library use-case.
- Documentation project ready with Tailwind and MDX.
- Example Next.js project ready.

This repo was created as a POC and had to be downgraded to Next.js 12 & fitted with `styled-components` at one point, but to access it before these changes: https://github.com/leojuriolli7/web-components/tree/c28674b601307bb6d64d54adcc327eabc123b233
