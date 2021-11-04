import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";
import RejectModal from "./RejectModal";
import { Link } from "react-router-dom";

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  //padding: 50px 0px;
  margin: 0 auto;
  width: 100%;
  //margin-bottom: 100px; //임시
  @media only screen and (max-width: 1007px) {
    padding: 0;
  }
`;

const Table = styled.table`
  text-align: left;

  table-layout: fixed;
  width: 100%;
  word-break: keep-all;
  font-size: 16px;
  @media only screen and (max-width: 1007px) {
    font-size: 18px;
    padding: 0px 3.5vw;
  }
  @media only screen and (max-width: 640px) {
    font-size: 3vw;
    padding: 0;
  }
`;

const InfoContainer = styled.div``;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-auto-rows: max-content;
  gap: 10px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1007px) {
    grid-template-columns: max-content 1fr;
    margin-bottom: 10px;
    gap: 5px;
  }
  @media only screen and (max-width: 1007px) {
    margin-bottom: 3vw;
    gap: 1.5vw;
  }
`;

const Body = styled.div`
  width: 100%;
  @media only screen and (max-width: 640px) {
    & tr {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const BoldTd = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.boxGray};
`;

const PinkTd = styled.div`
  width: 100%;
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
  font-size: 15px;
  //width: 230px;

  @media only screen and (max-width: 1007px) {
    text-align: right;
  }
`;

const BlackTd = styled.div`
  font-size: 15px;
  font-weight: bold;
  @media only screen and (max-width: 1007px) {
    text-align: right;
  }
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 7px;
`;

const ProgressContainer = styled.div`
  padding-top: 5px;
  width: 100%;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 15px;
  width: 100%;
  border-radius: 30px;

  @media only screen and (max-width: 1007px) {
  }
  @media only screen and (max-width: 640px) {
    height: 2.5vw;
  }
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
`;

const GrayFont = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: ${(props) => props.theme.boxGray};
`;

const BoldFont = styled.div`
  font-weight: bold;
  font-size: 17px;
  @media only screen and (max-width: 1007px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 640px) {
    font-size: 3vw;
  }
`;

const Button = styled.div`
  background-color: ${(props) =>
    props.isLogin ? props.theme.mainPink : props.theme.boxGray};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  margin: 10px 0px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.isLogin && props.theme.mainPinkHover};
  }
`;

const ButtonContainer = styled.div`
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1007px) {
    width: 55vw;
  }
  @media only screen and (max-width: 640px) {
    margin-top: 18px;
    width: 70vw;
  }
`;

const ButtonPositioner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.boxVeryLightGray};
  padding: 8px 10px 8px 20px;
  margin-bottom: 10px;
`;

const InputButtons = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const InputButton = styled.button`
  //all: unset;
  border-radius: 100%;
  border: none;
  width: 29px;
  height: 29px;
  background-color: ${(props) => props.theme.boxLightGray};

  cursor: pointer;

  font-size: 17px;
  text-align: center;
  line-height: 17px;
  color: black;
  &:hover {
    background-color: ${(props) => props.theme.progressBarGray};
  }
`;

const Input = styled.input`
  color: black;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  :focus {
    outline: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  @media only screen and (max-width: 640px) {
    width: 30vw;
  }
`;

const Mobile = styled.div`
  //모바일에서 보이는 부분
  display: none;
  @media only screen and (max-width: 1007px) {
    display: block;
    margin-bottom: 10px;
  }
`;

const Web = styled.div`
  @media only screen and (max-width: 1007px) {
    display: none;
  }
`;

