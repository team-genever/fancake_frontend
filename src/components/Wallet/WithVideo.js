import styled from "styled-components";
import React from "react";
import img from "../../images/blank.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: 100%;
  display: flex;
`;

const Thumbnail = styled.img`
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 83px 106px 83px 59px;
  width: 100%;
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  grid-template-rows: 30px;
  margin-bottom: 12px;
  gap: 10px;
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
    font-size: 16px;
    color: white;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  width: 100%;
  margin-bottom: 12px;
`;

const ChannelName = styled.div`
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 30px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 18px;
  width: 100%;
  border-radius: 30px;
  padding: 0px;
  margin-bottom: 10px;
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
`;

const VideoTokenInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 35px;
`;

const VideoTokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  & small {
    font-size: 24px;
    color: ${(prop) => prop.theme.boxGray};
  }
  & span {
    font-size: 24px;
    & strong {
      font-weight: bold;
      color: ${(props) => props.theme.mainPink};
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
