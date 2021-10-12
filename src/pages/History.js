// 3.2 - 거래내역

import styled from "styled-components";
import Transaction from "components/History/Transaction";

const Container = styled.div`
  width: 100%;
  height: max-content;
  padding: 160px 120px 200px 120px;
  @media only screen and (max-width: 1007px) {
    padding: 120px 90px 300px 90px;
  }
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
