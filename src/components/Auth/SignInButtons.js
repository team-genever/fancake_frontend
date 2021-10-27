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
  const componentClicked = (e) => {
    if (e.target.name === "naver") {
      console.log("naver clicked");
      <Link
        to={(window.location.href = "http://psj2867.com/api/oauth/naver_test")}
      />;
    } else if (e.target.name === "email") {
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
