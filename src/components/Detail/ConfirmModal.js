import Popup from "components/Popup";
import React from "react";
import styled from "styled-components";

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

const PopupTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 5.3vw;
    line-height: 6vw;
    margin-bottom: 5vw;
  }
`;

const PopupDescription = styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    font-size: 3.5vw;
    line-height: 4.5vw;
    margin-bottom: 5vw;
  }
`;

const ConfirmModal = ({ setModal }) => {
  return (
    <Popup padding={[30, 30]}>
      <PopupTitle>구매 확정하기</PopupTitle>
      <PopupDescription>
        공동구매 진행기간 중 취소는 어려우며,
        <br />
        목표달성액 미달시 자동 환불됩니다.
      </PopupDescription>
      <div className="buttonsContainer">
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          아니요
        </button>
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          구매 확정하기
        </button>
      </div>
    </Popup>
  );
};

export default ConfirmModal;