const VideoInfo = ({
  data,
  setHasBought,
  userInfo,
  updateUserInfo,
  getApi,
}) => {
  const [buttonComponent, setButton] = useState(
    <Link
      to="/auth/main"
      style={{ textDecoration: "none" }}
      onClick={() => {
        window.location.replace("/auth/main");
      }}
    >
      <Button>로그인 후 이용가능합니다.</Button>
    </Link>
  );

  const [cookies] = useCookies(["Authorization"]);

  const [isLogin, setIsLogin] = useState(cookies.Authorization ? true : false);

  useEffect(() => {
    setIsLogin(cookies.Authorization ? true : false);
  }, [isLogin, cookies]);

  const [OnSale, setOnSale] = useState(data.onSale);

  const [totalPrice, setTotalPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const [confirmModal, setConfirmModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const [leftTime, setLeftTime] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [expire, setExpire] = useState(new Date(data.expirationDate));

  const changeLeftDate = () => {
    const today = new Date();
    const left = expire.getTime() - today.getTime();
    if (expire.getTime() > today.getTime()) {
      const leftDay = Math.floor(left / (1000 * 60 * 60 * 24));
      const leftHours = Math.floor(
        (left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const leftMinutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
      const leftSeconds = Math.floor((left % (1000 * 60)) / 1000);
      setLeftTime(
        `${leftDay}일 ${leftHours.toString().padStart(2, "0")}:${leftMinutes
          .toString()
          .padStart(2, "0")}:${leftSeconds.toString().padStart(2, "0")}`
      );
    } else {
      setLeftTime("판매 기간 종료");
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data, amount);
      setExpire(new Date(data.expirationDate));
    }
  }, [data]);

  useEffect(() => {
    clearInterval(intervalId);
    changeLeftDate();
    setAmount(0);
    setIntervalId(setInterval(changeLeftDate, 1000));
  }, [expire]);

  const onChange = (e) => {
    console.log("value changed");
    //console.log(quantity);
    //console.log(e.target.value);
    setTotalPrice(e.target.value * data.pricePerShare);
  };

  const onClick = (e) => {
    console.log(totalPrice);
    if (totalPrice > userInfo.balance) setRejectModal(true);
    else setConfirmModal(true);
  };

  const ChangeAmount = (e) => {
    const max = data.totalAmount - data.currentAmount;
    switch (e.target.name) {
      case "+":
        if (amount < max) {
          setTotalPrice((amount + 1) * data.pricePerShare);
          setAmount(amount + 1);
        } else {
          window.alert("최대 구매 가능 개수입니다.");
        }
        break;
      case "-":
        if (amount > 0) {
          setTotalPrice((amount - 1) * data.pricePerShare);
          setAmount(amount - 1);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setOnSale(data.onSale);
  }, []);

  useEffect(() => {
    //로그인 상태, 영상 판매중 여부에 따라 다른 버튼 렌더링

    if (!isLogin) {
      setButton(
        <Link to="/auth/main" style={{ textDecoration: "none" }}>
          <Button isLogin={isLogin}>로그인 후 이용가능합니다.</Button>
        </Link>
      );
    } else if (OnSale) {
      setButton(
        <div>
          <ButtonPositioner>
            <Input
              type="number"
              min={0}
              value={amount}
              placeholder="수량을 입력하세요."
              onChange={onChange}
            />
            <InputButtons>
              <InputButton name="+" onClick={ChangeAmount}>
                +
              </InputButton>
              <InputButton name="-" onClick={ChangeAmount}>
                -
              </InputButton>
            </InputButtons>
          </ButtonPositioner>

          <FlexContainer>
            <BoldFont>총 주문금액</BoldFont>
            <BoldFont>
              {
                totalPrice.toString()
                //.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
              }{" "}
              베리
            </BoldFont>
          </FlexContainer>
          <Button isLogin={isLogin} onClick={onClick}>
            구매하기
          </Button>
          {confirmModal ? (
            <ConfirmModal
              totalPrice={totalPrice}
              userInfo={userInfo}
              videoIdx={data.videoIdx}
              size={amount}
              updateUserInfo={updateUserInfo}
              setModal={setConfirmModal}
              setHasBought={setHasBought}
              getApi={getApi}
            />
          ) : (
            <></>
          )}
          {rejectModal ? (
            <RejectModal setModal={setRejectModal} userId={"1"} />
          ) : (
            <></>
          )}
        </div>
      );
    } else {
      setButton(
        <Button isLogin={isLogin} style={{ backgroundColor: "#9a9a9a" }}>
          구매 가능 기간이 아닙니다.
        </Button>
      );
    }
  }, [isLogin, totalPrice, confirmModal, rejectModal, amount]);

  return (
    <Positioner>
      <Grid>
        <BoldTd>남은시간</BoldTd>
        <PinkTd>{leftTime}</PinkTd>
        <BoldTd>공동구매 목표금액</BoldTd>
        <BlackTd>{data.marketCap.toLocaleString("ko-KR")} 베리</BlackTd>
        <BoldTd>공동구매 달성액</BoldTd>
        <BlackTd>
          {(data.currentAmount * data.pricePerShare).toLocaleString("ko-KR")}{" "}
          베리
        </BlackTd>
        <BoldTd>한 조각당 가격</BoldTd>
        <BlackTd>{data.pricePerShare.toLocaleString("ko-KR")} 베리</BlackTd>
        <Web>
          <BoldTd>진행률</BoldTd>
        </Web>
        <Web>
          <PinkTd>
            <FlexContainer>
              <ProgressContainer>
                <ProgressBar>
                  <Progress
                    percent={Math.floor(
                      (data.currentAmount / data.totalAmount) * 100
                    )}
                  />
                </ProgressBar>
              </ProgressContainer>
              {(data.currentAmount / data.totalAmount) * 100}%
            </FlexContainer>
            <GrayFont>
              총 {data.totalAmount}조각 중{" "}
              {data.totalAmount - data.currentAmount}
              조각 남음
            </GrayFont>
          </PinkTd>
        </Web>
      </Grid>
      {/* <Table>
          <Body>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr>
              <td colSpan="2"></td>
            </tr>
            <tr></tr>
            <tr>
              <td colSpan="2">{buttonComponent}</td>
            </tr>
          </Body>
        </Table> */}
      <Mobile>
        <FlexContainer>
          <ProgressContainer>
            <ProgressBar>
              <Progress
                percent={Math.floor(
                  (data.currentAmount / data.totalAmount) * 100
                )}
              />
            </ProgressBar>
          </ProgressContainer>
        </FlexContainer>
        <FlexContainer>
          <BoldTd>
            <Mobile>{data.currentAmount}조각</Mobile>
          </BoldTd>
          <BlackTd>
            <Mobile>총 {data.totalAmount}조각</Mobile>
          </BlackTd>
        </FlexContainer>
      </Mobile>
      {buttonComponent}
    </Positioner>
  );
};

export default VideoInfo;
