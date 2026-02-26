import { Link } from "react-router-dom";
import type { Post } from "../types/post";

interface PostCardProps {
  post: Post,
  showActions?: boolean,
  onDelete?: (id: number) => void
}

export function PostCard ({post, showActions = false, onDelete}: PostCardProps) {
  return (
    <article>
      <time>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>{post.title}</h2>
      <p>{post.content.length > 150 ? post.content.substring(0, 150) + "..." : post.content}</p>
      <Link to={`/posts/${post.slug}`}>Read more</Link>
      {showActions && onDelete && (
        <button onClick={() => onDelete(post.id)}>delete</button>
      )}
    </article>
  )
}