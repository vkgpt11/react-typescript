import './style.css'
import Img from './apple-logo.png'
import Svg from './google-logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const num = 0
  return (
    <>
      <img src={Img} alt="logo" width="100" height="100" />
      <img src={Svg} alt="logo" width="50" height="50" />
      <h1>
        Hi React Typescript webpack starter template - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
      <ClickCounter />
    </>
  )
}
