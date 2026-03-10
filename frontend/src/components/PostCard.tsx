import { Link } from "react-router-dom";
import type { Post } from "../types/post";

interface PostCardProps {
  post: Post,
  showActions?: boolean,
  onDelete?: (id: number) => void,
  onEdit?: (id: number) => void
}

export function PostCard ({post, showActions = false, onDelete}: PostCardProps) {
  return (
    <article className="post-card">
      <time className="post-card-meta">{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2 className="post-card-title">{post.title}</h2>
      <p className="post-card-excerpt">{post.content}</p>
      <Link className="post-card-read-more" to={`/posts/${post.slug}`}>Read more</Link>
      {showActions && onDelete && (
        <span className="post-card-actions">
          <button className="btn-danger" onClick={() => onDelete(post.id)}>delete</button>
          <Link to={`/admin/posts/${post.slug}`} className="btn-danger">edit</Link>
        </span>
      )}
    </article>
  )
}
