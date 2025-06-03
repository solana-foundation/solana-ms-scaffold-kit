# Contributing Guide

## Getting Started

1. Fork the repository

2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Setup

1. Install dependencies:

   ```bash
   GITHUB_TOKEN=your_github_pat_here pnpm install
   ```

2. Create dev Sanity project and configure CORS for it.

3. Set up environment variables:

   - Copy `.env.example` to `.env`
   - Configure required variables (see [Environment Variables](env.md))

4. Start development server:

   ```bash
   pnpm dev
   ```

## Code Style

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Define explicit return types for functions
- Use interfaces for object types
- Follow existing type patterns

### React Components

- Use functional components
- Implement proper prop types
- Add component stories

  ```text
  components/
    ├── YourComponent.tsx
    └── YourComponent.stories.tsx
  ```

### Styling

- Use Tailwind CSS for styling
- Follow the existing class naming pattern
- Use CSS variables for theming
- Maintain dark mode support

## Testing

1. Write tests for new features:

   ```bash
   pnpm test
   ```

2. Create Storybook stories:

   ```bash
   pnpm storybook
   ```

3. Ensure all tests pass before submitting PR

## Pull Request Process

1. **Branch Naming**
   - `feature/description` for new features
   - `fix/description` for bug fixes
   - `docs/description` for documentation
   - `refactor/description` for refactoring

2. **Before Submitting**
   - Update documentation if needed
   - Add tests for new features
   - Ensure all tests pass
   - Check for linting errors:

     ```bash
     pnpm lint
     ```

   - Update changelog and bump version

3. **PR Description**
   - Clearly describe the changes
   - Reference related issues
   - Include screenshots for UI changes
   - List breaking changes if any

4. **Review Process**
   - Address review comments
   - Keep the PR focused and small
   - Maintain a clean commit history

## Development Guidelines

### Working with Sanity

1. Studio Development

   ```bash
   pnpm sanity:dev
   ```

2. Schema Changes
   - Update types in `src/sanity/schemaTypes`
   - Test in Sanity Studio
   - Update frontend types if needed

### Internationalization

1. Adding New Translations
   - Add keys to all language files
   - Follow the existing structure
   - Test in all supported languages

### Component Development

1. Creating New Components
   - Add Storybook stories
   - Include documentation
   - Consider accessibility
   - Add proper types

2. Modifying Existing Components
   - Maintain backward compatibility
   - Update documentation
   - Update tests and stories

## Release Process

1. Version Bump

   ```bash
   pnpm version [patch|minor|major]
   ```

2. Update Changelog
   - Add version section
   - List all changes
   - Credit contributors

3. Create Release PR
