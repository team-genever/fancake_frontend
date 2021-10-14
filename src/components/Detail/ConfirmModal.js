import React from "react";
import styled from "styled-components";

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
  width: 650px;
  height: 350px;
  padding: 60px 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  z-index: 11;
  & h3 {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 48px;

    @media only screen and (max-width: 640px) {
      font-size: 6vw;
      margin-bottom: 8vw;
    }
  }
  & p {
    font-weight: normal;
    font-size: 20px;
    max-width: 489px;
    text-align: center;
    margin-bottom: 35px;
    @media only screen and (max-width: 640px) {
      font-size: 3.7vw;
    }
  }
  & div {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 640px) {
    width: 85vw;
    height: 60vw;
    padding: 10vw 0px;
  }
`;

const CancelButton = styled.button`
  background-color: ${(props) => props.theme.buttonGray};
  color: white;
  border: none;
  font-size: 15px;
  padding: 15px 30px;
  border-radius: 10px;
  margin-top: 40px;
  margin: 10px;
  width: 210px;

  :hover {
    background-color: ${(props) => props.theme.boxGray};
    cursor: pointer;
  }

  @media only screen and (max-width: 640px) {
    width: 35vw;
    height: 10vw;
    font-size: 3.2vw;
  }
`;

const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme.mainPink};
  color: white;
  border: none;
  font-size: 15px;
  padding: 15px 30px;
  border-radius: 10px;
  margin-top: 40px;
  margin: 10px;
  width: 210px;

  :hover {
    background-color: ${(props) => props.theme.mainPinkHover};
    cursor: pointer;
  }

  @media only screen and (max-width: 640px) {
    width: 35vw;
    height: 10vw;
    font-size: 3.2vw;
  }
`;

const ConfirmModal = ({ setModal }) => {
  return (
    <PopupBackground>
      <PopupContainer>
        <h3>구매 확정하기</h3>
        <p>
          공동구매 진행기간 중 취소는 어려우며,
          <br />
          목표달성액 미달시 자동 환불됩니다.
        </p>
        <div>
          <CancelButton
            onClick={() => {
              setModal(false);
            }}
          >
            아니요
          </CancelButton>
          <ConfirmButton
            onClick={() => {
              setModal(false);
            }}
          >
            구매 확정하기
          </ConfirmButton>
        </div>
      </PopupContainer>
    </PopupBackground>
  );
};

export default ConfirmModal;
