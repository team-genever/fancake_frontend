import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import logo_white from "images/logo_white.png";
import logo_black from "images/logo_black.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { api } from "settings";

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
  z-index: 9;
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
    border-radius: 10px;
    & span {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoggedInProfile = styled(Link)`
  background-color: ${(props) =>
    props.isHome ? "rgba(0, 0, 0, 0.41)" : "white"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 48px;
  border-radius: 50px;
  border-color: white;
  padding: 10px;
  margin-right: 20px;
  letter-spacing: 0.7px;
  text-decoration: none;
  & span {
    color: ${(props) => (props.isHome ? "white" : "black")};
    font-size: 16px;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.isHome ? "#4f4f4f" : "#dbdbd9")};
  }
  @media only screen and (max-width: 1007px) {
    height: 35px;
    border-radius: 35px;
    padding: 10px;
    margin-right: 10px;
    & span {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoggedInButton = styled.div`
  background-color: ${(props) =>
    props.isHome ? "rgba(0, 0, 0, 0.41)" : "white"};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 190px;
  height: 48px;
  border-radius: 30px;
  border: 1px solid ${(props) => (props.isHome ? "white" : "#414446")};
  & span {
    color: ${(props) => (props.isHome ? "white" : "black")};
    font-size: 18px;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
  }

  &:hover #LoggedInList {
    display: block;
  }

  @media only screen and (max-width: 1007px) {
    width: 140px;
    height: 35px;
    border-radius: 10px;
    & span {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const LoggedInList = styled.div`
  display: none;
  position: absolute;
  top: 103%;
  width: 100%;
  padding: 20px 0;

  border: 1px solid black;
  background-color: white;
  @media only screen and (max-width: 1007px) {
    padding: 15px 0;
  }
`;

const LoggedInLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 5px 0;
  font-size: 17px;
  font-weight: normal;
  text-decoration: none;
  color: black;
  text-align: center;
  background-color: white;
  &:hover {
    color: white;
    background-color: black;
  }
  @media only screen and (max-width: 1007px) {
    font-size: 14px;
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
  margin-bottom: ${(props) => (props.loggedIn ? "9vw" : "2.7vw")};
`;

const SidebarBr = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.boxLightGray};
  margin: 4vw 0 4vw 0;
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
  const [cookies, _, removeCookie] = useCookies(["Authorization"]);
  const [loggedIn, setLoggedIn] = useState();
  const [checked, setChecked] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const isHome = pathname === "/";

  const getUserInfo = async () => {
    try {
      const response = await api.get("user", {
        headers: {
          Authorization: cookies.Authorization,
        },
      });
      setUserInfo(response.data);
      console.log("navbar - got user info");
      console.log("navbar - user info is ", response);
    } catch (e) {
      console.log("navbar - did not get user info");
    }
  };

  useEffect(() => {
    if (loggedIn) {
      getUserInfo();
    }
  }, [loggedIn]);

  useEffect(() => {
    setLoggedIn(cookies.Authorization !== undefined);
  }, [cookies]);

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  const onClick = () => window.scrollTo(0, 0);

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
      {loggedIn ? (
        <div style={{ display: "flex" }}>
          <LoggedInProfile isHome={isHome} to="/user/wallet">
            <span>{userInfo.name}</span>
          </LoggedInProfile>
          <LoggedInButton isHome={isHome}>
            <span>&nbsp;나의 정보 ▼</span>
            <LoggedInList id="LoggedInList">
              <LoggedInLink to="/user/edit">회원정보수정</LoggedInLink>
              <LoggedInLink to="/user/wallet">나의 지갑</LoggedInLink>
              <LoggedInLink to="/" onClick={onLogout}>
                로그아웃
              </LoggedInLink>
            </LoggedInList>
          </LoggedInButton>
        </div>
      ) : (
        <LoginButton to="/auth/main" onClick={onClick}>
          <span>로그인</span>
        </LoginButton>
      )}
      <Background checked={checked} onClick={onLinkClick} />
      <SidebarContainer checked={checked}>
        <MenuContainer>
          <MenuInput id="menu" onChange={onChange} />
          <MenuIcon htmlFor="menu" isHome={isHome}>
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
            <SidebarLink to="/" onClick={onLinkClick}>
              서비스 소개
            </SidebarLink>
            <SidebarLink to="/experience" onClick={onLinkClick}>
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
    </Container>
  );
};

export default withRouter(Navbar);
