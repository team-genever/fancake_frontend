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
import styled from "styled-components";

const LoadingContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Experience = ({ userInfo, updateUserInfo }) => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [creater, setCreater] = useState("all");

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  const [videos, setVideos] = useState([]);
  const [videoInfo, setVideoInfo] = useState({});

  // get real api data
  useEffect(() => {
    getApi();
  }, []);

  async function getApi() {
    try {
      const responseVideos = await api.get("videos", {
        params: {
          countPerPage: 50,
        },
      });
      const responseChannels = await api.get("channels");
      console.log(responseVideos.data.content);
      setVideos(responseVideos.data.content);
      setCreators(responseChannels.data.content);
    } catch {
      setError({ error: "정보를 가져오는 동안 오류가 발생했습니다." });
    } finally {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  const getCreators = async () => {
    try {
    } catch (e) {}
  };

  return loading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <div>
      <Helmet>
        <title>fanCake | 체험하기</title>
      </Helmet>
      <Banner />
      <VideoSection
        creater={creater}
        videos={videos}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
        loading={loading}
        error={error}
        videoInfo={videoInfo}
        setVideoInfo={setVideoInfo}
        userInfo={userInfo}
        updateUserInfo={updateUserInfo}
        getApi={getApi}
      >
        <CreaterSection
          creators={creators}
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
