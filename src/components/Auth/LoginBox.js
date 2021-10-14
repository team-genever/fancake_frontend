import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { GetBackendIP } from "../../settings"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 0;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 0 0 15px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width:640px) {
    font-size: 15px;
    height: 45px;
    margin-bottom: 10px;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 55px;
  margin: 0 0 25px 0;
  padding: 20px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 18px;
  ::-webkit-input-placeholder {
    color: #d8d8d8;
  }

  @media only screen and (max-width:640px) {
    font-size: 15px;
    height: 45px;
    margin-bottom: 15px
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 70px;
  margin: 10px 0 0 0;
  //padding: 37px 348px 37px 347px;
  border-radius: 60px;
  background-color: #da225f;
  font-size: 24px;
  color: #fff;
  border : none;
  cursor: pointer;  

  :hover{
      background-color: #e34076;
  }

  @media only screen and (max-width:640px) {
    font-size: 20px;
    height: 55px;
  }
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin: 0 0 0 0;
  color: red;
  font-size: 18px;
  text-align: center;

  @media only screen and (max-width:640px) {
    font-size: 13px;
  }
`;

const LoginBox = () => {
  let checkEmail = false ;
  const [errorMessage, setErrorMessage] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });


  const loginClicked = (e) => {
    if (checkEmail === false){
      console.log("invalid email");
      setErrorMessage("이메일 형식이 잘못되었습니다.");
    }
    else if (loginInfo.password === "")
      setErrorMessage("비밀번호를 입력해주세요");
    else {
      setErrorMessage("");
      login();
    }
  }

  const inputChange = (e) => {
    setErrorMessage("");
    if (e.target.type === "email") {
      let email = e.target.value;
      let re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)) {
        //valid email address
        loginInfo.email = e.target.value;
        console.log("email is ", e.target.value);
        checkEmail=true;
      } else {
        checkEmail=false;
      }
    } else if (e.target.type === "password") {
      loginInfo.password = e.target.value;
      console.log("password is ", e.target.value);
    }
  }

  async function login() {
    //let tempData;
    let backendip = GetBackendIP();
    console.log(backendip+"user");
    console.log({
      id: loginInfo.email,
      password: loginInfo.password
    })
    try {
      const response = await axios.get(backendip+"user/login", {
        params: {
          id: loginInfo.email,
          password: loginInfo.password,
        }
      });
      console.log(response);
      console.log("login success");
    } catch (error) {
      console.error(error);
    } finally {

    }
  }

  return (
    <Container>
      <EmailInput type="email" placeholder="이메일을 입력해주세요." onBlur={inputChange}/>
      <PasswordInput type="password" placeholder="비밀번호를 입력해주세요." onBlur={inputChange} onChange={inputChange}/>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <LoginButton name="login" onClick={loginClicked}>
        로그인
      </LoginButton>
    </Container>
  );
};

export default LoginBox;
