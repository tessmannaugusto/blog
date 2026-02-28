import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchContact } from "../services/api";
import type { Contact } from "../types/contact";

export default function ContactDetail () {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const loadContact = async () => {
      try {
        const data = await fetchContact(Number(id));
        setContact(data)
      } catch (error) {
        console.log(error)
        console.error("Error when fetching contact.")
      } finally {
        setLoading(false)
      }
    };
    loadContact()
  }, [id])

  if (loading) return <p className="loading">Loading...</p>
  if (!contact) return <p className="state-message">Contact not found.</p>

  return (
    <article className="page post-page">
      <h1>Message from {contact.name}</h1>
      <time>{new Date(contact.createdAt).toLocaleDateString('pt-BR')}</time>
      <p><strong>Email:</strong> {contact.email}</p>
      <p>{contact.message}</p>
    </article>
  )
}
