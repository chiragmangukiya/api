import Rickmorty from './Rickmorty';
import './App.css';
import Jsonplace from './Jsonplace';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dummyjson from './Compo/Dummyjson';
import { Routes, Route } from "react-router-dom"
import Sidebar from './Compo/Sidebar';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Compo/Product';
import Category from './Compo/Category';

function App() {

  return (
    <>
      
      {/* <Jsonplace /> */}

      {/* <Rickmorty /> */}

      {/* <Dummyjson /> */}

      {/* <Sidebar /> */}

      <div className="App">
        <Routes>
          <Route path="/" element={ <Dummyjson /> } />
          <Route path='/product/:id' element={ <Product /> } />
        </Routes>
      </div>

    </>
  );
}

export default App;
