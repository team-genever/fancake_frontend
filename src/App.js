import React, { useEffect, useState } from "react";
// import "./App.css";

//import Home from "pages/Home";
import Experience from "pages/Experience";
//import Detail from "pages/Detail";

import Wallet from "pages/Wallet";
import History from "pages/History";
import UserEdit from "pages/UserEdit";

import { LoginMain, SigninEmail, FindID, FindPW } from "pages/Auth/";
import ChangePW from "pages/Userpage/ChangePW";

import Error from "pages/Error";

import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "components/Navbar";
import GlobalStyles from "components/GlobalStyles";
import Footer from "components/Footer";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import { api } from "settings";
import axios from "axios";
import Callback from "pages/NaverCallback";

const NavBackground = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 50px 0 80px;
  background-color: rgba(255, 255, 255, 0.41);
  display: flex;
  align-items: center;
  z-index: 9;

  @media only screen and (max-width: 640px) {
    height: 14vw;
    padding: 0 5vw;
  }
`;

function App() {
  const [cookies] = useCookies(["Authorization"]);
  const [loggedIn, setLoggedIn] = useState();
  useEffect(() => {
    setLoggedIn(cookies.Authorization !== undefined);
  }, [loggedIn, cookies]);

  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    try {
      const response = await api.get("users/me", {
        headers: {
          Authorization: cookies.Authorization,
        },
        params: {
          detail: true,
        },
      });
      console.log(response);
      setUserInfo(response.data);
    } catch (e) {}
  };

  const updateUserInfo = async (videoIdx, size) => {
    try {
      const res = await api.post(
        `videos/${videoIdx}/stock`,
        {
          size,
        },
        {
          headers: {
            Authorization: cookies.Authorization,
          },
        }
      );
      console.log(res);
      await getUserInfo();
      return 200;
    } catch (e) {
      window.alert("처리 도중 문제가 발생 했습니다. 다시 시도해주세요.");
      return 400;
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getUserInfo();
    }
  }, [loggedIn]);

  return (
    <>
      <NavBackground />
      <Navbar userInfo={userInfo} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Experience userInfo={userInfo} updateUserInfo={updateUserInfo} />
          )}
        />
        {/* <Route path="/experience/detail/:videoId" component={Detail} /> */}
        <Route
          exact
          path="/user/wallet"
          render={() => <Wallet userInfo={userInfo} />}
        >
          {loggedIn ? "" : <Redirect to="/" />}
        </Route>
        <Route path="/user/wallet/history" component={History}>
          {loggedIn ? "" : <Redirect to="/" />}
        </Route>
        <Route path="/user/edit" component={UserEdit}>
          {loggedIn ? "" : <Redirect to="/" />}
        </Route>
        <Route exact path="/auth/main" component={LoginMain}>
          {loggedIn ? <Redirect to="/" /> : ""}
        </Route>
        <Route exact path="/auth/SigninEmail" component={SigninEmail}>
          {loggedIn ? <Redirect to="/" /> : ""}
        </Route>
        {/* <Route exact path="/auth/FindID" component={FindID}>
          {loggedIn ? <Redirect to="/" /> : ""}
        </Route> */}
        <Route exact path="/auth/FindPW" component={FindPW}>
          {loggedIn ? <Redirect to="/" /> : ""}
        </Route>
        <Route exact path="/callback" component={Callback}>
          {loggedIn ? <Redirect to="/" /> : ""}
        </Route>
        <Route exact path="/user/changePW" component={ChangePW}>
          {loggedIn ? "" : <Redirect to="/" />}
        </Route>
        <Route exact path="/policy/terms" component={"이용약관"} />
        <Route exact path="/policy/privacy" component={"개인정보처리방침"} />
        <Route component={Error} />
      </Switch>
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
