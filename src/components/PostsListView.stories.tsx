import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { PostsListView } from './PostsListView'

const meta = {
  title: 'Components/PostsListView',
  component: PostsListView,
  tags: ['autodocs'],
  decorators: [
    (Story, { args }) => {
      // Add mock image URLs to all posts that have images
      const modifiedArgs = {
        ...args,
        posts: args.posts.map((post) => ({
          ...post,
          image: post.image
            ? {
                ...post.image,
                _imageUrl: `https://picsum.photos/seed/${post._id}/200/200`,
              }
            : undefined,
        })),
      }
      return <Story args={modifiedArgs} />
    },
  ],
} satisfies Meta<typeof PostsListView>

export default meta
type Story = StoryObj<typeof PostsListView>

const defaultPosts = [
  {
    _id: 'post1',
    _rev: '1',
    _type: 'post',
    _createdAt: '2024-03-20T12:00:00Z',
    _updatedAt: '2024-03-20T12:00:00Z',
    title: 'Getting Started with Next.js',
    publishedAt: '2024-03-20T12:00:00Z',
    slug: { current: 'getting-started-with-nextjs' },
    image: {
      asset: {
        _ref: 'image-1',
        _type: 'reference',
      },
    },
  },
  {
    _id: 'post2',
    _rev: '1',
    _type: 'post',
    _createdAt: '2024-03-19T12:00:00Z',
    _updatedAt: '2024-03-19T12:00:00Z',
    title: 'Understanding TypeScript',
    publishedAt: '2024-03-19T12:00:00Z',
    slug: { current: 'understanding-typescript' },
    image: {
      asset: {
        _ref: 'image-2',
        _type: 'reference',
      },
    },
  },
  {
    _id: 'post3',
    _rev: '1',
    _type: 'post',
    _createdAt: '2024-03-18T12:00:00Z',
    _updatedAt: '2024-03-18T12:00:00Z',
    title: 'Styling with Tailwind CSS',
    publishedAt: '2024-03-18T12:00:00Z',
    slug: { current: 'styling-with-tailwind' },
  },
]

/**
 * Basic example showing a list of posts with mixed content (with and without images).
 * Each post with an image gets a unique random image based on its ID.
 */
export const Default: Story = {
  args: {
    title: 'Latest Blog Posts',
    posts: defaultPosts,
  },
}

/**
 * Example showing posts without any images
 */
export const WithoutImages: Story = {
  args: {
    title: 'Text-only Posts',
    posts: defaultPosts.map(({ image: _image, ...post }) => post),
  },
}

/**
 * Example showing posts in Spanish
 */
export const SpanishPosts: Story = {
  args: {
    title: 'Publicaciones del Blog',
    posts: [
      {
        _id: 'post1-es',
        _rev: '1',
        _type: 'post',
        _createdAt: '2024-03-20T12:00:00Z',
        _updatedAt: '2024-03-20T12:00:00Z',
        title: 'Comenzando con Next.js',
        publishedAt: '2024-03-20T12:00:00Z',
        slug: { current: 'comenzando-con-nextjs' },
        image: {
          asset: {
            _ref: 'image-1-es',
            _type: 'reference',
          },
        },
      },
      {
        _id: 'post2-es',
        _rev: '1',
        _type: 'post',
        _createdAt: '2024-03-19T12:00:00Z',
        _updatedAt: '2024-03-19T12:00:00Z',
        title: 'Entendiendo TypeScript',
        publishedAt: '2024-03-19T12:00:00Z',
        slug: { current: 'entendiendo-typescript' },
        image: {
          asset: {
            _ref: 'image-2-es',
            _type: 'reference',
          },
        },
      },
    ],
  },
}

/**
 * Example showing a single post
 */
export const SinglePost: Story = {
  args: {
    title: 'Featured Post',
    posts: [defaultPosts[0]],
  },
}
