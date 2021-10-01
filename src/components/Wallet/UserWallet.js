import React from "react";
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

const UserWallet = () => {
  const { userId } = useParams();
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
        <ChargeButton>
          <span>충전하기</span>
        </ChargeButton>
      </Buttons>
    </Container>
  );
};

export default UserWallet;
