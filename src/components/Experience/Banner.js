import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 200px 10vw;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;

  @media only screen and (max-width: 640px) {
    font-size: 6vw;
  }
`;

const Heading2 = styled.div`
  font-weight: bold;
  font-size: 30px;

  @media only screen and (max-width: 640px) {
    font-size: 4.5vw;
  }
`;

export default class Banner extends Component {
  render() {
    return (
      <Positioner>
        <Heading>사전 예약을 이미 하셨나요?</Heading>
        <Heading2>지금 회원가입하여 혜택을 받으세요.</Heading2>
      </Positioner>
    );
  }
}
