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

const Video = ({ data }) => {
  console.log(data);
  return (
    <Positioner>
      <VideoContainer></VideoContainer>
      <Heading>{data.title}</Heading>
      <ChannelName>{data.channelName}</ChannelName>
    </Positioner>
  );
};

export default Video;
