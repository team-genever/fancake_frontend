import styled from "styled-components";
import React from "react";
import img from "images/blank.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    background-color: ${(props) => props.theme.boxLightGray};
  }
`;

const Thumbnail = styled.img`
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 640px) {
    height: max-content;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.7vw 3vw 2.6vw 3vw;
  @media screen and (max-width: 640px) {
    padding: 5vw;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 5.5vw;
  grid-template-rows: 1.8vw;
  margin-bottom: 1vw;
  gap: 10px;
  @media screen and (max-width: 640px) {
    grid-auto-columns: 11vw;
    grid-template-rows: 4vw;
    gap: 1vw;
  }
`;

const Property = styled.div`
  background-color: ${(props) => {
    switch (props.type) {
      case "youtube":
        return props.theme.mainPink;
      case "tiktok":
        return "#9d2aa6";
      default:
        return props.theme.littleBoxGray;
    }
  }};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 0.9vw;
    color: white;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.9vw;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 1.7vw;
  line-height: 2.6vw;
  font-weight: bold;
  margin-bottom: 0.6vw;
  @media screen and (max-width: 640px) {
    font-size: 4.3vw;
    line-height: 6vw;
  }
`;

const ChannelName = styled.div`
  display: block;
  font-size: 1.3vw;
  font-weight: normal;
  margin-bottom: 1.7vw;
  @media screen and (max-width: 640px) {
    color: ${(props) => props.theme.boxGray};
    font-size: 2.7vw;
    margin-bottom: 5vw;
  }
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 18px;
  width: 100%;
  border-radius: 30px;
  padding: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    height: 3vw;
    border-radius: 2vw;
  }
`;

const Progress = styled.div`
  height: 18px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  width: 84%;
  @media screen and (max-width: 640px) {
    height: 3vw;
    border-radius: 2vw;
  }
`;

const VideoTokenInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
  margin-bottom: 1.5vw;
  @media screen and (max-width: 640px) {
    margin-bottom: 5.5vw;
  }
`;

const VideoTokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  & small {
    font-size: 1.2vw;
    color: ${(prop) => prop.theme.boxGray};
  }
  & span {
    font-size: 1.2vw;
    & strong {
      font-weight: bold;
      color: ${(props) => props.theme.mainPink};
    }
  }
  @media screen and (max-width: 640px) {
    & small {
      font-size: 2.5vw;
      color: ${(prop) => prop.theme.boxGray};
    }
    & span {
      font-size: 2.5vw;
      & strong {
        font-weight: bold;
      }
    }
  }
`;

const WithVideo = ({ types, title, channelName, tokenCount, price }) => (
  <Container>
    <Thumbnail src={img} />
    <TextContainer>
      <PropertiesGrid>
        {types.map((type, index) => (
          <Property key={index} type={type.id}>
            <span>{type.name}</span>
          </Property>
        ))}
      </PropertiesGrid>

      <Title>{title}</Title>
      <ChannelName>{channelName}</ChannelName>
      <ProgressBar>
        <Progress />
      </ProgressBar>
      <VideoTokenInfos>
        <VideoTokenInfo>
          <small>총 {tokenCount} 조각</small>
          <span>
            <strong>84%</strong>
          </span>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>조각당 가격</small>
          <small>{price}원</small>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>남은 시간</small>
          <span>
            <strong>3일 12:11:05</strong>
          </span>
        </VideoTokenInfo>
      </VideoTokenInfos>
    </TextContainer>
  </Container>
);

export default WithVideo;
