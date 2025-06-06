# Testing Guide

## Overview

This project uses two main testing approaches:

- [Vitest](https://vitest.dev/) for unit and integration testing
- [Storybook](https://storybook.js.org/) with play functions for component testing and documentation

## Vitest Testing

### Setup

Tests are configured to run with Vitest and React Testing Library. Configuration is in `vitest.config.ts`.

```typescript
// vitest.config.ts example
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
})
```

### Writing Tests

1. **Test File Structure**

   ```typescript
   // Component.test.tsx
   import { describe, it, expect } from 'vitest'
   import { render, screen } from '@testing-library/react'
   import { Component } from './Component'

   describe('Component', () => {
     it('renders correctly', () => {
       render(<Component />)
       expect(screen.getByRole('button')).toBeInTheDocument()
     })
   })
   ```

2. **Testing Hooks**

   ```typescript
   import { act, renderHook } from '@testing-library/react'
   import { useCounter } from './useCounter'

   it('increments counter', () => {
     const { result } = renderHook(() => useCounter())
     act(() => {
       result.current.increment()
     })
     expect(result.current.count).toBe(1)
   })
   ```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test --coverage
```

## Storybook Testing

### Play Functions

Play functions allow you to test component interactions in Storybook:

```typescript
// Button.stories.tsx
import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { userEvent, within } from '@storybook/testing-library'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Click me',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const ClickTest: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button')

    // Test initial state
    expect(button).toHaveTextContent('Click me')

    // Simulate interactions
    await userEvent.click(button)

    // Test after interaction
    expect(args.onClick).toHaveBeenCalled()
  },
}
```

### Testing Complex Interactions

```typescript
// Form.stories.tsx
export const FormSubmission: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Fill form fields
    await userEvent.type(canvas.getByLabelText('Username'), 'testuser')
    await userEvent.type(canvas.getByLabelText('Password'), 'password123')

    // Submit form
    await userEvent.click(canvas.getByRole('button', { name: /submit/i }))

    // Assert success message
    expect(await canvas.findByText(/success/i)).toBeInTheDocument()
  },
}
```

### Testing Accessibility

```typescript
// Navigation.stories.tsx
export const KeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // Test keyboard navigation
    await userEvent.tab()
    expect(canvas.getByRole('link', { name: 'Home' })).toHaveFocus()

    await userEvent.tab()
    expect(canvas.getByRole('link', { name: 'About' })).toHaveFocus()
  },
}
```

### Integration Testing

1. **Test Component Integration**

   ```typescript
   it('integrates with parent component', () => {
     render(<ParentComponent><ChildComponent /></ParentComponent>)
     // Test interaction between components
   })
   ```

2. **Test Data Flow**

   ```typescript
   it('passes data correctly', async () => {
     render(<DataProvider><ConsumerComponent /></DataProvider>)
     // Test data propagation
   })
   ```

## Debugging Tests

### Vitest Debugging

```bash
# Run specific test file
pnpm test ComponentName.test.tsx

# Run tests in debug mode
pnpm test --debug

# Update snapshots
pnpm test -u
```

### Storybook Debugging

1. Use the Actions panel to monitor events
2. Use the Controls panel to test different props
3. Use the Console panel for debugging

## Continuous Integration

Tests are run automatically in CI:

- On pull requests
- On merge to main branch
