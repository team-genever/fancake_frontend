import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import logo from "images/logo.svg";
import cake from "images/cake.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { api } from "settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ReactGA from 'react-ga';

const Container = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 30px 0 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

  @media only screen and (max-width: 640px) {
    height: 14vw;
    padding: 0 5vw;
  }
`;

const NavFront = styled.div`
  position: fixed;
  top: 20px;
  left: 30px;
  z-index: 9;
  display: flex;
  align-items: center;
  & img {
    height: 100%;
  }
  height: 40px;

  @media only screen and (max-width: 640px) {
    left: 5vw;
    top: 4vw;
    height: 6.5vw;
  }
`;

const NavBack = styled.div`
  position: fixed;
  top: 24px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 9;
`;

const HomeLink = styled.a`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  & img {
    height: 41px;
    margin-right: 10px;
    filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 0.3));
  }
  & h1 {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    opacity: ${(props) => 100 - props.scroll * 0.8}%;
    display: ${(props) => props.scroll > 150 && "none"};
    filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 0.5));
  }

  @media only screen and (max-width: 640px) {
    // margin-right: 25px;
    & img {
      height: 6.5vw;
      margin-right: 1.5vw;
    }
    & h1 {
      font-size: 5vw;
    }
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
    props.selected ? `1px solid ${props.theme.boxVeryLightGray}` : "none"};
  & span {
    color: ${(props) =>
      props.selected ? props.theme.boxVeryLightGray : props.theme.boxLightGray};
    font-size: 17px;
    font-weight: normal;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
      props.selected ? props.theme.boxVeryLightGray : props.theme.boxLightGray};
  }

  @media only screen and (max-width: 640px) {
    display: none;
    /* & span {
      font-size: 8px;
    } */
  }
