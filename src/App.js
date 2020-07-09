import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"; 
// import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
