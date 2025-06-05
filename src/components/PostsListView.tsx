import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { type SanityDocument } from 'next-sanity'
import { urlFor } from '@/sanity/lib/image'

export interface IPostsListViewProps {
  posts: Array<
    SanityDocument & {
      title: string
      publishedAt: string
      slug: { current: string }
      image?: {
        asset: {
          _ref: string
          _type: string
        }
        _imageUrl?: string // For story mocks
      }
    }
  >
  title: string
}

export function PostsListView({ posts, title }: IPostsListViewProps) {
  return (
    <>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="hover:underline" key={post._id}>
            <Link href={`/post/${post.slug.current}`} locale={post.language}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              {post.image && (
                <Image
                  src={post.image._imageUrl || urlFor(post.image).width(200).height(200).url()}
                  alt={post.title}
                  width={200}
                  height={200}
                  priority
                  className="mt-2 rounded-md bg-amber-400 dark:bg-amber-800"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
