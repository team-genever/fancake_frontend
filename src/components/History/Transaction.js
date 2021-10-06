import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 1.7vw;
`;

const DarkLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;

const HistoryContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(4vw, max-content);
  grid-template-columns: 80%;
  justify-content: center;
`;

const History = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 11fr 74fr 15fr;
  place-items: center start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1.5vw 0;
  & span {
    font-weight: 500;
    font-size: 1.4vw;
  }
  & h5 {
    font-weight: bold;
    font-size: 1.2vw;
  }
  & small {
    font-size: 1.2vw;
  }
  & div:last-child {
    justify-self: end;
    font-size: 1.4vw;
  }
`;

const SStrong = styled.strong`
  color: ${(props) => (props.number > 0 ? "#172b7c" : "#c30505")};
`;

const histories = [
  {
    date: new Date("November 2, 2021"),
    title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초미니 컴퓨터 사봤습니다",
    content: "구매(2조각)",
    number: -20000,
  },
  {
    date: new Date("November 2, 2021"),
    content: "계좌입금",
    number: 20000,
  },
  {
    date: new Date("October 26, 2021"),
    title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초미니 컴퓨터 사봤습니다",
    content: "구매(2조각)",
    number: -20000,
  },
  {
    date: new Date("October 26, 2021"),
    content: "계좌입금",
    number: 20000,
  },
];

const Transaction = () => (
  <Container>
    <Title>거래내역</Title>
    <DarkLine />
    <HistoryContainer>
      {histories.map((history, index) => (
        <History key={index}>
          <span>{`${
            history.date.getMonth() + 1
          }/${history.date.getDate()}`}</span>
          <div>
            {history.title ? <h5>{history.title}</h5> : ""}
            <small>{history.content}</small>
          </div>
          <div>
            <SStrong number={history.number}>
              {history.number >= 0
                ? `+${history.number} `
                : `${history.number} `}
            </SStrong>
            원
          </div>
        </History>
      ))}
    </HistoryContainer>
  </Container>
);

export default Transaction;
