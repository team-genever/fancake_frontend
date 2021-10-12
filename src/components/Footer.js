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
  height: 13vw;
  background-color: white;
  padding: 0 5vw;
`;

const MobileInnerContainer = styled.div`
  width: 100%;
  height: 70%;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vw;
`;

const Copyright = styled.span`
  font-size: 2.5vw;
  font-weight: bold;
`;

const KakaoLink = styled.a`
  text-decoration: none;
  background-color: #f7e600;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  & svg {
    font-size: 3.3vw;
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
  return isMobile ? (
    <MobileContainer>
      <MobileInnerContainer>
        <Copyright>&copy; fanCake, 2021. All rights reserved.</Copyright>
        <KakaoLink>
          <FontAwesomeIcon icon={faComment} />
        </KakaoLink>
      </MobileInnerContainer>
    </MobileContainer>
  ) : (
    <Container>
      <FooterGrid>
        <Section>
          <h5>fanCake</h5>
          <Link to="/">서비스 소개</Link>
          <Link to="/experience">체험하기</Link>
        </Section>
        <Section>
          <h5>BANK INFO</h5>
          <span>입금계좌: 카카오뱅크 333302-04-03939</span>
          <span>예금주: 백건우</span>
        </Section>
        <Section>
          <h5>문의하기</h5>
          <span>fancake.elk@gmail.com</span>
        </Section>
        <Section />
      </FooterGrid>
    </Container>
  );
};

export default Footer;
