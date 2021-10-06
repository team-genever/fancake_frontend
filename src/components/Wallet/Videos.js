import React from "react";
import styled from "styled-components";
import OwningVideo from "./OwningVideo";
import WithVideo from "./WithVideo";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`;

const Title = styled.h2`
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 50px;
`;

const VideosGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  grid-auto-rows: 27vw;
  gap: 30px;
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

const Videos = ({ title, videosType }) => (
  <Container>
    <Title>{title}</Title>
    <VideosGrid>
      {videosType === "own" ? (
        <>
          <OwningVideo {...videos[0]} />
          <OwningVideo {...videos[0]} />
          <OwningVideo {...videos[0]} />
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
