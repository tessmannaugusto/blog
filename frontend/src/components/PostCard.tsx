import type { Post } from "../types/post";

interface PostCardProps {
  post: Post
}

export function PostCard ({post}: PostCardProps) {
  return (
    <article>
      <time>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>{post.title}</h2>
      <p>{post.content.length > 150 ? post.content.substring(0, 150) + "..." : post.content}</p>
      <a href={`/posts/${post.slug}`}>Ler mais →</a>
    </article>
  )
}