import { useEffect, useState } from "react"
import { fetchPosts } from "../services/api"
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";


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
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
    </>
  )
}