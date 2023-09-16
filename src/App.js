import Rickmorty from './Rickmorty';
import './App.css';
import Jsonplace from './Jsonplace';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummyjson from './Compo/Dummyjson';
import { Routes, Route } from "react-router-dom"
import Product from './Compo/Product';
import SingleChar from './SingleChar';

function App() {

  return (
    <>
      
      <Jsonplace />

      <div className="App">
        <Routes>
          {/* For Dummyjson */}
          {/* <Route path="/" element={ <Dummyjson /> } /> */}
          {/* <Route path='/product/:id' element={ <Product /> } /> */}

          {/* For Rickmorty */}
          {/* <Route path="/" element={ <Rickmorty /> } /> */}
          {/* <Route path='/character/:id' element={ <SingleChar /> } /> */}
        </Routes>
      </div>

    </>
  );
}

export default App;
