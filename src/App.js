import React from "react";
// import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Wallet from "./pages/Wallet";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
import Experience from "./pages/Experience";
import History from "./pages/History";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/wallet/:userId" component={Wallet} />
        <Route path="/wallet/:userId/history" component={History} />
        <Route component={Error} />
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
