import styled from "styled-components";
import Video from "components/Detail/Video";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import VideoInfo from "components/Detail/VideoInfo";
import { api, GetBackendIP } from "../settings";
import Loading from "components/Loading";

import axios from "axios";
import { getAllByDisplayValue } from "@testing-library/dom";

const Container = styled.div`
  width: 100%;
  height: max-content;
`;

const Container2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //flex-wrap: wrap;
  background-color: ${(props) => props.theme.fontSmallGray};
  padding: 30px;
  gap: 50px;
  align-items: center;

  @media only screen and (max-width: 1007px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, max-content);
    gap: 30px;
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, max-content);
    gap: 30px;
  }
`;

function Detail({
  userInfo,
  updateUserInfo,
  setHasBought,
  videoInfo,
  currentVideo,
  getApi,
}) {
  return (
    currentVideo && (
      <Container>
        <Container2>
          <Video data={videoInfo} />
          <VideoInfo
            data={videoInfo}
            userInfo={userInfo}
            updateUserInfo={updateUserInfo}
            setHasBought={setHasBought}
            getApi={getApi}
          />
        </Container2>
      </Container>
    )
  );
}

export default Detail;
