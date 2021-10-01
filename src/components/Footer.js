import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 513px;
  padding: 152px 159px 152px 159px;
  background-color: ${(props) => props.theme.boxDarkGray};
`;

const FooterGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-template-rows: 100%;
`;

const Section = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  & h5 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  & :is(span, a) {
    text-decoration: none;
    font-size: 16px;
    color: white;
    margin-bottom: 14px;
  }
  & a:hover {
    opacity: 70%;
  }
`;

const Footer = () => (
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

export default Footer;
