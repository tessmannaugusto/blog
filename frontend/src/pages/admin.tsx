import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import type { Contact } from "../types/contact";
import { deletePost, fetchContacts, fetchPosts } from "../services/api";
import { ContactCard } from "../components/ContactCard";
import type { Post } from "../types/post";
import { PostCard } from "../components/PostCard";

export default function Admin () {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

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
      const posts = await fetchPosts();
      setPosts(posts.posts);
      const contacts = await fetchContacts();
      setContacts(contacts.contacts);
    };
    fetchData()
  }, [])
  return (
    <div>
      <PostForm/>
            <h2>Post list:</h2>
      <ul>
        {posts.map(post=> (
          <PostCard key={post.id} post={post} showActions={true} onDelete={handleDelete}/>
        ))}
      </ul>
      <h2>Messages received:</h2>
      <ul>
        {contacts.map(contact=> (
          <ContactCard key={contact.id} contact={contact}/>
        ))}
      </ul>
    </div>
  )
}