# @solana/ms-scaffold-kit

A modern, type-safe scaffold kit for building Solana microsites and applications.

## Prerequisites

- Node.js 20 or later
- pnpm 10.11.0 or later

## Installation

This project uses private packages from the GitHub registry. To install dependencies:

1. Create a GitHub Personal Access Token (PAT) with `read:packages` scope
1. Login to pnpm with your GitHub (classic) token:

```shell
pnpm login --registry=https://npm.pkg.github.com
```

1. Run the installation:

```shell
GITHUB_TOKEN=your_github_pat_here pnpm install
```

## Environment Setup

The environment schema is described via Zod in `env.mjs`. Make sure to add all necessary variables to your `.env` file.

## Development

```shell
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build
```

## Project Structure

```text
src/
  ├── components/     # React components
  ├── constants/      # Constants and configuration
  ├── sanity/        # Sanity CMS integration
  ├── types/         # TypeScript type definitions
  └── utils/         # Utility functions
```

## Features

- Next.js 15.3 with App Router
- TypeScript
- Sanity CMS integration
- Internationalization support
- Storybook
- Vitest for testing
- ESLint + Prettier

## License

Private
