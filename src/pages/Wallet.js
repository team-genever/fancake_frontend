// 3 - 나의 지갑

import styled from "styled-components";
import Videos from "../components/Wallet/Videos";
import UserWallet from "../components/Wallet/UserWallet";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 11.5vw 8.3vw 18.4vw 8.3vw;
`;

const Wallet = () => (
  <Container>
    <UserWallet />
    <Videos title="보유 중인 영상" videosType="own" />
    <Videos title="공동구매 중인 영상" videosType="with" />
  </Container>
);

export default Wallet;
