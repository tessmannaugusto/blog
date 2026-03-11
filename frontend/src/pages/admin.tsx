import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import type { Contact } from "../types/contact";
import { deletePost, fetchContacts, fetchPosts } from "../services/api";
import { ContactCard } from "../components/ContactCard";
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";
import Pagination from "../components/Pagination";

export default function Admin () {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [pageContacts, setPageContacts] = useState<number>(1)
  const [totalPagesContacts, setTotalPageContacts] = useState<number>(1)
  const [loadingContacts, setLoadingContacts] = useState<boolean>(true)
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagePosts, setPagePosts] = useState<number>(1)
  const [totalPagesPosts, setTotalPagePosts] = useState<number>(1)
  const [loadingPosts, setLoadingPosts] = useState<boolean>(true)

  async function handleDelete (id: number) {
    try {
      await deletePost(id);
      setPosts(posts.filter((p)=> p.id !== id))
    } catch (error) {
      console.log("Error when deleting post.", error)
    }
  }

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const posts = await fetchPosts(pagePosts, 5);
        setPosts(posts.posts);
        setTotalPagePosts(posts.pagination.totalPages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingPosts(false)
      }
    };
    fetchData()
  }, [pagePosts])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const contacts = await fetchContacts(pageContacts, 5);
        setContacts(contacts.contacts);
        setTotalPageContacts(contacts.pagination.totalPages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingContacts(false)
      }
    };
    fetchData()
  }, [pageContacts])

  return (
    <div className="page admin-page">

      <section className="admin-section">
        <h2 className="admin-section-title">New post</h2>
        <PostForm/>
      </section>

      <section className="admin-section">
        <h2 className="admin-section-title">Posts</h2>
        {loadingPosts ? (
          <p className="loading">Loading posts...</p>
        ) : (
          <>
            <ul className="posts-list">
              {posts.map(post => (
                <li key={post.id}>
                  <PostCard post={post} showActions={true} onDelete={handleDelete}/>
                </li>
              ))}
            </ul>
            <Pagination currentPage={pagePosts} totalPages={totalPagesPosts} onPageChange={setPagePosts}/>
          </>
        )}
      </section>

      <section className="admin-section">
        <h2 className="admin-section-title">Messages</h2>
        {loadingContacts ? (
          <p className="loading">Loading messages...</p>
        ) : (
          <>
            <ul className="posts-list">
              {contacts.map(contact => (
                <li key={contact.id}>
                  <ContactCard contact={contact}/>
                </li>
              ))}
            </ul>
            <Pagination currentPage={pageContacts} totalPages={totalPagesContacts} onPageChange={setPageContacts}/>
          </>
        )}
      </section>

    </div>
  )
}
