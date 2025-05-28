import { useContext } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LANGUAGES } from '@/constants/language'
import { LanguageContext } from '@/contexts/LanguageContext'
import { LanguageContextProvider } from './LanguageContextProvider'

/**
 * The `LanguageContextProvider` component provides language context to its children components.
 * It's used to manage the current language state throughout the application.
 *
 * ### Features
 *
 * - Provides language context to child components
 * - Accepts default language prop
 * - Uses React Context API for efficient state management
 *
 * ### Usage
 *
 * ```tsx
 * import { LanguageContextProvider } from '@/components/LanguageContextProvider'
 * import { LANGUAGES } from '@/constants/language'
 *
 * function App() {
 *   return (
 *     <LanguageContextProvider language={LANGUAGES[0]}>
 *       <YourComponents />
 *     </LanguageContextProvider>
 *   )
 * }
 * ```
 *
 * ### Accessing Language Context
 *
 * ```tsx
 * import { useContext } from 'react'
 * import { LanguageContext } from '@/contexts/LanguageContext'
 *
 * function YourComponent() {
 *   const { language } = useContext(LanguageContext)
 *   return <div>Current language: {language.title} ({language.id})</div>
 * }
 * ```
 */
const meta = {
  title: 'Components/LanguageContextProvider',
  component: LanguageContextProvider,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageContextProvider>

export default meta
type Story = StoryObj<typeof LanguageContextProvider>

// Example component to show the current language
const LanguageDisplay = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
      Current Language: <strong>{language.title}</strong>
      <div style={{ fontSize: '0.9em', color: '#666' }}>
        ID: {language.id} | Flag: {language.flag}
      </div>
    </div>
  )
}

/**
 * Default usage with the default language (English)
 */
export const Default: Story = {
  args: {
    children: <LanguageDisplay />,
  },
}

/**
 * Example with Spanish language
 */
export const WithSpanishLanguage: Story = {
  args: {
    language: LANGUAGES[1], // Spanish
    children: <LanguageDisplay />,
  },
}

/**
 * Example with nested components showing language inheritance
 */
export const WithNestedComponents: Story = {
  args: {
    language: LANGUAGES[1], // Spanish
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <LanguageDisplay />
        <div style={{ padding: '20px', background: '#f5f5f5', borderRadius: '4px' }}>
          <h3>Nested Component</h3>
          <p style={{ color: '#666', marginBottom: '10px' }}>
            This component inherits the language context from its parent
          </p>
          <LanguageDisplay />
        </div>
      </div>
    ),
  },
}
