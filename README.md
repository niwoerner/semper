# Semper

## Development

Requires Node.js 22.19 or newer. Install dependencies from the repository root:

```sh
npm install
```

Run the quickstart from the repository root:

```sh
npm run start
```

On first launch, open the printed URL and sign in with ChatGPT. Credentials are
saved in `state/auth.json`. The installation UUID is generated automatically
and saved in `state/settings.json`. Both files are excluded from Git. Later launches reuse
the credentials, and Pi refreshes expiring tokens automatically. The file
contains plaintext tokens and should stay private.

Build and lint all packages without running the quickstart:

```sh
npm run build
npm run lint
```

`npm run lint:fix` applies available automatic fixes. Oxlint uses the shared `base` preset from `@niwoerner/oxlint-rules`, configured at the repository root. GitHub Actions runs installation, build, and lint checks on pull requests to `main` using GitHub-hosted Ubuntu runners.

## Packages

- `@semper/agent-core`: the pi-durable quickstart with persistent ChatGPT authentication. Its entry point executes the example, including when imported.
- `@semper/agents`: placeholder for agent implementations that depend on `@semper/agent-core`.

Each package compiles `src/` into its own `dist/` and exports JavaScript and type declarations. Shared compiler settings live in `tsconfig.base.json`; project references build packages in dependency order. The quickstart is `packages/agent-core/src/index.ts`.
