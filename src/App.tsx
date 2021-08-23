import './style.css';
import Img from './apple-logo.png';
import Svg from './google-logo.svg';

export const App = () => {
  return (
    <>
      <img src={Img} alt="logo" width="100" height="100" />
      <img src={Svg} alt="logo" width="50" height="50" />

      <h1>React Typescript webpack starter template</h1>
    </>
  );
};
