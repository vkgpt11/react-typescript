import '../assets/styles/style.scss'
import Img from '../assets/images/apple-logo.png'
import Svg from '../assets/svgs/google-logo.svg'
import { ClickCounter } from '../domain/ClickCounter/ClickCounter'
import React from 'react'
import { IRepo } from '../models/IRepo'
import { fetchData } from '../services/http/GitClient'

export const App = () => {
  const [repos, setRepos] = React.useState<IRepo[]>([])
  React.useEffect(() => {
    async function loadData() {
      const rpos = await fetchData()
      setRepos(rpos)
    }
    loadData()
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
