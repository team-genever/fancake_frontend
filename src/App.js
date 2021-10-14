import React from "react";
// import "./App.css";

import Home from "pages/Home";
import Rooms from "pages/Rooms";
import SingleRoom from "pages/SingleRoom";
import Experience from "pages/Experience";
import Detail from "pages/Detail";

import Wallet from "pages/Wallet";
import History from "pages/History";
import UserEdit from "pages/UserEdit";

import { LoginMain, SigninEmail, FindID, FindPW } from "pages/Auth/";
import ChangePW from "pages/Userpage/ChangePW";

import Error from "pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "components/Navbar";
import GlobalStyles from "components/GlobalStyles";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/experience" component={Experience} />
        <Route path="/experience/detail/:videoId" component={Detail} />
        <Route exact path="/wallet" component={Wallet} />
        <Route path="/wallet/history" component={History} />
        <Route path="/user/edit" component={UserEdit} />
        <Route exact path="/auth/main" component={LoginMain} />
        <Route exact path="/auth/SigninEmail" component={SigninEmail} />
        <Route exact path="/auth/FindID" component={FindID} />
        <Route exact path="/auth/FindPW" component={FindPW} />
        <Route exact path="/user/:userID/changePW" component={ChangePW} />
        <Route component={Error} />
      </Switch>
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
