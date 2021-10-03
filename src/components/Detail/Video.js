import React from "react";
import styled from "styled-components";

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

const Video = ({ data }) => {
  console.log(data);
  return (
    <Positioner>
      <YoutubeEmbed
        src={`https://www.youtube.com/embed/PQehBcftLKU`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      <Heading>{data.title}</Heading>
      <ChannelName>{data.channelName}</ChannelName>
    </Positioner>
  );
};

export default Video;
