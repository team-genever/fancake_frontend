import styled from "styled-components";
import Video from "../components/Detail/Video";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoInfo from "../components/Detail/VideoInfo";

const Container = styled.div`
  width: 100%;
  height: max-content;
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

const videos = [
  {
    video_id: "1",
    types: [
      { id: "youtube", name: "유튜브" },
      { id: "onsale", name: "판매중" },
    ],
    title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초키니 컴퓨터 사봤습니다",
    channelName: "뻘짓 연구소",
    tokenCount: 100,
    price: 12000,
    deadline: "2021-10-31",
  },
  {
    video_id: "2",
    types: [
      { id: "tiktok", name: "틱톡" },
      { id: "onsale", name: "판매중" },
    ],
    title: "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
    channelName: "뻘짓 연구소",
    tokenCount: 120,
    price: 12000,
    deadline: "2021-10-31",
  },
  {
    video_id: "3",
    types: [
      { id: "tiktok", name: "틱톡" },
      { id: "closed", name: "판매완료" },
    ],
    title: "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
    channelName: "뻘짓 연구소",
    tokenCount: 120,
    price: 12000,
    deadline: "2021-10-31",
  },
];

const Detail = ({ match, login_info }) => {
  const [videoId, usetVideoId] = useState(match.params.videoId);

  return (
    <Container>
      <Video data={videos.find((data) => data.video_id === videoId)} />
      <VideoInfo />
    </Container>
  );
};

export default Detail;
