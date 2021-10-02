import React from "react";
// import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Experience from "./pages/Experience";
import Wallet from "./pages/Wallet";
import History from "./pages/History";
import UserEdit from "./pages/UserEdit";
import LoginMain from "./pages/Auth/LoginMain";
import SigninEmail from "./pages/Auth/SigninEmail"
import Error from "./pages/Error";


import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import GlobalStyles from "./components/GlobalStyles";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/wallet/:userId" component={Wallet} />
        <Route path="/wallet/:userId/history" component={History} />
        <Route path="/user/:userId/edit" component={UserEdit} />
        <Route path="/auth/main" component={LoginMain}/>
        <Route path="/auth/SigninEmail" component={SigninEmail}/>
        <Route component={Error} />
      </Switch>
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;