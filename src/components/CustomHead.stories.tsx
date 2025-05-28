import type { Meta, StoryObj } from '@storybook/react'
import { CustomHead } from './CustomHead'

/**
 * The `CustomHead` component is responsible for managing the document head metadata using Next.js's `Head` component.
 * It handles SEO-related meta tags, including dynamic content from Sanity CMS.
 *
 * ### Features
 *
 * - Title and description management
 * - SEO keywords support
 * - Integration with Sanity CMS meta tags
 * - JSON-LD structured data
 *
 * ### Usage
 *
 * ```tsx
 * import { CustomHead } from '@/components/CustomHead'
 *
 * function MyPage() {
 *   return (
 *     <CustomHead
 *       title="My Page Title"
 *       description="A detailed description of my page"
 *       seoKeywords={['nextjs', 'react', 'seo']}
 *       additionalMetaTags={[{
 *         _type: 'metaTag',
 *         metaAttributes: [{
 *           attributeKey: 'og:image',
 *           attributeType: 'image',
 *           attributeValueImage: {
 *             asset: { url: 'https://example.com/image.jpg' }
 *           }
 *         }]
 *       }]}
 *     />
 *   )
 * }
 * ```
 *
 * ### Notes
 *
 * - The component automatically includes JSON-LD structured data based on the provided title and description
 * - Meta tags from Sanity CMS are processed using the `mapSanityMetaTags` utility function
 * - Keywords are automatically joined with commas for the meta keywords tag
 * - The component is designed to work seamlessly with Next.js and Sanity CMS integration
 */
const meta = {
  title: 'Components/CustomHead',
  component: CustomHead,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomHead>

export default meta
type Story = StoryObj<typeof CustomHead>

/**
 * A basic example showing the minimal usage with title, description, and SEO keywords.
 */
export const Basic: Story = {
  args: {
    title: 'Welcome to My Site',
    description: 'This is a basic example of the CustomHead component',
    seoKeywords: ['example', 'react', 'nextjs'],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}

/**
 * An advanced example showing usage with Sanity CMS meta tags, including Open Graph title and image.
 */
export const WithSanityMetaTags: Story = {
  args: {
    title: 'Advanced SEO Example',
    description: 'Example with Sanity CMS meta tags',
    seoKeywords: ['seo', 'sanity', 'cms'],
    additionalMetaTags: [
      {
        _type: 'metaTag',
        metaAttributes: [
          {
            _type: 'metaAttribute',
            attributeKey: 'og:title',
            attributeType: 'string',
            attributeValueString: 'Custom Open Graph Title',
          },
          {
            _type: 'metaAttribute',
            attributeKey: 'og:image',
            attributeType: 'image',
            attributeValueImage: {
              _type: 'customImage',
              asset: {
                url: 'https://example.com/og-image.jpg',
              },
            },
          },
        ],
      },
    ],
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
}
