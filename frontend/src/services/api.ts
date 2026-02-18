import type { Post } from "../types/post";

const URL = "http://localhost:3000"

async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(`${URL}/posts`);
  if (!response.ok) throw new Error('Error ao buscar posts.')
  return response.json();
}

export { fetchPosts }