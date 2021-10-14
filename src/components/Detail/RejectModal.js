import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      font-size: 5.5vw;
      margin-bottom: 8vw;
    }
  }
  & p {
    font-weight: normal;
    font-size: 20px;
    max-width: 489px;
    text-align: center;
    margin-bottom: 57px;
    @media only screen and (max-width: 640px) {
      font-size: 3.7vw;
      margin-bottom: 11vw;
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
  }
`;

const RejectModal = ({ setModal, userId }) => {
  return (
    <PopupBackground>
      <PopupContainer>
        <h3>잔고가 충분하지 않습니다.</h3>
        <p>먼저 지갑을 충전하고 구매해주세요!</p>
        <div>
          <CancelButton
            onClick={() => {
              setModal(false);
            }}
          >
            돌아가기
          </CancelButton>
          <Link to={"/wallet/" + userId}>
            <ConfirmButton
              onClick={() => {
                setModal(false);
              }}
            >
              충전하기
            </ConfirmButton>
          </Link>
        </div>
      </PopupContainer>
    </PopupBackground>
  );
};

export default RejectModal;
