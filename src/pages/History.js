// 3.2 - 거래내역

import styled from "styled-components";
import Transaction from "components/History/Transaction";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 11.5vw 8.3vw 18.4vw 8.3vw;

  @media only screen and (max-width: 640px) {
    padding: 21vw 5vw;
    padding-bottom: 0;
    height: 95vh;
  }
`;

const History = () => (
  <Container>
    <Transaction />
  </Container>
);

export default History;
