# @solana-foundation/ms-scaffold-kit

[![Build](https://github.com/solana-foundation/solana-ms-scaffold-kit/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/solana-foundation/solana-ms-scaffold-kit/actions/workflows/build.yml)

A modern, type-safe scaffold kit for building Solana microsites and applications.

## 🚀 Deploy with Vercel

Click the button below to deploy the scaffold kit to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fnchigryay%2Fsolana-ms-scaffold-kit&project-name=solana-ms-scaffold-kit&repository-name=solana-ms-scaffold-kit&install-command=pnpm%20run%20vercel:install&build-command=pnpm%20build&output-directory=.next&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,NEXT_PUBLIC_APP_URL,NEXT_PUBLIC_APP_START_URL,NEXT_PUBLIC_APP_NAME,NEXT_PUBLIC_APP_SHORT_NAME,NEXT_PUBLIC_APP_DESCRIPTION,NODE_ENV,GITHUB_TOKEN)

### Required Environment Variables

| Variable                        | Suggested Value (you can override)           |
| ------------------------------- | -------------------------------------------- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | _(from your Sanity project)_                 |
| `NEXT_PUBLIC_SANITY_DATASET`    | `production`                                 |
| `NEXT_PUBLIC_APP_URL`           | `https://solana-ms-scaffold-kit.vercel.app`  |
| `NEXT_PUBLIC_APP_START_URL`     | `/`                                          |
| `NEXT_PUBLIC_APP_NAME`          | `MS scaffold kit`                            |
| `NEXT_PUBLIC_APP_SHORT_NAME`    | `Scaffold kit`                               |
| `NEXT_PUBLIC_APP_DESCRIPTION`   | `MS scaffold kit description`                |
| `NODE_ENV`                      | `production`                                 |
| `GITHUB_TOKEN`                  | _(needed to install GitHub-hosted packages)_ |

### Optional Environment Variables

These can be added after deployment via the Vercel dashboard if needed:

- `SANITY_VIEWER_TOKEN`
- `DEBUG`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`

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

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test --coverage

# Start Storybook for component development and testing
pnpm storybook

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
- Comprehensive testing setup:
  - Vitest for unit and integration testing
  - Storybook with play functions for component testing
  - Testing Library for DOM testing
  - Automated CI testing pipeline
- ESLint + Prettier
- Google Analytics and Tag Manager integration
- SEO optimization tools

## Documentation

Comprehensive documentation is available in the `docs` folder:

- [Analytics](docs/analytics.md) - Google Analytics and Tag Manager setup
- [Content Management](docs/content_management.md) - Sanity CMS integration and usage
- [Environment Variables](docs/env.md) - Configuration reference
- [Testing](docs/testing.md) - Testing guide with Vitest and Storybook
- [Tools](docs/tools.md) - Project tools and utilities (@solana-foundation/ms-tools-\*)
- [Translations](docs/translations.md) - Internationalization guide
- [Contributing](docs/contributing.md) - Contributing guide

## Tools and Packages

The project uses several @solana packages:

- [@solana-foundation/ms-tools-ui](https://github.com/solana-foundation/solana-ms-tools/) - UI component library
- [@solana-foundation/ms-tools-config](https://github.com/solana-foundation/solana-ms-tools/) - Shared configuration
- [@solana-foundation/ms-tools-integrations](https://github.com/solana-foundation/solana-ms-tools/) - CMS and third-party integrations

## Deploy

Use Vercel deploy button and follow the instructions.

### Required environment variables

Set all the variables requested during the deploy.

### Optional environment variables (set manually after deploy):

- `SANITY_VIEWER_TOKEN`
- `DEBUG`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
