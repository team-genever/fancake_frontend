import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxDarkGray};
  padding: 100px 130px;
  text-align: center;
`;

const Heading = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
  background-color: transparent;
  display: block;
  margin: 30px auto;
  width: 700px;
  height: 30px;
  font-size: 16px;
  color: #767676;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: ${(props) => props.theme.mainPink};
  color: white;
  padding: 12px 65px;
  margin: 20px 0px 10px 0px;
  font-weight: 550;
  font-size: 17px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: #e34076;
  }
`;

export default class RequestSection extends Component {
  render() {
    return (
      <Positioner>
        <Heading>원하시는 영상이 있으신가요?</Heading>
        <Input placeholder="채널명 또는 영상의 URL을 첨부해주세요." />
        <Button>요청하기</Button>
      </Positioner>
    );
  }
}
