import type { Contact } from "../types/contact";

interface ContactCardProps {
  contact: Contact
}

export function ContactCard ({contact}: ContactCardProps) {
  return (
    <article className="contact-card">
      <time>{new Date(contact.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>Message sent by: {contact.name}</h2>
      <p>{contact.message}</p>
      <a href={`/contact/${contact.id}`}>Read more →</a>
    </article>
  )
}