`;

const SHomeLink = styled.a`
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
    font-size: 17px;
    font-weight: normal;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-bottom: 1px solid;
    border-bottom-color: ${(props) =>
      props.selected ? props.theme.boxVeryLightGray : props.theme.boxLightGray};
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

  @media only screen and (max-width: 640px) {
    // gap: 15px;
    display: none;
  }
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  & img {
    width: 23px;
    filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4));
    margin-right: 8px;
  }
  & span {
    color: ${(props) => (props.scroll > 80 ? props.theme.mainPink : "white")};
    font-size: 18px;
    transition: color 0.2s ease-in-out;
    font-weight: bold;
    line-height: 20px;
    filter: drop-shadow(0px 0px 10px rgb(0 0 0 / 0.4));
    margin-right: 3px;
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoginButton = styled(Link)`
  background-color: ${(props) => props.theme.mainPink};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 32px;
  border-radius: 5px;
  text-decoration: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  & span {
    color: white;
    font-size: 12px;
    font-weight: bold;
    line-height: 12px;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoggedInProfile = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 32px;
  border-radius: 5px;
  padding: 10px;
  text-decoration: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: bold;
  line-height: 12px;
  & span {
    text-align: center;
    display: block;
    max-width: 60%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: black;
    font-size: 12px;
    font-weight: bold;
    line-height: 12px;
    margin-right: 3px;
  }
  & svg {
    position: absolute;
    right: 10px;
    font-size: 12px;
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.boxVeryLightGray};
  }
  &:hover svg {
    transform: rotateZ(180deg);
    transition: all 0.2s ease-in-out;
  }
  &:hover #LoggedInList {
    display: flex;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoggedInList = styled.div`
  display: none;
  position: absolute;
  top: 104%;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  gap: 2px;

  background-color: ${(props) => props.theme.fontSmallGray};

  @media only screen and (max-width: 1007px) {
    padding: 15px 0;
  }
`;

const LoggedInLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 7px 0px;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: black;
  text-align: center;
  border-radius: inherit;
  background-color: ${(props) => props.theme.fontSmallGray};
  transition: all 0.1s ease-in-out;
  & strong {
    color: ${(props) => props.theme.mainPink};
    font-weight: 500;
  }
  &:hover {
    background-color: ${(props) => props.theme.boxVeryLightGray};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease-in-out;
  }
  @media only screen and (max-width: 1007px) {
    font-size: 14px;
  }
`;

const LoggedInButton = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 48px;
  border-radius: 15px;
  border: 0.5px solid white;
  & span {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
  & svg {
    right: 15px;
    font-size: 22px;
    color: white;
    position: absolute;
  }
  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1007px) {
    width: 140px;
    height: 35px;
    border-radius: 10px;
    & span {
      font-size: 13px;
    }
    & svg {
      right: 10px;
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  gap: 4.5vw;
  height: 4vw;
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
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  margin-top: 5.2vw;
  height: 4vw;
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
    background-color: white;
    transition: all 0.3s;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
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
  font-size: 5vw;
  font-weight: bold;
  margin-bottom: ${(props) => (props.loggedIn ? "4vw" : "2.7vw")};
`;

const SidebarBalance = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8vw;
  margin-bottom: 4vw;
  & img {
    width: 5vw;
  }
  & span {
    font-size: 4vw;
    font-weight: bold;
    color: black;
  }
  & strong {
    font-size: 4vw;
    color: ${(props) => props.theme.mainPink};
    font-weight: bold;
    line-height: 4vw;
  }
`;

const SidebarBr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.boxLightGray};
  margin: 4vw 0 4vw 0;
`;

const SidebarSmall = styled.small`
  display: block;
  font-size: 3vw;
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
  margin-bottom: 8vw;
  & span {
    color: white;
    font-size: 3.3vw;
    line-height: 3.3vw;
    font-weight: bold;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }
`;

const SidebarLink = styled(Link)`
  display: block;
  font-size: 3.5vw;
  font-weight: normal;
  color: ${(props) => (props.isLogout ? props.theme.mainPink : "black")};
  text-decoration: none;
  margin-bottom: 1.5vw;
  &:hover {
    color: ${(props) =>
      props.isLogout ? props.theme.mainPinkHover : props.theme.boxGray};
    cursor: pointer;
  }
`;

const SidebarLinkA = styled.a`
  display: block;
  font-size: 3.5vw;
  font-weight: normal;
  color: black;
  text-decoration: none;
  margin-bottom: 1.5vw;
  &:hover {
    color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
`;

const Navbar = ({ location: { pathname }, userInfo, setUserInfo }) => {
  const [cookies, _, removeCookie] = useCookies(["Authorization"]);
  const [loggedIn, setLoggedIn] = useState();
  const [checked, setChecked] = useState(false);
  const [scroll, setScroll] = useState();

  //GA
  let pageView;
  if (pathname === "*") pageView = '/not-found';
  else pageView = pathname;
  ReactGA.pageview(pageView); // Sending GA page views

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (checked) {
      body.classList.add("scrollLock");
    } else {
      body.classList.remove("scrollLock");
    }
  }, [checked]);

  useEffect(() => {
    setLoggedIn(cookies.Authorization !== undefined);
  }, [cookies]);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const onLinkClick = () => {
    const input = document.getElementById("menu");
    input.checked = false;
    setChecked(false);
  };

  const onLogout = () => {
    removeCookie("Authorization", {
      expires: "Thu, 01 Jan 1970 00:00:00 UTC",
      path: "/",
    });
  };

  return (
    <>
      <NavFront>
        <HomeLink href="http://fancake.xyz/" scroll={scroll}>
          {/* <object data={logo} type="image/svg+xml" aria-label="logo" /> */}
          <img src={logo} alt="logo" />
          <h1>fanCake</h1>
        </HomeLink>
        {/* <Navigator>
          <SHomeLink
            href="http://fancake.xyz/"
            selected={pathname === "/"}
            onClick={onClick}
          >
            <span>서비스 소개</span>
          </SHomeLink>
          <SLink
            to="/experience"
            selected={pathname === "/experience"}
            onClick={onClick}
          >
            <span>체험하기</span>
          </SLink>
        </Navigator> */}
      </NavFront>
      {loggedIn ? (
        <NavBack>
          <Balance scroll={scroll}>
            <img src={cake} alt="cake" />
            <span>{userInfo.balance?.toLocaleString("ko-KR")} 베리</span>
          </Balance>
          <LoggedInProfile>
            <span>{userInfo.name}</span>님
            <FontAwesomeIcon icon={faCaretDown} />
            <LoggedInList id="LoggedInList">
              <LoggedInLink to="/user/wallet">나의 지갑</LoggedInLink>
              <LoggedInLink to="/user/edit">회원정보수정</LoggedInLink>
              <LoggedInLink to="/" onClick={onLogout}>
                <strong>로그아웃</strong>
              </LoggedInLink>
            </LoggedInList>
          </LoggedInProfile>
          <LoginButton to="/" onClick={onClick}>
            <span>지금 체험하기</span>
          </LoginButton>
          {/* <LoggedInButton>
            <span>나의 정보</span>
            <FontAwesomeIcon icon={faCaretDown} />
            <LoggedInList id="LoggedInList">
              <LoggedInLink to="/user/edit">회원정보수정</LoggedInLink>
              <LoggedInLink to="/user/wallet">나의 지갑</LoggedInLink>
              <LoggedInLink to="/" onClick={onLogout}>
                로그아웃
              </LoggedInLink>
            </LoggedInList>
          </LoggedInButton> */}
        </NavBack>
      ) : (
        <NavBack>
          <LoginButton to="/auth/main" onClick={onClick}>
            <span>로그인</span>
          </LoginButton>
          <LoginButton to="/" onClick={onClick}>
            <span>지금 체험하기</span>
          </LoginButton>
        </NavBack>
      )}
      <Background checked={checked} onClick={onLinkClick} />
      <SidebarContainer checked={checked}>
        <MenuContainer>
          <MenuInput id="menu" onChange={onChange} />
          <MenuIcon htmlFor="menu">
            <div />
            <div />
            <div />
          </MenuIcon>
        </MenuContainer>
        <Sidebar>
          <SidebarContent>
            {loggedIn ? (
              <>
                <SidebarTitle loggedIn={loggedIn}>
                  반가워요, {userInfo.name}님!
                </SidebarTitle>
                <SidebarBalance>
                  <img src={cake} alt="cake" />
                  <strong>{userInfo.balance?.toLocaleString("ko-KR")}</strong>
                  <span>베리</span>
                </SidebarBalance>

                <SidebarLink to="/user/wallet" onClick={onLinkClick}>
                  나의 지갑
                </SidebarLink>
                <SidebarLink to="/user/edit" onClick={onLinkClick}>
                  회원정보수정
                </SidebarLink>
                <SidebarLink
                  to="/"
                  onClick={() => {
                    onLinkClick();
                    onLogout();
                  }}
                  isLogout={true}
                >
                  로그아웃
                </SidebarLink>
                <SidebarBr />
              </>
            ) : (
              <>
                <SidebarTitle>환영해요!</SidebarTitle>
                <SidebarSmall>로그인 / 회원가입을 진행해주세요.</SidebarSmall>
                <SidebarButton to="/auth/main" onClick={onLinkClick}>
                  <span>로그인/회원가입</span>
                </SidebarButton>
              </>
            )}
            <SidebarLinkA href="http://fancake.xyz/" onClick={onLinkClick}>
              서비스 소개
            </SidebarLinkA>
            <SidebarLink to="/" onClick={onLinkClick}>
              체험하기
            </SidebarLink>
            <SidebarLinkA
              href="https://pf.kakao.com/_pLnhb"
              onClick={onLinkClick}
            >
              문의하기
            </SidebarLinkA>
          </SidebarContent>
        </Sidebar>
      </SidebarContainer>
    </>
  );
};

export default withRouter(Navbar);
