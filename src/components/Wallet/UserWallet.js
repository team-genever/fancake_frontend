import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.boxLightGray};
  border-radius: 20px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
  @media only screen and (max-width: 1007px) {
    padding: 40px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 640px) {
    height: 39vw;
    padding: 5vw 4.7vw;
    margin-bottom: 8vw;
  }
`;

const WalletTitle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 22px;
  & strong {
    font-weight: 600;
  }
  @media only screen and (max-width: 1007px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
  @media screen and (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 3.5vw;
  }
`;

const CurrentBalance = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 170px;
  margin-bottom: 28px;
  & span {
    font-size: 23px;
    font-weight: 500;
  }
  & span:last-child {
    font-weight: normal;
  }
  & strong {
    font-size: 32px;
    font-weight: bold;
  }
  @media only screen and (max-width: 1007px) {
    margin-bottom: 20px;
    & span {
      font-size: 20px;
    }
    & strong {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 3.5vw;
    & span {
      font-size: 3.3vw;
    }
    & strong {
      font-size: 4vw;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media only screen and (max-width: 1007px) {
    gap: 15px;
  }
  @media screen and (max-width: 640px) {
    gap: 2.5vw;
  }
`;

const HistoryButton = styled.button`
  background-color: ${(props) => props.theme.boxGray};
  width: 280px;
  height: 72px;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
  @media only screen and (max-width: 1007px) {
    width: 180px;
    height: 56px;
    & span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 640px) {
    width: 32vw;
    height: 8vw;
    & span {
      font-size: 3vw;
    }
  }
`;

const ChargeButton = styled.button`
  background-color: ${(props) => props.theme.mainPink};
  width: 280px;
  height: 72px;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }
  @media only screen and (max-width: 1007px) {
    width: 180px;
    height: 56px;
    & span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 640px) {
    width: 32vw;
    height: 8vw;
    & span {
      font-size: 3vw;
    }
  }
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundGray};
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  background-color: white;
  width: 50vw;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  z-index: 11;
  & h3 {
    font-size: 2.1vw;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2vw;
  }
  & p {
    font-weight: normal;
    font-size: 1.7vw;
    max-width: 27vw;
    text-align: center;
    margin-bottom: 1.5vw;
  }
  & div {
    display: flex;
    justify-content: space-between;
    width: 30vw;
  }
  & small {
    font-size: 1.5vw;
    font-weight: normal;
    color: ${(props) => props.theme.boxGray};
  }
  & span {
    font-size: 1.5vw;
    font-weight: normal;
    color: black;
  }
  & button {
    background-color: ${(props) => props.theme.mainPink};
    color: white;
    border: none;
    padding: 1.3vw 5vw;
    font-size: 1.2vw;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 40px;
  }
  & button:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }
  @media screen and (max-width: 640px) {
    padding: 8vw;
    width: 88vw;
    & h3 {
      font-size: 4.7vw;
      margin-bottom: 5vw;
    }
    & p {
      font-size: 2.7vw;
      max-width: 43vw;
      margin-bottom: 4vw;
    }
    & div {
      width: 85%;
    }
    & small {
      font-size: 2.5vw;
    }
    & span {
      font-size: 2.5vw;
    }
    & button {
      padding: 2vw 7vw;
      font-size: 2.7vw;
      border-radius: 2vw;
      margin-top: 5vw;
      text-align: center;
    }
  }
`;

const UserWallet = () => {
  const { userId } = useParams();
  const [popup, setPopup] = useState(false);
  return (
    <Container>
      <WalletTitle>
        <strong>백건우</strong>님의 지갑
      </WalletTitle>
      <CurrentBalance>
        <span>현재 보유 금액</span>
        <span>
          <strong>20,000</strong> 원
        </span>
      </CurrentBalance>
      <Buttons>
        <Link to={`/wallet/${userId}/history`}>
          <HistoryButton>
            <span>거래내역</span>
          </HistoryButton>
        </Link>
        <ChargeButton
          onClick={() => {
            setPopup(true);
          }}
        >
          <span>충전하기</span>
        </ChargeButton>
        {popup ? (
          <PopupBackground>
            <PopupContainer>
              <h3>지갑 충전하기</h3>
              <p>아래 계좌에 입금해주시면 3시간 이내 '내 지갑'에 들어옵니다.</p>
              <div>
                <small>은행</small>
                <span>카카오뱅크</span>
              </div>
              <div>
                <small>계좌번호</small>
                <span>3333-02-0753215</span>
              </div>
              <div>
                <small>예금주</small>
                <span>백건우</span>
              </div>
              <button
                onClick={() => {
                  setPopup(false);
                }}
              >
                확인했습니다
              </button>
            </PopupContainer>
          </PopupBackground>
        ) : (
          <></>
        )}
      </Buttons>
    </Container>
  );
};

export default UserWallet;
