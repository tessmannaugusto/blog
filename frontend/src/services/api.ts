import type { Contact, CreateContact } from "../types/contact";
import type { LoginData, LoginResponse } from "../types/login";
import type { Post } from "../types/post";

const URL = "http://localhost:3000"

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${URL}/posts`);
  if (!response.ok) throw new Error('Error when fetching posts.')
  return response.json();
}

async function createContact(contact: CreateContact): Promise<Contact> {
  const response = await fetch(`${URL}/contact`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(contact)
  });
  if (!response.ok) throw new Error('Error when creating contact.')
  return response.json();
}

async function login(loginData: LoginData): Promise<LoginResponse> {
  const response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
  if (!response.ok) throw new Error('Invalid credentials.')
  return response.json();
}

export { fetchPosts, createContact, login }