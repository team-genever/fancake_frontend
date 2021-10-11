// 3 - 나의 지갑

import React from "react";
import styled from "styled-components";
import Videos from "components/Wallet/Videos";
import UserWallet from "components/Wallet/UserWallet";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 11.5vw 8.3vw 18.4vw 8.3vw;

  @media screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 0;
  }
`;

class Wallet extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        <UserWallet />
        <Videos title="보유 중인 영상" videosType="own" />
        <Videos title="공동구매 중인 영상" videosType="with" />
      </Container>
    );
  }
}

export default Wallet;
