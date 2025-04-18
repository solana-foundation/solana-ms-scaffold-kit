import Image from 'next/image'
import Link from 'next/link'
import { defineQuery, type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'

const POSTS_QUERY = defineQuery(`*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image}`)

const options = { next: { revalidate: 30 } }

export async function PostsList() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  return (
    <ul className="flex flex-col gap-y-4">
      {posts.map((post) => {
        return (
          <li className="hover:underline" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
              {post.image && (
                <Image
                  src={urlFor(post.image).width(200).height(200).url()}
                  alt={post.title}
                  width={200}
                  height={200}
                  priority
                  className="mt-2 h-auto w-full rounded-md"
                />
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
