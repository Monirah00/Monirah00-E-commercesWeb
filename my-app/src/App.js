import './App.css';
import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home'
import Details from './Components/Details'
import LadiesItem from './Components/LadiesItem';
import JensItems from './Components/JensItems';
import JensDetails from './Components/jensDetails';
import Contact from './Components/Contact';

function App() {
  return (
    <React.Fragment>
    <Routes>
    <Route  path='/' element={<Home />} />
    <Route exact  path='/Details/:id' element={<Details />} />
    <Route exact path='/LadiesItem' element={<LadiesItem />} />
    <Route exact path='/JensItems' element={<JensItems />} />
    <Route exact path='/JensDetails/:id' element={<JensDetails />} />
    <Route exact path='/Contact' element={<Contact />} />
    </Routes>
    </React.Fragment>
  );
}

export default App;
