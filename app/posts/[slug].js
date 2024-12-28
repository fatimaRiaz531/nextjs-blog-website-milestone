// /pages/posts/[slug].js
import { useEffect, useState } from 'react';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity';
import Comments from '../../components/Comments';

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true] {
      _id,
      name,
      email,
      comment,
      _createdAt
    }
  }
`;

export default function Post({ post }) {
  const [comments, setComments] = useState(post.comments);

  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
      <Comments comments={comments} />
    </article>
  );
}

export async function getStaticProps({ params }) {
  const post = await client.fetch(postQuery, { slug: params.slug });
  return { props: { post } };
}

export async function getStaticPaths() {
  // Fetch all slugs for posts
  const allPosts = await client.fetch(`*[_type == "post"] { slug }`);
  return {
    paths: allPosts.map(post => ({ params: { slug: post.slug.current } })),
    fallback: true,
  };
}