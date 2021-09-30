import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 100px 130px 100px 130px;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
`;

const GrayBox = styled.div`
  background-color: ${(props) => props.theme.boxCountGray};
  margin: 25px 0px;
`;

const Thumbnail = styled.img`
  width: 688px;
  height: 387px;
`;

const VideoTitle = styled.div``;

const ChannelName = styled.div`
  font-weight: bold;
  font-size: large;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
  width: 500px;
  margin: 7px 0px;
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  padding: 50px 40px;
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const ProgressContainer = styled.div`
  margin: 20px 0px 10px 0px;
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

const GrayText = styled.div`
  color: ${(props) => props.theme.boxGray};
`;

const PinkText = styled.div`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
`;

export default function VideoSection() {
  //DB 변수 이름은 임시로 정해두었습니다.
  const [video_info, setData] = useState([
    {
      sns: "youtube",
      video_name:
        "스틱 PC 중 최고 성능!! USB 처럼 생긴 초키니 컴퓨터 사봤습니다",
      channel_name: "뻘짓연구소",
      deadline: "2021-10-30",
    },
    {
      sns: "",
      video_name:
        "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
      channel_name: "뻘짓 연구소",
      deadline: "2021-10-30",
    },
  ]);

  const [video_component, setComponent] = useState();

  useEffect(() => {
    setComponent(
      video_info.map((data, index) => {
        let currentDate = new Date();

        let deadline = new Date(data.deadline);
        let remainingTime = deadline.getTime() - currentDate.getTime();
        let remainingDay = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
        let remainingHour = 24 - currentDate.getHours();
        let remainingMin = 60 - currentDate.getMinutes();
        let remainingSec = 60 - currentDate.getSeconds();

        return (
          <GrayBox>
            <Container>
              <Thumbnail />
              <TextContainer>
                <Title>{data.video_name}</Title>
                <ChannelName>{data.channel_name}</ChannelName>
                <ProgressContainer>
                  <ProgressBar>
                    <Progress />
                  </ProgressBar>
                </ProgressContainer>
                <TextContainer2>
                  <GrayText>총 100조각</GrayText>
                  <PinkText>84%</PinkText>
                </TextContainer2>
                <TextContainer2>
                  <GrayText>조각당 가격</GrayText>
                  <GrayText>12,000원</GrayText>
                </TextContainer2>
                <TextContainer2>
                  <GrayText>남은 시간</GrayText>
                  <PinkText>
                    {/*한 자리 수일때 0 추가하는 것 구현해야 함*/}
                    {remainingDay}일 {remainingHour}:{remainingMin}:
                    {remainingSec}
                  </PinkText>
                </TextContainer2>
              </TextContainer>
            </Container>
          </GrayBox>
        );
      })
    );
  });

  return (
    <Positioner>
      <Heading>영상의 첫 번째 주인이 되세요!</Heading>
      {/*video_info.map((data, index) => {
        let currentDate = new Date();

        let deadline = new Date(data.deadline);
        let remainingTime = deadline.getTime() - currentDate.getTime();
        let remainingDay = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
        let remainingHour = 24 - currentDate.getHours();
        let remainingMin = 60 - currentDate.getMinutes();
        let remainingSec = 60 - currentDate.getSeconds();

        return (
          <GrayBox>
            <Container>
              <Thumbnail />
              <TextContainer>
                <Title>{data.video_name}</Title>
                <ChannelName>{data.channel_name}</ChannelName>
                <ProgressContainer>
                  <ProgressBar>
                    <Progress />
                  </ProgressBar>
                </ProgressContainer>
                <TextContainer2>
                  <GrayText>총 100조각</GrayText>
                  <PinkText>84%</PinkText>
                </TextContainer2>
                <TextContainer2>
                  <GrayText>조각당 가격</GrayText>
                  <GrayText>12,000원</GrayText>
                </TextContainer2>
                <TextContainer2>
                  <GrayText>남은 시간</GrayText>
                  <PinkText>
                    {remainingDay}일 {remainingHour}:{remainingMin}:
                    {remainingSec}
                  </PinkText>
                </TextContainer2>
              </TextContainer>
            </Container>
          </GrayBox>
        );
      })*/}
      {video_component}
    </Positioner>
  );
}
