import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import SigninEmail from "pages/Auth/SigninEmail";
import axios from "axios";

const { naver } = window;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px 0 0 0;
  text-align: center;
  margin: 0 auto;
`;

const NaverButton = styled.button`
  font-family: "Noto Sans KR";
  width: 100%;
  height: 60px;
  margin: 50px 0 10px 0;
  //padding: 37px 271px 37px 270px;
  border-radius: 60px;
  background-color: #2db400;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  :hover {
    background-color: #2b9906;
  }

  @media only screen and (max-width: 640px) {
    font-size: 17px;
    height: 50px;
    margin-top: 30px;
    //margin-bottom: 0px;
  }
`;

const EmailButton = styled.button`
  font-family: "Noto Sans KR";
  width: 100%;
  height: 60px;
  //padding: 37px 271px 37px 270px;
  background-color: white;
  border-radius: 60px;
  color: black;
  border: 1px solid #979797;
  font-size: 20px;
  cursor: pointer;
  font-weight: 500;

  :hover {
    background-color: #f5f5f5;
  }

  @media only screen and (max-width: 640px) {
    font-size: 17px;
    height: 50px;
  }
`;

const SignInButtons = () => {
  const [naverLogin] = useState(
    new naver.LoginWithNaverId({
      clientId: "PdW0nmtpfhryHj5UrU_C",
      callbackUrl: "http://localhost:3000/callback",
    })
  );

  useEffect(() => {
    naverLogin.init();
    console.log(naverLogin);
  }, [naverLogin]);

  const componentClicked = (e) => {
    if (e.target.name === "naver") {
      console.log("naver clicked");
      try {
        const response = axios.get(
          "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=Ar3sZvt17MhvpRqq6Iju&redirect_uri=http:%2F%2Flocalhost:3000%2F&state=1234"
        );
      } catch {}
    } else if (e.target.name === "email") {
      console.log("email clicked");
    }
  };

  return (
    <Container>
      <NaverButton
        name="naver"
        id="naverIdLogin"
        onClick={() => {
          naverLogin.authorize();
        }}
      >
        네이버로 시작하기
      </NaverButton>
      <Link to="/auth/SigninEmail">
        <EmailButton name="email">이메일로 가입하기</EmailButton>
      </Link>
    </Container>
  );
};

export default SignInButtons;
