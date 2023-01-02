import '../CSS/App.css';
import TKL from './TKL.js';
import {Link} from "react-router-dom";

function App() {
  return (
    <>
    <header>
      <h1 className='header'>Keyboards</h1>
    </header>

    <Link to={"/tkl"}><h5>Back to main←</h5></Link>
    </>
  );
}

export default App;
