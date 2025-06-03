# @solana/ms-scaffold-kit

A modern, type-safe scaffold kit for building Solana microsites and applications.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/solana-foundation/solana-ms-scaffold-kit)

## Quick Start

The fastest way to get started is using [degit](https://github.com/Rich-Harris/degit) to create a new project:

```shell
# Install degit globally if you haven't already
npm install -g degit

# Create a new project
degit solana-foundation/solana-ms-scaffold-kit my-solana-app

# Navigate to the project
cd my-solana-app

# Install dependencies (see Installation section for GitHub PAT setup)
GITHUB_TOKEN=your_github_pat_here pnpm install

# Start development server
pnpm dev
```

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

The environment schema is described via Zod in `env.mjs`. Make sure to add all necessary variables to your `.env` file. For detailed environment configuration, see [Environment Variables Documentation](docs/env.md).

## Development

```shell
# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Deploy Sanity Studio
pnpm sanity:deploy
```

## Project Structure

```text
src/
  ├── components/   # React components
  ├── constants/    # Constants and configuration
  ├── sanity/      # Sanity CMS integration
  ├── types/       # TypeScript type definitions
  └── utils/       # Utility functions
```

## Features

- Next.js 15.3 with App Router
- TypeScript
- Sanity CMS integration with visual editing
- Internationalization (i18n) support
- Storybook for component development
- Vitest for testing
- ESLint + Prettier
- Google Analytics and Tag Manager integration
- SEO optimization tools

## Documentation

Comprehensive documentation is available in the `docs` folder:

- [Analytics](docs/analytics.md) - Google Analytics and Tag Manager setup
- [Content Management](docs/content_management.md) - Sanity CMS integration and usage
- [Environment Variables](docs/env.md) - Configuration reference
- [Tools](docs/tools.md) - Project tools and utilities (@solana/ms-tools-*)
- [Translations](docs/translations.md) - Internationalization guide

## Tools and Packages

The project uses several @solana packages:

- [@solana/ms-tools-ui](https://github.com/solana-foundation/solana-ms-tools/) - UI component library
- [@solana/ms-tools-config](https://github.com/solana-foundation/solana-ms-tools/) - Shared configuration
- [@solana/ms-tools-integrations](https://github.com/solana-foundation/solana-ms-tools/) - CMS and third-party integrations

## License

Private
