import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Positioner = styled.div`
  text-align: center;
  padding: 10vw 0 5vw 0;
`;

const Heading = styled.div`
  color: black;
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 1%;
  margin-top: 20px;
`;

const ChannelName = styled.div`
  color: ${(props) => props.theme.fontSmallGray};
  font-weight: bold;
  font-size: large;
`;

const VideoContainer = styled.div`
  width: 600px;
  height: 400px;
`;

const YoutubeEmbed = styled.iframe`
  width: 853px;
  height: 480px;
`;

const Video = ({ data, testdata }) => {
  console.log(data);
  console.log("testdata here is ", testdata);
  console.log("channel URL is ", testdata.channel.channelUrl);
  return (
    <Positioner>
      <YoutubeEmbed
        src={testdata.channel.channelUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Heading>{testdata.title}</Heading>
      <Link to={{ pathname: testdata.channel.channelUrl }} style={{ textDecoration: 'none' }} target="_blank">
        <ChannelName href ={testdata.channel.channelUrl}>{testdata.channel.channelTitle}</ChannelName>
      </Link>
    </Positioner>
  );
};

export default Video;
