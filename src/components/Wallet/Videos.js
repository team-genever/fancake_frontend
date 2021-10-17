import React from "react";
import styled from "styled-components";
import OwningVideo from "./OwningVideo";
import WithVideo from "./WithVideo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
  @media screen and (max-width: 640px) {
    margin-bottom: 20vw;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 30px;
  @media screen and (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 5vw;
  }
`;

const VideosGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(870px, 1fr);
  grid-auto-rows: 320px;
  gap: 30px;
  @media only screen and (max-width: 1007px) {
    grid-template-columns: minmax(680px, 1fr);
    grid-auto-rows: 250px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8vw;
    grid-auto-rows: 108vw;
  }
`;

const videos = [
  {
    types: [
      { id: "youtube", name: "유튜브" },
      { id: "onsale", name: "판매중" },
    ],
    title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초키니 컴퓨터 사봤습니다",
    channelName: "뻘짓 연구소",
    tokenCount: 100,
    price: 12000,
  },
  {
    types: [
      { id: "tiktok", name: "틱톡" },
      { id: "onsale", name: "판매중" },
    ],
    title: "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
    channelName: "뻘짓 연구소",
    tokenCount: 120,
    price: 12000,
  },
];

const Videos = ({ title, videosType, userStocks }) => (
  <Container>
    <Title>{title}</Title>
    <VideosGrid>
      {videosType === "own" ? (
        <>
          {userStocks ? (
            userStocks.map((stock, index) => (
              <OwningVideo
                key={index}
                videoId={stock.video.videoId}
                title={stock.video.title}
                channelTitle={stock.video.channel.channelTitle}
                totalAmount={stock.video.totalAmount}
                size={stock.size}
                totalPrice={
                  stock.video.pricePerShare * stock.video.currentAmount
                }
              />
            ))
          ) : (
            <span>보유한 영상이 없습니다.</span>
          )}
        </>
      ) : (
        <>
          <WithVideo {...videos[0]} />
          <WithVideo {...videos[1]} />
        </>
      )}
    </VideosGrid>
  </Container>
);

export default Videos;
