import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 0 0 0;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 0 0 15px 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 100px;
  margin: 0 0 25px 0;
  padding: 40px;
  border-radius: 10px;
  border: solid 1px #979797;
  font-size: 28px;
  color: #767676;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 120px;
  margin: 30px 0 0 0;
  //padding: 37px 348px 37px 347px;
  border-radius: 60px;
  background-color: #da225f;
  font-size: 32px;
  color: #fff;
  border : none;
  cursor: pointer;  

  :hover{
      background-color: #e34076;
  }
`;

const LoginBox = () => {

  const loginClicked = (e) => {
    if (e.target.name == "login"){
        console.log("login clicked");
    }
  }

  return (
    <Container>
      <EmailInput type="email" placeholder="이메일을 입력해주세요."/>
      <PasswordInput type="password" placeholder="비밀번호를 입력해주세요."/>
      <LoginButton name="login" onClick={loginClicked}>
        로그인
      </LoginButton>
    </Container>
  );
};

export default LoginBox;
