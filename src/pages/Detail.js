import styled from "styled-components";
import Video from "components/Detail/Video";
import React from "react";
import VideoInfo from "components/Detail/VideoInfo";

import Comments from "components/Detail/Comments";

const Container = styled.div`
  width: 100%;
  height: max-content;
  background-color: ${(props) => props.theme.fontSmallGray};
`;

const Container2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  //flex-wrap: wrap;
  grid-template-areas:
    "video comments"
    "info comments";

  padding: 30px;
  gap: 20px;
  align-items: center;

  @media only screen and (max-width: 1007px) {
    max-height: max-content;
    gap: 30px;
    grid-template-columns: 1fr;
    grid-template-areas:
      "video"
      "info"
      "comments";
  }
  @media only screen and (max-width: 640px) {
    padding: 3.5vw;
  }
`;

function Detail({
  userInfo,
  updateUserInfo,
  setHasBought,
  videoInfo,
  currentVideo,
  getApi,
  stompClient,
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
          <Comments
            stompClient={stompClient}
            videoIdx={videoInfo.videoIdx}
            userIdx={userInfo.userIdx}
          />
        </Container2>
      </Container>
    )
  );
}

export default Detail;
