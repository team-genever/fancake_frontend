import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";
import RejectModal from "./RejectModal";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  display: flex;
  justify-content: center;
  padding: 50px 0px;
`;

const Table = styled.td`
  text-align: left;
`;

const BoldTd = styled.td`
  font-weight: bold;
  padding: 4px;
  width: 230px;
`;

const PinkTd = styled.td`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;
`;

const BlackTd = styled.td``;

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
  height: 13px;
  width: 300px;
  border-radius: 30px;
  padding: 0px;
`;

const Progress = styled.div`
  height: 13px;
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(218, 34, 95, 0),
    rgba(218, 34, 95, 0.8)
  );
  width: 300px;
`;

const GrayFont = styled.div`
  font-weight: bold;
  font-size: small;
  color: ${(props) => props.theme.boxGray};
`;

const BoldFont = styled.div`
  font-weight: bold;
  font-size: large;
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

const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: ${(props) => props.theme.boxCountGray};
  border: none;
  padding: 10px 20px;
  margin: 15px 0px;
  :focus {
    outline: none;
  }
`;

const VideoInfo = () => {
  const [buttonComponent, setButton] = useState(
    <Button>로그인 후 이용가능합니다.</Button>
  );
  const [isLogin, setLogin] = useState(true);
  const [OnSale, setOnSale] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [balance, setBalance] = useState(20000); //임시 보유 금액

  const [confirmModal, setConfirmModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const onChange = (e) => {
    console.log("value changed");
    setQuantity(e.target.value);
    //console.log(quantity);
    //console.log(e.target.value);
    setTotalPrice(e.target.value * 12000);
  };

  const onClick = (e) => {
    console.log(totalPrice);
    if (totalPrice > balance) setRejectModal(true);
    else setConfirmModal(true);
  };

  useEffect(() => {
    //로그인 상태, 영상 판매중 여부에 따라 다른 버튼 렌더링

    if (!isLogin) {
      setButton(<Button>로그인 후 이용가능합니다.</Button>);
    } else if (OnSale) {
      setButton(
        <div>
          <Input
            type="number"
            min={0}
            placeholder="수량을 입력하세요."
            onChange={onChange}
          />
          <FlexContainer>
            <BoldFont>총 주문금액</BoldFont>
            <BoldFont>
              {totalPrice
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              원
            </BoldFont>
          </FlexContainer>
          <Button onClick={onClick}>구매하기</Button>
          {confirmModal ? <ConfirmModal setModal={setConfirmModal} /> : <></>}
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
  }, [isLogin, totalPrice, confirmModal, rejectModal]);

  return (
    <Positioner>
      <div>
        <Table>
          <body>
            <tr>
              <BoldTd>남은시간</BoldTd>
              <PinkTd>12:13:11</PinkTd>
            </tr>
            <tr>
              <BoldTd>공동구매 목표금액</BoldTd>
              <BlackTd>1,000,000원</BlackTd>
            </tr>
            <tr>
              <BoldTd>공동구매 달성액</BoldTd>
              <BlackTd>800,000원</BlackTd>
            </tr>
            <tr>
              <BoldTd>한 조각당 가격</BoldTd>
              <BlackTd>12,000원</BlackTd>
            </tr>
            <tr>
              <BoldTd>진행률</BoldTd>
              <PinkTd>
                <FlexContainer>
                  <ProgressContainer>
                    <ProgressBar>
                      <Progress />
                    </ProgressBar>
                  </ProgressContainer>
                  100%
                </FlexContainer>
                <GrayFont>총 100조각 중 0조각 남음</GrayFont>
              </PinkTd>
            </tr>
            <tr>
              <td colSpan="2">{buttonComponent}</td>
            </tr>
          </body>
        </Table>
      </div>
    </Positioner>
  );
};

export default VideoInfo;
