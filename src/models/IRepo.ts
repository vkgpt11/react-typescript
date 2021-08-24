export interface IRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  url: string
  forks_url: string
  teams_url: string
  created_at: Date
  updated_at: Date
  pushed_at: Date
  size: number
  language: string
  has_issues: boolean
  has_projects: boolean
  has_downloads: boolean
  has_wiki: boolean
  watchers: number
}
