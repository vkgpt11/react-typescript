import './style.scss'
import Img from './apple-logo.png'
import Svg from './google-logo.svg'
import { ClickCounter } from './ClickCounter'
import React from 'react'

interface IRepo {
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

export const App = () => {
  const [repos, setRepos] = React.useState<IRepo[]>([])
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.github.com/users/vkgpt11/repos`)
      const rpos = await response.json()
      setRepos(rpos)
    }

    fetchData()
  }, [])
  const name = 'vikas g gupta'
  return (
    <>
      <img src={Img} alt="logo" width="100" height="100" />
      <img src={Svg} alt="logo" width="50" height="50" />
      <h1>
        Hello React Typescript webpack starter template -{name}-{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <div>
        {repos.map((repo) => (
          <div key={repo.id}>
            {repo.name}
            <span>({repo.size} bytes)</span>
          </div>
        ))}
      </div>
      <ClickCounter />
    </>
  )
}
