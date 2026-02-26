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

export type FetchContactsResponse = {
  contacts: Contact[],
  pagination: {
    page: number,
    limit: number,
    total: number,
    totalPages: number
  }
}