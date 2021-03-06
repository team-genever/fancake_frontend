import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  width: 100%;
  padding: 100px 0px 100px 0px;
`;

const Container = styled.div`
  display: flex;
  margin-left: 130px;
  margin-bottom: 30px;
  align-items: center;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-bottom: 10px;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-left: 130px;
`;

const Thumbnail = styled.img`
  object-fit: cover;
  min-width: 704px;
  height: 396px;
  box-shadow: 5px 5px 15px #000;
`;

const Button = styled.button`
  border: 1px solid black;
  display: block;
  background-color: white;
  cursor: pointer;
  padding: 8px 30px 8px 30px;
  font-weight: bold;
  margin: 50px auto 0px auto;
  text-decoration: none;
`;

const GrayBox = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  height: 340px;
  width: 100%;
  padding: 30px 0px 10px 40px;
`;

const ChannelName = styled.div`
  color: ${(props) => props.theme.fontSmallGray};
  font-weight: bold;
  font-size: large;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
  width: 500px;
  margin: 7px 0px;
`;

const Button2 = styled.button`
  border-radius: 10px;
  background-color: ${(props) => props.theme.mainPink};
  color: white;
  padding: 13px 60px;
  margin: 20px 0px 10px 0px;
  font-weight: bold;
  font-size: 17px;
  cursor: pointer;
  border: none;

  :hover {
    background-color: ${(props) => props.theme.mainPinkHover};
  }
`;

const Text = styled.div``;

const Text2 = styled.div`
  color: ${(props) => props.theme.fontSmallGray};
  font-weight: bold;
`;

const Text3 = styled.div`
  font-weight: bold;
`;

const ProgressContainer = styled.div`
  margin: 5px 0px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 17px;
  width: 500px;
  border-radius: 30px;
  padding: 0px;
`;

const Progress = styled.div`
  height: 17px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  width: 400px;
`;

export default class VideoSection extends Component {
  render() {
    return (
      <Positioner>
        <Heading>?????? ??????????????? ??????</Heading>
        <Container>
          <Thumbnail src="http://img.youtube.com/vi/PQehBcftLKU/0.jpg" />
          <GrayBox>
            <ChannelName>???????????????</ChannelName>
            <Title>
              ?????? PC ??? ?????? ??????!! USB ?????? ?????? ????????? ????????? ???????????????
            </Title>
            <ProgressContainer>
              <ProgressBar>
                <Progress />
              </ProgressBar>
            </ProgressContainer>
            <Container2>
              <Text2>?????????</Text2>
              <Text3>68%</Text3>
            </Container2>
            <Text>???????????? ???????????? 1,000,000???</Text>
            <Text>???????????? ????????? 900,000???</Text>
            <Button2>????????????</Button2>
          </GrayBox>
        </Container>
        <Link to="/experience" style={{ textDecoration: "none" }}>
          <Button>?????? ?????? ??????</Button>
        </Link>
      </Positioner>
    );
  }
}
