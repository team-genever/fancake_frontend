import React, { Component } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  background-color: #e3e3e3;
  padding: 100px 130px 100px 130px;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
`;

export default class VideoSection extends Component {
  render() {
    return (
      <Positioner>
        <Heading>영상의 첫 번째 주인이 되세요!</Heading>
      </Positioner>
    );
  }
}
