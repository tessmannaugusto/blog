import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPostBySlug } from "../services/api";
import type { Post } from "../types/post";

export default function PostDetail () {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const loadPost = async () => {
      try {
        const data = await fetchPostBySlug(slug!);
        setPost(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    };
    loadPost()
  }, [slug])

  if (loading) return <p className="loading">Loading...</p>
  if (!post) return <p className="state-message">Post not found.</p>

  return (
    <article className="page post-page">
      <Link className="post return-button" to={`/posts`}>back</Link>
      <h1>{post.title}</h1>
      <time dateTime={new Date(post.createdAt).toISOString()}>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
      <p>{post.content}</p>
    </article>
  )
}
