import React, { useState } from "react"
import { createPost } from "../services/api"

export default function PostForm () {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  async function handleSubmit(e: React.SubmitEvent){
    e.preventDefault();
    try {
      const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
      await createPost({
        title,
        content,
        slug: generatedSlug
      })
      setStatus('post created!')
    } catch (error) {
      console.error(error)
      setStatus('Error when creating post.')
    }
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
      </div>
      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea id="content" value={content} onChange={(e)=>{setContent(e.target.value)}} rows={6} required/>
      </div>
      <button type="submit">create post</button>
      <div id="status-container">
        <output role="status" id="status-message">{status}</output>
      </div>
    </form>
  )
}
