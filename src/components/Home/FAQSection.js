import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Positioner = styled.div`
  background-color: #e3e3e3;
  padding: 100px 130px 100px 130px;
  text-align: center;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
`;

const Button = styled.button`
  border: 1px solid black;
  display: block;
  background-color: transparent;
  cursor: pointer;
  padding: 8px 30px 8px 30px;
  font-weight: bold;
  margin: 50px auto 0px auto;
`;

const Container = styled.div`
  text-align: left;
  width: 100%;
  margin-top: 20px;
`;

const QuestionDiv = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.tableBorder};
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

const AnswerDiv = styled.div`
  display: none;
  padding: 20px;

  ${(props) =>
    props.active &&
    css`
      display: block;
    `}
`;

const IconContainer = styled.div`
  ${(props) =>
    props.active &&
    css`
      animation: ${rotate} 0.3s 0s 1 linear alternate both;
    `}
`;

const rotate = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100% {
    transform:rotate(180deg);
  }
`;

const FAQSection = () => {
  const [A1, setQ1] = useState(false);
  const [A2, setQ2] = useState(false);
  const [A3, setQ3] = useState(false);
  const [A4, setQ4] = useState(false);
  const [A5, setQ5] = useState(false);

  const onClick = (e) => {
    switch (e.target.id) {
      case "Q1":
        setQ1(!A1);
        setQ2(false);
        setQ3(false);
        setQ4(false);
        setQ5(false);
        break;
      case "Q2":
        setQ1(false);
        setQ2(!A2);
        setQ3(false);
        setQ4(false);
        setQ5(false);
        break;
      case "Q3":
        setQ1(false);
        setQ2(false);
        setQ3(!A3);
        setQ4(false);
        setQ5(false);
        break;
      case "Q4":
        setQ1(false);
        setQ2(false);
        setQ3(false);
        setQ4(!A4);
        setQ5(false);
        break;
      case "Q5":
        setQ1(false);
        setQ2(false);
        setQ3(false);
        setQ4(false);
        setQ5(!A5);
        break;
    }
  };

  return (
    <Positioner>
      <Heading>?????? ???????????? ??????</Heading>
      <Container>
        <QuestionDiv id="Q1" onClick={onClick}>
          ????????? NFT??? ????????????????
          <IconContainer active={A1}>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconContainer>
        </QuestionDiv>
        <AnswerDiv active={A1}>a1</AnswerDiv>

        <QuestionDiv id="Q2" onClick={onClick}>
          NFT??? ???????????? ????????? ?????????????
          <IconContainer active={A2}>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconContainer>
        </QuestionDiv>
        <AnswerDiv active={A2}>a2</AnswerDiv>

        <QuestionDiv id="Q3" onClick={onClick}>
          NFT??? ?????? ???????????? ?????? ?????? ????????? ??? ??????????
          <IconContainer active={A3}>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconContainer>
        </QuestionDiv>
        <AnswerDiv active={A3}>a3</AnswerDiv>

        <QuestionDiv id="Q4" onClick={onClick}>
          ?????? ??????????????? ?????? ?????????????????? ????????????.
          <IconContainer active={A4}>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconContainer>
        </QuestionDiv>
        <AnswerDiv active={A4}>a4</AnswerDiv>

        <QuestionDiv id="Q5" onClick={onClick}>
          ????????? ??????????????????
          <IconContainer active={A5}>
            <FontAwesomeIcon icon={faAngleDown} />
          </IconContainer>
        </QuestionDiv>
        <AnswerDiv active={A5}>a5</AnswerDiv>
      </Container>

      <Button>View all FAQ</Button>
    </Positioner>
  );
};
export default FAQSection;
