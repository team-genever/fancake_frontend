import styled from "styled-components";
import React from "react";
import img from "../../images/blank.png";

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
  padding: 90px 61px 51px 59px;
`;

const VideoTitle = styled.h3`
  width: 100%;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const VideoChannel = styled.small`
  display: block;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const VideoTokenInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
    }
    & .pink {
      color: ${(props) => props.theme.mainPink};
    }
  }
`;

const VideoButton = styled.button`
  width: 240px;
  height: 56px;
  border: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 20px;
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
