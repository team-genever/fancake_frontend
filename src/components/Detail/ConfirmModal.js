import Loading from "components/Loading";
import Popup from "components/Popup";
import React, { useState } from "react";
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

const PopupInfosContainer = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin-bottom: 20px;
  & hr {
    all: unset;
    width: 105%;
    background-color: rgba(0, 0, 0, 0.4);
    height: 1px;
  }
`;

const PopupInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-size: 13px;
    font-weight: 500;
    line-height: 13px;
    text-align: left;
    color: black;
  }
  & .info_title {
    color: ${(props) => props.theme.boxGray};
  }
  & strong {
    font-weight: bold;
    font-size: 13px;
  }
  & .info_pink {
    color: ${(props) => props.theme.mainPink};
  }
  @media screen and (max-width: 640px) {
    & span {
      font-size: 3.5vw;
      line-height: 3.5vw;
    }
    & strong {
      font-size: 3.5vw;
      line-height: 3.5vw;
    }
  }
`;

const ConfirmModal = ({
  setModal,
  userInfo,
  updateUserInfo,
  totalPrice,
  setHasBought,
  videoIdx,
  size,
  getApi,
}) => {
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  return loading ? (
    <Popup padding={[60, 60]}>
      <Loading />
    </Popup>
  ) : (
    <Popup padding={[30, 30]}>
      {complete ? (
        <>
          <PopupTitle>구매가 완료되었습니다!</PopupTitle>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                window.location.reload();
                const first = document.getElementById("step_one");
                first.scrollIntoView({ behavior: "smooth" });
                setModal(false);
              }}
            >
              계속 구매하기
            </button>
            <button
              onClick={() => {
                setModal(false);
                setTimeout(() => {
                  const formContainer =
                    document.getElementById("formContainer");
                  formContainer.scrollIntoView({ behavior: "smooth" });
                }, 500);
              }}
            >
              설문조사 하기
            </button>
          </div>
        </>
      ) : size > 0 ? (
        <>
          <PopupTitle>구매 확정하기</PopupTitle>
          <PopupDescription>
            공동구매 진행기간 중 취소는 어려우며,
            <br />
            목표달성액 미달시 자동 환불됩니다.
          </PopupDescription>
          <PopupInfosContainer>
            <PopupInfoContainer>
              <span className="info_title">현재 잔액</span>
              <span>
                <strong>{userInfo.balance?.toLocaleString("ko-KR")}</strong>{" "}
                베리
              </span>
            </PopupInfoContainer>
            <PopupInfoContainer>
              <span className="info_title">차감 금액</span>
              <span>
                <strong className="info_pink">
                  -{totalPrice?.toLocaleString("ko-KR")}
                </strong>{" "}
                베리
              </span>
            </PopupInfoContainer>
            <hr />
            <PopupInfoContainer>
              <span className="info_title">구매 후 잔액</span>
              <span>
                <strong className="info_pink">
                  {(userInfo.balance - totalPrice)?.toLocaleString("ko-KR")}
                </strong>{" "}
                베리
              </span>
            </PopupInfoContainer>
          </PopupInfosContainer>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              아니요
            </button>
            <button
              onClick={async () => {
                let res;
                try {
                  setLoading(true);
                  res = await updateUserInfo(videoIdx, size);
                } catch {
                } finally {
                  setLoading(false);
                  if (res === 200) {
                    setComplete(true);
                    setHasBought(true);
                  } else if (res === 400) {
                    setModal(false);
                  }
                }
              }}
            >
              구매 확정하기
            </button>
          </div>
        </>
      ) : (
        <>
          <PopupTitle>거래 수량을 선택해주세요.</PopupTitle>
          <div className="buttonsContainer">
            <button
              onClick={() => {
                setModal(false);
              }}
            >
              확인했습니다
            </button>
          </div>
        </>
      )}
    </Popup>
  );
};

export default ConfirmModal;
