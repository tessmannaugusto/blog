import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostBySlug } from "../services/api";
import type { Post } from "../types/post";

export default function Post () {
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
        console.error("Error when fetching post.")
      } finally {
        setLoading(false)
      }

    };
    loadPost()
  }, [slug])

  if (loading) return <div>Carregando...</div>
  if (!post) return <div>Post not found.</div>

  return (
    <article>
      <h1>{post.title}</h1>
      <time>{new Date(post.createdAt).toLocaleDateString('pt-BR')}</time>
      <p>{post.content}</p>
    </article>
  )
}