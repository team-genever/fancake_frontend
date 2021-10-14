import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { GetBackendIP } from "../../settings"

// import axios from "axios";

const Positioner = styled.div`
  text-align: center;
  padding: 10vw 0vw 5vw 0vw;

  @media only screen and (max-width: 640px) {
    padding: 10vw 7vw 5vw 7vw;
  }
`;

const Heading = styled.div`
  color: black;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 1%;
  margin-top: 20px;

  @media only screen and (max-width: 640px) {
    font-size: 5vw;
  }
`;

const ChannelName = styled.div`
  color: ${(props) => props.theme.fontSmallGray};
  font-weight: bold;
  font-size: large;

  @media only screen and (max-width: 640px) {
    font-size: 3vw;
  }
`;

const VideoContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const YoutubeEmbed = styled.iframe`
  aspect-ratio: 16 / 9;
  width: 60%;
  min-width: 500px;
  height: max-content;
  border: 1px solid black;

  @media only screen and (max-width: 640px) {
    width: 100%;
    min-width: 0px;
  }
`;

const Video = ({ data, testdata }) => {
  console.log(data);
  console.log("testdata here is ", testdata);
  console.log("channel URL is ", testdata.channel.channelUrl);
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
      <YoutubeEmbed
        src={testdata.videoid}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Heading>{testdata.title}</Heading>
      <Link
        to={{ pathname: testdata.channel.channelUrl }}
        style={{ textDecoration: "none" }}
        target="_blank"
      >
        <ChannelName href={testdata.channel.channelUrl}>
          {testdata.channel.channelTitle}
        </ChannelName>
      </Link>
    </Positioner>
  );
};

export default Video;
