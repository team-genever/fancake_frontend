import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

import { api, GetBackendIP } from "../../settings";
import axios from "axios";
import { useCookies } from "react-cookie";
import ReactGA from "react-ga";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 0;
`;

const EmailInput = styled.input`
  font-family: "Noto Sans KR";
  width: 100%;
  height: 55px;
  margin: 0 0 10px 0;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #979797;
  font-size: 16px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin-bottom: 7px;
  }
`;

const PasswordInput = styled.input`
  font-family: "Noto Sans KR";
  width: 100%;
  height: 55px;
  margin: 0 0 15px 0;
  padding: 20px;
  border-radius: 6px;
  border: solid 1px #979797;
  font-size: 16px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
    height: 45px;
    margin-bottom: 15px;
  }
`;

const LoginButton = styled.button`
  font-family: "Noto Sans KR";
  width: 100%;
  height: 60px;
  margin: 10px 0 0 0;
  //padding: 37px 348px 37px 347px;
  border-radius: 60px;
  background-color: #da225f;
  font-size: 20px;
  color: #fff;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #e34076;
  }

  @media only screen and (max-width: 640px) {
    font-size: 17px;
    height: 50px;
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 0 0;
  color: red;
  font-size: 16px;
  text-align: center;

  @media only screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

const LoginBox = ({ setLoading }) => {
  const [checkEmail, setCheckEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const [_, setCookie] = useCookies();
  const history = useHistory();

  const loginClicked = (e) => {
    if (checkEmail === false) {
      console.log("invalid email");
      setErrorMessage("이메일 형식이 잘못되었습니다.");
    } else if (loginInfo.password === "")
      setErrorMessage("비밀번호를 입력해주세요");
    else {
      setErrorMessage(null);
      login();
    }
  };

  const inputChange = (e) => {
    if (e.target.type === "email") {
      let email = e.target.value;
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        //valid email address
        setLoginInfo({ email: e.target.value, password: loginInfo.password });
        setCheckEmail(true);
      } else {
        setCheckEmail(false);
      }
    } else if (e.target.type === "password") {
      setLoginInfo({ email: loginInfo.email, password: e.target.value });
    }
  };

  async function login() {
    //let tempData;
    let backendip = GetBackendIP();
    console.log(backendip + "user");
    console.log({
      id: loginInfo.email,
      password: loginInfo.password,
    });
    let response;
    try {
      setLoading(true);
      response = await api.post("users/login", {
        id: loginInfo.email,
        password: loginInfo.password,
      });
      console.log(response);
      console.log("login success");

      ReactGA.event({
        category: "login",
        action: `email login`,
      });

      setCookie("Authorization", response.data.accessToken, {
        expires: new Date(response.data.accessTokenExpiresIn),
        path: "/",
      });
      setLoading(false);
      history.push("../");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setLoading(false);
      window.alert(error.response.data[0].message);
    } finally {
    }
  }

  return (
    <Container
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          loginClicked();
        }
      }}
    >
      <EmailInput
        type="email"
        placeholder="이메일을 입력해주세요."
        onChange={inputChange}
      />
      <PasswordInput
        type="password"
        placeholder="비밀번호를 입력해주세요."
        onChange={inputChange}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <LoginButton
        name="login"
        onClick={() => {
          loginClicked();
        }}
      >
        로그인
      </LoginButton>
    </Container>
  );
};

export default LoginBox;
