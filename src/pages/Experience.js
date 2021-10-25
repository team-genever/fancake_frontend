//2 - 체험하기 페이지

import { getElementError } from "@testing-library/dom";
import React, { Component, useRef, useState, useEffect } from "react";
import Banner from "components/Experience/Banner";
import CreaterSection from "components/Experience/CreaterSection";
import RequestSection from "components/Experience/RequestSection";
import VideoSection from "components/Experience/VideoSection";
import { GetBackendIP } from "../settings";
import axios from "axios";
import { api } from "settings";
import Loading from "components/Loading";
import { useCookies, withCookies } from "react-cookie";
import { Helmet } from "react-helmet";

const Experience = () => {
  const myRef = useRef(null);

  const [currentVideo, setCurrentVideo] = useState(null);

  const [loading, setLoading] = useState(true);

  const [creater, setCreater] = useState("all");

  const Scroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    console.log(myRef.current);
  };
  /*
  useEffect(() => {
    //==componenetDidMount
    getApi();
    console.log("hi");

    console.log(creater);
  }, []);
*/
  const [userInfo, setUserInfo] = useState([]);
  const [userStocks, setUserStocks] = useState([
    {
      video: {
        title: "title1",
        videoId: "1",
        channel: {
          channelTitle: "야식이",
          channelUrl: "https://www.youtube.com/c/yasigi",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title2",
        videoId: "2",
        channel: {
          channelTitle: "야식이",
          channelUrl: "https://www.youtube.com/c/yasigi",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title3",
        videoId: "3",
        channel: {
          channelTitle: "야식이",
          channelUrl: "https://www.youtube.com/c/yasigi",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title4",
        videoId: "4",
        channel: {
          channelTitle: "야식이",
          channelUrl: "https://www.youtube.com/c/yasigi",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title5",
        videoId: "5",
        channel: {
          channelTitle: "바다 중독자",
          channelUrl: "https://www.youtube.com/user/helladope12",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title6",
        videoId: "6",
        channel: {
          channelTitle: "야식이",
          channelUrl: "https://www.youtube.com/c/yasigi",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title7",
        videoId: "7",
        channel: {
          channelTitle: "뻘짓 연구소",
          channelUrl: "https://www.youtube.com/c/BullsLab",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title8",
        videoId: "8",
        channel: {
          channelTitle: "뻘짓 연구소",
          channelUrl: "https://www.youtube.com/c/BullsLab",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
    {
      video: {
        title: "title9",
        videoId: "9",
        channel: {
          channelTitle: "맛있는 생각",
          channelUrl:
            "https://www.youtube.com/c/%EB%A7%9B%EC%9E%88%EB%8A%94%EC%83%9D%EA%B0%81",
        },
        totalAmount: 10,
        currentAmount: 1,
        pricePerShare: 1000,
        expirationDate: "2022-2-22",
      },
    },
  ]);
  const [userConfirmStocks, setConfirmStocks] = useState([]);

  async function getApi() {
    let tempData;
    let backendip = GetBackendIP();
    console.log(backendip);

    const { cookies } = 0;

    try {
      const responseInfo = await api.get("user", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          detail: true,
        },
      });
      const responseStock = await api.get("user/stocks", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          confirm: false,
        },
      });
      const responseConfirmStock = await api.get("user/stocks", {
        headers: {
          Authorization: cookies.get("Authorization"),
        },
        params: {
          confirm: true,
        },
      });
      setUserInfo(responseInfo.data);
      setUserStocks(responseStock.data.content);
      setConfirmStocks(responseConfirmStock.data.content);

      /*const response = await axios.get(backendip + "videos");
      console.log(response);
      tempData = response.data;
      console.log("tempData is ", tempData);
      setTestVideos(tempData.content);*/
    } catch {
      console.error({ error: "정보를 가져오는 동안 오류가 발생했습니다." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Helmet>
        <title>fanCake | 체험하기</title>
      </Helmet>
      <Banner />
      <VideoSection
        creater={creater}
        userStocks={userStocks}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      >
        <CreaterSection
          creater={creater}
          setCreater={setCreater}
          setCurrentVideo={setCurrentVideo}
        />
      </VideoSection>
      {/*<RequestSection myRef={myRef} />*/}
    </div>
  );
};

export default Experience;
