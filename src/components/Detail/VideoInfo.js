import React from "react";
import styled from "styled-components";

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

const Button = styled.div``;

const VideoInfo = () => {
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
              <td colSpan="2"></td>
            </tr>
          </body>
        </Table>
      </div>
    </Positioner>
  );
};

export default VideoInfo;
