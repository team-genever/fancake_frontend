import React, { Component, useRef, useState } from "react";
import styled from "styled-components";

const Positioner = styled.div`
  width: 100%;
  padding: 100px 10vw;

  @media only screen and (max-width: 640px) {
    padding: 100px 10vw;
  }
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    font-size: 4.5vw;
  }
`;

const Button = styled.button`
  border: 1px solid black;
  display: block;
  background-color: white;
  cursor: pointer;
  padding: 8px 30px 8px 30px;
  font-weight: bold;
  margin: 50px auto 0px auto;
  text-decoration: none;

  @media only screen and (max-width: 640px) {
    font-size: 12px;
    padding: 15px 20px;
    margin: 30px auto 0px auto;
  }
`;

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  overflow-x: scroll;
  cursor: pointer;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Box = styled.div`
  text-align: center;
  margin: 10px;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 100%;

  @media only screen and (max-width: 640px) {
    width: 20vw;
    height: 20vw;
  }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;

  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
  }
`;

const CreaterSection = () => {
  const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const onDragStart = (e) => {
    e.preventDefault();

    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <Positioner>
      <Heading>참여 중인 크리에이터</Heading>
      <Container
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <Box>
          <Image></Image>
          <Name>야식이</Name>
        </Box>
        <Box>
          <Image></Image>
          <Name>맛있는 생각</Name>
        </Box>
        <Box>
          <Image></Image>
          <Name>바다 중독자</Name>
        </Box>
        <Box>
          <Image></Image>
          <Name>뻘짓 연구소</Name>
        </Box>
        <Box>
          <Image></Image>
          <Name>디자인 베이스</Name>
        </Box>
        <Box>
          <Image></Image>
          <Name>띠동갑형</Name>
        </Box>
      </Container>
      <Button>찾고 있는 크리에이터가 있나요?</Button>
    </Positioner>
  );
};

export default CreaterSection;
