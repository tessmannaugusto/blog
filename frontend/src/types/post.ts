export type Post = {
  id: number
  title: string
  content: string
  slug: string
  createdAt: string
}

export type CreatePost = {
  title: string
  content: string
  slug: string
}

export type FetchPostsResponse = {
  posts: Post[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}