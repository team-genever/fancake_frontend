import React from "react";
import logo_black from "images/logo_black.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 3vw;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

const NavFront = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    height: 2.4vw;
  }
`;

const HomeLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 3vw;
`;

const SLink = styled(Link)`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-bottom: ${(props) => (props.selected ? "1px solid black" : "none")};
  & span {
    color: ${(props) => (props.selected ? "black" : props.theme.boxDarkGray)};
    font-size: 1vw;
    font-weight: normal;
  }
  &:hover {
    background-color: ${(props) => props.theme.boxVeryLightGray};
  }
`;

const Navigator = styled.div`
  height: 100%;
  display: flex;
  gap: 1.5vw;
`;

const LoginButton = styled(Link)`
  background-color: ${(props) => props.theme.mainPink};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5vw;
  height: 3.3vw;
  border-radius: 15px;
  text-decoration: none;
  & span {
    color: white;
    font-size: 1.1vw;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }
`;

const NavWhite = ({ pathname }) => (
  <Container>
    <NavFront>
      <HomeLink to="/">
        <img src={logo_black} alt="logo_black" />
      </HomeLink>
      <Navigator>
        <SLink to="/" selected={pathname === "/"}>
          <span>서비스 소개</span>
        </SLink>
        <SLink to="/experience" selected={pathname === "/experience"}>
          <span>체험하기</span>
        </SLink>
      </Navigator>
    </NavFront>
    <LoginButton to="/auth/main">
      <span>로그인</span>
    </LoginButton>
  </Container>
);

export default NavWhite;
