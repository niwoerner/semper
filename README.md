# Semper

## Development

Requires Node.js 22.19 or newer. Install dependencies from the repository root:

```sh
npm install
```

Set `OPENAI_API_KEY` in your environment, then build both packages and run the quickstart:

```sh
npm run start
```

## Packages

- `@semper/agent-core`: the unmodified pi-durable quickstart. Its entry point executes the example, including when imported.
- `@semper/agents`: placeholder for agent implementations that depend on `@semper/agent-core`.

Each package compiles `src/` into its own `dist/` and exports JavaScript and type declarations. Shared compiler settings live in `tsconfig.base.json`; project references build packages in dependency order. The quickstart is `packages/agent-core/src/index.ts`.
