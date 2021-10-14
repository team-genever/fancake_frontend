import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ConfirmModal from "./ConfirmModal";
import RejectModal from "./RejectModal";

const Positioner = styled.div`
  background-color: ${(props) => props.theme.boxLightGray};
  display: flex;
  justify-content: center;
  padding: 50px 0px;

  margin-bottom: 100px; //임시

  @media only screen and (max-width: 640px) {
    padding: 10vw 7vw;
  }
`;

const Table = styled.table`
  text-align: left;
  width: 100%;

  @media only screen and (max-width: 640px) {
    font-size: 3vw;
  }
`;

const Body = styled.body``;

const BoldTd = styled.td`
  font-weight: bold;
  padding: 4px;
  width: 230px;
`;

const PinkTd = styled.td`
  color: ${(props) => props.theme.mainPink};
  font-weight: bold;

  @media only screen and (max-width: 640px) {
    text-align: right;
  }
`;

const BlackTd = styled.td`
  @media only screen and (max-width: 640px) {
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
  height: 13px;
  width: 300px;
  border-radius: 30px;
  padding: 0px;

  @media only screen and (max-width: 640px) {
    width: 80vw;
  }
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

const ButtonContainer = styled.div`
  position: absolute;
  margin-left: 470px;
  margin-top: 20px;

  @media only screen and (max-width: 640px) {
    margin-left: 65vw;
  }
`;

const InputButton = styled.button`
  border-radius: 100%;
  margin: 3px;
  border: none;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.boxLightGray};

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

  @media only screen and (max-width: 640px) {
    width: 80vw;
  }
`;

const Mobile = styled.div`
  //모바일에서 보이는 부분
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

const Web = styled.div`
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const VideoInfo = ({ testdata }) => {
  console.log("testdata in videoInfo is ", testdata);
  const [videoData, setVideoData] = useState({
    video_id: "",
    channel: {
      channelId: "",
      channelTitle: "",
      channelURL: "",
      thubnailURL: "",
    },
    title: "",
    totlaAmount: 0,
    currentAmount: 0,
    pricePerShare: 0,
    marketCap: 0,
    onSale: true,
    expirationDate: "",
  });

  const [buttonComponent, setButton] = useState(
    <Button>로그인 후 이용가능합니다.</Button>
  );

  const [progressComponent, setProgress] = useState(<div></div>);

  const [isLogin, setLogin] = useState(true);
  const [OnSale, setOnSale] = useState(videoData.onSale);

  const [totalPrice, setTotalPrice] = useState(0);
  const [amount, setAmount] = useState(null);

  const [balance, setBalance] = useState(20000); //임시 보유 금액

  const [confirmModal, setConfirmModal] = useState(false);
  const [rejectModal, setRejectModal] = useState(false);

  const onChange = (e) => {
    console.log("value changed");
    //console.log(quantity);
    //console.log(e.target.value);
    setTotalPrice(e.target.value * videoData.pricePerShare);
  };

  const onClick = (e) => {
    console.log(totalPrice);
    if (totalPrice > balance) setRejectModal(true);
    else setConfirmModal(true);
  };

  const ChangeAmount = (e) => {
    switch (e.target.name) {
      case "+":
        setTotalPrice((amount + 1) * videoData.pricePerShare);
        setAmount(amount + 1);
        break;
      case "-":
        if (amount > 0) {
          setTotalPrice((amount - 1) * videoData.pricePerShare);
          setAmount(amount - 1);
        }

        break;
    }
  };

  useEffect(() => {
    setVideoData(testdata);
    setOnSale(testdata.onSale);
  }, []);

  useEffect(() => {
    //로그인 상태, 영상 판매중 여부에 따라 다른 버튼 렌더링

    if (!isLogin) {
      setButton(<Button>로그인 후 이용가능합니다.</Button>);
    } else if (OnSale) {
      setButton(
        <div>
          <div>
            <ButtonContainer>
              <InputButton name="-" onClick={ChangeAmount}>
                –
              </InputButton>
              <InputButton name="+" onClick={ChangeAmount}>
                +
              </InputButton>
            </ButtonContainer>
            <Input
              type="number"
              min={0}
              value={amount}
              placeholder="수량을 입력하세요."
              onChange={onChange}
              disabled
            />
          </div>

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
  }, [isLogin, totalPrice, confirmModal, rejectModal, amount]);

  return (
    <Positioner>
      <div>
        <Table>
          <Body>
            <tr>
              <BoldTd>남은시간</BoldTd>
              <PinkTd>12:13:11</PinkTd>
            </tr>
            <tr>
              <BoldTd>공동구매 목표금액</BoldTd>
              <BlackTd>{videoData.marketCap}원</BlackTd>
            </tr>
            <tr>
              <BoldTd>공동구매 달성액</BoldTd>
              <BlackTd>
                {videoData.currentAmount * videoData.pricePerShare}원
              </BlackTd>
            </tr>
            <tr>
              <BoldTd>한 조각당 가격</BoldTd>
              <BlackTd>{videoData.pricePerShare}원</BlackTd>
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
                              300 *
                                (videoData.currentAmount /
                                  videoData.totlaAmount) +
                              "px",
                          }}
                        />
                      </ProgressBar>
                    </ProgressContainer>
                    {(videoData.currentAmount / videoData.totlaAmount) * 100}%
                  </FlexContainer>
                  <GrayFont>
                    총 {videoData.totlaAmount}조각 중{" "}
                    {videoData.totlaAmount - videoData.currentAmount}조각 남음
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
                              80 *
                                (videoData.currentAmount /
                                  videoData.totlaAmount) +
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
                <Mobile>{videoData.currentAmount}조각</Mobile>
              </BoldTd>
              <BlackTd>
                <Mobile>총 {videoData.totlaAmount}조각</Mobile>
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
