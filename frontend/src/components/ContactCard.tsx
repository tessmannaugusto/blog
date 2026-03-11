import { Link } from "react-router-dom";
import type { Contact } from "../types/contact";

interface ContactCardProps {
  contact: Contact
}

export function ContactCard ({contact}: ContactCardProps) {
  return (
    <article className="contact-card">
      <time dateTime={new Date(contact.createdAt).toISOString()}>{new Date(contact.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>Message sent by: {contact.name}</h2>
      <p>{contact.message}</p>
      <Link to={`/admin/contact/${contact.id}`} aria-label={`Read full message from ${contact.name}`}>Read more →</Link>
    </article>
  )
}
