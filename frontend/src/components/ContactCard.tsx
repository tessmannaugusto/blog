import { Link } from "react-router-dom";
import type { Contact } from "../types/contact";

interface ContactCardProps {
  contact: Contact,
  onDelete: (id: string) => void 
}

export function ContactCard ({contact, onDelete}: ContactCardProps) {
  return (
    <article className="contact-card">
      <time dateTime={new Date(contact.createdAt).toISOString()}>{new Date(contact.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>Message sent by: {contact.name}</h2>
      <p>{contact.message}</p>
      <Link className="post-card-read-more" to={`/admin/contact/${contact.id}`} aria-label={`Read full message from ${contact.name}`}>Read more</Link>
      <span className="post-card-actions">
        <button className="btn-danger" onClick={() => onDelete(contact.id)} aria-label={`Delete contact: ${contact.name}`}>delete</button>
      </span>
    </article>
  )
}
