import styled from "styled-components";
import Video from "components/Detail/Video";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoInfo from "components/Detail/VideoInfo";
import { GetBackendIP } from "../settings";
import Loading from "components/Loading";

import axios from "axios";
import { getAllByDisplayValue } from "@testing-library/dom";

const Container = styled.div`
  width: 100%;
  height: max-content;
`;

const Container2 = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.fontSmallGray};
  padding: 2vw;

  @media only screen and (max-width: 1007px) {
    display: block;
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

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  justify-content: center;
  padding-top: 300px;
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

function Detail({ match, login_info, currentVideoId }) {
  const [videoId, usetVideoId] = useState(currentVideoId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //==componenetDidMount
    getApi();
    console.log("hi");
  }, []);

  const [testVideos, setTestVideos] = useState([
    {
      video_id: "0",
      channel: {
        channelId: "1",
        channelTitle: "test channel title1",
        channelURL: "https://www.youtube.com/embed/PQehBcftLKU",
        thubnailURL: "",
      },
      title: "temp Title1 (백엔드에서 못가져옴)",
      totalAmount: 100,
      currentAmount: 10,
      pricePerShare: 1000,
      marketCap: 100000,
      onSale: true,
      expirationDate: "2021-10-31T09:19:04.159157",
    },
    {
      video_id: "1",
      channel: {
        channelId: "2",
        channelTitle: "test channel title2",
        channelURL: "https://www.youtube.com/embed/PQehBcftLKU",
        thubnailURL: "",
      },
      title: "temp Title2 (백엔드에서 못가져옴)",
      totalAmount: 100,
      currentAmount: 10,
      pricePerShare: 1000,
      marketCap: 100000,
      onSale: true,
      expirationDate: "2021-10-31T09:19:04.159157",
    },
  ]);

  async function getApi() {
    let tempData;
    let backendip = GetBackendIP();
    console.log(backendip);

    try {
      const response = await axios.get(backendip + "videos");
      console.log(response);
      tempData = response.data;
      console.log("tempData is ", tempData);
      setTestVideos(tempData.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return loading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <Container>
      {console.log("tesvideos is", testVideos)}
      <Container2>
        <Video
          data={videos.find((data) => data.video_id === videoId)}
          testdata={testVideos[videoId ? videoId : 0]}
        />
        <VideoInfo testdata={testVideos[videoId ? videoId : 0]} />
      </Container2>
    </Container>
  );
}

export default Detail;
