import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";
import RejectModal from "./RejectModal";

const Positioner = styled.div`
  display: flex;
  justify-content: center;
  //padding: 50px 0px;
  padding-left: 5vw;
  margin: 0 auto;
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

const Body = styled.body``;

const BoldTd = styled.td`
  font-weight: bold;
  padding: 5px 0px;
  width: 200px;
  font-size: 15px;
  color: ${(props) => props.theme.boxGray};
`;

const PinkTd = styled.td`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
  font-size: 15px;
  //width: 230px;

  @media only screen and (max-width: 1007px) {
    text-align: right;
  }
`;

const BlackTd = styled.td`
  font-size: 15px;
  font-weight: bold;
  @media only screen and (max-width: 1007px) {
    text-align: right;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProgressContainer = styled.div`
  padding-top: 5px;
  margin-right: 5px;
`;

const ProgressBar = styled.div`
  background-color: ${(props) => props.theme.progressBarGray};
  height: 1vw;
  width: 15vw;
  border-radius: 30px;
  padding: 0px;

  @media only screen and (max-width: 1007px) {
    width: 55vw;
    height: 2vw;
  }
  @media only screen and (max-width: 640px) {
    width: 70vw;
    height: 2.5vw;
  }
`;

const Progress = styled.div`
  height: 1vw;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  @media only screen and (max-width: 1007px) {
    height: 2vw;
  }
  @media only screen and (max-width: 640px) {
    height: 2.5vw;
  }
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
  background-color: ${(props) => props.theme.mainPink};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  margin: 10px 0px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
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
  height: 45px;
`;

const InputButton = styled.button`
  border-radius: 100%;
  border: none;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${(props) => props.theme.boxLightGray};

  cursor: pointer;
`;

const Input = styled.div`
  width: 100%;

  background-color: ${(props) => props.theme.boxVeryLightGray};
  border: none;
  padding: 0 20px;
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :focus {
    outline: none;
  }

  @media only screen and (max-width: 640px) {
    width: 70vw;
  }
`;

const Mobile = styled.div`
  //모바일에서 보이는 부분
  display: none;
  @media only screen and (max-width: 1007px) {
    display: block;
  }
`;

const Web = styled.div`
  @media only screen and (max-width: 1007px) {
    display: none;
  }
`;

const VideoInfo = ({ data, setHasBought, userInfo, updateUserInfo }) => {
  const [buttonComponent, setButton] = useState(
    <Button>로그인 후 이용가능합니다.</Button>
  );

  const [cookies] = useCookies(["Authorization"]);

  const [progressComponent, setProgress] = useState(<div></div>);

  const [isLogin, setIsLogin] = useState(cookies.Authorization ? true : false);

  useEffect(() => {
    setIsLogin(cookies.Authorization ? true : false);
  }, [isLogin, cookies]);

  const [OnSale, setOnSale] = useState(data.onSale);

  const [totalPrice, setTotalPrice] = useState(0);
  const [amount, setAmount] = useState(null);

  const [balance, setBalance] = useState(userInfo.balance);

  const [confirmModal, setConfirmModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const [leftTime, setLeftTime] = useState("");
  const expire = new Date(data.expirationDate);
  const changeLeftDate = () => {
    const today = new Date();
    const left = expire.getTime() - today.getTime();
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
  };
  useEffect(() => {
    changeLeftDate();
    setInterval(changeLeftDate, 1000);
  }, []);

  const onChange = (e) => {
    console.log("value changed");
    //console.log(quantity);
    //console.log(e.target.value);
    setTotalPrice(e.target.value * data.pricePerShare);
  };

  const onClick = (e) => {
    console.log(totalPrice);
    if (totalPrice > balance) setRejectModal(true);
    else setConfirmModal(true);
  };

  const ChangeAmount = (e) => {
    switch (e.target.name) {
      case "+":
        setTotalPrice((amount + 1) * data.pricePerShare);
        setAmount(amount + 1);
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
      setButton(<Button>로그인 후 이용가능합니다.</Button>);
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
              disabled
            >
              {amount}
            </Input>
          </ButtonPositioner>

          <FlexContainer>
            <BoldFont>총 주문금액</BoldFont>
            <BoldFont>
              {
                totalPrice.toString()
                //.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
              }
              원
            </BoldFont>
          </FlexContainer>
          <Button onClick={onClick}>구매하기</Button>
          {confirmModal ? (
            <ConfirmModal
              totalPrice={totalPrice}
              userInfo={userInfo}
              updateUserInfo={updateUserInfo}
              setModal={setConfirmModal}
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
        <Button style={{ backgroundColor: "#9a9a9a" }}>
          구매 가능 기간이 아닙니다.
        </Button>
      );
    }
  }, [isLogin, totalPrice, confirmModal, rejectModal, amount]);

  return (
    <Positioner>
      <div>
        <Table>
          <Body>
            <tr>
              <BoldTd>남은시간</BoldTd>
              <PinkTd>{leftTime}</PinkTd>
            </tr>
            <tr>
              <BoldTd>공동구매 목표금액</BoldTd>
              <BlackTd>{data.marketCap.toFixed(0)}원</BlackTd>
            </tr>
            <tr>
              <BoldTd>공동구매 달성액</BoldTd>
              <BlackTd>
                {(data.currentAmount * data.pricePerShare).toFixed(0)}원
              </BlackTd>
            </tr>
            <tr>
              <BoldTd>한 조각당 가격</BoldTd>
              <BlackTd>{data.pricePerShare.toFixed(0)}원</BlackTd>
            </tr>
            <tr>
              <BoldTd>
                <Web>진행률</Web>
              </BoldTd>
              <PinkTd>
                <Web>
                  <FlexContainer>
                    <ProgressContainer>
                      <ProgressBar>
                        <Progress
                          style={{
                            width:
                              15 * (data.currentAmount / data.totalAmount) +
                              "vw",
                          }}
                        />
                      </ProgressBar>
                    </ProgressContainer>
                    {(data.currentAmount / data.totalAmount) * 100}%
                  </FlexContainer>
                  <GrayFont>
                    총 {data.totalAmount}조각 중{" "}
                    {data.totalAmount - data.currentAmount}조각 남음
                  </GrayFont>
                </Web>
              </PinkTd>
            </tr>
            <tr>
              <td colSpan="2">
                <Mobile>
                  <FlexContainer>
                    <ProgressContainer>
                      <ProgressBar>
                        <Progress
                          style={{
                            width:
                              55 * (data.currentAmount / data.totalAmount) +
                              "vw",
                          }}
                        />
                      </ProgressBar>
                    </ProgressContainer>
                  </FlexContainer>
                </Mobile>
              </td>
            </tr>
            <tr>
              <BoldTd>
                <Mobile>{data.currentAmount}조각</Mobile>
              </BoldTd>
              <BlackTd>
                <Mobile>총 {data.totalAmount}조각</Mobile>
              </BlackTd>
            </tr>
            <tr>
              <td colSpan="2">{buttonComponent}</td>
            </tr>
          </Body>
        </Table>
      </div>
    </Positioner>
  );
};

export default VideoInfo;
