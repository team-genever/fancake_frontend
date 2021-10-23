import React, { Component, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const Positioner = styled.div`
  width: 100%;
  display: flex;
  //position: relative;
`;

const Heading = styled.div`
  font-size: 25px;
  font-weight: normal;

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

// const LeftShadow = styled.div`
//   z-index: 4;
//   left: 0;
//   width: 30px;
//   height: 75px;
//   background: linear-gradient(
//     to left,
//     rgba(255, 255, 255, 0),
//     rgba(255, 255, 255, 1)
//   );
//   position: absolute;
// `;

// const RightShadow = styled.div`
//   z-index: 4;
//   right: 0;
//   width: 30px;
//   height: 75px;
//   background: linear-gradient(
//     to right,
//     rgba(255, 255, 255, 0),
//     rgba(255, 255, 255, 1)
//   );
//   position: absolute;
// `;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* overflow-x: scroll;
  cursor: pointer; */
  /* 
  ::-webkit-scrollbar {
    display: none;
  } */
`;

const Box = styled.div`
  min-width: max-content;
  padding: 5px;
  padding-right: 20px;
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  text-align: center;
  ${(props) =>
    props.name === "all" &&
    css`
      padding-left: 20px;
    `}
  ${(props) =>
    props.creater === props.name
      ? css`
          border: 1px solid ${(props) => props.theme.mainPink};
          box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
        `
      : css`
          border: 1px solid ${(props) => props.theme.boxGray};
          box-shadow: none;
        `}
  &:hover {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  margin-right: 10px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 14px;

  @media only screen and (max-width: 640px) {
    font-size: 2.5vw;
  }
`;

const CreaterSection = ({ creater, setCreater }) => {
  const scrollRef = useRef(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

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

  const onCreatorClick = (e) => {
    const target = e.currentTarget.getAttribute("name");
    const stepTwo = document.getElementById("step_two");
    setCreater(target);
    stepTwo &&
      stepTwo.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });

    // if (target === "야식이" && creater !== "야식이") {
    //   setCreater("야식이");
    //   console.log("set");
    //   document.getElementById("야식이").style.border = "2px solid #da225f";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "none";
    // } else if (target === "맛있는 생각" && creater !== "맛있는 생각") {
    //   setCreater("맛있는 생각");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "2px solid #da225f";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "none";
    //   console.log("set");
    // } else if (target === "바다 중독자" && creater !== "바다 중독자") {
    //   setCreater("바다 중독자");
    //   console.log("set");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "2px solid #da225f";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "none";
    // } else if (target === "뻘짓 연구소" && creater !== "뻘짓 연구소") {
    //   setCreater("뻘짓 연구소");
    //   console.log("set");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "2px solid #da225f";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "none";
    // } else if (target === "디자인 베이스" && creater !== "디자인 베이스") {
    //   setCreater("디자인 베이스");
    //   console.log("set");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border =
    //     "2px solid #da225f";
    //   document.getElementById("띠동갑형").style.border = "none";
    // } else if (target === "띠동갑형" && creater !== "띠동갑형") {
    //   setCreater("띠동갑형");
    //   console.log("set");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "2px solid #da225f";
    // } else {
    //   setCreater("all");
    //   document.getElementById("야식이").style.border = "none";
    //   document.getElementById("맛있는 생각").style.border = "none";
    //   document.getElementById("바다 중독자").style.border = "none";
    //   document.getElementById("뻘짓 연구소").style.border = "none";
    //   document.getElementById("디자인 베이스").style.border = "none";
    //   document.getElementById("띠동갑형").style.border = "none";
    // }

    // console.log("target", target);

    // console.log("creater", creater);
  };

  return (
    <Positioner>
      <Container
        ref={scrollRef}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
      >
        <Box onClick={onCreatorClick} name="all" creater={creater}>
          <Name>전체</Name>
        </Box>
        <Box onClick={onCreatorClick} name="야식이" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLSuiXNYPEB03nC-doKxE-UDWUdNV10LoID-N6IBJg=s400-c-k-c0x00ffffff-no-rj"
            alt="야식이 채널 프로필 이미지"
          ></Image>
          <Name>야식이</Name>
        </Box>
        <Box onClick={onCreatorClick} name="맛있는 생각" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/W7e92-Y4LfuuenDcu-rl1Jii3cGrVKHv52Rif8Bvb7ReBrCk0AQtYGLG21QU_y9IBmCScXXI=s400-c-k-c0x00ffffff-no-rj"
            alt="맛있는생각 채널 프로필 이미지"
          ></Image>
          <Name>맛있는 생각</Name>
        </Box>
        <Box onClick={onCreatorClick} name="바다 중독자" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLT5cLE68mSd0BToUptptrl_OQm-_1YVBAgTWqClQg=s400-c-k-c0x00ffffff-no-rj"
            alt="바다 중독자 채널 프로필 이미지"
          ></Image>
          <Name>바다 중독자</Name>
        </Box>
        <Box onClick={onCreatorClick} name="뻘짓 연구소" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLSca8r0RAH5Keh4Sq_KUIU0GxpGNRUFBdtaVJJiMQ=s400-c-k-c0x00ffffff-no-rj"
            alt="뻘짓 연구소 채널 프로필 이미지"
          ></Image>
          <Name>뻘짓 연구소</Name>
        </Box>
        <Box onClick={onCreatorClick} name="디자인 베이스" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLQc-I2OnrykXLkZuXQMSFdg3FvJk4r2V3Mipr0TkQ=s400-c-k-c0x00ffffff-no-rj"
            alt="디자인 베이스 채널 프로필 이미지"
          ></Image>
          <Name>디자인 베이스</Name>
        </Box>
        <Box onClick={onCreatorClick} name="띠동갑형" creater={creater}>
          <Image
            src="https://yt3.ggpht.com/ytc/AKedOLSGLDADj-tM2Wi9NE5e-b5SyWC-Psr7pyz0cx_z=s400-c-k-c0x00ffffff-no-rj"
            alt="띠동갑형 채널 프로필 이미지"
          ></Image>
          <Name>띠동갑형</Name>
        </Box>
      </Container>
    </Positioner>
  );
};

export default CreaterSection;
