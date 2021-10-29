import React, { Component } from "react";
import styled from "styled-components";
import banner from "images/banner.jpg";

const Positioner = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  //padding: 20vh 10vw;
  height: 50vh;
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  display: absolute;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: -moz-linear-gradient(
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ); /* FF3.6+ */
    background: -webkit-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33)),
      color-stop(100%, rgba(0, 47, 75, 0.5)); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ); /* IE10+ */
    background: linear-gradient(rgba(0, 0, 0, 0.33), rgba(0, 0, 0, 0.33));
  }
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Headings = styled.div`
  position: absolute;
  top: 20vh;
  left: 10vw;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 10px;
  color: white;

  @media only screen and (max-width: 640px) {
    font-size: 6vw;
  }
`;

const Heading2 = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;

  @media only screen and (max-width: 640px) {
    font-size: 4.5vw;
  }
`;

export default class Banner extends Component {
  render() {
    return (
      <Positioner>
        <ImageContainer>
          <img src={banner} alt="banner" />
        </ImageContainer>
        <Headings>
          <Heading>만나서 반가워요!</Heading>
          <Heading2>지금 테스트 서비스에 참여하고 선물을 받아가세요!</Heading2>
        </Headings>
      </Positioner>
    );
  }
}
