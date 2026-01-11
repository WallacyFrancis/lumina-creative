export interface Project {
  id: number
  created_at: string
  title: string
  description: string
  image_url: string | null
  tags: string[] | null
  client_name: string | null
}
