import { useEffect, useState } from "react"
import { fetchPosts } from "../services/api"
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";
import Pagination from "../components/Pagination";
import LinksFooter from "../components/LinksFooter";


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

  if (loadingPosts) return <p className="loading">Loading posts...</p>

  return (
    <div className="page">
      <ul className="posts-list">
        {posts.map(post => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
      {totalPages && (<Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage}></Pagination>)}
      <LinksFooter></LinksFooter>
    </div>
  )
}
