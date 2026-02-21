export interface Contact {
  id: number
  name: string
  message: string
  email: string
  createdAt: string
}

export interface CreateContact {
  name: string
  message: string
  email: string
}