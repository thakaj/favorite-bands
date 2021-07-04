import React from 'react';
import './App.css';
import { Router, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import NewBandPage from './components/NewBandPage';
import BandPage from './components/BandPage';

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
