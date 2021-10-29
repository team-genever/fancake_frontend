import styled from "styled-components";
import React, { useState } from "react";
import Popup from "components/Popup";

const Container = styled.div`
  background-color: ${(props) => props.theme.fontSmallGray};
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`;

const VideoDescription = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 5vw;
  }
`;

const VideoTitle = styled.h3`
  width: 100%;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
  @media screen and (max-width: 640px) {
    font-size: 4.3vw;
    line-height: 4.3vw;
    margin-bottom: 1vw;
  }
`;

const VideoChannel = styled.small`
  display: block;
  width: 100%;
  font-size: 13px;
  font-weight: normal;
  margin-bottom: 3px;
  @media screen and (max-width: 640px) {
    color: ${(props) => props.theme.boxGray};
    font-size: 2.7vw;
    margin-bottom: 2vw;
  }
`;

const VideoTokenInfos = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-bottom: 20px;
  @media screen and (max-width: 640px) {
    margin-bottom: 4vw;
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

const VideoButton = styled.button`
  width: 80%;
  height: 40px;
  background-color: ${(props) => props.theme.mainPink};
  border: none;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.mainPinkHover};
  }
  @media screen and (max-width: 640px) {
    height: 10vw;
    border-radius: 5vw;
    & span {
      font-size: 3vw;
    }
  }
`;

const PopupTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 5.3vw;
    line-height: 6vw;
    margin-bottom: 5vw;
  }
`;

const PopupDescription = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 3.5vw;
    line-height: 4.5vw;
    margin-bottom: 5vw;
  }
`;

const OwningVideo = ({
  videoId,
  title,
  channelTitle,
  totalAmount,
  price,
  size,
}) => {
  const [sellClicked, setSellClicked] = useState(false);
  return (
    <Container>
      {sellClicked ? (
        <Popup padding={[40, 30]}>
          <PopupTitle>판매하기</PopupTitle>
          <PopupDescription>
            판매하기 기능은 정식 서비스에서 출시됩니다.
            <br />
            많은 관심 부탁드립니다!
          </PopupDescription>
          <div className="buttonsContainer">
            <button onClick={() => setSellClicked(false)}>확인했습니다</button>
          </div>
        </Popup>
      ) : (
        <></>
      )}
      <VideoImg
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`thumbnail_${videoId}`}
      />
      <VideoDescription>
        <VideoTitle>{title}</VideoTitle>
        <VideoChannel>{channelTitle}</VideoChannel>
        <VideoTokenInfos>
          <VideoTokenInfo>
            <small>총 보유 조각</small>
            <span>
              <strong className="pink">{size}</strong> / {totalAmount} 조각
            </span>
          </VideoTokenInfo>
          <VideoTokenInfo>
            <small>총 구매 금액</small>
            <small>{price * size}</small>
          </VideoTokenInfo>
          <VideoTokenInfo>
            <small>누적 수익셰어 금액</small>
            <span>
              <strong>0</strong> 베리
            </span>
          </VideoTokenInfo>
        </VideoTokenInfos>
        <VideoButton onClick={() => setSellClicked(true)}>
          <span>판매하기</span>
        </VideoButton>
      </VideoDescription>
    </Container>
  );
};

export default OwningVideo;
