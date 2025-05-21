import type { Meta, StoryObj } from '@storybook/react'
import { PostView } from './PostView'

const meta = {
  title: 'Components/PostView',
  component: PostView,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      if (!args.post?.image) {
        return <Story args={args} />
      }

      const modifiedArgs = {
        post: {
          ...args.post,
          image: {
            ...args.post.image,
            _imageUrl: 'https://picsum.photos/400/400',
          },
        },
      }

      return <Story args={modifiedArgs} />
    },
  ],
} satisfies Meta<typeof PostView>

export default meta
type Story = StoryObj<typeof PostView>

const defaultPost = {
  title: 'Example Blog Post',
  publishedAt: '2024-03-20T12:00:00Z',
  image: {
    asset: {
      _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
      _type: 'reference',
    },
  },
  body: [
    {
      _type: 'block',
      _key: '1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: '2',
          text: 'This is an example blog post with some content. The content is rendered using Portable Text from Sanity.',
        },
      ],
    },
  ],
}

/**
 * Basic example of a blog post with all content: title, date, image, and body text.
 * The image is loaded from Lorem Picsum, a service providing random placeholder images.
 */
export const Default: Story = {
  args: {
    post: defaultPost,
  },
}

/**
 * Example of a post without an image
 */
export const WithoutImage: Story = {
  args: {
    post: {
      ...defaultPost,
      image: undefined,
    },
  },
}

/**
 * Example of a post with a different locale and a different random image
 */
export const SpanishPost: Story = {
  args: {
    post: {
      ...defaultPost,
      title: 'Publicación de ejemplo',
      image: {
        ...defaultPost.image,
        asset: {
          _ref: 'image-different-ref-for-different-image',
          _type: 'reference',
        },
      },
      body: [
        {
          _type: 'block',
          _key: '1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: '2',
              text: 'Este es un ejemplo de publicación de blog con contenido en español.',
            },
          ],
        },
      ],
    },
  },
}
