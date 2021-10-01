import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 600px;
  background-color: ${(props) => props.theme.boxLightGray};
  border-radius: 20px;
  padding: 80px 0 63px 83px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const WalletTitle = styled.h2`
  font-size: 56px;
  font-weight: 400;
  & strong {
    font-weight: 600;
  }
`;

const Balance = styled.div`
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CurrentBalance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 615px;
  & span {
    font-size: 32px;
    font-weight: 500;
  }
  & span:last-child {
    font-weight: normal;
  }
  & strong {
    font-size: 48px;
    font-weight: bold;
  }
`;

const TotalCost = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 615px;
  & span {
    font-size: 32px;
    font-weight: 500;
  }
  & span:last-child {
    font-weight: normal;
  }
`;

const Buttons = styled.div`
  width: 840px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HistoryButton = styled.button`
  background-color: ${(props) => props.theme.boxGray};
  width: 400px;
  height: 100px;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 32px;
    font-weight: 700;
  }
  &:hover {
    background-color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }
`;

const ChargeButton = styled.button`
  background-color: ${(props) => props.theme.mainPink};
  width: 400px;
  height: 100px;
  border: none;
  border-radius: 10px;
  & span {
    color: white;
    font-size: 32px;
    font-weight: 700;
  }
  &:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
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
  width: 939px;
  height: 597px;
  padding: 70px 0 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  z-index: 11;
  & h3 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 48px;
  }
  & p {
    font-weight: normal;
    font-size: 32px;
    max-width: 489px;
    text-align: center;
    margin-bottom: 35px;
  }
  & div {
    display: flex;
    justify-content: space-between;
    width: 555px;
  }
  & small {
    font-size: 28px;
    font-weight: normal;
    color: ${(props) => props.theme.boxGray};
  }
  & span {
    font-size: 28px;
    font-weight: normal;
    color: black;
  }
  & button {
    background-color: ${(props) => props.theme.mainPink};
    color: white;
    border: none;
    padding: 20px 77px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    margin-top: 40px;
  }
  & button:hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
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
      <Balance>
        <CurrentBalance>
          <span>현재 보유 금액</span>
          <span>
            <strong>20,000</strong>원
          </span>
        </CurrentBalance>
        <TotalCost>
          <span>누적 수익셰어 금액</span>
          <span>1,200 원</span>
        </TotalCost>
      </Balance>
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
