import type React from "react";
import { useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login () {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const navigate = useNavigate()



  async function handleLogin(e: React.FormEvent){
    e.preventDefault()
    try {
      const { token } = await login({email, password})
      localStorage.setItem('blog_token', token)
      navigate('/admin')
    } catch (error) {
      console.error(error)
      setStatus("Invalid credentials.")
    }
  }


  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" autoComplete="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
      <button type="submit">login!</button>
      <div id="status-container">
        <output role="status" id="status-message">{status}</output>
      </div>
    </form>
  )
}