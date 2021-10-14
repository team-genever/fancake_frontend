import React, { useState } from "react";
import { withRouter } from "react-router";
import logo_white from "images/logo_white.png";
import logo_black from "images/logo_black.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 50px;
  background-color: ${(props) =>
    props.isHome ? "rgba(0, 0, 0, 0.41)" : "white"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid
    ${(props) => (props.isHome ? props.theme.navBarUnderGray : "black")};

  @media only screen and (max-width: 1007px) {
    height: 60px;
    padding: 0 35px;
  }

  @media only screen and (max-width: 640px) {
    height: 14vw;
    padding: 0 5vw;
    border-bottom: none;
    background-color: ${(props) =>
      props.isHome ? "rgba(0, 0, 0, 0.41)" : "rgba(255, 255, 255, 0.41)"};
  }
`;

const NavFront = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & img {
    height: 40px;
  }

  @media only screen and (max-width: 1007px) {
    & img {
      height: 30px;
    }
  }

  @media only screen and (max-width: 640px) {
    & img {
      height: 6.5vw;
    }
  }
`;

const HomeLink = styled(Link)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  @media only screen and (max-width: 1007px) {
    margin-right: 35px;
  }

  @media only screen and (max-width: 640px) {
    // margin-right: 25px;
  }
`;

const SLink = styled(Link)`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-bottom: ${(props) =>
    props.selected
      ? `1px solid ${props.isHome ? props.theme.boxVeryLightGray : "black"}`
      : "none"};
  & span {
    color: ${(props) =>
      props.selected
        ? props.isHome
          ? props.theme.boxVeryLightGray
          : "black"
        : props.isHome
        ? props.theme.boxLightGray
        : props.theme.boxDarkGray};
    font-size: 17px;
    font-weight: normal;
  }
  &:hover {
    background-color: ${(props) =>
      props.isHome ? "rgba(255, 255, 255, 0.3)" : props.theme.boxVeryLightGray};
    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
      props.selected
        ? props.isHome
          ? props.theme.boxVeryLightGray
          : "black"
        : props.isHome
        ? props.theme.boxLightGray
        : props.theme.boxDarkGray};
  }

  @media only screen and (max-width: 1007px) {
    & span {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
    /* & span {
      font-size: 8px;
    } */
  }
`;

const Navigator = styled.div`
  height: 100%;
  display: flex;
  gap: 35px;

  @media only screen and (max-width: 1007px) {
    gap: 25px;
  }

  @media only screen and (max-width: 640px) {
    // gap: 15px;
    display: none;
  }
`;

const LoginButton = styled(Link)`
  background-color: ${(props) => props.theme.mainPink};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 48px;
  border-radius: 15px;
  text-decoration: none;
  & span {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }

  @media only screen and (max-width: 1007px) {
    width: 140px;
    height: 35px;
    & span {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
    /* width: 110px;
    height: 28px;
    & span {
      font-size: 10px;
    } */
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  gap: 4.5vw;
  transform: ${(props) =>
    props.checked ? "translateX(0)" : "translateX(63vw)"};
  transition: all 0.3s;
  z-index: 11;
  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

const Background = styled.div`
  ${(props) => (props.checked ? "" : "display: none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundGray};
  z-index: 10;
`;

const MenuContainer = styled.div`
  margin-top: 5.2vw;
`;

const MenuInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
  :checked + label div {
    background-color: white;
  }
  :checked + label div:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  :checked + label div:nth-child(2) {
    opacity: 0;
  }
  :checked + label div:nth-child(3) {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
`;

const MenuIcon = styled.label`
  display: block;
  width: 4.7vw;
  height: 3.6vw;
  position: relative;
  cursor: pointer;
  & div {
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 5px;
    background-color: ${(props) => (props.isHome ? "white" : "black")};
    transition: all 0.3s;
  }
  & div:nth-child(1) {
    top: 0;
  }
  & div:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  & div:nth-child(3) {
    bottom: 0;
  }
`;

const Sidebar = styled.div`
  width: 63vw;
  height: 100vh;
  background-color: white;
`;

const SidebarContent = styled.div`
  padding: 13.3vw 9.3vw 0 9.3vw;
`;

const SidebarTitle = styled.h4`
  font-size: 4.3vw;
  font-weight: bold;
  margin-bottom: 2.7vw;
`;

const SidebarSmall = styled.small`
  display: block;
  font-size: 2.7vw;
  color: ${(props) => props.theme.boxGray};
  font-weight: normal;
  margin-bottom: 1.5vw;
`;

const SidebarButton = styled(Link)`
  background-color: ${(props) => props.theme.mainPink};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9.5vw;
  border-radius: 2vw;
  text-decoration: none;
  margin-bottom: 9vw;
  & span {
    color: white;
    font-size: 3vw;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }
`;

const SidebarLink = styled(Link)`
  display: block;
  font-size: 3vw;
  font-weight: normal;
  color: black;
  text-decoration: none;
  margin-bottom: 2vw;
  &:hover {
    color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
`;

const SidebarLinkA = styled.a`
  display: block;
  font-size: 3vw;
  font-weight: normal;
  color: black;
  text-decoration: none;
  margin-bottom: 2vw;
  &:hover {
    color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
`;

const Navbar = ({ location: { pathname } }) => {
  const [checked, setChecked] = useState(false);
  const isHome = pathname === "/";
  const onClick = () => window.scrollTo(0, 0);
  return (
    <Container isHome={isHome}>
      <NavFront>
        <HomeLink to="/" onClick={onClick}>
          <img
            src={isHome ? logo_white : logo_black}
            alt={isHome ? "logo_white" : "logo_black"}
          />
        </HomeLink>
        <Navigator>
          <SLink
            to="/"
            selected={pathname === "/"}
            isHome={isHome}
            onClick={onClick}
          >
            <span>서비스 소개</span>
          </SLink>
          <SLink
            to="/experience"
            selected={pathname === "/experience"}
            isHome={isHome}
            onClick={onClick}
          >
            <span>체험하기</span>
          </SLink>
        </Navigator>
      </NavFront>
      <LoginButton to="/auth/main" onClick={onClick}>
        <span>로그인</span>
      </LoginButton>
      <Background checked={checked} />
      <SidebarContainer checked={checked}>
        <MenuContainer>
          <MenuInput id="menu" onClick={() => setChecked(!checked)} />
          <MenuIcon for="menu" isHome={isHome}>
            <div />
            <div />
            <div />
          </MenuIcon>
        </MenuContainer>
        <Sidebar>
          <SidebarContent>
            <SidebarTitle>환영해요!</SidebarTitle>
            <SidebarSmall>로그인 / 회원가입을 진행해주세요.</SidebarSmall>
            <SidebarButton to="/auth/main">
              <span>로그인/회원가입</span>
            </SidebarButton>
            <SidebarLink to="/">서비스 소개</SidebarLink>
            <SidebarLink to="/experience">체험하기</SidebarLink>
            <SidebarLinkA target="_blank" href="https://pf.kakao.com/_pLnhb">
              문의하기
            </SidebarLinkA>
          </SidebarContent>
        </Sidebar>
      </SidebarContainer>
    </Container>
  );
};

export default withRouter(Navbar);
