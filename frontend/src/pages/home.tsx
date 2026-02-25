import { useEffect, useState } from "react"
import { fetchPosts } from "../services/api"
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";


export default function Home () {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts(page, 5);
      setPosts(data.posts);
      setTotalPages(data.pagination.totalPages)
    };
    fetchData()
  }, [page]);


  return (
    <>
    <div>
      <ul>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
      <div>
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
        >
          Anterior
        </button>
        
        <span>Página {page} de {totalPages}</span>
        
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
    </>
  )
}