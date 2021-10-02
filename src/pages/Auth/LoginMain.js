// 4 - 로그인/회원가입

import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import {SignInButtons, LoginBox} from "../../components/Auth";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 35vw 30vw 30vw 30vw;
`;

const LoginDiv = styled.div`
  width: 100%;
  height: 100%;
  text-allign: center;
  //background-color: grey;
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 56px;
  font-weight: bold;
`;

const Or = styled.p`
  //width: 32px;
  //height: 46px;
  margin: 0 0 30px 0;
  font-size: 32px;
  text-align: center;
  color: boxGray;
`;

const FindIDPW = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: 28px;
  color: #6e6e6e;
  font-style: bold;
`;
const FindID = styled.span`
  text-decoration: underline;
  cursor: pointer;  

  :hover{
      color: black;
  }
`;
const FindPW = styled.span`
  text-decoration: underline;
  cursor: pointer;  

  :hover{
      color: black;
  }
`;

export default function LoginMain () {
  const findingClicked = (e) => {
    if (e.target.id === "id"){
      console.log("find id clicked");
    }
    else if (e.target.id === "pw"){
      console.log("find pw clicked");
    }
  }

  return (
    <Container>
      <LoginDiv>
        <TextDiv>
          SNS계정으로<br/>간편하게 시작하세요.
        </TextDiv>
        <SignInButtons/>
        <Or>
          or
        </Or>
        <LoginBox/>
        <FindIDPW>
          <FindID id="id" onClick={findingClicked}>
            아이디 찾기
          </FindID>
          &nbsp;|&nbsp;
          <FindPW id="pw" onClick={findingClicked}>
            비밀번호 찾기
          </FindPW>
        </FindIDPW>
      </LoginDiv>
    </Container>
  )
}

