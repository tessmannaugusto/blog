export interface Post {
  id: number
  title: string
  content: string
  slug: string
  createdAt: string
}

export interface CreatePost {
  title: string
  content: string
  slug: string
}