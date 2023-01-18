import '../CSS/App.css';
import TKL from './TKL.js';
import SixtyPercent from './SixtyPercent';
import {Link} from "react-router-dom";
import styled from 'styled-components';


function App() {
  return (
    <>
    <header>
      <h1 className='header'>Keyboards</h1>
    </header>

    <Link to={"/tkl"}><h5>TKL board</h5></Link>
    <Link to={"/60%"}><h5>60% board</h5></Link>
    </>
  );
}

export default App;
