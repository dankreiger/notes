# Hear

## Getting Started

```sh
npm install
npm run dev

# follow the prompt
```

## Note

- The security vulnerabilities upon running `npm install` are from storybook.
- The deprecation outputs upon running the `shared-ui` storybook are from storybook.

These points cannot be easily mitigated until storybook updates their dependencies.

## Development server

Run `nx serve songs` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
