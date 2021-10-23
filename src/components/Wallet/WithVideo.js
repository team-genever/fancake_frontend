import styled, { keyframes } from "styled-components";
import React, { useEffect, useState } from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.1s ease-in-out;
  }
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px 20px 20px 20px;
  @media screen and (max-width: 640px) {
    padding: 5vw;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 50px;
  grid-template-rows: 20px;
  margin-bottom: 2px;
  gap: 5px;
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
    font-size: 11px;
    color: white;
  }
  @media screen and (max-width: 640px) {
    font-size: 0.9vw;
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: 22px;
  line-height: 32px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 640px) {
    font-size: 4.3vw;
    line-height: 6vw;
  }
`;

const ChannelName = styled.div`
  display: block;
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    color: ${(props) => props.theme.boxGray};
    font-size: 2.7vw;
    margin-bottom: 2vw;
  }
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 15px;
  width: 100%;
  border-radius: 30px;
  padding: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    height: 3vw;
    border-radius: 2vw;
  }
`;

const ProgressAnimation = (progress) => keyframes`
  from{
    width: 0;
  } to{
    width: ${progress}%;
  }
`;

const Progress = styled.div`
  height: 15px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  animation: ${(props) => ProgressAnimation(props.progress)} 1s ease-in-out
    forwards;
  @media only screen and (max-width: 1007px) {
    height: 15px;
  }
  @media screen and (max-width: 640px) {
    height: 3vw;
    border-radius: 2vw;
  }
`;

const VideoTokenInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  @media screen and (max-width: 640px) {
    margin-bottom: 5.5vw;
  }
`;

const VideoTokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  & small {
    font-size: 13px;
    color: ${(prop) => prop.theme.boxGray};
    width: max-content;
  }
  & span {
    font-size: 13px;
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

const WithVideo = ({
  types,
  title,
  videoId,
  channelTitle,
  totalAmount,
  currentAmount,
  price,
  expirationDate,
}) => {
  const [leftTime, setLeftTime] = useState("");
  const expire = new Date(expirationDate);
  const percent = Math.floor((currentAmount / totalAmount) * 100);

  const changeLeftDate = () => {
    const today = new Date();
    const left = expire.getTime() - today.getTime();
    const leftDay = Math.floor(left / (1000 * 60 * 60 * 24));
    const leftHours = Math.floor(
      (left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const leftMinutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    const leftSeconds = Math.floor((left % (1000 * 60)) / 1000);
    setLeftTime(
      `${leftDay}일 ${leftHours.toString().padStart(2, "0")}:${leftMinutes
        .toString()
        .padStart(2, "0")}:${leftSeconds.toString().padStart(2, "0")}`
    );
  };

  useEffect(() => {
    changeLeftDate();
    setInterval(changeLeftDate, 1000);
  }, []);

  return (
    <Container>
      <Thumbnail
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`thumbnail_${videoId}`}
      />
      <TextContainer>
        <PropertiesGrid>
          {types.map((type, index) => (
            <Property key={index} type={type.id}>
              <span>{type.name}</span>
            </Property>
          ))}
        </PropertiesGrid>

        <Title>{title}</Title>
        <ChannelName>{channelTitle}</ChannelName>
        <ProgressBar>
          <Progress progress={percent} />
        </ProgressBar>
        <VideoTokenInfos>
          <VideoTokenInfo>
            <small>총 {totalAmount} 조각</small>
            <span>
              <strong>{percent}%</strong>
            </span>
          </VideoTokenInfo>
          <VideoTokenInfo>
            <small>조각당 가격</small>
            <small>{price}원</small>
          </VideoTokenInfo>
          <VideoTokenInfo>
            <small>남은 시간</small>
            <span>
              <strong>{leftTime}</strong>
            </span>
          </VideoTokenInfo>
        </VideoTokenInfos>
      </TextContainer>
    </Container>
  );
};

export default WithVideo;
