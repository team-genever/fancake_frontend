// 4 - 로그인/회원가입

import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { SignInButtons, LoginBox } from "components/Auth";
import { Helmet } from "react-helmet";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 200px 300px 200px 300px;

  @media only screen and (max-width: 1007px) {
    padding: 200px 100px 200px 100px;
  }

  @media only screen and (max-width: 640px) {
    padding: 200px 30px 200px 30px;
  }
`;

const LoginDiv = styled.div`
  width: 400px;
  height: 100%;
  //background-color: grey;
  text-align: center;
  margin: 0 auto;

  @media only screen and (max-width: 640px) {
    width: 300px;
  }
`;

const TextDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 35px;
  font-weight: bold;
  text-align: left;

  @media only screen and (max-width: 640px) {
    font-size: 25px;
  }
`;

const Or = styled.p`
  //width: 32px;
  //height: 46px;
  margin: 10px 0 20px 0;
  font-size: 26px;
  text-align: center;
  color: #767676;

  @media only screen and (max-width: 640px) {
    font-size: 20px;
    margin: 7px 0 14px 0;
  }
`;

const FindIDPW = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  text-align: center;
  font-size: 18px;
  color: #6e6e6e;
  font-style: bold;

  @media only screen and (max-width: 640px) {
    font-size: 12px;
  }
`;
const FindID = styled.span`
  cursor: pointer;
  color: black;

  :hover {
    color: ${(props) => props.theme.boxGray};
  }
`;
const FindPW = styled.span`
  cursor: pointer;
  color: black;

  :hover {
    color: ${(props) => props.theme.boxGray};
  }
`;

export default function LoginMain() {
  const findingClicked = (e) => {
    if (e.target.id === "id") {
      console.log("find id clicked");
    } else if (e.target.id === "pw") {
      console.log("find pw clicked");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>fanCake | 로그인</title>
      </Helmet>
      <LoginDiv>
        <TextDiv>
          SNS계정으로
          <br />
          간편하게 시작하세요.
        </TextDiv>
        <SignInButtons />
        <Or>or</Or>
        <LoginBox />
        <FindIDPW>
          <Link to={"./FindID"}>
            <FindID id="id" onClick={findingClicked}>
              아이디 찾기
            </FindID>
          </Link>
          &nbsp;|&nbsp;
          <Link to={"./FindPW"}>
            <FindPW id="pw" onClick={findingClicked}>
              비밀번호 찾기
            </FindPW>
          </Link>
        </FindIDPW>
      </LoginDiv>
    </Container>
  );
}
