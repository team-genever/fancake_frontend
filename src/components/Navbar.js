import React from "react";
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

const Navbar = ({ location: { pathname } }) => {
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
    </Container>
  );
};

export default withRouter(Navbar);
