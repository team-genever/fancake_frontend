import styled from "styled-components";
import React from "react";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
`;

const VideoImg = styled.div`
  width: 100%;
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
  padding: 20px 20px 20px 20px;
  @media screen and (max-width: 640px) {
    padding: 5vw;
  }
`;

const VideoTitle = styled.h3`
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

const VideoChannel = styled.small`
  display: block;
  font-size: 13px;
  font-weight: normal;
  margin-bottom: 10px;
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
    }
    & .pink {
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
      & .pink {
        color: black;
      }
    }
  }
`;

const VideoButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: center;
`;

const VideoButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.mainPink};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 20px;
    font-weight: bold;
    color: white;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mainPinkHover};
  }
  @media screen and (max-width: 640px) {
    height: 12vw;
    & span {
      font-size: 3.8vw;
    }
  }
`;

const OwningVideo = ({
  videoId,
  title,
  channelTitle,
  totalAmount,
  size,
  totalPrice,
}) => (
  <Container>
    <VideoImg>
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`thumbnail_${videoId}`}
      />
    </VideoImg>
    <VideoDescription>
      <VideoTitle>{title}</VideoTitle>
      <VideoChannel>{channelTitle}</VideoChannel>
      <VideoTokenInfos>
        <VideoTokenInfo>
          <small>총 보유 조각</small>
          <span>
            <strong className="pink">{size}</strong>/{totalAmount} 조각
          </span>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>증서번호 </small>
          <small>K238OIJEOOEIWIOJFEWO</small>
        </VideoTokenInfo>
        <VideoTokenInfo>
          <small>누적 수익셰어 금액</small>
          <span>
            <strong>{totalPrice}</strong> 원
          </span>
        </VideoTokenInfo>
      </VideoTokenInfos>
    </VideoDescription>
    <VideoButtonContainer>
      <VideoButton>
        <span>증명서 조회하기</span>
      </VideoButton>
    </VideoButtonContainer>
  </Container>
);

export default OwningVideo;
