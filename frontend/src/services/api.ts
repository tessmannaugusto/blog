import type { Contact, CreateContact, FetchContactsResponse } from "../types/contact";
import type { LoginData, LoginResponse } from "../types/login";
import type { CreatePost, FetchPostsResponse, Post } from "../types/post";

const URL = "http://localhost:3000"

type CreateEditDeleteResponse = {
  message: string
}


function getAuthHeaders() {
  const token = localStorage.getItem('blog_token');
  return {
    'Content-type': 'application/json',
    ... (token && { 'Authorization': `Bearer ${token}` })
  }
}

async function fetchPosts(page: number = 1, limit: number = 5): Promise<FetchPostsResponse> {
  const response = await fetch(`${URL}/posts?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Error when fetching posts.')
  return response.json();
}

async function fetchPostBySlug(slug: string): Promise<Post> {
  const response = await fetch(`${URL}/posts/${slug}`)
  if(!response.ok) throw new Error('Error when getting post.')
  return response.json()
}

async function createPost(post: CreatePost): Promise<CreateEditDeleteResponse> {
  const response = await fetch(`${URL}/posts`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(post)
  });
  if (!response.ok) throw new Error('Error when creating post.')
  return response.json();
}

async function updatePost(post: Post): Promise<CreateEditDeleteResponse> {
  const response = await fetch(`${URL}/posts`, {
    method: "PATCH",
    headers: getAuthHeaders(),
    body: JSON.stringify(post)
  });
  if (!response.ok) throw new Error('Error when updating post.')
  return response.json();
}

async function deletePost(id: number):Promise<CreateEditDeleteResponse>{
  const response = await fetch(`${URL}/posts/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders()
  })
  if(!response.ok) throw new Error('Error when deleting post')
  return response.json()
}


async function login(loginData: LoginData): Promise<LoginResponse> {
  const response = await fetch(`${URL}/auth`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(loginData)
  });
  if (!response.ok) throw new Error('Invalid credentials.')
  return response.json();
}

async function fetchContacts(): Promise<FetchContactsResponse> {
  const response = await fetch(`${URL}/contacts`, {
    method: "GET",
    headers: getAuthHeaders()
  })
  if(!response.ok) throw new Error('Error when getting contacts.')
  return response.json()
}

async function fetchContact(id: number): Promise<Contact> {
  const response = await fetch(`${URL}/contacts/${id}`)
  if(!response.ok) throw new Error('Error when getting contact.')
  return response.json()
}

async function createContact (contact: CreateContact): Promise<CreateEditDeleteResponse> {
  const response = await fetch(`${URL}/contact`, {
    method: "POST",
    headers: { "Content-type": "application/json"},
    body: JSON.stringify(contact)
  })
  if(!response.ok) throw new Error('Error when creating contact.')
    return response.json()
}

export { fetchPosts, fetchPostBySlug, createPost, updatePost, deletePost, login, fetchContacts, createContact, fetchContact }