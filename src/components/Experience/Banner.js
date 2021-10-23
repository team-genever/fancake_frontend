import React, { Component } from "react";
import styled from "styled-components";
import banner from "images/banner.jpg";

const Positioner = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 20vh 10vw;
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
    url(${banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
  color: white;

  @media only screen and (max-width: 640px) {
    font-size: 6vw;
  }
`;

const Heading2 = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;

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
