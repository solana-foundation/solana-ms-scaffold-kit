import Image from 'next/image'
import { PortableText, type PortableTextBlock } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'

export interface IPostViewProps {
  post: {
    title: string
    publishedAt: string
    image?: {
      asset: {
        _ref: string
        _type: string
      }
      _imageUrl?: string // For story mocks
    }
    body?: PortableTextBlock[]
  }
}

export function PostView({ post }: IPostViewProps) {
  return (
    <article className="mx-auto max-w-screen-md">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
      {post.image && (
        <Image
          src={post.image._imageUrl || urlFor(post.image).width(400).height(400).url()}
          alt={post.title}
          width={400}
          height={400}
          priority
          className="mt-2 rounded-md bg-amber-400 dark:bg-amber-800"
        />
      )}
      <div className="mt-4">{post.body && <PortableText value={post.body} />}</div>
    </article>
  )
}
