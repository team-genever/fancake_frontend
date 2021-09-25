import React from "react";
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import {Route, Switch} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";

function App() {
  return (
  <>
    <Navbar />
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/experience" component={Experience}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route componenet={Error}/>
    </Switch>
  
  </>
  )
}

export default App;
