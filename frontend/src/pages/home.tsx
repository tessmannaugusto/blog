import { useEffect, useState } from "react"
import { fetchPosts } from "../services/api"
import type { Post } from "../types/post";


export default function Home () {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const posts = await fetchPosts();
      setPosts(posts)
    };
    fetchData()
  }, []);


  return (
    <>
    <div>
      <ul>
        {posts.map((p, index) => (
          <li key={index}>{p.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}