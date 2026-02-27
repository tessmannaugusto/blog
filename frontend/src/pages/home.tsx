import { useEffect, useState } from "react"
import { fetchPosts } from "../services/api"
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";
import Pagination from "../components/Pagination";


export default function Home () {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState<boolean>(true)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await fetchPosts(page, 5);
        setPosts(data.posts);
        setTotalPages(data.pagination.totalPages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingPosts(false)
      } 
    };
    fetchData()
  }, [page]);

  if (loadingPosts) return (<p>Loading posts...</p>)

  return (
    <>
    <div>
      <ul>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage}></Pagination>
    </div>
    </>
  )
}