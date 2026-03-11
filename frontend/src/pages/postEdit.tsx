import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostBySlug, updatePost } from "../services/api";
import type { Post } from "../types/post";

export default function PostEdit() {
  const { slug } = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const loadPost = async () => {
      try {
        const data = await fetchPostBySlug(slug!)
        setPost(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadPost()
  }, [slug])

  const handleChange = (field: keyof Post, value: string) => {
    setPost(prev => prev ? { ...prev, [field]: value } : null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!post) return

    try {
      await updatePost(post)
      setStatus('Post atualizado com sucesso!')
    } catch (error) {
      console.error(error)
      setStatus('Erro ao atualizar post.')
    }
  }

  if (loading) return <p className="loading">Loading...</p>
  if (!post) return <p className="state-message">Post not found.</p>

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={post.title}
          onChange={(e) => handleChange('title', e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="slug">Slug</label>
        <input 
          type="text" 
          id="slug" 
          value={post.slug}
          onChange={(e) => handleChange('slug', e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={post.content}
          onChange={(e) => handleChange('content', e.target.value)}
          rows={6}
          required
        />
      </div>

      <button type="submit">Update post</button>
      
      {status && (
        <output role="status">{status}</output>
      )}
    </form>
  )
}