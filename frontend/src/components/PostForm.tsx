import React, { useState } from "react"
import { createPost } from "../services/api"

export default function PostForm () {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  // function generateSlug(title: string): void {
  //   const generatedSlug = title.replace(/[^a-zA-Z0-9\\s]/gi, "").replaceAll(' ', '-').toLowerCase()
  //   setSlug(generatedSlug)
  // }

  async function handleSubmit(e: React.SubmitEvent){
    e.preventDefault();
    try {
      const generatedSlug = title.replace(/[^a-zA-Z0-9\\s]/gi, "").replaceAll(' ', '-').toLowerCase()
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
      <label htmlFor="content">Content:</label>
      <input type="text" value={content} onChange={(e)=>{setContent(e.target.value)}}/>
      <button type="submit">create post</button>
      <div id="status-container">
        <output role="status" id="status-message">{status}</output>
      </div>
    </form>
  )
}