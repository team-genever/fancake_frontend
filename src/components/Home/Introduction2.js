import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 100px 130px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
`;

const TextContainer = styled.div`
  text-align: left;
  margin-right: 30px;
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Heading1 = styled.div`
  color: white;
  font-weight: bold;
  font-size: 37px;
`;

const Image = styled.img`
  width: 700px;
  border: 1px white solid;
`;

const Text1 = styled.div`
  color: white;
  margin-top: 30px;
`;

export default class Introduction2 extends Component {
  render() {
    return (
      <Positioner>
        <Container>
          <Image src="blank.png"></Image>
          <TextContainer style={{ textAlign: "right" }}>
            <Heading1>공동구매</Heading1>
            <Text1>
              샘플 텍스트
              <br />
              샘플 텍스트
            </Text1>
          </TextContainer>
        </Container>

        <Container>
          <TextContainer>
            <Heading1>공동구매</Heading1>
            <Text1>
              샘플 텍스트
              <br />
              샘플 텍스트
            </Text1>
          </TextContainer>
          <Image src="blank.png"></Image>
        </Container>

        <Container>
          <Image src="blank.png"></Image>
          <TextContainer style={{ textAlign: "right" }}>
            <Heading1>공동구매</Heading1>
            <Text1>
              샘플 텍스트
              <br />
              샘플 텍스트
            </Text1>
          </TextContainer>
        </Container>
      </Positioner>
    );
  }
}
