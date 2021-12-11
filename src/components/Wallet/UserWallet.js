import Popup from "components/Popup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    gap: 20vw;
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
    background-color: rgba(118, 118, 118, 0.8);
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

const PopupTitle = styled.h3`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
  line-height: 23px;
  margin-bottom: 15px;
  @media screen and (max-width: 640px) {
    font-size: 5.3vw;
    line-height: 6vw;
    margin-bottom: 5vw;
  }
`;

const PopupDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 15px;
  @media screen and (max-width: 640px) {
    font-size: 3.5vw;
    line-height: 4.5vw;
    margin-bottom: 5vw;
  }
`;

const UserWallet = ({ userInfo }) => {
  const [popup, setPopup] = useState(false);

  return (
    <Container>
      <WalletTitle>
        <strong>{userInfo.name}</strong>님의 지갑
      </WalletTitle>
      <CurrentBalance>
        <span>현재 보유 베리</span>
        <span>
          <strong>{userInfo.balance.toLocaleString("ko-KR")}</strong> 베리
        </span>
      </CurrentBalance>
      <Buttons>
        <Link to={`/user/wallet/history`}>
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
          <Popup padding={[40, 50]}>
            <PopupTitle>지갑 충전하기</PopupTitle>
            <PopupDescription>
              충전하기 기능은 정식 서비스에서 출시됩니다.
              <br />
              많은 관심 부탁드립니다!
            </PopupDescription>
            <button
              onClick={() => {
                setPopup(false);
              }}
            >
              확인했습니다
            </button>
          </Popup>
        ) : (
          <></>
        )}
      </Buttons>
    </Container>
  );
};

export default UserWallet;
