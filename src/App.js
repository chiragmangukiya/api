import Rickmorty from './Rickmorty';
import './App.css';
import Jsonplace from './Jsonplace';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummyjson from './Compo/Dummyjson';
import { Routes, Route } from "react-router-dom"
import Product from './Compo/Product';
import SingleChar from './SingleChar';
import Cart from './Compo/Cart';

function App() {

  return (
    <>
      
      {/* <Jsonplace /> */}

      <div className="App">
        <Routes>
          {/* For Dummyjson */}
          <Route path="/" element={ <Dummyjson /> } />
          <Route path='/product/:id' element={ <Product /> } />
          <Route path='/cart' element={ <Cart /> } />

          {/* For Rickmorty */}
          {/* <Route path="/" element={ <Rickmorty /> } /> */}
          {/* <Route path='/character/:id' element={ <SingleChar /> } /> */}
        </Routes>
      </div>

    </>
  );
}

export default App;
