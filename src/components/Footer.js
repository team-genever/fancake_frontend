import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 400px;
  padding: 100px 110px;
  background-color: ${(props) => props.theme.boxDarkGray};
  @media only screen and (max-width: 1007px) {
    height: 250px;
    padding: 65px 90px;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  gap: 20px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-template-rows: 100%;
  @media only screen and (max-width: 1007px) {
    gap: 15px;
  }
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  & h5 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  & :is(span, a) {
    text-decoration: none;
    font-size: 13px;
    color: white;
    margin-bottom: 10px;
  }
  & a:hover {
    opacity: 70%;
  }
  @media only screen and (max-width: 1007px) {
    & h5 {
      font-size: 14px;
      margin-bottom: 18px;
    }
    & :is(span, a) {
      font-size: 10px;
      margin-bottom: 7px;
    }
  }
`;

const MobileContainer = styled.div`
  width: 100%;
  height: 20vw;
  text-align: center;
  background-color: ${(props) => props.theme.boxDarkGray};
  padding: 2.2vw 0vw;
`;

const MobileInnerContainer = styled.div`
  width: 100%;
  height: 70%;
  //border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  padding-top: 2vw;
`;

const Copyright = styled.span`
  font-size: 2.5vw;
  color: white;
`;

const KakaoLink = styled.a`
  text-decoration: none;
  background-color: #f7e600;
  width: 130px;
  height: 20px;
  padding: 17px 8px;
  font-weight: bold;
  font-size: 17px;
  margin-left: 13vw;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  :hover {
    cursor: pointer;
  }
  & svg {
    font-size: 20px;
  }
  @media only screen and (max-width: 1007px) {
    font-size: 14px;
    width: 110px;
    margin-left: 3vw;
  }

  @media only screen and (max-width: 640px) {
    width: 22vw;
    margin-top: 1.5vw;
    margin-left: 0px;
    padding: 0.9vw 0px;
    font-weight: bold;
    font-size: 2.9vw;
    border-radius: 5px;
    height: auto;

    & svg {
      font-size: 3.3vw;
    }
  }
`;

const IconContainer = styled.div`
  font-size: 16px;
  height: 100%;
  @media only screen and (max-width: 640px) {
  }
`;

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);
  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return isMobile ? (
    <MobileContainer>
      <MobileInnerContainer>
        <Copyright>&copy; fanCake, 2021. All rights reserved.</Copyright>
        <KakaoLink href="https://pf.kakao.com/_pLnhb">
          <FontAwesomeIcon icon={faComment} />
          &nbsp;문의하기
        </KakaoLink>
      </MobileInnerContainer>
    </MobileContainer>
  ) : (
    <Container>
      <FooterGrid>
        <Section>
          <h5>POLICIES</h5>
          <Link to="/policy/terms" onClick={onClick}>
            이용약관
          </Link>
          <Link to="/policy/privacy" onClick={onClick}>
            개인정보처리방침
          </Link>
        </Section>
        <Section>
          <h5>fanCake</h5>
          <a href="http://fancake.xyz/">서비스 소개</a>
          <Link to="/" onClick={onClick}>
            체험하기
          </Link>
        </Section>
        <Section />
        <KakaoLink href="https://pf.kakao.com/_pLnhb">
          <FontAwesomeIcon icon={faComment} />
          &nbsp;문의하기
        </KakaoLink>
      </FooterGrid>
    </Container>
  );
};

export default Footer;
