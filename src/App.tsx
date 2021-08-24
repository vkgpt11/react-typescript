import './style.scss'
import Img from './apple-logo.png'
import Svg from './google-logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  const name = 'vikas gupta'
  return (
    <>
      <img src={Img} alt="logo" width="100" height="100" />
      <img src={Svg} alt="logo" width="50" height="50" />
      <h1>
        Hello React Typescript webpack starter template -{name}-{' '}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
    </>
  )
}
