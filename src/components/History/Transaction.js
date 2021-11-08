import Loading from "components/Loading";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { api } from "settings";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
  @media only screen and (max-width: 1007px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 3vw;
  }
`;

const DarkLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  @media only screen and (max-width: 640px) {
    height: 1px;
  }
`;

const HistoryContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(72px, max-content);
  grid-template-columns: 80%;
  justify-content: center;
  @media only screen and (max-width: 1007px) {
    grid-auto-rows: minmax(64px, max-content);
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: 100%;
    grid-auto-rows: minmax(13vw, max-content);
  }
`;

const NoContent = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 500;
  margin-top: 20px;
  @media only screen and (max-width: 1007px) {
    font-size: 15px;
    margin-top: 15px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 3vw;
  }
`;

const History = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 11fr 74fr 15fr;
  place-items: center start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px 0;
  & span {
    font-weight: 500;
    font-size: 20px;
    align-self: start;
  }
  & h5 {
    font-weight: bold;
    font-size: 17px;
  }
  & small {
    font-size: 17px;
  }
  & div:last-child {
    justify-self: end;
    align-self: start;
    font-size: 20px;
  }
  @media only screen and (max-width: 1007px) {
    & span {
      font-size: 17px;
    }
    & h5 {
      font-size: 14px;
    }
    & small {
      font-size: 14px;
    }
    & div:last-child {
      font-size: 17px;
    }
  }
  @media only screen and (max-width: 640px) {
    gap: 2vw;
    grid-template-columns: 11fr 70fr 20fr;
    padding: 2vw 0;
    & span {
      font-size: 3vw;
    }
    & h5 {
      font-size: 3vw;
    }
    & div {
      width: 100%;
      align-self: start;
    }
    & small {
      font-size: 2.7vw;
    }
    & div:last-child {
      font-size: 3vw;
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const SStrong = styled.strong`
  color: ${(props) => (props.number > 0 ? "#172b7c" : "#c30505")};
  @media only screen and (max-width: 640px) {
    margin-right: 0.7vw;
  }
`;

// const histories = [
//   {
//     date: new Date("November 2, 2021"),
//     title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초미니 컴퓨터 사봤습니다",
//     content: "구매(2조각)",
//     number: -20000,
//   },
//   {
//     date: new Date("November 2, 2021"),
//     title: "계좌입금",
//     number: 20000,
//   },
//   {
//     date: new Date("October 26, 2021"),
//     title: "스틱 PC 중 최고 성능!! USB 처럼 생긴 초미니 컴퓨터 사봤습니다",
//     content: "구매(2조각)",
//     number: -20000,
//   },
//   {
//     date: new Date("October 26, 2021"),
//     title: "계좌입금",
//     number: 20000,
//   },
// ];

const Transaction = () => {
  const [cookies] = useCookies(["Authorization"]);
  const [histories, setHistories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHistories = async () => {
    let content;
    try {
      const response = await api.get("users/me/tradings", {
        headers: {
          Authorization: cookies.Authorization,
        },
      });
      content = response.data.content;
      setHistories(content);
    } catch (e) {
      setError("거래내역을 가져오는 동안 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHistories();
  }, []);

  return error ? (
    <LoadingContainer>{error}</LoadingContainer>
  ) : loading ? (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  ) : (
    <Container>
      <Title>거래내역</Title>
      <DarkLine />
      {histories.length === 0 ? (
        <NoContent>거래내역이 없습니다.</NoContent>
      ) : (
        <HistoryContainer>
          {histories.map((history, index) => {
            const createdDate = new Date(history.createdDate);
            return (
              <History key={index}>
                <span>{`${
                  createdDate.getMonth() + 1
                }/${createdDate.getDate()}`}</span>
                <div>
                  {history.videoTitle ? <h5>{history.videoTitle}</h5> : ""}
                  {history.type === "BUY" ? (
                    <small>{`구매(${history.size}조각)`}</small>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <SStrong number={history.number}>
                    {history.type === "BUY"
                      ? `-${history.price * history.size} `
                      : `+${history.price * history.size} `}
                  </SStrong>
                  원
                </div>
              </History>
            );
          })}
        </HistoryContainer>
      )}
    </Container>
  );
};

export default Transaction;
