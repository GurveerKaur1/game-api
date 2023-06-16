import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './components/Catalog';
import './style/index.css';
import Details from './components/Details';
import Header from './components/Header';
import New from './components/New';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Header></Header>
     <Routes>
      <Route path = "/game-api" element={<Catalog/>}></Route>
      <Route path="/product/:selectedProduct" element={<Details />} />
      <Route path="/new" element={<New/>}></Route>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
