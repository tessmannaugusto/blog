import type { Contact } from "../types/contact";

interface ContactCardProps {
  contact: Contact
}

export function ContactCard ({contact}: ContactCardProps) {
  return (
    <article>
      <time>{new Date(contact.createdAt).toLocaleDateString('pt-BR')}</time>
      <h2>Message sent by: {contact.name}</h2>
      <p>{contact.message.length > 150 ? contact.message.substring(0, 150) + "..." : contact.message}</p>
      <a href={`/contact/${contact.id}`}>Read more →</a>
    </article>
  )
}