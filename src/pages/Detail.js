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
  display: flex;
  //flex-wrap: wrap;
  background-color: ${(props) => props.theme.fontSmallGray};
  padding: 2vw;

  @media only screen and (max-width: 1007px) {
    display: inline-block;
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

function Detail({ setHasBought, videoInfo, currentVideo }) {
  return (
    currentVideo && (
      <Container>
        <Container2>
          <Video data={videoInfo} />
          <VideoInfo data={videoInfo} />
        </Container2>
      </Container>
    )
  );
}

export default Detail;
