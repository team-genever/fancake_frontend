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

  const onClick = (e) => {
    const target = e.currentTarget.getAttribute("name");

    if (target === "야식이" && creater !== "야식이") {
      setCreater("야식이");
      console.log("set");
      document.getElementById("야식이").style.border = "5px solid #da225f";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "none";
    } else if (target === "맛있는 생각" && creater !== "맛있는 생각") {
      setCreater("맛있는 생각");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "5px solid #da225f";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "none";
      console.log("set");
    } else if (target === "바다 중독자" && creater !== "바다 중독자") {
      setCreater("바다 중독자");
      console.log("set");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "5px solid #da225f";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "none";
    } else if (target === "뻘짓 연구소" && creater !== "뻘짓 연구소") {
      setCreater("뻘짓 연구소");
      console.log("set");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "5px solid #da225f";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "none";
    } else if (target === "디자인 베이스" && creater !== "디자인 베이스") {
      setCreater("디자인 베이스");
      console.log("set");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border =
        "5px solid #da225f";
      document.getElementById("띠동갑형").style.border = "none";
    } else if (target === "띠동갑형" && creater !== "띠동갑형") {
      setCreater("띠동갑형");
      console.log("set");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "5px solid #da225f";
    } else {
      setCreater("all");
      document.getElementById("야식이").style.border = "none";
      document.getElementById("맛있는 생각").style.border = "none";
      document.getElementById("바다 중독자").style.border = "none";
      document.getElementById("뻘짓 연구소").style.border = "none";
      document.getElementById("디자인 베이스").style.border = "none";
      document.getElementById("띠동갑형").style.border = "none";
    }

    console.log("target", target);

    console.log("creater", creater);
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
        <Box onClick={onClick} name="야식이">
          <Image
            id="야식이"
            src="https://yt3.ggpht.com/ytc/AKedOLSuiXNYPEB03nC-doKxE-UDWUdNV10LoID-N6IBJg=s400-c-k-c0x00ffffff-no-rj"
            alt="야식이 채널 프로필 이미지"
          ></Image>
          <Name>야식이</Name>
        </Box>
        <Box onClick={onClick} name="맛있는 생각">
          <Image
            id="맛있는 생각"
            src="https://yt3.ggpht.com/W7e92-Y4LfuuenDcu-rl1Jii3cGrVKHv52Rif8Bvb7ReBrCk0AQtYGLG21QU_y9IBmCScXXI=s400-c-k-c0x00ffffff-no-rj"
            alt="맛있는생각 채널 프로필 이미지"
          ></Image>
          <Name>맛있는 생각</Name>
        </Box>
        <Box onClick={onClick} name="바다 중독자">
          <Image
            id="바다 중독자"
            src="https://yt3.ggpht.com/ytc/AKedOLT5cLE68mSd0BToUptptrl_OQm-_1YVBAgTWqClQg=s400-c-k-c0x00ffffff-no-rj"
            alt="바다 중독자 채널 프로필 이미지"
          ></Image>
          <Name>바다 중독자</Name>
        </Box>
        <Box onClick={onClick} name="뻘짓 연구소">
          <Image
            id="뻘짓 연구소"
            src="https://yt3.ggpht.com/ytc/AKedOLSca8r0RAH5Keh4Sq_KUIU0GxpGNRUFBdtaVJJiMQ=s400-c-k-c0x00ffffff-no-rj"
            alt="뻘짓 연구소 채널 프로필 이미지"
          ></Image>
          <Name>뻘짓 연구소</Name>
        </Box>
        <Box onClick={onClick} name="디자인 베이스">
          <Image
            id="디자인 베이스"
            src="https://yt3.ggpht.com/ytc/AKedOLQc-I2OnrykXLkZuXQMSFdg3FvJk4r2V3Mipr0TkQ=s400-c-k-c0x00ffffff-no-rj"
            alt="디자인 베이스 채널 프로필 이미지"
          ></Image>
          <Name>디자인 베이스</Name>
        </Box>
        <Box onClick={onClick} name="띠동갑형">
          <Image
            id="띠동갑형"
            src="https://yt3.ggpht.com/ytc/AKedOLSGLDADj-tM2Wi9NE5e-b5SyWC-Psr7pyz0cx_z=s400-c-k-c0x00ffffff-no-rj"
            alt="띠동갑형 채널 프로필 이미지"
          ></Image>
          <Name>띠동갑형</Name>
        </Box>
      </Container>
      <Button>찾고 있는 크리에이터가 있나요?</Button>
    </Positioner>
  );
};

export default CreaterSection;
