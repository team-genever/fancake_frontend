import React from "react";
import logo_white from "../../images/logo_white.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 60px;
  background-color: rgba(0, 0, 0, 0.41);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.navBarUnderGray};
`;

const NavFront = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    width: 200px;
  }
`;

const HomeLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 56px;
`;

const SLink = styled(Link)`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.selected ? `1px solid ${props.theme.boxVeryLightGray}` : "none"};
  & span {
    color: ${(props) =>
      props.selected ? props.theme.boxVeryLightGray : props.theme.boxLightGray};
    font-size: 18px;
    font-weight: normal;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Navigator = styled.div`
  height: 100%;
  display: flex;
  gap: 28px;
`;

const LoginButton = styled(Link)`
  background-color: ${(props) => props.theme.mainPink};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 60px;
  border-radius: 15px;
  text-decoration: none;
  & span {
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }
`;

const NavBlack = ({ pathname }) => (
  <Container>
    <NavFront>
      <HomeLink to="/">
        <img src={logo_white} alt="logo_white" />
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
    <LoginButton to="/login">
      <span>로그인</span>
    </LoginButton>
  </Container>
);

export default NavBlack;
