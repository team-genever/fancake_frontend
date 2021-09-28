import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  background-color: #d8d8d8;
  padding: 200px 100px 200px 130px;
`;

const Heading = styled.div`
  color: black;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 1%;
`;

const Heading2 = styled.div`
  color: #cfcfcf;
  font-weight: bold;
  font-size: 37px;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #da225f;
  color: white;
  padding: 15px 30px 15px 30px;
  margin: 20px 0px 10px 0px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #e34076;
  }
`;

const Text = styled.div`
  color: #cccccc;
  font-weight: bold;
  font-size: 15px;
`;

export default class Banner extends Component {
  render() {
    return (
      <Positioner>
        <Heading>
          사전 예약을 이미 하셨나요?
          <br />
          지금 회원가입하여 혜택을 받으세요.
        </Heading>
      </Positioner>
    );
  }
}
