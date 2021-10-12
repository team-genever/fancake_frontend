import styled from "styled-components";
import React from "react";
import img from "images/blank.png";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
    background-color: ${(props) => props.theme.boxLightGray};
  }
`;

const VideoImg = styled.div`
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

const VideoDescription = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 30px 20px 30px;
  @media only screen and (max-width: 1007px) {
    padding: 30px 25px 10px 25px;
  }
  @media screen and (max-width: 640px) {
    padding: 5vw;
  }
`;

const VideoTitle = styled.h3`
  width: 100%;
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media only screen and (max-width: 1007px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 4px;
  }
  @media screen and (max-width: 640px) {
    font-size: 4.3vw;
    line-height: 6vw;
  }
`;

const VideoChannel = styled.small`
  display: block;
  font-size: 17px;
  font-weight: normal;
  margin-bottom: 15px;
  @media only screen and (max-width: 1007px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 640px) {
    color: ${(props) => props.theme.boxGray};
    font-size: 2.7vw;
    margin-bottom: 3.5vw;
  }
`;

const VideoTokenInfos = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: 27px;
  @media only screen and (max-width: 1007px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 5.5vw;
  }
`;

const VideoTokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  & small {
    font-size: 14px;
    color: ${(prop) => prop.theme.boxGray};
    width: max-content;
  }
  & span {
    font-size: 14px;
    & strong {
      font-weight: bold;
    }
    & .pink {
      color: ${(props) => props.theme.mainPink};
    }
  }
  @media only screen and (max-width: 1007px) {
    & small {
      font-size: 12px;
    }
    & span {
      font-size: 12px;
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
      & .pink {
        color: black;
      }
    }
  }
`;

const VideoButtonContainer = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`;

const VideoButton = styled.button`
  width: 200px;
  height: 45px;
  border: 1px solid ${(props) => props.theme.borderGray};
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 16px;
    font-weight: bold;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and (max-width: 1007px) {
    width: 150px;
    height: 40px;
    & span {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 640px) {
    background-color: ${(props) => props.theme.boxLightGray};
    width: 36vw;
    height: 8vw;
    & span {
      font-size: 2.7vw;
    }
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
          <small>증서번호 </small>
          <small>K238OIJEOOEIWIOJFEWO</small>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>누적 수익셰어 금액</small>
          <span>
            <strong>1300</strong> 원
          </span>
        </VideoTokenInfo>
      </VideoTokenInfos>
      <VideoButtonContainer>
        <VideoButton>
          <span>증명서 조회하기</span>
        </VideoButton>
      </VideoButtonContainer>
    </VideoDescription>
  </Container>
);

export default OwningVideo;
