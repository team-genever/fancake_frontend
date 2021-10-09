import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import SigninEmail from "pages/Auth/SigninEmail";

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px 0 0 0;
  text-align: center;
  margin: 0 auto;
`;

const NaverButton = styled.button`
  width: 100%;
  height: 70px;
  margin: 50px 0 10px 0;
  //padding: 37px 271px 37px 270px;
  border-radius: 60px;
  background-color: #2db400;
  border: none;
  color: #fff;
  font-size: 26px;
  cursor: pointer;

  :hover {
    background-color: #2b9906;
  }
`;

const EmailButton = styled.button`
  width: 100%;
  height: 70px;
  margin: 10px 0 0px 0;
  //padding: 37px 271px 37px 270px;
  background-color: white;
  border-radius: 60px;
  border-color: #cfcfcf;
  color: #767676;
  font-size: 26px;
  cursor: pointer;

  :hover {
    background-color: #f5f5f5;
  }
`;

const SignInButtons = () => {
  const componentClicked = (e) => {
    if (e.target.name == "naver") {
      console.log("naver clicked");
      <Link
        to={
          (window.location.href =
            "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=PdW0nmtpfhryHj5UrU_C&state=6546598198&redirect_uri=http://psj2867.com/api/login/naver/callback")
        }
      />;
    } else if (e.target.name == "email") {
      console.log("email clicked");
    }
  };

  return (
    <Container>
      <NaverButton name="naver" onClick={componentClicked}>
        네이버로 시작하기
      </NaverButton>
      <Link to={"../../Auth/SigninEmail"}>
        <EmailButton name="email">이메일로 가입하기</EmailButton>
      </Link>
    </Container>
  );
};

export default SignInButtons;
