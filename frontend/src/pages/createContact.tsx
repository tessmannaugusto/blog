import { useState } from "react";
import { createContact } from "../services/api";


export default function CreateContact () {
  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const contact = { name, message, email }
    try {
      await createContact(contact);
      setStatus("Mensagem enviada com sucesso!")
    } catch (error) {
      setStatus("Erro ao enviar mensagem.")
      console.error(error)
    }
  }

  return (
    <div className="page">
      <header className="contact-page-header">
        <h1>Contact</h1>
        <p>Send a message and I'll get back to you.</p>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
        </div>
        <button type="submit">Enviar</button>
        <div id="status-container">
          <output role="status" id="status-message">{status}</output>
        </div>
      </form>
    </div>
  )
}
