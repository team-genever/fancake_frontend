import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  padding: 100px 130px 100px 130px;
`;

const Heading = styled.div`
  font-size: 37px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const GrayBox = styled.div`
  background-color: ${(props) => props.theme.boxCountGray};
  margin: 25px 0px;
`;

const Thumbnail = styled.img`
  width: 688px;
  height: 387px;
`;

const VideoTitle = styled.div``;

const ChannelName = styled.div`
  font-weight: bold;
  font-size: large;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 27px;
  width: 500px;
  margin: 7px 0px;
`;

const Container = styled.div`
  display: flex;
`;

const TextContainer = styled.div`
  padding: 50px 40px;
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;

const ProgressContainer = styled.div`
  margin: 20px 0px 10px 0px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 17px;
  width: 500px;
  border-radius: 30px;
  padding: 0px;
`;

const Progress = styled.div`
  height: 17px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  width: 400px;
`;

const GrayText = styled.div`
  color: ${(props) => props.theme.boxGray};
`;

const PinkText = styled.div`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
`;

const FilterButton = styled.button`
  background-color: ${(props) => {
    switch (props.clicked) {
      case true:
        return props.theme.boxGray;
      case false:
        return props.theme.boxLightGray;
    }
  }};
  color: ${(props) => {
    switch (props.clicked) {
      case true:
        return "white";
      case false:
        return props.theme.boxGray;
    }
  }};
  border: 1px solid ${(props) => props.theme.boxGray};
  border-radius: 6px;
  padding: 2px 20px;
  font-size: 12px;
  cursor: pointer;
  margin-right: 5px;
`;

const Property = styled.div`
  background-color: ${(props) => {
    switch (props.type) {
      case "youtube":
        return props.theme.mainPink;
      case "tiktok":
        return "#9d2aa6";
      default:
        return props.theme.littleBoxGray;
    }
  }};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 16px;
    color: white;
  }
`;

const PropertiesGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  grid-template-rows: 30px;
  margin-bottom: 12px;
  gap: 10px;
`;

export default function VideoSection() {
  const [video_info, setData] = useState([
    {
      video_id: "1",
      types: [
        { id: "youtube", name: "유튜브" },
        { id: "onsale", name: "판매중" },
      ],
      title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초키니 컴퓨터 사봤습니다",
      channelName: "뻘짓 연구소",
      tokenCount: 100,
      price: 12000,
      deadline: "2021-10-31",
    },
    {
      video_id: "2",
      types: [
        { id: "tiktok", name: "틱톡" },
        { id: "onsale", name: "판매중" },
      ],
      title: "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
      channelName: "뻘짓 연구소",
      tokenCount: 120,
      price: 12000,
      deadline: "2021-10-31",
    },
    {
      video_id: "3",
      types: [
        { id: "tiktok", name: "틱톡" },
        { id: "closed", name: "판매완료" },
      ],
      title: "[쇼츠/먹방]CU돈까스김밥과 훈제닭다리 먹끼(ft.핵불닭소스ㄷㄷ)",
      channelName: "뻘짓 연구소",
      tokenCount: 120,
      price: 12000,
      deadline: "2021-10-31",
    },
  ]);

  const [video_component, setComponent] = useState();
  const [all, setAll] = useState(true);
  const [onSale, setOnSale] = useState(false);
  const [plan, setPlan] = useState(false);
  const [closed, setClosed] = useState(false);
  const [state, setState] = useState("전체");

  const ButtonClicked = (e) => {
    switch (e.target.name) {
      case "전체":
        setAll(true);
        setPlan(false);
        setOnSale(false);
        setClosed(false);
        setState("전체");
        break;
      case "판매예정":
        setAll(false);
        setPlan(true);
        setOnSale(false);
        setClosed(false);
        setState("판매예정");
        break;
      case "구매가능":
        setAll(false);
        setPlan(false);
        setOnSale(true);
        setClosed(false);
        setState("판매중");
        break;
      case "종료":
        setAll(false);
        setPlan(false);
        setOnSale(false);
        setClosed(true);
        setState("판매완료");
        break;
    }
  };

  useEffect(() => {
    setComponent(
      video_info
        .filter((data) => {
          if (state === "전체") return true;
          if (data.types[1].name === state) return true;
          return false;
        })
        .map((data, index) => {
          let currentDate = new Date();

          let deadline = new Date(data.deadline);
          let remainingTime = deadline.getTime() - currentDate.getTime();
          let remainingDay = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
          let remainingHour = 24 - currentDate.getHours();
          let remainingMin = 60 - currentDate.getMinutes();
          let remainingSec = 60 - currentDate.getSeconds();

          return (
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/experience/detail/" + data.video_id}
            >
              <GrayBox>
                <Container>
                  <Thumbnail />
                  <TextContainer>
                    <PropertiesGrid>
                      {data.types.map((type, index) => (
                        <Property key={index} type={type.id}>
                          <span>{type.name}</span>
                        </Property>
                      ))}
                    </PropertiesGrid>
                    <Title>{data.title}</Title>
                    <ChannelName>{data.channelName}</ChannelName>
                    <ProgressContainer>
                      <ProgressBar>
                        <Progress />
                      </ProgressBar>
                    </ProgressContainer>
                    <TextContainer2>
                      <GrayText>총 {data.tokenCount}조각</GrayText>
                      <PinkText>84%</PinkText>
                    </TextContainer2>
                    <TextContainer2>
                      <GrayText>조각당 가격</GrayText>
                      <GrayText>{data.price}원</GrayText>
                    </TextContainer2>
                    <TextContainer2>
                      <GrayText>남은 시간</GrayText>
                      <PinkText>
                        {/*한 자리 수일때 0 추가하는 것 구현해야 함*/}
                        {remainingDay}일 {remainingHour}:{remainingMin}:
                        {remainingSec}
                      </PinkText>
                    </TextContainer2>
                  </TextContainer>
                </Container>
              </GrayBox>
            </Link>
          );
        })
    );
  }, [Date()]);

  return (
    <Positioner>
      <Heading>영상의 첫 번째 주인이 되세요!</Heading>
      <Container>
        <FilterButton clicked={all} name="전체" onClick={ButtonClicked}>
          전체
        </FilterButton>
        <FilterButton clicked={plan} name="판매예정" onClick={ButtonClicked}>
          판매예정
        </FilterButton>
        <FilterButton clicked={onSale} name="구매가능" onClick={ButtonClicked}>
          구매가능
        </FilterButton>
        <FilterButton clicked={closed} name="종료" onClick={ButtonClicked}>
          종료
        </FilterButton>
      </Container>

      {video_component}
    </Positioner>
  );
}
