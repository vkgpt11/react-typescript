import './style.css';
import Img from './apple-logo.png';

export const App = () => {
  return (
    <>
      <img src={Img} alt="logo" width="100" height="100" />
      <h1>React Typescript webpack starter template</h1>
    </>
  );
};
