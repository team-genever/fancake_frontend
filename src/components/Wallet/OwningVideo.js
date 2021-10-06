import styled from "styled-components";
import React from "react";
import img from "images/blank.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const VideoImg = styled.div`
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  & img {
    width: 100%;
    height: 100%;
  }
`;

const VideoDescription = styled.div`
  width: 100%;
  height: 100%;
  padding: 4.7vw 3vw 2.6vw 3vw;
`;

const VideoTitle = styled.h3`
  width: 100%;
  font-size: 1.7vw;
  line-height: 2.6vw;
  font-weight: bold;
  margin-bottom: 0.6vw;
`;

const VideoChannel = styled.small`
  display: block;
  font-size: 1.3vw;
  font-weight: normal;
  margin-bottom: 2vw;
`;

const VideoTokenInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.1vw;
  margin-bottom: 1.5vw;
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
    }
    & .pink {
      color: ${(props) => props.theme.mainPink};
    }
  }
`;

const VideoButton = styled.button`
  width: 14vw;
  height: 3.2vw;
  border: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 1.2vw;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
  }
`;

const OwningVideo = ({ title, channelName, tokenCount }) => (
  <Container>
    <VideoImg>
      <img src={img} alt="blank" />
    </VideoImg>
    <VideoDescription>
      <VideoTitle>{title}</VideoTitle>
      <VideoChannel>{channelName}</VideoChannel>
      <VideoTokenInfos>
        <VideoTokenInfo>
          <small>총 보유 조각</small>
          <span>
            <strong className="pink">12</strong>/{tokenCount} 조각
          </span>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>증서번호</small>
          <small>K238OIJEOOEIWIOJFEWO</small>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>누적 수익셰어 금액</small>
          <span>
            <strong>1300</strong>원
          </span>
        </VideoTokenInfo>
      </VideoTokenInfos>
      <VideoButton>
        <span>증명서 조회하기</span>
      </VideoButton>
    </VideoDescription>
  </Container>
);

export default OwningVideo;
