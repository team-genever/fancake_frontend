import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { GetBackendIP } from "../../settings"

// import axios from "axios";

const Positioner = styled.div`
  text-align: left;
  //padding: 1vw 0vw 5vw 0vw;

  @media only screen and (max-width: 640px) {
    //padding: 10vw 7vw 5vw 7vw;s
  }
`;

const Heading = styled.div`
  color: black;
  font-weight: bold;
  font-size: 25px;
  line-height: 32px;
  margin-bottom: 10px;
  margin-top: 10px;

  @media only screen and (max-width: 1007px) {
    //padding: 0vw 7vw;
    text-align: center;
  }
  @media only screen and (max-width: 640px) {
    font-size: 5vw;
  }
`;

const ChannelName = styled.div`
  color: ${(props) => props.theme.boxGray};
  font-weight: bold;
  font-size: large;

  @media only screen and (max-width: 1007px) {
    //padding: 0vw 7vw;
    text-align: center;
  }

  @media only screen and (max-width: 640px) {
    font-size: 3vw;
  }
`;

const YoutubeEmbed = styled.iframe`
  aspect-ratio: 16 / 9;
  width: 32vw;
  //min-width: 500px;
  height: max-content;
  border: none;

  @media only screen and (max-width: 1007px) {
    width: 100%;
    min-width: 0px;
  }
`;

const Video = ({ data }) => {
  //const [videoURL, setVideoURL] = useState("");

  // useEffect(()=> {
  //   getYoutube();
  // },[])

  // async function getYoutube() {
  //   let url;
  //   let backendip = GetBackendIP();
  //   console.log(backendip);

  //   try {
  //     const response = await axios.get(backendip+"video/"+testdata.videoIdx)
  //     console.log(response);
  //     url = response.data;
  //     console.log("url is ", url);
  //     setVideoURL(url);

  //   } catch (error) {
  //     console.error(error);

  //   }
  // }

  return (
    <Positioner>
      {/* <YoutubeEmbed
        src={data.videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      /> */}
      <YoutubeEmbed
        src={`https://www.youtube.com/embed/${data.videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <Heading>{data.title}</Heading>
      <Link
        to={{ pathname: data.channel.channelUrl }}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <ChannelName href={data.channel.channelUrl}>
          {data.channel.channelTitle}
        </ChannelName>
      </Link>
    </Positioner>
  );
};

export default Video;
