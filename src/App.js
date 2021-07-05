import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import NewBandPage from './components/NewBandPage';
import BandPage from './components/BandPage';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/bandpage">
              <BandPage/>
          </Route>
          <Route path="/newbandpage">
            <NewBandPage/>
          </Route>
          <Route exact path="/homepage">
              <HomePage/>          
          </Route>
        </Switch>
    </div>
  );
}

export default App;
