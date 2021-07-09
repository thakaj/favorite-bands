import React, {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Form from "./components/Form"
import BandPage from './components/BandPage';

function App() {
  const [bands, setBands] = useState([])


useEffect(()=> {
    fetch('http://localhost:8000/bands')
    .then(r=> r.json())
    .then(data => setBands(data))
}, [])

function addNewBand(newBand){
  const updatedBands= [ ...bands, newBand]
  setBands(updatedBands)
}
 
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path="/bandpage">
              <BandPage bands={bands}/>
          </Route>
          <Route path="/newbandpage">
            <Form addNewBand={addNewBand}/>
          </Route>
          <Route exact path="/homepage">
              <HomePage/>          
          </Route>
        </Switch>
    </div>
  );
}

export default App;
