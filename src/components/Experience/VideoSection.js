import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Videos from "components/Wallet/Videos";
import WithVideo from "../Wallet/WithVideo";
import Detail from "pages/Detail";
import { useCookies } from "react-cookie";
import { api } from "settings";
import { Widget } from "@typeform/embed-react";
import { GetBackendIP } from "settings";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 80px 10vw;
  width: 100%;
  height: max-content;

  @media only screen and (max-width: 640px) {
    padding: 15vw 5vw;
  }
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 35px;

  @media only screen and (max-width: 640px) {
    font-size: 5.5vw;
    margin-bottom: 5vw;
  }
`;

const Step = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  & strong {
    font-size: 25px;
    color: ${(props) => props.theme.mainPink};
  }
  @media only screen and (max-width: 640px) {
    font-size: 3.5vw;
    & strong {
      font-size: 4vw;
    }
  }
`;

const StepContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  @media only screen and (max-width: 640px) {
    padding: 4vw 5vw;
    margin-bottom: 3vw;
  }
`;

const SeolmunContainer = styled.div`
  background-color: white;
  max-width: 800px;
  border-radius: 20px;
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 20px auto;
  @media only screen and (max-width: 640px) {
    padding: 4vw 5vw;
    margin-bottom: 3vw;
  }
`;

const GrayBox = styled.div`
  background-color: ${(props) => props.theme.boxCountGray};
  margin: 25px 0px;
`;

const Thumbnail = styled.img`
  width: 688px;
  height: 387px;

  @media only screen and (max-width: 640px) {
    height: 50.625vw;
    width: 90vw;
  }
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

  @media only screen and (max-width: 640px) {
    font-size: 16px;
    overflow-wrap: normal;
  }
`;

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
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

  @media only screen and (max-width: 640px) {
    height: 11px;
  }
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

  @media only screen and (max-width: 640px) {
    height: 11px;
  }
`;

const GrayText = styled.div`
  color: ${(props) => props.theme.boxGray};
`;

const PinkText = styled.div`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
`;

const FilterButton = styled.button`
  background-color: ${(props) => {
    switch (props.clicked) {
      case true:
        return props.theme.boxGray;
      case false:
        return props.theme.boxLightGray;
    }
  }};
  color: ${(props) => {
    switch (props.clicked) {
      case true:
        return "white";
      case false:
        return props.theme.boxGray;
    }
  }};
  border: 1px solid ${(props) => props.theme.boxGray};
  border-radius: 6px;
  padding: 2px 20px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;

  @media only screen and (max-width: 640px) {
    font-size: 10px;
    padding: 3px 15px;
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
    font-size: 16px;
    color: white;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  grid-template-rows: 30px;
  margin-bottom: 12px;
  gap: 10px;
`;

export default function VideoSection({
  children,
  creater,
  videos,
  setCurrentVideo,
  currentVideo,
  videoInfo,
  setVideoInfo,
  userInfo,
  updateUserInfo,
  getApi,
}) {
  const [hasBought, setHasBought] = useState(false);

  const [cookies] = useCookies(["Authorization"]);

  const getUserStocks = async () => {
    try {
      const response = await api.get("users/me/stocks", {
        headers: {
          Authorization: cookies.Authorization,
        },
      });
      if (response.data.content.length > 0) {
        setHasBought(true);
      }
    } catch {}
  };

  useEffect(() => {
    if (cookies.Authorization) {
      getUserStocks();
    }
  }, []);

  return (
    <Positioner>
      <Heading>영상의 첫 번째 주인이 되세요!</Heading>
      <StepContainer id="step_one">
        <Step>
          <strong>STEP 1.</strong> 좋아하는 크리에이터를 선택하세요.
        </Step>
        {children}
      </StepContainer>
      <StepContainer id="step_two">
        <Step>
          <strong>STEP 2.</strong> 구매하고자 하는 영상을 선택하세요.
        </Step>
        {/* <Container>
        <FilterButton clicked={all} name="전체" onClick={ButtonClicked}>
          전체
        </FilterButton>
        <FilterButton clicked={plan} name="판매예정" onClick={ButtonClicked}>
          판매예정
        </FilterButton>
        <FilterButton clicked={onSale} name="구매가능" onClick={ButtonClicked}>
          구매가능
        </FilterButton>
        <FilterButton clicked={closed} name="종료" onClick={ButtonClicked}>
          종료
        </FilterButton>
      </Container> */}

        {/*video_component*/}
        <Videos
          creater={creater}
          videos={videos}
          videosType="with"
          setCurrentVideo={setCurrentVideo}
          setVideoInfo={setVideoInfo}
        />
      </StepContainer>
      {currentVideo && (
        <StepContainer id="step_three">
          <Step>
            <strong>STEP 3.</strong> 영상 조각을 원하는 개수만큼 구매하세요.
          </Step>
          <Detail
            userInfo={userInfo}
            updateUserInfo={updateUserInfo}
            videoInfo={videoInfo}
            setHasBought={setHasBought}
            currentVideo={currentVideo}
            getApi={getApi}
          />
        </StepContainer>
      )}
      {(
        <SeolmunContainer id="formContainer">
          <Step>설문에 참여하고 상품도 받아가세요! 🥤</Step>
          {/* <Widget id="y9tvCbTe" style={{ width: "100%", height: 500 }} /> */}
          <iframe
            title="fanCake Google Form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScwfgHg1E8e1ZnqLhBSaq8U7JbgnJnKJptGDhaHtQRKydi7jw/viewform?embedded=true"
            width="100%"
            height="1200px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            로드 중…
          </iframe>
        </SeolmunContainer>
      )}
    </Positioner>
  );
}
