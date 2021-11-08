import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Popup from "components/Popup";

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

const RejectModal = ({ setModal }) => {
  return (
    <Popup padding={[30, 30]}>
      <PopupTitle>잔고가 충분하지 않습니다.</PopupTitle>
      <PopupDescription>먼저 지갑을 충전하고 구매해주세요!</PopupDescription>
      <div className="buttonsContainer">
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          돌아가기
        </button>
        <Link to={"/user/wallet"}>
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            충전하기
          </button>
        </Link>
      </div>
    </Popup>
  );
};

export default RejectModal;
